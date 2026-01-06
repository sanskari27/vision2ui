# SimplePanel-1.3.6.md

## Overview

The SimplePanel component is a flexible, accessible panel component that displays structured data in a card-like layout with a header section, optional badge, actions, and a grid of key-value pairs. It follows the GDS (Global Design System) standards and provides a clean, organized way to present information with optional footer content.

## Package Information

- **Package Name**: `@fil-react-components/simple-panel`
- **Version**: 1.3.6
- **Description**: SimplePanel React Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/simple-panel
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/badge`: ^2.10.11
- `@fil-react-components/button`: ^3.4.2
- `@fil-react-components/heading`: ^2.11.9
- `@fil-react-components/notification`: ^2.13.11
- `@fil-react-components/svg-icons`: ^1.9.0
- `@fil-react-components/with-styles`: ^2.7.8
- `@fil-react-mixins/styled`: ^2.7.1
- `classnames`: ^2.5.1

## Exports

```typescript
import SimplePanel from '@fil-react-components/simple-panel';
```

### Available Exports:

- `SimplePanel` (default export) - Main simple panel component with header, items, and optional footer

## Component Structure

### Main Component: SimplePanel

The SimplePanel component renders a structured panel with a header containing title, optional subtitle, badge, and actions, followed by a grid of panel items and optional footer content.

### Component Variations:

1. **Standard SimplePanel** - Default panel with header and items grid
2. **Panel with Actions** - Includes action buttons in the header
3. **Panel with Badge** - Shows status or category badge
4. **Panel with Footer** - Includes footer content below the items
5. **Empty Panel** - Shows "No data" message when no items provided

### Component Hierarchy:

```
SimplePanel (Container)
├── Panel Header
│   ├── Header Content
│   │   ├── Header Main
│   │   │   ├── Title (HeadingXS)
│   │   │   └── Subtitle (optional)
│   │   ├── Badge (optional)
│   │   └── Actions (optional)
│   │       └── Action Items
├── Panel Body Container
│   ├── Panel Body (Grid)
│   │   └── Panel Items
│   │       ├── Item Title
│   │       └── Item Value
│   ├── Empty State (when no items)
│   └── Footer Gap (when footer present)
└── Footer (optional)
    └── Children Content
```

## Props

### SimplePanelProps

| Prop          | Type          | Default      | Description                                           |
| ------------- | ------------- | ------------ | ----------------------------------------------------- |
| `children`    | `ReactNode`   | -            | Content to render in the footer section               |
| `className`   | `string`      | -            | Additional CSS class names                            |
| `headerData`  | `HeaderData`  | **Required** | Header configuration with name and optional subheader |
| `tag`         | `BadgeProps`  | -            | Badge configuration for status display                |
| `panelItems`  | `PanelItem[]` | `[]`         | Array of key-value pairs to display                   |
| `actions`     | `ReactNode[]` | -            | Array of action elements (buttons, links)             |
| `placeholder` | `string`      | `'-'`        | Placeholder text for empty values                     |
| `data-testid` | `string`      | -            | Test ID for the panel container                       |

### HeaderData Interface

| Prop        | Type        | Description                                 |
| ----------- | ----------- | ------------------------------------------- |
| `name`      | `ReactNode` | Main title for the panel header             |
| `subheader` | `string`    | Optional subtitle displayed below the title |

### PanelItem Interface

| Prop      | Type        | Description                                  |
| --------- | ----------- | -------------------------------------------- |
| `heading` | `ReactNode` | Label/title for the item                     |
| `value`   | `ReactNode` | Value to display (uses placeholder if empty) |
| `id`      | `string`    | Optional test ID for the item                |

## Usage Examples

### Basic SimplePanel

```tsx
import SimplePanel from '@fil-react-components/simple-panel';

<SimplePanel
  headerData={{
    name: 'John Doe',
    subheader: 'Software Engineer',
  }}
  panelItems={[
    { heading: 'Employee ID', value: '12345' },
    { heading: 'Department', value: 'Engineering' },
    { heading: 'Location', value: 'London' },
  ]}
/>;
```

### Panel with Badge

```tsx
<SimplePanel
  headerData={{
    name: 'Jane Smith',
    subheader: 'Product Manager',
  }}
  tag={{
    label: 'Active',
    size: 'small',
    kind: 'solid',
    color: 'success',
  }}
  panelItems={[
    { heading: 'Status', value: 'Active' },
    { heading: 'Role', value: 'Manager' },
    { heading: 'Team', value: 'Product' },
  ]}
/>
```

### Panel with Actions

```tsx
import { LinkButton } from '@fil-react-components/button';
import IconPencilWrite2 from '@fil-react-components/svg-icons/dist/PencilWrite2';
import Bin1 from '@fil-react-components/svg-icons/dist/Bin1';

