import { useRouter } from "next/router"
import { useState } from "react"
import { toast } from 'react-toastify'
import { setCheckout } from "services/players"

export default function CheckoutConfirmation() {
  const [checkbox, setCheckbox] = useState(false)
  const router = useRouter()

  const onSubmit = async () => {
    if(!checkbox) {
      toast.error('Make sure you has been transferred the money!')
    }
    
    const dataItemLocal = localStorage.getItem('data-item')
    const dataTopUpLocal = localStorage.getItem('data-topup')

    const dataItem = JSON.parse(dataItemLocal!)
    const dataTopUp = JSON.parse(dataTopUpLocal!)
    const payload = {
      voucher: dataItem._id,
      nominal: dataTopUp.nominalItem._id,
      payment: dataTopUp.paymentMethod.payment._id,
      bank: dataTopUp.paymentMethod.bank._id,
      name: dataTopUp.bankAccountName,
      accountUser: dataTopUp.verifyID
    }

    const result = await setCheckout(payload)
    if(result.error) {
      toast.error(result.message)
    } else {
      toast.success(result.message)
      router.push('/complete-checkout')
    }
  }
  
  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">I have transferred the money
        <input type="checkbox" checked={checkbox} onChange={() => setCheckbox(!checkbox)} />
        <span className="checkmark"></span>
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          role="button" onClick={onSubmit}>Confirm Payment</button>
      </div>
    </>
  )
}
