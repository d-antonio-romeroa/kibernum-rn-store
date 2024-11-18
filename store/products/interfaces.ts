export interface FetchProductByIdProps {
  id: number;
}

export interface IProduct {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  category:    IProductCategory;
  image:       string;
  rating:      IProductRating;
}

export enum IProductCategory {
  Electronics = "electronics",
  Jewelery = "jewelery",
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}

export interface IProductRating {
  rate:  number;
  count: number;
}

export interface InitialStateProps {
  loading: boolean,
  error: string | null,
  success: boolean,
  products: IProduct[];
  fetchProducts: () => void,
  fetchProductById: (id: string) => Promise<IProduct | undefined>,
  resetStore: () => void,
}
