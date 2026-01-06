# Notification-2.13.11.md

## Overview

The Notification component is a flexible, accessible alert component that displays status-based messages with optional icons, titles, and action links. It supports four status variants (success, error, warning, info) and follows the GDS (Global Design System) standards for consistent messaging across applications.

## Package Information

- **Package Name**: `@fil-react-components/notification`
- **Version**: 2.13.11
- **Description**: Notification Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/notification
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/anchor`: ^2.13.11
- `@fil-react-components/button`: ^3.4.2
- `@fil-react-components/paragraph`: ^2.11.10
- `@fil-react-components/streamline-icon`: ^2.10.10
- `@fil-react-components/svg-icons`: ^2.10.10
- `@fil-react-components/with-styles`: ^2.7.9
- `@fil-react-components/styled-mixins`: ^2.9.11
- `classnames`: ^2.5.1
- `lodash`: 4.17.21

## Exports

```typescript
import Notification from '@fil-react-components/notification';
```

### Available Exports:

- `Notification` (default export) - Main notification component with status variants

## Component Structure

### Main Component: Notification

The Notification component renders status-based alert messages with optional icons, titles, and action links. It automatically applies appropriate styling and icons based on the `status` prop.

### Component Variations:

1. **Success Notification** - Green-themed notification for positive messages
2. **Error Notification** - Red-themed notification for error messages
3. **Warning Notification** - Orange-themed notification for warning messages
4. **Info Notification** - Blue-themed notification for informational messages

### Component Hierarchy:

```
Notification (Main Component)
├── Icon (status-based)
├── Title (optional)
├── Content (children)
├── Link (optional)
└── Close Button (optional)
```

## Props

### NotificationProps

| Prop        | Type                                          | Default    | Description                                                 |
| ----------- | --------------------------------------------- | ---------- | ----------------------------------------------------------- |
| `status`    | `'success' \| 'error' \| 'warning' \| 'info'` | `'info'`   | Determines the notification status and styling              |
| `title`     | `string`                                      | -          | Optional title text displayed above the content             |
| `children`  | `ReactNode`                                   | -          | Main content of the notification (string or React elements) |
| `closable`  | `boolean`                                     | `true`     | Whether to show the close button                            |
| `onClose`   | `(event) => void`                             | -          | Callback function when close button is clicked              |
| `showIcon`  | `boolean`                                     | `true`     | Whether to display the status icon                          |
| `linkLabel` | `string`                                      | -          | Text for the optional action link                           |
| `linkUrl`   | `string`                                      | -          | URL for the optional action link                            |
| `linkProps` | `object`                                      | -          | Additional props for the action link                        |
| `className` | `string`                                      | -          | Additional CSS class names                                  |
| `aria-live` | `string`                                      | `'polite'` | ARIA live region attribute for screen readers               |

## Usage Examples

### Basic Usage

```tsx
import Notification from '@fil-react-components/notification';

// Simple info notification
<Notification>
  This is an informational message.
</Notification>

// Success notification with title
<Notification status="success" title="Success!">
  Your changes have been saved successfully.
</Notification>

// Error notification
<Notification status="error" title="Error">
  Something went wrong. Please try again.
</Notification>
```

### Status Variants

```tsx
// Success notification
<Notification status="success" title="Success">
  Operation completed successfully.
</Notification>

// Error notification
<Notification status="error" title="Error">
  Failed to save changes.
</Notification>

// Warning notification
<Notification status="warning" title="Warning">
  Please review your information before proceeding.
</Notification>

// Info notification (default)
<Notification status="info" title="Information">
  Here's some important information.
</Notification>
```

### With Close Button

```tsx
const [visible, setVisible] = useState(true);

{
  visible && (
    <Notification
      status="success"
      title="Success"
      onClose={() => setVisible(false)}
    >
      Changes saved successfully.
    </Notification>
  );
}
```

### Without Close Button

```tsx
<Notification status="error" title="Error" closable={false}>
  This notification cannot be dismissed.
</Notification>
```

### With Action Link

```tsx
<Notification
  status="warning"
  title="Update Available"
  linkLabel="Learn More"
  linkUrl="/updates"
>
  A new version is available for download.
</Notification>
```

### With Multiple Paragraphs

```tsx
import Paragraph from '@fil-react-components/paragraph';

<Notification status="info" title="Important Notice">
  <Paragraph>First paragraph with important information.</Paragraph>
  <Paragraph>Second paragraph with additional details.</Paragraph>
