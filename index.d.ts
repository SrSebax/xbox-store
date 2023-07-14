type Url = string
type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[]

type TProductId = string

type TProductAttributes = {
  description: string
  genre: string
  platform: string
  releaseDate: string
}

type TProduct = {
  id: TProductId
  name: string
  sku: string
  price: number
  image: Url
  attributes: TProductAttributes
}

type TAPIGameDetailResponse = TProduct

type TAPIGameResponse = {
  lenght: number
  data: TProduct[]
  error?: string
}
