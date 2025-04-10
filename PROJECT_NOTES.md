# Tharun Kumar Portfolio - Project Notes

This document outlines the project structure, technical decisions, troubleshooting steps, and best practices used in building this Next.js portfolio website.

## Project Overview

- **Type**: Personal Portfolio Website
- **Framework**: Next.js 15.2.5
- **Styling**: Tailwind CSS 3.3.3
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Project Structure

```
tharun-kumar-portfolio/
├── app/                  # Next.js App Router
│   ├── components/       # Reusable components
│   │   ├── Header.tsx    # Navigation header with links
│   │   └── Footer.tsx    # Site footer with contact info
│   ├── about/            # About page
│   │   └── page.tsx      # Personal bio and details
│   ├── contact/          # Contact page
│   │   └── page.tsx      # Contact form and info
│   ├── education/        # Education page
│   │   └── page.tsx      # Educational background
│   ├── experience/       # Experience page
│   │   └── page.tsx      # Work experience
│   ├── projects/         # Projects page
│   │   └── page.tsx      # Project showcase
│   ├── skills/           # Skills page
│   │   └── page.tsx      # Skills and competencies
│   ├── certifications/   # Certifications page
│   │   └── page.tsx      # Professional certifications
│   ├── globals.css       # Global styles including Tailwind directives
│   ├── layout.tsx        # Root layout (shared across all pages)
│   ├── page.tsx          # Homepage
│   └── not-found.js      # Custom 404 page
├── public/               # Static assets
├── .eslintrc.json        # ESLint configuration
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Technical Decisions

### 1. Next.js App Router

We used Next.js 15's App Router for improved routing and better performance. Each page is a separate directory under the `app` folder with a `page.tsx` file defining its contents.

### 2. Styling Approach

- **Tailwind CSS**: Used for utility-first styling
- **Custom Gradients**: Applied for background and text effects
- **Responsive Design**: Mobile-first approach with responsive breakpoints

### 3. Animation Strategy

- **Framer Motion**: Used for page transitions and component animations
- **Staggered Animations**: Components appear with slight delays for a cascading effect
- **Hover Effects**: Applied to cards and buttons for interactivity

### 4. Data Structure

- **Content Organization**: Each page has its own structured content
- **Component Reuse**: Common UI patterns extracted into reusable components
- **Type Safety**: TypeScript used for prop typing and data validation

## Key Issues and Solutions

### 1. PostCSS Configuration Issues

**Problem**: Encountered "Malformed PostCSS Configuration" and "Module not found: Can't resolve 'tailwindcss'" errors.

**Solution**:
- Changed PostCSS config from ES modules to CommonJS format
- Used object notation for plugins rather than array format
- Fixed specific version numbers for compatibility:
  ```json
  "postcss": "8.4.28",
  "tailwindcss": "3.3.3",
  "autoprefixer": "10.4.15"
  ```

### 2. Unescaped Entities in JSX

**Problem**: Build errors due to unescaped apostrophes and quotes in JSX text.

**Solution**:
- Added ESLint rule to disable entity escaping warnings:
  ```json
  "rules": {
    "react/no-unescaped-entities": "off"
  }
  ```
- Properly escaped entities in JSX (e.g., `doesn&apos;t` instead of `doesn't`)

### 3. Next.js Config Compatibility

**Problem**: Some Next.js configuration options were not recognized.

**Solution**:
- Removed unsupported `swcMinify` option
- Updated to use supported options only
- Added appropriate image optimization settings

### 4. 404 Page Configuration

**Problem**: Initial load showing 404 errors.

**Solution**:
- Created a custom `not-found.js` file with proper styling
- Ensured proper route handling in Next.js config
- Improved navigation with a "Return to Homepage" button

## Best Practices Implemented

### 1. TypeScript Integration

- Used TypeScript for type safety across components
- Defined interfaces for component props
- Leveraged type checking for data structures

### 2. Performance Optimization

- Implemented image optimization with Next.js image configuration
- Used `removeConsole` in production builds
- Enabled scroll restoration for better navigation experience

### 3. Code Organization

- Separated concerns with component-based architecture
- Maintained consistent naming conventions
- Kept related functionality grouped together

### 4. Deployment Configuration

- Created specific configurations for Vercel deployment
- Ensured proper handling of environment variables
- Set up production-specific optimizations

### 5. Error Handling

- Implemented custom error pages
- Used ESLint to catch potential issues
- Added proper error boundaries around critical components

## Version Compatibility Notes

| Package | Version | Notes |
|---------|---------|-------|
| Next.js | 15.2.5 | App Router, requires Node.js 18.17+ |
| React | 19.0.0 | Latest major version |
| Tailwind CSS | 3.3.3 | Compatible with PostCSS 8.4.28 |
| PostCSS | 8.4.28 | Works well with Next.js 15 |
| Framer Motion | 12.6.3 | For animations and transitions |

## Common Commands

```bash
# Development
npm run dev    # Start the development server

# Production Build
npm run build  # Create production build
npm start      # Start production server

# Linting
npm run lint   # Run ESLint
```

## Troubleshooting Guide

### CSS Not Loading

If styles are not applying, check:
1. `globals.css` includes proper Tailwind directives:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
2. `postcss.config.js` has correct format:
   ```js
   module.exports = {
     plugins: {
       tailwindcss: {},
       autoprefixer: {}
     }
   }
   ```
3. `tailwind.config.js` includes all content paths:
   ```js
   content: [
     './app/**/*.{js,ts,jsx,tsx,mdx}',
     './pages/**/*.{js,ts,jsx,tsx,mdx}',
     './components/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   ```

### Build Errors

For build failures:
1. Check package versions for compatibility
2. Ensure PostCSS config is correct
3. Fix any ESLint errors or add appropriate rules
4. Verify Next.js config has only supported options

### Deployment Issues

For Vercel deployment problems:
1. Check for unescaped entities in JSX
2. Ensure Next.js config is compatible
3. Remove any unsupported experimental features
4. Verify all dependencies are properly declared in package.json

## Final Notes

This project demonstrates a modern approach to building a personal portfolio with Next.js and Tailwind CSS. By following the patterns established here and being mindful of the compatibility issues documented, you can extend this portfolio or create similar projects with minimal friction. 