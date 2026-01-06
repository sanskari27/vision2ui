## Overview

The Tooltip component provides contextual information and help text that appears when users interact with an element. It supports multiple positioning options, alignment variations, and different content types including simple text, rich content with titles and actions, and link-style tooltips. The component automatically handles positioning to stay within viewport bounds and follows GDS (Global Design System) standards.

## Package Information

- **Package Name**: `@fil-react-components/tooltip`
- **Version**: 2.11.19
- **Description**: Tooltip Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/tooltip
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/anchor`: ^2.15.2
- `@fil-react-components/button`: ^3.4.2
- `@fil-react-components/heading`: ^2.11.10
- `@fil-react-components/portal`: ^1.6.1
- `@fil-react-components/streamline-icon`: ^2.15.6
- `@fil-react-components/svg-icons`: ^1.9.0
- `@fil-react-components/with-styles`: ^2.7.8
- `@fil-react-hooks/device-resize`: ^1.9.6
- `@fil-react-mixins/styled`: ^2.7.1
- `classnames`: ^2.5.1
- `lodash`: 4.17.21
- `react-cool-onclickoutside`: 1.5.9

## Exports

```typescript
import Tooltip from '@fil-react-components/tooltip';
```

### Available Exports:

- `Tooltip` (default export) - Main tooltip component

## Component Structure

### Main Component: Tooltip

The Tooltip component consists of a trigger element (icon or text link) and a positioned content overlay that appears on interaction.

### Component Variations:

1. **Standard Tooltip** - Basic informational tooltip with icon trigger
2. **Advanced Tooltip** - Rich content with title, description, and action buttons
3. **Link Tooltip** - Text link that opens a tooltip instead of navigating
4. **Hover vs Click** - Configurable interaction method (hover or click)

### Component Hierarchy:

```
Tooltip
├── Trigger Element
│   ├── Label (optional)
│   └── Info Icon / Link Button
└── Portal (Tooltip Content)
    ├── Arrow
    ├── Close Button (advanced/link types)
    ├── Title (optional)
    ├── Message Content
    ├── CTA Button (optional)
    └── Link (optional)
```

## Props

### TooltipProps

| Prop                   | Type                                 | Default                                          | Description                                 |
| ---------------------- | ------------------------------------ | ------------------------------------------------ | ------------------------------------------- |
| `children`             | `React.ReactNode`                    | -                                                | Additional content to render inside tooltip |
| `className`            | `string`                             | -                                                | Additional CSS class names                  |
| `label`                | `React.ReactNode`                    | -                                                | Label text displayed next to the info icon  |
| `message`              | `React.ReactNode`                    | **Required**                                     | Main tooltip content                        |
| `title`                | `React.ReactNode`                    | -                                                | Title for advanced tooltips                 |
| `show`                 | `boolean`                            | `false`                                          | Whether tooltip is initially visible        |
| `alignment`            | `'left' \| 'right' \| 'center'`      | `'center'`                                       | Horizontal alignment of tooltip             |
| `position`             | `'top' \| 'bottom'`                  | `'bottom'`                                       | Vertical position preference                |
| `cta`                  | `string`                             | -                                                | Call-to-action button text                  |
| `ctaProps`             | `Omit<BaseButtonProps, 'children'>`  | -                                                | Props for CTA button                        |
| `link`                 | `string`                             | -                                                | Link text for additional action             |
| `linkProps`            | `Omit<AnchorProps, 'children'>`      | -                                                | Props for link element                      |
| `aria`                 | `{open?: string, close?: string}`    | `{open: 'open tooltip', close: 'close tooltip'}` | ARIA labels                                 |
| `showOnHover`          | `boolean`                            | `false`                                          | Show tooltip on hover instead of click      |
| `type`                 | `'standard' \| 'advanced' \| 'link'` | `'standard'`                                     | Tooltip variant type                        |
| `tooltipWidth`         | `number`                             | `283`                                            | Width for standard tooltips                 |
| `advancedTooltipWidth` | `number`                             | `420`                                            | Width for advanced tooltips                 |
| `alignIcon`            | `'right'`                            | -                                                | Align icon to the right of label            |
| `onToggle`             | `(isOpen: boolean) => void`          | -                                                | Callback when tooltip opens/closes          |

## Usage Examples

### Basic Standard Tooltip

```tsx
import React from 'react';
import Tooltip from '@fil-react-components/tooltip';

const BasicExample = () => (
  <Tooltip
    label="More information"
    message="This is a helpful tooltip that provides additional context about this feature."
  />
);
```

### Tooltip with Hover Interaction

```tsx
<Tooltip
  label="Help"
  message="Hover to see this tooltip content."
  showOnHover={true}
/>
```

### Advanced Tooltip with Title and Actions

```tsx
import Paragraph from '@fil-react-components/paragraph';

