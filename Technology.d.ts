import { SanityBody, Image } from "./typings";

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}
