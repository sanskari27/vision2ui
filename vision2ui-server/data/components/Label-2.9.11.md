# Label Component Documentation

## Overview

The Label component provides styled HTML label elements with comprehensive theming and accessibility features following the GDS (Global Design System) standards. It supports required field indicators, form association, and integrates seamlessly with form inputs and other interactive elements. The component automatically applies proper styling and accessibility attributes for form labels.

## Package Information

- **Package Name**: `@fil-react-components/label`
- **Version**: 2.9.11
- **Description**: Label Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/label
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/with-styles`: ^2.7.8
- `@fil-react-mixins/styled`: ^2.7.1
- `classnames`: ^2.5.1

## Dev Dependencies

- `@fil-react-components/grid`: ^2.9.11
- `@fil-react-utils/testing`: ^1.12.4

## Exports

```typescript
import Label from '@fil-react-components/label';
```

### Available Exports:

- `Label` (default export) - Main label component with styling and theming

## Component Structure

### Main Component: Label

A styled HTML label element with theme integration and accessibility features.

### Component Features:

- **Form Association**: Supports `htmlFor` and `form` attributes for proper form input association
- **Required Indicators**: Automatic asterisk (\*) display for required fields
- **ARIA Support**: Proper `aria-label` support for accessibility
- **Theme Integration**: Full integration with GDS theme provider
- **Flexible Content**: Supports text, HTML elements, and React components as children
- **Accessibility**: Proper semantic HTML and screen reader support

### Component Hierarchy:

```
Label Component
├── label element
│   ├── GDS styling and theming
│   ├── Required field indicator (*)
│   ├── data-frc attribute
│   └── Standard HTML label attributes
```

## Props

### LabelProps

| Prop            | Type                                          | Default | Description                                     |
| --------------- | --------------------------------------------- | ------- | ----------------------------------------------- |
| `ariaLabel`     | `string`                                      | -       | ARIA label for accessibility                    |
| `children`      | `React.ReactNode`                             | -       | Label content (text, HTML, or React components) |
| `className`     | `string`                                      | -       | Additional CSS class names                      |
| `formName`      | `string`                                      | -       | Associates label with a form element            |
| `htmlFor`       | `string`                                      | -       | Associates label with a form control            |
| `required`      | `boolean`                                     | `false` | Shows required field indicator (\*)             |
| `...extraProps` | `React.LabelHTMLAttributes<HTMLLabelElement>` | -       | All standard HTML label attributes              |

## Usage Examples

### Basic Label

```tsx
import Label from '@fil-react-components/label';

<Label htmlFor="username">Username</Label>
<input id="username" type="text" />
```

### Required Field Label

```tsx
<Label htmlFor="email" required>
  Email Address
</Label>
<input id="email" type="email" required />
```

### Label with HTML Content

```tsx
<Label htmlFor="description">
  <strong>Product Description</strong>
  <span className="optional">(Optional)</span>
</Label>
<textarea id="description"></textarea>
```

### Label with Form Association

```tsx
<form id="contactForm">
  <Label htmlFor="name" formName="contactForm">
    Full Name
  </Label>
  <input id="name" type="text" form="contactForm" />
</form>
```

### Label with ARIA Label

```tsx
<Label htmlFor="phone" ariaLabel="Phone number input field">
  📞 Phone
</Label>
<input id="phone" type="tel" aria-label="Phone number input field" />
```

### Label with Custom Class

```tsx
<Label htmlFor="password" className="bold-label" required>
  Password
</Label>
<input id="password" type="password" />
```

### Form with Multiple Labels

```tsx
const ContactForm = () => (
  <form>
    <div>
      <Label htmlFor="firstName" required>
        First Name
      </Label>
      <input id="firstName" type="text" required />
    </div>

    <div>
      <Label htmlFor="lastName" required>
        Last Name
      </Label>
      <input id="lastName" type="text" required />
    </div>

    <div>
      <Label htmlFor="email" required>
        Email
      </Label>
      <input id="email" type="email" required />
    </div>

    <div>
      <Label htmlFor="message">Message</Label>
      <textarea id="message"></textarea>
    </div>
  </form>
);
```

### Label with Checkbox

```tsx
<div>
  <Label htmlFor="agreeToTerms">
    <input id="agreeToTerms" type="checkbox" />I agree to the terms and
    conditions
  </Label>
</div>
```

### Label with Radio Buttons

```tsx
<fieldset>
  <legend>Choose your preferred contact method:</legend>

  <div>
    <Label htmlFor="email-contact">
      <input id="email-contact" type="radio" name="contact" value="email" />
      Email
    </Label>
  </div>

  <div>
    <Label htmlFor="phone-contact">
      <input id="phone-contact" type="radio" name="contact" value="phone" />
      Phone
    </Label>
  </div>
</fieldset>
```

### Label with Select Dropdown

```tsx
<div>
  <Label htmlFor="country" required>
    Country
  </Label>
  <select id="country" required>
    <option value="">Select a country</option>
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
    <option value="ca">Canada</option>
  </select>
