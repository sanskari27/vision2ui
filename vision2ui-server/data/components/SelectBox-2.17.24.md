# SelectBox-2.17.24.md

## Overview

The SelectBox component is a form input component that provides a labeled select dropdown interface with comprehensive validation, accessibility, and styling features. It wraps the SelectInput component with a label, assistive text, and error text, following the GDS (Global Design System) standards for form controls.

## Package Information

- **Package Name**: `@fil-react-components/select-box`
- **Version**: 2.17.24
- **Description**: SelectBox Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/select-box
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/label`: ^2.9.11
- `@fil-react-components/select-input`: ^2.17.24
- `@fil-react-hooks/unique-id`: ^1.4.3
- `@fil-react-mixins/styled`: ^2.7.1
- `classnames`: ^2.5.1

## Exports

```typescript
import SelectBox from '@fil-react-components/select-box';
```

### Available Exports:

- `SelectBox` (default export) - Main select box component with label and validation

## Component Structure

### Main Component: SelectBox

The SelectBox component combines a Label, SelectInput, and optional assistive/error text into a complete form field.

### Component Variations:

1. **Standard SelectBox** - Default size with label
2. **Small SelectBox** - Compact size variant
3. **Disabled SelectBox** - Non-interactive state
4. **Invalid SelectBox** - Error state with validation styling

### Component Hierarchy:

```
SelectBox (Container)
├── Label (optional)
├── Assistive Text (optional)
├── Error Text (optional)
└── SelectInput (dropdown functionality)
    ├── Button (trigger)
    ├── Options List (dropdown)
    └── Options (individual items)
```

## Props

### SelectBoxProps (extends SelectInputProps)

| Prop            | Type     | Default        | Description                                        |
| --------------- | -------- | -------------- | -------------------------------------------------- |
| `label`         | `string` | -              | Label text displayed above the select input        |
| `assistiveText` | `string` | -              | Helper text displayed below the label              |
| `errorText`     | `string` | -              | Error message displayed in red below the input     |
| `className`     | `string` | -              | Additional CSS class names                         |
| `id`            | `string` | -              | HTML id attribute (auto-generated if not provided) |
| `name`          | `string` | `'select-box'` | HTML name attribute                                |

### Inherited SelectInputProps

| Prop           | Type                    | Default              | Description                                 |
| -------------- | ----------------------- | -------------------- | ------------------------------------------- |
| `placeholder`  | `string`                | `'Select an option'` | Placeholder text when no option is selected |
| `disabled`     | `boolean`               | -                    | Disables the select input                   |
| `options`      | `Option[]`              | `[]`                 | Array of selectable options                 |
| `value`        | `string \| number`      | -                    | Controlled selected value                   |
| `onChange`     | `(event) => void`       | -                    | Change event handler                        |
| `status`       | `'invalid'`             | -                    | Validation status                           |
| `size`         | `'standard' \| 'small'` | `'standard'`         | Size variant                                |
| `background`   | `'grey.025'`            | -                    | Background color                            |
| `open`         | `boolean`               | -                    | Whether dropdown is initially open          |
| `maxHeight`    | `number`                | -                    | Maximum height of dropdown                  |
| `expanded`     | `boolean`               | -                    | Whether to expand to full width             |
| `textOverflow` | `'wrap' \| 'ellipsis'`  | `'wrap'`             | Text overflow handling                      |

### Option Interface

| Prop       | Type                  | Description                     |
| ---------- | --------------------- | ------------------------------- |
| `label`    | `string \| number`    | Display text for the option     |
| `value`    | `string \| number`    | Value of the option             |
| `icon`     | `React.ComponentType` | Optional icon component         |
| `subText`  | `React.ReactNode`     | Additional text below the label |
| `disabled` | `boolean`             | Whether the option is disabled  |
| `type`     | `'section'`           | For section headers             |
| `options`  | `Option[]`            | Nested options for sections     |

## Usage Examples

### Basic SelectBox

```tsx
import SelectBox from '@fil-react-components/select-box';

