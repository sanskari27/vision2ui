# FormattedTextInput Component Documentation

## Overview

The FormattedTextInput component provides masked input functionality with support for various input formats including phone numbers, currency, percentages, and custom patterns. It uses the react-text-mask library to provide real-time input formatting and validation, following the GDS (Global Design System) standards. The component supports both array-based masks and object-based number masks with prefixes, suffixes, and decimal formatting.

## Package Information

- **Package Name**: `@fil-react-components/formatted-text-input`
- **Version**: 3.3.6
- **Description**: FormattedTextInput Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/formatted-text-input
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `react-dom`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/box`: ^3.2.8
- `@fil-react-components/input`: ^2.12.11
- `@fil-react-mixins/styled`: ^2.7.1
- `@types/react-text-mask`: ^5.4.11
- `classnames`: ^2.5.1
- `memoize-one`: 6.0.0
- `react-text-mask`: 5.5.0
- `text-mask-addons`: 3.8.0

## Exports

```typescript
import FormattedTextInput, {
  FormattedTextInputProps,
} from '@fil-react-components/formatted-text-input';
```

### Available Exports:

- `FormattedTextInput` (default export) - Main formatted text input component
- `FormattedTextInputProps` - TypeScript interface for component props

## Component Structure

### Main Component: FormattedTextInput

A masked input component that provides real-time input formatting and validation using react-text-mask.

### Component Variations:

1. **Array Mask** - Character-by-character mask using regex patterns
2. **Number Mask** - Numeric formatting with prefixes, suffixes, and decimal support
3. **Function Mask** - Dynamic mask based on input value
4. **Custom Mask** - User-defined mask patterns

### Component Features:

- **Input Masking**: Real-time character filtering and formatting
- **Number Formatting**: Currency, percentage, and decimal formatting
- **Prefix/Suffix Support**: Visual prefixes and suffixes with proper alignment
- **Text Alignment**: Automatic alignment based on prefix/suffix presence
- **Size Variants**: Standard and small input sizes
- **Mask Placeholders**: Visible mask characters and custom placeholders
- **Accessibility**: Full keyboard navigation and screen reader support
- **Theme Integration**: Styled-components with theme provider

### Component Hierarchy:

```
FormattedTextInput
├── Input Wrapper (with data-frc attribute)
│   ├── ReactMaskedInput (masked input element)
│   └── Affix Box (prefix/suffix display)
```

## Props

### FormattedTextInputProps

| Prop                | Type                                                              | Default      | Description                                      |
| ------------------- | ----------------------------------------------------------------- | ------------ | ------------------------------------------------ |
| `mask`              | `Mask \| ((value: string) => Mask) \| Partial<NumberMaskOptions>` | -            | Input mask configuration                         |
| `wrapperClass`      | `string`                                                          | -            | Additional CSS class for wrapper                 |
| `isControlled`      | `boolean`                                                         | -            | Whether the input is controlled                  |
| `className`         | `string`                                                          | -            | Additional CSS class names                       |
| `size`              | `'standard' \| 'small'`                                           | `'standard'` | Input size variant                               |
| `textAlign`         | `'left' \| 'right'`                                               | -            | Text alignment (auto-set based on prefix/suffix) |
| `guide`             | `boolean`                                                         | `false`      | Show mask guide characters                       |
| `showMask`          | `boolean`                                                         | `false`      | Always show mask characters                      |
| `placeholderChar`   | `string`                                                          | `'_'`        | Character to use for mask placeholders           |
| `keepCharPositions` | `boolean`                                                         | `false`      | Keep character positions on change               |
| `pipe`              | `Function`                                                        | -            | Pipe function for advanced formatting            |
| `placeholder`       | `string`                                                          | -            | Input placeholder text                           |
| `value`             | `string \| number`                                                | -            | Controlled input value                           |
| `onChange`          | `Function`                                                        | -            | Change event handler                             |
| `onBlur`            | `Function`                                                        | -            | Blur event handler                               |
| `onFocus`           | `Function`                                                        | -            | Focus event handler                              |
| `disabled`          | `boolean`                                                         | -            | Whether input is disabled                        |
| `required`          | `boolean`                                                         | -            | Whether input is required                        |
| `id`                | `string`                                                          | -            | HTML id attribute                                |
| `name`              | `string`                                                          | -            | HTML name attribute                              |
| `type`              | `string`                                                          | `'text'`     | Input type attribute                             |

### NumberMaskOptions

| Prop                        | Type             | Default | Description                        |
| --------------------------- | ---------------- | ------- | ---------------------------------- |
| `prefix`                    | `string`         | `''`    | Currency/prefix symbol (e.g., '$') |
| `suffix`                    | `string`         | `''`    | Suffix symbol (e.g., '%')          |
| `includeThousandsSeparator` | `boolean`        | `true`  | Include thousands separators       |
| `thousandsSeparatorSymbol`  | `string`         | `','`   | Thousands separator character      |
| `allowDecimal`              | `boolean`        | `false` | Allow decimal values               |
| `decimalSymbol`             | `string`         | `'.'`   | Decimal separator character        |
| `decimalLimit`              | `number`         | `2`     | Maximum decimal places             |
| `requireDecimal`            | `boolean`        | `false` | Require decimal places             |
| `allowNegative`             | `boolean`        | `false` | Allow negative numbers             |
| `allowLeadingZeroes`        | `boolean`        | `false` | Allow leading zeros                |
| `integerLimit`              | `number \| null` | `null`  | Maximum integer digits             |

## Usage Examples

### Phone Number Mask

```tsx
import FormattedTextInput from '@fil-react-components/formatted-text-input';

