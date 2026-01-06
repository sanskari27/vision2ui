## Overview

The Toast component is a non-intrusive notification component that displays brief messages to users about the status of operations, providing feedback for success, error, warning, and informational states. It supports auto-dismissal, custom content, and accessibility features following the GDS (Global Design System) standards.

## Package Information

- **Package Name**: `@fil-react-components/toast`
- **Version**: 3.2.12
- **Description**: Toast Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/toast
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/anchor`: ^2.15.2
- `@fil-react-components/box`: ^3.2.8
- `@fil-react-components/button`: ^3.4.2
- `@fil-react-components/grid`: ^2.9.11
- `@fil-react-components/icon`: ^2.10.10
- `@fil-react-components/spinner`: ^2.11.9
- `@fil-react-components/streamline-icon`: ^2.15.6
- `@fil-react-components/svg-icons`: ^1.9.0
- `@fil-react-components/with-styles`: ^2.7.8
- `@fil-react-mixins/styled`: ^2.7.1
- `lodash`: 4.17.21

## Exports

```typescript
import Toast, { ToastProps } from '@fil-react-components/toast';
```

### Available Exports:

- `Toast` (default export) - Main toast component with styling
- `ToastProps` - TypeScript interface for component props

## Component Structure

### Main Component: Toast

The main Toast component is a functional React component that renders a notification message with status indicators, optional close button, and auto-dismissal functionality.

### Component Variations:

1. **Status Variants** - Success, error, warning, info, and loading states
2. **Color Schemes** - Standard (light background) and coloured (themed background)
3. **Auto-dismiss** - Configurable automatic dismissal after timeout
4. **Interactive** - Optional close button and keyboard navigation

### Component Hierarchy:

```
Toast (Main Component)
├── Box (Container)
│   ├── StatusIcon (Success/Error/Warning/Info/Loading)
│   ├── Content Area
│   │   ├── Title (optional)
│   │   └── Body (children)
│   └── CloseButton (optional)
```

## Props

### ToastProps

Extends `React.HTMLAttributes<HTMLDivElement>`

| Prop                 | Type                                                       | Default     | Description                                     |
| -------------------- | ---------------------------------------------------------- | ----------- | ----------------------------------------------- |
| `status`             | `'success' \| 'error' \| 'warning' \| 'info' \| 'loading'` | `'success'` | Status type determining icon and styling        |
| `title`              | `string`                                                   | -           | Optional title text displayed prominently       |
| `autoDismiss`        | `boolean`                                                  | -           | Whether toast should auto-dismiss after timeout |
| `autoDismissTimeout` | `number`                                                   | -           | Timeout in milliseconds for auto-dismissal      |
| `removeToast`        | `(id?: string) => void`                                    | `noop`      | Function to remove the toast                    |
| `id`                 | `string`                                                   | -           | Unique identifier for the toast                 |
| `className`          | `string`                                                   | -           | Additional CSS class names                      |
| `children`           | `React.ReactNode`                                          | -           | Content to display in the toast body            |
| `showCloseButton`    | `boolean`                                                  | `true`      | Whether to show the close button                |
| `coloured`           | `boolean`                                                  | `false`     | Whether to use coloured background theme        |

## Usage Examples

### Basic Success Toast

```tsx
import Toast from '@fil-react-components/toast';

<Toast status="success" title="Operation Successful">
  Your changes have been saved successfully.
</Toast>;
```

### Error Toast with Auto-dismiss

```tsx
<Toast
  status="error"
  title="Error Occurred"
  autoDismiss={true}
  autoDismissTimeout={5000}
>
  There was an error processing your request. Please try again.
</Toast>
```

### Warning Toast with Link

```tsx
import Anchor from '@fil-react-components/anchor';

<Toast status="warning" title="Warning">
  Your session will expire soon.{' '}
  <Anchor href="/extend-session">Extend session</Anchor>
</Toast>;
```

### Loading Toast

```tsx
<Toast status="loading" title="Processing">
  Please wait while we process your request...
</Toast>
```

### Coloured Toast (Dark Theme)

```tsx
<Toast status="success" title="Success" coloured={true}>
  Operation completed successfully with dark theme.
</Toast>
```

### Toast without Close Button

```tsx
<Toast
  status="info"
  title="Information"
  showCloseButton={false}
  autoDismiss={true}
  autoDismissTimeout={3000}
