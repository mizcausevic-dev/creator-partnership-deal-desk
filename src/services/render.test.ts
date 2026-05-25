import { describe, expect, test } from "vitest";

import {
  renderDealLane,
  renderDocs,
  renderLaunchReadiness,
  renderObligationRisks,
  renderOverview,
  renderVerification
} from "./render";
import {
  dealChanges,
  launchPackets,
  obligationBlocks
} from "../data/sampleCreatorDeals";

const renderers = [
  ["overview", renderOverview],
  ["deal-lane", renderDealLane],
  ["obligation-risks", renderObligationRisks],
  ["launch-readiness", renderLaunchReadiness],
  ["verification", renderVerification],
  ["docs", renderDocs]
] as const;

describe("render", () => {
  test.each(renderers)("%s produces a full HTML document with nav", (_label, fn) => {
    const html = fn();
    expect(html.startsWith("<!DOCTYPE html>")).toBe(true);
    expect(html).toContain("</html>");
    expect(html).toContain("Creator Partnership Deal Desk");
    expect(html).toContain('href="/deal-lane"');
    expect(html).toContain('href="/docs"');
  });

  test("deal lane lists every change with a risk tag", () => {
    const html = renderDealLane();
    for (const change of dealChanges) {
      expect(html).toContain(change.changeId);
    }
    expect(html).toContain('class="tag red"');
  });

  test("obligation risks list every block with readiness tags", () => {
    const html = renderObligationRisks();
    for (const block of obligationBlocks) {
      expect(html).toContain(block.riskId);
    }
    expect(html).toContain('class="tag red"');
    expect(html).toContain('class="tag yellow"');
  });

  test("launch readiness shows packets and completeness scores", () => {
    const html = renderLaunchReadiness();
    for (const packet of launchPackets) {
      expect(html).toContain(packet.packetId);
      expect(html).toContain(String(packet.completenessScore));
    }
  });

  test("verification renders proof statements", () => {
    const html = renderVerification();
    expect(html).toContain("Verification");
  });

  test("docs page enumerates the route surface", () => {
    const html = renderDocs();
    expect(html).toContain("/obligation-risks");
    expect(html).toContain("/launch-readiness");
  });
});
