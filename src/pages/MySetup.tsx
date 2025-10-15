import GearGrid from "../components/GearGrid";
import type { GearItem } from "../types";

export default function MySetup() {
  const MyGear: GearItem[] = [
    {
      itemName: "M1 MacBook Air (2020)",
      url: "https://support.apple.com/en-us/111883",
      desc: "It has lots of stickers from Hack Club",
    },
    {
      itemName: "Keychron V1",
      url: "https://www.keychron.com/products/keychron-v1-qmk-via-custom-mechanical-keyboard",
      desc: "Customised with QMK and it has a volume knob!",
    },
    {
      itemName: "Logi MX Master 3S",
      url: "https://www.logitech.com/en-nz/shop/p/mx-master-3s",
      desc: "It's really comfortable.",
    },
    {
      itemName: "Some DELL monitor",
      desc: "I'm not sure what model.",
    },
    {
      itemName: "iPhone 13 Mini",
      url: "https://support.apple.com/en-us/111873",
      desc: "I don't have a phone case."
    },
    {
      itemName: "Apple Watch SE (2nd Generation)",
      url: "https://support.apple.com/en-nz/111853",
      desc: "I have a couple of bands too.",
    },
    {
      itemName: "CMF Buds Pro 2",
      url: "https://intl.nothing.tech/products/cmf-buds-pro-2?Colour=Dark+Grey",
      desc: "I got them from Summer of Making!",
    },
  ];

  return (
    <div
      id="my-setup"
      className="min-h-screen flex flex-col items-center justify-center text-center space-y-8"
    >
      <h1 className="text-3xl font-bold">My Setup / Gear</h1>
      <GearGrid gearItems={MyGear} />
    </div>
  );
}