<Tooltip
  type="advanced"
  title="Understanding Investment Risks"
  label="Risk Information"
  message={
    <Paragraph>
      All investments carry risk. Past performance is not indicative of future
      results. Please consider your investment objectives and risk tolerance.
    </Paragraph>
  }
  cta="Learn More"
  ctaProps={{
    onClick: () => console.log('CTA clicked'),
  }}
  link="View Full Disclosure"
  linkProps={{
    href: '/disclosure',
    target: '_blank',
  }}
/>;
```

### Link-Style Tooltip

```tsx
<Tooltip
  type="link"
  label="Terms and Conditions"
  title="Terms of Service"
  message="By using this service, you agree to our terms and conditions..."
  cta="Accept Terms"
  ctaProps={{
    onClick: () => handleAccept(),
  }}
/>
```

### Position and Alignment Variations

```tsx
// Top positioned, center aligned
<Tooltip
  label="Info"
  message="This tooltip appears above the trigger."
  position="top"
  alignment="center"
/>

// Bottom positioned, left aligned
<Tooltip
  label="Info"
  message="This tooltip appears below and aligns to the left."
  position="bottom"
  alignment="left"
/>

// Bottom positioned, right aligned
<Tooltip
  label="Info"
  message="This tooltip appears below and aligns to the right."
  position="bottom"
  alignment="right"
/>
```

### Controlled Tooltip

```tsx
const [isOpen, setIsOpen] = useState(false);

<Tooltip
  label="Controlled Tooltip"
  message="This tooltip's visibility is controlled by state."
  show={isOpen}
  onToggle={setIsOpen}
/>;
```

### Tooltip with Custom Content

```tsx
import { List } from '@fil-react-components/list';

<Tooltip
  type="advanced"
  title="Available Options"
  label="Options"
  message={
    <>
      <p>Choose from the following options:</p>
      <List listData={['Option 1', 'Option 2', 'Option 3']} />
    </>
  }
/>;
```

### Right-Aligned Icon

```tsx
<Tooltip
  label="Settings"
  message="Access your account settings here."
  alignIcon="right"
/>
```

### Custom Width Tooltip

```tsx
<Tooltip
  label="Wide Content"
  message="This tooltip has custom width to accommodate longer content."
  tooltipWidth={400}
/>
```

### Tooltip in Text Flow

```tsx
<p>
  For more information about our privacy policy, please read our{' '}
  <Tooltip
    type="link"
    label="Privacy Statement"
    message="We collect minimal data necessary for service provision..."
  />{' '}
  or contact support.
</p>
```

## Features

### Positioning System

- **Smart Positioning** - Automatically adjusts position to stay in viewport
- **Alignment Options** - Left, center, and right horizontal alignment
- **Position Preference** - Top or bottom vertical positioning
- **Responsive** - Adapts to screen size and scroll position
- **Arrow Indicator** - Visual pointer showing relationship to trigger

### Interaction Modes

- **Click to Toggle** - Default interaction method
- **Hover to Show** - Optional hover-based interaction
- **Keyboard Support** - Accessible keyboard navigation
- **Outside Click** - Closes when clicking outside tooltip

### Content Types

- **Standard** - Simple text content with info icon
- **Advanced** - Rich content with title, description, and actions
- **Link** - Text link that opens tooltip instead of navigation
- **Custom Content** - Support for React components and complex layouts

### Accessibility

- **ARIA Support** - Proper ARIA attributes for screen readers
- **Keyboard Navigation** - Full keyboard accessibility
- **Focus Management** - Proper focus handling and restoration
- **Screen Reader** - Clear announcements of tooltip state

### Responsive Design

- **Mobile Adaptation** - Full-width tooltips on small screens
- **Touch Friendly** - Appropriate touch targets
- **Viewport Aware** - Prevents tooltips from extending outside screen

## Testing

The component includes:

- Unit tests using Jest
- Component tests using Playwright
- Accessibility tests
- Test utilities from `@fil-react-utils/testing`

Run tests:

```bash
npm test
```

Run component tests:

```bash
npm run test-ct
```

## Storybook Stories

The component has Storybook stories demonstrating:

- All alignment and position combinations
- Standard, advanced, and link tooltip types
- Hover vs click interactions
- Custom content and actions
- Responsive behavior
- Accessibility features

## Data Attributes

- `data-frc="tooltip"` - Applied to the main tooltip container

## CSS Classes

- `fil-tooltip` - Main tooltip container
- `fil-tooltip__label` - Label text next to icon
- `fil-tooltip__btn-wrp` - Button wrapper container
- `fil-tooltip__button` - Info icon button
- `fil-tooltip__button--open` - Open state modifier
- `fil-tooltip__icon` - Info icon styling
- `fil-tooltip__portal` - Portal container
- `fil-tooltip__arrow` - Arrow pointer element
- `fil-tooltip__msg` - Tooltip message container
- `fil-tooltip__close-btn` - Close button (advanced/link types)
- `fil-tooltip__title` - Title text styling
- `fil-tooltip__msg-btn` - CTA button and link styling

## Build & Development

### Scripts

```bash
# Run tests
npm test

