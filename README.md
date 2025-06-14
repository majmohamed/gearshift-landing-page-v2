# Gearshift Landing Page

A modern, responsive landing page for Gearshift - driving instructor management software designed specifically for UK driving instructors.

## 🚗 About Gearshift

Gearshift is a comprehensive software solution that helps UK driving instructors manage their business more effectively by:

- Filling empty lesson slots automatically
- Managing student progress and lesson notes
- Handling payments and invoicing
- Automating student communication and follow-ups
- Tracking business performance and revenue

## 🛠 Tech Stack

- **Framework**: Next.js 13.5.1 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui
- **Icons**: Lucide React
- **Animations**: Custom CSS animations with Intersection Observer
- **Deployment**: Static export ready

## 🎨 Design Features

- **Custom Color Palette**: Warm, professional colors including signature green (#4CAF75) and cone orange (#F29E4C)
- **Responsive Design**: Mobile-first approach with tablet and desktop breakpoints
- **Smooth Animations**: Scroll-triggered animations and micro-interactions
- **Modern UI**: Clean, Apple-inspired design aesthetics
- **Accessibility**: Proper contrast ratios and semantic HTML

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gearshift-landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main landing page
├── components/
│   ├── ui/                  # Reusable UI components (shadcn/ui)
│   ├── animated-section.tsx # Scroll animation wrapper
│   └── testimonials-marquee.tsx # Testimonials carousel
├── hooks/
│   └── use-intersection-observer.ts # Custom hook for scroll animations
├── lib/
│   └── utils.ts             # Utility functions
└── public/
    ├── *.gif                # Demo animations
    ├── *.jpeg               # Screenshots and images
    └── *.png                # Logos and graphics
```

## 🎯 Key Sections

### Hero Section
- Compelling headline focusing on revenue recovery
- Clear value proposition
- Dashboard preview image
- Primary call-to-action

### ROI Cards
- Four key problem/solution pairs
- Revenue impact estimates
- Visual icons for each benefit

### How It Works
- Before/after comparisons
- Interactive media demonstrations
- Responsive grid layout

### Testimonials
- Infinite scrolling marquee
- Real instructor quotes
- Location-based credibility

### FAQ Section
- Collapsible accordion interface
- Addresses common objections
- Builds trust and confidence

## 🎨 Design System

### Colors
- **Primary Green**: `#4CAF75`
- **Cone Orange**: `#F29E4C`
- **Dark Text**: `#33373F`
- **Light Text**: `#8A8A8A`
- **Background**: `#ECE6DC` (oatmeal)
- **Card Background**: `#F7F5F2`
- **Border**: `#DCD6CD`

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, large sizes for impact
- **Body**: Regular weight, optimized line height
- **Hierarchy**: Clear size and weight distinctions

## 📱 Responsive Behavior

- **Mobile**: Single column, horizontal scroll for cards
- **Tablet**: Two-column grid, optimized spacing
- **Desktop**: Multi-column layouts, enhanced animations

## 🔧 Build & Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Static Export
The project is configured for static export:
```bash
npm run build
```
This generates a static site in the `out/` directory.

## 🎭 Animations

The landing page features several animation types:

- **Scroll Animations**: Elements fade in as they enter viewport
- **Staggered Delays**: Sequential animation timing
- **Hover Effects**: Interactive button and card states
- **Marquee**: Infinite scrolling testimonials

## 📊 Performance Optimizations

- Static image optimization
- Lazy loading for below-fold content
- Minimal JavaScript bundle
- Efficient CSS with Tailwind purging
- Optimized font loading

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags and descriptions
- Proper heading hierarchy
- Alt text for images
- Fast loading times

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test responsiveness across devices
5. Submit a pull request

## 📄 License

This project is proprietary software for Gearshift. All rights reserved.

## 📞 Contact

For questions about this landing page or Gearshift software, please contact the development team.

---

Built with ❤️ for UK driving instructors