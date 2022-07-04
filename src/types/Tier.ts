export default interface Tier {
  amount: {
    currency: "XRP";
    issuer: string;
    value: number;
  };
  asset: string;
}
