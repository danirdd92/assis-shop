"use client";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { DeleteIcon, XCircleIcon } from "lucide-react";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "../ui/button";

export const ShoppingCartModal = () => {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
  } = useShoppingCart();

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={handleCartClick}>
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1">
            <ul className="-my-6 divide-y divide-gray-200 ">
              {cartCount === 0 ? (
                <p>You dont have items</p>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li key={entry.id} className="flex py-6 ">
                      <div className="h-full w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 object-contain object-center">
                        <Image
                          src={entry.image as string}
                          alt={entry.name}
                          width={175}
                          height={175}
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{entry.name}</h3>
                            <span className="inline-block ml-4">${entry.price}</span>
                          </div>
                          <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                            {entry.description}
                          </p>
                        </div>

                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">QTY: {entry.quantity}</p>

                          <div className="flex">
                            <button
                              type="button"
                              onClick={() => removeItem(entry.id)}
                              className="font-medium text-primary hover:text-primary/80"
                            >
                              <XCircleIcon className="text-red-600" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 pb-12 sm:px-6">
            <div className="flex justify-between text-base font-bold text-gray-900">
              <p>SubTotal</p>
              <p>${totalPrice}</p>
            </div>

            <div className="mt-6">
              <Button className="w-full uppercase font-bold text-md">Checkout</Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
