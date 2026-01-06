# RadioButton-2.12.13.md

## Overview

The RadioButton component is a flexible, accessible radio input component that provides single-selection functionality with multiple variations and validation states. It follows the GDS (Global Design System) standards and supports regular, medium, and large sizes with comprehensive validation styling.

## Package Information

- **Package Name**: `@fil-react-components/radio-button`
- **Version**: 2.12.13
- **Description**: RadioButton Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/radio-button
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/input`: ^2.12.11
- `@fil-react-components/large-label`: ^2.10.11
- `@fil-react-components/medium-label`: ^2.10.11
- `@fil-react-components/regular-label`: ^2.11.12
- `@fil-react-components/with-label-wrapper`: ^1.10.12
- `classnames`: ^2.5.1

## Exports

```typescript
import RadioButton, {
  BaseRadioButton,
} from '@fil-react-components/radio-button';
```

### Available Exports:

- `RadioButton` (default export) - Main radio button component with variations
- `BaseRadioButton` - Base radio button component without label wrapper

## Component Structure

### Main Component: RadioButton

The main RadioButton component supports multiple variations and automatically renders the appropriate variant based on the `variation` prop.

### Component Variations:

1. **Regular RadioButton** (default) - Standard size radio button with regular label
2. **Medium RadioButton** - Medium size radio button with medium label
3. **Large RadioButton** - Large size radio button with large label
4. **Base RadioButton** - Minimal radio button without label wrapper

### Component Hierarchy:

```
RadioButton (Main Component)
├── RegularRadioButton (wrapped with RegularLabel)
├── MediumRadioButton (wrapped with MediumLabel)
├── LargeRadioButton (wrapped with LargeLabel)
└── BaseRadioButton (basic input wrapper)
```

## Props

### RadioButtonProps (extends BaseRadioProps and RegularRadioLabelProps)

| Prop         | Type                                          | Default     | Description                                        |
| ------------ | --------------------------------------------- | ----------- | -------------------------------------------------- |
| `variation`  | `'large' \| 'regular' \| 'medium'`            | `'regular'` | Determines the radio button size variation         |
| `className`  | `string`                                      | -           | Additional CSS class names                         |
| `checked`    | `boolean`                                     | -           | Controlled checked state                           |
| `id`         | `string`                                      | -           | HTML id attribute                                  |
| `name`       | `string`                                      | -           | HTML name attribute (required for grouping)        |
| `label`      | `string`                                      | -           | Label text for the radio button                    |
| `disabled`   | `boolean`                                     | -           | Disables the radio button                          |
| `validation` | `'info' \| 'invalid' \| 'warning' \| 'valid'` | -           | Validation state styling                           |
| `inputAlign` | `'left' \| 'right'`                           | `'left'`    | Alignment of the radio input                       |
| `onChange`   | `(event) => void`                             | -           | Change event handler                               |
| `value`      | `string`                                      | -           | Value attribute for the radio button               |
| `subText`    | `string`                                      | -           | Additional sub-text displayed below the label      |
| `contained`  | `boolean`                                     | -           | Whether the radio button is contained in a group   |
| `horizontal` | `boolean`                                     | -           | Whether the radio button is displayed horizontally |
| `hCentered`  | `boolean`                                     | -           | Whether to center horizontally                     |
| `vCentered`  | `boolean`                                     | -           | Whether to center vertically                       |

### BaseRadioProps

| Prop        | Type     | Default | Description                |
| ----------- | -------- | ------- | -------------------------- |
| `className` | `string` | -       | Additional CSS class names |
| `name`      | `string` | -       | HTML name attribute        |
| `value`     | `string` | -       | HTML value attribute       |
| `id`        | `string` | -       | HTML id attribute          |

## Usage Examples

### Basic Usage

```tsx
import RadioButton from '@fil-react-components/radio-button';

// Simple radio button
<RadioButton label="Option 1" name="group1" value="option1" />

// Checked radio button
<RadioButton label="Option 2" name="group1" value="option2" checked />
```

### Variations

```tsx
// Regular variation (default)
<RadioButton label="Regular Radio" variation="regular" name="group" value="regular" />

// Medium variation
<RadioButton label="Medium Radio" variation="medium" name="group" value="medium" />

// Large variation
<RadioButton label="Large Radio" variation="large" name="group" value="large" />
```

### Validation States

```tsx
// Info state
<RadioButton label="Info" variation="medium" validation="info" name="group" value="info" />

// Invalid state
<RadioButton label="Invalid" variation="medium" validation="invalid" name="group" value="invalid" />

// Warning state
<RadioButton label="Warning" variation="medium" validation="warning" name="group" value="warning" />

// Valid state
<RadioButton label="Valid" variation="medium" validation="valid" name="group" value="valid" />
```

### With Sub-text

```tsx
<RadioButton
  label="Invest for retirement"
  subText="Recommended option"
  name="investment"
  value="retirement"
/>
```

### Disabled State

```tsx
<RadioButton label="Disabled Option" name="group" value="disabled" disabled />
```

### Controlled Component

```tsx
const [selectedValue, setSelectedValue] = useState('option1');

