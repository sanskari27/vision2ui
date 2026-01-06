# FileUploader Component Documentation

## Overview

The FileUploader component provides a flexible file upload interface with drag-and-drop functionality and button-based upload options. It supports file validation, progress states, error handling, and follows the GDS (Global Design System) standards. The component handles both single and multiple file uploads with customizable validation rules.

## Package Information

- **Package Name**: `@fil-react-components/file-uploader`
- **Version**: 2.12.5
- **Description**: FileUploader Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/file-uploader
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/button`: ^3.4.2
- `@fil-react-components/notification`: ^2.13.11
- `@fil-react-components/paragraph`: ^2.10.9
- `@fil-react-components/spinner`: ^2.11.9
- `@fil-react-components/streamline-icon`: ^2.15.6
- `@fil-react-components/svg-icons`: ^1.9.0
- `@fil-react-components/with-styles`: ^2.7.8
- `@fil-react-hooks/unique-id`: ^1.4.3
- `@fil-react-mixins/styled`: ^2.7.1
- `classnames`: ^2.5.1
- `lodash`: 4.17.21

## Exports

```typescript
import FileUploader from '@fil-react-components/file-uploader';
```

### Available Exports:

- `FileUploader` (default export) - Main file uploader component

## Component Structure

### Main Component: FileUploader

A comprehensive file upload component that supports both drag-and-drop and button-based file selection with validation and progress tracking.

### Component Variations:

1. **Drag-Drop Mode** (default) - Large drop zone with dashed border for drag-and-drop uploads
2. **Button Mode** - Compact button interface for file selection

### Component Features:

- **Upload Modes**: Drag-and-drop or button-based file selection
- **File Validation**: Type and size validation with customizable rules
- **Progress States**: Uploading, success, error, and default states
- **Multiple Files**: Support for single or multiple file uploads
- **Error Handling**: Comprehensive error messaging and notifications
- **Accessibility**: Full keyboard navigation and screen reader support
- **Theme Integration**: Styled-components with theme provider

### Component Hierarchy:

```
FileUploader
├── Title (optional)
├── Assistive Text
├── Hidden File Input
├── Upload Label/Zone
│   ├── Upload Icon
│   ├── Upload Text/Button
└── File List (when files present)
    ├── File Items
    │   ├── File Icon
    │   ├── File Name
    │   ├── Status Indicators (spinner/success/error)
    │   └── Remove Button
    └── Error Notifications
