# Input Component Documentation

## Overview

The Input component provides styled HTML input elements with comprehensive theming, validation states, and accessibility features following the GDS (Global Design System) standards. It supports all standard HTML input types with additional styling variants for size, validation states, and text alignment. The component integrates seamlessly with the theme provider and form validation systems.

## Package Information

- **Package Name**: `@fil-react-components/input`
- **Version**: 2.12.11
- **Description**: Input Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/input
```

## Peer Dependencies

- `@fil-global/gds-tokens`: ^2.1.2
- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/with-styles`: ^2.7.8
- `@fil-react-mixins/styled`: ^2.7.1
- `classnames`: ^2.5.1

## Dev Dependencies

- `@fil-react-components/grid`: ^2.9.11
- `@fil-react-components/heading`: ^2.11.10
- `@fil-react-utils/testing`: ^1.12.4

## Exports

```typescript
import Input, {
  InputProps,
  CommonStyles,
  InputStyles,
} from '@fil-react-components/input';
```

### Available Exports:

- `Input` (default export) - Main input component
- `InputProps` - TypeScript interface for Input component props
- `CommonStyles` - Common input styling constants
- `InputStyles` - Main input styling with theme integration

## Component Structure

### Main Component: Input

A styled HTML input element with comprehensive theming and validation support.

### Component Features:

- **HTML Input Types**: Support for all standard HTML input types (text, email, password, number, etc.)
- **Size Variants**: Small, medium, large, and standard sizes
- **Validation States**: Info, warning, valid, and invalid states with visual indicators
- **Text Alignment**: Left and right text alignment options
- **Controlled/Uncontrolled**: Support for both controlled and uncontrolled usage
- **Theme Integration**: Full integration with GDS theme provider
- **Accessibility**: Proper ARIA attributes and keyboard navigation

### Component Hierarchy:

```
Input Component
├── input element
│   ├── GDS styling and theming
│   ├── Validation state styling
│   ├── Size variant styling
│   ├── data-frc attribute
│   └── Standard HTML input attributes
```

## Props

### InputProps

| Prop            | Type                                           | Default      | Description                                                                      |
| --------------- | ---------------------------------------------- | ------------ | -------------------------------------------------------------------------------- |
| `className`     | `string`                                       | -            | Additional CSS class names                                                       |
| `disabled`      | `boolean`                                      | `false`      | Disables the input element                                                       |
| `forwardRef`    | `Function \| Object`                           | -            | Ref forwarding for input element                                                 |
| `size`          | `'standard' \| 'small' \| 'medium' \| 'large'` | `'standard'` | Size variant of the input                                                        |
| `name`          | `string`                                       | -            | Name attribute for form submission                                               |
| `isControlled`  | `boolean`                                      | -            | Whether the input is controlled (uses value) or uncontrolled (uses defaultValue) |
| `validation`    | `'info' \| 'warning' \| 'valid' \| 'invalid'`  | -            | Validation state with visual styling                                             |
| `textAlign`     | `'left' \| 'right'`                            | `'left'`     | Text alignment within the input                                                  |
| `type`          | `string`                                       | `'text'`     | HTML input type (text, email, password, number, etc.)                            |
| `value`         | `string \| number \| readonly string[]`        | -            | Controlled input value                                                           |
| `...extraProps` | `React.InputHTMLAttributes<HTMLInputElement>`  | -            | All standard HTML input attributes                                               |

## Usage Examples

### Basic Text Input

```tsx
import Input from '@fil-react-components/input';

<Input type="text" placeholder="Enter your name" aria-label="Full name" />;
```

### Email Input with Validation

```tsx
<Input
  type="email"
  placeholder="Enter your email"
  validation="invalid"
  aria-label="Email address"
  aria-describedby="email-error"
/>
```

### Controlled Input

```tsx
const [value, setValue] = useState('');

<Input
  type="text"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  isControlled={true}
  aria-label="Controlled input"
/>;
```

### Password Input

```tsx
<Input
  type="password"
  placeholder="Enter your password"
  aria-label="Password"
/>
```

### Number Input with Size Variants

```tsx
<Input
  type="number"
  size="small"
  placeholder="Age"
  min="0"
  max="120"
  aria-label="Age"
/>

<Input
  type="number"
  size="medium"
  placeholder="Quantity"
  min="1"
  max="100"
  aria-label="Quantity"
/>

<Input
  type="number"
  size="large"
  placeholder="Amount"
  min="0"
  step="0.01"
  aria-label="Amount"
/>
```

