import fs from "node:fs";
import path from "node:path";

import {
  dealLane,
  launchReadiness,
  obligationRisks,
  payload,
  summary,
  verification
} from "../src/services/creatorPartnershipDealDeskService";
import {
  renderDealLane,
  renderDocs,
  renderLaunchReadiness,
  renderObligationRisks,
  renderOverview,
  renderVerification
} from "../src/services/render";

const outputDir = path.resolve(__dirname, "..", "site");
fs.mkdirSync(outputDir, { recursive: true });
fs.mkdirSync(path.join(outputDir, "api"), { recursive: true });
fs.copyFileSync(path.resolve(__dirname, "..", "CNAME"), path.join(outputDir, "CNAME"));

const pages: Record<string, string> = {
  "index.html": renderOverview(),
  "deal-lane.html": renderDealLane(),
  "obligation-risks.html": renderObligationRisks(),
  "launch-readiness.html": renderLaunchReadiness(),
  "verification.html": renderVerification(),
  "docs.html": renderDocs()
};

const rewrites: Array<[string, string]> = [
  ['href="/deal-lane"', 'href="deal-lane.html"'],
  ['href="/obligation-risks"', 'href="obligation-risks.html"'],
  ['href="/launch-readiness"', 'href="launch-readiness.html"'],
  ['href="/verification"', 'href="verification.html"'],
  ['href="/docs"', 'href="docs.html"']
];

for (const [filename, html] of Object.entries(pages)) {
  let content = html;
  for (const [from, to] of rewrites) {
    content = content.replaceAll(from, to);
  }
  fs.writeFileSync(path.join(outputDir, filename), content, "utf8");
}

const apiPayloads: Record<string, unknown> = {
  "api/dashboard/summary.json": summary(),
  "api/deal-lane.json": dealLane(),
  "api/obligation-risks.json": obligationRisks(),
  "api/launch-readiness.json": launchReadiness(),
  "api/verification.json": verification(),
  "api/sample.json": payload()
};

for (const [filename, data] of Object.entries(apiPayloads)) {
  fs.mkdirSync(path.dirname(path.join(outputDir, filename)), { recursive: true });
  fs.writeFileSync(path.join(outputDir, filename), JSON.stringify(data, null, 2), "utf8");
}
