# Coaching Dekho 🎓

A modern, Gen Z-friendly EdTech marketplace for discovering and comparing coaching institutes for competitive exams.

## Project Overview

**Coaching Dekho** is a premium web platform designed to help students find the perfect coaching institute for MBA, NEET, JEE, UPSC, GMAT, NMAT, CUET, and other competitive exams. The platform features a clean, visually rich design with smooth animations and an intuitive user experience.

### 🌐 Live Demo

**Development URL**: https://3000-i6xnz56sfkjges738h0og-8f57ffe2.sandbox.novita.ai

**Status**: ✅ Active and Running

### Brand Colors
- **Primary Blue** (Facebook Blue): `#1877F2` - Trust, navigation, headings
- **Secondary Red** (Zomato Red): `#E23744` - CTAs, highlights, buttons
- **Background**: `#FFFFFF` (White)
- **Light Sections**: `#F5F7FA`
- **Text**: `#1F2937` (Dark gray)

## Features

### Currently Implemented

✅ **Hero Section**
- Large, engaging headline with search functionality
- Search bar with Exam, Course, and City filters
- Trending exams quick links
- Animated gradient background

✅ **Exam Categories Grid**
- 8 popular exam categories (JEE, NEET, MBA, UPSC, CUET, GMAT, NMAT)
- Icon-based cards with hover effects
- Smooth animations and color-coded categories

✅ **Coaching Institute Listings**
- Horizontal scrolling cards
- Institute cards with:
  - High-quality images
  - Star ratings and review counts
  - Location badges
  - Price ranges
  - Key features
  - Badge indicators (Top Rated, Best Seller, Verified, Popular)
- Interactive buttons (View Details, Compare, Share)

✅ **Why Coaching Dekho Section**
- 4 key trust factors with icons
- Statistics showcase (1000+ institutes, 50K+ students)
- Gradient stats banner

✅ **Student Testimonials**
- Success stories with student photos
- Achievement badges (Rank/Percentile)
- 5-star rating system
- Quote-style design

✅ **Call-to-Action Section**
- Prominent CTA with gradient background
- Dual buttons (Find Coaching / List Institute)

✅ **Footer**
- Brand information with social links
- Quick links and popular exams
- Contact information

✅ **Responsive Design**
- Mobile-first approach
- Sticky navigation
- Smooth scroll behavior
- Touch-friendly interactions

### API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/institutes` | GET | Get all coaching institutes |
| `/api/institutes/:id` | GET | Get specific institute details |
| `/api/testimonials` | GET | Get student testimonials |

### Mock Data Included

- 6 Featured coaching institutes (Career Launcher, Allen, Aakash, Vajiram & Ravi, TIME, Resonance)
- 3 Student testimonials with success stories

## Tech Stack

- **Framework**: Hono (Lightweight web framework)
- **Runtime**: Cloudflare Workers/Pages
- **Frontend**: HTML5, Tailwind CSS, Vanilla JavaScript
- **Fonts**: Inter (body), Poppins (headings)
- **Icons**: Font Awesome 6.4.0
- **Build Tool**: Vite
- **Deployment**: Wrangler (Cloudflare CLI)

## Project Structure

```
webapp/
├── src/
│   └── index.tsx           # Main Hono application with routes
├── public/
│   └── static/
│       ├── app.js          # Frontend JavaScript
│       └── styles.css      # Custom CSS styles
├── ecosystem.config.cjs    # PM2 configuration
├── wrangler.jsonc          # Cloudflare configuration
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite build configuration
└── README.md              # This file
```

## Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Local Development

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Start development server**:
   ```bash
   # Clean port first
   npm run clean-port
   
   # Start with PM2
   pm2 start ecosystem.config.cjs
   
   # Check logs
   pm2 logs --nostream
   ```

3. **Test the application**:
   ```bash
   curl http://localhost:3000
   ```

### Available Scripts

```bash
npm run dev              # Vite dev server
npm run dev:sandbox      # Wrangler dev server (for sandbox)
npm run build            # Build for production
npm run preview          # Preview production build
npm run deploy           # Build and deploy to Cloudflare
npm run clean-port       # Kill process on port 3000
npm run test             # Test local endpoint
```

## Deployment

### Deploy to Cloudflare Pages

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy**:
   ```bash
   npm run deploy
   ```

3. **Production URL**: Will be provided after deployment (e.g., `https://webapp.pages.dev`)

## Features Not Yet Implemented

🔲 **Advanced Search & Filters**
- Multi-criteria filtering (Price, Location, Rating, Batch type)
- Real-time search suggestions
- Filter by exam category

🔲 **Institute Detail Pages**
- Complete course information
- Faculty profiles
- Detailed fee structure
- Photo gallery
- Student reviews section
- Contact form

🔲 **Comparison Tool**
- Side-by-side comparison of up to 3 institutes
- Feature comparison table
- Price comparison
- Results comparison

🔲 **User Authentication**
- Student login/signup
- Institute admin dashboard
- Profile management

🔲 **Backend Integration**
- Database integration (Cloudflare D1)
- Real institute data
- User reviews system
- Booking/inquiry system

🔲 **Additional Features**
- Blog section for exam tips
- Scholarship information
- Online/offline batch filters
- Distance from location feature
- Chatbot support

## Recommended Next Steps

1. **Phase 1: Core Functionality**
   - Add Cloudflare D1 database for persistent storage
   - Create institute detail pages
   - Implement working search and filters
   - Add comparison functionality

2. **Phase 2: User Engagement**
   - User authentication system
   - Review and rating submission
   - Inquiry/booking forms
   - Wishlist/favorites feature

3. **Phase 3: Institute Management**
   - Institute admin dashboard
   - Profile management for institutes
   - Analytics dashboard
   - Lead management system

4. **Phase 4: Advanced Features**
   - Payment integration
   - Live chat support
   - Mobile app development
   - AI-powered recommendations

## Design Philosophy

- **Gen Z Friendly**: Modern, vibrant, and visually engaging
- **Premium Feel**: High-quality images, smooth animations, attention to detail
- **Mobile-First**: Optimized for mobile devices with responsive design
- **Trustworthy**: Clear information, verified badges, real reviews
- **Fast & Lightweight**: Edge-deployed for optimal performance

## Performance Features

- Lazy loading images
- Smooth scroll animations
- CSS animations (no JS animation libraries)
- Horizontal scrolling for mobile
- Optimized Cloudflare edge deployment

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome)

## License

All rights reserved © 2026 CoachingDekho

## Contact

For inquiries: support@coachingdekho.com

---

Built with ❤️ using Hono + Cloudflare Pages
