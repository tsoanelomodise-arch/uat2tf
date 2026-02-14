

## Remove WhatsApp Social Media Icon from Header and Footer

### What This Does
Removes the WhatsApp icon and link from both the header (SocialIconsRow) and the footer (transformation/Footer.tsx), keeping all other social media icons intact.

### Changes

**1. `src/components/shared/SocialIconsRow.tsx`** (Header)
- Remove the WhatsApp `<a>` element (the `wa.me/0861113186` link with WhatsApp SVG)

**2. `src/components/transformation/Footer.tsx`** (Footer)
- Remove the WhatsApp `<a>` element from the social media icons section

No other files or database changes required.

