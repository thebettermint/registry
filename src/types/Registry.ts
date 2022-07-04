import Organization from "./Organization";

export default interface Registry {
  document: {
    title: string;
    description: string;
  };
  organizations: Organization[];
}
