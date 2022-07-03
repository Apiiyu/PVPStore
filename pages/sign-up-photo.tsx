import Image from 'next/image'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { setSignUp } from 'services/authentication/auth'
import { getGameCategory } from 'services/players'
import { toast } from 'react-toastify'
import { CategoryTypes } from 'data-types'

export default function SignUpFoto() {
  const [category, setCategory] = useState([])
  const [favorite, setFavorite] = useState('')
  const [avatar, setAvatar] = useState<any>('')
  const [avatarPreview, setAvatarPreview] = useState('')
  const [localForm, setLocalForm] = useState({
    name: '',
    email: '',
    password: ''
  })
  const router = useRouter()

  const getData = useCallback(async () => {
    const data = await getGameCategory()
    setCategory(data)
  }, [getGameCategory])

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    const getLocalForm = localStorage.getItem('payload-signup')
    setLocalForm(JSON.parse(getLocalForm!)) //--> Not null
  }, [])

  const onSubmit = async () => {
    const getLocalForm = localStorage.getItem('payload-signup')
    const form = JSON.parse(getLocalForm!) //--> Not null

    const formData = new FormData()
    formData.append('email', form.email)
    formData.append('name', form.name)
    formData.append('username', form.name)
    formData.append('password', form.password)
    formData.append('phoneNumber', '082120806320')
    formData.append('favorite', favorite)
    formData.append('avatar', avatar)

    const result = await setSignUp(formData)
    if(result.error) {
      toast.error(result.message)
    } else {
      toast.success('Successfully create new account!')
      localStorage.removeItem('payload-signup')
      setTimeout(() => {
        router.push('/sign-up-success')
      }, 2500)
    }
  }
  return (
    <>
      <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
        <div className="container mx-auto">
          <form action="">
            <div className="form-input d-md-block d-flex flex-column">
              <div>
                <div className="mb-20">
                  <div className="image-upload text-center">
                    <label htmlFor="avatar">
                      { 
                        avatarPreview ? <img src={avatarPreview} className="img-upload" alt="upload" />
                        : <Image src='/icon/upload.svg' width={120} height={120} alt="upload" />
                      }
                    </label>
                    <input id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" onChange={(event) => {
                      const image = event.target.files![0]
                      setAvatarPreview(URL.createObjectURL(image))
                      return setAvatar(image)
                    }}  />
                  </div>
                </div>
                <h2 className="fw-bold text-xl text-center color-palette-1 m-0">{localForm.name}</h2>
                <p className="text-lg text-center color-palette-1 m-0">{localForm.email}</p>
                <div className="pt-50 pb-50">
                  <label htmlFor="category" className="form-label text-lg fw-medium color-palette-1 mb-10">Favorite Game</label>
                  <select id="category" value={favorite} onChange={(event) => setFavorite(event.target.value)} name="category" className="form-select d-block w-100 rounded-pill text-lg" aria-label="Favorite Game">
                    <option value="" disabled selected>Select Category</option>
                    { category.map((item: CategoryTypes) => {
                      return <option key={item._id} value={item._id}>{item.name}</option>
                    }) }
                  </select>
                </div>
              </div>

              <div className="button-group d-flex flex-column mx-auto">
                <button type='button' onClick={onSubmit} className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16" role="button">Create My Account</button>
                  <a className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15" href="#"
                      role="button">Terms &
                      Conditions</a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
