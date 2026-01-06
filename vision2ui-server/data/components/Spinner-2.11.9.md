# Spinner-2.11.9.md

## Overview

The Spinner component is a flexible, accessible loading indicator that provides visual feedback during asynchronous operations. It supports both indeterminate and determinate progress states, multiple sizes, display types (inline/fixed), and color variants. The component follows GDS (Global Design System) standards and includes proper accessibility features.

## Package Information

- **Package Name**: `@fil-react-components/spinner`
- **Version**: 2.11.9
- **Description**: Spinner Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/spinner
```

## Peer Dependencies

- `@fil-global/gds-tokens`: ^2.0.0
- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/box`: ^3.2.8
- `@fil-react-components/unsafe-html`: ^1.11.10
- `@fil-react-components/with-styles`: ^2.7.8
- `@fil-react-mixins/styled`: ^2.7.1
- `classnames`: ^2.5.1

## Exports

```typescript
import Spinner, {
  LargeSpinner,
  SmallSpinner,
  XSmallSpinner,
} from '@fil-react-components/spinner';
```

### Available Exports:

- `Spinner` (default export) - Main spinner component with full configuration options
- `LargeSpinner` - Pre-configured large spinner (120px)
- `SmallSpinner` - Pre-configured small spinner (32px)
- `XSmallSpinner` - Pre-configured extra small spinner (20px)

## Component Structure

### Main Component: Spinner

The Spinner component renders an animated SVG-based loading indicator with optional text and overlay support.

### Component Variations:

1. **Standard Spinner** - Default size (48px) with spinning animation
2. **Large Spinner** - Large size (120px) for prominent loading states
3. **Small Spinner** - Small size (32px) for inline loading
4. **X-Small Spinner** - Extra small size (20px) for compact spaces
5. **Determinate Spinner** - Progress bar style with percentage completion
6. **Fixed Spinner** - Full-screen overlay with centered spinner
7. **Inline Spinner** - Inline display with optional text

### Component Hierarchy:

```
Spinner (Container)
├── Spinner Element (progressbar role)
│   ├── Spins Container
│   │   ├── SVG Circle (track)
│   │   ├── SVG Circle (determinate progress)
│   │   └── Spin Elements (indeterminate animation)
│   └── Text (optional)
└── Overlay (fixed display type only)
```

## Props

### SpinnerProps

| Prop                 | Type                                                                 | Default     | Description                                           |
| -------------------- | -------------------------------------------------------------------- | ----------- | ----------------------------------------------------- |
| `isVisible`          | `boolean`                                                            | -           | Controls spinner visibility (returns null when false) |
| `displayType`        | `'fixed' \| 'inline'`                                                | `'inline'`  | Display mode - fixed (fullscreen) or inline           |
| `displayText`        | `string \| ReactNode`                                                | -           | Text to display below the spinner                     |
| `accessibilityLabel` | `string`                                                             | `'Loading'` | ARIA label for screen readers                         |
| `className`          | `string`                                                             | -           | Additional CSS class names                            |
| `size`               | `number \| 'default' \| 'small' \| 'medium' \| 'large' \| 'x-small'` | `'default'` | Spinner size (numeric or preset)                      |
| `determinate`        | `boolean`                                                            | `false`     | Whether to show determinate progress                  |
| `value`              | `number`                                                             | `0`         | Progress value (0-100) for determinate spinner        |
| `minValue`           | `number`                                                             | `0`         | Minimum value for progress calculation                |
| `maxValue`           | `number`                                                             | `100`       | Maximum value for progress calculation                |
| `colorType`          | `'default' \| 'white' \| 'black'`                                    | `'default'` | Color theme for the spinner                           |

## Usage Examples

### Basic Spinner

```tsx
import Spinner from '@fil-react-components/spinner';

<Spinner isVisible={true} />;
```

### Inline Spinner with Text

```tsx
<Spinner isVisible={true} displayType="inline" displayText="Loading data..." />
```

### Fixed Fullscreen Spinner

```tsx
<Spinner
  isVisible={true}
  displayType="fixed"
  size="large"
  displayText="Please wait..."
/>
```

### Determinate Progress Spinner

```tsx
const [progress, setProgress] = useState(0);

// Simulate progress
useEffect(() => {
  const interval = setInterval(() => {
    setProgress((prev) => (prev < 100 ? prev + 10 : 100));
  }, 500);
  return () => clearInterval(interval);
}, []);

<Spinner
  isVisible={true}
  determinate={true}
  value={progress}
  displayText={`${progress}%`}
/>;
```

