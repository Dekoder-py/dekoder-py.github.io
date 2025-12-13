import type { GearItem } from "../types.ts";

interface GearCardProps {
  GearItem: GearItem;
}

export default function GearCard({ GearItem }: GearCardProps) {
  return (
    <div
      id={GearItem.itemName + "-card"}
      className="border-solid border-4 border-macchiato-lavender
      w-full max-w-sm
      rounded-lg shadow-md p-6 flex flex-col
      bg-macchiato-surface-0
      hover:shadow-2xl hover:scale-[1.02]
      transition-all duration-300 ease-in-out
      hover:bg-macchiato-surface-1
      hover:text-macchiato-blue"
    >
      <a href={GearItem.url} target="_blank">
        <h1 className="text-lg font-semibold">{GearItem.itemName}</h1>
        <p className="text-sm mt-1">{GearItem.desc}</p>
      </a>
    </div>
  );
}
