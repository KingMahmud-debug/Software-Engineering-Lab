# BashaMate Frontend Test Plan

## Test Environment

Test the prototype in a modern Chrome, Firefox, or Safari browser at a mobile width near 375px and a desktop width near 1280px. Run `pnpm check` before manual testing and `pnpm build` before final submission.

## Manual Functional Test Cases

| ID | Scenario | Steps | Expected result | Status |
| --- | --- | --- | --- | --- |
| TC-01 | Home navigation | Open the home page and choose Explore homes | Explore route opens without a dead end | Completed in visual review |
| TC-02 | Tenant-fit filter | On Explore, toggle bachelor-friendly filter | Only matching sample cards remain visible | Pending final QA |
| TC-03 | Search filter | Search for `Chattogram` | Relevant listing card remains visible | Pending final QA |
| TC-04 | Empty state | Enter a term not in sample data | Helpful no-results message and reset action appear | Pending final QA |
| TC-05 | Sort results | Choose lowest-rent sorting | Cards are ordered by increasing sample rent | Pending final QA |
| TC-06 | Save listing | Tap a listing heart, then open Saved homes | Listing appears on Saved homes page | Pending final QA |
| TC-07 | Persistence | Refresh after saving a listing | Saved item remains because browser storage is used | Pending final QA |
| TC-08 | Inquiry feedback | Open a listing and choose Send inquiry | Visible demo confirmation appears; no real message is sent | Pending final QA |
| TC-09 | Roommate request | Choose Connect on a match card | Button changes state and feedback appears | Pending final QA |
| TC-10 | Local message | Write a non-empty chat message and submit | New outgoing message appears in current session | Pending final QA |
| TC-11 | Listing validation | Try creating a listing without title or rent | Form feedback asks for required fields | Pending final QA |
| TC-12 | Listing preview | Enter listing information | Preview updates with the local form values | Pending final QA |
| TC-13 | Moderation state | Resolve a sample report | Status changes to Resolved locally | Pending final QA |
| TC-14 | Keyboard access | Tab through navigation and a form | Focus indicator remains visible and controls are reachable | Ready for user verification |
| TC-15 | Responsive layout | Check home, Explore, listing detail, messages on mobile and desktop | No major overflow; navigation changes appropriately | Completed desktop visual review |
| TC-16 | Registration | Open Account → Register → enter name, email, and password → submit | Browser account is saved and Profile opens with the registered name | Completed implementation check |
| TC-17 | Login and logout | Sign in with email and password, then choose Sign out | Account state appears in navigation, then clears on sign out | Completed implementation check |
| TC-18 | Automatic availability reply | In Messages, send “Is the room still available?” | A relevant availability reply appears after a short delay | Completed implementation check |
| TC-19 | Automatic room-size reply | In Messages, send “Is the room wide enough?” | A relevant room-size and viewing reply appears after a short delay | Completed implementation check |

## Build and Portability Checks

| Check | Command or method | Expected result | Status |
| --- | --- | --- | --- |
| Type safety | `pnpm check` | TypeScript exits with code 0 | Completed |
| Production bundle | `pnpm build` | Build finishes without errors | Completed |
| Clean dependency restore | Remove `node_modules`, then `pnpm install --frozen-lockfile` | Dependencies restore from lockfile | Completed in isolated temporary copy |
| Clean production build | Run `pnpm build` after clean restore | Same build result on current machine | Completed in isolated temporary copy |
