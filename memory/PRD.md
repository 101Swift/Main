# Swift Website & SEO Services - PRD

## Original Problem Statement
Create a website for website design and SEO services called "Swift Website & SEO Services" with provided logo. Multi-page website (Home, Services, Pricing, Portfolio, Contact - no About page), dark professional theme, focus on Local SEO, Website Design, and PPC Targeted Ads. Contact form that saves inquiries to database with admin dashboard to view leads.

## Architecture
- **Frontend**: React with Tailwind CSS, Shadcn UI components
- **Backend**: FastAPI with MongoDB (motor async driver)
- **Database**: MongoDB (contact_leads collection)
- **Design**: Dark professional theme with Oswald font, Safety Orange (#FF5500) accents

## User Personas
1. **Tradespeople** (plumbers, electricians, builders, etc.) - Looking for SEO and website services
2. **Business Owner** - Admin dashboard user managing leads

## Core Requirements (Static)
- Multi-page website structure
- Contact form with database storage
- Admin dashboard for lead management
- Dark professional design matching brand

## What's Been Implemented (December 2025)
- ✅ Homepage with hero section, how it works, features, trades, areas
- ✅ Services page with 6 service cards (Local SEO, Technical SEO, On-page SEO, PPC Ads, Reporting, Conversion)
- ✅ Pricing page with 3 plans (£399.99 setup, £150/mo growth, £100/mo backlinks add-on)
- ✅ Portfolio page with 6 sample work items
- ✅ Contact page with form saving to MongoDB
- ✅ Admin dashboard at /admin with lead management (view, update status, delete)
- ✅ Backend API endpoints: POST/GET /api/leads, PATCH /api/leads/{id}/status, DELETE /api/leads/{id}, GET /api/leads/stats
- ✅ Mobile responsive navigation
- ✅ Dark professional design with Oswald + Inter fonts

## Prioritized Backlog

### P0 (Critical)
- None

### P1 (Important)
- Email notifications when new leads are submitted
- Lead export functionality (CSV)

### P2 (Nice to Have)
- Blog section for SEO content
- Live chat integration
- Google Analytics integration
- Testimonials/reviews section

## Next Tasks
1. Add email notification on lead submission
2. Add Google Analytics tracking
3. Create blog section for content marketing