<SelectBox
  label="Choose an option"
  name="basic-select"
  options={[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ]}
/>;
```

### With Default Value

```tsx
<SelectBox
  label="Select a country"
  name="country"
  value="us"
  options={[
    { label: 'United States', value: 'us' },
    { label: 'United Kingdom', value: 'uk' },
    { label: 'Canada', value: 'ca' },
  ]}
/>
```

### With Assistive Text

```tsx
<SelectBox
  label="Account Type"
  assistiveText="Choose the type of account you want to open"
  name="account-type"
  options={[
    { label: 'Checking', value: 'checking' },
    { label: 'Savings', value: 'savings' },
    { label: 'Investment', value: 'investment' },
  ]}
/>
```

### With Error State

```tsx
<SelectBox
  label="Payment Method"
  errorText="Please select a payment method"
  name="payment-method"
  status="invalid"
  options={[
    { label: 'Credit Card', value: 'credit' },
    { label: 'PayPal', value: 'paypal' },
    { label: 'Bank Transfer', value: 'bank' },
  ]}
/>
```

### Small Size

```tsx
<SelectBox
  label="Quantity"
  size="small"
  name="quantity"
  options={[
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
  ]}
/>
```

### With Icons

```tsx
import { CreditCard, Paypal, Bank } from '@fil-react-components/svg-icons';

<SelectBox
  label="Payment Method"
  name="payment-with-icons"
  options={[
    { label: 'Credit Card', value: 'credit', icon: CreditCard },
    { label: 'PayPal', value: 'paypal', icon: Paypal },
    { label: 'Bank Transfer', value: 'bank', icon: Bank },
  ]}
/>;
```

### With Sub-text

```tsx
<SelectBox
  label="Select Account"
  name="account-selection"
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
<SelectBox
  label="Select Account"
  name="account-sections"
  options={[
    {
      type: 'section',
      label: 'Investment Accounts',
      options: [
        { label: 'Portfolio A', value: '1', subText: 'High risk • £50,000' },
        { label: 'Portfolio B', value: '2', subText: 'Medium risk • £30,000' },
      ],
    },
    {
      type: 'section',
      label: 'Savings Accounts',
      options: [
        { label: 'High Yield', value: '3', subText: '2.5% APY • £10,000' },
        { label: 'Regular', value: '4', subText: '1.2% APY • £5,000' },
      ],
    },
  ]}
/>
```

### Controlled Component

```tsx
const [selectedValue, setSelectedValue] = useState('');

<SelectBox
  label="Choose an option"
  name="controlled-select"
  value={selectedValue}
  onChange={(e) => setSelectedValue(e.target.value)}
  options={[
    { label: 'Option A', value: 'a' },
    { label: 'Option B', value: 'b' },
    { label: 'Option C', value: 'c' },
  ]}
/>;
```

### Disabled State

```tsx
<SelectBox
  label="Disabled Select"
  disabled
  name="disabled-select"
  options={[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ]}
/>
```

### With Grey Background

```tsx
<SelectBox
  label="Grey Background Select"
  background="grey.025"
  name="grey-bg-select"
  options={[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ]}
/>
```

## Features

### Accessibility

- Proper label association with `aria-labelledby`
- ARIA attributes for screen readers
- Keyboard navigation support
- Focus management
- Error state announcements
- Semantic HTML structure

### Styling

- Styled-components integration with theme provider
- Size variants (standard/small)
- Background color options
- Validation state styling
- Custom className support
- Responsive design

### State Management

- Controlled and uncontrolled modes
- Validation state support
- Disabled state handling
- Selected value management
- Change event handling

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

- Basic select box configurations
- Label and assistive text variations
- Small size variant
- Disabled state
- Sub-text options
- Sectioned options
- Default selected values
- Invalid state
- Icon options
- Open by default
- Grey background
- Disabled items

## Data Attributes

- `data-frc="select-box"` - Applied to the select box container

## CSS Classes

- `fil-select` - Base select container class
- `fil-select__label` - Label styling
- `fil-select__assistive-txt` - Assistive text styling
- `fil-select__err-txt` - Error text styling

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
SelectBox/
├── src/
│   ├── SelectBox.tsx          # Main select box component
│   ├── SelectBox.style.ts     # Select box styles with theme integration
│   ├── SelectBox.mock.tsx     # Mock configurations for testing
│   ├── SelectBox.stories.tsx  # Storybook stories
│   ├── index.ts               # Main exports
│   └── tests/
│       ├── SelectBox.test.tsx    # Unit tests
│       ├── SelectBox.ct.tsx      # Component tests
│       └── __snapshots__/        # Jest snapshots
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Country Selection

```tsx
<SelectBox
  label="Country"
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

