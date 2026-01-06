# RadioGroup-2.12.13.md

## Overview

The RadioGroup component is a container component that manages a group of RadioButton components, providing layout options, state management, and styling for radio button collections. It supports horizontal/vertical layouts, contained styling, and both controlled and uncontrolled usage patterns. It follows the GDS (Global Design System) standards for form controls.

## Package Information

- **Package Name**: `@fil-react-components/radio-group`
- **Version**: 2.12.13
- **Description**: RadioGroup Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/radio-group
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/grid`: ^2.9.11
- `@fil-react-components/radio-button`: ^2.12.13
- `@fil-react-components/with-styles`: ^2.7.8
- `@fil-react-mixins/styled`: ^2.7.1
- `classnames`: ^2.5.1
- `lodash`: 4.17.21

## Exports

```typescript
import RadioGroup from '@fil-react-components/radio-group';
```

### Available Exports:

- `RadioGroup` (default export) - Main radio group container component

## Component Structure

### Main Component: RadioGroup

The RadioGroup component manages a collection of RadioButton components, providing layout options and state coordination.

### Layout Options:

1. **Vertical Layout** (default) - Radio buttons stacked vertically
2. **Horizontal Layout** - Radio buttons arranged horizontally
3. **Contained Layout** - Radio buttons with contained styling and borders
4. **Inverted Layout** - Radio buttons with inverted color scheme

### Component Hierarchy:

```
RadioGroup (Container)
├── RadioButton (Child 1)
├── RadioButton (Child 2)
├── RadioButton (Child 3)
└── ... (Additional children)
```

## Props

### RadioGroupProps

| Prop            | Type                                                   | Default | Description                                |
| --------------- | ------------------------------------------------------ | ------- | ------------------------------------------ |
| `className`     | `string`                                               | -       | Additional CSS class names                 |
| `disabled`      | `boolean`                                              | -       | Disables all radio buttons in the group    |
| `children`      | `React.ReactElement<RadioButtonProps>[]`               | -       | Array of RadioButton components            |
| `name`          | `string`                                               | -       | Name attribute shared by all radio buttons |
| `onChange`      | `(event: React.ChangeEvent<HTMLInputElement>) => void` | `noop`  | Change event handler                       |
| `selectedValue` | `string`                                               | -       | Controlled selected value                  |
| `horizontal`    | `boolean`                                              | -       | Display radio buttons horizontally         |
| `contained`     | `boolean`                                              | -       | Apply contained styling with borders       |
| `inverted`      | `boolean`                                              | -       | Apply inverted color scheme                |
| `hCentered`     | `boolean`                                              | `true`  | Center radio buttons horizontally          |
| `vCentered`     | `boolean`                                              | -       | Center radio buttons vertically            |
| `wrapperProps`  | `Record<string, unknown>`                              | -       | Additional props for the wrapper element   |

## Usage Examples

### Basic Radio Group

```tsx
import RadioGroup from '@fil-react-components/radio-group';
import RadioButton from '@fil-react-components/radio-button';

<RadioGroup name="basic">
  <RadioButton value="option1" label="Option 1" />
  <RadioButton value="option2" label="Option 2" />
  <RadioButton value="option3" label="Option 3" />
</RadioGroup>;
```

### Controlled Radio Group

```tsx
const [selectedValue, setSelectedValue] = useState('option1');

<RadioGroup
  name="controlled"
  selectedValue={selectedValue}
  onChange={(e) => setSelectedValue(e.target.value)}
>
  <RadioButton value="option1" label="Option 1" />
  <RadioButton value="option2" label="Option 2" />
  <RadioButton value="option3" label="Option 3" />
</RadioGroup>;
```

### Horizontal Layout

```tsx
<RadioGroup name="horizontal" horizontal>
  <RadioButton value="yes" label="Yes" />
  <RadioButton value="no" label="No" />
  <RadioButton value="maybe" label="Maybe" />
</RadioGroup>
```

### Contained Layout

```tsx
<RadioGroup name="contained" contained>
  <RadioButton
    value="email"
    label="Email"
    subText="We'll send updates to your inbox"
  />
  <RadioButton value="sms" label="SMS" subText="Receive text notifications" />
  <RadioButton value="push" label="Push" subText="Get instant notifications" />
</RadioGroup>
```

### Contained Horizontal Layout

```tsx
<RadioGroup name="contained-horizontal" contained horizontal hCentered={false}>
  <RadioButton value="small" label="Small" />
  <RadioButton value="medium" label="Medium" />
  <RadioButton value="large" label="Large" />
  <RadioButton value="xl" label="Extra Large" />
</RadioGroup>
```

### Disabled Group

```tsx
<RadioGroup name="disabled" disabled>
  <RadioButton value="option1" label="Option 1" />
  <RadioButton value="option2" label="Option 2" checked />
</RadioGroup>
```

### Partially Disabled Items

```tsx
<RadioGroup name="partial-disabled">
  <RadioButton value="option1" label="Option 1" disabled />
  <RadioButton value="option2" label="Option 2" />
  <RadioButton value="option3" label="Option 3" />
</RadioGroup>
```

### Inverted Styling

```tsx
<RadioGroup name="inverted" inverted>
  <RadioButton value="light" label="Light Theme" />
  <RadioGroup value="dark" label="Dark Theme" />
