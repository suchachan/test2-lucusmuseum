# Lucas Museum Design System
*Inspired by Minimals Design Principles*

## Overview
This design system provides a sophisticated, modern foundation for the Lucas Museum of Narrative Art website, following Minimals design principles with refined color palettes, elegant typography, and polished components.

## Getting Started

### Installation
Include the design system CSS before your component styles:

```html
<link rel="stylesheet" href="design-system.css">
<link rel="stylesheet" href="styles.css">
```

### Basic Usage
Use Minimals-inspired components and utility classes:

```html
<button class="btn btn-contained btn-primary">Primary Action</button>
<div class="card card-elevation-4 p-6">Content goes here</div>
<h1 class="typography-h1">Museum Exhibition</h1>
```

## Design Philosophy

### Minimals Principles Applied
- **Sophisticated Color Palettes**: Multi-shade color systems with semantic meanings
- **Refined Typography**: Comprehensive type scale with proper line heights and weights
- **Elegant Spacing**: 8px-based spacing system for perfect visual rhythm
- **Professional Shadows**: Layered elevation system for depth and hierarchy
- **Smooth Interactions**: Thoughtful transitions and micro-interactions

## Design Tokens

### Color System

#### Primary Palette (Museum Blue)
- `--color-primary-lighter`: #E3F2FD
- `--color-primary-light`: #90CAF9  
- `--color-primary-main`: #2196F3 ⭐ *Primary brand color*
- `--color-primary-dark`: #1976D2
- `--color-primary-darker`: #0D47A1

#### Secondary Palette (Elegant Grey)
- `--color-secondary-lighter`: #F5F5F6
- `--color-secondary-light`: #C4CDD5
- `--color-secondary-main`: #919EAB
- `--color-secondary-dark`: #637381
- `--color-secondary-darker`: #454F5B

#### Semantic Colors
Each color has 5 shades (lighter, light, main, dark, darker):
- **Success**: Green palette for positive actions
- **Warning**: Orange palette for cautions  
- **Error**: Red palette for errors
- **Info**: Blue palette for information

#### Text Colors
- `--text-primary`: Primary text color (high contrast)
- `--text-secondary`: Secondary text color (medium contrast)  
- `--text-disabled`: Disabled text color (low contrast)

### Typography System

#### Font Family
- **Primary**: 'Inter' - Modern, highly legible sans-serif
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold), 800 (Extrabold)

#### Typography Scale
Following Minimals naming convention:

```css
.typography-h1      /* 56px - Main page titles */
.typography-h2      /* 48px - Section headers */  
.typography-h3      /* 36px - Subsection headers */
.typography-h4      /* 30px - Card titles */
.typography-h5      /* 24px - Component titles */
.typography-h6      /* 20px - Small headers */
.typography-subtitle1   /* 16px - Prominent body text */
.typography-subtitle2   /* 14px - Secondary subtitles */
.typography-body1       /* 16px - Primary body text */
.typography-body2       /* 14px - Secondary body text */
.typography-caption     /* 12px - Captions and labels */
.typography-overline    /* 12px - All caps labels */
```

### Spacing System

8px-based spacing scale for perfect visual rhythm:

```css
--spacing-0: 0px       --spacing-8: 32px
--spacing-1: 4px       --spacing-9: 36px  
--spacing-2: 8px       --spacing-10: 40px
--spacing-3: 12px      --spacing-12: 48px
--spacing-4: 16px      --spacing-16: 64px
--spacing-6: 24px      --spacing-20: 80px
```

### Elevation System

Sophisticated shadow system for depth:

```css
--shadow-z1: Subtle elevation
--shadow-z4: Default card elevation  
--shadow-z8: Hover states
--shadow-z12: Active states
--shadow-z16: Modal and popover
--shadow-z20: Floating action buttons
--shadow-z24: Maximum elevation
```

### Border Radius

```css
--radius-xs: 4px       --radius-xl: 20px
--radius-sm: 8px       --radius-2xl: 24px  
--radius-md: 12px      --radius-3xl: 32px
--radius-lg: 16px      --radius-full: 50%
```

## Component Library

### Buttons

#### Button Variants
- `.btn-contained`: Filled button with shadow
- `.btn-outlined`: Border button  
- `.btn-text`: Text-only button

#### Button Colors  
- `.btn-primary`: Main brand actions
- `.btn-secondary`: Secondary actions

#### Button Sizes
- `.btn-small`: Compact button
- `.btn-medium`: Standard button (default)
- `.btn-large`: Prominent button

#### Usage Examples
```html
<!-- Primary contained button -->
<button class="btn btn-contained btn-primary btn-large">
  Start Exploring
</button>

<!-- Secondary outlined button -->
<button class="btn btn-outlined btn-secondary">
  Learn More  
</button>

<!-- Text button -->
<button class="btn btn-text btn-primary btn-small">
  Cancel
</button>
```

