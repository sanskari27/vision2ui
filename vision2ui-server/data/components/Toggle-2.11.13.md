## Overview

The Toggle component is a form control that allows users to switch between two states (on/off, true/false) with a visual toggle switch interface. It supports both standard and contained variants, with configurable sizes, labels, and sub-descriptions following the GDS (Global Design System) standards.

## Package Information

- **Package Name**: `@fil-react-components/toggle`
- **Version**: 2.11.13
- **Description**: Toggle Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/toggle
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/icon`: ^2.10.10
- `@fil-react-components/label`: ^2.9.11
- `@fil-react-components/with-styles`: ^2.7.8
- `@fil-react-hooks/unique-id`: ^1.4.3
- `@fil-react-mixins/styled`: ^2.7.1
- `classnames`: ^2.5.1

## Exports

```typescript
import Toggle, { ContainedToggle } from '@fil-react-components/toggle';
```

### Available Exports:

- `Toggle` (default export) - Main toggle switch component
- `ContainedToggle` - Segmented control variant for multiple options

## Component Structure

### Main Components: Toggle and ContainedToggle

The Toggle system provides two distinct components:

1. **Toggle** - A binary switch component with a sliding indicator
2. **ContainedToggle** - A segmented control for selecting between multiple radio button options

### Component Variations:

1. **Standard Toggle** - Basic on/off switch with optional label and sub-description
2. **Small Toggle** - Compact version with reduced dimensions
3. **Contained Toggle** - Segmented control with multiple selectable options
4. **Large Contained Toggle** - Enhanced version with icons and larger touch targets

### Component Hierarchy:

```
Toggle (Standard)
├── Label (optional)
│   └── Sub-description (optional)
└── Track
    └── Switch Indicator

ContainedToggle
└── Items[]
    ├── Input (radio)
    ├── Label
    └── Icon (optional, large variant)
```

## Props

### ToggleProps

| Prop           | Type                                                   | Default      | Description                                 |
| -------------- | ------------------------------------------------------ | ------------ | ------------------------------------------- |
| `checked`      | `boolean`                                              | -            | Whether the toggle is checked (controlled)  |
| `isControlled` | `boolean`                                              | `false`      | Whether the component is controlled         |
| `id`           | `string`                                               | -            | Unique identifier for the toggle            |
| `name`         | `string`                                               | -            | Name attribute for form submission          |
| `disabled`     | `boolean`                                              | `false`      | Whether the toggle is disabled              |
| `className`    | `string`                                               | -            | Additional CSS class names                  |
| `inputClass`   | `string`                                               | -            | Additional CSS class for the hidden input   |
| `label`        | `string`                                               | -            | Label text displayed next to the toggle     |
| `size`         | `'standard' \| 'small'`                                | `'standard'` | Size variant of the toggle                  |
| `boldLabel`    | `boolean`                                              | `true`       | Whether the label should be bold            |
| `subDesc`      | `React.ReactNode`                                      | -            | Additional description text below the label |
| `value`        | `boolean`                                              | -            | Value for controlled components             |
| `onChange`     | `(event: React.ChangeEvent<HTMLInputElement>) => void` | -            | Change handler function                     |

### ContainedToggleProps

| Prop           | Type                | Default | Description                             |
| -------------- | ------------------- | ------- | --------------------------------------- |
| `className`    | `string`            | -       | Additional CSS class names              |
| `name`         | `string`            | -       | Name attribute for the radio group      |
| `value`        | `string`            | -       | Currently selected value                |
| `isControlled` | `boolean`           | `false` | Whether the component is controlled     |
| `large`        | `boolean`           | `false` | Whether to use large variant with icons |
| `items`        | `Array<ItemConfig>` | -       | Array of selectable items               |
| `disabled`     | `boolean`           | `false` | Whether the entire group is disabled    |

### ItemConfig

| Property      | Type     | Description                 |
| ------------- | -------- | --------------------------- |
| `label`       | `string` | Display text for the item   |
| `value`       | `string` | Value when selected         |
| `description` | `string` | Accessibility description   |
| `className`   | `string` | Additional CSS class        |
| `id`          | `string` | Unique identifier           |
| `icon`        | `string` | Icon name for large variant |

## Usage Examples

### Basic Toggle

```tsx
import React, { useState } from 'react';
import Toggle from '@fil-react-components/toggle';

const BasicExample = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <Toggle
      id="basic-toggle"
      name="basic-toggle"
      label="Enable feature"
      checked={isEnabled}
      onChange={(e) => setIsEnabled(e.target.checked)}
    />
  );
};
```

### Toggle with Sub-description

```tsx
<Toggle
  id="toggle-with-desc"
  name="toggle-with-desc"
  label="Notifications"
  subDesc="Receive email notifications for important updates"
  checked={true}
