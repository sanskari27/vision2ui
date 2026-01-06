## Overview

The TextArea component is a multi-line text input component that provides a flexible textarea element with consistent styling and theming. It follows the GDS (Global Design System) standards and supports all standard textarea attributes while providing additional accessibility and styling features.

## Package Information

- **Package Name**: `@fil-react-components/text-area`
- **Version**: 2.10.11
- **Description**: TextArea Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/text-area
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/input`: ^2.12.11
- `@fil-react-components/with-styles`: ^2.7.8
- `@fil-react-mixins/styled`: ^2.7.1

## Exports

```typescript
import TextArea from '@fil-react-components/text-area';
```

### Available Exports:

- `TextArea` (default export) - Main textarea component with styling

## Component Structure

### Main Component: TextArea

The main TextArea component is a functional React component that renders a styled textarea element with consistent theming and accessibility features.

### Component Variations:

1. **Standard TextArea** (default) - Basic textarea with default rows and columns
2. **Custom Dimensions** - Configurable rows and columns
3. **Disabled TextArea** - Non-interactive textarea
4. **Read-only TextArea** - Display-only textarea

### Component Hierarchy:

```
TextArea (Main Component)
└── textarea (HTML element with styling)
```

## Props

### TextAreaProps

Extends `React.TextareaHTMLAttributes<HTMLTextAreaElement>`

| Prop           | Type                                                      | Default | Description                            |
| -------------- | --------------------------------------------------------- | ------- | -------------------------------------- |
| `ariaLabel`    | `string`                                                  | -       | Accessibility label for screen readers |
| `forwardRef`   | `React.RefObject<HTMLTextAreaElement>`                    | -       | Ref to access the textarea element     |
| `isControlled` | `boolean`                                                 | -       | Whether the textarea is controlled     |
| `rows`         | `number`                                                  | `5`     | Number of visible text lines           |
| `cols`         | `number`                                                  | `30`    | Number of visible text columns         |
| `className`    | `string`                                                  | -       | Additional CSS class names             |
| `disabled`     | `boolean`                                                 | -       | Whether the textarea is disabled       |
| `readOnly`     | `boolean`                                                 | -       | Whether the textarea is read-only      |
| `placeholder`  | `string`                                                  | -       | Placeholder text                       |
| `value`        | `string \| number \| readonly string[]`                   | -       | Controlled value                       |
| `defaultValue` | `string \| number \| readonly string[]`                   | -       | Default value                          |
| `maxLength`    | `number`                                                  | -       | Maximum number of characters           |
| `onChange`     | `(event: React.ChangeEvent<HTMLTextAreaElement>) => void` | -       | Change event handler                   |
| `onBlur`       | `(event: React.FocusEvent<HTMLTextAreaElement>) => void`  | -       | Blur event handler                     |
| `onFocus`      | `(event: React.FocusEvent<HTMLTextAreaElement>) => void`  | -       | Focus event handler                    |

## Usage Examples

### Basic Usage

```tsx
import TextArea from '@fil-react-components/text-area';

<TextArea
  ariaLabel="Description"
  placeholder="Enter your description here..."
/>;
```

### Controlled TextArea

```tsx
import React, { useState } from 'react';
import TextArea from '@fil-react-components/text-area';

const ControlledTextArea = () => {
  const [value, setValue] = useState('');

  return (
    <TextArea
      ariaLabel="Comments"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter your comments..."
    />
  );
};
```

### Custom Dimensions

```tsx
<TextArea
  ariaLabel="Large text area"
  rows={10}
  cols={50}
  placeholder="Enter detailed information..."
/>
```

### With Validation

```tsx
<TextArea
  ariaLabel="Feedback"
  maxLength={500}
  placeholder="Please provide your feedback..."
  required
/>
```

### Disabled and Read-only States

```tsx
// Disabled textarea
<TextArea
  ariaLabel="Disabled field"
  value="This field is disabled"
  disabled
/>

// Read-only textarea
<TextArea
  ariaLabel="Read-only field"
  value="This field is read-only"
  readOnly
/>
```

### With Event Handlers

```tsx
<TextArea
  ariaLabel="Message"
  placeholder="Type your message..."
  onChange={(e) => console.log('Value changed:', e.target.value)}
  onFocus={(e) => console.log('Focused')}
  onBlur={(e) => console.log('Blurred')}
/>
```

## Features

### Accessibility

- Proper textarea semantics with `<textarea>` element
- ARIA label support via `ariaLabel` prop
- Keyboard navigation support
- Screen reader compatibility
- Focus management

### Styling

- Styled-components integration
- Theme provider support for consistent theming
- Custom CSS class support
- Responsive design
- Consistent with input component styling

### State Management

- Supports both controlled and uncontrolled modes
- Standard HTML textarea attributes
- Event handling for change, focus, blur
- Validation state support through styling

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

- Default textarea configuration
- Custom rows and columns
- Disabled state
- Read-only state
- Placeholder text
- Maximum length
- Event handling

## Data Attributes

- `data-frc="text-area"` - Applied to the textarea element

## CSS Classes

- Inherits styling from input component
- `max-width: 100%` - Ensures responsive behavior
- `display: block` - Block-level element
- `padding-top: 16px` - Top padding for better spacing

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
TextArea/
├── src/
│   ├── TextArea.tsx              # Main textarea component
│   ├── TextArea.style.ts         # Textarea styling
│   ├── TextArea.mock.tsx         # Mock configurations
│   ├── TextArea.stories.tsx      # Storybook stories
│   ├── index.ts                  # Main exports
│   └── tests/
│       ├── TextArea.test.tsx     # Unit tests
│       ├── TextArea.ct.tsx       # Component tests
│       └── TextAreaWrapper.tsx   # Test wrapper
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Contact Form

```tsx
<TextArea
  ariaLabel="Message"
  rows={6}
  placeholder="Please enter your message..."
  maxLength={1000}
  required
/>
```

### Comments Section

```tsx
<TextArea
  ariaLabel="Comments"
  rows={4}
  placeholder="Add your comments here..."
  onChange={(e) => setComments(e.target.value)}
/>
```

### Description Field

```tsx
<TextArea
  ariaLabel="Product description"
  rows={8}
  cols={60}
  placeholder="Describe the product in detail..."
  value={description}
  onChange={(e) => setDescription(e.target.value)}
/>
```

## Best Practices

1. **Provide meaningful labels** - Always use `ariaLabel` for accessibility
2. **Set appropriate dimensions** - Use `rows` and `cols` for expected content length
3. **Use placeholders wisely** - Don't rely on placeholders as labels
4. **Consider maxLength** - Set character limits for data validation
5. **Handle controlled state** - Use controlled components when you need to manage value externally
6. **Test accessibility** - Ensure screen readers can properly announce the field
7. **Provide feedback** - Use validation states and error messages appropriately

## Migration Notes

### From older versions:

- Ensure you have the required peer dependencies installed
- The component now requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling
- Component uses withStyles HOC for consistent theming

## Related Components

- `@fil-react-components/input` - Single-line text input component
- `@fil-react-components/text-field` - Text field with label and validation
- `@fil-react-components/with-styles` - Styling HOC
- `@fil-react-components/theme-provider` - Theme provider for styling
