# Startup Journey: Cheetah Bear Fuel

## 1. Current Snapshot

- **Project name:** Cheetah Bear Fuel
- **Local folder:** `/Users/joshuadavis/startups/cheetahbearfuel`
- **Live URL:** https://cheetahbearfuel.noaerth.com (portfolio pattern)
- **Live site status:** HTTP **200**
- **Product:** American performance drink brand — waitlist-led launch
- **Framework:** Next.js App Router, TypeScript, Tailwind
- **Build command:** `pnpm build`
- **Local review command:** `pnpm dev` → http://localhost:3000
- **Current build status:** **PASS** (2026-05-14)
- **GitHub remote:** https://github.com/M4G3LL4N0/cheetahbearfuel.git
- **GitHub push status:** Not run this loop (verify `git status` before push)
- **Deployment:** **Not run** this loop
- **Last updated:** 2026-05-14

## 2. Portfolio Score

| Dimension | Score (0–10) | Notes |
|-----------|----------------|-------|
| Product clarity | 7 | Performance drink + waitlist is clear |
| MVP reality | 7 | Home + waitlist API — appropriate for brand pre-launch |
| Visual quality | 7 | Brand-forward; room for premium polish |
| Build health | 8 | **PASS** |
| Customer urgency | 6 | Waitlist is interest, not yet transactional |
| Market potential | 7 | CPG performance segment is crowded but large |
| Monetization potential | 6 | Pre-revenue; waitlist is top of funnel |
| Growth potential | 6 | Needs social proof and drop narrative |
| Investor story | 7 | American performance brand with community angle |
| Local review readiness | 7 | Test waitlist + `#products` anchor on mobile |

- **Total score:** **68 / 100**
- **Classification:** **Promising venture** — strong brand shell; needs conversion depth beyond waitlist
- **Best next loop type:** **Conversion loop** (social proof, email confirmation UX) + **deploy when ready**

## 3. 10-Second Startup Explanation

- **What this startup is:** An American performance drink brand building demand through a premium waitlist experience.
- **Who it is for:** Athletes, lifters, and performance-minded consumers who want domestically positioned energy/hydration.
- **What pain it solves:** Commodity energy drinks with weak brand story and unclear ingredient posture.
- **What the user can do:** Explore brand story, jump to products section, join waitlist via API.
- **Why it matters:** CPG wins on brand + distribution; waitlist validates demand before inventory risk.
- **Primary CTA:** Join waitlist (homepage / API flow)

## 4. Founder Thesis

- **Core belief:** American performance culture deserves a drink brand with honest positioning and community, not another generic can.
- **Why this should exist:** Shelf is loud; differentiated story + waitlist beats guessing inventory.
- **Why now:** DTC beverage paths and creator distribution lower launch cost vs decade ago.
- **Market wedge:** Waitlist + `#products` storytelling before SKU ship.
- **Expansion path:** Flavor drops, ambassador program, retail pilots.
- **What this can become:** Performance lifestyle brand with recurring DTC and selective retail.
- **1000x opportunity:** Community-driven drops with data on flavor demand before manufacturing.
- **Biggest strategic risk:** Waitlist without follow-up email sequence and social proof.
- **Next founder decision:** Waitlist confirmation UX + first 100 founder testimonials (even beta).

## 5. Live Website Diagnosis

- **Status code:** **200**
- **What visitors see:** Brand hero, products section (`id=products`), waitlist capture.
- **Current CTA:** Join waitlist.
- **What works:** Focused route map (`/`, `/api/waitlist`); git remote exists.
- **What feels weak:** Limited routes — needs richer product story blocks.
- **What feels generic:** Performance drink tropes without specific athlete proof.
- **What feels unfinished:** Post-submit waitlist confirmation state.
- **What feels premium:** Brand visual direction (verify live typography and imagery).
- **What is missing:** Email capture confirmation, FAQ, ingredient transparency page.
- **Highest leverage fix:** Waitlist success state + social proof counter (even “founding members” count).

## 6. Local Codebase Diagnosis

- **Routes:** `/`, `/api/waitlist`
- **Components:** `SiteNav` mobile this loop; products section anchor `id=products`
- **Build:** **PASS**
- **Git:** https://github.com/M4G3LL4N0/cheetahbearfuel.git
- **Mobile:** Nav + scroll to products section
- **Risks:** Waitlist spam — rate limit API (backlog)