### Search Input

```tsx
<Input type="search" placeholder="Search..." aria-label="Search" />
```

### Date Input

```tsx
<Input type="date" aria-label="Select date" />
```

### Right-Aligned Text Input

```tsx
<Input
  type="text"
  textAlign="right"
  placeholder="Numeric value"
  aria-label="Right-aligned input"
/>
```

### Disabled Input

```tsx
<Input
  type="text"
  disabled
  value="Disabled input"
  aria-label="Disabled input"
/>
```

### Form with Multiple Inputs

```tsx
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <form>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Input
          id="firstName"
          type="text"
          value={formData.firstName}
          onChange={handleChange('firstName')}
          isControlled={true}
        />
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <Input
          id="lastName"
          type="text"
          value={formData.lastName}
          onChange={handleChange('lastName')}
          isControlled={true}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange('email')}
          isControlled={true}
        />
      </div>

      <div>
        <label htmlFor="phone">Phone</label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange('phone')}
          isControlled={true}
        />
      </div>
    </form>
  );
};
```

### Input with Validation States

```tsx
const ValidatedInput = ({ value, validation, errorMessage }) => (
  <div>
    <Input
      type="email"
      value={value}
      validation={validation}
      isControlled={true}
      aria-describedby={errorMessage ? 'error-message' : undefined}
      aria-invalid={validation === 'invalid'}
    />
    {errorMessage && (
      <span id="error-message" role="alert">
        {errorMessage}
      </span>
    )}
  </div>
);
```

### Search Form

```tsx
const SearchForm = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform search
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-input-container">
        <Input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for products..."
          isControlled={true}
          aria-label="Search"
        />
        <button type="submit">Search</button>
      </div>
    </form>
  );
};
```

### Numeric Input with Stepper

```tsx
const QuantityInput = ({ quantity, onChange, min = 1, max = 99 }) => {
  const handleIncrement = () => {
    if (quantity < max) {
      onChange(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > min) {
      onChange(quantity - 1);
    }
  };

  return (
    <div className="quantity-input">
      <button
        type="button"
        onClick={handleDecrement}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
      >
        -
      </button>

      <Input
        type="number"
        value={quantity}
        onChange={(e) => onChange(Number(e.target.value))}
        min={min}
        max={max}
        isControlled={true}
        aria-label="Quantity"
      />

      <button
        type="button"
        onClick={handleIncrement}
        disabled={quantity >= max}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};
```

### Range Slider Input

```tsx
const RangeInput = ({ value, onChange, min = 0, max = 100, step = 1 }) => (
  <div className="range-input">
    <Input
      type="range"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      min={min}
      max={max}
      step={step}
      isControlled={true}
      aria-label="Range slider"
    />
    <span className="range-value">{value}</span>
  </div>
);
```

### Color Picker Input

```tsx
const ColorInput = ({ color, onChange }) => (
  <div className="color-input">
    <Input
      type="color"
      value={color}
      onChange={(e) => onChange(e.target.value)}
      isControlled={true}
      aria-label="Choose color"
    />
    <span className="color-preview" style={{ backgroundColor: color }}>
      {color}
    </span>
  </div>
);
```

### Date and Time Inputs

```tsx
const DateTimeForm = () => (
  <div className="datetime-form">
    <div>
      <label htmlFor="birthdate">Birth Date</label>
      <Input id="birthdate" type="date" aria-label="Birth date" />
    </div>

    <div>
      <label htmlFor="appointment">Appointment Time</label>
      <Input
        id="appointment"
        type="datetime-local"
        aria-label="Appointment date and time"
      />
    </div>

    <div>
      <label htmlFor="meeting-time">Meeting Time</label>
      <Input id="meeting-time" type="time" aria-label="Meeting time" />
    </div>
  </div>
);
```

### URL Input with Validation

```tsx
const WebsiteInput = ({ value, onChange, validation }) => (
  <div>
    <label htmlFor="website">Website</label>
    <Input
      id="website"
      type="url"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      validation={validation}
      placeholder="https://example.com"
      isControlled={true}
      aria-label="Website URL"
    />
    {validation === 'invalid' && (
      <span className="error-message">Please enter a valid URL</span>
    )}
  </div>
);
```

## Features

### Input Types

