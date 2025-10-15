import type { GearItem } from "../types.ts";

interface GearCardProps {
  GearItem: GearItem;
}

export default function GearCard({ GearItem }: GearCardProps) {
  return (
    <div id={GearItem.itemName + "-card"} className="">
      <h1>{GearItem.itemName}</h1>
      <p>{GearItem.desc}</p>
    </div>
  );
}