## 7. Company Role Analysis

### CEO / Founder

- **Thesis:** American performance brand validated by waitlist before inventory.
- **Next decision:** Email sequence for waitlist signups.

### Chief Product Officer

- **MVP:** Brand site + waitlist API.
- **Retention:** Drop announcements to waitlist (backlog).

### Customer Researcher

- **Buyer:** Performance athlete and gym-adjacent consumer.
- **Pain:** Bland or overseas-positioned competitors.
- **Objections:** “When can I buy?” — set expectations on waitlist page.

### JTBD Strategist

- **Job:** “Signal I want this brand when it drops.”
- **Trigger:** Creator post or friend referral.
- **Outcome:** Confirmed waitlist spot.

### UX Designer

- **Fixed:** Mobile `SiteNav`; anchor to `#products`.
- **Next:** Post-waitlist success panel.

### Visual Design Director

- **Identity:** Bold American performance — avoid clip-art energy aesthetics.
- **Motion:** CSS only — no invalid motion JSX.

### Brand Strategist

- **Enemy:** Commodity cans with no story.
- **Phrase:** “Fuel built for American performance.”

### Copy Chief

- **Headline:** Lead with performance and American craft, not “healthy energy drink” cliché.
- **CTA:** “Join the waitlist.”

### Staff Engineer

- **Build PASS;** waitlist API validation.

### Frontend Engineer

- **SiteNav mobile;** products section id.

### Full-Stack Architect

- **Future:** Stripe pre-orders; email provider webhooks.

### AI Product Architect

- **N/A for MVP;** optional flavor preference quiz later.

### Data Moat Strategist

- **Waitlist segments:** sport, gym, region (opt-in fields).

### Growth Marketer

- **Hook:** Founding member waitlist for first drop.
- **SEO:** American performance drink brand (long-tail).

### Sales Operator

- **Retail:** Waitlist proves demand for buyer meetings (later).

### Pricing Strategist

- **Model:** DTC subscription + drop pricing (future).

### Investor Analyst

- **Thesis:** Community-validated CPG with lower inventory risk.
- **Metrics:** Waitlist signups, email confirm rate, CAC on launch.

### Competitive Intelligence Analyst

- **Gap:** Authentic American positioning vs global conglomerate brands.

### Experiment Designer

- **Test:** Hero CTA waitlist vs scroll-to-products first.

### QA Engineer

- **Build PASS;** test waitlist POST and mobile nav + `#products`.

### Security / Trust Reviewer

- **Rate limit waitlist;** no PII in client logs.

### Legal / Policy Framing Reviewer

- **Supplement/beverage claims:** Avoid medical or performance guarantee language; FDA-aware copy review before scale.

### GitHub Release Operator

- **Remote:** https://github.com/M4G3LL4N0/cheetahbearfuel.git
- **This loop:** Journey doc + nav work — commit when user requests.

### Local Review Director

- **Command:** `cd /Users/joshuadavis/startups/cheetahbearfuel && pnpm dev`
- **Flow:** Home → products anchor → waitlist submit.

### Speed / Token Efficiency Operator

- **Scope:** Mobile nav + products id + journey; build **PASS**.

### Taste Reviewer

- **Diagnosis:** Promising brand shell — push premium photography and typographic restraint.

### Contrarian Strategist

- **Angle:** Micro-drop to 500 waitlist only — scarcity as product.

### Community / Ecosystem Builder

- **Founding member Discord or SMS list (opt-in).**

### Automation Architect

- **CI build;** human approves blast emails.

## 8. Product Strategy

- **MVP:** Brand site + waitlist API.
- **Workflow:** Land → products story → join waitlist.
- **Monetization:** Pre-order and DTC (future).
- **Retention:** Drop notifications.

## 9. Roadmap

### Loop 1: Make It Understandable

- Brand story + waitlist CTA — **strong**.

### Loop 2: Make It Real

- Mobile `SiteNav` + `#products` anchor — **done**.

### Loop 3: Make It Premium

- Lifestyle photography system; typographic refinement.

### Loop 4: Make It Useful