- **Text Input**: Standard text input with placeholder support
- **Email Input**: Email validation and mobile keyboard optimization
- **Password Input**: Masked input for sensitive data
- **Number Input**: Numeric input with min/max/step attributes
- **Search Input**: Search-specific styling and behavior
- **Date/Time Inputs**: Native date/time pickers (date, datetime-local, time, month, week)
- **Color Input**: Native color picker
- **Range Input**: Slider input for numeric ranges
- **URL Input**: URL validation and keyboard optimization
- **Tel Input**: Telephone number input with appropriate keyboard

### Size Variants

- **Small**: Compact input for tight spaces (40px height)
- **Standard**: Default input size (48px height)
- **Medium**: Medium-sized input (48px height)
- **Large**: Large input with increased font size (60px height)

### Validation States

- **Info**: Informational state with blue styling
- **Warning**: Warning state with orange styling
- **Valid**: Success state with green styling
- **Invalid**: Error state with red styling

### Text Alignment

- **Left Alignment**: Default left-aligned text
- **Right Alignment**: Right-aligned text for numeric inputs

### Control Patterns

- **Controlled Inputs**: Explicit value and onChange props
- **Uncontrolled Inputs**: defaultValue for simple use cases
- **Ref Forwarding**: Access to underlying input element

### Accessibility

- **ARIA Labels**: Proper labeling for screen readers
- **Validation Feedback**: ARIA attributes for error states
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Proper focus indicators and behavior

### Styling

- **Theme Integration**: GDS theme provider integration
- **Focus States**: Clear focus indicators
- **Disabled States**: Proper disabled styling
- **Validation Colors**: Consistent validation state colors
- **Typography**: Theme-consistent font sizing and spacing

## Testing

The component includes:

- Unit tests using Jest with snapshot testing
- Component tests using Playwright
- Accessibility testing with axe-devtools
- Validation state testing
- Input type testing

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

- All input types and configurations
- Size variants (small, medium, large)
- Validation states (info, warning, valid, invalid)
- Text alignment options
- Disabled state styling
- Accessibility testing results

## Data Attributes

- `data-frc="input"` - Applied to Input elements

## CSS Classes

- `fil-input` - FIL input class for styling

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
Input/
├── src/
│   ├── Input.tsx              # Main Input component
│   ├── Input.mock.ts          # Mock configurations for testing
│   ├── Input.stories.tsx      # Storybook stories
│   ├── Input.style.ts         # Input styling with theme integration
│   ├── index.ts               # Main exports
│   └── tests/
│       ├── Input.ct.tsx       # Component tests
│       ├── Input.test.tsx     # Unit tests
│       ├── InputWrapper.tsx   # Test wrapper component
│       ├── a11y-results/      # Accessibility test results
│       ├── coverage/          # Test coverage reports
│       └── __snapshots__/     # Snapshot files
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Login Form

```tsx
const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          type="email"
          value={credentials.email}
          onChange={(e) =>
            setCredentials((prev) => ({ ...prev, email: e.target.value }))
          }
          isControlled={true}
          required
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <Input
          id="password"
          type="password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials((prev) => ({ ...prev, password: e.target.value }))
          }
          isControlled={true}
          required
        />
      </div>

      <button type="submit">Login</button>
    </form>
  );
};
```

### Registration Form

```tsx
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthDate: '',
  });

  return (
    <form>
      <div className="form-row">
        <div>
          <label htmlFor="firstName">First Name</label>
          <Input
            id="firstName"
            type="text"
            value={formData.firstName}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, firstName: e.target.value }))
            }
            isControlled={true}
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <Input
            id="lastName"
            type="text"
            value={formData.lastName}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, lastName: e.target.value }))
            }
            isControlled={true}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
          isControlled={true}
        />
      </div>

      <div>
        <label htmlFor="phone">Phone</label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, phone: e.target.value }))
          }
          isControlled={true}
        />
      </div>

      <div>
        <label htmlFor="birthDate">Birth Date</label>
        <Input
          id="birthDate"
          type="date"
          value={formData.birthDate}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, birthDate: e.target.value }))
          }
          isControlled={true}
        />
      </div>
    </form>
  );
};
```

### Search and Filter

