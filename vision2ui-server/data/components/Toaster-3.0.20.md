## Overview

The Toaster component is a container and management system for Toast notifications, providing a centralized way to display multiple toast messages with configurable positioning, stacking behavior, and programmatic control. It supports various placement options and manages toast lifecycle including addition, removal, and auto-dismissal following the GDS (Global Design System) standards.

## Package Information

- **Package Name**: `@fil-react-components/toaster`
- **Version**: 3.0.20
- **Description**: Toaster Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/toaster
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/toast`: ^3.2.12
- `@fil-react-components/with-styles`: ^2.7.8
- `@fil-react-mixins/styled`: ^2.7.1
- `classnames`: ^2.5.1
- `lodash`: 4.17.21
- `nanoid`: ^3.3.8

## Exports

```typescript
import { InitToaster, toaster } from '@fil-react-components/toaster';
```

### Available Exports:

- `InitToaster` - Initialized toaster component with context setup
- `toaster` - Global toaster object for programmatic toast management

## Component Structure

### Main Components: InitToaster and Toaster

The Toaster system consists of two main parts:

1. **InitToaster** - A wrapper component that initializes the toaster context and provides the global `toaster` object
2. **Toaster** - The core container component that manages toast positioning and lifecycle

### Component Variations:

1. **Placement Options** - Top/bottom and left/right/center positioning
2. **Stack Management** - Configurable maximum toast count with FIFO behavior
3. **Loading Priority** - Loading toasts are prioritized and kept at the bottom
4. **Programmatic Control** - Global API for adding/removing toasts

### Component Hierarchy:

```
InitToaster (Context Provider)
└── Toaster (Container)
    └── Toast[] (Individual toast components)
```

## Props

### ToasterProps

| Prop                 | Type                                                                                              | Default       | Description                                        |
| -------------------- | ------------------------------------------------------------------------------------------------- | ------------- | -------------------------------------------------- |
| `placement`          | `'bottom-left' \| 'bottom-right' \| 'bottom-center' \| 'top-left' \| 'top-right' \| 'top-center'` | `'top-right'` | Position of the toaster container                  |
| `maxCount`           | `number`                                                                                          | `3`           | Maximum number of toasts to display simultaneously |
| `onAfterAddToast`    | `(id?: string) => void`                                                                           | -             | Callback fired after a toast is added              |
| `onAfterRemoveToast` | `(id?: string) => void`                                                                           | -             | Callback fired after a toast is removed            |
| `className`          | `string`                                                                                          | -             | Additional CSS class names                         |
| `ref`                | `React.RefObject<ToasterObject>`                                                                  | -             | Ref to access toaster methods                      |

### ToasterObject Interface

| Method        | Signature                                               | Description                            |
| ------------- | ------------------------------------------------------- | -------------------------------------- |
| `addToast`    | `(options?: ToastProps, callback?: Function) => string` | Adds a new toast and returns its ID    |
| `removeToast` | `(id?: string) => void`                                 | Removes a toast by ID                  |
| `hasToast`    | `(id: string) => boolean`                               | Checks if a toast with given ID exists |

## Usage Examples

### Basic Setup

```tsx
import React from 'react';
import { InitToaster, toaster } from '@fil-react-components/toaster';

const App = () => {
  const handleClick = () => {
    toaster.addToast({
      title: 'Success!',
      children: 'Your action was completed successfully.',
      status: 'success',
      autoDismiss: true,
      autoDismissTimeout: 3000,
    });
  };

  return (
    <>
      <InitToaster />
      <button onClick={handleClick}>Show Toast</button>
    </>
  );
};
```

### Different Placement Options

```tsx
// Top-right (default)
<InitToaster placement="top-right" />

// Bottom-left
<InitToaster placement="bottom-left" />

// Top-center
<InitToaster placement="top-center" />

// Bottom-center
<InitToaster placement="bottom-center" />
```

### Custom Configuration

```tsx
<InitToaster
  placement="bottom-right"
  maxCount={5}
  onAfterAddToast={(id) => console.log('Toast added:', id)}
  onAfterRemoveToast={(id) => console.log('Toast removed:', id)}
/>
```

### Programmatic Toast Management

```tsx
import { toaster } from '@fil-react-components/toaster';

// Add a success toast
const toastId = toaster.addToast({
  title: 'File Uploaded',
  children: 'Your file has been uploaded successfully.',
  status: 'success',
});

// Add an error toast
toaster.addToast({
  title: 'Upload Failed',
  children: 'There was an error uploading your file.',
  status: 'error',
});

// Remove a specific toast
toaster.removeToast(toastId);

// Add a loading toast
const loadingId = toaster.addToast({
  title: 'Processing',
  children: 'Please wait while we process your request...',
  status: 'loading',
});

// Update to success when done
toaster.removeToast(loadingId);
toaster.addToast({
  title: 'Complete',
  children: 'Your request has been processed successfully.',
  status: 'success',
});
```

### Toast with Auto-dismiss

```tsx
toaster.addToast({
  title: 'Info',
  children: 'This message will disappear in 5 seconds.',
  status: 'info',
  autoDismiss: true,
  autoDismissTimeout: 5000,
});
```

### Toast with Custom Content

```tsx
import Anchor from '@fil-react-components/anchor';

