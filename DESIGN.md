---
name: Kinetic Neo-Playful
colors:
  surface: '#faf8ff'
  surface-dim: '#d9d9e5'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3fe'
  surface-container: '#ededf9'
  surface-container-high: '#e7e7f3'
  surface-container-highest: '#e1e1ed'
  on-surface: '#191b23'
  on-surface-variant: '#474556'
  inverse-surface: '#2e3039'
  inverse-on-surface: '#f0f0fc'
  outline: '#777588'
  outline-variant: '#c8c4d9'
  surface-tint: '#5039f6'
  primary: '#3200d6'
  on-primary: '#ffffff'
  primary-container: '#4b32f2'
  on-primary-container: '#d1ccff'
  inverse-primary: '#c5c0ff'
  secondary: '#a53b29'
  on-secondary: '#ffffff'
  secondary-container: '#fe7d66'
  on-secondary-container: '#711609'
  tertiary: '#004d32'
  on-tertiary: '#ffffff'
  tertiary-container: '#006744'
  on-tertiary-container: '#43eca7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e3dfff'
  primary-fixed-dim: '#c5c0ff'
  on-primary-fixed: '#130067'
  on-primary-fixed-variant: '#3603e0'
  secondary-fixed: '#ffdad4'
  secondary-fixed-dim: '#ffb4a6'
  on-secondary-fixed: '#3f0300'
  on-secondary-fixed-variant: '#842415'
  tertiary-fixed: '#5afeb7'
  tertiary-fixed-dim: '#32e09d'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005235'
  background: '#faf8ff'
  on-background: '#191b23'
  surface-variant: '#e1e1ed'
typography:
  display-hero:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 78px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Space Grotesk
    fontSize: 42px
    fontWeight: '700'
    lineHeight: 46px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 54px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: 0em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 18px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Space Mono
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  grid-gutter-desktop: 24px
  grid-margin-desktop: 48px
  grid-gutter-mobile: 16px
  grid-margin-mobile: 20px
  space-3xs: 4px
  space-2xs: 8px
  space-xs: 12px
  space-sm: 16px
  space-md: 24px
  space-lg: 32px
  space-xl: 48px
  space-2xl: 64px
  space-3xl: 96px
---

## Brand & Style

This design system expresses an energetic, witty, and unapologetically bold creative ethos. It merges contemporary neo-brutalism with 2D vector pop art, transforming traditional portfolio layouts into dynamic, tactile playgrounds. The visual tone balances deliberate structural discipline—anchored by deliberate ink outlines and architectural alignment—with spirited, tactile whimsy.

### Audience & Mood
Targeted at creative directors, tech-forward product teams, and digital art connoisseurs, the system projects high-caliber technical craft, playful irreverence, and expressive agency. The interface must feel physical, responsive, and alive under the cursor, treating UI elements as physical sticker sheets, comic blocks, and kinetic mechanical levers rather than ethereal web layers.

### Aesthetic Principles
- **Hard Strokes & High Visual Density:** Explicit 2px to 3px solid ink boundaries framing vibrant planar fills.
- **Physical Offset Projection:** Zero-blur drop shadows with discrete x/y offsets simulating tactile stamped card layers.
- **Kinetic Micro-Feedbacks:** Instantaneous, snappy spring transitions (`cubic-bezier(0.34, 1.56, 0.64, 1)`) that reward cursor discovery with squashes, stretches, and offset collapses.
- **Graphic Texture:** Subtle halftone and dot-matrix patterns underpinning large flat planes, grounding interactive canvas viewports.

## Colors

The palette delivers uncompromising contrast and distinct chromatic hierarchy, pairing hyper-saturated digital pigments with a deep, authoritative ink tone.