### Different Sizes

```tsx
// Default size (48px)
<Spinner isVisible={true} size="default" />

// Small size (32px)
<Spinner isVisible={true} size="small" />

// Extra small size (20px)
<Spinner isVisible={true} size="x-small" />

// Large size (120px)
<Spinner isVisible={true} size="large" />

// Custom numeric size
<Spinner isVisible={true} size={64} />
```

### Pre-configured Size Components

```tsx
import { LargeSpinner, SmallSpinner, XSmallSpinner } from '@fil-react-components/spinner';

// Large spinner (120px)
<LargeSpinner isVisible={true} />

// Small spinner (32px)
<SmallSpinner isVisible={true} />

// Extra small spinner (20px)
<XSmallSpinner isVisible={true} />
```

### Color Variants

```tsx
import Box from '@fil-react-components/box';

// Default color (theme-aware)
<Spinner isVisible={true} colorType="default" />

// White color (for dark backgrounds)
<Box bgColor="grey.800" p={4}>
  <Spinner isVisible={true} colorType="white" />
</Box>

// Black color (for light backgrounds)
<Spinner isVisible={true} colorType="black" />
```

### Loading Button State

```tsx
const [isLoading, setIsLoading] = useState(false);

const handleSubmit = async () => {
  setIsLoading(true);
  try {
    await submitForm();
  } finally {
    setIsLoading(false);
  }
};

<button onClick={handleSubmit} disabled={isLoading}>
  {isLoading ? (
    <>
      <Spinner isVisible={true} size="small" />
      Submitting...
    </>
  ) : (
    'Submit'
  )}
</button>;
```

### Page Loading State

```tsx
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  loadData().finally(() => setIsLoading(false));
}, []);

return (
  <div>
    {isLoading ? (
      <Spinner
        isVisible={true}
        displayType="fixed"
        size="large"
        displayText="Loading page..."
      />
    ) : (
      <PageContent />
    )}
  </div>
);
```

### API Call Loading

```tsx
const [data, setData] = useState(null);
const [loading, setLoading] = useState(false);

const fetchData = async () => {
  setLoading(true);
  try {
    const result = await apiCall();
    setData(result);
  } catch (error) {
    console.error('Failed to load data', error);
  } finally {
    setLoading(false);
  }
};

return (
  <div>
    <button onClick={fetchData} disabled={loading}>
      Load Data
    </button>

    {loading && <Spinner isVisible={true} displayText="Fetching data..." />}

    {data && <DataDisplay data={data} />}
  </div>
);
```

### Form Submission

```tsx
const [submitting, setSubmitting] = useState(false);

const handleSubmit = async (formData) => {
  setSubmitting(true);
  try {
    await submitForm(formData);
    // Handle success
  } catch (error) {
    // Handle error
  } finally {
    setSubmitting(false);
  }
};

<form onSubmit={handleSubmit}>
  {/* Form fields */}
  <button type="submit" disabled={submitting}>
    {submitting ? (
      <>
        <Spinner isVisible={true} size="small" />
        Submitting...
      </>
    ) : (
      'Submit Form'
    )}
  </button>
</form>;
```

## Features

### Accessibility

- ARIA progressbar role for determinate spinners
- Proper ARIA labels for screen readers
- Live region announcements for loading states
- Keyboard navigation support
- Focus management for interactive contexts

### Styling

- Styled-components integration with theme provider
- Multiple size options (preset and custom)
- Color variants for different backgrounds
- Smooth CSS animations
- Theme-aware colors and styling

### Animation

- Smooth spinning animation using CSS keyframes
- Staggered animation delays for visual appeal
- Configurable animation timing
- Hardware-accelerated transforms

### Display Modes

- Inline display for content integration
- Fixed display for full-screen overlays
- Optional text display with HTML support
- Overlay background for fixed mode

### Progress Indication

- Indeterminate mode for unknown progress
- Determinate mode with percentage completion
- Progress circle calculation
- Accessible progress values

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

- Standard spinner configurations
- Size variants (small, default, large, x-small)
- Inline spinner with text
- Fixed fullscreen spinner
- Determinate progress spinner
- Color variants (default, white, black)
- Fullscreen overlay spinner

## Data Attributes

- `data-frc="spinner"` - Applied to the spinner container

## CSS Classes

