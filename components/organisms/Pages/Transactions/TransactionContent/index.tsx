import { HistoryTransactionTypes } from 'data-types'
import React, { useCallback, useEffect, useState } from 'react'
import NumberFormat from 'react-number-format'
import { toast } from 'react-toastify'
import { getMemberTransactions } from 'services/member'
import ButtonTabs from './ButtonTabs'
import TableRow from './TableRow'

export default function TransactionContent() {
  const [historyTransactions, setHistoryTransactions] = useState([])
  const [totalTransactions, setTotalTransactions] = useState(0)
  const [tab, setTab] = useState('all')
  const BASE_IMG = process.env.NEXT_PUBLIC_BASE_IMG

  const getData = useCallback(async (value) => {
    const result = await getMemberTransactions(value)
      if(result.error) {
          toast.error(result.message)
        } else {
          setHistoryTransactions(result.data.history)
          setTotalTransactions(result.data.total)
        }
  }, [])

  useEffect(() => {
    getData(tab)
  }, [])

  const onTabClick = (value: string) => {
    setTab(value)
    getData(value)
  }

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">My Transactions</h2>
          <div className="mb-30">
              <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
              <NumberFormat value={totalTransactions} className="text-5xl fw-medium color-palette-1" prefix="Rp. " displayType="text" thousandSeparator="." decimalSeparator=","/>
          </div>
          <div className="row mt-30 mb-20">
              <div className="col-lg-12 col-12 main-content">
                  <div id="list_status_title">
                    <ButtonTabs title="All Trx" active={tab === 'all'} onClick={() => onTabClick('all')} />
                    <ButtonTabs title="Success" active={tab === 'Success'} onClick={() => onTabClick('Success')} />
                    <ButtonTabs title="Pending" active={tab ==='Pending'} onClick={() => onTabClick('Pending')} />
                    <ButtonTabs title="Failed" active={tab ==='Failed'} onClick={() => onTabClick('Failed')} />
                  </div>
              </div>
          </div>
          <div className="latest-transaction">
              <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
              <div className="main-content main-content-table overflow-auto">
                  <table className="table table-borderless">
                      <thead>
                          <tr className="color-palette-1">
                              <th className="" scope="col">Game</th>
                              <th scope="col">Item</th>
                              <th scope="col">Price</th>
                              <th scope="col">Status</th>
                              <th scope="col">Action</th>
                          </tr>
                      </thead>
                      <tbody id="list_status_item">
                        {historyTransactions.map((item: HistoryTransactionTypes) => {
                          return (
                            <TableRow 
                              key={item._id} 
                              trxID={item._id}
                              image={`${BASE_IMG}/${item.historyVoucherTopUp.thumbnail}`} 
                              title={item.historyVoucherTopUp.gameName} 
                              category={item.historyVoucherTopUp.category} 
                              item={item.historyVoucherTopUp.coinQuantity} 
                              price={item.historyVoucherTopUp.price} 
                              status={item.status} 
                            />
                          )
                        })}
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  </main>
  )
}
