import Banner from "@/components/homepage/Banner";
import FeaturedTiles from "@/components/homepage/FeaturedTiles";
import ReactMarquee from "@/components/homepage/ReactMarquee";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-4">
      <ReactMarquee />
      <Banner />
      <FeaturedTiles />
    </div>
  );
}
