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
  avatar: string
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