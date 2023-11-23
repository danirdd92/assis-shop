import { client, queries } from "@/lib/sanity";
import { ProductDto } from "@/lib/types";
import { ArrowRight } from "lucide-react";
import { ProductPreview } from "@/components/product/productPreview";
import Link from "next/link";

async function getNewest() {
  return (await client.fetch(queries.GET_NEWSET)) as ProductDto[];
}

export const Newest = async () => {
  const data = await getNewest();

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Fresh</h2>

          <Link className="text-primary flex items-center gap-x-1" href="/all">
            See All
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <ProductPreview key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
