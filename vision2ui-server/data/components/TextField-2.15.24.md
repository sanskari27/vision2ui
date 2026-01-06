## Overview

The TextField component is a comprehensive form input component that combines a label, input field, assistive text, and optional tooltip into a cohesive form field. It supports various input types, validation states, masking capabilities, and responsive layouts following the GDS (Global Design System) standards.

## Package Information

- **Package Name**: `@fil-react-components/text-field`
- **Version**: 2.15.24
- **Description**: TextField Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/text-field
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/formatted-text-input`: ^3.3.6
- `@fil-react-components/input`: ^2.12.11
- `@fil-react-components/label`: ^2.9.11
- `@fil-react-components/paragraph`: ^2.10.9
- `@fil-react-components/tooltip`: ^2.11.19
- `@fil-react-components/with-styles`: ^2.7.8
- `@fil-react-hooks/unique-id`: ^1.4.3
- `@fil-react-mixins/styled`: ^2.7.1
- `classnames`: ^2.5.1

## Exports

```typescript
import TextField, { TextFieldProps } from '@fil-react-components/text-field';
```

### Available Exports:

- `TextField` (default export) - Main text field component with styling
- `TextFieldProps` - TypeScript interface for component props

## Component Structure

### Main Component: TextField

The main TextField component is a memoized React component that combines multiple form elements into a cohesive field with proper accessibility and responsive behavior.

### Component Variations:

1. **Standard TextField** - Basic text input with label
2. **With Assistive Text** - Includes helper text below the label
3. **With Tooltip** - Includes informational tooltip
4. **With Validation** - Shows validation states (valid, invalid, warning, info)
5. **Masked Input** - Supports formatted text input (currency, date, etc.)
6. **Two-Column Layout** - Responsive layout for wider screens
7. **With Character Count** - Shows remaining characters (via HOC)

### Component Hierarchy:

```
TextField (Main Component)
├── div.fil-text-field
│   ├── div.fil-text-field__desc
│   │   ├── Label (optional)
│   │   ├── Paragraph.fil-text-field__assistive-text (optional)
│   │   └── Tooltip (optional)
│   └── div.fil-text-field__input
│       ├── InputComponent (Input, FormattedTextInput, or NumericInput)
│       └── children (optional additional content)
```

## Props

### TextFieldProps

Extends `InputProps` and `Omit<FormattedTextInputProps, 'onChange'>`

| Prop             | Type                                   | Default                  | Description                                        |
| ---------------- | -------------------------------------- | ------------------------ | -------------------------------------------------- |
| `disabled`       | `boolean`                              | -                        | Whether the field is disabled                      |
| `id`             | `string`                               | -                        | HTML id attribute (auto-generated if not provided) |
| `value`          | `string`                               | -                        | Controlled input value                             |
| `label`          | `string`                               | -                        | Field label text                                   |
| `name`           | `string`                               | -                        | HTML name attribute                                |
| `type`           | `string`                               | `'text'`                 | Input type (text, password, email, etc.)           |
| `className`      | `string`                               | -                        | Additional CSS class names                         |
| `assistiveText`  | `string`                               | -                        | Helper text displayed below label                  |
| `tooltip`        | `string`                               | -                        | Tooltip content for additional information         |
| `layout`         | `'1-col' \| '2-cols'`                  | `'1-col'`                | Layout mode for responsive design                  |
| `required`       | `boolean`                              | -                        | Whether the field is required                      |
| `tooltipProps`   | `Omit<TooltipProps, 'message'>`        | `{ alignment: 'right' }` | Tooltip configuration                              |
| `maskProps`      | `FormattedTextInputProps`              | -                        | Masking configuration for formatted input          |
| `children`       | `React.ReactNode`                      | -                        | Additional content in input container              |
| `inputComponent` | `React.ComponentType`                  | `Input`                  | Custom input component to use                      |
| `ariaLabel`      | `string`                               | -                        | Accessibility label                                |
| `wrapperProps`   | `React.HTMLAttributes<HTMLDivElement>` | -                        | Props for wrapper div                              |

## Usage Examples

### Basic TextField

```tsx
import TextField from '@fil-react-components/text-field';

<TextField
  label="First Name"
  name="firstName"
  placeholder="Enter your first name"
/>;
```

### Controlled TextField

```tsx
import React, { useState } from 'react';
import TextField from '@fil-react-components/text-field';

const ControlledField = () => {
  const [email, setEmail] = useState('');

  return (
    <TextField
      label="Email Address"
      name="email"
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
  );
};
```

### With Assistive Text and Tooltip

```tsx
<TextField
  label="Password"
  name="password"
  type="password"
  assistiveText="Must be at least 8 characters long"
  tooltip="Use a strong password with uppercase, lowercase, and numbers"
/>
```

### With Validation States

```tsx
// Invalid state
<TextField
  label="Email"
  name="email"
  type="email"
  validation="invalid"
  assistiveText="Please enter a valid email address"
/>

// Valid state
<TextField
  label="Email"
  name="email"
  type="email"
  validation="valid"
  assistiveText="Email address is valid"
/>
```

### Masked Input (Currency)

```tsx
import FormattedTextInput from '@fil-react-components/formatted-text-input';

