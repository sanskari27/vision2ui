# Checkbox Component Documentation

## Overview

The Checkbox component is a flexible, accessible form input component that provides checkbox functionality with multiple variations and validation states. It follows the GDS (Global Design System) standards and supports both regular and large sizes, with features like intermediate states and grouped checkboxes.

## Package Information

- **Package Name**: `@fil-react-components/checkbox`
- **Version**: 2.12.13
- **Description**: Checkbox Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/checkbox
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/input`: ^2.12.11
- `@fil-react-components/large-label`: ^2.10.11
- `@fil-react-components/regular-label`: ^2.11.12
- `@fil-react-components/with-label-wrapper`: ^1.10.12
- `@fil-react-components/with-styles`: ^2.7.8
- `classnames`: ^2.5.1
- `lodash`: 4.17.21

## Exports

```typescript
import Checkbox, {
  CheckboxGroup,
  BaseCheckbox,
} from '@fil-react-components/checkbox';
```

### Available Exports:

- `Checkbox` (default export) - Main checkbox component with variations
- `CheckboxGroup` - Container for grouping multiple checkboxes
- `BaseCheckbox` - Base checkbox component without label wrapper

## Component Structure

### Main Component: Checkbox

The main Checkbox component supports multiple variations and automatically renders the appropriate variant based on the `variation` prop.

### Component Variations:

1. **Regular Checkbox** (default) - Standard size checkbox with regular label
2. **Large Checkbox** - Larger size checkbox with large label
3. **Base Checkbox** - Minimal checkbox without label wrapper

### Component Hierarchy:

```
Checkbox (Main Component)
├── RegularCheckbox (wrapped with RegularLabel)
├── LargeCheckbox (wrapped with LargeLabel)
└── BaseCheckbox (basic input wrapper)
```

## Props

### CheckboxProps

Extends `BaseCheckboxProps` and `RegularCheckboxLabelProps`

| Prop        | Type                               | Default     | Description                            |
| ----------- | ---------------------------------- | ----------- | -------------------------------------- |
| `variation` | `'large' \| 'regular' \| 'medium'` | `'regular'` | Determines the checkbox size variation |

### BaseCheckboxProps

Extends `InputProps` (from `@fil-react-components/input`, omitting `type`)

| Prop             | Type              | Default | Description                                        |
| ---------------- | ----------------- | ------- | -------------------------------------------------- |
| `checked`        | `boolean`         | -       | Controlled checked state                           |
| `className`      | `string`          | -       | Additional CSS class names                         |
| `id`             | `string`          | -       | HTML id attribute                                  |
| `name`           | `string`          | -       | HTML name attribute                                |
| `isControlled`   | `boolean`         | -       | Whether the checkbox is controlled or uncontrolled |
| `disabled`       | `boolean`         | -       | Disables the checkbox                              |
| `partialChecked` | `boolean`         | -       | Shows intermediate/indeterminate state             |
| `onChange`       | `(event) => void` | `noop`  | Change event handler                               |

### RegularCheckboxLabelProps

From `@fil-react-components/regular-label`

| Prop         | Type                                          | Default  | Description                     |
| ------------ | --------------------------------------------- | -------- | ------------------------------- |
| `label`      | `string`                                      | -        | Label text for the checkbox     |
| `validation` | `'info' \| 'invalid' \| 'warning' \| 'valid'` | -        | Validation state styling        |
| `inputAlign` | `'left' \| 'right'`                           | `'left'` | Alignment of the checkbox input |

### CheckboxGroupProps

| Prop        | Type                                  | Default | Description                          |
| ----------- | ------------------------------------- | ------- | ------------------------------------ |
| `className` | `string`                              | -       | Additional CSS class names           |
| `disabled`  | `boolean`                             | -       | Disables all checkboxes in the group |
| `children`  | `React.ReactElement<CheckboxProps>[]` | -       | Checkbox components to group         |

## Usage Examples

### Basic Usage

```tsx
import Checkbox from '@fil-react-components/checkbox';

// Simple checkbox
<Checkbox label="Checkbox" />

// Checked checkbox
<Checkbox label="Checkbox" checked />

// Disabled checkbox
<Checkbox label="Checkbox" disabled />

// Disabled and checked
<Checkbox label="Checkbox" disabled checked />
```

### Variations

```tsx
// Regular variation (default)
<Checkbox label="Regular Checkbox" variation="regular" />

// Large variation
<Checkbox label="Large Checkbox" variation="large" />
```

### Validation States

```tsx
// Info state
<Checkbox label="Info" variation="large" validation="info" />

// Invalid state
<Checkbox label="Invalid" variation="large" validation="invalid" />

// Warning state
<Checkbox label="Warning" variation="large" validation="warning" />

// Valid state
<Checkbox label="Valid" variation="large" validation="valid" />
```

### Intermediate State

```tsx
// Partial/intermediate state
<Checkbox label="Select All" partialChecked />

// Disabled intermediate state
<Checkbox label="Select All" partialChecked disabled />
```

### Controlled Component

```tsx
const [checked, setChecked] = useState(false);

<Checkbox
  label="Controlled Checkbox"
  checked={checked}
  isControlled
  onChange={(e) => setChecked(e.target.checked)}
/>;
```

### Checkbox Groups

```tsx
import { CheckboxGroup } from '@fil-react-components/checkbox';

