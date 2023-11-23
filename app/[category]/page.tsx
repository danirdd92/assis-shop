import { ProductPreview } from "@/components/product/productPreview";
import { client, queries } from "@/lib/sanity";
import { ProductDto } from "@/lib/types";

async function getProductsByCategory(category: string) {
  const data = (await client.fetch(queries.GET_BY_CATEGORY(category))) as ProductDto[];
  return data;
}

type Props = {
  params: {
    category: string;
  };
};

export default async function CategoryPage({ params }: Props) {
  const products = await getProductsByCategory(params.category);

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {params.category}
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductPreview key={product._id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
