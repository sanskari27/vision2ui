# Divider Component Documentation

## Overview

The Divider component provides visual separation between content sections with customizable orientation, weight, and thickness. It follows the GDS (Global Design System) standards and includes a TextDivider variant for separators with centered text. The component is built on top of the Box component for flexible styling and layout integration.

## Package Information

- **Package Name**: `@fil-react-components/divider`
- **Version**: 1.3.9
- **Description**: Divider React Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/divider
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/box`: ^3.2.8
- `classnames`: ^2.5.1

## Exports

```typescript
import Divider, { TextDivider } from '@fil-react-components/divider';
```

### Available Exports:

- `Divider` (default export) - Main divider component for visual separation
- `TextDivider` - Divider variant with centered text content

## Component Structure

### Main Component: Divider

A simple visual separator that can be horizontal or vertical with different weights and thicknesses.

### Component Variants:

1. **Divider** - Basic separator line
2. **TextDivider** - Separator with text content in the center

### Component Features:

- **Orientation**: Horizontal or vertical layout
- **Weight**: Light, medium, or heavy visual prominence
- **Thickness**: Thin or thick line width
- **Flexible Styling**: Inherits Box component props for additional customization

### Component Hierarchy:

```
Divider
└── Box (styled separator line)

TextDivider
├── Divider (left side)
├── Text Content
└── Divider (right side)
```

## Props

### DividerProps

Extends `Omit<React.ComponentProps<typeof Box>, 'children'>`

| Prop          | Type                             | Default        | Description                     |
| ------------- | -------------------------------- | -------------- | ------------------------------- |
| `className`   | `string`                         | -              | Additional CSS class names      |
| `orientation` | `'horizontal' \| 'vertical'`     | `'horizontal'` | Layout direction of the divider |
| `kind`        | `'light' \| 'medium' \| 'heavy'` | `'light'`      | Visual weight/color intensity   |
| `size`        | `'thin' \| 'thick'`              | `'thin'`       | Thickness of the divider line   |

### TextDividerProps

Extends `Omit<DividerProps, 'orientation'>`

| Prop               | Type              | Default | Description                                |
| ------------------ | ----------------- | ------- | ------------------------------------------ |
| `children`         | `React.ReactNode` | -       | Text content to display in the center      |
| `dividerClassName` | `string`          | -       | Additional CSS class for the divider lines |

## Usage Examples

### Basic Horizontal Divider

```tsx
import Divider from '@fil-react-components/divider';

<Divider />;
```

### Divider with Different Weights

```tsx
// Light divider (default)
<Divider kind="light" />

// Medium weight divider
<Divider kind="medium" />

// Heavy weight divider
<Divider kind="heavy" />
```

### Divider Thickness

```tsx
// Thin divider (default)
<Divider size="thin" />

// Thick divider
<Divider size="thick" />
```

### Vertical Divider

```tsx
<Divider orientation="vertical" height={100} />
```

### Text Divider

```tsx
import { TextDivider } from '@fil-react-components/divider';

<TextDivider>Section Break</TextDivider>;
```

### Text Divider with Custom Styling

```tsx
<TextDivider kind="heavy" size="thick">
  Important Section
</TextDivider>
```

### Divider in Layout

```tsx
import { Box } from '@fil-react-components/box';

<Box>
  <Box>Content above</Box>
  <Divider my={4} />
  <Box>Content below</Box>
</Box>;
```

### Vertical Divider in Flex Layout

```tsx
<div style={{ display: 'flex', height: '200px' }}>
  <div>Left content</div>
  <Divider orientation="vertical" mx={3} />
  <div>Right content</div>
</div>
```

## Features

### Visual Customization

- **Weight Variants**: Light, medium, and heavy color intensities
- **Thickness Options**: Thin and thick line widths
- **Orientation Support**: Horizontal and vertical layouts
- **Theme Integration**: Uses theme colors for consistent styling

### Layout Integration

- **Box Inheritance**: All Box component props available for positioning
- **Flexible Sizing**: Height/width controlled via Box props
- **Spacing Support**: Margin and padding props from Box component

### Accessibility

- **Semantic Markup**: Proper `role="separator"` attribute
- **Screen Reader Support**: ARIA separator role for assistive technologies
- **Keyboard Navigation**: No interactive elements, purely visual

### Text Divider Features

- **Centered Text**: Text content positioned between divider lines
- **Flexible Content**: Accepts any React node as children
- **Consistent Styling**: Divider lines match the specified weight/thickness

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

- All divider weight variations (light, medium, heavy)
- Thickness options (thin, thick)
- Orientation options (horizontal, vertical)
- Text divider with content
- Integration examples with spacing

## Data Attributes

- `data-frc="divider"` - Applied to the divider element

## CSS Classes

- `fil-divider` - Applied to the divider element
- `fil-text-divider` - Applied to the text divider container

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
Divider/
├── src/
│   ├── Divider.mock.ts            # Mock configurations for testing
│   ├── Divider.stories.tsx        # Storybook stories
│   ├── Divider.tsx                # Main divider component
│   ├── index.ts                   # Main exports
│   └── tests/
│       ├── Divider.ct.tsx         # Component tests
│       ├── Divider.test.tsx       # Unit tests
│       └── __snapshots__/         # Test snapshots
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Content Section Separation

```tsx
<section>
  <h2>Section Title</h2>
  <p>Section content...</p>
  <Divider my={4} />
  <h2>Next Section</h2>
  <p>More content...</p>
</section>
```

### Form Field Groups

```tsx
<form>
  <fieldset>
    <legend>Personal Information</legend>
    {/* form fields */}
  </fieldset>

  <TextDivider>Contact Details</TextDivider>

  <fieldset>
    <legend>Contact Information</legend>
    {/* form fields */}
  </fieldset>
</form>
```

### Sidebar Layout

```tsx
<div style={{ display: 'flex' }}>
  <aside style={{ width: '200px' }}>Navigation content</aside>

  <Divider orientation="vertical" mx={4} />

  <main style={{ flex: 1 }}>Main content</main>
</div>
```

### List Item Separation

```tsx
<ul>
  {items.map((item, index) => (
    <li key={item.id}>
      {item.content}
      {index < items.length - 1 && <Divider my={2} />}
    </li>
  ))}
</ul>
```

### Card Content Separation

```tsx
<div className="card">
  <header>Card Title</header>
  <Divider />
  <main>Card content</main>
  <Divider />
  <footer>Card footer</footer>
</div>
```

## Best Practices

1. **Use appropriate weights**: Light for subtle separation, heavy for strong visual breaks
2. **Consider context**: Match divider weight to surrounding content hierarchy
3. **Maintain consistency**: Use the same divider style throughout similar contexts
4. **Provide spacing**: Use margin props to give dividers breathing room
5. **Test vertical dividers**: Ensure proper height/width is set for vertical orientation
6. **Use TextDivider sparingly**: Reserve for significant section breaks with clear labels
7. **Consider accessibility**: Dividers are visual-only; ensure content separation is clear
8. **Responsive design**: Test divider appearance across different screen sizes

## Migration Notes

### From version 1.2.x to 1.3.x:

- Global spacing classes are now optional
- Removed usage of "important" in spacing styles

### General Migration:

- Ensure you have the required peer dependencies installed
- The component requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper color theming
- React 16.14.0+ is required

## Related Components

- `@fil-react-components/box` - Base component for layout and styling
- `@fil-react-components/theme-provider` - Theme provider for color theming</content>
  <parameter name="filePath">c:\Users\A744601\Documents\codebase\TAPP101992-fil-react-components\metadata\Divider-1.3.9.md
