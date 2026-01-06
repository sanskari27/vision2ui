# PasswordField-2.12.26.md

## Overview

The PasswordField component is a specialized input field for password entry with built-in password visibility toggle, validation hints, and security features. It extends the TextField component with password-specific functionality including show/hide password toggle, password strength hints, and proper input masking. It follows the GDS (Global Design System) standards for secure password input.

## Package Information

- **Package Name**: `@fil-react-components/password-field`
- **Version**: 2.12.26
- **Description**: PasswordField Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/password-field
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/button`: ^3.4.2
- `@fil-react-components/paragraph`: ^2.10.9
- `@fil-react-components/streamline-icon`: ^2.15.6
- `@fil-react-components/svg-icons`: ^1.9.0
- `@fil-react-components/text-field`: ^2.15.24
- `@fil-react-mixins/styled`: ^2.7.1
- `classnames`: ^2.5.1
- `lodash`: 4.17.21

## Exports

```typescript
import PasswordField from '@fil-react-components/password-field';
```

### Available Exports:

- `PasswordField` (default export) - Main password field component with validation hints and visibility toggle

## Component Structure

### Main Component: PasswordField

The PasswordField component extends TextField with password-specific features including a visibility toggle button, password strength hints, and proper input type handling.

### Component Variations:

1. **Create Password** - Shows password hints for creating new passwords with validation rules
2. **Enter Password** - Shows password hints for entering existing passwords with validation rules

### Component Hierarchy:

```
PasswordField (extends TextField)
├── TextField (base input component)
│   ├── Input field
│   ├── Label
│   ├── Password hints (optional)
│   └── View toggle button
├── Password Hints (when passwordHints provided)
│   ├── Hint list
│   └── Validation indicators
└── Visibility Toggle Button
```

## Props

### PasswordFieldProps (extends TextFieldProps)

| Prop                | Type                  | Default                        | Description                                                       |
| ------------------- | --------------------- | ------------------------------ | ----------------------------------------------------------------- |
| `type`              | `string`              | `'text'`                       | Input type (automatically managed for password functionality)     |
| `className`         | `string`              | -                              | Additional CSS class names                                        |
| `passwordHints`     | `PasswordHint[]`      | -                              | Array of password validation hints with labels and regex patterns |
| `passwordType`      | `'create' \| 'enter'` | -                              | Determines hint display mode (create vs enter password)           |
| `inputValue`        | `string`              | `''`                           | Controlled input value                                            |
| `enterPasswordText` | `ReactNode`           | `'The password must include:'` | Text displayed before password hints                              |
| `hideSeparator`     | `boolean`             | -                              | Whether to hide the separator line above hints                    |
| `onChange`          | `(event) => void`     | `noop`                         | Change event handler                                              |
| `wrapperProps`      | `object`              | -                              | Additional props for the wrapper element                          |

### PasswordHint Interface

| Prop    | Type     | Description                                     |
| ------- | -------- | ----------------------------------------------- |
| `label` | `string` | Display text for the password hint              |
| `regex` | `string` | Regular expression pattern to validate the hint |

## Usage Examples

### Basic Password Field

```tsx
import PasswordField from '@fil-react-components/password-field';

// Simple password field
<PasswordField label="Password" />;
```

### Create Password with Hints

```tsx
<PasswordField
  label="Create Password"
  passwordType="create"
  passwordHints={[
    { label: 'At least one uppercase character', regex: '(?=.*[A-Z])' },
    { label: 'At least one number', regex: '(?=.*[0-9])' },
    {
      label: 'At least one special character',
      regex: '[!@#$%^&*(),.?":{}|<>]',
    },
    { label: '8-16 characters', regex: '(?=.{8,}$)' },
  ]}
/>
```

### Enter Password with Hints

```tsx
<PasswordField
  label="Enter Password"
  type="password"
  passwordType="enter"
  passwordHints={[
    { label: 'At least one uppercase character', regex: '(?=.*[A-Z])' },
    { label: 'At least one number', regex: '(?=.*[0-9])' },
    {
      label: 'At least one special character',
      regex: '[!@#$%^&*(),.?":{}|<>]',
    },
    { label: '8-16 characters', regex: '(?=.{8,}$)' },
  ]}
/>
```

### Controlled Password Field

```tsx
const [password, setPassword] = useState('');

<PasswordField
  label="Password"
  inputValue={password}
  onChange={(e) => setPassword(e.target.value)}
/>;
```

### With Custom Enter Password Text

```tsx
<PasswordField
  label="Confirm Password"
  passwordType="enter"
  enterPasswordText="Password requirements:"
  passwordHints={[
    { label: 'Minimum 8 characters', regex: '.{8,}' },
    { label: 'At least one uppercase letter', regex: '(?=.*[A-Z])' },
    { label: 'At least one number', regex: '(?=.*[0-9])' },
  ]}
/>
```

### Without Separator

```tsx
<PasswordField
  label="Password"
  hideSeparator
  passwordHints={[{ label: 'At least 8 characters', regex: '.{8,}' }]}
