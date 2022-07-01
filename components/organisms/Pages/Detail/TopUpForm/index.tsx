import { useRouter } from "next/router"
import { useState } from "react"
import { BankTypes, NominalsTypes, PaymentTypes } from "services/players/data-types"
import NominalItem from "./NominalItem"
import PaymentMethod from "./PaymentMethod"
import { toast } from 'react-toastify'

interface TopUpFormProps {
  nominals: NominalsTypes[],
  payments: PaymentTypes[]
}

export default function TopUpForm (props: TopUpFormProps) {
  const {nominals, payments} = props
  const [verifyID, setVerifyID] = useState('')
  const [bankAccountName, setBankAccountName ] = useState('')
  const [nominalItem, setNonminalItem] = useState({})
  const [paymentMethod, setPaymentMethod] = useState({})
  const router = useRouter()

  const onNominalItemClick = (data: NominalsTypes) => {
    localStorage.setItem('nominal-item', JSON.stringify(data))
    setNonminalItem(data)
  }

  const onPaymentChange = (payment: PaymentTypes, bank: BankTypes) => {
    const data = {
      payment,
      bank
    }
    localStorage.setItem('payment-method', JSON.stringify(data))
    setPaymentMethod(data)
  }

  const onSubmit = () => {
    if(verifyID === '' || bankAccountName === '' || nominalItem === {} || paymentMethod === {}) {
      toast.warn('Please fill all data!')
    } else {
      const data = {
        verifyID,
        bankAccountName,
        nominalItem,
        paymentMethod
      }

      localStorage.setItem('data-topup', JSON.stringify(data))
      router.push('/checkout')
    }
  }

  return (
    <form action="./checkout.html" method="POST">
      <div className="pt-md-50 pt-30">
          <div className="">
              <label htmlFor="ID" className="form-label text-lg fw-medium color-palette-1 mb-10">Verify
                  ID</label>
              <input 
                type="text" className="form-control rounded-pill text-lg" id="ID" name="ID"
                value={verifyID} onChange={(event) => setVerifyID(event.target.value)} aria-describedby="verifyID" placeholder="Enter your ID" />
          </div>
      </div>
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Nominal Top Up</p>
        <div className="row justify-content-between">
          {nominals.map((nominal) => {
              return <NominalItem key={nominal._id} id={nominal._id} coinQuantity={nominal.coinQuantity} coinName={nominal.coinName} 
              price={nominal.price} onChange={() => onNominalItemClick(nominal)} />
          })}
          <div className="col-lg-4 col-sm-6"></div>
        </div>
      </div>
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Payment Method</p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            {payments.map((payment) => {
              return payment.banks.map((bank) => (
                <PaymentMethod key={payment._id} bankID={bank._id} bankName={bank.bankName} type={payment.type} onChange={() => onPaymentChange(payment, bank)}/>
              ))
            })}
            <div className="col-lg-4 col-sm-6"></div>
          </div>
        </fieldset>
      </div>
      <div className="pb-50">
          <label htmlFor="bankAccount" className="form-label text-lg fw-medium color-palette-1 mb-10">Bank Account Name</label>
          <input type="text" className="form-control rounded-pill text-lg" id="bankAccount"
              name="bankAccount" aria-describedby="bankAccount"
              placeholder="Enter your Bank Account Name" value={bankAccountName} onChange={(event) => setBankAccountName(event.target.value)} />
      </div>
      <div className="d-sm-block d-flex flex-column w-100">
          <button type="button" className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
          onClick={onSubmit}>Continue</button>
      </div>
  </form>
  )
}
