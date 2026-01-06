# Form Component Documentation

## Overview

The Form component provides a comprehensive form management solution built on top of Formik, offering seamless state management, validation, and error handling. It follows the GDS (Global Design System) standards and integrates deeply with other FIL React components through the `withField` higher-order component. The component supports both Yup schema validation and custom validation functions, making it suitable for complex form scenarios.

## Package Information

- **Package Name**: `@fil-react-components/form`
- **Version**: 3.4.1
- **Description**: Form Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/form
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/field-error`: ^1.8.11
- `@fil-react-components/input`: ^2.12.11
- `@fil-react-components/label`: ^2.9.11
- `@fil-react-components/paragraph`: ^2.10.9
- `@fil-react-components/streamline-icon`: ^2.15.6
- `@fil-react-components/svg-icons`: ^1.9.0
- `@fil-react-components/with-styles`: ^2.7.8
- `@fil-react-utils/common`: ^1.14.1
- `classnames`: ^2.5.1
- `formik`: ^2.2.9
- `yup`: 0.32.11
- `lodash`: ^4.17.21

## Exports

```typescript
import Form, {
  FormProps,
  FormFieldArray,
  FormikProps,
  withField,
} from '@fil-react-components/form';
```

### Available Exports:

- `Form` (default export) - Main form component with Formik integration
- `FormProps` - TypeScript interface for Form component props
- `FormFieldArray` - Formik FieldArray component for dynamic arrays
- `FormikProps` - Formik props interface
- `withField` - Higher-order component for wrapping form fields

## Component Structure

### Main Component: Form

A powerful form wrapper component that integrates Formik for state management and provides seamless validation and error handling.

### Component Variations:

1. **Standard Form** - Basic form with field wrapping and validation
2. **Debug Form** - Form with debug information display
3. **Custom Render Form** - Form with custom render functions
4. **Controlled Form** - Form with external state management

### Component Features:

- **Formik Integration**: Full Formik state management and lifecycle
- **Validation Support**: Yup schema and custom validation functions
- **Field Wrapping**: `withField` HOC for automatic field integration
- **Error Handling**: Comprehensive error display and validation feedback
- **Debug Mode**: Development debugging with form state display
- **Custom Rendering**: Support for custom render functions and children
- **Accessibility**: Full keyboard navigation and screen reader support
- **Theme Integration**: Styled-components with theme provider

### Component Hierarchy:

```
Form (Formik Provider)
├── FormWrapper (HTML form element)
│   ├── Field Wrappers (withField HOC)
│   │   ├── Labels
│   │   ├── Inputs/Components
│   │   ├── Error Messages
│   │   └── Status Icons
│   └── Custom Children/Render Functions
└── Debug Panel (optional)
```

## Props

### FormProps<Values>

| Prop                  | Type                                                                             | Default | Description                                       |
| --------------------- | -------------------------------------------------------------------------------- | ------- | ------------------------------------------------- |
| `className`           | `string`                                                                         | -       | Additional CSS class names                        |
| `handleSubmit`        | `(values: Values, formikHelpers: FormikHelpers<Values>) => void \| Promise<any>` | -       | **Required** - Form submission handler            |
| `handleReset`         | `(values: Values, formikHelpers: FormikHelpers<Values>) => void`                 | -       | Form reset handler                                |
| `action`              | `string`                                                                         | -       | HTML form action attribute                        |
| `initialValues`       | `Values`                                                                         | -       | **Required** - Initial form values                |
| `children`            | `ReactNode \| ((props: FormikProps<Values>) => ReactNode)`                       | -       | Form children or render function                  |
| `debug`               | `boolean`                                                                        | `false` | Enable debug mode with form state display         |
| `validate`            | `(values: Values) => void \| object \| Promise<FormikErrors<Values>>`            | -       | Custom validation function                        |
| `validateOnChange`    | `boolean`                                                                        | `true`  | Validate on field change                          |
| `validateOnBlur`      | `boolean`                                                                        | `true`  | Validate on field blur                            |
| `validateOnMount`     | `boolean`                                                                        | `false` | Validate on component mount                       |
| `formWrapperProps`    | `Omit<FormikConfig<Values>, 'initialValues' \| 'onSubmit'>`                      | `{}`    | Additional Formik configuration                   |
| `schema`              | `Record<string, unknown>`                                                        | -       | Plain object validation schema (converted to Yup) |
| `validationSchema`    | `any`                                                                            | -       | Yup validation schema object                      |
| `yupValidationSchema` | `any \| (() => any)`                                                             | -       | Yup schema or schema factory function             |
| `formRenderFunc`      | `(props: FormikProps<Values>) => ReactNode`                                      | -       | Custom form render function                       |

### WithFieldProps

| Prop                    | Type                    | Default      | Description                          |
| ----------------------- | ----------------------- | ------------ | ------------------------------------ |
| `variation`             | `string`                | -            | Field variation/grouping class       |
| `className`             | `string`                | -            | Additional CSS class names           |
| `customErrorMessage`    | `React.ComponentType`   | -            | Custom error message component       |
| `isErrorPlacementOnTop` | `boolean`               | `true`       | Place error messages above field     |
| `errorTheme`            | `'border' \| 'none'`    | `'border'`   | Error styling theme                  |
| `isStatusIconSuccess`   | `boolean`               | `true`       | Show success status icon             |
| `isStatusIconError`     | `boolean`               | `true`       | Show error status icon               |
| `isRequired`            | `boolean`               | `false`      | Mark field as required               |
| `label`                 | `React.ReactNode`       | -            | Field label text/element             |
| `id`                    | `string`                | -            | HTML id attribute                    |
| `assistiveText`         | `React.ReactNode`       | -            | Helper text below field              |
| `name`                  | `string`                | -            | **Required** - Field name for Formik |
| `inputClassName`        | `string`                | -            | CSS class for input element          |
| `size`                  | `'small' \| 'standard'` | `'standard'` | Field size variant                   |
| `errorBGColor`          | `string`                | -            | Background color for error state     |

## Usage Examples

### Basic Form with Field Wrapping

```tsx
import Form, { withField } from '@fil-react-components/form';
import TextField from '@fil-react-components/text-field';
import { PrimaryButton } from '@fil-react-components/button';

