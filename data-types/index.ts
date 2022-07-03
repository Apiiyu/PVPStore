export interface CategoryTypes {
  _id: string,
  name: string,
}

export interface GameItemTypes {
  _id: string,
  status: string,
  name: string,
  thumbnail: string,
  category: CategoryTypes
}

export interface BankTypes {
  _id: string,
  name: string,
  bankName: string,
  accountNumber: number
}
export interface PaymentTypes {
  _id: string,
  type: string,
  status: string,
  banks: BankTypes[]
}

export interface NominalsTypes {
  _id: string,
  coinQuantity: number,
  coinName: string,
  price:number
}

export interface UserTypes {
  id: string,
  username: string,
  name: string,
  email: string,
  password: string,
  phone: string,
  avatar: string,
  phoneNumber: string
}

export interface JWTPayloadTypes {
  data: UserTypes
}

export interface CheckoutTypes {
  voucher: string,
  nominal: string,
  payment: string,
  bank: string,
  name: string,
  accountUser: string,
}

export interface GetServerSideProps {
  req: {
    cookies: {
      access_token: string,
    }
  },
  params: {
    trxID: string
  }
}

export interface historyVoucherTopUpTypes {
  _id: string,
  category: string,
  coinName: string,
  coinQuantity: number,
  gameName: string,
  price: number,
  thumbnail: string
}

export interface TopUpCategoriesTypes {
  _id: string,
  name: string,
  value: number,
}

export interface HistoryPaymentTypes {
  accountNumber: string,
  bankName: string,
  name: string,
  type: string
}

export interface HistoryTransactionTypes {
  _id: string,
  name: string,
  accountUser: string,
  historyPayment: HistoryPaymentTypes
  historyVoucherTopUp: historyVoucherTopUpTypes,
  value: number,
  status: string,
  tax: number,
  total: number,
}