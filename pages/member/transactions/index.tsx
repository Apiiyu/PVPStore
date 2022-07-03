import jwtDecode from 'jwt-decode'
import React from 'react'
import { GetServerSideProps } from 'data-types'
import Sidebar from 'components/organisms/General/Sidebar'
import TransactionContent from 'components/organisms/Pages/Transactions/TransactionContent'

export default function Transactions() {
  return (
    <>
      <section className="transactions overflow-auto">
        <Sidebar activeMenu='transactions' />
        <TransactionContent />
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
    return {
      props: {}
    }
  }
}
