export type DealChange = {
  changeId: string;
  platform: string;
  creator: string;
  issueType: string;
  owner: string;
  nextAction: string;
  risk: "red" | "yellow" | "green";
  excerpt: string;
};

export type ObligationRisk = {
  riskId: string;
  blocker: string;
  owner: string;
  source: string;
  readiness: "red" | "yellow" | "green";
  requiredEvidence: string;
  impactArea: string;
  note: string;
};

export type LaunchPacket = {
  packetId: string;
  audience: string;
  completenessScore: number;
  status: "red" | "yellow" | "green";
  blocker: string;
  launchWindowHours: number;
  decisionNote: string;
};

export const dealChanges: DealChange[] = [
  {
    changeId: "DP-104",
    platform: "YouTube",
    creator: "Studio Orbit",
    issueType: "Deliverable scope drift",
    owner: "Partnership Lead",
    nextAction: "Re-lock brief and updated posting sequence",
    risk: "red",
    excerpt: "The creator brief now includes an extra short-form cut, but the paid amplification scope has not been reset."
  },
  {
    changeId: "DP-118",
    platform: "Instagram",
    creator: "Mila North",
    issueType: "Approval timing gap",
    owner: "Brand Marketing",
    nextAction: "Escalate asset review and lock legal turnaround",
    risk: "yellow",
    excerpt: "The content draft is in review, but the legal and brand approval sequence is still not synchronized."
  },
  {
    changeId: "DP-132",
    platform: "TikTok",
    creator: "Kai Motion",
    issueType: "Measurement plan mismatch",
    owner: "Growth Ops",
    nextAction: "Reset tracking map before publication",
    risk: "yellow",
    excerpt: "The creator post is ready, but the tracking plan still reflects the prior CTA and landing path."
  },
  {
    changeId: "DP-149",
    platform: "Podcast",
    creator: "Signal Foundry",
    issueType: "Commercial term revision",
    owner: "Business Ops",
    nextAction: "Confirm amended deliverables and posting rights",
    risk: "red",
    excerpt: "The amended term sheet changed posting rights, but content and legal packets still reference the previous agreement."
  }
];

export const obligationBlocks: ObligationRisk[] = [
  {
    riskId: "OR-21",
    blocker: "Paid amplification scope not approved",
    owner: "Partnership Lead",
    source: "Media buying and creator brief",
    readiness: "red",
    requiredEvidence: "Updated brief, paid usage approval, and accepted media plan",
    impactArea: "Paid and organic consistency",
    note: "The expanded short-form scope is still not reflected in the paid usage packet."
  },
  {
    riskId: "OR-28",
    blocker: "Legal review turnaround not locked",
    owner: "Legal Ops",
    source: "Legal and brand approval",
    readiness: "yellow",
    requiredEvidence: "Review ETA, approved redlines, and publishing consent note",
    impactArea: "Launch calendar reliability",
    note: "The creator asset is ready, but legal turnaround still has no fixed execution window."
  },
  {
    riskId: "OR-34",
    blocker: "Tracking map still points at old CTA",
    owner: "Growth Ops",
    source: "Analytics and landing flow",
    readiness: "yellow",
    requiredEvidence: "Updated UTM map, destination proof, and dashboard validation sample",
    impactArea: "Measurement continuity",
    note: "The content package changed, but the downstream reporting map still uses the prior CTA flow."
  },
  {
    riskId: "OR-41",
    blocker: "Amended posting rights not reflected downstream",
    owner: "Business Ops",
    source: "Contract and content ops",
    readiness: "red",
    requiredEvidence: "Amended rights note, asset usage matrix, and team acknowledgment",
    impactArea: "Commercial and legal safety",
    note: "Updated posting rights are still not reflected in content and approval packets."
  }
];

export const launchPackets: LaunchPacket[] = [
  {
    packetId: "LP-07",
    audience: "Creator relaunch",
    completenessScore: 56,
    status: "red",
    blocker: "Paid scope drift and rights mismatch",
    launchWindowHours: 14,
    decisionNote: "Do not launch until scope and rights packets are reconciled."
  },
  {
    packetId: "LP-14",
    audience: "Brand approval",
    completenessScore: 74,
    status: "yellow",
    blocker: "Legal review ETA still pending",
    launchWindowHours: 22,
    decisionNote: "Approval can clear if legal timing is locked in the next cycle."
  },
  {
    packetId: "LP-22",
    audience: "Tracking release",
    completenessScore: 81,
    status: "yellow",
    blocker: "Measurement map not fully updated",
    launchWindowHours: 28,
    decisionNote: "Hold until the destination and dashboard proof are validated."
  },
  {
    packetId: "LP-31",
    audience: "Internal packet sync",
    completenessScore: 95,
    status: "green",
    blocker: "No active blocker",
    launchWindowHours: 72,
    decisionNote: "Packet is safe for governed rollout."
  }
];