```

## Props

### FileUploaderProps

| Prop                          | Type                                                     | Default                                     | Description                                          |
| ----------------------------- | -------------------------------------------------------- | ------------------------------------------- | ---------------------------------------------------- |
| `className`                   | `string`                                                 | -                                           | Additional CSS class names                           |
| `title`                       | `string`                                                 | `'Upload'`                                  | Title text displayed above the uploader              |
| `assistiveText`               | `string`                                                 | `'Jpegs or PNG format. Max file size: 5MB'` | Helper text describing upload requirements           |
| `id`                          | `string`                                                 | -                                           | HTML id attribute for the input element              |
| `text`                        | `string`                                                 | `'Drag and drop a file or click to upload'` | Main upload instruction text                         |
| `httpClient`                  | `Function`                                               | `fetch`                                     | HTTP client function for uploads (defaults to fetch) |
| `url`                         | `string`                                                 | -                                           | **Required** - Upload endpoint URL                   |
| `requestOptions`              | `Record<string, unknown>`                                | `defaultRequestOptions`                     | Additional fetch options                             |
| `errorMessage`                | `Function`                                               | `defaultErrorMessage`                       | Function to generate error messages                  |
| `kind`                        | `'button' \| 'drag-drop'`                                | `'drag-drop'`                               | Upload interface style                               |
| `buttonText`                  | `string`                                                 | `'Select files'`                            | Button text for button mode                          |
| `disabled`                    | `boolean`                                                | `false`                                     | Whether the uploader is disabled                     |
| `files`                       | `FileInterface[]`                                        | `[]`                                        | Pre-populated files array                            |
| `multiple`                    | `boolean`                                                | `false`                                     | Allow multiple file selection                        |
| `fullWidthButton`             | `boolean`                                                | `false`                                     | Make button full width in button mode                |
| `fileValidationErrorMessages` | `ErrorMessageInterface`                                  | -                                           | Custom validation error messages                     |
| `removeFileCallback`          | `Function`                                               | -                                           | Callback when files are removed                      |
| `validateFiles`               | `FileValidationInterface`                                | -                                           | File validation rules                                |
| `validateFileData`            | `(file: File) => { isValid: boolean; message?: string }` | -                                           | Custom file content validation                       |

### FileInterface

| Prop     | Type                                   | Default | Description                    |
| -------- | -------------------------------------- | ------- | ------------------------------ |
| `status` | `UploadStatus`                         | -       | Current upload status          |
| `name`   | `string`                               | -       | **Required** - File name       |
| `error`  | `{ title?: string; message?: string }` | -       | Error details if upload failed |
| `id`     | `string`                               | -       | Unique file identifier         |

### FileValidationInterface

| Prop              | Type            | Default | Description             |
| ----------------- | --------------- | ------- | ----------------------- |
| `allowedFileType` | `Array<string>` | -       | Allowed file extensions |
| `allowedFileSize` | `number`        | -       | Maximum file size in MB |

### ErrorMessageInterface

| Prop   | Type                                   | Default | Description                |
| ------ | -------------------------------------- | ------- | -------------------------- |
| `size` | `{ title?: string; message?: string }` | -       | Custom size error messages |
| `type` | `{ title?: string; message?: string }` | -       | Custom type error messages |

### UploadStatus

```typescript
type UploadStatus = 'uploading' | 'success' | 'error' | 'default';
```

## Usage Examples

### Basic Drag-and-Drop Upload

```tsx
import FileUploader from '@fil-react-components/file-uploader';

<FileUploader
  url="https://api.example.com/upload"
  title="Upload Documents"
  assistiveText="PDF files only, max 10MB"
/>;
```

### Button Mode Upload

```tsx
<FileUploader
  kind="button"
  url="https://api.example.com/upload"
  buttonText="Choose File"
  title="Select Document"
/>
```

### Multiple File Upload

```tsx
<FileUploader
  url="https://api.example.com/upload"
  multiple={true}
  title="Upload Multiple Files"
  assistiveText="Images and documents, max 5MB each"
/>
```

### File Validation

```tsx
<FileUploader
  url="https://api.example.com/upload"
  validateFiles={{
    allowedFileType: ['pdf', 'doc', 'docx'],
    allowedFileSize: 10,
  }}
  fileValidationErrorMessages={{
    type: {
      title: 'Invalid File Type',
      message: 'Please upload PDF or Word documents only.',
    },
    size: {
      title: 'File Too Large',
      message: 'Files must be smaller than 10MB.',
    },
  }}
/>
```

### Custom File Content Validation

```tsx
const validateFileContent = (file: File) => {
  // Custom validation logic
  if (file.size === 0) {
    return { isValid: false, message: 'File cannot be empty' };
  }
  return { isValid: true };
};

<FileUploader
  url="https://api.example.com/upload"
  validateFileData={validateFileContent}
/>;
```

### Controlled File Management

```tsx
const [uploadedFiles, setUploadedFiles] = useState([]);

<FileUploader
  url="https://api.example.com/upload"
  files={uploadedFiles}
  removeFileCallback={(removedId, remainingFiles) => {
    setUploadedFiles(remainingFiles);
    console.log('Removed file:', removedId);
  }}
/>;
```

### Custom HTTP Client

```tsx
const customHttpClient = async (url: string, options: any) => {
  const response = await fetch(url, {
    ...options,
    headers: {
      Authorization: 'Bearer ' + token,
      ...options.headers,
    },
  });
  return response;
};

<FileUploader
  url="https://api.example.com/upload"
  httpClient={customHttpClient}
/>;
```

### Full Width Button

```tsx
<FileUploader
  kind="button"
  fullWidthButton={true}
  url="https://api.example.com/upload"
  buttonText="Upload Document"
