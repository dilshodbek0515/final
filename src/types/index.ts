export interface Products {
  id: string
  title: string
  description: string
  star: number
  price: number
  images: string[]
  size: string
}

export interface Comment {
  id: string
  productId: string
  text: string
  author: string
  star: number
  createdAt: number
}

export type Cart = {
  id: number
  title: string
  price: number
  quantity: number
  image: string[]
  amount: number
}
