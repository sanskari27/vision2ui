## Overview

The Tabs component is a flexible tabbed interface component built on top of react-tabs, providing accessible tab navigation with responsive behavior and support for icons. It automatically handles overflow with a "More" dropdown menu on smaller screens and supports equal-width tab distribution following the GDS (Global Design System) standards.

## Package Information

- **Package Name**: `@fil-react-components/tabs`
- **Version**: 3.0.11
- **Description**: Tabs Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/tabs
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 18.0.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/select-input`: ^2.17.24
- `@fil-react-components/streamline-icon`: ^2.15.6
- `@fil-react-components/svg-icons`: ^1.9.0
- `@fil-react-components/with-styles`: ^2.7.8
- `@fil-react-hooks/device-resize`: ^1.9.6
- `@fil-react-mixins/styled`: ^2.7.1
- `classnames`: ^2.5.1
- `lodash`: 4.17.21
- `react-tabs`: 6.1.0

## Exports

```typescript
import Tabs, { TabsVanilla } from '@fil-react-components/tabs';
```

### Available Exports:

- `Tabs` (default export) - Main tabs component with styling
- `Tabs.Item` - Tab item component for defining individual tabs
- `TabsVanilla` - Unstyled tabs component

## Component Structure

### Main Component: Tabs

The main Tabs component wraps the react-tabs library with additional functionality for responsive behavior and theming.

### Component Variations:

1. **Text Tabs** (default) - Standard text-based tabs
2. **Icon Tabs** - Tabs with icons alongside text labels
3. **Equal Width Tabs** - Tabs with equal width distribution
4. **Responsive Tabs** - Tabs that adapt to screen size with overflow menu

### Component Hierarchy:

```
Tabs (Main Component)
├── TabsContext (react-tabs wrapper)
│   ├── TabList (horizontal tab container)
│   │   ├── Tab (individual tab buttons)
│   │   └── SelectInput (overflow menu for small screens)
│   └── TabPanel (content containers)
```

## Props

### TabsProps

Extends `ReactTabsProps`

| Prop             | Type                                                       | Default | Description                          |
| ---------------- | ---------------------------------------------------------- | ------- | ------------------------------------ |
| `children`       | `React.ReactElement<TabItemProps>[]`                       | -       | Array of TabItem components          |
| `defaultIndex`   | `number`                                                   | `0`     | Initially selected tab index         |
| `className`      | `string`                                                   | -       | Additional CSS class names           |
| `onSelect`       | `(index: number, lastIndex: number, event: Event) => void` | -       | Tab selection callback               |
| `equalWidthTabs` | `boolean`                                                  | `true`  | Whether tabs should have equal width |

### TabItemProps

Extends `TabProps`

| Prop       | Type                  | Default | Description                            |
| ---------- | --------------------- | ------- | -------------------------------------- |
| `id`       | `number \| string`    | -       | Unique identifier for the tab          |
| `label`    | `string`              | -       | Display text for the tab               |
| `disabled` | `boolean`             | `false` | Whether the tab is disabled            |
| `icon`     | `React.ComponentType` | -       | Icon component to display with the tab |
| `children` | `React.ReactNode`     | -       | Content to display in the tab panel    |

## Usage Examples

### Basic Tabs

```tsx
import Tabs from '@fil-react-components/tabs';

<Tabs>
  <Tabs.Item label="Tab 1" id="tab1">
    <div>Content for Tab 1</div>
  </Tabs.Item>
  <Tabs.Item label="Tab 2" id="tab2">
    <div>Content for Tab 2</div>
  </Tabs.Item>
  <Tabs.Item label="Tab 3" id="tab3">
    <div>Content for Tab 3</div>
  </Tabs.Item>
</Tabs>;
```

### Controlled Tabs

```tsx
import React, { useState } from 'react';
import Tabs from '@fil-react-components/tabs';

const ControlledTabs = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Tabs
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
    >
      <Tabs.Item label="Dashboard" id="dashboard">
        <DashboardContent />
      </Tabs.Item>
      <Tabs.Item label="Settings" id="settings">
        <SettingsContent />
      </Tabs.Item>
    </Tabs>
  );
};
```

### Tabs with Icons

```tsx
import Tabs from '@fil-react-components/tabs';
import CalendarIcon from '@fil-react-components/svg-icons/dist/Calendar';
import AnalyticsIcon from '@fil-react-components/svg-icons/dist/AnalyticsGraph';

<Tabs>
  <Tabs.Item label="Calendar" id="calendar" icon={CalendarIcon}>
    <CalendarView />
  </Tabs.Item>
  <Tabs.Item label="Analytics" id="analytics" icon={AnalyticsIcon}>
    <AnalyticsView />
  </Tabs.Item>
</Tabs>;
```

### Default Selected Tab

```tsx
<Tabs defaultIndex={1}>
  <Tabs.Item label="First Tab" id="first">
    First tab content
  </Tabs.Item>
  <Tabs.Item label="Second Tab" id="second">
    Second tab content (selected by default)
  </Tabs.Item>
