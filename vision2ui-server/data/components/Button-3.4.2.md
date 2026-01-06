# Button Component Documentation

## Overview

The Button component is a versatile, accessible button component that provides multiple visual variations and supports icons, different sizes, and states. It follows the GDS (Global Design System) standards and integrates seamlessly with the theme provider for consistent styling across applications.

## Package Information

- **Package Name**: `@fil-react-components/button`
- **Version**: 3.4.2
- **Description**: Button Component Variations
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/button
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/streamline-icon`: ^2.15.6
- `@fil-react-components/with-styles`: ^2.7.8
- `@fil-react-mixins/styled`: ^2.7.1
- `classnames`: ^2.5.1

## Exports

```typescript
import Button, {
  BaseButton,
  LinkButton,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from '@fil-react-components/button';
```

### Available Exports:

- `Button` (default export) - Main button component with variation support
- `BaseButton` - Base button component without styling variations
- `PrimaryButton` - Primary styled button
- `SecondaryButton` - Secondary styled button
- `TertiaryButton` - Tertiary styled button
- `LinkButton` - Link-styled button
- `BaseButtonProps` (type export) - TypeScript interface for BaseButton props

## Component Structure

### Main Component: Button

The main Button component automatically renders the appropriate styled variant based on the `variation` prop.

### Component Variations:

1. **Primary Button** - Main call-to-action button with prominent styling
2. **Secondary Button** - Alternative action button with subdued styling
3. **Tertiary Button** - Minimal button styling for less prominent actions
4. **Link Button** - Button styled as a text link
5. **Base Button** - Unstyled base button component (default when no variation specified)

### Component Hierarchy:

```
Button (Main Component)
├── PrimaryButton (variation="primary")
├── SecondaryButton (variation="secondary")
├── TertiaryButton (variation="tertiary")
├── LinkButton (variation="link")
└── BaseButton (default)
```

## Props

### ButtonProps

Extends `BaseButtonProps`

| Prop        | Type                                               | Default | Description                             |
| ----------- | -------------------------------------------------- | ------- | --------------------------------------- |
| `variation` | `'primary' \| 'secondary' \| 'tertiary' \| 'link'` | -       | Determines the button styling variation |

### BaseButtonProps

Extends `React.ButtonHTMLAttributes<HTMLButtonElement>`

| Prop               | Type                              | Default                 | Description                                  |
| ------------------ | --------------------------------- | ----------------------- | -------------------------------------------- |
| `ariaLabel`        | `string`                          | -                       | Accessible label for screen readers          |
| `children`         | `React.ReactNode`                 | `'submit'`              | Button content (text, icons, etc.)           |
| `className`        | `string`                          | -                       | Additional CSS class names                   |
| `block`            | `boolean`                         | -                       | Makes button display as block element        |
| `small`            | `boolean`                         | -                       | Renders smaller button size                  |
| `fullWidth`        | `boolean`                         | -                       | Makes button full width of container         |
| `icon`             | `boolean`                         | -                       | Indicates presence of icon (auto-detected)   |
| `expanded`         | `boolean`                         | -                       | Expands button padding for icon-only buttons |
| `iconSize`         | `number`                          | -                       | Size of icon in pixels                       |
| `iconPosition`     | `'left' \| 'right'`               | `'right'`               | Position of icon relative to text            |
| `svgIcon`          | `React.ComponentType`             | -                       | SVG icon component to display                |
| `svgSize`          | `number`                          | `20`                    | Size of SVG icon                             |
| `smallSvgSize`     | `number`                          | `16`                    | Size of SVG icon when small prop is true     |
| `underline`        | `boolean`                         | `true` (for LinkButton) | Controls text underline for LinkButton       |
| `underlineOnHover` | `boolean`                         | -                       | Adds underline on hover for LinkButton       |
| `dark`             | `boolean`                         | -                       | Applies dark theme styling                   |
| `component`        | `React.ComponentType \| 'button'` | `'button'`              | Custom component to render as                |
| `isExternal`       | `boolean`                         | -                       | Indicates external link                      |
| `target`           | `string`                          | -                       | Link target attribute                        |
| `href`             | `string`                          | -                       | Link href attribute                          |

## Usage Examples

### Basic Usage

```tsx
import Button from '@fil-react-components/button';

// Primary button (default variation)
<Button>Click me</Button>

// Specific variations
<Button variation="primary">Primary Action</Button>
<Button variation="secondary">Secondary Action</Button>
<Button variation="tertiary">Tertiary Action</Button>
<Button variation="link">Link Button</Button>
```

### Button Variations

```tsx
// Using named exports directly
import { PrimaryButton, SecondaryButton, TertiaryButton, LinkButton } from '@fil-react-components/button';

<PrimaryButton>Primary</PrimaryButton>
<SecondaryButton>Secondary</SecondaryButton>
<TertiaryButton>Tertiary</TertiaryButton>
<LinkButton>Link</LinkButton>
```

### Sizes and States

```tsx
// Small buttons
<Button variation="primary" small>Small Primary</Button>

// Disabled buttons
<Button variation="primary" disabled>Disabled</Button>

// Full width buttons
<Button variation="secondary" fullWidth>Full Width</Button>

// Block display
<Button variation="tertiary" block>Block Button</Button>
```

### With Icons

```tsx
import CustomArrowRight from '@fil-react-components/svg-icons/dist/CustomArrowRight';

// Icon on the right (default)
<Button variation="primary" svgIcon={CustomArrowRight}>
  Continue
</Button>

// Icon on the left
<Button variation="primary" svgIcon={CustomArrowRight} iconPosition="left">
  Back
</Button>

// Icon-only button
<Button variation="primary" svgIcon={CustomArrowRight} expanded ariaLabel="Next" />
```

### Link Buttons

```tsx
// Basic link button
<Button variation="link" href="/about">About Us</Button>

// Link with custom underline behavior
<Button variation="link" underlineOnHover href="/contact">
  Contact
</Button>

// Link without underline
<Button variation="link" underline={false} href="/privacy">
  Privacy Policy
</Button>
```

### Custom Component

```tsx
import { Link } from 'react-router-dom';

// Using with React Router Link
<Button component={Link} to="/dashboard">
  Go to Dashboard
</Button>;
```

## Features

### Accessibility

- Proper button semantics with `type="button"` by default
- Support for `ariaLabel` for icon-only buttons
- Keyboard navigation support
- Screen reader compatibility
- Disabled state properly indicated

### Styling

- Styled-components integration
- Theme provider support for consistent theming
- Custom className support
- Responsive design support
- Hover, focus, and active state styling

### State Management

- Built-in disabled state handling
- Support for all standard button states
- Theme-based color management

### Icon Support

- Streamline icon integration
- Configurable icon position (left/right)
- Automatic icon sizing based on button size
- SVG icon support

## Testing

The component includes:

- Unit tests using Jest
- Component tests using Playwright
- Accessibility testing with axe-devtools

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

- All button variations (primary, secondary, tertiary, link)
- Size variations (small, regular)
- State variations (disabled, expanded)
- Icon positioning (left, right)
- Link button underline behaviors
- Integration with React Router

## Data Attributes

- `data-frc="button"` - Applied to all button elements

## CSS Classes

- `fil-button` - Applied to the base button element
- `inline-flex align-middle align-center` - Layout utility classes

## Build & Development

### Scripts

```bash
# Run tests
npm test

# Build TypeScript
npm run build

# Lint TypeScript
npm run lint:ts

# Lint TypeScript and fix
npm run lint:ts:fix

# Lint CSS
npm run lint:css

# Lint CSS and fix
npm run lint:css:fix

# Run all linters
npm run lint

# Run component tests
npm run test-ct
```

## File Structure

```
Button/
├── src/
│   ├── BaseButton.style.ts         # Base button styles
│   ├── BaseButton.tsx              # Base button component
│   ├── Button.mock.tsx             # Mock data for testing
│   ├── Button.stories.tsx          # Storybook stories
│   ├── Button.style.ts             # Styled button variations
│   ├── Button.tsx                  # Main button component
│   ├── index.ts                    # Main exports
│   └── tests/
│       ├── Button.ct.tsx           # Component tests
│       ├── Button.test.tsx         # Unit tests
│       └── ButtonWrapper.tsx       # Test wrapper
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Form Submission

```tsx
<form onSubmit={handleSubmit}>
  <Button type="submit" variation="primary">
    Submit Form
  </Button>
</form>
```

### Navigation

```tsx
import { Link } from 'react-router-dom';

<Button component={Link} to="/dashboard" variation="primary">
  Go to Dashboard
</Button>;
```

### Action Buttons with Icons

```tsx
<Button variation="secondary" svgIcon={CustomArrowRight} onClick={handleNext}>
  Next Step
</Button>
```

### Call-to-Action

```tsx
<Button variation="primary" fullWidth size="large">
  Get Started Today
</Button>
```

## Best Practices

1. **Use semantic variations** - Choose the appropriate variation based on the action hierarchy (primary for main actions, secondary for alternatives, etc.)
2. **Provide accessible labels** - Always include text content or ariaLabel for icon-only buttons
3. **Use LinkButton for navigation** - Use link-styled buttons for navigation actions rather than regular buttons
4. **Consider button size** - Use small buttons sparingly and only when space is constrained
5. **Handle loading states** - Disable buttons during async operations and provide visual feedback
6. **Use fullWidth sparingly** - Full-width buttons should be used for prominent actions only
7. **Test accessibility** - Ensure buttons work properly with keyboard navigation and screen readers

## Migration Notes

### From version 3.3.x to 3.4.x:

- Link button underline variations have been updated as per design system changes
- Ensure theme provider is properly configured for consistent styling
- Review link button usage for underline behavior changes

### General Migration:

- The component requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper color theming
- React 16.14.0+ is required

## Related Components

- `@fil-react-components/theme-provider` - Required for theming and styling
- `@fil-react-components/streamline-icon` - Icon component used for button icons
- `@fil-react-components/with-styles` - HOC for styled-components integration
- `@fil-react-components/react-link` - Link component for navigation
- `@fil-react-components/svg-icons` - SVG icon library</content>
  <parameter name="filePath">c:\Users\A744601\Documents\codebase\TAPP101992-fil-react-components\metadata\Button-3.4.2.md