</div>
```

### Label with Complex Form Layout

```tsx
const RegistrationForm = () => (
  <div className="form-container">
    <h2>User Registration</h2>

    <div className="form-row">
      <div className="form-field">
        <Label htmlFor="firstName" required>
          First Name
        </Label>
        <input id="firstName" type="text" required />
      </div>

      <div className="form-field">
        <Label htmlFor="lastName" required>
          Last Name
        </Label>
        <input id="lastName" type="text" required />
      </div>
    </div>

    <div className="form-field">
      <Label htmlFor="email" required>
        Email Address
      </Label>
      <input id="email" type="email" required />
    </div>

    <div className="form-field">
      <Label htmlFor="password" required>
        Password
      </Label>
      <input id="password" type="password" required />
    </div>

    <div className="form-field">
      <Label htmlFor="confirmPassword" required>
        Confirm Password
      </Label>
      <input id="confirmPassword" type="password" required />
    </div>

    <div className="form-field">
      <Label htmlFor="newsletter">
        <input id="newsletter" type="checkbox" />
        Subscribe to newsletter
      </Label>
    </div>
  </div>
);
```

### Label with Error State

```tsx
const FormField = ({ label, id, error, required, children }) => (
  <div className={`form-field ${error ? 'has-error' : ''}`}>
    <Label htmlFor={id} required={required}>
      {label}
    </Label>
    {children}
    {error && <span className="error-message">{error}</span>}
  </div>
);

// Usage
<FormField label="Username" id="username" required error="Username is required">
  <input id="username" type="text" />
</FormField>;
```

### Label with Tooltip

```tsx
const LabelWithTooltip = ({ label, tooltip, htmlFor, required }) => (
  <div className="label-with-tooltip">
    <Label htmlFor={htmlFor} required={required}>
      {label}
    </Label>
    <button
      type="button"
      className="tooltip-trigger"
      aria-label={`More information about ${label}`}
      onClick={() => alert(tooltip)}
    >
      ?
    </button>
  </div>
);

// Usage
<LabelWithTooltip
  label="Account Number"
  tooltip="Your account number can be found on your statement"
  htmlFor="accountNumber"
  required
