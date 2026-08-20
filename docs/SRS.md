# Software Requirements Specification

## BashaMate: Housing and Roommate Finder for Bachelor Students

**Version:** 1.1 — Frontend course prototype  
**Course:** Software Engineering Lab  
**Status:** Implementation-aligned revision

## 1. Purpose and Scope

BashaMate is a Bangladesh-wide web interface that helps bachelor students discover rental housing and identify potentially compatible roommates across major cities and divisions. The original product concept includes students, landlords, and administrators. This revision deliberately limits the delivered software to an interactive **frontend prototype**; backend operations are proposed and documented but are not represented as working features.

| Scope boundary | Included in the running prototype | Explained but not implemented |
| --- | --- | --- |
| Student experience | Browse, search, filter, save, view details, view matches, and send local sample messages | Authentication, OTP, account persistence, data storage |
| Housing listings | Mock listing cards, tenant-fit tags, listing details, inquiry feedback | Listing API, database search, photo upload, publishing workflow |
| Matching | Preference UI and sample compatibility explanations | Matching service, ranked recommendation calculation, consent persistence |
| Landlord experience | Dashboard, create-listing form, client validation, preview | Listing moderation, photo storage, applicant access rules |
| Moderation | Sample report queue and local resolved status | Administrative roles, audit log, report persistence, enforcement |

## 2. Stakeholders and User Classes

| User class | Main objective | Prototype representation |
| --- | --- | --- |
| Student | Find a suitable bachelor-friendly home and compatible roommate | Primary user flow and all core student pages |
| Landlord | Present a property clearly and review relevant inquiries | Landlord dashboard and sample listing form |
| Moderator | Review reports and protect trust in the platform | Admin demonstration queue with explanatory content |
| Course evaluator | Assess analysis, design, implementation, and testing discipline | Documentation, interaction notes, and traceability tables |

## 3. Functional Requirements and Traceability

| ID | Requirement | Prototype status | Evidence in interface | Proposed full-system responsibility |
| --- | --- | --- | --- | --- |
| FR-1 | A student can register, sign in, and present a verification-progress profile. | Implemented locally / visualized | Browser-based account page and profile progress steps | Secure user service, OTP confirmation, ID review |
| FR-2 | A student can search by area and budget. | Implemented locally | Explore page filters and search field | Listings API and indexed database query |
| FR-3 | Listings show tenant-fit information. | Implemented with sample data | Bachelor-friendly and family-only labels | Listing validation and data storage |
| FR-4 | A student can see compatible roommate suggestions. | Visualized | Roommate preference controls and match cards | Weighted matching service |
| FR-5 | Users can communicate before sharing private contact details. | Implemented locally | Messages page, local message state, and common-question automatic replies | Access-controlled real-time chat service |
| FR-6 | A landlord can prepare a listing. | Implemented locally | Create Listing form and preview | Server-side validation, image upload, publishing |
| FR-7 | A landlord can view appropriate trust signals. | Visualized | Inquiry cards and verification icon | Role-checked profile data access |
| FR-8 | Parties can submit tenancy reviews. | Deferred | Not included in current UI | Completed-tenancy rules and review service |
| FR-9 | A moderator can review reports. | Implemented locally | Admin queue and local resolve action | Moderation roles, audit record, enforcement |
| FR-10 | A student can save listings. | Implemented locally | Heart action and Saved Homes page | User favorites table or collection |

## 4. Non-Functional Requirements

| Category | Requirement for the prototype |
| --- | --- |
| Usability | The primary search-to-save journey is accessible from the home page and gives visible feedback for each action. |
| Responsiveness | The interface supports small mobile widths through desktop layouts using responsive CSS. |
| Accessibility | Interactive controls have labels, keyboard focus, color-independent text, and reduced-motion safeguards. |
| Performance | Data is static and the first interface uses lightweight client-side state; no network database query is required. |
| Privacy | No personally identifiable user information is collected, stored, or transmitted by the prototype. |
| Portability | The project uses a committed lockfile, no required API key, and documented install/build commands. |
| Maintainability | Routes, sample data, shared state, and reusable components are separated by responsibility. |

## 5. Primary Use Cases

| Use case | Actor | Main success flow |
| --- | --- | --- |
| Discover a rental | Student | Open Explore → search/filter → open listing → inspect tenant fit → save or send inquiry feedback |
| Build a shortlist | Student | Tap a listing heart → open Saved Homes → compare selected listings |
| Explore a roommate match | Student | Open Find a Roommate → adjust preferences → inspect match reasons → send local connection request |
| Prepare a property | Landlord | Open landlord workspace → create listing → complete client validation → inspect live preview |
| Review a report | Moderator | Open admin demonstration → view sample reports → resolve a local status |

## 6. Constraints and Assumptions

The project is designed for one academic-semester course submission and is frontend-only. All listings, people, messages, verification progress, reports, and compatibility values are sample data. The product does not support payment or rent collection. A complete system would require explicit privacy, consent, authorization, security, and moderation policies before handling real housing or student data.

## 7. Acceptance Criteria for Delivery

The course prototype is accepted when the student demonstration journey works without a backend; all routes are reachable; search and filters update results; favorites are retained within browser storage; forms explain or validate their demo behavior; documentation identifies what is implemented versus proposed; and the repository can be installed and built using the README instructions.
