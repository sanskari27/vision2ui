# Stepper-2.11.0.md

## Overview

The Stepper component is a flexible, accessible step indicator that displays progress through a multi-step process. It supports both horizontal and vertical layouts, compact mode for many steps, and sub-step progress indication. The component follows GDS (Global Design System) standards and provides clear visual feedback for user progress through forms, wizards, or multi-step workflows.

## Package Information

- **Package Name**: `@fil-react-components/stepper`
- **Version**: 2.11.0
- **Description**: Stepper Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/stepper
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/linear-loader`: ^1.5.0
- `@fil-react-mixins/styled`: ^2.7.1
- `classnames`: ^2.5.1

## Exports

```typescript
import Stepper, {
  VerticalStepper,
  ProgressBar,
} from '@fil-react-components/stepper';
```

### Available Exports:

- `Stepper` (default export) - Main horizontal stepper component
- `VerticalStepper` - Vertical layout stepper component
- `ProgressBar` - Progress bar stepper variant

## Component Structure

### Main Component: Stepper

The Stepper component renders a horizontal sequence of steps with numbered indicators, connecting lines, and optional sub-step progress bars.

### Component Variations:

1. **Standard Stepper** - Horizontal layout with numbered steps and connecting lines
2. **Compact Stepper** - Compressed layout for 7+ steps with smaller indicators
3. **Vertical Stepper** - Vertical layout with steps stacked vertically
4. **Progress Bar Stepper** - Linear progress bar variant for step indication

### Component Hierarchy:

```
Stepper (Container)
├── Steps List (Horizontal Flex)
│   └── Step Items
│       ├── Step Indicator (Numbered Circle)
│       │   ├── Number (1, 2, 3...)
│       │   └── Checkmark (for completed steps)
│       ├── Step Label (Text)
│       └── Connecting Line
│           └── Completed Line (Progress Fill)
└── Step Description
    ├── Title ("Step X of Y")
    └── Current Step Label
```

## Props

### StepperProps

| Prop            | Type       | Default      | Description                               |
| --------------- | ---------- | ------------ | ----------------------------------------- |
| `className`     | `string`   | -            | Additional CSS class names                |
| `steps`         | `Step[]`   | **Required** | Array of step objects with labels         |
| `active`        | `number`   | `1`          | Currently active step (1-based index)     |
| `title`         | `Function` | `stepTitle`  | Custom title renderer function            |
| `subSteps`      | `number`   | -            | Number of sub-steps in active step        |
| `activeSubStep` | `number`   | -            | Currently active sub-step (1-based index) |

### Step Interface

| Prop    | Type     | Description               |
| ------- | -------- | ------------------------- |
| `label` | `string` | Display text for the step |

### ProgressBarProps

| Prop                 | Type                              | Default     | Description                           |
| -------------------- | --------------------------------- | ----------- | ------------------------------------- |
| `className`          | `string`                          | -           | Additional CSS class names            |
| `steps`              | `number`                          | `10`        | Total number of steps                 |
| `currentStep`        | `number`                          | `1`         | Currently active step (1-based index) |
| `displayText`        | `string \| ReactNode`             | -           | Text to display with progress bar     |
| `accessibilityLabel` | `string`                          | `'Loading'` | ARIA label for screen readers         |
| `colorType`          | `'default' \| 'white' \| 'black'` | `'default'` | Color theme for progress bar          |

## Usage Examples

### Basic Stepper

```tsx
import Stepper from '@fil-react-components/stepper';

<Stepper
  steps={[
    { label: 'Personal Information' },
    { label: 'Contact Details' },
    { label: 'Review & Submit' },
  ]}
  active={1}
/>;
```

### Stepper with Active Step

```tsx
<Stepper
  steps={[
    { label: 'Step one' },
    { label: 'Step two' },
    { label: 'Step three' },
    { label: 'Step four' },
  ]}
  active={2}
/>
```

### Compact Stepper (7+ steps)

```tsx
<Stepper
  steps={[
    { label: 'Step one' },
    { label: 'Step two' },
    { label: 'Step three' },
    { label: 'Step four' },
    { label: 'Step five' },
    { label: 'Step six' },
    { label: 'Step seven' },
    { label: 'Step eight' },
  ]}
  active={5}
/>
```

### Vertical Stepper

```tsx
import { VerticalStepper } from '@fil-react-components/stepper';

<VerticalStepper
  steps={[
    { label: 'Account Setup' },
    { label: 'Personal Details' },
    { label: 'Security Settings' },
    { label: 'Confirmation' },
  ]}
  active={2}
/>;
```

### Stepper with Sub-steps

```tsx
<Stepper
  steps={[
    { label: 'Basic Information' },
    { label: 'Advanced Settings' },
    { label: 'Review' },
  ]}
  active={2}
  subSteps={3}
  activeSubStep={2}
/>
```

### Progress Bar Stepper

```tsx
import { ProgressBar } from '@fil-react-components/stepper';

<ProgressBar steps={5} currentStep={3} displayText="Step 3 of 5" />;
```

### Controlled Stepper

```tsx
const [currentStep, setCurrentStep] = useState(1);

