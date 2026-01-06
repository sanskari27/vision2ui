# SelectInput-2.17.24.md

## Overview

The SelectInput component is a flexible, accessible dropdown select component that provides comprehensive selection functionality with keyboard navigation, search, icons, sections, and validation states. It supports both controlled and uncontrolled usage patterns and follows the GDS (Global Design System) standards for form controls.

## Package Information

- **Package Name**: `@fil-react-components/select-input`
- **Version**: 2.17.24
- **Description**: SelectInput Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/select-input
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/button`: ^3.4.2
- `@fil-react-components/streamline-icon`: ^2.15.6
- `@fil-react-components/svg-icons`: ^1.9.0
- `@fil-react-components/with-styles`: ^2.7.8
- `@fil-react-hooks/device-resize`: ^1.9.6
- `@fil-react-hooks/unique-id`: ^1.4.3
- `@fil-react-mixins/styled`: ^2.7.1
- `classnames`: ^2.5.1
- `lodash`: 4.17.21
- `react-cool-onclickoutside`: 1.5.9

## Exports

```typescript
import SelectInput from '@fil-react-components/select-input';
```

### Available Exports:

- `SelectInput` (default export) - Main select input component with dropdown functionality

## Component Structure

### Main Component: SelectInput

The SelectInput component provides a button that triggers a dropdown list of selectable options with comprehensive interaction handling.

### Component Variations:

1. **Standard SelectInput** - Default size with full functionality
2. **Small SelectInput** - Compact size variant
3. **Expanded SelectInput** - Full-width variant with text overflow handling
4. **Menu Type** - Alternative button styling

### Component Hierarchy:

```
SelectInput (Container)
├── Button (trigger)
│   ├── Selected Label/Text
│   ├── Sub-text (optional)
│   ├── Invalid Icon (optional)
│   └── Arrow Icon
└── Options List (dropdown)
    ├── Option Items
    │   ├── Icon (optional)
    │   ├── Label
    │   ├── Sub-text (optional)
    │   └── Selected Indicator
    └── Sections (optional)
        └── Nested Options
```

## Props

### SelectInputProps

| Prop              | Type                                   | Default              | Description                                        |
| ----------------- | -------------------------------------- | -------------------- | -------------------------------------------------- |
| `className`       | `string`                               | -                    | Additional CSS class names                         |
| `placeholder`     | `string`                               | `'Select an option'` | Placeholder text when no option is selected        |
| `disabled`        | `boolean`                              | -                    | Disables the select input                          |
| `id`              | `string`                               | -                    | HTML id attribute (auto-generated if not provided) |
| `name`            | `string`                               | `'select-input'`     | HTML name attribute                                |
| `onChange`        | `(event) => void`                      | `noop`               | Change event handler                               |
| `options`         | `Option[]`                             | `[]`                 | Array of selectable options                        |
| `value`           | `string \| number`                     | -                    | Controlled selected value                          |
| `status`          | `'invalid'`                            | -                    | Validation status                                  |
| `maxHeight`       | `number`                               | -                    | Maximum height of dropdown                         |
| `title`           | `Function`                             | -                    | Custom title renderer function                     |
| `isControlled`    | `boolean`                              | -                    | Whether component is controlled                    |
| `expanded`        | `boolean`                              | -                    | Whether to expand to full width                    |
| `button`          | `React.ComponentType`                  | `BaseButton`         | Custom button component                            |
| `type`            | `'menu' \| 'input'`                    | `'input'`            | Component type/styling                             |
| `titleText`       | `string`                               | -                    | Custom title text                                  |
| `arrowSize`       | `number`                               | `12`                 | Size of the dropdown arrow                         |
| `size`            | `'standard' \| 'small'`                | `'standard'`         | Size variant                                       |
| `background`      | `'grey.025'`                           | -                    | Background color                                   |
| `open`            | `boolean`                              | -                    | Whether dropdown is initially open                 |
| `listProps`       | `object`                               | -                    | Additional props for the options list              |
| `buttonProps`     | `BaseButtonProps`                      | -                    | Additional props for the button                    |
| `aria-labelledby` | `string`                               | -                    | ARIA labelledby attribute                          |
| `aria-label`      | `string`                               | `'Select an Option'` | ARIA label attribute                               |
| `textOverflow`    | `'wrap' \| 'ellipsis'`                 | `'wrap'`             | Text overflow handling                             |
| `wrapperProps`    | `React.HTMLAttributes<HTMLDivElement>` | -                    | Additional props for wrapper                       |

### Option Interface

| Prop        | Type                  | Description                     |
| ----------- | --------------------- | ------------------------------- |
| `label`     | `string \| number`    | Display text for the option     |
| `value`     | `string \| number`    | Value of the option             |
| `icon`      | `React.ComponentType` | Optional icon component         |
| `className` | `string`              | Additional CSS class            |
| `key`       | `string \| number`    | React key                       |
| `id`        | `string \| number`    | HTML id                         |
| `subText`   | `React.ReactNode`     | Additional text below the label |
| `options`   | `Option[]`            | Nested options for sections     |
| `disabled`  | `boolean`             | Whether the option is disabled  |
| `type`      | `'section'`           | For section headers             |

## Usage Examples

### Basic SelectInput

```tsx
import SelectInput from '@fil-react-components/select-input';

