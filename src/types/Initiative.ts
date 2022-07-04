import Tier from "./Tier";

export default interface Initiative {
  title: string;
  description: string;
  tag: number;
  XAddress: string;
  start: number; // timestamp
  end: number; // timestamp
  defaultAsset: string;
  tiers?: Array<Tier>; // Not needed in partiuclar circumstances
}
