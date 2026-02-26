# TextMyApp Landing Page

## Overview
A modern, high-converting landing page for TextMyApp — a SaaS product that lets job applicants complete an entire job application via SMS text message. Built for construction, trades, and manufacturing employers.

## Tech Stack
- **Frontend**: React + TypeScript, Tailwind CSS v4, Shadcn/UI components, wouter routing
- **Backend**: Express.js (Node/TypeScript)
- **Database**: PostgreSQL (Neon via Drizzle ORM)
- **Fonts**: Outfit (headings) + Inter (body)

## Architecture
- `client/src/pages/Home.tsx` — Main landing page with all sections
- `client/src/pages/AdminDashboard.tsx` — Admin view at `/admin` showing all sign-ups
- `client/src/components/WaitlistForm.tsx` — Reusable sign-up form (posts to /api/signups)
- `shared/schema.ts` — Drizzle schema (users + signups tables)
- `server/routes.ts` — API routes (`POST /api/signups`, `GET /api/signups`)
- `server/storage.ts` — Database storage layer using Drizzle
- `server/db.ts` — Database connection (Neon serverless)

## Key Features
- Landing page with hero, problem/solution, how-it-works, benefits, pricing, trust sections
- Inline sign-up form (no pop-ups) that saves to PostgreSQL
- Admin dashboard at `/admin` with live data, stats, and table of all sign-ups
- Sign-ups are never deleted (persistent)
- Duplicate email detection (409 response)

## Database Schema
- **signups**: id (serial PK), email (unique), company (optional), employees (optional), created_at

## Branding
- Product: TextMyApp
- Company: Order and Operations Consulting
- Contact: hello@orderandoperations.com
- Copyright: 2026
