import { GetServerSideProps, HistoryTransactionTypes, JWTPayloadTypes, UserTypes } from 'data-types'
import jwtDecode from 'jwt-decode'
import React from 'react'
import TransactionDetailContent from 'components/organisms/Pages/Transactions/TransactionDetailContent'
import { getTransactionDetail } from 'services/member'

interface TransactionDetailsProps {
  transactionDetail: HistoryTransactionTypes
}

export default function TransactionDetails(props: TransactionDetailsProps) {
  const { transactionDetail } = props

  return (
    <>
      <section className="transactions-detail overflow-auto">
        <TransactionDetailContent data={transactionDetail}/>
      </section>
    </>
  )
}

// --> Logic SSR (Server Side Rendering)
export const getServerSideProps = async ({ req, params }: GetServerSideProps) => {
  const { access_token } = req.cookies
  const { trxID } = params

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
    const result = await getTransactionDetail(trxID, jwtToken)

    return {
      props: {
        transactionDetail: result.data
      }
    }
  }
}