/>
```

### Small Toggle

```tsx
<Toggle
  id="small-toggle"
  name="small-toggle"
  label="Compact mode"
  size="small"
  checked={false}
/>
```

### Controlled Toggle

```tsx
const [toggleState, setToggleState] = useState(false);

<Toggle
  id="controlled-toggle"
  name="controlled-toggle"
  label="Controlled toggle"
  isControlled={true}
  checked={toggleState}
  onChange={(e) => setToggleState(e.target.checked)}
/>;
```

### Disabled Toggle

```tsx
<Toggle
  id="disabled-toggle"
  name="disabled-toggle"
  label="Disabled toggle"
  disabled={true}
  checked={false}
/>
```

### Contained Toggle (Basic)

```tsx
import { ContainedToggle } from '@fil-react-components/toggle';

<ContainedToggle
  name="view-mode"
  items={[
    {
      id: 'list-view',
      value: 'list',
      label: 'List',
      description: 'List view',
    },
    {
      id: 'grid-view',
      value: 'grid',
      label: 'Grid',
      description: 'Grid view',
    },
  ]}
  value="list"
/>;
```

### Contained Toggle (Currency Selector)

```tsx
<ContainedToggle
  name="currency"
  items={[
    {
      id: 'percent',
      value: 'percent',
      label: '%',
      description: 'Select percentage',
    },
    {
      id: 'currency',
      value: 'currency',
      label: '£',
      description: 'Select currency',
    },
  ]}
  value="currency"
/>
```

### Large Contained Toggle with Icons

```tsx
<ContainedToggle
  name="chart-type"
  large={true}
  items={[
    {
      id: 'chart',
      value: 'chart',
      label: 'Chart',
      description: 'Chart view',
      icon: 'chart',
    },
    {
      id: 'calendar',
      value: 'calendar',
      label: 'Calendar',
      description: 'Calendar view',
      icon: 'calendar',
    },
  ]}
  value="chart"
/>
```

### Controlled Contained Toggle

```tsx
const [selectedValue, setSelectedValue] = useState('option1');

<ContainedToggle
  name="options"
  isControlled={true}
  value={selectedValue}
  items={[
    {
      id: 'option1',
      value: 'option1',
      label: 'Option 1',
    },
    {
      id: 'option2',
      value: 'option2',
      label: 'Option 2',
    },
  ]}
  onChange={(e) => setSelectedValue(e.target.value)}
/>;
```

### Disabled Contained Toggle

```tsx
<ContainedToggle
  name="disabled-group"
  disabled={true}
  items={[
    {
      id: 'disabled1',
      value: 'disabled1',
      label: 'Disabled 1',
    },
    {
      id: 'disabled2',
      value: 'disabled2',
      label: 'Disabled 2',
    },
  ]}
