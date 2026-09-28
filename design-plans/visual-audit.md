# NITI AIDE — screenshot-led visual audit

Date: 28 September 2026
Scope: Current homepage, using the supplied 1863 × 6901 screenshot and read-only runtime measurements at 1863px and 390px. The supplied image was displayed downscaled in chat; actual font measurements were used to avoid treating image scaling as a website defect. The screenshot shows Early warning and Telugu selected; these states were checked in the running page too.

## Design language
- Audited surface: http://127.0.0.1:5174/, index.html → src/main.js → UX4G CSS and src/styles.css.
- Design sources: supplied screenshot, current rendered homepage, DESIGN.md, PRODUCT.md.
- Documented decisions: retain approved light layout and original marketing copy; navy typography, restrained orange/green accents, contextual surface colors, illustrative previews, limited explanatory motion.
- Governing owners and consumers: src/styles.css owns layout, sizes, colors and responsive overrides; index.html owns sections and static copy; src/main.js owns preview content and states.
- Explicit exceptions: original marketing metrics are retained at the owner's request, not independently validated evidence.

## Findings
| # | Problem | Evidence | Proposed change | Scope | Confidence |
| --- | --- | --- | --- | --- | --- |
| 1 | The information needed to understand the product is visually subordinate to decorative space and headlines. | User requests readable text ratios. Screenshot shows large headings beside miniature previews. Runtime: hero answer 10px, source button 8px, citizen answer 11px, citation 8px, implementation descriptions 12px, metric labels 10–11px; mobile boundary label 7px and metric descriptions 9px. These values originate in the loaded src/styles.css. | Establish a readable supporting-text scale and enlarge the meaningful content inside previews; allow reflow rather than shrinking it on mobile. | Hero, product tabs, citizen demo, architecture, steps, metadata | High |
| 2 | Some secondary text is too faint even before accounting for its small size. | User explicitly asks for contrast inspection. Runtime .contact-details small uses #667962 on #e3ede0, approximately 3.90:1; .footer-bottom uses #77817a on white, approximately 4.03:1. Both are small normal-weight text. Main body #586873 measures about 5–5.8:1 on checked surfaces, so the whole site does not need indiscriminate darkening. | Reuse --muted (#586873) for the failing helper/footer text and verify every affected actual background against a 4.5:1 normal-text target. | Contact instructions and footer | High |
| 3 | Proof and its explanation are separated into scattered small items. | Screenshot: prominent numerical assertions with tiny captions; document flow reads as disconnected chips and an extended connector; security boundary and audit/data promises compete as separate groups. The page's promise is source-backed departmental intelligence, but the source labels themselves have low perceptual prominence. | Group each important claim with its explanation or supporting visual into a single clear reading unit, keeping all existing words and the approved section order. | Problem evidence, source attachments, security diagram and promises | Medium — visual judgment based on supplied rendered evidence |

## Section-by-section reading audit
| Section | Visitor's question | What works | Correction to carry into implementation |
| --- | --- | --- | --- |
| Header | What is this and where do I go? | Brand, short navigation and primary action are distinguishable. | Keep structure. Increase normal navigation/control text modestly; do not enlarge the logo to compensate for small labels. |
| Hero | What is NITI AIDE, and what will it do for my department? | Headline and primary action lead the eye. Light product stage supports the subject. | Keep headline hierarchy. Make one question, its answer and its source legible without zoom. Reduce the amount of tiny peripheral workspace chrome. Keep illustrative status readable. |
| Audience strip | Is this for officers, leadership or citizens? | Three audiences are present. | Promote audience names above their descriptions; keep each role and outcome visually together. |
| Problem | Why do our current systems need an intelligence layer? | Headline accurately frames the friction. | Enlarge metric captions and keep them adjacent to numbers. Make documents → intelligence → result one understandable diagram. Do not add unsupported statistics. |
| Officer tools | What will I actually use? | Tabbed exploration is useful; active tab is distinguishable. | Enlarge the selected preview's alert/answer content, status and source. Mobile tab labels need more room rather than smaller type. Keep the active content near its controlling tab. |
| Citizen services | How does this help a citizen? | Conversation, language controls and three service promises are relevant. | Make the message and citation the visual focus. Channel chips and background scripts should remain secondary. Preserve Telugu/Hindi legibility and adequate line height. |
| Language band | Will this work in the languages we use? | Script samples provide a clear visual change of pace. | Increase explanatory text and balance it against the language samples. Treat 16+ as a claim, not a decorative seal. |
| Security | Who owns the data and where does it run? | Blue surface separates the trust discussion. Diagram and deployment choices are relevant. | Increase diagram labels; connect the ownership, training and encryption explanations to the architecture they describe. Keep deployment options readable. |
| Five steps | What does adoption involve? | Sequence is understandable and compact. | Increase step descriptions and supporting labels. Keep connected desktop sequence and vertical mobile layout; do not reduce text size to preserve five columns. |
| Team | Who is behind this? | Real photographs are the strongest human proof on the page. | Enlarge names and biography text. Give the existing paragraph and quotation clearer breathing room while retaining copy. |
| Contact | What should I do next? | Main action is visible and matches the navigation. | Increase and darken the email/helper text. Preserve one primary action; secondary contact information must remain easy to read. |
| Footer | Who operates the site? | Legal/company details are present. | Raise text size and contrast. Small legal text still needs to be legible. |

## Improve first
Fix finding 1: supporting-text scale and meaningful preview content. It affects nearly every section and directly addresses the document-like appearance described by the user. Headings are already strong; enlarging them further would widen the hierarchy gap.

## Design rules to carry forward
These are proposed project targets, not a statement that a particular font size alone establishes accessibility compliance.
- Preserve original copy, approved layout, light theme, company identity and section order.
- Prefer 16–18px for main reading text, 14–16px for controls/supporting labels and at least 12–13px for incidental metadata.
- Meaningful product-demo content must be readable at normal zoom; 8px interface text cannot carry the sales explanation.
- Give each section a clear path: headline → answer/proof → detail → next action where relevant.
- Use contrast to communicate importance without making secondary content disappear.
- Group numbers with their captions and answers with their sources.
- Use spacing to separate ideas, not to fill large regions around miniature content.
- Keep mobile type readable by stacking/reflowing; do not shrink whole interfaces.
- Keep motion explanatory and optional. A static screenshot cannot establish animation quality or performance.

## Limits
This is a visual readability audit, not a comprehensive accessibility certification or validation of marketing claims. Contrast figures use computed foreground and solid background colors for the cited elements. General samples with complex backgrounds/transitions are not treated as confirmed failures. No product source was changed during this audit.

Measurement evidence: visual-audit-measurements.json. The general measurement script recorded a transient hero-button background and therefore an invalid 1:1 contrast candidate; it was rejected after a reduced-motion/state-stable check. The screenshot and stable rendering show the navy primary button, so no button-contrast defect is reported.
