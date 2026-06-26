---
name: Navayuga Trading System
colors:
  surface: '#fff8f6'
  surface-dim: '#f8d2c4'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1ec'
  surface-container: '#ffe9e2'
  surface-container-high: '#ffe2d9'
  surface-container-highest: '#ffdbce'
  on-surface: '#2b160f'
  on-surface-variant: '#40493d'
  inverse-surface: '#422b22'
  inverse-on-surface: '#ffede7'
  outline: '#707a6c'
  outline-variant: '#bfcaba'
  surface-tint: '#1b6d24'
  primary: '#0d631b'
  on-primary: '#ffffff'
  primary-container: '#2e7d32'
  on-primary-container: '#cbffc2'
  inverse-primary: '#88d982'
  secondary: '#2a6b2c'
  on-secondary: '#ffffff'
  secondary-container: '#acf4a4'
  on-secondary-container: '#307231'
  tertiary: '#774c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#986200'
  on-tertiary-container: '#ffeede'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a3f69c'
  primary-fixed-dim: '#88d982'
  on-primary-fixed: '#002204'
  on-primary-fixed-variant: '#005312'
  secondary-fixed: '#acf4a4'
  secondary-fixed-dim: '#91d78a'
  on-secondary-fixed: '#002203'
  on-secondary-fixed-variant: '#0c5216'
  tertiary-fixed: '#ffddb5'
  tertiary-fixed-dim: '#ffb957'
  on-tertiary-fixed: '#2a1800'
  on-tertiary-fixed-variant: '#643f00'
  background: '#fff8f6'
  on-background: '#2b160f'
  surface-variant: '#ffdbce'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style
The design system embodies a "Modern Agrarian" aesthetic—a fusion of corporate reliability and organic vitality. It is designed to position the product as a premium leader in agricultural trading, balancing the precision of global logistics with the warmth of the earth. 

The visual style leans into **Modern Corporate** with heavy influences of **Glassmorphism** to signify transparency and high-tech efficiency. The interface should feel expansive, utilizing generous whitespace to evoke the openness of cultivated fields, while maintaining a structured grid that communicates stability and trust. 

**Emotional Response:**
- **Reliability:** Through structured layouts and disciplined typography.
- **Growth:** Through a vibrant, nature-inspired primary palette.
- **Sophistication:** Through subtle translucency and smooth motion.

## Colors
The palette is rooted in the natural lifecycle of agriculture. **Primary Green** represents active growth and is used for primary actions. **Dark Green** is reserved for high-level branding and "Stability" states, particularly in dark mode surfaces. **Light Beige** serves as the primary canvas in light mode, offering a softer, more organic alternative to pure white.

### Semantic Mapping
- **Primary:** #2E7D32 (Key actions, active states)
- **Surface:** White in light mode; Dark Green (#1B5E20) in dark mode to maintain brand presence.
- **On-Surface:** Earth Brown (#8D6E63) for secondary text; Dark Green for headings.
- **Accent:** Golden Yellow (#F9A825) for "Harvest" metrics, value-added highlights, and warnings.

## Typography
This design system utilizes a dual-font strategy. **Plus Jakarta Sans** provides a friendly yet professional geometric touch for headings, ensuring the brand feels modern and approachable. **Inter** is used for all functional body text and UI labels due to its exceptional legibility in data-heavy trading environments.

For large display styles, a slight negative letter-spacing is applied to maintain a tight, editorial look. Body text should maintain a generous line height (1.5x+) to ensure readability during long trading sessions.

## Layout & Spacing
The system employs a **12-column fluid grid** for desktop and a **4-column grid** for mobile. Spacing is based on an 8px root unit to ensure mathematical harmony across all components.

- **Desktop:** 64px outside margins to create a high-end, spacious feel.
- **Padding:** Internal card padding should be generous (defaulting to 32px or `spacing.unit * 4`) to emphasize the "Large Card" aesthetic.
- **Section Spacing:** Vertical rhythm between major sections should be 80px - 120px to allow the design to "breathe."

## Elevation & Depth
Depth is created through a combination of soft, ambient shadows and **Glassmorphism**. 

1.  **Base Layer:** The Light Beige or Dark Green background.
2.  **Card Layer:** White (Light Mode) or Translucent Dark Green (Dark Mode) with a 4% opacity shadow, 24px blur, and 8px Y-offset.
3.  **Glass Layer:** Navigation bars and overlays use a `backdrop-filter: blur(12px)` with a 70% opacity fill of the surface color. A subtle 1px border (white at 10% opacity) should be added to the top edge to simulate a light-catching glass rim.
4.  **Interactive Layer:** On hover, cards should lift slightly (Y-offset increases to 12px) and shadows should become slightly more diffused.

## Shapes
The shape language is consistently "Rounded" to evoke an organic, approachable feel. 

- **Primary Buttons & Inputs:** 0.5rem (8px) corner radius.
- **Standard Cards:** 1rem (16px) corner radius.
- **Large Container/Sections:** 1.5rem (24px) corner radius.
- **Icons:** Contained within circular or heavily rounded enclosures when used as decorative elements.

## Components

### Buttons
- **Primary:** Solid #2E7D32 with white text. High-radius (8px). 
- **Secondary:** Ghost style with a 1.5px border of the Primary Green.
- **States:** Transitions should be 300ms ease-in-out. On hover, apply a subtle scale-up (1.02x).

### Cards
- **Feature Cards:** Large, white background, 16px radius, with a subtle internal glow.
- **Data Cards:** Use Earth Brown for labels and Primary Green for key metrics.

### Inputs
- **Text Fields:** Light Beige background in light mode to blend with the page, moving to White on focus. 1.5px border stroke in Primary Green when active.

### Navigation
- **Sticky Header:** Implement glassmorphism with a background blur. Use the logo in full color on the left, with navigation links in Plus Jakarta Sans (Medium weight).

### Transitions
- **Scroll-Reveal:** Elements should fade in and slide up 20px as they enter the viewport.
- **Mode Toggle:** A smooth cross-fade transition between light and dark modes, ensuring the glassmorphism blurs re-calculate instantly.