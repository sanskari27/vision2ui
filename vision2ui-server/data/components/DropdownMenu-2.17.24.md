# DropdownMenu Component Documentation

## Overview

The DropdownMenu component provides a dropdown menu interface with customizable button styles and icon support. It follows the GDS (Global Design System) standards and wraps the SelectInput component to provide menu-specific functionality with button and icon variants.

## Package Information

- **Package Name**: `@fil-react-components/dropdown-menu`
- **Version**: 2.17.24
- **Description**: DropdownMenu Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/dropdown-menu
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/select-input`: ^2.17.24
- `@fil-react-components/streamline-icon`: ^2.15.6
- `@fil-react-components/svg-icons`: ^1.9.0
- `@fil-react-mixins/styled`: ^2.7.1
- `classnames`: ^2.5.1

## Exports

```typescript
import DropdownMenu from '@fil-react-components/dropdown-menu';
```

### Available Exports:

- `DropdownMenu` (default export) - Main dropdown menu component

## Component Structure

### Main Component: DropdownMenu

A dropdown menu component that provides button and icon variants for menu interactions.

### Component Variants:

1. **Button Type** - Text button with dropdown arrow
2. **Icon Type** - Icon-only button for compact menus

### Component Features:

- **Button Variants**: Secondary and tertiary button styles
- **Size Options**: Standard and small sizes
- **Icon Support**: Icons in menu options
- **Accessibility**: Full keyboard navigation and ARIA support
- **Theme Integration**: Styled-components with theme provider

### Component Hierarchy:

```
DropdownMenu
└── SelectInput (with type="menu")
    ├── Button/Icon Trigger
    └── Dropdown Options List
        ├── Option Items
        └── Icons (optional)
```

## Props

### DropdownMenuProps

Extends `Omit<SelectInputProps, 'type'>`

| Prop           | Type                 | Default    | Description                              |
| -------------- | -------------------- | ---------- | ---------------------------------------- |
| `type`         | `'button' \| 'icon'` | `'button'` | Display type of the dropdown trigger     |
| `arrowSize`    | `number`             | `8`        | Size of the dropdown arrow in pixels     |
| `wrapperProps` | `object`             | -          | Additional props for the wrapper element |

### Inherited SelectInput Props

From `@fil-react-components/select-input`

| Prop        | Type                                                   | Default      | Description                                               |
| ----------- | ------------------------------------------------------ | ------------ | --------------------------------------------------------- |
| `options`   | `Array<{label: string, value: any, icon?: Component}>` | -            | Menu options array                                        |
| `button`    | `Component`                                            | -            | Custom button component (SecondaryButton, TertiaryButton) |
| `titleText` | `string`                                               | -            | Button text for button type                               |
| `size`      | `'standard' \| 'small'`                                | `'standard'` | Size variant                                              |
| `onChange`  | `Function`                                             | -            | Selection change handler                                  |
| `id`        | `string`                                               | -            | HTML id attribute                                         |
| `name`      | `string`                                               | -            | Name attribute for form integration                       |
| `disabled`  | `boolean`                                              | -            | Whether the dropdown is disabled                          |
| `className` | `string`                                               | -            | Additional CSS class names                                |

## Usage Examples

### Basic Button Dropdown

```tsx
import DropdownMenu from '@fil-react-components/dropdown-menu';
import { SecondaryButton } from '@fil-react-components/button';

<DropdownMenu
  button={SecondaryButton}
  titleText="Actions"
  options={[
    { label: 'Edit', value: 'edit' },
    { label: 'Delete', value: 'delete' },
    { label: 'Share', value: 'share' },
  ]}
  onChange={(e) => console.log('Selected:', e.target.value)}
/>;
```

### Tertiary Button Dropdown

```tsx
import { TertiaryButton } from '@fil-react-components/button';

<DropdownMenu
  button={TertiaryButton}
  titleText="More Options"
  options={[
    { label: 'Download', value: 'download' },
    { label: 'Print', value: 'print' },
    { label: 'Export', value: 'export' },
  ]}
  onChange={handleMenuSelection}
/>;
```

### Small Size Dropdown

```tsx
<DropdownMenu
  button={SecondaryButton}
  titleText="Actions"
  size="small"
  options={menuOptions}
  onChange={handleSelection}
/>
```

### Dropdown with Icons

```tsx
import NewspaperRead from '@fil-react-components/svg-icons/dist/NewspaperRead';
import OfficeFilePdf1 from '@fil-react-components/svg-icons/dist/OfficeFilePdf1';

<DropdownMenu
  button={SecondaryButton}
  titleText="Documents"
  options={[
    { label: 'Read Article', value: 'read', icon: NewspaperRead },
    { label: 'Download PDF', value: 'pdf', icon: OfficeFilePdf1 },
    { label: 'View Details', value: 'details' },
  ]}
  onChange={handleDocumentAction}
/>;
```

### Icon-Only Dropdown

```tsx
<DropdownMenu
  type="icon"
  options={[
    { label: 'Settings', value: 'settings' },
    { label: 'Help', value: 'help' },
    { label: 'Logout', value: 'logout' },
  ]}
  onChange={handleIconMenu}
/>
```

### Small Icon Dropdown

```tsx
<DropdownMenu
  type="icon"
  size="small"
  options={compactMenuOptions}
  onChange={handleCompactMenu}
/>
```

### Controlled Dropdown

```tsx
const [selectedValue, setSelectedValue] = useState(null);

<DropdownMenu
  button={SecondaryButton}
  titleText="Select Option"
  options={options}
  value={selectedValue}
  onChange={(e) => setSelectedValue(e.target.value)}
  isControlled
