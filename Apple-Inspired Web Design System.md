# Apple-Inspired Web Design System

## Purpose

Build every web application using a clean, minimal, premium UI inspired by Apple's design language.

The application should feel:
- Minimal
- Elegant
- Premium
- Modern
- Spacious
- Smooth
- Highly polished
- Easy to understand
- Consistent across desktop, tablet, and mobile

Do NOT create generic Bootstrap-style interfaces.
Do NOT use overly colorful, cluttered, or outdated UI components.

Use Apple's design principles as inspiration while maintaining an original implementation.

---

# 1. Core Design Principles

Follow these principles throughout the entire application:

1. Simplicity
2. Clear visual hierarchy
3. Generous whitespace
4. Consistent spacing
5. Rounded UI elements
6. Subtle borders
7. Extremely subtle shadows
8. Smooth animations
9. Minimal colors
10. Strong typography
11. Consistent component behavior
12. Responsive design

Every component should look like it belongs to the same design system.

---

# 2. Color System

Use a minimal color palette.

Primary:
- Black
- White
- Neutral grays
- One primary accent color

Recommended neutral colors:

Background:
- #FFFFFF
- #F5F5F7
- #FBFBFD

Text:
- #1D1D1F
- #6E6E73
- #86868B

Borders:
- rgba(0, 0, 0, 0.08)

Avoid excessive use of:
- Gradients
- Neon colors
- Multiple accent colors
- Strong shadows
- Heavy outlines

Use color only when it communicates meaning or interaction.

---

# 3. Typography

Use an Apple-like typography hierarchy.

Preferred font stack:

font-family:
- -apple-system
- BlinkMacSystemFont
- "SF Pro Display"
- "SF Pro Text"
- "Helvetica Neue"
- Arial
- sans-serif

If SF Pro is unavailable, use the system font automatically.

Typography should be:

- Clean
- Spacious
- Highly readable
- Not overly bold
- Consistent

Headings should have strong hierarchy.

Example:

Hero heading:
48–72px desktop

Section heading:
32–48px

Card heading:
20–28px

Body:
16–18px

Secondary text:
14–16px

Mobile typography must scale appropriately.

---

# 4. Spacing

Use generous whitespace.

Preferred spacing scale:

4px
8px
12px
16px
20px
24px
32px
40px
48px
64px
80px
96px

Avoid tightly packed interfaces.

Major sections should have substantial vertical spacing.

---

# 5. Border Radius

Use rounded components.

Recommended:

Small controls:
8–10px

Inputs:
10–14px

Buttons:
10–16px

Cards:
16–24px

Large containers:
24–32px

Do not make every element excessively rounded.

Use the radius according to the component size.

---

# 6. Buttons

Buttons should be simple and premium.

Primary button:

- Solid accent color
- White text
- Rounded corners
- Comfortable padding
- Smooth hover animation
- Smooth press animation

Secondary button:

- Light gray or white background
- Subtle border
- Dark text

Avoid:
- Excessive gradients
- 3D buttons
- Thick borders
- Huge shadows

Example structure:

<button class="apple-button">
    Get Started
</button>

Interaction:

Hover:
- Slight visual change
- Optional subtle scale: 1.01–1.02

Active:
- Slight scale down

Transition:
- 150–250ms
- Use smooth easing

---

# 7. Checkboxes

Checkboxes MUST look modern and Apple-inspired.

Unchecked:

- White/light background
- Subtle gray border
- Rounded corners
- Clean appearance

Checked:

- Accent-colored background
- White checkmark
- Smooth transition

Example:

☐ Unchecked

☑ Checked

Do NOT use browser-default checkbox styling.

Use custom CSS.

Checkbox should support:

- Hover
- Focus
- Checked
- Disabled
- Keyboard navigation

The checkmark animation should be subtle.

Recommended checkbox size:

18–22px

---

# 8. Toggle Switches

Use iOS/macOS-inspired switches when the setting represents an ON/OFF state.

OFF:

- Gray background
- White circular thumb

ON:

- Accent-colored background
- White circular thumb

The thumb should smoothly slide between states.

Do NOT use a checkbox when the control represents an immediate ON/OFF setting.

Use:

Checkbox → Selection

Switch → Immediate ON/OFF state

---

# 9. Dropdown Menus

Dropdowns should have an Apple-inspired appearance.

Closed state:

- Rounded input
- Subtle border
- Clean background
- Chevron icon
- Comfortable padding

Open state:

- Floating menu
- Rounded corners
- Soft shadow
- Subtle border
- Smooth animation
- Clear selected item

