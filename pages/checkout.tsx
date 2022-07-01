import React from 'react'
import CheckoutItem from '../components/organisms/Pages/Checkout/CheckoutItem'
import CheckoutDetail from '../components/organisms/Pages/Checkout/CheckoutDetail'
import CheckoutConfirmation from '../components/organisms/Pages/Checkout/CheckoutConfirmation'
import Image from 'next/image'
import jwtDecode from 'jwt-decode'
import { JWTPayloadTypes, UserTypes } from 'services/players/data-types'
import { GetServerSideProps } from 'next'

interface CheckoutProps {
  userData: UserTypes
}

export default function checkout(props: CheckoutProps) {
  const {userData} = props

  return <>
    <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
        <div className="container-fluid">
            <div className="logo text-md-center text-start pb-50">
                <a className="" href="#">
                  <Image src="/icon/logo.svg" width={60} height={60} alt="icon" />
                </a>
            </div>
            <div className="title-text pt-md-50 pt-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
                <p className="text-lg color-palette-1 mb-0">Waktunya meningkatkan cara bermain</p>
            </div>
            <CheckoutItem />
            <hr />
            <CheckoutDetail />
            <CheckoutConfirmation />
        </div>
    </section>
  </>
}

// --> Logic SSR (Server Side Rendering)
export const getServerSideProps = async ({req}: GetServerSideProps) => {
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