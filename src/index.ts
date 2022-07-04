import getOrganizationByWallet from "./utils/getOrganizationByWallet";
import registry from "./registry.json";
import { Organization, Tier, Registry, Initiative } from './types'

export { getOrganizationByWallet };

export {
    Organization, 
    Tier, 
    Registry, 
    Initiative
}

export default registry as Registry;