const TextInput = withField(TextField);

interface FormValues {
  firstName: string;
  email: string;
}

const MyForm = () => (
  <Form<FormValues>
    initialValues={{ firstName: '', email: '' }}
    validationSchema={Yup.object({
      firstName: Yup.string().required('First name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
    })}
    handleSubmit={(values) => console.log('Submitted:', values)}
  >
    <TextInput name="firstName" label="First Name" />
    <TextInput name="email" label="Email" type="email" />
    <PrimaryButton type="submit">Submit</PrimaryButton>
  </Form>
);
```

### Form with Custom Validation

```tsx
const customValidation = (values: FormValues) => {
  const errors: Partial<FormValues> = {};
  if (!values.firstName) {
    errors.firstName = 'First name is required';
  }
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!values.email.includes('@')) {
    errors.email = 'Invalid email format';
  }
  return errors;
};

<Form<FormValues>
  initialValues={{ firstName: '', email: '' }}
  validate={customValidation}
  handleSubmit={handleSubmit}
>
  <TextInput name="firstName" label="First Name" />
  <TextInput name="email" label="Email" />
  <PrimaryButton type="submit">Submit</PrimaryButton>
</Form>;
```

### Form with Schema Validation

```tsx
const validationSchema = {
  firstName: {
    required: 'First name is required',
    min: [2, 'Must be at least 2 characters'],
    max: [50, 'Must be less than 50 characters'],
  },
  email: {
    required: 'Email is required',
    email: 'Invalid email address',
  },
};

<Form<FormValues>
  initialValues={{ firstName: '', email: '' }}
  schema={validationSchema}
  handleSubmit={handleSubmit}
>
  <TextInput name="firstName" label="First Name" />
  <TextInput name="email" label="Email" />
  <PrimaryButton type="submit">Submit</PrimaryButton>
</Form>;
```

### Form with Yup Schema

```tsx
import * as Yup from 'yup';

const yupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

<Form<FormValues>
  initialValues={{ firstName: '', email: '' }}
  yupValidationSchema={yupSchema}
  handleSubmit={handleSubmit}
>
  <TextInput name="firstName" label="First Name" />
  <TextInput name="email" label="Email" />
  <PrimaryButton type="submit">Submit</PrimaryButton>
</Form>;
```

### Form with Debug Mode

```tsx
<Form<FormValues>
  initialValues={{ firstName: '', email: '' }}
  validationSchema={yupSchema}
  handleSubmit={handleSubmit}
  debug={true} // Shows form state in development
>
  <TextInput name="firstName" label="First Name" />
  <TextInput name="email" label="Email" />
  <PrimaryButton type="submit">Submit</PrimaryButton>
</Form>
```

### Form with Custom Render Function

```tsx
const customRender = (formikProps: FormikProps<FormValues>) => (
  <div>
    <TextInput name="firstName" label="First Name" />
    <TextInput name="email" label="Email" />
    <p>Form is {formikProps.isValid ? 'valid' : 'invalid'}</p>
    <PrimaryButton type="submit" disabled={!formikProps.isValid}>
      Submit
    </PrimaryButton>
  </div>
);

