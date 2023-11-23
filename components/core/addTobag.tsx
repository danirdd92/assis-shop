"use client";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/sanity";
import { CartItem } from "@/lib/types";
import { useShoppingCart } from "use-shopping-cart";

type Props = {
  item: CartItem;
};

export const AddToCart = ({ item }: Props) => {
  const { addItem, handleCartClick } = useShoppingCart();

  const product: CartItem = {
    _id: item._id,
    sku: item._id,
    name: item.name,
    description: item?.description || "",
    price: item.price,
    currency: "USD",
    image: urlFor(item.image).url(),
  };

  const onClickHandler = () => {
    addItem(product);
    handleCartClick();
  };

  return <Button onClick={() => onClickHandler()}>Add to Cart</Button>;
};
