import type { JSX } from "react";

export interface Project {
  name: string,
  description: string | JSX.Element,
  url: string,
  imgUrl: string
}