### Palette Roles
- **Primary (`#4B32F2` / Electric Indigo):** The kinetic driver. Employed for primary navigational anchors, active progress gauges, key focal points, and major state transitions.
- **Secondary (`#FF7E67` / Soft Punch Coral):** The warmth counterbalance. Used for highlight badges, callout stickers, reactive hover transforms, and playful visual counter-weights.
- **Tertiary (`#38E4A0` / Neon Mint):** The signal and success tone. Applied to interactive toggles, success feedback, live availability indicators, and 2D canvas particle accents.
- **Neutral Core (`#13151D` / Dark Slate Ink):** The architectural substrate. Used for all definitive strokes, typography, deep planar containers, and solid non-blurred shadows.
- **Canvas Base (`#FFFDF7` / Milk Parchment):** The foundation background, slightly tinted off-white to soften high-contrast boundaries while preserving ink crispness.
- **Surface Layer (`#F2EEFF` / Pale Lilac Tint):** Secondary background used for nested cards, interactive code blocks, and canvas frame chrome.

### Implementation Guidelines
- Never soften borders with opacity; borders must consistently remain pure Dark Slate Ink (`#13151D`).
- For dark overlays or tooltips, use Dark Slate Ink as the fill with pure white or Neon Mint for text and iconography.
- Maintain a minimum WCAG AAA contrast ratio on all core text pairings.

## Typography

The typography strategy leverages three complementary typefaces to create an articulate visual hierarchy that references technical drafting, contemporary editorial brutalism, and approachable humanism.

### Type Hierarchy Strategy
- **Display & Headlines (`Space Grotesk`):** Engineered geometric grotesque with idiosyncratic cuts. Headline characters remain structural, aggressive, and punchy. Set tight line heights and negative letter-spacing for large scales to emphasize graphic density.
- **Body Content (`Plus Jakarta Sans`):** Clean, balanced, and rounded sans-serif designed for sustained readability. Softens technical harshness and preserves legibility during long-form reading across device screens.
- **Labels, Badges, & Metrics (`Space Mono`):** Fixed-width terminal typography that underscores systematic, procedural, and code-native mechanics. All label components use full uppercase casing with extended letter-spacing.

## Layout & Spacing

The layout model adheres to a strict 12-column modular rhythm supported by an 8pt baseline grid. Layouts prioritize tangible, segmented containers over borderless content bleeding.

### Grid & Breakpoints
- **Desktop (1200px+):** 12-column responsive layout. Max page container: 1360px. Gutters set to 24px, external margin minimum 48px. Canvas containers span modular 4, 6, 8, or 12-column intervals with strict 1:1 or 16:10 aspect ratio bounds.
- **Tablet (768px – 1199px):** 8-column layout. Gutters set to 20px, margins 32px. Multi-column component layouts collapse into binary pairs or vertical stacks.
- **Mobile (320px – 767px):** 4-column layout. Gutters set to 16px, margins 20px. All modular cards expand to span the full 4 columns, preserving clear hit targets and distinct vertical offsets.

### Structural Rhythm & Texture
- Background surfaces utilize a repeating SVG dot-grid (16px spacing, 1.5px diameter dots in `#E2DFF0`) to enforce architectural discipline beneath dynamic vector graphics.
- Container padding is locked to symmetric pairings: standard cards enforce `24px` internal padding, dense widgets enforce `16px`, and hero callouts enforce `40px`.

## Elevation & Depth

This system avoids Gaussian blurs, diffuse lighting, and skeuomorphic light-source gradients. Depth is established through hard, planar offsets and distinct ink layers.

### Offset Shadow System (The Stamped Plane)
- **Flat Surface (Level 0):** Zero shadow offset. Solid 2px stroke in Dark Slate Ink (`#13151D`). Used for embedded code modules, text inputs, and recessed viewport wells.
- **Default Interactive Card (Level 1):** Offset of `4px 4px 0px #13151D`. Applied to standard modular cards, unpressed buttons, and floating pill chips.
- **Hover / Promoted Card (Level 2):** Offset of `8px 8px 0px #13151D`. Accompanies a `-4px, -4px` translate vector on hover, evoking an element rising toward the user.
- **Modal / Floating Canvas Panel (Level 3):** Offset of `12px 12px 0px #13151D`. Accompanies an accent perimeter line for maximum layer detachment.
- **Pressed / Active State (Level Pressed):** Offset collapses completely to `0px 0px 0px #13151D` with a `+4px, +4px` transform translation, replicating a physical spring switch bottoming out.