>
  This message will auto-dismiss in 3 seconds.
</Toast>
```

### Custom Styled Toast

```tsx
<Toast
  status="info"
  title="Custom Toast"
  className="my-custom-toast"
  style={{ borderRadius: '8px' }}
>
  Custom styled notification message.
</Toast>
```

## Features

### Accessibility

- Proper ARIA attributes with `role="alert"`
- Keyboard navigation support (Escape key to close)
- Screen reader compatibility
- Focus management for interactive elements
- Semantic HTML structure

### Status Types

- **Success** - Green checkmark icon for positive confirmations
- **Error** - Red alert icon for error messages
- **Warning** - Orange diamond icon for warnings
- **Info** - Blue info icon for informational messages
- **Loading** - Animated spinner for in-progress operations

### Styling

- Styled-components integration
- Theme provider support for consistent theming
- Two color schemes: standard and coloured
- Responsive design with fixed width
- Box shadow for visual elevation

### Auto-dismissal

- Configurable timeout for automatic removal
- Loading toasts are prioritized and kept visible
- Manual override with close button
- Callback support for cleanup operations

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

- All status types (success, error, warning, info, loading)
- Standard and coloured variants
- Auto-dismiss functionality
- Close button behavior
- Custom content with links

## Data Attributes

- `data-frc="toast"` - Applied to the main toast container

## CSS Classes

- `fil-toast` - Main toast container class
- `fil-toast__status` - Status icon container
- `fil-toast__content` - Content area container
- `fil-toast__title` - Title text styling
- `fil-toast__body` - Body content area
- `fil-toast__close` - Close button styling

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
Toast/
├── src/
│   ├── Toast.tsx              # Main toast component
│   ├── Toast.style.ts         # Toast styling with status colors
│   ├── Toast.mock.tsx         # Mock configurations
│   ├── Toast.stories.tsx      # Storybook stories
│   ├── index.ts               # Main exports
│   └── tests/
│       ├── Toast.test.tsx     # Unit tests
│       ├── Toast.ct.tsx       # Component tests
│       └── ToastWrapper.tsx   # Test wrapper
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Form Submission Feedback

```tsx
// Success feedback
<Toast status="success" title="Form Submitted">
  Your form has been submitted successfully. We'll get back to you soon.
</Toast>

// Error feedback
<Toast status="error" title="Submission Failed">
  There was an error submitting your form. Please check your information and try again.
</Toast>
```

### API Response Notifications

```tsx
// Loading state
<Toast status="loading" title="Saving Changes">
  Please wait while we save your changes...
</Toast>

// Success response
<Toast status="success" title="Changes Saved" autoDismiss={true} autoDismissTimeout={3000}>
  Your changes have been saved successfully.
</Toast>
```

### User Action Confirmation

```tsx
<Toast status="warning" title="Confirm Action">
  Are you sure you want to delete this item?{' '}
  <Anchor href="/confirm-delete">Confirm</Anchor>
</Toast>
```

### System Status Updates

```tsx
<Toast status="info" title="System Maintenance">
  The system will be undergoing maintenance tonight from 2-4 AM.
</Toast>
```

## Best Practices

1. **Use appropriate status types** - Choose the right status for the message type
2. **Keep messages concise** - Use clear, brief language for better UX
3. **Consider auto-dismissal** - Use auto-dismiss for non-critical messages
4. **Provide context** - Include relevant details and next steps when possible
5. **Test accessibility** - Ensure screen readers can properly announce toasts
6. **Use coloured variant sparingly** - Reserve for important notifications
7. **Handle loading states** - Show loading toasts for async operations
8. **Provide manual close option** - Allow users to dismiss toasts manually

## Migration Notes

### From older versions:

- Ensure you have the required peer dependencies installed
- The component now requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling
- Status colors and icons have been updated for better accessibility
- Coloured variant now supports proper contrast ratios

## Related Components

- `@fil-react-components/toaster` - Container component for managing multiple toasts
- `@fil-react-components/spinner` - Loading indicator used in loading toasts
- `@fil-react-components/streamline-icon` - Icon component for status indicators
- `@fil-react-components/box` - Layout component used as container
- `@fil-react-components/button` - Button component for close functionality
- `@fil-react-components/anchor` - Link component for toast content
- `@fil-react-components/theme-provider` - Theme provider for styling