</Notification>;
```

### Without Icon

```tsx
<Notification status="success" title="Success" showIcon={false}>
  Changes saved successfully.
</Notification>
```

### Without Title

```tsx
<Notification status="info">This notification has no title.</Notification>
```

## Features

### Accessibility

- Proper ARIA live regions for screen reader announcements
- Semantic HTML structure
- Keyboard navigation support for close button
- Focus management for interactive elements
- Screen reader friendly status announcements

### Styling

- Styled-components integration with theme provider
- Status-based color schemes (success: green, error: red, warning: orange, info: blue)
- Responsive design with proper spacing
- Custom className support for additional styling
- Icon positioning and alignment

### State Management

- Optional closable functionality with callback
- Status-based visual styling
- Icon display control
- Link integration for actions

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

- Success notification variations
- Error notification variations
- Warning notification variations
- Info notification variations
- Notifications with and without close buttons
- Notifications with action links
- Notifications with multiple paragraphs
- Notifications without icons
- Notifications without titles

## Data Attributes

- `data-frc="notification"` - Applied to the notification container

## CSS Classes

- `notification` - Base notification class
- `notification--success` - Success status styling
- `notification--error` - Error status styling
- `notification--warning` - Warning status styling
- `notification--info` - Info status styling
- `notification__icon` - Status icon styling
- `notification__title` - Title text styling
- `notification__content` - Content area styling
- `notification__link` - Action link styling
- `notification__close` - Close button styling

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
Notification/
├── src/
│   ├── Notification.tsx          # Main notification component
│   ├── Notification.style.ts     # Notification styles with theme integration
│   ├── Notification.mock.tsx     # Mock configurations for testing
│   ├── Notification.stories.tsx  # Storybook stories
│   ├── index.ts                  # Main exports
│   └── tests/
│       ├── Notification.test.tsx    # Unit tests
│       ├── Notification.ct.tsx      # Component tests
│       ├── __snapshots__/           # Jest snapshots
│       └── a11y-results/            # Accessibility test results
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Toast Notifications

```tsx
const [notifications, setNotifications] = useState([]);

const addNotification = (status, title, message) => {
  const id = Date.now();
  setNotifications((prev) => [...prev, { id, status, title, message }]);
};

const removeNotification = (id) => {
  setNotifications((prev) => prev.filter((n) => n.id !== id));
};

// Render notifications
{
  notifications.map((notification) => (
    <Notification
      key={notification.id}
      status={notification.status}
      title={notification.title}
      onClose={() => removeNotification(notification.id)}
    >
      {notification.message}
    </Notification>
  ));
}
```

### Form Validation Messages

```tsx
const [errors, setErrors] = useState([]);

{
  errors.map((error, index) => (
    <Notification
      key={index}
      status="error"
      title="Validation Error"
      closable={false}
    >
      {error.message}
    </Notification>
  ));
}
```

### Status Updates

```tsx
const [status, setStatus] = useState(null);

{
  status === 'saving' && (
    <Notification status="info" title="Saving...">
      Please wait while we save your changes.
    </Notification>
  );
}

{
  status === 'saved' && (
    <Notification status="success" title="Saved">
      Your changes have been saved successfully.
    </Notification>
  );
}
```

## Best Practices

1. **Use appropriate status** - Choose the correct status (success/error/warning/info) for the message type
2. **Provide clear titles** - Use descriptive titles that clearly indicate the message purpose
3. **Keep content concise** - Use clear, brief language for notification content
4. **Consider dismissibility** - Make notifications closable unless they require user action
5. **Use action links sparingly** - Only include links when additional action is needed
6. **Handle accessibility** - Ensure proper ARIA attributes and screen reader support
7. **Test with screen readers** - Verify notifications work properly with assistive technologies
8. **Use consistent styling** - Leverage the built-in status colors and theming

## Migration Notes

### From older versions:

- Ensure you have the required peer dependencies installed
- The component now requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling
- Status prop now defaults to 'info' instead of undefined
- Icon display is now controlled by `showIcon` prop (defaults to true)

## Related Components

- `@fil-react-components/button` - Used for close button functionality
- `@fil-react-components/anchor` - Used for action links
- `@fil-react-components/paragraph` - Used for multi-paragraph content
- `@fil-react-components/streamline-icon` - Used for status icons
- `@fil-react-components/theme-provider` - Required for styling and theming</content>
  <parameter name="filePath">c:\Users\A744601\Documents\codebase\TAPP101992-fil-react-components\metadata\Notification-2.13.11.md