### Account Type Selection

```tsx
<SelectBox
  label="Account Type"
  assistiveText="Choose the account type that best fits your needs"
  name="account-type"
  options={[
    {
      label: 'Personal Checking',
      value: 'personal-checking',
      subText: 'For everyday banking',
    },
    {
      label: 'Business Checking',
      value: 'business-checking',
      subText: 'For business transactions',
    },
    {
      label: 'Savings Account',
      value: 'savings',
      subText: 'Earn interest on your balance',
    },
    {
      label: 'Investment Account',
      value: 'investment',
      subText: 'Grow your wealth',
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
  setError(''); // Clear error on change
};

const handleSubmit = () => {
  if (!selectedValue) {
    setError('Please select an option');
  }
};

<SelectBox
  label="Preferred Contact Method"
  name="contact-method"
  value={selectedValue}
  onChange={handleChange}
  errorText={error}
  status={error ? 'invalid' : undefined}
  options={[
    { label: 'Email', value: 'email' },
    { label: 'Phone', value: 'phone' },
    { label: 'Mail', value: 'mail' },
  ]}
/>;
```

### Product Selection

```tsx
<SelectBox
  label="Product"
  name="product"
  options={[
    {
      type: 'section',
      label: 'Banking Products',
      options: [
        {
          label: 'Checking Account',
          value: 'checking',
          subText: 'Free checking with online banking',
        },
        {
          label: 'Savings Account',
          value: 'savings',
          subText: 'High-yield savings account',
        },
        { label: 'CD Account', value: 'cd', subText: 'Certificate of deposit' },
      ],
    },
    {
      type: 'section',
      label: 'Investment Products',
      options: [
        {
          label: 'Individual Brokerage',
          value: 'brokerage',
          subText: 'Trade stocks and ETFs',
        },
        {
          label: 'Retirement Account',
          value: 'retirement',
          subText: 'IRA and 401(k) options',
        },
        {
          label: 'Managed Portfolio',
          value: 'managed',
          subText: 'Professional portfolio management',
        },
      ],
    },
  ]}
/>
```

## Best Practices

1. **Always provide a label** - Essential for accessibility and usability
2. **Use meaningful option values** - Values should be unique and meaningful
3. **Consider placeholder text** - Use descriptive placeholder text
4. **Provide assistive text** - Help users understand what to select
5. **Handle validation** - Show clear error messages for invalid selections
6. **Use appropriate sizing** - Small size for compact spaces, standard for most cases
7. **Group related options** - Use sections for large option lists
8. **Consider icons** - Use icons to make options more recognizable
9. **Test keyboard navigation** - Ensure proper tab order and keyboard accessibility
10. **Provide sub-text when helpful** - Additional context can improve user experience

## Migration Notes

### From older versions:

- Ensure you have the required peer dependencies installed
- The component now requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling
- SelectInput component is now a peer dependency
- Label component integration improved

## Related Components

- `@fil-react-components/select-input` - Core select functionality (used internally)
- `@fil-react-components/label` - Label component for form fields
- `@fil-react-components/theme-provider` - Required for styling and theming</content>
  <parameter name="filePath">c:\Users\A744601\Documents\codebase\TAPP101992-fil-react-components\metadata\SelectBox-2.17.24.md