/>
```

### Error Handling

```tsx
const customErrorMessage = (error: any) => ({
  title: 'Upload Failed',
  message: `Error: ${error.message || 'Unknown error occurred'}`,
});

<FileUploader
  url="https://api.example.com/upload"
  errorMessage={customErrorMessage}
/>;
```

## Features

### Upload Modes

- **Drag-and-Drop**: Large interactive zone with visual feedback on hover
- **Button Upload**: Compact button interface for traditional file selection
- **Multiple Files**: Support for batch file uploads
- **Single File**: Restrict to one file at a time

### File Validation

- **Type Validation**: Restrict uploads to specific file extensions
- **Size Validation**: Enforce maximum file size limits
- **Content Validation**: Custom validation functions for file content
- **Error Messages**: Customizable validation error messages

### Progress & Status

- **Upload States**: Visual indicators for uploading, success, error states
- **Progress Feedback**: Spinner during upload, success/error icons
- **File Management**: Remove uploaded files with callback support
- **Status Persistence**: Maintain file status across component updates

### Accessibility

- **Keyboard Navigation**: Full keyboard support for file selection
- **Screen Reader**: Proper ARIA labels and status announcements
- **Focus Management**: Clear focus indicators and logical tab order
- **Error Announcements**: Screen reader notifications for errors

### Styling

- **Theme Integration**: Consistent with GDS design system
- **Responsive Design**: Adapts to different screen sizes
- **Custom Styling**: CSS class support for additional customization
- **Visual States**: Hover, focus, and disabled state styling

## Testing

The component includes:

- Unit tests using Jest
- Component tests using Playwright
- Accessibility testing with axe-devtools
- Snapshot testing for UI consistency

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

- Drag-and-drop upload variations
- Button upload variations
- File validation scenarios
- Error states and handling
- Multiple file uploads
- Full width button configurations
- Size and type validation examples

## Data Attributes

- `data-frc="file-uploader"` - Applied to the main file uploader container

## CSS Classes

- `fil-file-uploader` - Main file uploader container
- `fil-file-uploader__title` - Title text element
- `fil-file-uploader__assistive-text` - Assistive/helper text
- `fil-file-uploader__input` - Hidden file input element
- `fil-file-uploader__label` - Upload trigger label/button
- `fil-file-uploader__label--drag-drop` - Drag-drop mode styling
- `fil-file-uploader__label--button` - Button mode styling
- `fil-file-uploader__label--hover` - Hover state styling
- `fil-file-uploader__icon` - Upload icon
- `fil-file-uploader__text` - Upload instruction text
- `fil-file-uploader__files` - File list container
- `fil-file-uploader__file` - Individual file item
- `fil-file-uploader__file--uploading` - Uploading file styling
- `fil-file-uploader__file--success` - Successful upload styling
- `fil-file-uploader__file--error` - Error file styling
- `fil-file-uploader__file-icon` - File type icon
- `fil-file-uploader__file-label` - File name text
- `fil-file-uploader__file__remove` - Remove file button
- `fil-file-uploader__error` - Error notification container

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
FileUploader/
├── src/
│   ├── FileUploader.mock.ts         # Mock configurations for testing
│   ├── FileUploader.stories.tsx     # Storybook stories
│   ├── FileUploader.style.ts        # Styled-components styles
│   ├── FileUploader.tsx             # Main file uploader component
│   ├── FileUploader.utils.ts        # Utility functions
│   ├── index.ts                     # Main exports
│   └── tests/
│       ├── FileUploader.ct.tsx      # Component tests
│       ├── FileUploader.test.tsx    # Unit tests
│       └── __snapshots__/           # Snapshot files
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Document Upload Form

```tsx
const DocumentUpload = () => {
  const [uploadedDocs, setUploadedDocs] = useState([]);

  return (
    <FileUploader
      url="/api/documents/upload"
      title="Upload Documents"
      assistiveText="PDF, DOC, DOCX files only. Maximum 10MB per file."
      multiple={true}
      validateFiles={{
        allowedFileType: ['pdf', 'doc', 'docx'],
        allowedFileSize: 10,
      }}
      files={uploadedDocs}
      removeFileCallback={(id, remaining) => {
        setUploadedDocs(remaining);
        // Handle document removal
      }}
    />
  );
};
```

### Image Gallery Upload

```tsx
const ImageGallery = () => {
  return (
    <FileUploader
      url="/api/images/upload"
      title="Upload Images"
      assistiveText="JPG, PNG, GIF files only. Maximum 5MB per file."
      multiple={true}
      validateFiles={{
        allowedFileType: ['jpg', 'jpeg', 'png', 'gif'],
        allowedFileSize: 5,
      }}
      validateFileData={(file) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            if (img.width < 100 || img.height < 100) {
              resolve({
                isValid: false,
                message: 'Image too small (min 100x100px)',
              });
            } else {
              resolve({ isValid: true });
            }
          };
          img.src = URL.createObjectURL(file);
        });
      }}
    />
  );
};
```

### Profile Picture Upload

```tsx
const ProfilePictureUpload = () => {
  return (
    <FileUploader
      kind="button"
      url="/api/profile/picture"
      buttonText="Choose Profile Picture"
      title="Profile Picture"
      assistiveText="JPG or PNG files only. Maximum 2MB."
      validateFiles={{
        allowedFileType: ['jpg', 'jpeg', 'png'],
        allowedFileSize: 2,
      }}
    />
  );
};
```

### Bulk File Import

```tsx
const BulkImport = () => {
  const handleUploadComplete = (files) => {
    // Process uploaded files
    files.forEach((file) => {
      if (file.status === 'success') {
        // Import file data
        importFileData(file);
      }
    });
  };

  return (
    <FileUploader
      url="/api/import"
      title="Bulk Data Import"
      assistiveText="CSV or Excel files only. Maximum 50MB."
      multiple={true}
      validateFiles={{
        allowedFileType: ['csv', 'xlsx', 'xls'],
        allowedFileSize: 50,
      }}
      httpClient={async (url, options) => {
        const response = await fetch(url, options);
        if (response.ok) {
          handleUploadComplete(files);
        }
        return response;
      }}
    />
  );
};
```

### Resume/CV Upload

```tsx
const ResumeUpload = () => {
  return (
    <FileUploader
      kind="button"
      fullWidthButton={true}
      url="/api/resume/upload"
      buttonText="Upload Resume"
      title="Resume Upload"
      assistiveText="PDF or Word documents only. Maximum 5MB."
      validateFiles={{
        allowedFileType: ['pdf', 'doc', 'docx'],
        allowedFileSize: 5,
      }}
    />
  );
};
```

## Best Practices

1. **Provide clear instructions** - Use descriptive assistive text for file requirements
2. **Validate files appropriately** - Set reasonable size and type limits
3. **Handle errors gracefully** - Provide clear error messages and recovery options
4. **Use appropriate upload mode** - Drag-drop for bulk uploads, button for single files
5. **Consider mobile users** - Ensure touch targets are adequate
6. **Provide feedback** - Show upload progress and completion status
7. **Handle file removal** - Implement removeFileCallback for proper state management
8. **Test accessibility** - Ensure keyboard navigation and screen reader support
9. **Use custom validation** - Implement validateFileData for content-specific checks
10. **Manage file state** - Use controlled mode for complex upload workflows

## Migration Notes

### General Migration:

- Ensure you have the required peer dependencies installed
- The component requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling
- React 16.14.0+ is required

### Recent Updates:

- Added `validateFileData` prop for custom file content validation (v2.12.0)
- Added `data-frc` attribute for component identification (v2.11.0)
- Removed "important" usage in spacing styles (v2.11.5)

### Breaking Changes:

- Ensure `url` prop is always provided as it's required for uploads
- Custom HTTP clients should match the expected signature

## Related Components

- `@fil-react-components/button` - Button component used in button mode
- `@fil-react-components/notification` - Error notification display
- `@fil-react-components/spinner` - Loading indicator during uploads
- `@fil-react-components/streamline-icon` - Icon components
- `@fil-react-components/theme-provider` - Theme provider for styling
- `@fil-react-components/with-styles` - HOC for styled-components integration
