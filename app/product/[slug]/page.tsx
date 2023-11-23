import { Button } from "@/components/ui/button";
import { client, queries, urlFor } from "@/lib/sanity";
import type { ProductDto } from "@/lib/types";
import Image from "next/image";

async function getProduct(slug: string) {
  const data = (await client.fetch(queries.GET_PROD(slug))) as ProductDto;
  return data;
}

type Props = {
  params: { slug: string };
};

export default async function ProductPage({ params }: Props) {
  const product = await getProduct(params.slug);
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <Image
            src={urlFor(product.image).url()}
            alt={product.name}
            className="block h-full w-full object-cover object-center cursor-pointer"
            width={500}
            height={500}
          />

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {product.category}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {product.name}
              </h2>
            </div>

            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-xl">
                  ${product.price}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
