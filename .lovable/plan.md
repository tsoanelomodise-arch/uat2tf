## Add Admin Login Link Below QR Code in Footer

### What

Add a subtle "Admin" text link directly below the QR code in the site footer, styled in black text (which will appear as black-on-black since the footer has a black background) with no hover highlight effect.

### File: `src/components/transformation/Footer.tsx`

**Change**: In the left section ("Scan to Follow Us"), add a `Link` element below the QR code `<a>` tag:

- Import `Link` from `react-router-dom`
- Add `<Link to="/admin/login">` with text "Admin"
- Style: small text (`text-xs`), white color (matches footer), no underline, no hover effects (`hover:text-white` or similar to prevent highlight)
- Positioned below the QR code with a small top margin (`mt-3`)
  &nbsp;