<TextField
  label="Price"
  name="price"
  mask={{
    prefix: '£',
    includeThousandsSeparator: true,
    allowDecimal: true,
  }}
  inputComponent={FormattedTextInput}
/>;
```

### Date Input with Mask

```tsx
import FormattedTextInput from '@fil-react-components/formatted-text-input';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';

<TextField
  label="Date of Birth"
  name="dob"
  assistiveText="DD - MM - YYYY"
  mask={[
    /\d/,
    /\d/,
    ' ',
    '-',
    ' ',
    /\d/,
    /\d/,
    ' ',
    '-',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ]}
  pipe={createAutoCorrectedDatePipe('dd - mm - yyyy')}
  guide={false}
  inputComponent={FormattedTextInput}
/>;
```

### Two-Column Layout

```tsx
<TextField
  label="Full Name"
  name="fullName"
  layout="2-cols"
  assistiveText="Enter your complete name"
  tooltip="Include middle name if applicable"
/>
```

### With Character Count

```tsx
import withCharCountHOC from '@fil-react-components/with-char-count';

const TextFieldWithCount = withCharCountHOC(TextField);

<TextFieldWithCount
  label="Description"
  name="description"
  maxLength={200}
  assistiveText="Brief description of the item"
/>;
```

## Features

### Accessibility

- Proper form field semantics with label association
- ARIA attributes for screen readers
- Unique ID generation for form accessibility
- Keyboard navigation support
- Focus management and visual indicators

### Styling

- Styled-components integration
- Theme provider support for consistent theming
- Responsive two-column layout
- Validation state styling with visual indicators
- Custom CSS class support

### Input Types

- Standard HTML input types (text, password, email, etc.)
- Formatted text input with masking
- Numeric input with prefix/suffix support
- Custom input components via `inputComponent` prop

### Validation & Feedback

- Visual validation states (valid, invalid, warning, info)
- Assistive text for additional guidance
- Tooltip support for contextual help
- Required field indicators

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

- Default text field configurations
- Disabled and disabled with value states
- Fields with assistive text
- Fields with tooltips
- Validation states (invalid, warning, info, valid)
- Masked inputs (currency, date, percentage, national insurance)
- Required fields
- Two-column layout
- Character count functionality
- Different input types (password, etc.)

## Data Attributes

- `data-frc="text-field"` - Applied to the main wrapper div

## CSS Classes

- `fil-text-field` - Main wrapper class
- `fil-text-field__desc` - Description container
- `fil-text-field__assistive-text` - Assistive text styling
- `fil-text-field__tooltip` - Tooltip positioning
- `fil-text-field__input` - Input container
- `fil-text-field__icon` - Icon positioning (for validation states)

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
TextField/
├── src/
│   ├── TextField.tsx              # Main text field component
│   ├── TextField.style.ts         # Text field styling
│   ├── TextField.mock.tsx         # Mock configurations
│   ├── TextField.stories.tsx      # Storybook stories
│   ├── index.ts                   # Main exports
│   └── tests/
│       ├── TextField.test.tsx     # Unit tests
│       ├── TextField.ct.tsx       # Component tests
│       └── __snapshots__/         # Test snapshots
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Registration Form

```tsx
<TextField
  label="Email Address"
  name="email"
  type="email"
  required
  assistiveText="We'll use this to send you updates"
/>

<TextField
  label="Password"
  name="password"
  type="password"
  required
  assistiveText="Must be at least 8 characters"
/>
```

### Payment Form

```tsx
import NumericInput from '@fil-react-components/numeric-input';

<TextField
  label="Amount"
  name="amount"
  mask={{ allowNegative: false }}
  prefix="$"
  inputComponent={NumericInput}
  required
/>;
```

### Contact Information

```tsx
<TextField
  label="Phone Number"
  name="phone"
  type="tel"
  assistiveText="Include country code if international"
/>

<TextField
  label="Address"
  name="address"
  assistiveText="Street address, city, postal code"
/>
```

## Best Practices

1. **Always provide labels** - Use the `label` prop for proper accessibility
2. **Use assistive text** - Provide helpful guidance with `assistiveText`
3. **Consider tooltips** - Use for complex explanations that don't fit in assistive text
4. **Choose appropriate input types** - Use semantic HTML types (email, tel, etc.)
5. **Handle validation** - Use validation states to provide user feedback
6. **Consider layout** - Use `2-cols` layout for wider forms on larger screens
7. **Test accessibility** - Ensure screen readers can properly navigate the form
8. **Use controlled components** - For complex forms requiring validation

## Migration Notes

### From older versions:

- Ensure you have the required peer dependencies installed
- The component now requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling
- Component uses memo for performance optimization
- Unique ID generation now uses `@fil-react-hooks/unique-id`

## Related Components

- `@fil-react-components/input` - Base input component
- `@fil-react-components/label` - Label component
- `@fil-react-components/paragraph` - Text component for assistive text
- `@fil-react-components/tooltip` - Tooltip component
- `@fil-react-components/formatted-text-input` - Masked input component
- `@fil-react-components/with-char-count` - Character count HOC
- `@fil-react-components/theme-provider` - Theme provider for styling
