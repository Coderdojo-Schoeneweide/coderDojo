I'll help you refactor step by step. Let me break down exactly what we need to create to maintain all styling and content while making it modular.

## Step 1: Files to Create (in order)

### Core Configuration & Types
1. `src/types/index.ts` - TypeScript interfaces
2. `src/config/theme.ts` - Theme configuration
3. `src/config/homepage.ts` - Homepage content data

### Global Styles
4. `src/styles/globals.css` - Global styles and CSS variables
5. components.css - Component-specific styles
6. `src/styles/animations.css` - Animation definitions

### UI Components
7. `src/components/ui/Button.astro` - Reusable button component
8. `src/components/ui/Card.astro` - Card component for graphics
9. `src/components/ui/Icon.astro` - SVG icon component

### Section Components
10. `src/components/sections/Hero.astro` - Hero section
11. `src/components/sections/FeatureSection.astro` - Generic feature section
12. `src/components/sections/PartnersSection.astro` - Partners section

### Layout Updates
13. Update Base.astro - Include new styles
14. Refactor index.astro - Use new components

## What to Implement First

### Phase 1: Foundation (Files 1-6)
Start with the type definitions, configuration, and global styles. This ensures we have a solid foundation and don't lose any existing styling.

### Phase 2: UI Components (Files 7-9)
Create the basic UI building blocks that will be used across sections.

### Phase 3: Section Components (Files 10-12)
Build the larger section components using the UI components.

### Phase 4: Integration (Files 13-14)
Update layouts and pages to use the new modular system.

## Key Preservation Points

**Content to Preserve:**
- All text content from existing sections
- All button links and targets
- All styling classes and effects
- All animations (fade-in-up, hover effects)
- All responsive behavior
- All dark/light mode variations

**Styling to Preserve:**
- Gradient backgrounds
- Button styles (primary, secondary, outline)
- Typography hierarchy
- Spacing and layout
- Shadow effects
- Color schemes
- Hover animations

**Functionality to Preserve:**
- External links (pretix.eu)
- Email links
- Internal navigation
- Theme switching capability

Would you like me to start with **Phase 1** and show you the first 3 files (types, theme config, and homepage config)? This will establish the foundation without breaking anything existing.