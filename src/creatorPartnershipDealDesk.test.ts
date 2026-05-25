import { describe, expect, test } from "vitest";

import {
  dealLane,
  launchReadiness,
  obligationRisks,
  summary,
  verification
} from "./services/creatorPartnershipDealDeskService";

describe("creator-partnership-deal-desk", () => {
  test("returns a launch recommendation", () => {
    expect(summary().recommendation).toMatch(/launch/i);
  });

  test("maps deal changes and blockers", () => {
    expect(dealLane().length).toBeGreaterThan(2);
    expect(obligationRisks().some((risk) => risk.readiness === "red")).toBe(true);
  });

  test("verification posture stays buyer-readable", () => {
    expect(launchReadiness().every((packet) => packet.audience.length > 0)).toBe(true);
    expect(verification().some((item) => item.toLowerCase().includes("creator"))).toBe(true);
  });
});
