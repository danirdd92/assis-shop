export type ProductDto = {
  _id: string;
  name: string;
  image: string;
  price: number;
  description?: string;
  unit: string;
  slug: string;
  category: string;
};

export type CartItem = Pick<
  ProductDto,
  "_id" | "name" | "description" | "price" | "image"
> & { currency: "USD"; sku: string };