### Cards

#### Card System
- `.card`: Base card with elevation
- `.card-outlined`: Border-only variant
- `.card-elevation-{0,1,4,8,12,16,20,24}`: Specific elevation levels

#### Card Structure
```html
<div class="card card-elevation-4">
  <div class="card-header">
    <h3 class="typography-h5">Card Title</h3>
  </div>
  <div class="card-content">
    <p class="typography-body1">Card content...</p>
  </div>
  <div class="card-actions">
    <button class="btn btn-text btn-primary">Action</button>
  </div>
</div>
```

### Layout Components

#### Container System
- `.container`: Responsive container
- `.container-{xs,sm,md,lg,xl}`: Fixed-width containers

#### Stack Component
```html
<div class="stack stack-spacing-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<div class="stack stack-row stack-spacing-2">
  <button>Button 1</button>
  <button>Button 2</button>
</div>
```

## Museum-Specific Components

### Museum Logo
```html
<div class="museum-logo">
  <span class="museum-logo-main">LM</span>
  <div class="museum-logo-subtitle">
    <span>Lucas Museum</span>
    <span>of Narrative Art</span>
  </div>
</div>
```

### Hero Section
```html
<section class="hero-section">
  <div class="hero-content">
    <h1 class="typography-h1">Welcome</h1>
    <div class="cta-group">
      <button class="btn btn-contained btn-primary btn-large">
        Primary Action
      </button>
    </div>
  </div>
</section>
```

### Floating Actions
```html
<!-- Accessibility button -->
<button class="floating-action">
  <svg>...</svg>
</button>

<!-- Assistant button -->  
<button class="assistant-button">
  <div class="assistant-avatar">👤</div>
  <div class="assistant-text">Help</div>
</button>
```

## Utility Classes

### Spacing
```css
.p-0, .p-1, .p-2, .p-3, .p-4, .p-6, .p-8, .p-12  /* Padding */
.px-0, .px-1, .px-2, .px-3, .px-4, .px-6          /* Horizontal padding */
.py-0, .py-1, .py-2, .py-3, .py-4, .py-6          /* Vertical padding */
.m-0, .m-1, .m-2, .m-3, .m-4, .m-6, .m-8, .m-auto /* Margin */
.mx-auto, .my-0, .my-2, .my-4, .my-6              /* Directional margin */
```

### Layout
```css
.flex, .inline-flex, .block, .inline-block, .hidden
.flex-row, .flex-col, .flex-wrap, .flex-nowrap
.items-start, .items-center, .items-end, .items-stretch  
.justify-start, .justify-center, .justify-end, .justify-between
.gap-1, .gap-2, .gap-3, .gap-4, .gap-6, .gap-8
```

### Colors
```css
.text-primary, .text-secondary, .text-disabled
.text-primary-main, .text-secondary-main
.text-success-main, .text-warning-main, .text-error-main
.bg-default, .bg-paper, .bg-neutral
```

## Best Practices

### 1. Typography Hierarchy
Always use typography classes for consistent text styling:
```html
<h1 class="typography-h1">Page Title</h1>
<p class="typography-body1">Main content</p>
<span class="typography-caption">Helper text</span>
```

### 2. Color Usage
Use semantic color names and consider context:
```html
<button class="btn btn-contained btn-primary">Primary action</button>
<p class="text-secondary">Secondary information</p>
<div class="text-error-main">Error message</div>
```

### 3. Spacing Consistency  
Use the spacing scale for margins and padding:
```html
<div class="p-6 my-4"><!-- 24px padding, 16px margin --></div>
```

### 4. Elevation Hierarchy
Apply appropriate shadows for visual hierarchy:
```html
<div class="card card-elevation-4">Default card</div>
<div class="card card-elevation-8">Hovered card</div>
<div class="card card-elevation-16">Modal content</div>
```

## Accessibility Features

- **High Contrast Support**: Automatic adjustments for `prefers-contrast: high`
- **Dark Theme Ready**: Built-in dark mode token support
- **Reduced Motion**: Respects `prefers-reduced-motion: reduce`
- **Focus Management**: Proper focus rings on all interactive elements
- **Semantic Colors**: Colors have sufficient contrast ratios

## Migration from Previous System

### Button Updates
```html
<!-- Old -->
<button class="btn btn-primary">Action</button>

<!-- New -->  
<button class="btn btn-contained btn-primary">Action</button>
```

### Typography Updates
```html
<!-- Old -->
<h1 class="text-5xl font-bold">Title</h1>

<!-- New -->
<h1 class="typography-h1">Title</h1>
```

### Spacing Updates
```html
<!-- Old -->
<div class="p-xl m-lg">Content</div>

<!-- New -->
<div class="p-6 m-4">Content</div>
```

This Minimals-inspired design system provides a sophisticated, scalable foundation for the Lucas Museum website with professional-grade components and thoughtful design decisions.
