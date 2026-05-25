# Architecture

## Overview

`creator-partnership-deal-desk` is a lightweight TypeScript + Express deal desk for modeling the operating layer between creator deal changes, deliverable obligations, and launch-safe collaboration posture.

## Surfaces

- `overview`
  - active deal changes
  - blocked obligations
  - launch-ready packets
  - governance recommendation
- `deal-lane`
  - partnership-by-partnership queue
  - owner routing
  - downstream impact
- `obligation-risks`
  - brief, legal, content, and measurement blockers
  - required evidence
  - readiness posture
- `launch-readiness`
  - change packets
  - completeness score
  - go/no-go timing
- `verification`
  - what the repo proves about creator-governance systems

## Data Model

- `DealChange`
  - platform, creator, owner, risk, downstream impact, next action
- `ObligationRisk`
  - blocker, source, required evidence, owner, readiness, impact area
- `LaunchPacket`
  - audience, completeness score, launch window, blocker, decision note

## Design Principle

Creator partnership state should be inspectable by growth, legal, brand, and operator stakeholders. The system should explain:
- which partnership change is under pressure right now
- which downstream obligation is still missing
- who owns the next move
- where launch or delivery risk is building