Example:

┌──────────────────────────┐
│ Select option        ﹀   │
└──────────────────────────┘

When opened:

┌──────────────────────────┐
│ Option 1                 │
│ Option 2             ✓   │
│ Option 3                 │
│ Option 4                 │
└──────────────────────────┘

Dropdown menus should not look like old HTML `<select>` elements.

For complex dropdowns, create a custom accessible component.

---

# 10. Select Menus

Select fields should follow the same visual language as dropdowns.

Use:

- Rounded corners
- Subtle border
- Light background
- Proper spacing
- Chevron
- Clear selected value

Focus state:

- Accent-colored border or focus ring
- Never use a thick default browser outline

---

# 11. Input Fields

Text fields should be minimal.

Default:

- White/light background
- Subtle border
- Rounded corners
- Comfortable padding

Focus:

- Accent-colored focus ring
- Smooth transition

Placeholder:

- Muted gray

Do not use:

- Heavy black borders
- Huge shadows
- Decorative gradients

Example:

┌─────────────────────────────┐
│ Enter your name             │
└─────────────────────────────┘

---

# 12. Search Fields

Search should feel similar to modern Apple system search.

Use:

- Rounded search field
- Search icon
- Light gray background
- Minimal border
- Clear button when text exists

Example:

╭──────────────────────────────╮
│ 🔍  Search                   │
╰──────────────────────────────╯

---

# 13. Navigation Bar

Navigation should be minimal.

Desktop:

- Clean horizontal navigation
- Generous spacing
- Minimal links
- Simple hover states
- Optional translucent/frosted background

Mobile:

- Compact navigation
- Hamburger/menu button
- Smooth menu animation

Avoid overcrowding the navbar.

---

# 14. Cards

Cards should use:

- Large rounded corners
- White or slightly tinted background
- Very subtle border
- Very subtle shadow
- Generous internal padding

Avoid excessive card decorations.

Cards should rely primarily on:

Typography + spacing + hierarchy

rather than heavy visual effects.

---

# 15. Modals

Modal windows should feel like native Apple interfaces.

Use:

- Rounded corners
- Clean white/light background
- Subtle shadow
- Backdrop blur when appropriate
- Dark translucent overlay
- Smooth opening animation

Animation:

Opacity:
0 → 1

Scale:
0.97 → 1

Duration:
150–250ms

Do not use dramatic animations.

---

# 16. Tooltips

Tooltips should be:

- Small
- Dark or translucent
- Rounded
- Minimal
- Easy to read

Use them only when necessary.

Do not overload the interface with tooltips.

---

# 17. Icons

Use simple line icons.

Preferred icon libraries:

- Lucide
- SF Symbols-inspired icons where appropriate
- Other clean outline icon sets

Icons should generally be:

- Simple
- Consistent
- Lightweight
- Properly aligned

Avoid mixing multiple icon styles.

---

# 18. Shadows

Shadows must be subtle.

Avoid:

- Huge shadows
- Dark shadows
- Multiple layered shadows everywhere

Preferred style:

box-shadow:
0 4px 20px rgba(0, 0, 0, 0.08);

Use shadows primarily for:

- Floating menus
- Modals
- Cards when necessary
- Dropdowns
- Navigation overlays

---

# 19. Glass / Blur Effects

Use glass effects sparingly.

Possible style:

backdrop-filter: blur(20px);

Use translucent backgrounds when appropriate.

Example:

background:
rgba(255, 255, 255, 0.72);

Do NOT turn the entire website into glassmorphism.

Glass should enhance hierarchy, not become decoration.

---

# 20. Animations

All interactions should feel smooth.

Recommended duration:

100–150ms:
Small interactions

150–250ms:
Buttons, dropdowns, menus

250–400ms:
Larger panels and modal transitions

Use smooth easing.

Avoid:

- Bouncing
- Excessive scaling
- Spinning UI
- Flashing animations
- Slow transitions

Animations should feel natural and almost invisible.

---

# 21. Hover Effects

Hover effects should be subtle.

Examples:

Button:
Slight background change

Card:
Very subtle elevation

Navigation:
Color transition

Icon:
Small opacity change

Do NOT use:

- Large movement
- Huge scale effects
- Glow effects
- Neon effects

---

# 22. Active / Pressed States

Every interactive element should have an active state.

Example:

transform:
scale(0.98);

Keep the effect subtle.

The user should receive immediate visual feedback.

---

# 23. Focus States

Accessibility is mandatory.

