import GearCard from "./GearCard.tsx";
import type { GearItem } from "../types";

interface GearGridProps {
  gearItems: GearItem[];
}

export default function GearGrid({ gearItems }: GearGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
      {gearItems.map((gearItem) => (
        <GearCard GearItem={gearItem}/>
      ))}
    </div>
  );
}
