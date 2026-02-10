

# Swap Contacts with Test Contacts

## Overview
Replace the `/contacts` route with the TestContacts page and remove the "Test Contacts" nav link. The existing Contacts page will no longer be accessible.

## Changes

### 1. `src/App.tsx`
- Change the `/contacts` route to render `TestContacts` instead of `Contacts`
- Remove the `/test-contacts` route
- Remove the `Contacts` lazy import (no longer used)

### 2. `src/components/phakamani/PhakamaniNavbar.tsx`
- Remove the `isTestContactsPage` variable
- Remove both "Test Contacts" `<Link>` elements (desktop and mobile)
- The existing "Contacts" link at `/contacts` remains and will now serve the TestContacts page

## No Other Impact
- No other files reference `/test-contacts`
- The "Contacts" nav link stays in place, pointing to `/contacts` as before
- `src/pages/TestContacts.tsx` file is kept (just served at `/contacts` now)
- `src/pages/Contacts.tsx` becomes unused but is not deleted