toaster.addToast({
  title: 'Action Required',
  children: (
    <div>
      Please review the changes.{' '}
      <Anchor href="/review-changes">View Details</Anchor>
    </div>
  ),
  status: 'warning',
});
```

### Managing Multiple Toasts

```tsx
// Add multiple toasts (only maxCount will be shown)
toaster.addToast({ title: 'First', status: 'info' });
toaster.addToast({ title: 'Second', status: 'success' });
toaster.addToast({ title: 'Third', status: 'warning' });
toaster.addToast({ title: 'Fourth', status: 'error' }); // This will replace the first one
```

## Features

### Positioning

- **Top/Bottom** - Vertical positioning (top or bottom of viewport)
- **Left/Right/Center** - Horizontal positioning
- **Fixed Positioning** - Uses CSS fixed positioning for consistent placement
- **Responsive** - Works across different screen sizes

### Toast Management

- **Stack Control** - Configurable maximum number of visible toasts
- **Priority System** - Loading toasts are prioritized and kept visible
- **Auto-dismissal** - Individual toasts can auto-dismiss after timeout
- **Manual Removal** - Close button or programmatic removal

### Programmatic API

- **Global Access** - `toaster` object available throughout the application
- **Unique IDs** - Each toast gets a unique identifier
- **Callback Support** - Hooks for after add/remove operations
- **Type Safety** - Full TypeScript support for all methods

### Integration

- **Context Setup** - InitToaster provides the necessary context
- **Singleton Pattern** - One global toaster instance per application
- **Toast Reuse** - Individual Toast components are reused efficiently

## Testing

The component includes:

- Unit tests using Jest
- Component tests using Playwright
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

- Basic toaster setup and usage
- Different placement options
- Programmatic toast management
- Integration with buttons and user interactions

## Data Attributes

- `data-frc="toaster"` - Applied to the main toaster container

## CSS Classes

- `toaster-container` - Main container class
- `toaster-container__toaster` - Toaster positioning container
- `toaster-container__toaster--{placement}` - Placement-specific classes (e.g., `--top-right`)

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
Toaster/
├── src/
│   ├── Toaster.tsx              # Main toaster container component
│   ├── Toaster.style.ts         # Toaster positioning styles
│   ├── InitToaster.tsx          # Context initialization component
│   ├── Toaster.utils.ts         # Global toaster object and types
│   ├── Toaster.mock.ts          # Mock configurations
│   ├── Toaster.stories.tsx      # Storybook stories
│   ├── index.ts                 # Main exports
│   └── tests/
│       ├── Toaster.test.tsx     # Unit tests
│       ├── Toaster.ct.tsx       # Component tests
│       └── ToasterWrapper.tsx   # Test wrapper
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### User Feedback System

```tsx
// In your app's main component
<InitToaster placement="top-right" maxCount={4} />;

// In form submission
const handleSubmit = async (data) => {
  try {
    await api.submitForm(data);
    toaster.addToast({
      title: 'Success',
      children: 'Form submitted successfully!',
      status: 'success',
      autoDismiss: true,
    });
  } catch (error) {
    toaster.addToast({
      title: 'Error',
      children: 'Failed to submit form. Please try again.',
      status: 'error',
    });
  }
};
```

### API Response Handling

```tsx
const fetchData = async () => {
  const loadingId = toaster.addToast({
    title: 'Loading',
    children: 'Fetching data...',
    status: 'loading',
  });

  try {
    const data = await api.getData();
    toaster.removeToast(loadingId);
    toaster.addToast({
      title: 'Success',
      children: 'Data loaded successfully.',
      status: 'success',
      autoDismiss: true,
    });
    return data;
  } catch (error) {
    toaster.removeToast(loadingId);
    toaster.addToast({
      title: 'Error',
      children: 'Failed to load data.',
      status: 'error',
    });
    throw error;
  }
};
```

### File Upload Progress

```tsx
const uploadFile = async (file) => {
  const loadingId = toaster.addToast({
    title: 'Uploading',
    children: `Uploading ${file.name}...`,
    status: 'loading',
  });

  try {
    await api.uploadFile(file);
    toaster.removeToast(loadingId);
    toaster.addToast({
      title: 'Upload Complete',
      children: `${file.name} has been uploaded successfully.`,
      status: 'success',
      autoDismiss: true,
    });
  } catch (error) {
    toaster.removeToast(loadingId);
    toaster.addToast({
      title: 'Upload Failed',
      children: `Failed to upload ${file.name}.`,
      status: 'error',
    });
  }
};
```

### Notification Center

```tsx
// Global notification system
export const notify = {
  success: (title, message) =>
    toaster.addToast({
      title,
      children: message,
      status: 'success',
      autoDismiss: true,
    }),
  error: (title, message) =>
    toaster.addToast({
      title,
      children: message,
      status: 'error',
    }),
  warning: (title, message) =>
    toaster.addToast({
      title,
      children: message,
      status: 'warning',
    }),
  info: (title, message) =>
    toaster.addToast({
      title,
      children: message,
      status: 'info',
      autoDismiss: true,
      autoDismissTimeout: 4000,
    }),
};
```

## Best Practices

1. **Initialize once** - Use InitToaster once at the app root level
2. **Choose appropriate placement** - Consider user flow and content layout
3. **Set reasonable maxCount** - Don't overwhelm users with too many toasts
4. **Use auto-dismiss wisely** - Critical messages should remain until dismissed manually
5. **Provide meaningful content** - Include clear titles and actionable messages
6. **Handle loading states** - Show loading toasts for async operations
7. **Clean up loading toasts** - Always remove loading toasts when operations complete
8. **Test user flows** - Ensure toasts appear in the right contexts

## Migration Notes

### From older versions:

- Ensure you have the required peer dependencies installed
- The component now requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling
- Toaster now uses nanoid for unique ID generation
- API has been simplified with the global `toaster` object
- InitToaster component is now required for context setup

## Related Components

- `@fil-react-components/toast` - Individual toast component
- `@fil-react-components/theme-provider` - Theme provider for styling
- `@fil-react-components/button` - Button component used in toast interactions
- `@fil-react-components/anchor` - Link component for toast content
