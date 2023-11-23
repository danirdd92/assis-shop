import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export const queries = {
  HERO_IMAGES: "*[_type == 'heroImage'][0]",
  GET_NEWSET: `*[_type == "product"][0...4] | order(_createdAt asc) {
        _id,
        name,
        "image": image.asset->url,
        unit,
        price,
        "slug": slug.current,
        "category": category->name,
    }`,
  GET_PROD: (slug: string) => `*[_type == "product" && slug.current == "${slug}"][0] {
    _id,
    name,
     "image": image.asset->url,
    price,
    description,
    "slug": slug.current,
    "category": category->name
  }`,
};
