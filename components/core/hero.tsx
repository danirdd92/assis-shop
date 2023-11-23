import { client, queries, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

async function getHeroImages() {
  return await client.fetch(queries.HERO_IMAGES);
}

export const Hero = async () => {
  const images = await getHeroImages();

  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold uppercase text-black sm:text-5xl md:mb-8 md:text-5xl">
            <span className="text-primary ">Peak Quality</span> <br />
            <span className="text-foreground ">Fresh Produce</span>
          </h1>
          <p className="max-w-md leading-relaxed text-gray-600 xl:text-lg">
            Only the best produce, from farm to table at the best price at an affordable
            price.
          </p>
        </div>

        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              src={urlFor(images.image2).url()}
              alt="First Hero Image"
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
              priority
            />
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src={urlFor(images.image1).url()}
              alt="Second Hero image"
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-16 md:flex-row">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
          <Link
            href="/fruits"
            className="flex flex-1 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 "
          >
            Fruits
          </Link>

          <Link
            href="/vegtebles"
            className="flex flex-1 items-center justify-center  text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Vegetables
          </Link>
        </div>
      </div>
    </section>
  );
};
