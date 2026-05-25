import { payload, summary } from "../src/services/creatorPartnershipDealDeskService";

console.log("creator-partnership-deal-desk demo");
console.log(JSON.stringify(summary(), null, 2));
console.log(JSON.stringify(payload().rules, null, 2));