<CheckboxGroup>
  <Checkbox label="Option 1" />
  <Checkbox label="Option 2" />
  <Checkbox label="Option 3" />
</CheckboxGroup>

// Disabled group
<CheckboxGroup disabled>
  <Checkbox label="Option 1" />
  <Checkbox label="Option 2" />
</CheckboxGroup>
```

### Select All Pattern

```tsx
const [items, setItems] = useState([false, false, false]);
const allChecked = items.every(Boolean);
const someChecked = items.some(Boolean) && !allChecked;

<Checkbox
  label="Select All"
  checked={allChecked}
  partialChecked={someChecked}
  isControlled
  onChange={(e) => setItems(items.map(() => e.target.checked))}
/>;
{
  items.map((checked, i) => (
    <Checkbox
      key={i}
      label={`Item ${i + 1}`}
      checked={checked}
      isControlled
      onChange={() => {
        const newItems = [...items];
        newItems[i] = !newItems[i];
        setItems(newItems);
      }}
    />
  ));
}
```

### Right-Aligned Input

```tsx
<Checkbox label="Right-aligned" inputAlign="right" />
```

## Features

### Accessibility

- Proper checkbox input semantics with `type="checkbox"`
- Label association for screen readers
- Keyboard navigation support
- Disabled state properly indicated
- ARIA attributes for validation states

### Styling

- Styled-components integration
- Theme provider support
- Custom className support
- Validation state styling
- Responsive design

### State Management

- Supports both controlled and uncontrolled modes
- Partial/intermediate state support
- Group-level disabled state
- Validation state management

### Variations

- Regular and large size options
- Label positioning (left/right alignment)
- Multiple validation states
- Group container functionality

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

- Regular checkbox variations
- Checkbox group variations
- Large checkbox with validation states
- Intermediate state examples
- Right-aligned input examples

## Data Attributes

- `data-frc="checkbox-group"` - Applied to CheckboxGroup container

## CSS Classes

- `checkbox__input` - Applied to the base input element
- `fil-checkbox-group` - Applied to CheckboxGroup container

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
Checkbox/
├── src/
│   ├── Base/
│   │   ├── Base.tsx              # Base checkbox component
│   │   ├── Base.style.ts         # Base checkbox styles
│   │   └── tests/
│   │       └── Base.test.tsx     # Base checkbox tests
│   ├── Regular/
│   │   ├── Regular.tsx           # Regular variation
│   │   └── tests/
│   │       └── Regular.test.tsx  # Regular variation tests
│   ├── Large/
│   │   ├── Large.tsx             # Large variation
│   │   └── tests/
│   │       └── Large.test.tsx    # Large variation tests
│   ├── Checkbox/
│   │   ├── Checkbox.tsx          # Main component
│   │   ├── CheckboxGroup.tsx     # Group component
│   │   ├── CheckboxGroup.style.ts # Group styles
│   │   ├── Checkbox.mock.tsx     # Mock configurations
│   │   ├── Checkbox.stories.tsx  # Storybook stories
│   │   └── tests/
│   │       ├── Checkbox.test.tsx    # Main component tests
│   │       ├── Checkbox.ct.tsx      # Component tests
│   │       └── CheckboxWrapper.tsx  # Test wrapper
│   └── index.ts                  # Main exports
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Form Integration

```tsx
<form>
  <CheckboxGroup>
    <Checkbox label="I agree to terms" name="terms" />
    <Checkbox label="Subscribe to newsletter" name="newsletter" />
  </CheckboxGroup>
</form>
```

### Multi-Select Lists

```tsx
const [selectedItems, setSelectedItems] = useState([]);

<CheckboxGroup>
  {items.map((item) => (
    <Checkbox
      key={item.id}
      label={item.name}
      checked={selectedItems.includes(item.id)}
      isControlled
      onChange={(e) => {
        if (e.target.checked) {
          setSelectedItems([...selectedItems, item.id]);
        } else {
          setSelectedItems(selectedItems.filter((id) => id !== item.id));
        }
      }}
    />
  ))}
</CheckboxGroup>;
```

### Settings Panel

```tsx
<CheckboxGroup>
  <Checkbox label="Email notifications" checked={emailEnabled} />
  <Checkbox label="SMS notifications" checked={smsEnabled} />
  <Checkbox label="Push notifications" checked={pushEnabled} />
</CheckboxGroup>
```

## Best Practices

1. **Always provide a label** - For accessibility and usability
2. **Use CheckboxGroup** - When displaying multiple related checkboxes
3. **Use controlled components** - When you need to manage state externally
4. **Set isControlled flag** - When using controlled mode to ensure proper behavior
5. **Use validation states** - To provide visual feedback on form validation
6. **Use partialChecked** - For "select all" or hierarchical checkbox scenarios
7. **Provide unique IDs** - When using multiple checkboxes in forms
8. **Consider keyboard navigation** - Ensure logical tab order in forms

## Migration Notes

### General Migration:

- Ensure you have the required peer dependencies installed
- The component now requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling

## Related Components

- `@fil-react-components/input` - Base input component
- `@fil-react-components/regular-label` - Regular label component
- `@fil-react-components/large-label` - Large label component
- `@fil-react-components/with-label-wrapper` - HOC for label wrapping
- `@fil-react-components/theme-provider` - Theme provider for styling</content>
  <parameter name="filePath">c:\Users\A744601\Documents\codebase\TAPP101992-fil-react-components\metadata\Checkbox-2.12.13.md
