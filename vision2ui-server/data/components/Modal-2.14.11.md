# Modal Component Documentation

## Overview

The Modal component provides a flexible, accessible modal dialog system built on top of react-modal, with comprehensive theming and customization options following the GDS (Global Design System) standards. It supports various content types including text, images, icons, and custom components, with built-in close functionality, action buttons, and responsive design. The component integrates seamlessly with the theme provider and provides proper focus management and accessibility features.

## Package Information

- **Package Name**: `@fil-react-components/modal`
- **Version**: 2.14.11
- **Description**: Modal Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/modal
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `react-dom`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/anchor`: ^2.15.2
- `@fil-react-components/button`: ^3.4.2
- `@fil-react-components/heading`: ^2.11.10
- `@fil-react-components/image`: ^1.10.10
- `@fil-react-components/streamline-icon`: ^2.15.6
- `@fil-react-components/svg-icons`: ^1.9.0
- `@fil-react-mixins/styled`: ^2.7.1
- `classnames`: ^2.5.1
- `react-modal`: ^3.16.3

## Dev Dependencies

- `@fil-react-components/paragraph`: ^2.10.9
- `@fil-react-components/text-field`: ^2.15.24
- `@fil-react-utils/testing`: ^1.12.4

## Exports

```typescript
import Modal from '@fil-react-components/modal';
```

### Available Exports:

- `Modal` (default export) - Main modal component with full functionality

## Component Structure

### Main Component: Modal

A comprehensive modal dialog component built on react-modal with GDS theming.

### Component Features:

- **Size Variants**: Small and large modal sizes with responsive behavior
- **Content Types**: Support for headings, images, icons, and custom content
- **Action Buttons**: Primary and secondary CTA buttons with customizable types
- **Close Functionality**: Optional close button with customizable behavior
- **Background Control**: Option to enable/disable background scrolling
- **Focus Management**: Proper focus trapping and restoration
- **Accessibility**: Full ARIA support and keyboard navigation
- **Theme Integration**: Complete integration with GDS theme provider

### Component Hierarchy:

```
Modal Component
├── Modal Overlay (react-modal)
│   ├── Modal Content
│   │   ├── Close Button (optional)
│   │   ├── Icon (optional)
│   │   ├── Heading (optional)
│   │   ├── Image (optional)
│   │   ├── Body Content
│   │   └── CTA Buttons (optional)
```

## Props

### ModalProps

| Prop                     | Type                                                  | Default          | Description                       |
| ------------------------ | ----------------------------------------------------- | ---------------- | --------------------------------- |
| `showModal`              | `boolean`                                             | `false`          | Controls modal visibility         |
| `heading`                | `string`                                              | -                | Modal heading text                |
| `children`               | `React.ReactNode`                                     | -                | Modal body content                |
| `size`                   | `'small' \| 'large'`                                  | `'large'`        | Modal size variant                |
| `className`              | `string`                                              | -                | Additional CSS class names        |
| `imageSrc`               | `string`                                              | -                | Image source URL                  |
| `imageAlt`               | `string`                                              | -                | Alt text for image                |
| `primaryLabel`           | `string`                                              | -                | Primary button text               |
| `primaryProps`           | `PrimaryButton props`                                 | -                | Props for primary button          |
| `secondaryLabel`         | `string`                                              | -                | Secondary button text             |
| `secondaryType`          | `'link' \| 'button'`                                  | `'button'`       | Secondary button type             |
| `secondaryProps`         | `Button props`                                        | -                | Props for secondary button        |
| `primaryButtonComp`      | `React.ComponentType`                                 | `PrimaryButton`  | Custom primary button component   |
| `secondaryButtonComp`    | `React.ComponentType`                                 | `TertiaryButton` | Custom secondary button component |
| `contentClassName`       | `string`                                              | -                | Class for modal content           |
| `enableBackgroundScroll` | `boolean`                                             | `false`          | Allow background scrolling        |
| `icon`                   | `React.ComponentType`                                 | -                | Icon component to display         |
| `alignCenter`            | `boolean`                                             | `false`          | Center align content              |
| `cancellable`            | `{buttonText?: string, closeButtonHandler: Function}` | -                | Close button configuration        |
| `bindElement`            | `string \| HTMLElement`                               | -                | Element to bind modal to          |
| `...extraProps`          | `ReactModal.Props`                                    | -                | All react-modal props             |

## Usage Examples

### Basic Modal

```tsx
import React, { useState } from 'react';
import Modal from '@fil-react-components/modal';
import { PrimaryButton } from '@fil-react-components/button';

const BasicModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <PrimaryButton onClick={() => setShowModal(true)}>
        Open Modal
      </PrimaryButton>

      <Modal
        showModal={showModal}
        heading="Basic Modal"
        cancellable={{ closeButtonHandler: () => setShowModal(false) }}
        onRequestClose={() => setShowModal(false)}
      >
        <p>This is a basic modal with some content.</p>
      </Modal>
    </>
  );
};
```

### Modal with Action Buttons

```tsx
const ActionModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handlePrimary = () => {
    // Handle primary action
    setShowModal(false);
  };

  const handleSecondary = () => {
    // Handle secondary action
    setShowModal(false);
  };

  return (
    <>
      <PrimaryButton onClick={() => setShowModal(true)}>
        Open Action Modal
      </PrimaryButton>

      <Modal
        showModal={showModal}
        heading="Confirm Action"
        primaryLabel="Confirm"
        primaryProps={{ onClick: handlePrimary }}
        secondaryLabel="Cancel"
        secondaryProps={{ onClick: handleSecondary }}
        cancellable={{ closeButtonHandler: () => setShowModal(false) }}
        onRequestClose={() => setShowModal(false)}
      >
        <p>Are you sure you want to perform this action?</p>
      </Modal>
    </>
  );
};
```

### Modal with Image

```tsx
const ImageModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <PrimaryButton onClick={() => setShowModal(true)}>
        Open Image Modal
      </PrimaryButton>

      <Modal
        showModal={showModal}
        heading="Image Modal"
        imageSrc="https://example.com/image.jpg"
        imageAlt="Descriptive alt text"
        primaryLabel="Close"
        primaryProps={{ onClick: () => setShowModal(false) }}
        cancellable={{ closeButtonHandler: () => setShowModal(false) }}
        onRequestClose={() => setShowModal(false)}
      >
        <p>This modal includes an image above the content.</p>
      </Modal>
    </>
  );
};
```

### Modal with Icon

```tsx
import Icon from '@fil-react-components/svg-icons/dist/CustomAlertCircle';

const IconModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <PrimaryButton onClick={() => setShowModal(true)}>
        Open Icon Modal
      </PrimaryButton>

      <Modal
        showModal={showModal}
        heading="Warning"
        icon={Icon}
        primaryLabel="Acknowledge"
        primaryProps={{ onClick: () => setShowModal(false) }}
        cancellable={{ closeButtonHandler: () => setShowModal(false) }}
        onRequestClose={() => setShowModal(false)}
      >
        <p>This is a warning message with an icon.</p>
      </Modal>
    </>
  );
};
```

### Small Modal

```tsx
const SmallModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <PrimaryButton onClick={() => setShowModal(true)}>
        Open Small Modal
      </PrimaryButton>

      <Modal
        showModal={showModal}
        heading="Small Modal"
        size="small"
        primaryLabel="OK"
        primaryProps={{ onClick: () => setShowModal(false) }}
        cancellable={{ closeButtonHandler: () => setShowModal(false) }}
        onRequestClose={() => setShowModal(false)}
      >
        <p>This is a smaller modal variant.</p>
      </Modal>
    </>
  );
};
```

### Modal with Form

```tsx
import { TextField } from '@fil-react-components/text-field';

const FormModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form data:', formData);
    setShowModal(false);
  };

  return (
    <>
      <PrimaryButton onClick={() => setShowModal(true)}>
        Open Form Modal
      </PrimaryButton>

      <Modal
        showModal={showModal}
        heading="Contact Form"
        primaryLabel="Submit"
        primaryProps={{ onClick: handleSubmit }}
        secondaryLabel="Cancel"
        secondaryProps={{ onClick: () => setShowModal(false) }}
        cancellable={{ closeButtonHandler: () => setShowModal(false) }}
        onRequestClose={() => setShowModal(false)}
      >
        <div style={{ marginBottom: '1rem' }}>
          <TextField
            label="Name"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div>
          <TextField
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
      </Modal>
    </>
  );
};
```

### Modal with Link Button

```tsx
const LinkModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <PrimaryButton onClick={() => setShowModal(true)}>
        Open Link Modal
      </PrimaryButton>

      <Modal
        showModal={showModal}
        heading="External Link"
        primaryLabel="Continue"
        primaryProps={{ onClick: () => setShowModal(false) }}
        secondaryLabel="Learn More"
        secondaryType="link"
        secondaryProps={{
          href: 'https://example.com',
          target: '_blank',
          rel: 'noopener noreferrer',
        }}
        cancellable={{ closeButtonHandler: () => setShowModal(false) }}
        onRequestClose={() => setShowModal(false)}
      >
        <p>You are about to visit an external website.</p>
      </Modal>
    </>
  );
};
```

### Centered Content Modal

```tsx
const CenteredModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <PrimaryButton onClick={() => setShowModal(true)}>
        Open Centered Modal
      </PrimaryButton>

      <Modal
        showModal={showModal}
        heading="Centered Content"
        alignCenter={true}
        primaryLabel="OK"
        primaryProps={{ onClick: () => setShowModal(false) }}
        cancellable={{ closeButtonHandler: () => setShowModal(false) }}
        onRequestClose={() => setShowModal(false)}
      >
        <p style={{ textAlign: 'center' }}>
          This modal has centered content and buttons.
        </p>
      </Modal>
    </>
  );
};
```

### Modal with Background Scroll

```tsx
const ScrollableModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <PrimaryButton onClick={() => setShowModal(true)}>
        Open Scrollable Modal
      </PrimaryButton>

      <Modal
        showModal={showModal}
        heading="Scrollable Background"
        enableBackgroundScroll={true}
        primaryLabel="Close"
        primaryProps={{ onClick: () => setShowModal(false) }}
        cancellable={{ closeButtonHandler: () => setShowModal(false) }}
        onRequestClose={() => setShowModal(false)}
      >
        <p>This modal allows background scrolling while open.</p>
        <p>Scroll down to see the background content move.</p>
      </Modal>
    </>
  );
};
```

### Confirmation Modal

```tsx
const ConfirmationModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleDelete = () => {
    // Perform delete operation
    console.log('Deleting item:', itemToDelete);
    setShowModal(false);
    setItemToDelete(null);
  };

  return (
    <>
      <button
        onClick={() => {
          setItemToDelete('example-item');
          setShowModal(true);
        }}
      >
        Delete Item
      </button>

      <Modal
        showModal={showModal}
        heading="Confirm Deletion"
        primaryLabel="Delete"
        primaryProps={{
          onClick: handleDelete,
          className: 'danger-button', // Add appropriate styling
        }}
        secondaryLabel="Cancel"
        secondaryProps={{ onClick: () => setShowModal(false) }}
        cancellable={{ closeButtonHandler: () => setShowModal(false) }}
        onRequestClose={() => setShowModal(false)}
      >
        <p>
          Are you sure you want to delete this item? This action cannot be
          undone.
        </p>
      </Modal>
    </>
  );
};
```

### Success Modal

```tsx
import SuccessIcon from '@fil-react-components/svg-icons/dist/CustomCheckCircle';

const SuccessModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <PrimaryButton onClick={() => setShowModal(true)}>
        Show Success
      </PrimaryButton>

      <Modal
        showModal={showModal}
        heading="Success!"
        icon={SuccessIcon}
        primaryLabel="Continue"
        primaryProps={{ onClick: () => setShowModal(false) }}
        onRequestClose={() => setShowModal(false)}
      >
        <p>Your action has been completed successfully.</p>
      </Modal>
    </>
  );
};
```

### Error Modal

```tsx
import ErrorIcon from '@fil-react-components/svg-icons/dist/CustomAlertCircle';

const ErrorModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <PrimaryButton onClick={() => setShowModal(true)}>
        Show Error
      </PrimaryButton>

      <Modal
        showModal={showModal}
        heading="Error Occurred"
        icon={ErrorIcon}
        primaryLabel="Try Again"
        primaryProps={{ onClick: () => setShowModal(false) }}
        secondaryLabel="Cancel"
        secondaryProps={{ onClick: () => setShowModal(false) }}
        cancellable={{ closeButtonHandler: () => setShowModal(false) }}
        onRequestClose={() => setShowModal(false)}
      >
        <p>
          An error occurred while processing your request. Please try again.
        </p>
      </Modal>
    </>
  );
};
```

## Features

### Modal Sizes

- **Large Modal**: Default size with maximum width of 752px on large screens
- **Small Modal**: Compact size with maximum width of 30rem on large screens
- **Responsive**: Adapts to screen size with appropriate padding and positioning

### Content Types

- **Text Content**: Standard paragraph and heading content
- **Rich Content**: HTML elements, React components, and custom markup
- **Images**: Hero images with proper responsive handling
- **Icons**: Streamline icons with theme-based colors and sizing
- **Forms**: Integrated form elements and input fields

### Action Buttons

- **Primary Button**: Main call-to-action with primary styling
- **Secondary Button**: Alternative action with tertiary styling
- **Link Button**: Secondary action as an anchor link
- **Custom Components**: Replace default buttons with custom components
- **Flexible Props**: Pass any button props for custom behavior

### Close Functionality

- **Close Button**: Optional X button in top-right corner
- **ESC Key**: Keyboard support for closing modal
- **Background Click**: Click outside modal to close (configurable)
- **Programmatic**: Close via props and event handlers

### Accessibility

- **Focus Management**: Proper focus trapping and restoration
- **ARIA Support**: Screen reader announcements and navigation
- **Keyboard Navigation**: Full keyboard accessibility
- **Semantic HTML**: Proper modal dialog semantics
- **High Contrast**: Theme-based colors for accessibility

### Styling

- **Theme Integration**: Complete GDS theme provider integration
- **Overlay**: Semi-transparent background overlay
- **Shadows**: Elevation with box-shadow for depth
- **Typography**: Theme-consistent font sizing and spacing
- **Responsive**: Mobile-first responsive design

## Testing

The component includes:

- Unit tests using Jest with snapshot testing
- Component tests using Playwright
- Accessibility testing with axe-devtools
- Modal state testing (open/closed)
- Button interaction testing
- Keyboard navigation testing

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

- Basic modal configurations
- Modal with call-to-action buttons
- Modal with images
- Secondary button as link
- Small modal variant
- Modal with form inputs
- Modal with background scroll enabled
- Modal with icons
- Centered content alignment

## Data Attributes

- `data-frc="modal"` - Applied to modal content container

## CSS Classes

- `fil-reveal-overlay` - Modal overlay element
- `fil-reveal` - Modal content container
- `fil-modal__content` - Modal content wrapper
- `fil-modal__exit` - Close button
- `fil-modal__heading` - Modal heading
- `fil-modal__image` - Image container
- `fil-modal__body` - Main content area
- `fil-modal__cta-wrapper` - Button container
- `fil-modal__cta` - Individual button wrapper

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
Modal/
├── src/
│   ├── Modal.tsx              # Main Modal component
│   ├── Modal.mock.tsx         # Mock configurations for testing
│   ├── Modal.stories.tsx      # Storybook stories
│   ├── Modal.style.ts         # Modal styling with theme integration
│   ├── index.ts               # Main exports
│   └── tests/
│       ├── Modal.ct.tsx       # Component tests
│       ├── Modal.test.tsx     # Unit tests
│       ├── ModalWrapper.tsx   # Test wrapper component
│       ├── card-placeholder.svg # Test image asset
│       ├── a11y-results/      # Accessibility test results
│       ├── coverage/          # Test coverage reports
│       └── __snapshots__/     # Snapshot files
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### User Confirmation

```tsx
const DeleteConfirmation = ({ item, onConfirm, onCancel }) => (
  <Modal
    showModal={true}
    heading="Confirm Deletion"
    primaryLabel="Delete"
    primaryProps={{ onClick: onConfirm }}
    secondaryLabel="Cancel"
    secondaryProps={{ onClick: onCancel }}
    cancellable={{ closeButtonHandler: onCancel }}
    onRequestClose={onCancel}
  >
    <p>
      Are you sure you want to delete "{item.name}"? This action cannot be
      undone.
    </p>
  </Modal>
);
```

### Success Feedback

```tsx
const SuccessFeedback = ({ message, onClose }) => (
  <Modal
    showModal={true}
    heading="Success!"
    icon={SuccessIcon}
    primaryLabel="Continue"
    primaryProps={{ onClick: onClose }}
    onRequestClose={onClose}
  >
    <p>{message}</p>
  </Modal>
);
```

### Error Handling

```tsx
const ErrorDialog = ({ error, onRetry, onClose }) => (
  <Modal
    showModal={true}
    heading="Something went wrong"
    icon={ErrorIcon}
    primaryLabel="Try Again"
    primaryProps={{ onClick: onRetry }}
    secondaryLabel="Close"
    secondaryProps={{ onClick: onClose }}
    cancellable={{ closeButtonHandler: onClose }}
    onRequestClose={onClose}
  >
    <p>{error.message}</p>
    <p>Please try again or contact support if the problem persists.</p>
  </Modal>
);
```

### Form Modal

```tsx
const EditFormModal = ({ user, onSave, onCancel }) => {
  const [formData, setFormData] = useState(user);

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <Modal
      showModal={true}
      heading="Edit User"
      primaryLabel="Save Changes"
      primaryProps={{ onClick: handleSave }}
      secondaryLabel="Cancel"
      secondaryProps={{ onClick: onCancel }}
      cancellable={{ closeButtonHandler: onCancel }}
      onRequestClose={onCancel}
    >
      <form>
        <div style={{ marginBottom: '1rem' }}>
          <TextField
            label="Name"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <TextField
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
      </form>
    </Modal>
  );
};
```

### Image Gallery Modal

```tsx
const ImageGalleryModal = ({ image, onNext, onPrevious, onClose }) => (
  <Modal
    showModal={true}
    imageSrc={image.src}
    imageAlt={image.alt}
    primaryLabel="Next"
    primaryProps={{ onClick: onNext }}
    secondaryLabel="Previous"
    secondaryProps={{ onClick: onPrevious }}
    cancellable={{ closeButtonHandler: onClose }}
    onRequestClose={onClose}
  >
    <div style={{ textAlign: 'center' }}>
      <h3>{image.title}</h3>
      <p>{image.description}</p>
    </div>
  </Modal>
);
```

## Best Practices

1. **Use appropriate modal sizes**: Choose small for simple confirmations, large for complex content
2. **Always provide close functionality**: Include close button, ESC key, and background click options
3. **Focus management**: Ensure proper focus trapping and restoration
4. **Keyboard accessibility**: Support Tab navigation and ESC key
5. **Meaningful content**: Use clear headings and descriptive button labels
6. **Loading states**: Show loading indicators for async operations
7. **Error handling**: Provide clear error messages and recovery options
8. **Mobile responsiveness**: Test modal behavior on mobile devices
9. **Content length**: Keep modal content concise and scannable
10. **Action hierarchy**: Use primary button for main action, secondary for alternatives

## Migration Notes

### General Migration:

- Ensure you have the required peer dependencies installed
- The component requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling
- React 16.14.0+ and react-dom are required

### Recent Updates:

- Added `data-frc` attribute for component identification (v2.14.0)
- Theme provider peer dependency updates for compatibility
- Close button focus state improvements (v2.14.7)

### Breaking Changes:

- Verify that your theme provider includes modal-related configuration
- Check that GDS tokens package is available for overlay colors
- Ensure CSS custom properties are available for theme values

### From Previous Versions:

- Component API remains consistent
- Props interface maintained
- Modal sizes unchanged
- Styling approach maintained with styled-components

## Related Components

- `@fil-react-components/theme-provider` - Theme provider for modal styling
- `@fil-react-components/button` - Button components used in modal actions
- `@fil-react-components/heading` - Heading components for modal titles
- `@fil-react-components/image` - Image components for modal content
- `@fil-react-components/streamline-icon` - Icon components for modal icons
- `@fil-react-components/paragraph` - Text components for modal content
- `@fil-react-components/text-field` - Form components for modal forms</content>
  <parameter name="filePath">c:\Users\A744601\Documents\codebase\TAPP101992-fil-react-components\metadata\Modal-2.14.11.md
