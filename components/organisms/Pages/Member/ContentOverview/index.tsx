import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { getMemberOverview } from 'services/member'
import { HistoryTransactionTypes, TopUpCategoriesTypes } from 'data-types'
import Category from './Category'
import TableRow from './TableRow'

export default function ContentOverview() {
  const [count, setCount] = useState([])
  const [data, setData] = useState([])

  const getData = useCallback( async () => {
    const result = await getMemberOverview()
      if(result.error) {
        toast.error(result.message)
      } else {
        setCount(result.data.counts)
        setData(result.data.history)
      }
  }, [])

  useEffect( () => {
    getData()
  }, [])

  const BASE_IMG = process.env.NEXT_PUBLIC_BASE_IMG
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
          <div className="top-up-categories mb-30">
              <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
              <div className="main-content">
                  <div className="row">
                    {count.map((item: TopUpCategoriesTypes) => {
                      return (
                        <Category key={item._id} nominal={item.value} icon="ic-desktop"> 
                          {item.name}
                        </Category>
                      )
                    })}
                  </div>
              </div>
          </div>
          <div className="latest-transaction">
              <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
              <div className="main-content main-content-table overflow-auto">
                  <table className="table table-borderless">
                      <thead>
                          <tr className="color-palette-1">
                              <th className="text-start" scope="col">Game</th>
                              <th scope="col">Item</th>
                              <th scope="col">Price</th>
                              <th scope="col">Status</th>
                          </tr>
                      </thead>
                      <tbody>
                        {data.map((item: HistoryTransactionTypes) => {
                          return (
                            <TableRow 
                              key={item._id}
                              title={item.historyVoucherTopUp.gameName} 
                              category={item.historyVoucherTopUp.category} 
                              item={item.historyVoucherTopUp.coinQuantity} 
                              price={item.historyVoucherTopUp.price} 
                              status={item.status} 
                              image={`${BASE_IMG}/${item.historyVoucherTopUp.thumbnail}`}/>
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