const steps = [
  { label: 'Personal Info' },
  { label: 'Address' },
  { label: 'Payment' },
  { label: 'Confirmation' },
];

<Stepper
  steps={steps}
  active={currentStep}
/>

<button onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}>
  Previous
</button>
<button onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}>
  Next
</button>
```

### Custom Title Function

```tsx
const customTitle = (activeStep: number, steps: Step[]) => (
  <span>{`Progress: ${activeStep}/${steps.length}`}</span>
);

<Stepper
  steps={[{ label: 'Start' }, { label: 'Middle' }, { label: 'End' }]}
  active={2}
  title={customTitle}
/>;
```

### Multi-step Form with Stepper

```tsx
const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const steps = [
    { label: 'Personal Information' },
    { label: 'Contact Details' },
    { label: 'Preferences' },
    { label: 'Review' },
  ];

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div>
      <Stepper steps={steps} active={step} />

      <div className="form-content">
        {step === 1 && (
          <PersonalInfoForm data={formData} onChange={setFormData} />
        )}
        {step === 2 && <ContactForm data={formData} onChange={setFormData} />}
        {step === 3 && (
          <PreferencesForm data={formData} onChange={setFormData} />
        )}
        {step === 4 && <ReviewForm data={formData} />}
      </div>

      <div className="form-navigation">
        {step > 1 && <button onClick={prevStep}>Previous</button>}
        {step < steps.length && <button onClick={nextStep}>Next</button>}
        {step === steps.length && (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};
```

### Wizard with Progress Bar

```tsx
const Wizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  return (
    <div>
      <ProgressBar
        steps={totalSteps}
        currentStep={currentStep}
        displayText={`Step ${currentStep} of ${totalSteps}`}
      />

      <div className="wizard-content">{/* Step content */}</div>

      <button onClick={() => setCurrentStep(currentStep + 1)}>Continue</button>
    </div>
  );
};
```

### Vertical Stepper for Sidebar Navigation

```tsx
const SidebarNavigation = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="sidebar-layout">
      <aside>
        <VerticalStepper
          steps={[
            { label: 'Getting Started' },
            { label: 'Configuration' },
            { label: 'Advanced Settings' },
            { label: 'Final Setup' },
          ]}
          active={activeStep}
        />
      </aside>

      <main>
        <button onClick={() => setActiveStep(activeStep + 1)}>Next Step</button>
      </main>
    </div>
  );
};
```

## Features

### Accessibility

- ARIA current attribute for active step
- Screen reader support with proper labeling
- Keyboard navigation support
- Semantic HTML structure
- Progress indication for assistive technologies

### Styling

- Styled-components integration with theme provider
- Responsive design with breakpoints
- Compact mode for many steps
- Theme-aware colors and styling
- Custom className support

### Layout

- Horizontal and vertical orientations
- Responsive step sizing
- Connecting line progress indication
- Sub-step progress bars
- Flexible step content

### State Management

- Active step tracking
- Completed step indication
- Sub-step progress support
- Visual progress feedback

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

- Standard stepper with 2-6 steps
- Active step variations
- All steps completed state
- Compact stepper with 7+ steps
- Vertical stepper layouts
- Sub-step progress indication
- Progress bar stepper variant

## Data Attributes

- `data-frc="stepper"` - Applied to the stepper container

## CSS Classes

- `fil-stepper` - Base stepper container
- `fil-stepper--compact` - Compact mode modifier
- `fil-stepper__steps` - Steps list container
- `fil-stepper__step` - Individual step container
- `fil-stepper__step--active` - Active step modifier
- `fil-stepper__step--complete` - Completed step modifier
- `fil-stepper__step-txt` - Step label text
- `fil-stepper__line` - Connecting line container
- `fil-stepper__completed-line` - Completed portion of connecting line
- `fil-stepper__desc` - Step description container
- `fil-stepper__title` - Step title text
- `fil-stepper__label` - Current step label
- `fil-progress-bar-stepper` - Progress bar stepper container
- `fil-progress-bar-stepper__loader` - Progress bar loader

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
Stepper/
├── src/
│   ├── Stepper.tsx              # Main stepper component
│   ├── Stepper.style.ts         # Stepper styles with responsive design
│   ├── VerticalStepper.style.ts # Vertical stepper styles
│   ├── Stepper.mock.tsx         # Mock configurations for testing
│   ├── Stepper.stories.tsx      # Storybook stories
│   ├── index.ts                 # Main exports
│   ├── ProgressBar/
│   │   ├── ProgressBar.tsx          # Progress bar stepper variant
│   │   ├── ProgressBar.style.ts     # Progress bar styles
│   │   ├── ProgressBar.mock.ts      # Progress bar mocks
│   │   ├── ProgressBar.stories.tsx  # Progress bar stories
│   │   └── index.ts                 # Progress bar exports
│   └── tests/
│       ├── Stepper.test.tsx        # Unit tests
│       ├── Stepper.ct.tsx          # Component tests
│       └── __snapshots__/          # Jest snapshots
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Form Wizard

```tsx
const FormWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const wizardSteps = [
    { label: 'Account Setup' },
    { label: 'Personal Information' },
    { label: 'Contact Details' },
    { label: 'Review & Submit' },
  ];

  const handleNext = () => {
    if (currentStep < wizardSteps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="wizard">
      <Stepper steps={wizardSteps} active={currentStep} />

      <div className="wizard-content">
        {currentStep === 1 && (
          <AccountSetup data={formData} onChange={setFormData} />
        )}
        {currentStep === 2 && (
          <PersonalInfo data={formData} onChange={setFormData} />
        )}
        {currentStep === 3 && (
          <ContactDetails data={formData} onChange={setFormData} />
        )}
        {currentStep === 4 && (
          <ReviewSubmit data={formData} onSubmit={handleSubmit} />
        )}
      </div>

      <div className="wizard-navigation">
        <button onClick={handlePrevious} disabled={currentStep === 1}>
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === wizardSteps.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};
```

### Onboarding Flow

```tsx
const OnboardingFlow = () => {
  const [step, setStep] = useState(1);

  const onboardingSteps = [
    { label: 'Welcome' },
    { label: 'Profile Setup' },
    { label: 'Preferences' },
    { label: 'Tour' },
    { label: 'Complete' },
  ];

  return (
    <div className="onboarding">
      <div className="onboarding-header">
        <h1>Welcome to Our Platform</h1>
        <Stepper steps={onboardingSteps} active={step} />
      </div>

      <div className="onboarding-content">
        {step === 1 && <WelcomeStep onComplete={() => setStep(2)} />}
        {step === 2 && <ProfileStep onComplete={() => setStep(3)} />}
        {step === 3 && <PreferencesStep onComplete={() => setStep(4)} />}
        {step === 4 && <TourStep onComplete={() => setStep(5)} />}
        {step === 5 && <CompleteStep />}
      </div>
    </div>
  );
};
```

### Checkout Process

```tsx
const CheckoutProcess = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const checkoutSteps = [
    { label: 'Cart Review' },
    { label: 'Shipping' },
    { label: 'Payment' },
    { label: 'Confirmation' },
  ];

  return (
    <div className="checkout">
      <div className="checkout-header">
        <h2>Checkout</h2>
        <Stepper steps={checkoutSteps} active={currentStep} />
      </div>

      <div className="checkout-progress">
        <ProgressBar
          steps={checkoutSteps.length}
          currentStep={currentStep}
          displayText={`${currentStep} of ${checkoutSteps.length} steps completed`}
        />
      </div>

      <div className="checkout-content">
        {currentStep === 1 && <CartReview onNext={() => setCurrentStep(2)} />}
        {currentStep === 2 && <ShippingForm onNext={() => setCurrentStep(3)} />}
        {currentStep === 3 && <PaymentForm onNext={() => setCurrentStep(4)} />}
        {currentStep === 4 && <OrderConfirmation />}
      </div>
    </div>
  );
};
```

### Settings Configuration

```tsx
const SettingsWizard = () => {
  const [activeStep, setActiveStep] = useState(1);

  const settingsSteps = [
    { label: 'General' },
    { label: 'Security' },
    { label: 'Notifications' },
    { label: 'Advanced' },
  ];

  return (
    <div className="settings-wizard">
      <VerticalStepper steps={settingsSteps} active={activeStep} />

      <div className="settings-content">
        {activeStep === 1 && <GeneralSettings />}
        {activeStep === 2 && <SecuritySettings />}
        {activeStep === 3 && <NotificationSettings />}
        {activeStep === 4 && <AdvancedSettings />}
      </div>
    </div>
  );
};
```

## Best Practices

1. **Use clear step labels** - Make step labels descriptive and concise
2. **Limit step count** - Keep the number of steps reasonable (ideally 3-7 steps)
3. **Use compact mode for many steps** - Automatically switches to compact layout for 7+ steps
4. **Provide clear navigation** - Include previous/next buttons with clear labeling
5. **Show progress clearly** - Use both stepper and progress bar for complex flows
6. **Handle edge cases** - Ensure proper behavior at first and last steps
7. **Consider mobile experience** - Test stepper behavior on mobile devices
8. **Use appropriate orientation** - Horizontal for linear flows, vertical for navigation
9. **Provide feedback** - Show validation and completion states clearly
10. **Test accessibility** - Ensure screen reader compatibility and keyboard navigation

## Migration Notes

### From older versions:

- Ensure you have the required peer dependencies installed
- The component now requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling
- ProgressBar stepper variant added for linear progress indication
- Sub-step progress support added for detailed step tracking
- Vertical stepper layout improved with better responsive behavior
- Compact mode automatically applied for 7+ steps
- Improved accessibility with ARIA current attributes

## Related Components

- `@fil-react-components/linear-loader` - Linear loader component used in ProgressBar
- `@fil-react-components/theme-provider` - Required for styling and theming</content>
  <parameter name="filePath">c:\Users\A744601\Documents\codebase\TAPP101992-fil-react-components\metadata\Stepper-2.11.0.md