</Tabs>
```

### Disabled Tabs

```tsx
<Tabs>
  <Tabs.Item label="Active Tab" id="active">
    This tab is active
  </Tabs.Item>
  <Tabs.Item label="Disabled Tab" id="disabled" disabled>
    This tab is disabled
  </Tabs.Item>
</Tabs>
```

## Features

### Accessibility

- Proper ARIA attributes for tab navigation
- Keyboard navigation support (arrow keys, tab, enter)
- Screen reader support with proper roles and labels
- Focus management and visual focus indicators

### Responsive Design

- Automatic overflow handling with "More" dropdown on small screens
- Equal width tab distribution (configurable)
- Device-aware responsive behavior using device-resize hook
- Touch-friendly interactions

### Styling

- Styled-components integration
- Theme provider support for consistent theming
- Custom CSS class support
- Active tab styling and hover states
- Icon support with proper spacing

### State Management

- Controlled and uncontrolled modes
- Default index support
- Selection callback handling
- Disabled state management

## Testing

The component includes:

- Unit tests using Jest
- Component tests using Playwright (currently disabled)
- Test utilities from `@fil-react-utils/testing`

Run tests:

```bash
npm test
```

## Storybook Stories

The component has Storybook stories demonstrating:

- Default tab configurations
- Pre-selected tabs
- Disabled tabs
- Icon tabs
- Icon tabs with disabled items

## Data Attributes

- `data-frc="tabs"` - Applied to the main tabs container

## CSS Classes

- `fil-tabs` - Base tabs class
- `fil-tabs__list-wrapper` - Tab list container
- `fil-tabs__title` - Individual tab button
- `fil-tabs__title--icon` - Tab with icon
- `fil-tabs__icon` - Tab icon
- `fil-tabs__title__text` - Tab label text
- `fil-tabs__more-menu` - Overflow dropdown menu
- `fil-tabs__content` - Tab panel content
- `is-active` - Active tab state

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
```

## File Structure

```
Tabs/
├── src/
│   ├── Tabs.tsx              # Main tabs component
│   ├── Tabs.style.ts         # Tabs styling
│   ├── TabItem.tsx           # Tab item component
│   ├── Tabs.mock.tsx         # Mock configurations
│   ├── Tabs.stories.tsx      # Storybook stories
│   ├── constant.ts           # Constants and utilities
│   ├── index.ts              # Main exports
│   └── tests/
│       └── Tabs.test.tsx     # Unit tests
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Content Organization

```tsx
<Tabs>
  <Tabs.Item label="Overview" id="overview">
    <ProductOverview />
  </Tabs.Item>
  <Tabs.Item label="Details" id="details">
    <ProductDetails />
  </Tabs.Item>
  <Tabs.Item label="Reviews" id="reviews">
    <ProductReviews />
  </Tabs.Item>
</Tabs>
```

### Form Steps

```tsx
<Tabs>
  <Tabs.Item label="Personal Info" id="personal">
    <PersonalInfoForm />
  </Tabs.Item>
  <Tabs.Item label="Address" id="address">
    <AddressForm />
  </Tabs.Item>
  <Tabs.Item label="Payment" id="payment">
    <PaymentForm />
  </Tabs.Item>
</Tabs>
```

### Dashboard Navigation

```tsx
<Tabs>
  <Tabs.Item label="Analytics" id="analytics" icon={AnalyticsIcon}>
    <AnalyticsDashboard />
  </Tabs.Item>
  <Tabs.Item label="Users" id="users" icon={UsersIcon}>
    <UserManagement />
  </Tabs.Item>
  <Tabs.Item label="Settings" id="settings" icon={SettingsIcon}>
    <SystemSettings />
  </Tabs.Item>
</Tabs>
```

## Best Practices

1. **Use meaningful IDs** - Provide unique, descriptive IDs for each tab
2. **Keep labels concise** - Use short, clear tab labels for better UX
3. **Consider responsive behavior** - Test tabs on different screen sizes
4. **Use icons sparingly** - Only add icons when they add value to the labels
5. **Handle tab content properly** - Ensure tab panels have appropriate content structure
6. **Provide accessible content** - Make sure tab content is properly structured for screen readers
7. **Test keyboard navigation** - Verify that tabs work with keyboard-only navigation
8. **Use controlled mode when needed** - For complex state management requirements

## Migration Notes

### From older versions:

- Ensure you have the required peer dependencies installed
- React version requirement increased to 18.0.0+
- The component now requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling
- react-tabs dependency updated to version 6.1.0
- TabItem component now requires an `id` prop instead of accepting it optionally

## Related Components

- `@fil-react-components/select-input` - Used for overflow menu on small screens
- `@fil-react-components/streamline-icon` - Icon component for tab icons
- `@fil-react-components/svg-icons` - Icon library
- `@fil-react-components/with-styles` - Styling HOC
- `@fil-react-components/theme-provider` - Theme provider for styling
- `@fil-react-hooks/device-resize` - Hook for responsive behavior
