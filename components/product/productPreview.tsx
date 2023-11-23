import Image from "next/image";
import Link from "next/link";
import type { ProductDto } from "@/lib/types";

type Props = {
  product: ProductDto;
};

export const ProductPreview = ({ product }: Props) => {
  return (
    <article key={product._id} className="group relative">
      <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:-h-80">
        <Image
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center "
          width={300}
          height={300}
        />
      </div>

      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={`product/${product.slug}`} className="">
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">
          ${product.price}/{product.unit}
        </p>
      </div>
    </article>
  );
};