```tsx
const SearchAndFilter = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  return (
    <div className="search-filter">
      <div className="search-section">
        <Input
          type="search"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && onSearch(searchTerm)}
          isControlled={true}
          aria-label="Search products"
        />
        <button onClick={() => onSearch(searchTerm)}>Search</button>
      </div>

      <div className="filter-section">
        <label htmlFor="minPrice">Min Price</label>
        <Input
          id="minPrice"
          type="number"
          value={priceRange[0]}
          onChange={(e) =>
            setPriceRange([Number(e.target.value), priceRange[1]])
          }
          min="0"
          isControlled={true}
        />

        <label htmlFor="maxPrice">Max Price</label>
        <Input
          id="maxPrice"
          type="number"
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], Number(e.target.value)])
          }
          min="0"
          isControlled={true}
        />
      </div>
    </div>
  );
};
```

### Settings Form

```tsx
const SettingsForm = () => {
  const [settings, setSettings] = useState({
    username: '',
    email: '',
    notifications: true,
    theme: 'light',
  });

  return (
    <form>
      <section>
        <h3>Profile Settings</h3>

        <div>
          <label htmlFor="username">Username</label>
          <Input
            id="username"
            type="text"
            value={settings.username}
            onChange={(e) =>
              setSettings((prev) => ({ ...prev, username: e.target.value }))
            }
            isControlled={true}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="email"
            value={settings.email}
            onChange={(e) =>
              setSettings((prev) => ({ ...prev, email: e.target.value }))
            }
            isControlled={true}
          />
        </div>
      </section>

      <section>
        <h3>Preferences</h3>

        <div>
          <label htmlFor="theme">Theme</label>
          <Input
            id="theme"
            type="text"
            value={settings.theme}
            onChange={(e) =>
              setSettings((prev) => ({ ...prev, theme: e.target.value }))
            }
            isControlled={true}
          />
        </div>
      </section>
    </form>
  );
};
```

### Calculator Input

```tsx
const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleNumber = (num) => {
    setDisplay(display === '0' ? num.toString() : display + num);
  };

  return (
    <div className="calculator">
      <Input
        type="text"
        value={display}
        textAlign="right"
        readOnly
        isControlled={true}
        aria-label="Calculator display"
      />

      <div className="calculator-buttons">
        {/* Number buttons */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button key={num} onClick={() => handleNumber(num)}>
            {num}
          </button>
        ))}

        {/* Operation buttons */}
        <button onClick={() => setOperation('+')}>+</button>
        <button onClick={() => setOperation('-')}>-</button>
        <button onClick={() => setOperation('*')}>*</button>
        <button onClick={() => setOperation('/')}>/</button>
        <button
          onClick={() => {
            // Calculate result
            const result = calculate(previousValue, Number(display), operation);
            setDisplay(result.toString());
          }}
        >
          =
        </button>
      </div>
    </div>
  );
};
```

## Best Practices

1. **Use appropriate input types** - Choose the most specific input type for better UX and validation
2. **Always provide labels** - Use proper labels or aria-label for accessibility
3. **Implement validation feedback** - Use validation props and ARIA attributes for error states
4. **Consider controlled vs uncontrolled** - Use controlled inputs for complex forms, uncontrolled for simple cases
5. **Provide meaningful placeholders** - Use descriptive placeholder text that helps users
6. **Handle disabled states** - Clearly indicate when inputs are disabled and why
7. **Test across browsers** - Ensure input types work consistently across target browsers
8. **Use proper constraints** - Set min/max/step for numeric inputs, pattern for text inputs
9. **Consider mobile experience** - Ensure inputs work well on touch devices
10. **Provide clear error messages** - Use validation states with descriptive error text

## Migration Notes

### General Migration:

- Ensure you have the required peer dependencies installed
- The component requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling
- GDS tokens package is required for color tokens
- React 16.14.0+ is required

### Recent Updates:

- Added `data-frc` attribute for component identification (v2.12.0)
- Theme provider peer dependency updates for compatibility
- Disabled input colors updated to use GDS tokens (v2.12.5)

### Breaking Changes:

- Verify that your theme provider includes input-related configuration
- Check that GDS tokens package is installed and configured
- Ensure CSS custom properties are available for theme values

### From Previous Versions:

- Component API remains consistent
- Props interface maintained
- Size variants unchanged
- Validation states consistent
- Styling approach maintained with styled-components

## Related Components

- `@fil-react-components/theme-provider` - Theme provider for input styling
- `@fil-react-components/form` - Form components that may contain inputs
- `@fil-react-components/label` - Label components for input labeling
- `@fil-react-components/field-error` - Error message components for validation
- `@fil-react-components/button` - Button components for form submission</content>
  <parameter name="filePath">c:\Users\A744601\Documents\codebase\TAPP101992-fil-react-components\metadata\Input-2.12.11.md