<SimplePanel
  headerData={{
    name: 'Account Details',
  }}
  actions={[
    <LinkButton
      onClick={() => {}}
      svgIcon={IconPencilWrite2}
      svgSize={16}
      iconPosition="left"
    >
      Edit
    </LinkButton>,
    <LinkButton
      onClick={() => {}}
      svgIcon={Bin1}
      svgSize={16}
      iconPosition="left"
    >
      Delete
    </LinkButton>,
  ]}
  panelItems={[
    { heading: 'Account Number', value: '123456789' },
    { heading: 'Balance', value: '£2,500.00' },
    { heading: 'Account Type', value: 'Savings' },
  ]}
/>;
```

### Panel with Footer Content

```tsx
import Notification from '@fil-react-components/notification';

<SimplePanel
  headerData={{
    name: 'System Status',
  }}
  panelItems={[
    { heading: 'Server Status', value: 'Online' },
    { heading: 'Last Backup', value: '2024-01-15' },
    { heading: 'Uptime', value: '99.9%' },
  ]}
>
  <div>
    <Notification
      title="Maintenance Notice"
      children="Scheduled maintenance on Sunday 2AM-4AM"
      status="warning"
      closable={false}
    />
  </div>
</SimplePanel>;
```

### Empty Panel

```tsx
<SimplePanel
  headerData={{
    name: 'No Data Available',
  }}
  tag={{
    label: 'Empty',
    size: 'small',
    kind: 'solid',
    color: 'warning',
  }}
/>
```

### Panel with Custom Test IDs

```tsx
<SimplePanel
  data-testid="user-profile-panel"
  headerData={{
    name: 'User Profile',
  }}
  panelItems={[
    { heading: 'Name', value: 'Alice Johnson', id: 'user-name' },
    { heading: 'Email', value: 'alice@example.com', id: 'user-email' },
    { heading: 'Phone', value: '+44 123 456 7890', id: 'user-phone' },
  ]}
/>
```

### Panel with React Elements as Values

```tsx
<SimplePanel
  headerData={{
    name: 'Project Status',
  }}
  panelItems={[
    { heading: 'Project Name', value: <strong>Website Redesign</strong> },
    {
      heading: 'Progress',
      value: <span style={{ color: 'green' }}>85% Complete</span>,
    },
    { heading: 'Deadline', value: 'March 15, 2024' },
  ]}
/>
```

## Features

### Accessibility

- Semantic HTML structure with proper heading hierarchy
- Screen reader support for panel content
- Keyboard navigation for interactive elements
- Test IDs for automated testing
- Proper ARIA labeling where applicable

### Styling

- Styled-components integration with theme provider
- Responsive grid layout (4 columns on large screens, 2 on medium, 1 on small)
- Consistent spacing and typography
- Theme-aware colors and borders
- Custom className support

### Layout

- Responsive header with flexible content arrangement
- Grid-based item layout with breakpoints
- Optional footer section
- Empty state handling
- Action button positioning

### Content Management

- Flexible header with title and subtitle
- Optional badge display
- Action buttons in header
- Key-value pair items with placeholders
- Footer content support

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

- Default configuration with sample data
- Empty panel state
- Panel with action buttons
- Panel with footer notifications
- Various badge configurations

## Data Attributes

- `data-testid` - Custom test ID applied to the main container

## CSS Classes

- `fil-simple-panel` - Base panel container
- `fil-simple-panel__container` - Inner container with border
- `fil-simple-panel__panel-header` - Header section
- `fil-simple-panel__header-content` - Header content wrapper
- `fil-simple-panel__header-content__main` - Main header content
- `fil-simple-panel__header-content__title` - Title styling
- `fil-simple-panel__header-content__subtitle` - Subtitle styling
- `fil-simple-panel__separator` - Separator line
- `fil-simple-panel__header-content__actions` - Actions container
- `fil-simple-panel__header-content__action_item` - Individual action item
- `fil-simple-panel__body-container` - Body content wrapper
- `fil-simple-panel__panel-body` - Items grid container
- `fil-simple-panel__panel-item` - Individual item container
- `fil-simple-panel__panel-item__title` - Item title/label
- `fil-simple-panel__panel-item__value` - Item value
- `fil-simple-panel__empty-state` - Empty state message
- `fil-simple-panel__footer-gap` - Gap before footer
- `fil-simple-panel__footer` - Footer content area

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
SimplePanel/
├── src/
│   ├── SimplePanel.tsx          # Main simple panel component
│   ├── SimplePanel.style.ts     # Panel styles with theme integration
│   ├── SimplePanel.mock.tsx     # Mock configurations for testing
│   ├── SimplePanel.stories.tsx  # Storybook stories
│   ├── index.ts                 # Main exports
│   └── tests/
│       ├── SimplePanel.test.tsx    # Unit tests
│       ├── SimplePanel.ct.tsx      # Component tests
│       └── __snapshots__/          # Jest snapshots
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### User Profile Panel

```tsx
<SimplePanel
  headerData={{
    name: 'User Information',
    subheader: 'Personal Details',
  }}
  tag={{
    label: 'Verified',
    size: 'small',
    kind: 'solid',
    color: 'success',
  }}
  panelItems={[
    { heading: 'Full Name', value: 'John Smith' },
    { heading: 'Email', value: 'john.smith@example.com' },
    { heading: 'Phone', value: '+44 123 456 7890' },
    { heading: 'Address', value: '123 Main St, London' },
    { heading: 'Date of Birth', value: '15/03/1985' },
    { heading: 'Nationality', value: 'British' },
  ]}
