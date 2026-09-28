# NITI AIDE website

Light-theme rebuild using Vite, semantic HTML, JavaScript and the installed UX4G CSS package.

## Run
- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

## Content and behavior
The original website is preserved in `docs/original-site.html`. Product previews are illustrative, not live AI. The contact buttons open an email draft to the existing address. There is no submission backend. Original marketing copy, including percentage/performance claims, is retained at the owner’s request; these claims have not been independently validated. Deployment and security messaging comes from the original site and needs business validation before publication.

UX4G is bundled locally through npm, without mixing CDN versions. The installed version is 3.0.0; its documented button size is `ux4g-btn-m`. Styling is customized in `src/styles.css`. Fonts load from Google Fonts with sans-serif fallbacks.

## Verification
`npm test` checks responsive overflow, navigation, tabs and keyboard behavior, language switching, source disclosure, local assets and JavaScript errors. Tests use installed Microsoft Edge. Screenshots are generated in `qa/`.