<SelectInput
  name="basic-select"
  options={[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ]}
/>;
```

### Controlled Component

```tsx
const [selectedValue, setSelectedValue] = useState('');

<SelectInput
  name="controlled-select"
  value={selectedValue}
  onChange={(e) => setSelectedValue(e.target.value)}
  options={[
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Orange', value: 'orange' },
  ]}
/>;
```

### With Icons

```tsx
import { Apple, Banana, Orange } from '@fil-react-components/svg-icons';

<SelectInput
  name="fruit-select"
  options={[
    { label: 'Apple', value: 'apple', icon: Apple },
    { label: 'Banana', value: 'banana', icon: Banana },
    { label: 'Orange', value: 'orange', icon: Orange },
  ]}
/>;
```

### With Sub-text

```tsx
<SelectInput
  name="account-select"
  value="1"
  options={[
    {
      label: 'Investment Account',
      value: '1',
      subText: 'AG123456789 • £20,000',
    },
    { label: 'Savings Account', value: '2', subText: 'AG123456790 • £15,000' },
    { label: 'Checking Account', value: '3', subText: 'AG123456791 • £5,000' },
  ]}
/>
```

### With Sections

```tsx
<SelectInput
  name="sectioned-select"
  options={[
    {
      type: 'section',
      label: 'Fruits',
      options: [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Orange', value: 'orange' },
      ],
    },
    {
      type: 'section',
      label: 'Vegetables',
      options: [
        { label: 'Carrot', value: 'carrot' },
        { label: 'Broccoli', value: 'broccoli' },
        { label: 'Spinach', value: 'spinach' },
      ],
    },
  ]}
/>
```

### Small Size

```tsx
<SelectInput
  name="small-select"
  size="small"
  options={[
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' },
  ]}
/>
```

### Invalid State

```tsx
<SelectInput
  name="invalid-select"
  status="invalid"
  options={[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ]}
/>
```

### Expanded with Text Overflow

```tsx
<SelectInput
  name="expanded-select"
  expanded
  textOverflow="ellipsis"
  options={[
    {
      label: 'This is a very long option text that should overflow',
      value: '1',
    },
    {
      label: 'Another long option text for testing overflow behavior',
      value: '2',
    },
  ]}
/>
```

### Open by Default

```tsx
<SelectInput
  name="open-select"
  open
  options={[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ]}
/>
```

### With Disabled Options

```tsx
<SelectInput
  name="disabled-options-select"
  options={[
    { label: 'Enabled Option', value: 'enabled' },
    { label: 'Disabled Option', value: 'disabled', disabled: true },
    { label: 'Another Enabled', value: 'another' },
  ]}
/>
```

### Custom Button

```tsx
import { PrimaryButton } from '@fil-react-components/button';

<SelectInput
  name="custom-button-select"
  button={PrimaryButton}
  options={[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ]}
/>;
```

### With Grey Background

```tsx
<SelectInput
  name="grey-bg-select"
  background="grey.025"
  options={[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ]}
/>
```

## Features

### Accessibility

- ARIA combobox pattern implementation
- Keyboard navigation (arrow keys, enter, escape)
- Screen reader support with proper labels
- Focus management and tab order
- Disabled option handling
- Type-ahead search functionality

### Styling

- Styled-components integration with theme provider
- Size variants (standard/small)
- Background color options
- Validation state styling
- Responsive positioning
- Custom className support

### State Management

- Controlled and uncontrolled modes
- Selected value management
- Dropdown open/close state
- Keyboard navigation state
- Search text state

### Interaction

- Click to open/close dropdown
- Keyboard navigation
- Type-ahead search
- Click outside to close
- Scroll management
- Position calculation

## Testing

The component includes:

- Unit tests using Jest with snapshot testing
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

- Basic select input configurations
- Controlled vs uncontrolled usage
- Icon options
- Sub-text options
- Sectioned options
- Size variants
- Invalid state
- Expanded layouts
- Disabled options
- Custom backgrounds
- Type-ahead search

## Data Attributes

- `data-frc="select-input"` - Applied to the select input container

## CSS Classes

- `fil-select-input` - Base select input class
- `fil-select-box` - Select box styling
- `fil-select__btn` - Button trigger styling
- `fil-select__btn-text` - Button text styling
- `fil-select__btn__label` - Main label text
- `fil-select__btn__sub-text` - Sub-text styling
- `fil-select__invalid-icon` - Invalid state icon
- `fil-select__arrow` - Dropdown arrow
- `fil-select__options` - Options dropdown list
- `fil-select__option` - Individual option
- `fil-select__option__label` - Option label
- `fil-select__option__sub-text` - Option sub-text
- `fil-select__option__selected` - Selected option indicator

## Build & Development

### Scripts

```bash
# Run tests
npm test