<FormattedTextInput
  mask={[
    '(',
    /[1-9]/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ]}
  placeholder="Enter a phone number"
  guide={false}
/>;
```

### Currency Input

```tsx
<FormattedTextInput
  mask={{
    prefix: '$',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2,
    requireDecimal: false,
    allowNegative: false,
    allowLeadingZeroes: false,
    integerLimit: 7,
  }}
  placeholder="Enter amount"
/>
```

### Percentage Input

```tsx
<FormattedTextInput
  mask={{
    prefix: '',
    suffix: '%',
    includeThousandsSeparator: false,
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2,
    allowNegative: false,
  }}
  placeholder="Enter percentage"
  pipe={(value) => {
    if (parseFloat(value) > 100) {
      return false; // Reject values over 100%
    }
    return value;
  }}
/>
```

### Credit Card Number

```tsx
<FormattedTextInput
  mask={[
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ]}
  placeholder="Enter card number"
  guide={true}
/>
```

### Date Input

```tsx
<FormattedTextInput
  mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
  placeholder="MM/DD/YYYY"
  guide={true}
/>
```

### Social Security Number

```tsx
<FormattedTextInput
  mask={[/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
  placeholder="Enter SSN"
  guide={false}
/>
```

### Custom Function Mask

```tsx
const dynamicMask = (value: string) => {
  const length = value.length;
  if (length <= 4) {
    return [/\d/, /\d/, /\d/, /\d/];
  }
  if (length <= 8) {
    return [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  }
  return [
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ];
};

<FormattedTextInput mask={dynamicMask} placeholder="Enter account number" />;
```

### With Visible Mask

```tsx
<FormattedTextInput
  mask={[
    '(',
    /[1-9]/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ]}
  placeholder="Enter a phone number"
  guide={true}
  showMask={true}
/>
```

### Custom Placeholder Character

```tsx
<FormattedTextInput
  mask={[
    '(',
    /[1-9]/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ]}
  placeholder="Enter a phone number"
  guide={true}
  showMask={true}
  placeholderChar="•"
/>
```

### Small Size Input

```tsx
<FormattedTextInput
  mask={{
    prefix: '$',
    includeThousandsSeparator: true,
    allowDecimal: true,
    decimalLimit: 2,
  }}
  placeholder="Enter amount"
  size="small"
/>
```

### Controlled Input

```tsx
const [value, setValue] = useState('');

<FormattedTextInput
  mask={[
    '(',
    /[1-9]/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ]}
  value={value}
  onChange={(e) => setValue(e.target.value)}
  isControlled={true}
/>;
```

### With Event Handlers

```tsx
<FormattedTextInput
  mask={{
    prefix: '$',
    includeThousandsSeparator: true,
    allowDecimal: true,
    decimalLimit: 2,
  }}
  placeholder="Enter amount"
  onChange={(e) => {
    console.log('Value changed:', e.target.value);
  }}
  onFocus={(e) => {
    console.log('Input focused');
  }}
  onBlur={(e) => {
    console.log('Input blurred');
  }}
/>
```

## Features

### Input Masking

- **Character Filtering**: Real-time character validation against mask patterns
- **Guide Characters**: Visual mask guide for user input
- **Placeholder Characters**: Customizable mask placeholder symbols
- **Dynamic Masks**: Function-based masks that change based on input

### Number Formatting

- **Currency Support**: Prefix symbols with proper thousands separators
- **Percentage Formatting**: Suffix symbols with decimal support
- **Decimal Control**: Configurable decimal places and symbols
- **Negative Numbers**: Optional negative number support

### Visual Affixes

- **Prefix Display**: Visual prefixes (e.g., currency symbols) with proper spacing
- **Suffix Display**: Visual suffixes (e.g., percentage symbols)
- **Auto Alignment**: Automatic text alignment based on affix presence
- **Responsive Layout**: Affix positioning that adapts to input size

### Advanced Features

- **Pipe Functions**: Custom formatting functions for advanced validation
- **Keep Positions**: Maintain character positions during editing
- **Leading Zeros**: Optional support for leading zero input
- **Integer Limits**: Maximum digit restrictions for numbers

### Accessibility

- **Keyboard Navigation**: Full keyboard support for masked input
- **Screen Reader**: Proper ARIA attributes and announcements
- **Focus Management**: Clear focus indicators and logical tab order
- **Error Prevention**: Input validation prevents invalid character entry

### Styling

- **Theme Integration**: Consistent with GDS design system
- **Size Variants**: Standard and small input sizes
- **Custom Styling**: CSS class support for additional customization
- **Affix Styling**: Proper styling for prefix/suffix elements

## Testing

The component includes:

- Unit tests using Jest
- Component tests using Playwright
- Accessibility testing with axe-devtools
- Snapshot testing for UI consistency
- Mask functionality testing

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

- Phone number masking
- Currency input formatting
- Percentage input with validation
- Credit card number masking
- Date input formatting
- Visible mask placeholders
- Custom placeholder characters
- Small size variants
- Prefix and suffix alignment examples
- Event handler integration

## Data Attributes

- `data-frc="formatted-text-input"` - Applied to the main input wrapper

## CSS Classes

- `fil-formatted-text-input` - Main input wrapper container
- `fil-formatted-text-input__affix` - Prefix/suffix display element
- `fil-input` - Base input element (inherited from input component)
- `input__small` - Small size variant
- `input__standard` - Standard size variant

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
FormattedTextInput/
├── src/
│   ├── FormattedTextInput.mock.tsx     # Mock configurations for testing
│   ├── FormattedTextInput.stories.tsx  # Storybook stories
│   ├── FormattedTextInput.style.ts     # Styled-components styles
│   ├── FormattedTextInput.tsx          # Main formatted text input component
│   ├── index.ts                        # Main exports
│   ├── types/
│   │   └── text-mask-addons.ts         # TypeScript type definitions
│   └── tests/
│       ├── FormattedTextInput.ct.tsx   # Component tests
│       ├── FormattedTextInput.test.tsx # Unit tests
│       ├── a11y-results/               # Accessibility test results
│       ├── coverage/                   # Test coverage reports
│       └── __snapshots__/              # Snapshot files
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Phone Number Input

```tsx
const PhoneInput = () => (
  <FormattedTextInput
    mask={[
      '(',
      /[1-9]/,
      /\d/,
      /\d/,
      ')',
      ' ',
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ]}
    placeholder="(555) 555-5555"
    guide={false}
    name="phone"
    id="phone-input"
  />
);
```

### Currency Amount Input

```tsx
const CurrencyInput = ({ value, onChange }) => (
  <FormattedTextInput
    mask={{
      prefix: '$',
      includeThousandsSeparator: true,
      thousandsSeparatorSymbol: ',',
      allowDecimal: true,
      decimalSymbol: '.',
      decimalLimit: 2,
      integerLimit: 9,
    }}
    placeholder="$0.00"
    value={value}
    onChange={onChange}
    name="amount"
    id="currency-input"
  />
);
```

### Percentage Input with Validation

```tsx
const PercentageInput = ({ value, onChange }) => {
  const validatePercentage = (inputValue) => {
    const numValue = parseFloat(inputValue);
    if (numValue > 100) {
      return false; // Reject values over 100%
    }
    return inputValue;
  };

  return (
    <FormattedTextInput
      mask={{
        suffix: '%',
        allowDecimal: true,
        decimalSymbol: '.',
        decimalLimit: 2,
        allowNegative: false,
      }}
      placeholder="0.00%"
      value={value}
      onChange={onChange}
      pipe={validatePercentage}
      name="percentage"
      id="percentage-input"
    />
  );
};
```

### Credit Card Input

```tsx
const CreditCardInput = () => (
  <FormattedTextInput
    mask={[
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      ' ',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      ' ',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      ' ',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ]}
    placeholder="1234 5678 9012 3456"
    guide={true}
    name="cardNumber"
    id="card-number-input"
  />
);
```

### Date Input

```tsx
const DateInput = () => (
  <FormattedTextInput
    mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
    placeholder="MM/DD/YYYY"
    guide={true}
    name="date"
    id="date-input"
  />
);
```

### Social Security Number

```tsx
const SSNInput = () => (
  <FormattedTextInput
    mask={[/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    placeholder="123-45-6789"
    guide={false}
    name="ssn"
    id="ssn-input"
  />
);
```

### Postal Code Input

```tsx
const PostalCodeInput = ({ country }) => {
  const mask =
    country === 'US'
      ? [/\d/, /\d/, /\d/, /\d/, /\d/]
      : [/[A-Z]/, /\d/, /[A-Z]/, ' ', /\d/, /[A-Z]/, /\d/];

  return (
    <FormattedTextInput
      mask={mask}
      placeholder={country === 'US' ? '12345' : 'A1A 1A1'}
      guide={true}
      name="postalCode"
      id="postal-code-input"
    />
  );
};
```

### Account Number with Dynamic Mask

```tsx
const AccountNumberInput = () => {
  const accountMask = (value) => {
    const length = value.replace(/\D/g, '').length;
    if (length <= 4) return [/\d/, /\d/, /\d/, /\d/];
    if (length <= 8)
      return [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    return [
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ];
  };

  return (
    <FormattedTextInput
      mask={accountMask}
      placeholder="Enter account number"
      guide={true}
      name="accountNumber"
      id="account-number-input"
    />
  );
};
```

### Time Input (12-hour format)

```tsx
const TimeInput = () => (
  <FormattedTextInput
    mask={[/\d/, /\d/, ':', /\d/, /\d/, ' ', /[aApP]/, /[mM]/]}
    placeholder="12:00 AM"
    guide={true}
    pipe={(value) => {
      if (value.length === 5) return value + ' ';
      return value;
    }}
    name="time"
    id="time-input"
  />
);
```

## Best Practices

1. **Choose appropriate masks** - Use masks that match expected input formats
2. **Provide clear placeholders** - Include examples of expected format
3. **Use guide characters** - Enable guides for complex formats like dates
4. **Validate with pipes** - Use pipe functions for business logic validation
5. **Consider mobile users** - Ensure masks work well on mobile keyboards
6. **Test edge cases** - Validate mask behavior with various inputs
7. **Provide feedback** - Show validation errors for rejected inputs
8. **Use semantic types** - Set appropriate input types (tel, email, etc.)
9. **Handle controlled inputs** - Properly manage controlled component state
10. **Consider accessibility** - Ensure screen readers understand masked inputs

## Migration Notes

### General Migration:

- Ensure you have the required peer dependencies installed
- The component requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling
- React 16.14.0+ and React DOM 16.14.0+ are required

### Recent Updates:

- Added `data-frc` attribute for component identification
- Enhanced number formatting with integer and forced decimal functionality (v3.3.0)
- Removed "important" usage in spacing styles (v3.2.3)
- Made global spacing classes optional (v3.2.0)

### Breaking Changes:

- Ensure react-text-mask v5.5.0+ is compatible with your setup
- Check that text-mask-addons v3.8.0+ works with your mask configurations
- Verify that memoize-one v6.0.0+ doesn't break existing functionality

## Related Components

- `@fil-react-components/input` - Base input component
- `@fil-react-components/box` - Box component for affix display
- `@fil-react-components/theme-provider` - Theme provider for styling
- `@fil-react-components/form` - Form component with validation integration