- Waitlist confirmation UX; founding member counter.

### Loop 5: Make It Monetizable

- Pre-order and first SKU drop flow.

### Loop 6: Make It Fundable

- Waitlist growth metrics and channel CAC narrative.

### Loop 7: Make It Compound

- Flavor preference data from waitlist fields.

### Loop 8: Make It Defensible

- Community and ambassador tiers tied to drops.

### Loop 9: Make It Distributable

- Creator affiliates; gym partnerships.

### Loop 10: Make It Operationally Scalable

- Email automation; inventory; retail pilot ops.

## 10. Work Completed This Loop

### Loop Entry: 2026-05-14

- **Loop type:** Mobile `SiteNav` + products section anchor
- **Loop goal:** Mobile navigation; `id=products` for in-page jump; **PASS** build
- **Changes made:** `SiteNav` mobile drawer; products section `id=products`.
- **Files changed:** `SiteNav` (or equivalent), layout, products section (typical touch points)
- **Routes added:** none
- **Routes improved:** `/` with `#products` anchor target
- **Components added:** none
- **Components improved:** `SiteNav`
- **MVP interactions added:** Mobile nav; scroll/jump to products
- **Demo data added:** none
- **Copy improved:** none major this loop
- **Design improved:** Mobile nav pattern
- **Mobile improved:** Nav + products section reachable on phone
- **Engineering fixed:** Build **PASS**; no invalid motion JSX introduced
- **Build result:** **PASS**
- **GitHub commit:** Not run this loop
- **GitHub push result:** Not run
- **Deployment:** **Not run**
- **Local review command:** `pnpm dev`
- **Local review URL:** http://localhost:3000
- **What improved:** Mobile IA; products section discoverable via `id=products`
- **What still needs work:** Waitlist confirmation UX; social proof; deploy when approved

## 11. Next Loop Plan

- **Highest leverage next move:** Waitlist success UI + founding member counter.
- **Product:** Post-submit confirmation and email capture validation.
- **Design:** Premium photography pass on hero and products.
- **Engineering:** Rate limit `/api/waitlist`; commit to GitHub when user requests.
- **Growth:** Creator micro-influencer kit for first drop.
- **Sales:** Retail buyer one-pager using waitlist numbers (when real).
- **Monetization:** Pre-order flow design (future).
- **Investor story:** Waitlist velocity and confirm rate.
- **Trust/safety:** FDA-aware copy review before scale; no medical performance guarantees.
- **GitHub:** Push to https://github.com/M4G3LL4N0/cheetahbearfuel.git when user approves.
- **Biggest risk:** Waitlist without follow-up sequence.
- **Suggested next command:** `cd /Users/joshuadavis/startups/cheetahbearfuel && pnpm dev`

## 12. 1000x Backlog

### Product

- SKUs; pre-order; subscription; flavor drops

### Design

- Lifestyle photography system; packaging mockups

### Engineering

- Email provider webhooks; Stripe pre-orders; waitlist rate limits

### Growth

- Creator affiliates; founding member referrals

### Sales

- Regional retail pilot; gym partnerships

### Monetization

- DTC subscription; limited drop pricing

### Investor Narrative

- “American performance brand validated before inventory risk”

### Data Moat

- Flavor and segment preference from opt-in waitlist fields

### Automation

- Drip email sequences with human-approved blast copy

### Partnerships

- Gyms; creators; local retailers

### SEO / Content

- American performance drink long-tail content

### User Retention

- Drop SMS/email list (opt-in)

### Demo Quality

- Products section with realistic SKU story (pre-launch)

### Mobile Experience

- Waitlist form one-handed; hero readable on small screens

### Trust and Safety

- Label and claim review before scale; no medical guarantees

### Real API Integrations

- ESP (email); Shopify or similar at launch

### Enterprise Features

- N/A early — focus DTC

### Future AI Features

- Optional flavor preference quiz (non-medical)

### Community

- Ambassador tiers; founding member Discord

### Distribution

- Creator codes; event sampling

### Templates

- Founding member invite email

### Analytics

- Funnel: visit → products → waitlist → confirm

### Internal Tools

- Waitlist export for ops

### Public Artifacts

- Brand story one-pager for partners