- `fil-spinner` - Base spinner container
- `align-middle` - Vertical alignment utility
- `fil-spinner__spins` - Animation container
- `fil-spinner__svg` - SVG element container
- `fil-spinner__track` - Background track circle
- `fil-spinner__determinate` - Determinate progress circle
- `fil-spinner__text` - Text content below spinner
- `fil-spinner__overlay` - Fullscreen overlay background
- `spin` - Individual spinning elements
- `hide` - Hidden state class

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
Spinner/
├── src/
│   ├── Spinner.tsx              # Main spinner component
│   ├── Spinner.style.ts         # Spinner styles with animations
│   ├── Spinner.mock.tsx         # Mock configurations for testing
│   ├── Spinner.stories.tsx      # Storybook stories
│   ├── Spinner.fullscreen.stories.tsx # Fullscreen stories
│   ├── constant.ts              # Loading label constant
│   ├── index.ts                 # Main exports
│   └── tests/
│       ├── Spinner.test.tsx        # Unit tests
│       ├── Spinner.ct.tsx          # Component tests
│       └── __snapshots__/          # Jest snapshots
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Page Loading

```tsx
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initializeApp().finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Spinner
        isVisible={true}
        displayType="fixed"
        size="large"
        displayText="Loading application..."
      />
    );
  }

  return <MainApp />;
};
```

### Data Fetching

```tsx
const DataComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <Spinner isVisible={true} displayText="Loading data..." />
      </div>
    );
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return <DataDisplay data={data} />;
};
```

### File Upload Progress

```tsx
const FileUpload = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (file) => {
    setUploading(true);
    setUploadProgress(0);

    const formData = new FormData();
    formData.append('file', file);

    await uploadFile(formData, {
      onProgress: (progress) => setUploadProgress(progress),
    });

    setUploading(false);
  };

  return (
    <div>
      <input type="file" onChange={(e) => handleUpload(e.target.files[0])} />

      {uploading && (
        <Spinner
          isVisible={true}
          determinate={true}
          value={uploadProgress}
          displayText={`Uploading... ${uploadProgress}%`}
        />
      )}
    </div>
  );
};
```

### Button Loading State

```tsx
const AsyncButton = ({ onClick, children }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      await onClick();
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleClick} disabled={loading}>
      {loading && <Spinner isVisible={true} size="small" />}
      {children}
    </button>
  );
};
```

### Table Loading State

```tsx
const DataTable = ({ data, loading }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <tr>
            <td colSpan={3} style={{ textAlign: 'center', padding: '2rem' }}>
              <Spinner isVisible={true} displayText="Loading table data..." />
            </td>
          </tr>
        ) : (
          data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.status}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};
```

### Modal Loading

```tsx
const LoadingModal = ({ isOpen, message = 'Processing...' }) => {
  if (!isOpen) return null;

  return (
    <Modal>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <Spinner isVisible={true} size="large" displayText={message} />
      </div>
    </Modal>
  );
};
```

## Best Practices

1. **Always control visibility** - Use `isVisible` prop to conditionally render the spinner
2. **Provide meaningful text** - Include `displayText` to inform users about what's loading
3. **Choose appropriate size** - Use smaller sizes for inline loading, larger for full-screen
4. **Consider display type** - Use `fixed` for page-level loading, `inline` for component-level
5. **Use determinate for known progress** - When you can track actual progress percentage
6. **Handle accessibility** - Ensure proper ARIA labels and screen reader support
7. **Avoid overuse** - Don't show spinners for operations that complete quickly
8. **Test loading states** - Ensure spinners appear and disappear correctly
9. **Consider performance** - Spinners with animations can impact performance on low-end devices
10. **Use appropriate colors** - Choose color variants that contrast well with backgrounds

## Migration Notes

### From older versions:

- Ensure you have the required peer dependencies installed
- The component now requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling
- Global spacing classes are now optional
- Removed usage of "important" in spacing styles
- Improved accessibility with proper ARIA attributes
- Enhanced animation performance
- Better TypeScript support with updated interfaces

## Related Components

- `@fil-react-components/box` - Box component for text layout
- `@fil-react-components/unsafe-html` - HTML rendering for display text
- `@fil-react-components/theme-provider` - Required for styling and theming
- `@fil-global/gds-tokens` - Global design system tokens</content>
  <parameter name="filePath">c:\Users\A744601\Documents\codebase\TAPP101992-fil-react-components\metadata\Spinner-2.11.9.md
