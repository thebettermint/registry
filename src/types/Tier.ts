export default interface Tier {
  title: string;
  description: string;
  asset: string;
  amount: {
    currency: "XRP";
    issuer: string;
    value: number;
  };
}
