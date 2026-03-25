# Certly — Repository Instructions for Codex

## Project overview

Certly is a premium, privacy-first verification infrastructure SaaS.

This repository is currently focused on a **frontend-only, investor-ready, enterprise-grade UI prototype** for the Certly platform.

Certly helps platforms verify trust claims such as:

- age eligibility
- identity verification status
- country / residency eligibility
- session and device trust

Core product philosophy:

- verify claims, not raw sensitive identity data
- minimize retention
- feel credible, global, enterprise-ready, and security-conscious
- look like a serious company in the identity / trust / infrastructure space

This repo must never feel like a toy landing page or a hackathon demo.

---

## Primary goal

Build a polished, high-quality, multi-page SaaS frontend for Certly with:

- strong marketing pages
- rich product pages
- realistic dashboard pages
- cohesive information architecture
- premium visual design
- realistic B2B copy
- reusable components
- maintainable code structure

The output should be strong enough to show to:

- potential customers
- investors
- design reviewers
- technical collaborators

---

## Non-negotiables

- Do not build a shallow demo.
- Do not stop at a homepage.
- Do not leave TODO comments.
- Do not use lorem ipsum.
- Do not generate thin sections with filler content.
- Do not make pages feel generic or incomplete.
- Do not use childish startup visuals.
- Do not use flashy crypto aesthetics.
- Do not write fake legal guarantees.
- Do not overuse buzzwords.
- Do not keep files extremely tiny if the result becomes underbuilt.
- Do not create giant chaotic files either.

Always prefer a complete, thoughtful, production-style UI.

---

## Product framing

Certly is **not**:

- a crypto wallet product
- a generic authentication app
- a playful consumer app
- a document storage platform
- a random KYC clone

Certly **is**:

- privacy-first trust infrastructure
- verification orchestration layer
- modular claims verification platform
- enterprise SaaS for platforms, marketplaces, communities, gaming, fintech, and trust-sensitive products
- developer-friendly and compliance-aware

Whenever writing copy, reflect this positioning clearly.

---

## Brand and design direction

The UI must feel:

- corporate
- modern
- premium
- calm
- clean
- highly trustworthy
- operationally mature

Visual style:

- elegant enterprise SaaS
- dark and light mode support where reasonable
- strong typography hierarchy
- spacious layouts
- soft shadows
- subtle gradients
- tasteful borders
- restrained motion
- no neon overload
- no cartoonish illustrations
- abstract trust / verification / infrastructure motifs are good
- cards, grids, diagrams, dashboards, and polished sections are preferred

---

## Copywriting rules

All copy must be original, strong, and believable.

Tone:

- confident
- concise
- premium
- credible
- privacy-aware
- enterprise-friendly
- technically mature

Avoid:

- fluff
- empty marketing noise
- exaggerated claims
- cheesy taglines
- childish or overexcited language

Preferred themes:

- verify what matters
- reduce unnecessary data retention
- configurable trust policies
- reusable verification state
- audit-ready workflows
- session-aware trust
- modular integration
- strong controls without raw-data hoarding

---

## Engineering expectations

Use:

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui where useful
- Framer Motion only for subtle enhancements
- Lucide icons where useful

Code expectations:

- keep code maintainable
- use reusable components
- use typed mock data
- split logic and content sensibly
- prefer good folder naming
- create shared layout primitives
- create realistic UI states
- support responsive behavior properly
- make dashboards and marketing pages consistent with each other

Do not add a real backend unless explicitly asked.
Do not add real auth or real payments unless explicitly asked.
Mock data is acceptable, but it must feel realistic.

---

## Dependency and version policy

Always prefer the latest stable version of frameworks, libraries, CLIs, and official starter commands unless the user explicitly requests a specific version.

Rules:

- use pnpm
- Use `@latest` when scaffolding or installing packages whenever appropriate.
- Do not default to older major versions if a newer stable major version exists.
- Do not pin outdated examples without a strong reason.
- Prefer current official documentation patterns and current recommended setup commands.
- If a package has breaking changes across major versions, adapt the codebase to the latest stable version rather than silently falling back to an older version.
- If the user explicitly asks for a specific version, follow that request exactly.
- If compatibility is uncertain, check the current ecosystem first and then proceed with the latest stable option.

Examples:

- Use `pnpm create-next-app@latest`
- Use the latest stable Next.js version, not older 15.x examples if 16.x is the current stable release
- Prefer latest stable shadcn/ui setup patterns
- Prefer latest stable Tailwind CSS setup patterns
- Prefer latest stable package installation commands from official sources

---

## UI quality bar

Every page should answer:

- why does this exist?
- who is it for?
- what does it communicate?
- does it look finished?
- would a serious buyer or investor believe this company could exist?

If a page feels too short, too vague, or too generic, expand it before considering the task complete.

---

## Required product areas

The project should generally support these areas when relevant:

- marketing homepage
- product overview
- age verification
- identity verification
- country / residency verification
- session trust
- solutions pages
- developers experience
- security page
- pricing
- FAQ
- company / about
- contact / demo
- docs preview
- sign-in
- full app dashboard shell

---

## Dashboard expectations

Dashboard UI should feel like a real internal SaaS admin platform.

Include realistic patterns such as:

- overview metrics
- verification activity
- policy configuration
- session trust views
- integrations
- audit logs
- billing
- settings
- tenant management
- status badges
- filters
- detail drawers
- empty states
- usage cards
- event history

Avoid fake-looking toy dashboards.

---

## File and component strategy

Prefer:

- reusable section components
- reusable marketing blocks
- shared dashboard layout components
- shared typography and spacing patterns
- shared mock-data modules
- sensible separation between content and presentation where helpful

Avoid:

- massive all-in-one page files
- dozens of tiny useless components
- repeated markup everywhere
- inconsistent spacing systems
- random one-off styling decisions

---

## Animation rules

Animations should be subtle and premium.
Use motion to reinforce quality, not to distract.

Good:

- fade/slide on entrance
- card hover polish
- small transitions
- tasteful section reveals

Bad:

- flashy gimmicks
- over-animated UI
- noisy motion
- unstable layouts

---

## Security / trust messaging constraints

Use careful wording.

Good examples:

- designed with privacy and data minimization principles in mind
- structured for strong operational controls
- built for security-conscious teams
- supports configurable verification policies

Avoid absolute claims like:

- fully compliant everywhere
- impossible to bypass
- zero risk
- legally guaranteed protection

---

## Workflow preference

When implementing large features or multiple pages:

1. improve structure first
2. create shared primitives
3. build complete pages
4. refine copy
5. refine polish
6. check responsiveness
7. improve weak or thin sections before stopping

When in doubt, choose depth, clarity, and polish over speed.

---

## Final self-check before stopping

Before finishing any major task, verify:

- this is more than a landing page
- the UI feels enterprise-grade
- the copy sounds credible
- the information architecture is clear
- the pages feel complete
- the dashboard feels real
- the design is consistent
- the result is something a serious founder would actually show publicly

If not, continue improving.