/>
```

## Features

### Accessibility

- Proper input labeling and ARIA attributes
- Keyboard navigation support for visibility toggle
- Screen reader friendly hint validation feedback
- Focus management and visual indicators
- Semantic HTML structure

### Styling

- Styled-components integration with theme provider
- Password hint validation states with color changes
- Responsive tooltip-style hint display
- Custom className support for additional styling
- Theme-based colors and spacing

### State Management

- Controlled and uncontrolled input support
- Password visibility toggle with icon changes
- Real-time password hint validation
- Input value synchronization

### Security

- Automatic password input type management
- Browser password reveal prevention (hides browser's built-in reveal buttons)
- Secure input handling with proper masking

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

- Create password field with validation hints
- Enter password field with validation hints
- Password field configurations with different hint types

## Data Attributes

- `data-frc="password-field"` - Applied to the password field wrapper

## CSS Classes

- `fil-text-field` - Base text field class
- `fil-text-field__password-hints` - Password hints container
- `fil-text-field__password-intro` - Introduction text for hints
- `fil-text-field__enter-password` - Enter password hints tooltip
- `fil-text-field__create-password` - Create password hints container
- `fil-text-field__password-hint` - Individual password hint
- `fil-text-field__password-hint.active` - Active/valid password hint
- `fil-text-field__view-btn` - Password visibility toggle button

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
PasswordField/
├── src/
│   ├── PasswordField.tsx          # Main password field component
│   ├── PasswordField.style.ts     # Password field styles with theme integration
│   ├── PasswordField.mock.tsx     # Mock configurations for testing
│   ├── PasswordField.stories.tsx  # Storybook stories
│   ├── index.ts                   # Main exports
│   └── tests/
│       ├── PasswordField.test.tsx    # Unit tests
│       ├── PasswordField.ct.tsx      # Component tests
│       └── __snapshots__/            # Jest snapshots
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### User Registration Form

```tsx
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');

<form>
  <PasswordField
    label="Create Password"
    inputValue={password}
    onChange={(e) => setPassword(e.target.value)}
    passwordType="create"
    passwordHints={[
      { label: 'At least 8 characters', regex: '.{8,}' },
      { label: 'At least one uppercase letter', regex: '(?=.*[A-Z])' },
      { label: 'At least one lowercase letter', regex: '(?=.*[a-z])' },
      { label: 'At least one number', regex: '(?=.*[0-9])' },
      {
        label: 'At least one special character',
        regex: '[!@#$%^&*(),.?":{}|<>]',
      },
    ]}
  />

  <PasswordField
    label="Confirm Password"
    inputValue={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
    passwordType="enter"
    passwordHints={[{ label: 'Matches password above', regex: password }]}
  />
</form>;
```

### Login Form

```tsx
const [password, setPassword] = useState('');

<PasswordField
  label="Password"
  type="password"
  inputValue={password}
  onChange={(e) => setPassword(e.target.value)}
  autoComplete="current-password"
/>;
```

### Password Reset Form

```tsx
<PasswordField
  label="New Password"
  passwordType="create"
  enterPasswordText="Your new password must contain:"
  passwordHints={[
    { label: 'Minimum 12 characters', regex: '.{12,}' },
    { label: 'At least one uppercase letter', regex: '(?=.*[A-Z])' },
    { label: 'At least one lowercase letter', regex: '(?=.*[a-z])' },
    { label: 'At least one number', regex: '(?=.*[0-9])' },
    { label: 'At least one special character (!@#$%^&*)', regex: '[!@#$%^&*]' },
  ]}
/>
```

## Best Practices

1. **Use appropriate password hints** - Provide clear, actionable password requirements
2. **Choose correct password type** - Use 'create' for new passwords, 'enter' for existing ones
3. **Provide meaningful labels** - Use descriptive labels that indicate the password purpose
4. **Consider security** - Use strong password requirements appropriate for your use case
5. **Test accessibility** - Ensure password hints work with screen readers
6. **Handle validation** - Use the built-in hint validation for real-time feedback
7. **Use controlled inputs** - For better state management in forms
8. **Set proper autocomplete** - Use appropriate autocomplete attributes for better UX
9. **Consider mobile users** - Ensure the visibility toggle is easily accessible on mobile
10. **Validate on server** - Always validate passwords on the server side as well

## Migration Notes

### From older versions:

- Ensure you have the required peer dependencies installed
- The component now requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling
- Password hints now use regex patterns for validation
- Component extends TextField and inherits all its props
- Browser password reveal buttons are now hidden by default

## Related Components

- `@fil-react-components/text-field` - Base text input component (extended by PasswordField)
- `@fil-react-components/button` - Used for visibility toggle button
- `@fil-react-components/streamline-icon` - Used for visibility toggle icons
- `@fil-react-components/paragraph` - Used for hint text rendering
- `@fil-react-components/theme-provider` - Required for styling and theming</content>
  <parameter name="filePath">c:\Users\A744601\Documents\codebase\TAPP101992-fil-react-components\metadata\PasswordField-2.12.26.md
