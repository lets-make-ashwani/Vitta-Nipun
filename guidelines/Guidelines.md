# Vitta Nipun Finance Education Platform - Design System Guidelines

## Brand Identity

### Brand Name
**Vitta Nipun** - Expert in Finance Education

### Brand Values
- Professional & Trustworthy
- Premium Quality Education
- Student-Centric Approach
- Industry-Leading Results
- Innovation in Learning

## Color System

### Primary Colors

**Deep Teal (#0B4F66)**
- Use for: Navbar, headings, primary buttons, footer, premium sections
- Represents: Trust, professionalism, finance expertise

**Growth Green (#86B633)**
- Use for: CTA highlights, gradients, icons, hover states, accents
- Represents: Growth, prosperity, success

### Supporting Colors
- White: #FFFFFF
- Light Background: #F5F7FA
- Muted Text: #5A7C8C

## Typography Rules

- Use system fonts for optimal performance
- Heading weights: 600 (semibold)
- Body weight: 400 (normal)
- Base font size: 16px
- Line height: 1.5 for readability
- Mobile: Scale down heading sizes responsively

## Layout Guidelines

### Spacing
- Section padding: py-16 on mobile, py-24 on desktop
- Container max-width: 1280px (7xl)
- Use consistent gap values: gap-4, gap-6, gap-8
- Maintain visual rhythm across sections

### Grid Systems
- Mobile (< 640px): Single column
- Tablet (640px-1023px): 2 columns
- Desktop (1024px+): 3-4 columns
- Always use CSS Grid or Flexbox for layouts

## Component Guidelines

### Buttons
**Primary Button**
- Background: bg-primary
- Hover: bg-primary/90
- Text: white
- Padding: px-6-8 py-3-4
- Border radius: rounded-lg
- Font weight: semibold

**Secondary Button**
- Background: bg-secondary
- Hover: bg-secondary/90
- Same sizing as primary

### Cards
- Border radius: rounded-2xl
- Border: border-border (subtle)
- Padding: p-6 to p-8
- Hover: Add shadow-2xl and slight lift (-translate-y-2)
- Use glassmorphism for overlays (bg-white/10 backdrop-blur-sm)

### Navigation
- Desktop: Fixed navbar with backdrop blur
- Mobile: Hamburger menu + bottom navigation
- All navigation must support smooth scroll
- Maintain z-index hierarchy (nav: z-50, modals: z-50)

## Mobile-First Design Rules

### Touch Targets
- Minimum size: 44x44px for all interactive elements
- Adequate spacing between clickable items
- No hover-only functionality

### Mobile Navigation
- Use hamburger menu for full navigation
- Provide bottom navigation bar for quick access
- Keep important actions within thumb reach
- Ensure swipe gestures work smoothly

### Responsive Breakpoints
```
Mobile: 320px - 639px
Tablet: 640px - 1023px
Desktop: 1024px - 1439px
Large Desktop: 1440px+
```

## Animation Guidelines

### Page Entry Animations
- Use fade + slide up (y: 20)
- Stagger list items with 0.05-0.1s delays
- Set viewport: { once: true } for performance
- Keep animations smooth (60fps target)

### Hover Effects
- Scale: 1.02 to 1.1 maximum
- Translate: -y-2 to -y-8
- Add shadow elevation
- Smooth color transitions

### Mobile Interactions
- Slide-in drawers from right
- Smooth accordion expansions
- Tap highlights (not hover)
- Pull-to-refresh where applicable

## Accessibility Requirements

### Color Contrast
- Body text: Minimum 4.5:1 (AA)
- Large text: Minimum 3:1
- Interactive elements: 3:1 minimum
- Always provide focus states

### Keyboard Navigation
- Logical tab order
- Visible focus indicators
- Support Enter/Space for buttons
- Escape to close modals

### Screen Readers
- Use semantic HTML (nav, main, section, article)
- Provide alt text for all images
- Use ARIA labels where needed
- Avoid "click here" - use descriptive text

## Content Guidelines

### Images
- Use Unsplash for stock photos
- Always include descriptive alt text
- Optimize for web (use appropriate sizes)
- Lazy load images below the fold

### Copy
- Use action-oriented button labels
- Keep headings clear and concise
- Body text: Comfortable reading length
- Avoid jargon unless finance-specific

## Performance Guidelines

- Lazy load components below the fold
- Optimize bundle size
- Use code splitting
- Minimize animation on slow connections
- Target Lighthouse score: 90+

## Section-Specific Rules

### Hero Section
- Must have clear CTA buttons
- Include trust indicators (stats)
- Use gradient backgrounds
- Responsive illustration/visual

### Course Cards
- Show: Title, instructor, duration, rating, price
- Include discount badges where applicable
- Hover effect required
- Mobile: Stack vertically

### Testimonials
- Include: Name, photo, company, package
- Video preview CTAs
- Quote design
- Grid layout (responsive)

### FAQ
- Use accordion pattern
- Smooth expand/collapse
- Chevron rotation indicator
- First item open by default

## Development Rules

### File Organization
- One component per file
- Group related components in folders
- Use clear, descriptive names
- Keep components under 300 lines

### Code Style
- Use TypeScript types
- Meaningful variable names
- Comment complex logic
- Follow React best practices

### State Management
- Use React hooks
- Keep state close to usage
- Lift state only when needed
- Use context for global state

## Mobile UX Best Practices

### Forms
- Large input fields (min 44px height)
- Clear labels above inputs
- Use appropriate input types for mobile keyboards
- Full-width submit buttons on mobile
- Show validation inline

### Navigation
- Sticky header on scroll
- Back-to-top button after scroll
- Breadcrumbs for deep pages
- Clear current page indicator

### Performance
- Load critical content first
- Show loading states
- Handle offline gracefully
- Progressive enhancement

## Testing Checklist

### Responsiveness
- [ ] Test on mobile (320px, 375px, 414px)
- [ ] Test on tablet (768px, 1024px)
- [ ] Test on desktop (1440px, 1920px)
- [ ] Test landscape and portrait

### Interactions
- [ ] All buttons work
- [ ] Forms validate correctly
- [ ] Navigation functions properly
- [ ] Animations are smooth

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast passes
- [ ] Focus states visible

## Future Enhancement Guidelines

### Phase 2 Features
- Student dashboard (LMS)
- Admin panel
- Course detail pages
- Authentication system
- Payment integration

### Technical Debt
- Add comprehensive tests
- Implement error boundaries
- Add analytics tracking
- Set up monitoring

---

**Version**: 1.0.0  
**Last Updated**: May 28, 2026  
**Maintained by**: Vitta Nipun Development Team
