// SPDX-License-Identifier: AGPL-3.0-or-later

import express from "express";

import {
  dealLane,
  launchReadiness,
  obligationRisks,
  payload,
  summary,
  verification
} from "./services/creatorPartnershipDealDeskService";
import {
  renderDealLane,
  renderDocs,
  renderLaunchReadiness,
  renderObligationRisks,
  renderOverview,
  renderVerification
} from "./services/render";

const app = express();
const port = Number(process.env.PORT ?? 5530);
const host = process.env.HOST || "0.0.0.0";

app.get("/", (_req, res) => res.type("html").send(renderOverview()));
app.get("/deal-lane", (_req, res) => res.type("html").send(renderDealLane()));
app.get("/obligation-risks", (_req, res) => res.type("html").send(renderObligationRisks()));
app.get("/launch-readiness", (_req, res) => res.type("html").send(renderLaunchReadiness()));
app.get("/verification", (_req, res) => res.type("html").send(renderVerification()));
app.get("/docs", (_req, res) => res.type("html").send(renderDocs()));

app.get("/api/dashboard/summary", (_req, res) => res.json(summary()));
app.get("/api/deal-lane", (_req, res) => res.json(dealLane()));
app.get("/api/obligation-risks", (_req, res) => res.json(obligationRisks()));
app.get("/api/launch-readiness", (_req, res) => res.json(launchReadiness()));
app.get("/api/verification", (_req, res) => res.json(verification()));
app.get("/api/sample", (_req, res) => res.json(payload()));

if (require.main === module) {
  app.listen(port, host, () => {
    console.log(`Creator Partnership Deal Desk listening on http://${host}:${port}`);
  });
}

export default app;