# Build TypeScript
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
SelectInput/
├── src/
│   ├── SelectInput.tsx          # Main select input component
│   ├── SelectInput.style.ts     # Select input styles with theme integration
│   ├── SelectInput.mock.tsx     # Mock configurations for testing
│   ├── SelectInput.stories.tsx  # Storybook stories
│   ├── index.ts                 # Main exports
│   └── tests/
│       ├── SelectInput.test.tsx    # Unit tests
│       ├── SelectInput.ct.tsx      # Component tests
│       ├── SelectInputWrapper.tsx  # Test wrapper
│       └── __snapshots__/          # Jest snapshots
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Country Selection

```tsx
<SelectInput
  name="country"
  placeholder="Select your country"
  options={[
    { label: 'United States', value: 'US' },
    { label: 'United Kingdom', value: 'UK' },
    { label: 'Canada', value: 'CA' },
    { label: 'Australia', value: 'AU' },
    { label: 'Germany', value: 'DE' },
  ]}
/>
```

### Account Selection with Details

```tsx
<SelectInput
  name="account"
  placeholder="Choose an account"
  options={[
    {
      label: 'Checking Account',
      value: 'checking',
      subText: '****1234 • Available: $2,500',
    },
    {
      label: 'Savings Account',
      value: 'savings',
      subText: '****5678 • Available: $10,000',
    },
    {
      label: 'Investment Account',
      value: 'investment',
      subText: '****9012 • Value: $50,000',
    },
  ]}
/>
```

### Form with Validation

```tsx
const [selectedValue, setSelectedValue] = useState('');
const [error, setError] = useState('');

const handleChange = (e) => {
  setSelectedValue(e.target.value);
  if (error) setError('');
};

const handleSubmit = () => {
  if (!selectedValue) {
    setError('Please select an option');
  }
};

<SelectInput
  name="category"
  placeholder="Select a category"
  value={selectedValue}
  onChange={handleChange}
  status={error ? 'invalid' : undefined}
  options={[
    { label: 'Technology', value: 'tech' },
    { label: 'Healthcare', value: 'health' },
    { label: 'Finance', value: 'finance' },
  ]}
/>;
```

### Product Selection with Categories

```tsx
<SelectInput
  name="product"
  placeholder="Choose a product"
  options={[
    {
      type: 'section',
      label: 'Electronics',
      options: [
        {
          label: 'Laptop',
          value: 'laptop',
          subText: 'High-performance computing',
        },
        { label: 'Smartphone', value: 'phone', subText: 'Latest technology' },
        { label: 'Tablet', value: 'tablet', subText: 'Portable computing' },
      ],
    },
    {
      type: 'section',
      label: 'Books',
      options: [
        { label: 'Fiction', value: 'fiction', subText: ' Novels and stories' },
        {
          label: 'Non-fiction',
          value: 'non-fiction',
          subText: 'Educational content',
        },
        {
          label: 'Textbooks',
          value: 'textbooks',
          subText: 'Academic materials',
        },
      ],
    },
  ]}
/>
```

### Settings Dropdown

```tsx
<SelectInput
  name="language"
  placeholder="Select language"
  size="small"
  options={[
    { label: 'English', value: 'en' },
    { label: 'Spanish', value: 'es' },
    { label: 'French', value: 'fr' },
    { label: 'German', value: 'de' },
  ]}
/>
```

## Best Practices

1. **Provide meaningful options** - Use clear, descriptive labels for all options
2. **Consider placeholder text** - Use descriptive placeholders that guide user selection
3. **Use appropriate sizing** - Small for compact spaces, standard for most cases
4. **Group related options** - Use sections to organize large option lists
5. **Consider icons** - Use icons to make options more recognizable and scannable
6. **Handle validation** - Show clear error states for required selections
7. **Test keyboard navigation** - Ensure proper keyboard accessibility
8. **Consider mobile usage** - Test on mobile devices for touch interaction
9. **Use controlled components** - When you need external state management
10. **Provide sub-text when helpful** - Additional context improves user experience

## Migration Notes

### From older versions:

- Ensure you have the required peer dependencies installed
- The component now requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling
- Keyboard navigation has been improved
- Disabled options now prevent focus and selection
- Type-ahead search functionality added
- Position calculation improved for better responsive behavior

## Related Components

- `@fil-react-components/select-box` - Labeled select component (uses SelectInput internally)
- `@fil-react-components/button` - Button component used for trigger
- `@fil-react-components/streamline-icon` - Icon component for indicators
- `@fil-react-components/theme-provider` - Required for styling and theming</content>
  <parameter name="filePath">c:\Users\A744601\Documents\codebase\TAPP101992-fil-react-components\metadata\SelectInput-2.17.24.md
