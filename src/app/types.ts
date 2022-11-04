export interface Product {
  length: number;
  id: number,
  title: string,
  binomialName: string,
  description: string,
  ukOnly: boolean,
  image1: string,
  image2: string,
  accentColor: string,
  backgroundColor: string,
  textColor: string,
  order: number,
  price: string
}


export type productDetailsProps = {
  route: { params:{paramKey:string} }
}

export type ImageCarouselProps = {
  data: Product[] | any
}