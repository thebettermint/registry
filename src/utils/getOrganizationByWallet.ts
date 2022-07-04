import registry from "../registry.json";
import Organization from "../types/Organization";

const getOrganizationByWallet = (wallet: string): Organization | null => {
  const organization = (registry.organizations as Organization[]).find(
    (org: Organization) => org.address === wallet
  );
  return organization || null;
};

export default getOrganizationByWallet;
