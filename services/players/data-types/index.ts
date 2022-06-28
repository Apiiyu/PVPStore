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