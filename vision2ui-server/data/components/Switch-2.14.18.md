## Overview

The Switch component is a flexible tab-like navigation component that provides horizontal segmented control functionality with multiple variations and responsive behavior. It follows the GDS (Global Design System) standards and supports both text and icon-based switches with automatic width equalization.

## Package Information

- **Package Name**: `@fil-react-components/switch`
- **Version**: 2.14.18
- **Description**: Switch Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/switch
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/radio-button`: ^2.12.13
- `@fil-react-components/regular-label`: ^2.11.12
- `@fil-react-components/streamline-icon`: ^2.15.6
- `@fil-react-components/with-label-wrapper`: ^1.10.12
- `@fil-react-mixins/styled`: ^2.7.1
- `classnames`: ^2.5.1
- `lodash`: 4.17.21

## Exports

```typescript
import Switch, { SwitchItem } from '@fil-react-components/switch';
```

### Available Exports:

- `Switch` (default export) - Main switch component with context provider
- `SwitchItem` - Individual switch item component

## Component Structure

### Main Component: Switch

The main Switch component provides a context for managing switch state and automatically calculates equal widths for all switch items.

### Component Variations:

1. **Text Switch** (default) - Standard text-based switch items
2. **Icon Switch** - Switch items containing icons
3. **Symbol Switch** - Switch items with custom symbols/text
4. **Small Switch** - Compact version with smaller padding

### Component Hierarchy:

```
Switch (Main Component)
├── SwitchContext (Context Provider)
│   ├── SwitchItem (Radio Button Wrapper)
│   │   └── RadioButton (Base Radio Button)
│   └── SwitchItem (Radio Button Wrapper)
│       └── RadioButton (Base Radio Button)
```

## Props

### SwitchProps

| Prop            | Type                    | Default      | Description                             |
| --------------- | ----------------------- | ------------ | --------------------------------------- |
| `className`     | `string`                | -            | Additional CSS class names              |
| `onChange`      | `Function`              | `noop`       | Change event handler                    |
| `selectedValue` | `string`                | -            | Controlled selected value               |
| `name`          | `string`                | `'switch'`   | HTML name attribute for the radio group |
| `size`          | `'standard' \| 'small'` | `'standard'` | Size variation of the switch            |
| `type`          | `'text' \| 'icon'`      | -            | Type of switch content                  |
| `children`      | `React.ReactNode`       | -            | Switch item children                    |

### SwitchItemProps

Extends `React.InputHTMLAttributes<HTMLInputElement>`

| Prop        | Type                                    | Default | Description                            |
| ----------- | --------------------------------------- | ------- | -------------------------------------- |
| `ariaLabel` | `string`                                | -       | Accessibility label for screen readers |
| `value`     | `string \| number \| readonly string[]` | -       | Value of the switch item               |
| `children`  | `React.ReactNode`                       | -       | Content to display in the switch item  |

## Usage Examples

### Basic Usage

```tsx
import Switch from '@fil-react-components/switch';

<Switch name="example-switch">
  <Switch.Item value="option1">Option 1</Switch.Item>
  <Switch.Item value="option2">Option 2</Switch.Item>
  <Switch.Item value="option3">Option 3</Switch.Item>
</Switch>;
```

### Controlled Switch

```tsx
import React, { useState } from 'react';
import Switch from '@fil-react-components/switch';

const ControlledSwitch = () => {
  const [selectedValue, setSelectedValue] = useState('option2');

  return (
    <Switch
      name="controlled-switch"
      selectedValue={selectedValue}
      onChange={(e) => setSelectedValue(e.target.value)}
    >
      <Switch.Item value="option1">Option 1</Switch.Item>
      <Switch.Item value="option2">Option 2</Switch.Item>
      <Switch.Item value="option3">Option 3</Switch.Item>
    </Switch>
  );
};
```

### Icon Switch

```tsx
import Switch from '@fil-react-components/switch';
import NewspaperRead from '@fil-react-components/svg-icons/dist/NewspaperRead';
import OfficeFilePdf1 from '@fil-react-components/svg-icons/dist/OfficeFilePdf1';
import StreamlineIcon from '@fil-react-components/streamline-icon';