/>
```

## Features

### Toggle Component

- **Binary State** - Simple on/off toggle functionality
- **Visual Feedback** - Animated switch indicator with smooth transitions
- **Accessibility** - Proper ARIA attributes and keyboard navigation
- **Size Variants** - Standard and small sizes for different contexts
- **Label Support** - Optional labels with bold styling
- **Sub-descriptions** - Additional explanatory text
- **Form Integration** - Works with form libraries and validation
- **Theme Integration** - Consistent styling with theme provider

### ContainedToggle Component

- **Multiple Options** - Select between multiple radio button options
- **Visual Grouping** - Connected button appearance
- **Icon Support** - Optional icons for large variant
- **Touch Friendly** - Larger touch targets for mobile devices
- **Keyboard Navigation** - Arrow key navigation between options
- **Screen Reader Support** - Proper labeling and descriptions

### State Management

- **Controlled/ Uncontrolled** - Support for both patterns
- **Form Integration** - Compatible with React Hook Form, Formik, etc.
- **Validation Ready** - Proper form field attributes

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

- Standard toggle variations (default, on, disabled, disabled-on)
- Small toggle variants
- Toggles with sub-descriptions
- Contained toggle variations (basic, disabled, selected, large with icons)
- All mock configurations and use cases

## Data Attributes

- `data-frc="toggle"` - Applied to the main toggle container

## CSS Classes

### Toggle Classes

- `fil-toggle` - Main toggle container
- `fil-toggle__input` - Hidden checkbox input
- `fil-toggle__label` - Label container
- `fil-toggle__label-text` - Label text wrapper
- `fil-toggle__sub-desc` - Sub-description text
- `fil-toggle__track` - Toggle track/background
- `fil-toggle__standard` - Standard size modifier
- `fil-toggle__small` - Small size modifier

### ContainedToggle Classes

- `fil-contained-toggle` - Main container
- `fil-contained-toggle__item` - Individual item container
- `fil-contained-toggle__input` - Hidden radio input
- `fil-contained-toggle__label` - Item label

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
Toggle/
├── src/
│   ├── Toggle.tsx              # Main toggle component
│   ├── Toggle.style.ts         # Toggle styling with size variants
│   ├── ContainedToggle.tsx     # Contained toggle component
│   ├── ContainedToggle.style.ts # Contained toggle styling
│   ├── index.ts                # Main exports
│   ├── Toggle.mock.tsx         # Mock configurations
│   ├── Toggle.stories.tsx      # Storybook stories
│   └── tests/
│       ├── Toggle.test.tsx     # Unit tests
│       ├── Toggle.ct.tsx       # Component tests
│       └── ToggleWrapper.tsx   # Test wrapper
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Settings Panel

```tsx
const SettingsPanel = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <Toggle
        id="notifications"
        name="notifications"
        label="Email notifications"
        subDesc="Receive updates about your account activity"
        checked={notifications}
        onChange={(e) => setNotifications(e.target.checked)}
      />

      <Toggle
        id="dark-mode"
        name="dark-mode"
        label="Dark mode"
        subDesc="Switch to dark theme"
        checked={darkMode}
        onChange={(e) => setDarkMode(e.target.checked)}
      />
    </div>
  );
};
```

### Feature Toggle

```tsx
const FeatureToggle = ({ feature, enabled, onToggle }) => (
  <Toggle
    id={`feature-${feature.id}`}
    name={`feature-${feature.id}`}
    label={feature.name}
    subDesc={feature.description}
    checked={enabled}
    onChange={() => onToggle(feature.id)}
  />
);
```

### View Mode Selector

```tsx
const ViewSelector = ({ currentView, onViewChange }) => (
  <ContainedToggle
    name="view-mode"
    value={currentView}
    items={[
      {
        id: 'list',
        value: 'list',
        label: 'List',
        description: 'List view',
      },
      {
        id: 'grid',
        value: 'grid',
        label: 'Grid',
        description: 'Grid view',
      },
      {
        id: 'table',
        value: 'table',
        label: 'Table',
        description: 'Table view',
      },
    ]}
    onChange={(e) => onViewChange(e.target.value)}
  />
);
```

### Currency Selector

```tsx
const CurrencySelector = ({ currency, onCurrencyChange }) => (
  <ContainedToggle
    name="currency"
    value={currency}
    items={[
      {
        id: 'usd',
        value: 'usd',
        label: '$',
        description: 'US Dollar',
      },
      {
        id: 'eur',
        value: 'eur',
        label: '€',
        description: 'Euro',
      },
      {
        id: 'gbp',
        value: 'gbp',
        label: '£',
        description: 'British Pound',
      },
    ]}
    onChange={(e) => onCurrencyChange(e.target.value)}
  />
);
```

### Chart Type Selector

```tsx
const ChartTypeSelector = ({ chartType, onTypeChange }) => (
  <ContainedToggle
    name="chart-type"
    large={true}
    value={chartType}
    items={[
      {
        id: 'line',
        value: 'line',
        label: 'Line',
        description: 'Line chart',
        icon: 'line-chart',
      },
      {
        id: 'bar',
        value: 'bar',
        label: 'Bar',
        description: 'Bar chart',
        icon: 'bar-chart',
      },
      {
        id: 'pie',
        value: 'pie',
        label: 'Pie',
        description: 'Pie chart',
        icon: 'pie-chart',
      },
    ]}
    onChange={(e) => onTypeChange(e.target.value)}
  />
);
```

## Best Practices

1. **Use appropriate component** - Choose Toggle for binary choices, ContainedToggle for multiple options
2. **Provide clear labels** - Always include descriptive labels for accessibility
3. **Consider sub-descriptions** - Use for additional context when needed
4. **Choose appropriate size** - Use small toggle for compact spaces
5. **Handle controlled state** - Use controlled components for complex state management
6. **Test accessibility** - Ensure proper keyboard navigation and screen reader support
7. **Consider mobile** - Large contained toggles work better on touch devices
8. **Use icons meaningfully** - Icons should enhance understanding, not replace labels
9. **Group related toggles** - Use consistent spacing and alignment
10. **Provide feedback** - Show loading states or confirmation for important toggles

## Migration Notes

### From older versions:

- Ensure you have the required peer dependencies installed
- The component now requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling
- ContainedToggle now supports the `large` prop for enhanced touch targets
- Focus states have been improved for better accessibility
- Component is now fully accessible with proper ARIA support

## Related Components

- `@fil-react-components/button` - Button component used in contained toggle labels
- `@fil-react-components/label` - Label component for toggle labels
- `@fil-react-components/icon` - Icon component used in large contained toggles
- `@fil-react-components/theme-provider` - Theme provider for styling
- `@fil-react-components/form` - Form component for grouping toggles
