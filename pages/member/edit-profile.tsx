import React, { useEffect, useState } from 'react'
import Sidebar from 'components/organisms/General/Sidebar'
import Input from 'components/atoms/Input'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import { JWTPayloadTypes, UserTypes } from 'data-types'
import { updateProfile } from 'services/member'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

interface UserStateTypes {
  id: string,
  name: string,
  email: string,
  avatar: any,
  phoneNumber: string
}

export default function EditProfile() {
  const [userData, setUserData] = useState<UserStateTypes>({
    id: '',
    name: '',
    email: '',
    phoneNumber: '',
    avatar: '',
  })
  const [avatarPreview, setAvatarPreview] = useState('/')
  const router = useRouter()

  useEffect(() => {
    const access_token = Cookies.get('access_token')
    if(access_token) {
      const jwtToken = atob(access_token)
      const payload: JWTPayloadTypes = jwtDecode(jwtToken)
      const userFromPayload: UserTypes = payload.data
      setUserData(userFromPayload)
    }
  }, [])

  const onSubmit = async () => {
    const formData = new FormData()
    formData.append('name', userData.name)
    formData.append('avatar', userData.avatar)
    formData.append('phoneNumber', userData.phoneNumber)

    const result = await updateProfile(userData.id, formData)
    if(result.error) {
      toast.error(result.error)
    } else {
      toast.success('Successfully update your account!')
      Cookies.remove('access_token')

      setTimeout(() => {
        router.push('/sign-in')
      }, 2500)
    }
  }

  return (
    <>
      <Sidebar activeMenu='settings'/>
      <section className="edit-profile overflow-auto">
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
            <div className="bg-card pt-30 ps-30 pe-30 pb-30">
              <form action="">
                <div className="photo d-flex">
                  <div className="image-upload">
                    <label htmlFor="avatar">
                      {avatarPreview === '/' ? (
                        <img 
                          src={userData.avatar} 
                          width={90} 
                          height={90} 
                          className="rounded-circle"
                        />
                      ) : (
                        <img 
                          src={avatarPreview} 
                          width={90} 
                          height={90} 
                          className="rounded-circle"
                        />
                      )
                    }
                    </label>
                    <input 
                      id="avatar" 
                      type="file" 
                      name="avatar" 
                      accept="image/png, image/jpeg"
                      onChange={(event) => {
                        const image = event.target.files![0]
                        setAvatarPreview(URL.createObjectURL(image))
                        return setUserData({
                          ...userData,
                          avatar: image
                        })
                      }} 
                    />
                  </div>
                </div>
                <div className="pt-30">
                  <Input label='Full Name' htmlFor='Fullname' inputType='text' value={userData.name} onChange={(event) => setUserData({
                    ...userData,
                    name: event.target.value
                  })}/>
                </div>
                <div className="pt-30">
                  <Input label='Email' htmlFor='Email' inputType='text' value={userData.email} disabled/>
                </div>
                <div className="pt-30">
                  <Input label='Phone' htmlFor='Phone' inputType='tel' value={userData.phoneNumber} onChange={(event) => setUserData({
                    ...userData,
                    phoneNumber: event.target.value
                  })} />
                </div>
                <div className="button-group d-flex flex-column pt-50">
                  <button type="button" className="btn btn-save fw-medium text-lg text-white rounded-pill"
                      role="button" onClick={onSubmit}>Save My Profile</button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}
