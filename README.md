# TIMS — Hybrid brand website

A fast, mobile-responsive, dependency-free marketing website for TIMS (launch package with AI agent prototyping). The brand is presented as a business, with Tim as the visible founder and builder.

## What is included

- Responsive one-page website: home, services, featured project, approach, about, contact
- Ten offers across business systems strategy, behavioral design, philosophical decision-making, AI agent prototyping, software, cognitive learning, education, and mental-health literacy
- InvoiceFlow prototype link to the GitHub repository
- Service-specific inquiry buttons
- A client inquiry form that opens the visitor's email app **after an email address is configured**
- WhatsApp contact button **after a number is configured**
- If no email is configured, the inquiry form copies the inquiry or downloads a text file; it does **not** send anything
- Accessible navigation and reduced-motion support

## Before publishing (essential)

Open `site-config.js` and set your real contact details:

```js
window.TIMS_CONFIG = {
  contactEmail: 'your-real-email@example.com',
  whatsappNumber: '2547XXXXXXXX',
  businessName: 'TIMS'
};
```

These values above are **examples only**. The shipped config intentionally leaves them blank. Do not publish without adding at least one real contact channel. A working mailto link requires the visitor to have an email app configured; for server-side submissions, use a trusted form service instead.

AI-agent services are described as discovery and prototyping, not as an already shipped autonomous product. Check the services, descriptions, and prices. The included prices are **test offers**, not market-verified prices. Verify the InvoiceFlow GitHub URL, and add your own completed projects and truthful testimonials when available.

## Run locally

Simply double-click `index.html` in Chrome or another browser. Or start a local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish (GitHub + Vercel)

1. Create a new GitHub repository named `tims-site`.
2. Upload the contents of this folder (not the enclosing ZIP file).
3. Sign in to Vercel and choose **Add New → Project**.
4. Import the repository.
5. Deploy as a static site (no build command or framework needed).
6. Add a custom domain whenever you're ready.
7. Send the site URL directly to prospective clients; a live site alone doesn't guarantee traffic.

Alternative hosting: GitHub Pages or Netlify can host the same static files.

## Key safety / product notes

- This website does not collect or store user form submissions on a server. Mailto prepares the email; the visitor must send it.
- The visuals for InvoiceFlow are illustrative and do not imply real customers, results, or features beyond the stated prototype.
- Do not publish private client data, sensitive invoices, or financial information in static site files.
- The StudyUSAHelp service description is independent educational guidance; do not imply institutional affiliation or an admissions guarantee.
- Mental-health literacy is strictly educational and is not psychotherapy, counselling, diagnosis, treatment, or crisis assistance. Avoid soliciting, storing, or responding to sensitive health information through this static website. If clinical services are ever offered, first verify professional registration, licensing, safeguarding, insurance, and applicable laws.
- Neuroscience and cognitive science descriptions concern educational and workplace methods; do not imply medical practice, brain testing, or guarantees of outcomes.
- Consulting offers are proposed capabilities, not claims of client case studies or demonstrated results. Add evidence and client testimonials only when genuine.

## Easiest updates

- **Brand name/text/sections:** `index.html`
- **Colors/layout/mobile appearance:** `styles.css`
- **Contact email/WhatsApp:** `site-config.js`
- **Navigation and form behavior:** `script.js`
- **Logo icon:** `favicon.svg`

For a more fully automated inquiry flow, add a verified hosted form backend later. The current form never falsely says a message was sent.