</RadioGroup>
```

### Uncontrolled Usage

```tsx
const UncontrolledRadioGroup = () => {
  const [value, setValue] = useState('');

  return (
    <form>
      <RadioGroup
        name="uncontrolled"
        onChange={(e) => setValue(e.target.value)}
      >
        <RadioButton value="yes" label="Yes" />
        <RadioButton value="no" label="No" />
      </RadioGroup>
      <p>Selected value: {value}</p>
    </form>
  );
};
```

## Features

### Accessibility

- Proper fieldset and legend semantics (when used appropriately)
- Keyboard navigation support
- Screen reader friendly group association
- Focus management within the group
- ARIA attributes for group relationships

### Styling

- Styled-components integration with theme provider
- Flexible layout options (horizontal/vertical)
- Contained styling with borders and backgrounds
- Inverted color scheme support
- Responsive design with centering options
- Custom className support

### State Management

- Controlled and uncontrolled component support
- Group-level disabled state
- Individual item disabled state support
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

- Regular radio group layouts
- Horizontal radio group layouts
- Contained radio group styling
- Disabled radio group states
- Controlled vs uncontrolled usage patterns
- Inverted styling options

## Data Attributes

- `data-frc="radio-group"` - Applied to the radio group container

## CSS Classes

- `radio-group` - Base radio group class
- `radio-group--horizontal` - Horizontal layout styling
- `radio-group--contained` - Contained styling with borders
- `radio-group--inverted` - Inverted color scheme
- `radio-group--disabled` - Disabled state styling

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
RadioGroup/
├── src/
│   ├── RadioGroup.tsx          # Main radio group component
│   ├── RadioGroup.style.ts     # Radio group styles with theme integration
│   ├── RadioGroup.mock.tsx     # Mock configurations for testing
│   ├── RadioGroup.stories.tsx  # Storybook stories
│   ├── index.ts                # Main exports
│   └── tests/
│       ├── RadioGroup.test.tsx    # Unit tests
│       ├── RadioGroup.ct.tsx      # Component tests
│       ├── RadioGroupWrapper.tsx  # Test wrapper
│       └── __snapshots__/         # Jest snapshots
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Single Choice Form Field

```tsx
const [contactMethod, setContactMethod] = useState('');

<RadioGroup
  name="contact-method"
  selectedValue={contactMethod}
  onChange={(e) => setContactMethod(e.target.value)}
>
  <RadioButton value="email" label="Email" />
  <RadioButton value="phone" label="Phone" />
  <RadioButton value="mail" label="Mail" />
</RadioGroup>;
```

### Survey Questions

```tsx
<fieldset>
  <legend>How satisfied are you with our service?</legend>
  <RadioGroup name="satisfaction">
    <RadioButton value="5" label="Very Satisfied" />
    <RadioButton value="4" label="Satisfied" />
    <RadioButton value="3" label="Neutral" />
    <RadioButton value="2" label="Dissatisfied" />
    <RadioButton value="1" label="Very Dissatisfied" />
  </RadioGroup>
</fieldset>
```

### Product Selection

```tsx
<RadioGroup name="plan" contained>
  <RadioButton
    value="basic"
    label="Basic Plan"
    subText="$9.99/month - Perfect for individuals"
  />
  <RadioButton
    value="pro"
    label="Pro Plan"
    subText="$19.99/month - Great for small teams"
  />
  <RadioButton
    value="enterprise"
    label="Enterprise Plan"
    subText="$49.99/month - Advanced features"
  />
</RadioGroup>
```

### Settings Panel

```tsx
<RadioGroup name="theme" horizontal contained>
  <RadioButton value="light" label="Light" />
  <RadioButton value="dark" label="Dark" />
  <RadioButton value="auto" label="Auto" />
</RadioGroup>
```

### Shipping Options

```tsx
<RadioGroup name="shipping">
  <RadioButton
    value="standard"
    label="Standard Shipping"
    subText="5-7 business days - Free"
  />
  <RadioButton
    value="express"
    label="Express Shipping"
    subText="2-3 business days - $9.99"
  />
  <RadioButton
    value="overnight"
    label="Overnight Shipping"
    subText="Next business day - $19.99"
  />
</RadioGroup>
```

## Best Practices

1. **Always provide a name prop** - Essential for proper form grouping and accessibility
2. **Use semantic HTML** - Consider wrapping in fieldset with legend for related options
3. **Choose appropriate layout** - Use horizontal for few options, vertical for many
4. **Consider contained styling** - Use for important choices or when sub-text is needed
5. **Provide clear labels** - Use descriptive labels that clearly indicate the choice
6. **Use controlled components** - When you need external state management
7. **Handle validation** - Use individual RadioButton validation states when needed
8. **Test keyboard navigation** - Ensure proper tab order and keyboard accessibility
9. **Consider mobile layouts** - Horizontal layouts may not work well on small screens
10. **Use sub-text sparingly** - Only when additional context is needed

## Migration Notes

### From older versions:

- Ensure you have the required peer dependencies installed
- The component now requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling
- Contained styling now includes border and background by default
- Horizontal centering is now enabled by default (hCentered=true)

## Related Components

- `@fil-react-components/radio-button` - Individual radio button component
- `@fil-react-components/grid` - Used for layout management
- `@fil-react-components/with-styles` - HOC for styling integration
- `@fil-react-components/theme-provider` - Required for styling and theming</content>
  <parameter name="filePath">c:\Users\A744601\Documents\codebase\TAPP101992-fil-react-components\metadata\RadioGroup-2.12.13.md