/>
<input id="accountNumber" type="text" />
```

## Features

### Form Association

- **htmlFor Attribute**: Associates label with form controls using id
- **form Attribute**: Associates label with forms when controls are outside the form
- **Implicit Association**: Labels can wrap form controls for implicit association

### Required Field Indicators

- **Visual Indicator**: Automatic asterisk (\*) for required fields
- **Styling**: Orange asterisk using GDS theme colors
- **Accessibility**: Screen readers announce required fields appropriately

### Content Flexibility

- **Text Content**: Simple text labels
- **HTML Content**: Rich HTML content including formatting
- **React Components**: Full React component support as children
- **Mixed Content**: Combination of text, HTML, and components

### Accessibility

- **Semantic HTML**: Proper `<label>` element usage
- **ARIA Support**: `aria-label` attribute support
- **Screen Reader**: Proper screen reader announcements
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Proper focus indicators

### Styling

- **Theme Integration**: GDS theme provider integration
- **Custom Classes**: Support for additional CSS classes
- **Typography**: Theme-consistent font sizing and spacing
- **Spacing**: Proper margin and padding using theme values
- **Responsive**: Responsive design with breakpoint support

## Testing

The component includes:

- Unit tests using Jest with snapshot testing
- Component tests using Playwright
- Accessibility testing with axe-devtools
- Form association testing
- Required field indicator testing

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

- Basic label configurations
- Required field indicators
- HTML content labels
- Form association examples
- Extra props handling
- Accessibility testing results

## Data Attributes

- `data-frc="label"` - Applied to Label elements

## CSS Classes

- `label` - FIL label class for styling
- `fil-label` - Additional FIL label class

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
Label/
├── src/
│   ├── Label.tsx              # Main Label component
│   ├── Label.mock.tsx         # Mock configurations for testing
│   ├── Label.stories.tsx      # Storybook stories
│   ├── Label.style.ts         # Label styling with theme integration
│   ├── index.ts               # Main exports
│   └── tests/
│       ├── Label.ct.tsx       # Component tests
│       ├── Label.test.tsx     # Unit tests
│       ├── a11y-results/      # Accessibility test results
│       ├── coverage/          # Test coverage reports
│       └── __snapshots__/     # Snapshot files
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Contact Form

```tsx
const ContactForm = () => (
  <form>
    <div className="form-group">
      <Label htmlFor="name" required>
        Full Name
      </Label>
      <input id="name" type="text" required />
    </div>

    <div className="form-group">
      <Label htmlFor="email" required>
        Email Address
      </Label>
      <input id="email" type="email" required />
    </div>

    <div className="form-group">
      <Label htmlFor="message">Message</Label>
      <textarea id="message" rows={4}></textarea>
    </div>

    <button type="submit">Send Message</button>
  </form>
);
```

### Registration Form

```tsx
const RegistrationForm = () => (
  <form>
    <fieldset>
      <legend>Account Information</legend>

      <div className="form-group">
        <Label htmlFor="username" required>
          Username
        </Label>
        <input id="username" type="text" required />
      </div>

      <div className="form-group">
        <Label htmlFor="password" required>
          Password
        </Label>
        <input id="password" type="password" required />
      </div>

      <div className="form-group">
        <Label htmlFor="confirmPassword" required>
          Confirm Password
        </Label>
        <input id="confirmPassword" type="password" required />
      </div>
    </fieldset>

    <fieldset>
      <legend>Preferences</legend>

      <div className="form-group">
        <Label htmlFor="newsletter">
          <input id="newsletter" type="checkbox" />
          Subscribe to newsletter
        </Label>
      </div>

      <div className="form-group">
        <Label htmlFor="updates">
          <input id="updates" type="checkbox" />
          Receive product updates
        </Label>
      </div>
    </fieldset>
  </form>
);
```

### Survey Form

```tsx
const SurveyForm = () => (
  <form>
    <div className="question">
      <Label htmlFor="satisfaction" required>
        How satisfied are you with our service?
      </Label>
      <select id="satisfaction" required>
        <option value="">Please select</option>
        <option value="5">Very Satisfied</option>
        <option value="4">Satisfied</option>
        <option value="3">Neutral</option>
        <option value="2">Dissatisfied</option>
        <option value="1">Very Dissatisfied</option>
      </select>
    </div>

    <div className="question">
      <Label htmlFor="comments">Additional Comments</Label>
      <textarea
        id="comments"
        placeholder="Please share your thoughts..."
      ></textarea>
    </div>

    <div className="question">
      <Label required>Would you recommend us to a friend?</Label>
      <div className="radio-group">
        <Label htmlFor="recommend-yes">
          <input id="recommend-yes" type="radio" name="recommend" value="yes" />
          Yes
        </Label>
        <Label htmlFor="recommend-no">
          <input id="recommend-no" type="radio" name="recommend" value="no" />
          No
        </Label>
      </div>
    </div>
  </form>
);
```

### Settings Form

```tsx
const SettingsForm = () => (
  <form>
    <section>
      <h3>Profile Settings</h3>

      <div className="form-group">
        <Label htmlFor="displayName" required>
          Display Name
        </Label>
        <input id="displayName" type="text" required />
      </div>

      <div className="form-group">
        <Label htmlFor="email" required>
          Email Address
        </Label>
        <input id="email" type="email" required />
      </div>
    </section>

    <section>
      <h3>Privacy Settings</h3>

      <div className="form-group">
        <Label htmlFor="profileVisibility">Profile Visibility</Label>
        <select id="profileVisibility">
          <option value="public">Public</option>
          <option value="friends">Friends Only</option>
          <option value="private">Private</option>
        </select>
      </div>

      <div className="form-group">
        <Label htmlFor="emailNotifications">
          <input id="emailNotifications" type="checkbox" defaultChecked />
          Receive email notifications
        </Label>
      </div>
    </section>
  </form>
);
```

## Best Practices

1. **Always use htmlFor**: Associate labels with form controls using the `htmlFor` prop
2. **Provide meaningful labels**: Use clear, descriptive text for label content
3. **Mark required fields**: Use the `required` prop for mandatory form fields
4. **Use semantic HTML**: Leverage proper form structure with fieldsets and legends
5. **Consider accessibility**: Provide adequate context for screen readers
6. **Keep labels concise**: Use brief but descriptive label text
7. **Test with screen readers**: Ensure labels work properly with assistive technologies
8. **Use consistent styling**: Maintain consistent label styling across forms
9. **Group related fields**: Use fieldsets with legends for logical grouping
10. **Provide error feedback**: Combine labels with error messages for validation

## Migration Notes

### General Migration:

- Ensure you have the required peer dependencies installed
- The component requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling
- React 16.14.0+ is required

### Recent Updates:

- Added `data-frc` attribute for component identification (v2.9.0)
- Theme provider peer dependency updates for compatibility
- Required field indicator styling updated to use GDS tokens

### Breaking Changes:

- Verify that your theme provider includes label-related configuration
- Check that GDS tokens package is available for required field styling
- Ensure CSS custom properties are available for theme values

### From Previous Versions:

- Component API remains consistent
- Props interface maintained
- Required field indicator behavior unchanged
- Styling approach maintained with styled-components

## Related Components

- `@fil-react-components/theme-provider` - Theme provider for label styling
- `@fil-react-components/input` - Input components that work with labels
- `@fil-react-components/checkbox` - Checkbox components with label support
- `@fil-react-components/radio-button` - Radio button components with labels
- `@fil-react-components/select-box` - Select components that use labels
- `@fil-react-components/form` - Form components that may contain labels</content>
  <parameter name="filePath">c:\Users\A744601\Documents\codebase\TAPP101992-fil-react-components\metadata\Label-2.9.11.md
