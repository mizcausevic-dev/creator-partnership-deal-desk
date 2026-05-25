import { dealChanges, launchPackets, obligationBlocks } from "../data/sampleCreatorDeals";

export function summary() {
  return {
    dealChanges: dealChanges.length,
    urgentChanges: dealChanges.filter((item) => item.risk === "red").length,
    blockedObligations: obligationBlocks.filter((item) => item.readiness !== "green").length,
    riskyPackets: launchPackets.filter((item) => item.status !== "green").length,
    recommendation:
      "Clear creator-scope and rights blockers first so launch-safe partnership changes do not break approvals, measurement, or commercial commitments."
  };
}

export function dealLane() {
  return dealChanges;
}

export function obligationRisks() {
  return obligationBlocks;
}

export function launchReadiness() {
  return launchPackets;
}

export function verification() {
  return [
    "Deal changes map to concrete downstream systems, not just notes in a brief.",
    "Obligation blockers surface the proof needed before a partnership launch becomes buyer-visible.",
    "Launch posture ties creator work to approvals, rights, and measurement outcomes.",
    "The deal desk is buyer-readable and safe for embedded analytics tie-back.",
    "Synthetic data only; no real customer, creator, or contract records are included."
  ];
}

export function payload() {
  return {
    summary: summary(),
    changes: dealLane(),
    rules: obligationRisks(),
    launchPackets: launchReadiness(),
    verification: verification()
  };
}