### 2D Parallax & Micro-Layering
In interactive canvas viewports, 2D vector elements inhabit distinct integer z-indexes. When users manipulate canvas nodes, drop-lines connect elements to their original ground plane via dashed 2px stroke trajectories.

## Shapes

The geometry strikes a curated midpoint between brutalist angularity and toy-like tactility. It uses soft radii (`roundedness: 1` equivalent to base 4px/8px), avoiding both cold razor corners and overly playful pill excess on primary bounding boxes.

### Radius Assignments
- **Micro Radii (`4px`):** Checkboxes, tags, code snippets, status dots, and input fields.
- **Standard Radii (`8px`):** Cards, primary buttons, notification banners, dialogue frames, and canvas viewports.
- **Pill Exceptions (`9999px`):** Restricted solely to status pills, tag filters, floating avatar badges, and cursor tooltips to establish semantic contrast against angular container architecture.
- **Strokes:** All outward-facing borders retain a continuous, uniform stroke weight of `2.5px` (rendered via `3px` on dense displays) using `#13151D`.

## Components

### Buttons
- **Primary Button:** Background in Electric Indigo (`#4B32F2`), text in pure white (`#FFFFFF`), solid 2.5px stroke in `#13151D`. Default shadow `4px 4px 0px #13151D`. Hover state: background transforms to Coral (`#FF7E67`), translates `-2px, -2px`, shadow expands to `6px 6px 0px #13151D`. Active state: translates `+4px, +4px` with zero shadow.
- **Secondary / Ghost Button:** Background in pure white or canvas parchment, 2.5px stroke in `#13151D`, label in Space Mono bold. Hover fills with Mint Green (`#38E4A0`).

### Interactive Canvas & Project Cards
- Modular containers framed in 2.5px stroke with Level 1 hard shadows.
- Cards host an upper meta bar styled like an OS window header or comic strip cell: title pinned left in `label-md` Space Mono, an interactive status dot pinned right (Mint Green for live projects, Coral for experimental WIPs).
- On hover, the internal vector illustration/canvas undergoes subtle 2D transform animations (e.g., rotation between `-2deg` and `+2deg`, scale `1.03`).

### Chips & Badges
- Built using the pill exception (`rounded-full`). Bound by a 2px solid `#13151D` border with a subtle `2px 2px 0px #13151D` offset shadow.
- Category filters toggle between a neutral paper background and bold high-chroma fills (Mint Green for technology, Coral for art/direction, Indigo for research) when activated.

### Form Inputs & Fields
- Inputs feature a crisp 2.5px border, background in pure `#FFFFFF`, and inner text in `body-md`.
- Default state features zero shadow; on focus, field pops outward with an offset shadow of `4px 4px 0px #4B32F2` (Indigo accent) and an upward translate of `-2px`.
- Placeholders are styled in muted slate with a custom typewriter blinking caret.

### Checkboxes & Radio Switches
- Custom graphic squares (`20px x 20px`) with `4px` corner radii and 2.5px solid strokes.
- Checked state fills the box with Neon Mint (`#38E4A0`) with a bold black graphic "X" or geometric checkmark icon. Radios use an inner filled solid disc.

### Tooltips & Canvas Overlays
- Inverted palette: Dark Slate Ink (`#13151D`) fill, Space Mono label in `#FFFDF7` or `#38E4A0`.
- 2px border in `#38E4A0` with a sharp angular arrow indicator pointing directly to the active canvas vector coordinate.