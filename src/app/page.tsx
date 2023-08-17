"use client";

import Image from "next/image";
import { PropertyCard } from "./_components/PropertyCard";

export default function Home() {
  return (
    <PropertyCard
      onCross={() => {}}
      image={<Image width="180" height="88" alt="test" src="/" />}
      title="Hi"
    >
      Hi
    </PropertyCard>
  );
}