/>;
```

## Features

### Button Variants

- **Secondary Button**: Standard action button styling
- **Tertiary Button**: Subtle button styling for less prominent actions
- **Custom Buttons**: Support for any button component

### Size Options

- **Standard Size**: Default button dimensions
- **Small Size**: Compact button for space-constrained areas

### Icon Integration

- **Option Icons**: Icons can be displayed next to menu options
- **Icon-Only Trigger**: Compact icon button for dropdown trigger
- **SVG Icon Support**: Full support for SVG icon components

### Accessibility

- **Keyboard Navigation**: Full keyboard support for menu navigation
- **ARIA Attributes**: Proper ARIA labels and roles
- **Screen Reader**: Menu structure announced to assistive technologies
- **Focus Management**: Proper focus handling and visual indicators

### Styling

- **Theme Integration**: Uses theme provider for consistent colors
- **Custom Styling**: CSS class support for additional styling
- **Responsive Design**: Adapts to different screen sizes

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

- Secondary and tertiary button variants
- Small and standard sizes
- Icon integration in options
- Icon-only dropdown triggers
- Various button configurations

## Data Attributes

- `data-frc="dropdown-menu"` - Applied to the dropdown menu wrapper

## CSS Classes

- `fil-dropdown-menu` - Main dropdown menu container
- `fil-dropdown-menu__button` - Button type dropdown
- `fil-dropdown-menu__icon` - Icon type dropdown
- `fil-dropdown-menu__icon` - Menu icon element

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
DropdownMenu/
├── src/
│   ├── DropdownMenu.mock.tsx         # Mock configurations for testing
│   ├── DropdownMenu.stories.tsx      # Storybook stories
│   ├── DropdownMenu.style.ts         # Styled-components styles
│   ├── DropdownMenu.tsx              # Main dropdown menu component
│   ├── index.ts                      # Main exports
│   └── tests/
│       ├── DropdownMenu.ct.tsx       # Component tests
│       ├── DropdownMenu.test.tsx     # Unit tests
│       └── DropdownMenuWrapper.tsx   # Test wrapper
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Action Menus

```tsx
const ActionMenu = () => (
  <DropdownMenu
    button={SecondaryButton}
    titleText="Actions"
    options={[
      { label: 'Edit Profile', value: 'edit' },
      { label: 'Change Password', value: 'password' },
      { label: 'Delete Account', value: 'delete' },
    ]}
    onChange={handleUserAction}
  />
);
```

### Document Operations

```tsx
const DocumentMenu = () => (
  <DropdownMenu
    button={TertiaryButton}
    titleText="File"
    options={[
      { label: 'Open', value: 'open', icon: FolderOpen },
      { label: 'Save', value: 'save', icon: Save },
      { label: 'Print', value: 'print', icon: Printer },
      { label: 'Export', value: 'export', icon: Download },
    ]}
    onChange={handleDocumentAction}
  />
);
```

### Settings Menu

```tsx
const SettingsMenu = () => (
  <DropdownMenu
    type="icon"
    options={[
      { label: 'Preferences', value: 'prefs' },
      { label: 'Notifications', value: 'notifications' },
      { label: 'Privacy', value: 'privacy' },
      { label: 'Help', value: 'help' },
    ]}
    onChange={handleSettingsAction}
  />
);
```

### Table Row Actions

```tsx
const TableRowMenu = ({ rowId }) => (
  <DropdownMenu
    button={TertiaryButton}
    size="small"
    titleText="Actions"
    options={[
      { label: 'View Details', value: 'view' },
      { label: 'Edit', value: 'edit' },
      { label: 'Duplicate', value: 'duplicate' },
      { label: 'Delete', value: 'delete' },
    ]}
    onChange={(e) => handleRowAction(rowId, e.target.value)}
  />
);
```

### Navigation Menu

```tsx
const NavigationDropdown = () => (
  <DropdownMenu
    button={SecondaryButton}
    titleText="Navigate"
    options={[
      { label: 'Home', value: 'home' },
      { label: 'About', value: 'about' },
      { label: 'Services', value: 'services' },
      { label: 'Contact', value: 'contact' },
    ]}
    onChange={handleNavigation}
  />
);
```

## Best Practices

1. **Choose appropriate button variant**: Use secondary for primary actions, tertiary for secondary
2. **Use clear, concise labels**: Menu option labels should be brief and descriptive
3. **Consider icon usage**: Icons enhance recognition but don't replace text labels
4. **Group related actions**: Organize menu options logically
5. **Use icon type sparingly**: Reserve icon-only dropdowns for well-known actions
6. **Provide feedback**: Show loading states or confirmation for destructive actions
7. **Test accessibility**: Ensure keyboard navigation works properly
8. **Consider mobile**: Dropdowns should work well on touch devices
9. **Use consistent styling**: Maintain consistent dropdown styles across the application
10. **Handle state properly**: Use controlled mode for complex state management

## Migration Notes

### General Migration:

- Ensure you have the required peer dependencies installed
- The component requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper color theming
- React 16.14.0+ is required

### Recent Updates:

- Focus state and background color fixes for select-input component

## Related Components

- `@fil-react-components/select-input` - Base select component
- `@fil-react-components/button` - Button components for dropdown triggers
- `@fil-react-components/streamline-icon` - Icon display component
- `@fil-react-components/theme-provider` - Theme provider for styling</content>
  <parameter name="filePath">c:\Users\A744601\Documents\codebase\TAPP101992-fil-react-components\metadata\DropdownMenu-2.17.24.md
