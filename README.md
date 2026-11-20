# TIMS — Netlify-ready website with saved inquiries

This version of TIMS is a static HTML/CSS/JS marketing site, configured for Netlify Forms to accept and store project inquiries in the Netlify dashboard. The old email-only inquiry handler has been replaced.

## What is included
- `index.html` — website with an HTML inquiry form that Netlify can detect
- `styles.css` — design
- `script.js` — navigation, service choice, contact buttons (does not intercept the form submit)
- `site-config.js` — public contact email and WhatsApp number (optional, but strongly advised)
- `thank-you.html` — form-success page
- `favicon.svg` — site icon

## Configure before launch
Edit `site-config.js` with your public contact email and WhatsApp number (international digits, without +). Keep secrets and private API keys OUT of this file and GitHub; anything in client JavaScript can be read by visitors.

## Deploy from GitHub on Netlify
1. Upload **all seven files**, not the ZIP or enclosing folder, to the root of your GitHub `tims-website` repository. This version replaces the six original files and adds `thank-you.html`.
2. Go to https://app.netlify.com and choose **Add new project → Import a Git repository**.
3. Authorize GitHub and select `tims-website`. Use `main` branch, blank base/build, and `.` as publish directory if asked.
4. Deploy/Publish. Netlify assigns a `.netlify.app` URL.
5. In the Netlify site dashboard, open **Forms** and ensure **Form detection** is enabled. If you enable it after deployment, redeploy your site.
6. On the **live** website, send a test inquiry using fictional data. After submit you should see the `thank-you.html` page.
7. In Netlify dashboard → **Forms** → **tims-inquiry**, verify that the submission appears. You can download submissions as CSV. Set email notifications under Forms → Submission notifications if desired.

## Important distinctions
- Opening `index.html` on your computer can preview its design, but cannot test form submission: Netlify handles form submissions **only on the deployed site**.
- Netlify Forms can store project inquiries without your own database. It does **not** automatically create a custom CRM, a login system, or database tables for InvoiceFlow.
- On current Netlify credit-based Free accounts, form submissions are free; hosting/deploying and other usage consume credits. Check live plan terms.
- Do not request sensitive health records, financial records, passwords, or ID documents with this general-purpose inquiry form. Review appropriate privacy notices and data protection obligations before public commercial use.
- The mental-health section is educational only; there is no clinical service, diagnosis or treatment.
- The InvoiceFlow project linked from the website is a prototype. No client outcomes are implied.
