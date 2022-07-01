import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { JWTPayloadTypes, UserTypes } from 'services/players/data-types'
import jwtDecode from 'jwt-decode'

export default function Profile() {
  const [userData, setUserData] = useState({
    id: '',
    email: '',
    name: '',
    username: '',
    avatar: '',
  })

  useEffect(() => {
    const token = Cookies.get('access_token')
    
    if(token) {
      const jwtToken = atob(token) // --> Reverse btoa()
      const payload:JWTPayloadTypes = jwtDecode(jwtToken)
      const user:UserTypes = payload.data
      console.log({user})
      const BASE_IMG = process.env.NEXT_PUBLIC_BASE_IMG
      user.avatar = `${BASE_IMG}/players/${user.avatar}`
      setUserData(user)
    }
  }, [])
  
  return (
    <div className="user text-center pb-50 pe-30">
      <img src={userData.avatar} width="90" height="90" className="img-fluid mb-20 rounded-circle" />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{userData.username}</h2>
      <p className="color-palette-2 m-0">{userData.email}</p>
  </div>
  )
}