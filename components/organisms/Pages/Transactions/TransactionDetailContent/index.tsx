import { HistoryTransactionTypes } from 'data-types'
import React from 'react'
import Row from './Row'

interface TransactionDetailContentProps {
  data: HistoryTransactionTypes
}

export default function TransactionDetailContent(props: TransactionDetailContentProps) {
  const { data } = props
  const BASE_IMG = process.env.NEXT_PUBLIC_BASE_IMG
  
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Details {data._id}</h2>
          <div className="details">
              <div className="main-content main-content-card overflow-auto">
                  <section className="checkout mx-auto">
                      <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
                          <div className="game-checkout d-flex flex-row align-items-center">
                              <div className="pe-4">
                                  <div className="cropped">
                                      <img src={`${BASE_IMG}/${data.historyVoucherTopUp.thumbnail}`} width="200" height="130" className="img-fluid" alt=""/>
                                  </div>
                              </div>
                              <div>
                                  <p className="fw-bold text-xl color-palette-1 mb-10">{data.historyVoucherTopUp.gameName}</p>
                                  <p className="color-palette-2 m-0">Category: {data.historyVoucherTopUp.category}</p>
                              </div>
                          </div>
                          <div>
                              <p className="fw-medium text-center label pending m-0 rounded-pill">{data.status}</p>
                          </div>
                      </div>
                      <hr />
                      <div className="purchase pt-30">
                          <h2 className="fw-bold text-xl color-palette-1 mb-20">Purchase Details</h2>
                          <Row label='Your Game ID' value={data.accountUser} />
                          <Row label='Order ID' value='#GG001' />
                          <Row label='Item' value={`${data.historyVoucherTopUp.coinQuantity} ${data.historyVoucherTopUp.coinName}`} />
                          <Row label='Price' value={data.historyVoucherTopUp.price} />
                          <Row label='Tax (10)' value={data.tax} />
                          <Row label='Total' value={data.total} customClass="color-palette-4" />
                      </div>
                      <div className="payment pt-10 pb-10">
                          <h2 className="fw-bold text-xl color-palette-1 mb-20">Payment Informations</h2>
                          <Row label='Your Account Name' value={data.name} />
                          <Row label='Type' value={data.historyPayment.type} />
                          <Row label='Bank Name' value={data.historyPayment.bankName} />
                          <Row label='Bank Account Name' value={data.historyPayment.name} />
                          <Row label='Bank' value={data.historyPayment.accountNumber} />
                      </div>
                      <div className="d-md-block d-flex flex-column w-100">
                          <a className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg" href="#"
                              role="button">WhatsApp ke Admin</a>
                      </div>
                  </section>
              </div>
          </div>
      </div>
  </main>
  )
}
