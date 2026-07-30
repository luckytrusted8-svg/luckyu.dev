---
title: "Skillage Edupark"
category: "React + Firebase"
description: "A tourism and education platform with ticket booking and a role-based content CMS."
tech: ["React", "Firebase Realtime Database", "JavaScript"]
github: "https://github.com/"
demo: ""
accent: "purple"
featured: false
order: 4
---
## Overview

A tourism/education park platform covering ticket booking, an article CMS with writer/editor/admin portals, a product catalog, gallery, and testimonials — all on Firebase Realtime Database.

## Notable patterns

- Images stored as base64 in Firebase to avoid the paid Storage tier
- A four-tier CMS role system (admin, editor, writer, pending) with an approval workflow for new contributors
- Real-time updates throughout via `onValue` listeners, so content changes reflect instantly
