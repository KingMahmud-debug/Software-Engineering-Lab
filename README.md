# BashaMate

> **Course project:** Software Engineering Lab  
> **Scope:** Interactive frontend prototype with backend logic documented separately.

BashaMate is a responsive housing and roommate finder interface designed for bachelor students. The prototype helps a student browse clearly tagged housing, save a shortlist, explore compatibility with sample roommates, and view a safe-message interface. It also includes landlord and moderation demonstration screens.

## What is implemented

| Area | Frontend behavior included in this repository |
| --- | --- |
| Housing search | Client-side search, area/budget filters, tenant-fit filter, sorting, listing cards, and details |
| Favorites | Save and remove listings; saved homes persist in the browser with `localStorage` |
| Account | Register, sign in, sign out, and show the active account using browser `localStorage` |
| Roommate matching | Preference controls and readable sample compatibility cards |
| Messages | Local chat interface with automatic replies for common availability, rent, room-size, and viewing questions |
| Landlord workflow | Listing dashboard and client-side form validation with a live preview |
| Moderation | Local status changes inside a mock admin queue |
| Responsive UI | Mobile navigation, desktop navigation rail, keyboard-focusable controls, and reduced-motion support |

## What is deliberately **not** implemented

This is a frontend-only coursework project. Registration, sign-in, saved listings, and automatic chat replies run only in the current browser. It has **no secure production account system, database, OTP service, ID upload, image upload, real-time messaging, server-side matching, admin authorization, payment processing, or production moderation**. Those responsibilities are explained in [`docs/BACKEND_LOGIC.md`](docs/BACKEND_LOGIC.md) so the project accurately distinguishes the running prototype from the proposed complete system.

## Technology

The interface uses **React 19**, **TypeScript**, **Vite**, **Tailwind CSS 4**, **Wouter** for client-side routes, and **Lucide** icons. The project already includes a `pnpm-lock.yaml`, which should be committed so that contributors restore the intended package versions consistently.

## Run the project in VS Code

### Prerequisites

Install a recent **Node.js 20 LTS or newer** release and enable [Corepack](https://nodejs.org/api/corepack.html), which provides the pinned pnpm package manager version. Git is required only for cloning and pushing the repository.

### Setup

```bash
# 1. Clone your GitHub repository
git clone https://github.com/YOUR-USERNAME/bashamate.git

# 2. Enter the project folder
cd bashamate

# 3. Enable the pinned package manager (run once per computer)
corepack enable

# 4. Install exactly the versions recorded in pnpm-lock.yaml
pnpm install --frozen-lockfile

# 5. Start the local development server
pnpm dev
```

Open the local URL printed in the terminal, normally `http://localhost:3000`.

## Quality-check commands

Run these before committing or demonstrating the project:

```bash
# Verify TypeScript without generating files
pnpm check

# Produce the production bundle
pnpm build

# Optionally preview the built result locally
pnpm preview
```

## Push to GitHub

Create an empty repository on GitHub first. Then, from the BashaMate folder in the VS Code terminal, run:

```bash
git init
git add .
git commit -m "Initial BashaMate frontend prototype"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/bashamate.git
git push -u origin main
```

Do **not** commit `node_modules`, `dist`, `.env` files, logs, or editor files. The provided `.gitignore` excludes them.

## Project structure

```text
client/src/
  components/        Shared visual components and navigation
  contexts/          Browser-only shared interaction state
  lib/               Sample domain data and formatting helpers
  pages/             One component per page/route
  App.tsx            Route map
  index.css          Global design tokens and reusable UI classes
docs/                Course documentation and test plan
ideas.md             Chosen UI/UX design direction
```

## Documentation

| File | Purpose |
| --- | --- |
| [`docs/SRS.md`](docs/SRS.md) | Revised Software Requirements Specification for the frontend-only course scope |
| [`docs/BACKEND_LOGIC.md`](docs/BACKEND_LOGIC.md) | Proposed architecture, data flow, security, matching, and moderation logic |
| [`docs/TEST_PLAN.md`](docs/TEST_PLAN.md) | Manual test cases and completion record |
| [`docs/PROJECT_WORKLOG.md`](docs/PROJECT_WORKLOG.md) | Project decisions, milestones, issue history, and next actions |
| [`docs/LOCAL_GITHUB_DEPLOYMENT.md`](docs/LOCAL_GITHUB_DEPLOYMENT.md) | Step-by-step VS Code, GitHub, and GitHub Pages deployment guide |
| [`ideas.md`](ideas.md) | Written design exploration and selected Courtyard Editorial visual system |

## Important portability notes

The application has no required `.env` values or third-party API keys. Sample housing, roommate, and message data are inside `client/src/lib/mock-data.ts`; the website will run even without a backend. The prominent visual assets are hosted for the web demonstration and the UI includes browser-rendered content independently of a server. If a future offline-only version is required, replace the remote visual sources with appropriately licensed local images after confirming the deployment asset policy.

## License

This project is supplied for educational use in the Software Engineering Lab course.
 local computer command :
 
 cd /c/Projects/BahaMate
pnpm dev

 git command:
 git init
git add .
git commit -m "Initial BashaMate frontend project"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/bashamate.git
git push -u origin main

 next update :
  git add .
git commit -m "Describe your update"
git push