<Switch name="icon-switch" type="icon">
  <Switch.Item value="news" ariaLabel="News section">
    <StreamlineIcon icon={NewspaperRead} size={20} />
  </Switch.Item>
  <Switch.Item value="pdf" ariaLabel="PDF section">
    <StreamlineIcon icon={OfficeFilePdf1} size={20} />
  </Switch.Item>
</Switch>;
```

### Small Switch

```tsx
<Switch name="small-switch" size="small">
  <Switch.Item value="small1">Small 1</Switch.Item>
  <Switch.Item value="small2">Small 2</Switch.Item>
</Switch>
```

### Symbol Switch

```tsx
<Switch name="symbol-switch" type="icon">
  <Switch.Item value="percent">%</Switch.Item>
  <Switch.Item value="pound">£</Switch.Item>
  <Switch.Item value="dollar">$</Switch.Item>
</Switch>
```

## Features

### Accessibility

- Proper radio button semantics with `type="radio"`
- Label association for screen readers via `ariaLabel`
- Keyboard navigation support
- ARIA attributes for accessibility compliance

### Styling

- Styled-components integration
- Theme provider support for consistent theming
- Custom className support
- Responsive design with automatic width calculation
- Equal width distribution for switch items

### State Management

- Supports both controlled and uncontrolled modes
- Context-based state management
- Automatic width equalization across items
- Selected state styling

## Testing

The component includes:

- Unit tests using Jest
- Component tests using Playwright
- Accessibility testing with axe-devtools
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

- Text switch variations
- Icon switch variations
- Symbol switch variations
- Small size variations
- Controlled switch examples
- Disabled item examples

## Data Attributes

- `data-frc="switch"` - Applied to the main switch container

## CSS Classes

- `fil-switch` - Applied to the main switch container
- `fil-switch__item` - Applied to individual switch items

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
Switch/
├── src/
│   ├── Switch.tsx              # Main switch component with context
│   ├── Switch.style.ts         # Switch styling with theme integration
│   ├── Switch.mock.tsx         # Mock configurations for testing
│   ├── Switch.stories.tsx      # Storybook stories
│   ├── index.ts                # Main exports
│   └── tests/
│       ├── Switch.test.tsx     # Unit tests
│       ├── Switch.ct.tsx       # Component tests
│       └── SwitchWrapper.tsx   # Test wrapper component
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Navigation Tabs

```tsx
<Switch name="navigation">
  <Switch.Item value="dashboard">Dashboard</Switch.Item>
  <Switch.Item value="analytics">Analytics</Switch.Item>
  <Switch.Item value="settings">Settings</Switch.Item>
</Switch>
```

### Filter Options

```tsx
<Switch name="filter">
  <Switch.Item value="all">All Items</Switch.Item>
  <Switch.Item value="active">Active</Switch.Item>
  <Switch.Item value="inactive">Inactive</Switch.Item>
</Switch>
```

### View Modes

```tsx
<Switch name="view-mode">
  <Switch.Item value="list">List View</Switch.Item>
  <Switch.Item value="grid">Grid View</Switch.Item>
  <Switch.Item value="table">Table View</Switch.Item>
</Switch>
```

## Best Practices

1. **Provide meaningful labels** - Use clear, descriptive text for switch items
2. **Use consistent naming** - Ensure the `name` prop is unique across the application
3. **Handle controlled state properly** - When using controlled mode, always provide `selectedValue` and `onChange`
4. **Use appropriate size** - Choose `small` size for compact spaces, `standard` for regular use
5. **Consider accessibility** - Always provide `ariaLabel` for icon-based switches
6. **Test interactions** - Verify that switch changes trigger the expected behavior
7. **Use semantic values** - Choose meaningful values for switch items that represent their purpose

## Migration Notes

### From older versions:

- Ensure you have the required peer dependencies installed
- The component now requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling
- Switch items now use RadioButton internally for better accessibility

## Related Components

- `@fil-react-components/radio-button` - Base radio button component
- `@fil-react-components/regular-label` - Regular label component
- `@fil-react-components/streamline-icon` - Icon component for icon switches
- `@fil-react-components/with-label-wrapper` - HOC for label wrapping
- `@fil-react-components/theme-provider` - Theme provider for styling