# Build TypeScript
npm run build:ts

# Build JavaScript
npm run build:js

# Build all
npm run build

# Lint TypeScript
npm run lint:ts

# Lint and fix TypeScript
npm run lint:ts:fix

# Lint CSS
npm run lint:css

# Lint and fix CSS
npm run lint:css:fix

# Run all linters
npm run lint

# Run component tests
npm run test-ct
```

## File Structure

```
Tooltip/
├── src/
│   ├── Tooltip.tsx              # Main tooltip component
│   ├── Tooltip.style.ts         # Tooltip styling and positioning
│   ├── Tooltip.constants.ts     # Configuration constants
│   ├── index.ts                 # Main exports
│   ├── Tooltip.mock.tsx         # Mock configurations
│   ├── Tooltip.stories.tsx      # Storybook stories
│   └── tests/
│       ├── Tooltip.test.tsx     # Unit tests
│       ├── Tooltip.ct.tsx       # Component tests
│       └── TooltipWrapper.tsx   # Test wrapper
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Form Field Help

```tsx
const FormField = ({ label, helpText }) => (
  <div>
    <label>{label}</label>
    <input type="text" />
    <Tooltip message={helpText} showOnHover={true} />
  </div>
);
```

### Feature Explanation

```tsx
<Tooltip
  label="Premium Feature"
  message="This premium feature requires a subscription upgrade."
  cta="Upgrade Now"
  ctaProps={{
    onClick: () => navigate('/upgrade'),
  }}
/>
```

### Legal Compliance

```tsx
<Tooltip
  type="link"
  label="Terms Apply"
  title="Terms and Conditions"
  message="Standard terms and conditions apply to this offer..."
  cta="View Full Terms"
  ctaProps={{
    onClick: () => openModal('terms'),
  }}
/>
```

### Data Visualization Help

```tsx
<Tooltip
  type="advanced"
  title="Understanding This Metric"
  label="?"
  message={
    <div>
      <p>This metric shows the percentage change over the selected period.</p>
      <ul>
        <li>Positive values indicate growth</li>
        <li>Negative values indicate decline</li>
      </ul>
    </div>
  }
  showOnHover={true}
/>
```

### Navigation Aid

```tsx
const NavItem = ({ title, description }) => (
  <li>
    <a href="#">{title}</a>
    <Tooltip message={description} showOnHover={true} alignment="left" />
  </li>
);
```

### Error Explanation

```tsx
<Tooltip
  label="Why is this disabled?"
  message="This option is currently unavailable due to system maintenance."
  position="top"
/>
```

### Multi-step Process

```tsx
const StepIndicator = ({ step, isActive, description }) => (
  <div className={`step ${isActive ? 'active' : ''}`}>
    <span>{step.number}</span>
    <span>{step.title}</span>
    <Tooltip message={description} showOnHover={true} alignment="center" />
  </div>
);
```

## Best Practices

1. **Keep content concise** - Tooltips should provide brief, helpful information
2. **Use appropriate type** - Choose standard for simple help, advanced for complex content
3. **Consider positioning** - Ensure tooltips don't obstruct important content
4. **Provide context** - Use clear trigger labels that indicate tooltip availability
5. **Test on mobile** - Verify tooltips work well on touch devices
6. **Use hover sparingly** - Click-based tooltips are more accessible
7. **Handle overflow** - Ensure tooltip content fits within reasonable bounds
8. **Consider timing** - Hover tooltips should appear quickly but not annoyingly
9. **Provide alternatives** - Don't rely solely on tooltips for critical information
10. **Test accessibility** - Ensure screen readers can access tooltip content

## Migration Notes

### From older versions:

- Ensure you have the required peer dependencies installed
- The component now requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling
- Advanced tooltips now support custom widths via `advancedTooltipWidth` prop
- Close button focus states have been improved for accessibility
- Component now uses Portal for better rendering and z-index management
- Responsive behavior has been enhanced for mobile devices

## Related Components

- `@fil-react-components/button` - Button component used for CTA and close actions
- `@fil-react-components/anchor` - Link component for additional actions
- `@fil-react-components/heading` - Heading component used in advanced tooltips
- `@fil-react-components/portal` - Portal component for rendering outside DOM hierarchy
- `@fil-react-components/streamline-icon` - Icon component for info and close icons
- `@fil-react-components/theme-provider` - Theme provider for styling
