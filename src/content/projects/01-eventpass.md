---
title: "EventPass"
category: "Event Management Platform"
description: "A full-stack event platform with QR check-in, tiered admin access, and a dark premium landing page."
tech: ["Express.js", "Prisma", "MySQL", "React", "Vite", "Tailwind CSS"]
github: "https://github.com/luckytrusted8-svg/attendance-event"
demo: ""
accent: "purple"
featured: true
order: 1
---
## Overview

EventPass is a full-stack event management system built during my internship. It handles everything from event creation to on-site attendance, with three tiers of admin access controlling what each staff member can see and do.

## What I built

- JWT authentication across three admin roles, enforced through custom middleware
- QR-code based attendance flow with live scan feedback
- Async email notifications via Nodemailer, queued so they never block the UI
- A `usePolling` hook that keeps the admin dashboard's live numbers in sync without a websocket layer

## Design

The landing page went through several iterations to land on a dark, premium aesthetic — inspired by modern event-tech products — with careful attention to spacing and contrast rather than heavy visual effects.
