import Link from 'next/link'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import { JWTPayloadTypes, UserTypes } from 'services/players/data-types';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify'

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false)
  const [userData, setUserData] = useState({
    id: '',
    email: '',
    name: '',
    username: '',
    avatar: '',
  })
  const router = useRouter()

  useEffect(() => {
    const token = Cookies.get('access_token')
    if(token) {
      const jwtToken = atob(token) // --> Reverse btoa()
      const payload:JWTPayloadTypes = jwt_decode(jwtToken)
      const user:UserTypes = payload.data
      const BASE_IMG = process.env.NEXT_PUBLIC_BASE_IMG
      user.avatar = `${BASE_IMG}/players/${user.avatar}`
      setIsLogin(true)
      setUserData(user)
    }
  }, [])

  const onLogout = () => {
    Cookies.remove('access_token')
    toast.success('Successfully sign out your account!')
    setTimeout(() => {
      setIsLogin(false)
      router.push('/')
    }, 2500)
  }

  if(isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
      <div className="vertical-line d-lg-block d-none"></div>
      <div>
        <a className="dropdown-toggle ms-lg-40" href="#" role="button" id="dropdownMenuLink"
            data-bs-toggle="dropdown" aria-expanded="false">
          <img src={userData.avatar} className="rounded-circle" width="40" height="40"
              alt="" />
        </a>

          <ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
              <li>
                <Link href="/member">
                  <a className="dropdown-item text-lg color-palette-2">My Profile</a>
                </Link>
              </li>
              <li>
                <Link href="/member-overview">
                  <a className="dropdown-item text-lg color-palette-2" >Wallet</a>
                </Link>
              </li>
              <li>
                <Link href="/member/edit-profile">
                  <a className="dropdown-item text-lg color-palette-2">Account Settings</a>
                </Link>
              </li>
              <li onClick={onLogout}>
                <button type='button' className="dropdown-item text-lg color-palette-2">Sign Out</button>
              </li>
          </ul>
      </div>
    </li>
    )
  }
  return (
    <li className="nav-item my-auto">
      <Link href='/sign-in'>
        <a className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
         role="button">Sign In</a>
      </Link>
    </li>
  )
}