<RadioButton
  label="Option 1"
  name="group"
  value="option1"
  checked={selectedValue === 'option1'}
  onChange={(e) => setSelectedValue(e.target.value)}
/>

<RadioButton
  label="Option 2"
  name="group"
  value="option2"
  checked={selectedValue === 'option2'}
  onChange={(e) => setSelectedValue(e.target.value)}
/>
```

## Features

### Accessibility

- Proper radio input semantics with `type="radio"`
- Label association for screen readers
- Keyboard navigation support
- Group association via `name` attribute
- Disabled state properly indicated
- Focus management and visual indicators

### Styling

- Styled-components integration
- Theme provider support
- Custom className support
- Validation state styling
- Size variation styling (regular, medium, large)

### State Management

- Supports both controlled and uncontrolled modes
- Group-level state management
- Validation state support
- Disabled state handling

## Testing

The component includes:

- Unit tests using Jest with snapshot testing
- Test utilities from `@fil-react-utils/testing`

Run tests:

```bash
npm test
```

## Storybook Stories

The component has Storybook stories demonstrating:

- Regular radio button variations
- Medium radio button with validation states
- Large radio button with validation states

## Data Attributes

- `data-frc="radio-button"` - Applied to the radio button wrapper

## CSS Classes

- `radio__input` - Applied to the base input element
- `radio-button` - Base radio button class
- `radio-button--regular` - Regular variation styling
- `radio-button--medium` - Medium variation styling
- `radio-button--large` - Large variation styling

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
RadioButton/
├── src/
│   ├── Base/
│   │   ├── Base.tsx              # Base radio button component
│   │   ├── Base.style.ts         # Base radio button styles
│   │   └── index.ts              # Base exports
│   ├── Regular/
│   │   ├── Regular.tsx           # Regular variation
│   │   └── index.ts              # Regular exports
│   ├── Medium/
│   │   ├── Medium.tsx            # Medium variation
│   │   └── index.ts              # Medium exports
│   ├── Large/
│   │   ├── Large.tsx             # Large variation
│   │   └── index.ts              # Large exports
│   ├── RadioButton.tsx           # Main component
│   ├── RadioButton.mock.tsx      # Mock configurations
│   ├── RadioButton.stories.tsx   # Storybook stories
│   ├── index.ts                  # Main exports
│   └── tests/
│       ├── RadioButton.test.tsx     # Unit tests
│       └── __snapshots__/           # Jest snapshots
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Single Choice Selection

```tsx
const [selectedPlan, setSelectedPlan] = useState('');

<RadioButton
  label="Basic Plan"
  name="plan"
  value="basic"
  checked={selectedPlan === 'basic'}
  onChange={(e) => setSelectedPlan(e.target.value)}
/>

<RadioButton
  label="Premium Plan"
  name="plan"
  value="premium"
  checked={selectedPlan === 'premium'}
  onChange={(e) => setSelectedPlan(e.target.value)}
/>
```

### Form Integration

```tsx
<form>
  <fieldset>
    <legend>Select your preferred contact method:</legend>

    <RadioButton
      label="Email"
      name="contact"
      value="email"
      id="contact-email"
    />

    <RadioButton
      label="Phone"
      name="contact"
      value="phone"
      id="contact-phone"
    />

    <RadioButton label="Mail" name="contact" value="mail" id="contact-mail" />
  </fieldset>
</form>
```

### Survey/Questionnaire

```tsx
<RadioButton
  label="Very Satisfied"
  name="satisfaction"
  value="5"
  subText="Excellent experience"
/>

<RadioButton
  label="Satisfied"
  name="satisfaction"
  value="4"
  subText="Good experience"
/>

<RadioButton
  label="Neutral"
  name="satisfaction"
  value="3"
  subText="Average experience"
/>
```

## Best Practices

1. **Always provide a name attribute** - Required for proper grouping and form submission
2. **Use unique values** - Each radio button in a group should have a unique value
3. **Provide meaningful labels** - Use clear, descriptive labels for accessibility
4. **Use RadioGroup for complex layouts** - For horizontal layouts, contained styling, etc.
5. **Consider controlled components** - When you need to manage state externally
6. **Provide validation feedback** - Use validation states to guide user input
7. **Test with screen readers** - Ensure proper accessibility for assistive technologies
8. **Use semantic HTML** - Consider using fieldset and legend for related radio buttons

## Migration Notes

### From older versions:

- Ensure you have the required peer dependencies installed
- The component now requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling
- BaseRadioButton export is now available for minimal implementations

## Related Components

- `@fil-react-components/input` - Base input component
- `@fil-react-components/regular-label` - Regular label component
- `@fil-react-components/medium-label` - Medium label component
- `@fil-react-components/large-label` - Large label component
- `@fil-react-components/with-label-wrapper` - HOC for label wrapping
- `@fil-react-components/radio-group` - Container for grouping radio buttons
- `@fil-react-components/theme-provider` - Theme provider for styling</content>
  <parameter name="filePath">c:\Users\A744601\Documents\codebase\TAPP101992-fil-react-components\metadata\RadioButton-2.12.13.md