/>
```

### Account Summary Panel

```tsx
<SimplePanel
  headerData={{
    name: 'Account Summary',
  }}
  actions={[
    <LinkButton onClick={handleEdit} svgIcon={IconPencilWrite2}>
      Edit
    </LinkButton>,
  ]}
  panelItems={[
    { heading: 'Account Number', value: '****1234' },
    { heading: 'Account Type', value: 'Savings Account' },
    { heading: 'Balance', value: '£5,250.75' },
    { heading: 'Available Balance', value: '£5,250.75' },
    { heading: 'Interest Rate', value: '1.25% AER' },
    { heading: 'Last Transaction', value: '12 Jan 2024' },
  ]}
/>
```

### System Status Panel

```tsx
<SimplePanel
  headerData={{
    name: 'System Status',
    subheader: 'Current Health',
  }}
  tag={{
    label: 'Healthy',
    size: 'small',
    kind: 'solid',
    color: 'success',
  }}
  panelItems={[
    { heading: 'API Status', value: 'Operational' },
    { heading: 'Database', value: 'Connected' },
    { heading: 'Cache', value: 'Active' },
    { heading: 'Queue', value: 'Processing' },
    { heading: 'Uptime', value: '99.98%' },
    { heading: 'Last Incident', value: 'None' },
  ]}
>
  <Notification
    title="Scheduled Maintenance"
    children="System maintenance scheduled for Sunday 2:00 AM - 4:00 AM GMT"
    status="info"
    closable={false}
  />
</SimplePanel>
```

### Product Information Panel

```tsx
<SimplePanel
  headerData={{
    name: 'Product Details',
  }}
  tag={{
    label: 'In Stock',
    size: 'small',
    kind: 'solid',
    color: 'success',
  }}
  panelItems={[
    { heading: 'Product ID', value: 'PROD-001' },
    { heading: 'Name', value: 'Wireless Headphones' },
    { heading: 'Category', value: 'Electronics' },
    { heading: 'Price', value: '£89.99' },
    { heading: 'Stock Level', value: '45 units' },
    { heading: 'Rating', value: '4.5/5 (128 reviews)' },
  ]}
/>
```

## Best Practices

1. **Provide meaningful header data** - Always include a clear, descriptive title
2. **Use subheaders sparingly** - Only add subheaders when they add value
3. **Consider badges for status** - Use badges to highlight important status information
4. **Keep panel items concise** - Use clear, brief labels and values
5. **Handle empty states** - Provide appropriate messaging when no data is available
6. **Use actions thoughtfully** - Only include actions that are relevant to the panel content
7. **Consider responsive design** - Test how the panel looks on different screen sizes
8. **Use test IDs for testing** - Provide meaningful test IDs for automated testing
9. **Format values consistently** - Use consistent formatting for similar types of data
10. **Consider accessibility** - Ensure color contrast and screen reader compatibility

## Migration Notes

### From older versions:

- Ensure you have the required peer dependencies installed
- The component now requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling
- Header structure updated to support children-only rendering
- Border color and padding updated for better visual consistency
- Undefined subheader and children are now properly handled
- Improved responsive breakpoints for better mobile experience

## Related Components

- `@fil-react-components/badge` - Badge component for status display
- `@fil-react-components/button` - Button components for actions
- `@fil-react-components/heading` - Heading component for titles
- `@fil-react-components/notification` - Notification component for footer content
- `@fil-react-components/theme-provider` - Required for styling and theming</content>
  <parameter name="filePath">c:\Users\A744601\Documents\codebase\TAPP101992-fil-react-components\metadata\SimplePanel-1.3.6.md
