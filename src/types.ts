import type { JSX } from "react";

export interface Project {
  name: string,
  description: string | JSX.Element,
  url: string,
  imgUrl: string
}

export interface GearItem {
  itemName: string;
  url?: string;
  desc?: string;
}
