import { Hero } from "@/components/core/hero";
import { Newest } from "@/components/core/newest";

export default function Home() {
  return (
    <main className="bg-white pb-6 sm:pb-8 lg:pb-6">
      <Hero />

      <Newest />
    </main>
  );
}
