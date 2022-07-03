import jwtDecode from 'jwt-decode'
import React from 'react'
import { GetServerSideProps, JWTPayloadTypes, UserTypes } from 'data-types'
import Sidebar from 'components/organisms/General/Sidebar'
import ContentOverview from 'components/organisms/Pages/Member/ContentOverview'

export default function Member() {
  return (
    <>
        <section className="overview overflow-auto">
          <Sidebar activeMenu='overview'/>
          <ContentOverview />
        </section>
    </>
  )
}

// --> Logic SSR (Server Side Rendering)
export const getServerSideProps = async ({ req }: GetServerSideProps) => {
  const { access_token } = req.cookies
  if(!access_token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      }
    }
  } else {  
    const jwtToken = Buffer.from(access_token, 'base64').toString('ascii') // --> Convert base64 to original jwt, (use in SSR, if in Client using function atob)
    const payload:JWTPayloadTypes = jwtDecode(jwtToken)
    const userData:UserTypes = payload.data
    const BASE_IMG = process.env.NEXT_PUBLIC_BASE_IMG
    userData.avatar = `${BASE_IMG}/players/${userData.avatar}`
    
    return {
      props: {
        userData
      }
    }
  }
}