<Form<FormValues>
  initialValues={{ firstName: '', email: '' }}
  validationSchema={yupSchema}
  handleSubmit={handleSubmit}
  formRenderFunc={customRender}
/>;
```

### Form with Field Arrays

```tsx
import { FormFieldArray } from '@fil-react-components/form';

interface FriendsForm {
  friends: string[];
}

<Form<FriendsForm>
  initialValues={{ friends: ['Alice'] }}
  yupValidationSchema={Yup.object({
    friends: Yup.array().of(Yup.string().required('Friend name required')),
  })}
  handleSubmit={handleSubmit}
>
  <FormFieldArray name="friends">
    {({ push, remove, form: { values } }) => (
      <div>
        {values.friends.map((_, index) => (
          <div key={index}>
            <TextInput
              name={`friends.${index}`}
              label={`Friend ${index + 1}`}
            />
            <button type="button" onClick={() => remove(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={() => push('')}>
          Add Friend
        </button>
      </div>
    )}
  </FormFieldArray>
  <PrimaryButton type="submit">Submit</PrimaryButton>
</Form>;
```

### Form with Various Field Types

```tsx
import Select from '@fil-react-components/select-box';
import Checkbox from '@fil-react-components/checkbox';
import RadioGroup from '@fil-react-components/radio-group';
import DatePicker from '@fil-react-components/date-picker';

const SelectField = withField(Select);
const CheckboxField = withField(Checkbox);
const RadioGroupField = withField(RadioGroup);
const DatePickerField = withField(DatePicker);

interface ComplexForm {
  name: string;
  type: string;
  agree: boolean;
  gender: string;
  birthDate: Date;
}

<Form<ComplexForm>
  initialValues={{
    name: '',
    type: '',
    agree: false,
    gender: '',
    birthDate: new Date(),
  }}
  validationSchema={validationSchema}
  handleSubmit={handleSubmit}
>
  <TextInput name="name" label="Full Name" />
  <SelectField
    name="type"
    label="User Type"
    options={[
      { label: 'Admin', value: 'admin' },
      { label: 'User', value: 'user' },
    ]}
  />
  <CheckboxField name="agree" label="I agree to terms" />
  <RadioGroupField name="gender" label="Gender">
    <RadioButton label="Male" value="male" />
    <RadioButton label="Female" value="female" />
  </RadioGroupField>
  <DatePickerField name="birthDate" label="Birth Date" />
  <PrimaryButton type="submit">Submit</PrimaryButton>
</Form>;
```

### Form with Error Background Color

```tsx
<Form<FormValues>
  initialValues={{ firstName: '', email: '' }}
  validationSchema={yupSchema}
  handleSubmit={handleSubmit}
>
  <TextInput name="firstName" label="First Name" errorBGColor="blue.050" />
  <TextInput name="email" label="Email" errorBGColor="red.050" />
  <PrimaryButton type="submit">Submit</PrimaryButton>
</Form>
```

## Features

### Formik Integration

- **State Management**: Automatic form state handling with Formik
- **Field Integration**: Seamless field registration and updates
- **Validation**: Built-in validation with multiple strategies
- **Submission**: Controlled submission with loading states
- **Reset**: Form reset functionality with initial values

### Validation Strategies

- **Yup Schemas**: Full Yup validation schema support
- **Custom Functions**: Flexible custom validation functions
- **Schema Objects**: Plain object validation converted to Yup
- **Async Validation**: Support for asynchronous validation
- **Field-Level**: Individual field validation rules

### Field Wrapping (withField HOC)

- **Automatic Integration**: Fields automatically connect to Formik
- **Error Display**: Smart error message positioning and styling
- **Status Icons**: Success/error status indicators
- **Label Association**: Proper label-input relationships
- **Accessibility**: ARIA attributes and keyboard navigation

### Error Handling

- **Field Errors**: Individual field validation errors
- **Form Errors**: Global form-level error handling
- **Error Themes**: Border and background error styling
- **Custom Messages**: Custom error message components
- **Error Placement**: Configurable error message positioning

### Accessibility

- **Form Semantics**: Proper form element structure
- **Field Association**: Labels correctly associated with inputs
- **Error Announcements**: Screen reader error announcements
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Proper focus handling and indicators

### Styling

- **Theme Integration**: Consistent with GDS design system
- **Custom Styling**: CSS class support for customization
- **Error States**: Visual error state styling
- **Success States**: Visual success state indicators
- **Responsive Design**: Mobile-friendly form layouts

## Testing

The component includes:

- Unit tests using Jest
- Component tests using Playwright
- Accessibility testing with axe-devtools
- Formik integration testing
- Validation testing
- Field wrapping testing

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

- Basic form with various field types
- Form with custom render functions
- Form with field arrays
- Error focus management
- Error background color configuration
- Debug mode forms
- Controlled form patterns

## Data Attributes

- `data-frc="form"` - Applied to the main form element
- `data-frc="with-field"` - Applied to field wrapper elements

## CSS Classes

- `field-wrapper` - Main field wrapper container
- `field-wrapper__col` - Field wrapper column
- `field-wrapper__label` - Field label element
- `field-wrapper__assistive-text` - Assistive/helper text
- `field-item` - Field input container
- `field-wrapper--error` - Error state wrapper
- `field-wrapper--error-border` - Border error theme
- `field-wrapper--validation-icon` - Validation icon container
- `field-error--top` - Error message positioned above field
- `field-error--bottom` - Error message positioned below field
- `fil-field-icon` - Status icon (success/error)

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
Form/
├── src/
│   ├── buildValidationSchema.ts     # Schema validation builder
│   ├── ComponentsStories/           # Storybook component stories
│   ├── Debug/                       # Debug component
│   ├── Example/                     # Example implementations
│   ├── Form.mock.ts                 # Mock data for testing
│   ├── Form.stories.tsx             # Storybook stories
│   ├── Form.style.ts                # Form styling
│   ├── Form.tsx                     # Main form component
│   ├── index.ts                     # Main exports
│   ├── WithField/
│   │   ├── index.ts                 # WithField exports
│   │   ├── tests/                   # WithField tests
│   │   ├── withField.style.ts       # WithField styling
│   │   └── withField.tsx            # WithField HOC
│   └── tests/
│       ├── buildValidationSchema.test.js # Schema builder tests
│       ├── Form.ct.tsx              # Component tests
│       ├── Form.test.tsx            # Unit tests
│       ├── FormWrapper.tsx          # Test wrapper
│       └── __snapshots__/           # Snapshot files
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### User Registration Form

```tsx
const RegistrationForm = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name required'),
    lastName: Yup.string().required('Last name required'),
    email: Yup.string().email('Invalid email').required('Email required'),
    password: Yup.string()
      .min(8, 'Password too short')
      .required('Password required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm password required'),
    agreeToTerms: Yup.boolean().oneOf([true], 'Must accept terms'),
  });

  return (
    <Form
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
      }}
      yupValidationSchema={validationSchema}
      handleSubmit={handleRegistration}
    >
      <TextInput name="firstName" label="First Name" />
      <TextInput name="lastName" label="Last Name" />
      <TextInput name="email" label="Email" type="email" />
      <TextInput name="password" label="Password" type="password" />
      <TextInput
        name="confirmPassword"
        label="Confirm Password"
        type="password"
      />
      <CheckboxField
        name="agreeToTerms"
        label="I agree to the terms and conditions"
      />
      <PrimaryButton type="submit">Register</PrimaryButton>
    </Form>
  );
};
```

### Contact Form with Validation

```tsx
const ContactForm = () => {
  return (
    <Form
      initialValues={{
        name: '',
        email: '',
        subject: '',
        message: '',
      }}
      schema={{
        name: { required: 'Name is required' },
        email: { required: 'Email is required', email: 'Invalid email' },
        subject: { required: 'Subject is required' },
        message: {
          required: 'Message is required',
          min: [10, 'Message too short'],
        },
      }}
      handleSubmit={handleContactSubmit}
    >
      <TextInput name="name" label="Name" />
      <TextInput name="email" label="Email" type="email" />
      <TextInput name="subject" label="Subject" />
      <TextArea name="message" label="Message" />
      <PrimaryButton type="submit">Send Message</PrimaryButton>
    </Form>
  );
};
```

### Dynamic Form with Field Arrays

```tsx
const DynamicForm = () => {
  const schema = Yup.object().shape({
    projectName: Yup.string().required('Project name required'),
    teamMembers: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required('Member name required'),
        role: Yup.string().required('Role required'),
      })
    ),
  });

  return (
    <Form
      initialValues={{
        projectName: '',
        teamMembers: [{ name: '', role: '' }],
      }}
      yupValidationSchema={schema}
      handleSubmit={handleProjectSubmit}
    >
      <TextInput name="projectName" label="Project Name" />

      <FormFieldArray name="teamMembers">
        {({ push, remove, form: { values } }) => (
          <div>
            <h3>Team Members</h3>
            {values.teamMembers.map((_, index) => (
              <div key={index} className="member-row">
                <TextInput
                  name={`teamMembers.${index}.name`}
                  label={`Member ${index + 1} Name`}
                />
                <TextInput
                  name={`teamMembers.${index}.role`}
                  label={`Member ${index + 1} Role`}
                />
                <button type="button" onClick={() => remove(index)}>
                  Remove
                </button>
              </div>
            ))}
            <button type="button" onClick={() => push({ name: '', role: '' })}>
              Add Team Member
            </button>
          </div>
        )}
      </FormFieldArray>

      <PrimaryButton type="submit">Create Project</PrimaryButton>
    </Form>
  );
};
```

### Multi-Step Form

```tsx
const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <Form
      initialValues={{
        personalInfo: { firstName: '', lastName: '' },
        contactInfo: { email: '', phone: '' },
        preferences: { newsletter: false, notifications: false },
      }}
      validationSchema={getValidationSchemaForStep(step)}
      handleSubmit={handleFinalSubmit}
    >
      {step === 1 && (
        <div>
          <h2>Personal Information</h2>
          <TextInput name="personalInfo.firstName" label="First Name" />
          <TextInput name="personalInfo.lastName" label="Last Name" />
          <button type="button" onClick={nextStep}>
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Contact Information</h2>
          <TextInput name="contactInfo.email" label="Email" />
          <TextInput name="contactInfo.phone" label="Phone" />
          <button type="button" onClick={prevStep}>
            Previous
          </button>
          <button type="button" onClick={nextStep}>
            Next
          </button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Preferences</h2>
          <CheckboxField
            name="preferences.newsletter"
            label="Subscribe to newsletter"
          />
          <CheckboxField
            name="preferences.notifications"
            label="Enable notifications"
          />
          <button type="button" onClick={prevStep}>
            Previous
          </button>
          <PrimaryButton type="submit">Submit</PrimaryButton>
        </div>
      )}
    </Form>
  );
};
```

### Form with Async Validation

```tsx
const AsyncValidationForm = () => {
  const validateEmail = async (value: string) => {
    if (!value) return 'Email is required';
    // Simulate API call
    const response = await fetch(`/api/check-email?email=${value}`);
    const data = await response.json();
    if (!data.available) {
      return 'Email is already taken';
    }
  };

  return (
    <Form
      initialValues={{ email: '' }}
      validate={async (values) => {
        const errors: any = {};
        if (values.email) {
          errors.email = await validateEmail(values.email);
        }
        return errors;
      }}
      handleSubmit={handleSubmit}
    >
      <TextInput name="email" label="Email" type="email" />
      <PrimaryButton type="submit">Check Availability</PrimaryButton>
    </Form>
  );
};
```

## Best Practices

1. **Use TypeScript interfaces** - Define clear form value types for better type safety
2. **Choose appropriate validation** - Use Yup for complex schemas, custom functions for simple validation
3. **Wrap fields with withField** - Always use the HOC for proper Formik integration
4. **Provide meaningful labels** - Clear, descriptive labels improve accessibility
5. **Handle loading states** - Show loading indicators during form submission
6. **Validate on appropriate events** - Use validateOnBlur for better UX
7. **Use field arrays for dynamic forms** - FormFieldArray for variable-length field lists
8. **Test form interactions** - Include form submission and validation in tests
9. **Consider accessibility** - Ensure proper focus management and error announcements
10. **Handle form reset** - Implement proper reset functionality when needed

## Migration Notes

### General Migration:

- Ensure you have the required peer dependencies installed
- The component requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling
- React 16.14.0+ is required
- Formik v2.2.9+ is required for full compatibility

### Recent Updates:

- Added `errorBGColor` prop for custom error background colors (v3.3.0)
- Added `data-frc` attributes for component identification
- Enhanced error handling and validation feedback

### Breaking Changes:

- Ensure `initialValues` and `handleSubmit` props are always provided
- Custom validation functions should return error objects matching field names
- Field components must be wrapped with `withField` for proper integration

## Related Components

- `@fil-react-components/text-field` - Text input component
- `@fil-react-components/select-box` - Select dropdown component
- `@fil-react-components/checkbox` - Checkbox input component
- `@fil-react-components/radio-group` - Radio button group component
- `@fil-react-components/date-picker` - Date selection component
- `@fil-react-components/field-error` - Error message display component
- `@fil-react-components/label` - Form label component
- `@fil-react-components/button` - Form action buttons
- `@fil-react-components/theme-provider` - Theme provider for styling