Every interactive element must have a visible keyboard focus state.

Use:

- Accent-colored focus ring
- Sufficient contrast
- No removal of focus indicators without replacement

Do NOT use:

outline: none;

unless an accessible replacement focus style is provided.

---

# 24. Disabled States

Disabled controls should clearly appear disabled.

Use:

- Reduced opacity
- Muted colors
- No hover animation
- No pointer interaction

Do not make disabled elements completely invisible.

---

# 25. Tables

Tables should be clean and minimal.

Use:

- Light borders
- Generous row height
- Proper alignment
- Subtle hover state
- Rounded container

Avoid heavy grid lines.

---

# 26. Alerts

Alerts should be minimal.

Use semantic colors:

Success:
Green

Warning:
Orange/Yellow

Error:
Red

Information:
Blue

Do not use bright backgrounds unnecessarily.

Use subtle tinted backgrounds.

---

# 27. Forms

Forms should have:

- Clear labels
- Consistent spacing
- Rounded fields
- Clear validation
- Accessible error messages
- Proper focus states

Never rely only on color to communicate errors.

---

# 28. Mobile Design

The website MUST be responsive.

Design for:

- Mobile
- Tablet
- Desktop
- Large desktop

Mobile UI should not simply be a smaller desktop UI.

Adapt:

- Navigation
- Typography
- Spacing
- Cards
- Dropdowns
- Forms
- Buttons

Touch targets should be large enough for comfortable interaction.

---

# 29. Accessibility

Accessibility is mandatory.

All components must support:

- Keyboard navigation
- Screen readers
- Proper labels
- ARIA where necessary
- Focus states
- Sufficient contrast
- Reduced motion preferences

Respect:

prefers-reduced-motion

Users who disable animations should receive a reduced-animation experience.

---

# 30. Component Consistency

Create reusable components.

Examples:

Button
Input
Checkbox
Switch
Dropdown
Select
Modal
Card
Navbar
Sidebar
Tooltip
Toast
Tabs
Accordion
Pagination

Do not create different visual styles for the same type of component.

One design system should control the entire application.

---

# 31. Avoid Generic UI

Do NOT automatically use:

- Default browser controls
- Bootstrap-looking buttons
- Generic Material UI appearance
- Excessive gradients
- Neon colors
- Huge shadows
- Thick borders
- Random border radiuses
- Excessive animations
- Cluttered dashboards
- Overly colorful cards

The final result should feel intentional and premium.

---

# 32. Apple-Inspired, Not Apple-Copied

Use Apple's design principles as inspiration.

Do NOT copy Apple's:

- Logos
- Trademarks
- Proprietary assets
- Exact website layouts
- Copyrighted imagery
- Brand-specific content

Create an original interface inspired by Apple's simplicity and interaction patterns.

---

# 33. Implementation Rules

When generating the application:

1. Inspect the existing design first.
2. Preserve existing functionality.
3. Preserve existing business logic.
4. Replace inconsistent UI components with the Apple-inspired design system.
5. Use reusable components.
6. Use CSS variables for design tokens.
7. Maintain responsive behavior.
8. Add smooth but subtle animations.
9. Ensure accessibility.
10. Avoid unnecessary dependencies.
11. Prefer CSS/HTML/JS solutions when possible.
12. Do not introduce a UI framework unless necessary.

---

# 34. Design Tokens

Create centralized variables such as:

--background
--surface
--surface-secondary
--text-primary
--text-secondary
--border
--accent
--danger
--success
--radius-small
--radius-medium
--radius-large
--shadow-small
--shadow-medium
--transition-fast
--transition-normal

Use these variables consistently throughout the application.

---

# 35. Final Quality Check

Before considering the UI complete, verify:

- Is the interface minimal?
- Does it feel premium?
- Are components consistent?
- Are checkboxes custom styled?
- Are switches Apple-inspired?
- Are dropdowns custom styled?
- Are inputs polished?
- Are buttons consistent?
- Are animations subtle?
- Is spacing generous?
- Is typography clean?
- Is the navbar minimal?
- Are cards simple?
- Are focus states accessible?
- Does it work on mobile?
- Does dark mode work if implemented?
- Are there unnecessary colors?
- Are there unnecessary shadows?
- Are there unnecessary animations?

If any component looks generic, redesign it to match the overall Apple-inspired system.

---

# Final Instruction

For every web application, follow this design system by default.

The visual language should consistently feel:

"Minimal + Elegant + Premium + Apple-inspired + Modern + Responsive"

Prioritize usability and clarity over decoration.