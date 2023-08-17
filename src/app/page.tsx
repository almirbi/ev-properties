import Image from "next/image";
import { PropertyCard } from "./_components/PropertyCard";

export default function Home() {
  return (
    <PropertyCard image={<Image alt="test" src="/" />} title="Hi">
      Hi
    </PropertyCard>
  );
}
