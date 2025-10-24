import type { GearItem } from "../types.ts";

interface GearCardProps {
  GearItem: GearItem;
}

export default function GearCard({ GearItem }: GearCardProps) {
  return (
    <div
      id={GearItem.itemName + "-card"}
      className="cursor-target border-solid border-4 border-latte-lavender dark:border-macchiato-lavender
      w-full max-w-sm
      rounded-lg shadow-md p-6 flex flex-col
      bg-latte-surface-0 dark:bg-macchiato-surface-0
      hover:shadow-2xl hover:scale-[1.02]
      transition-all duration-300 ease-in-out
      hover:bg-latte-surface-1 dark:hover:bg-macchiato-surface-1
      hover:text-latte-blue dark:hover:text-macchiato-blue"
    >
      <a href={GearItem.url} target="_blank">
        <h1 className="text-lg font-semibold">{GearItem.itemName}</h1>
        <p className="text-sm mt-1">{GearItem.desc}</p>
      </a>
    </div>
  );
}
