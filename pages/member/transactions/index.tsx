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


