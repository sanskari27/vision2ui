# StreamlineIcon-2.15.6.md

## Overview

The StreamlineIcon component is a flexible, accessible icon wrapper that provides consistent styling, sizing, and theming for SVG icons. It supports multiple sizes, color variants, filled/unfilled states, positioning, and background contrast handling. The component works with the @fil-react-components/svg-icons library and follows GDS (Global Design System) standards for iconography.

## Package Information

- **Package Name**: `@fil-react-components/streamline-icon`
- **Version**: 2.15.6
- **Description**: Streamline Icon Component, used with SVG components
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/streamline-icon
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `react-dom`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/with-styles`: ^2.7.8
- `@fil-react-mixins/styled`: ^2.7.1
- `classnames`: ^2.5.1
- `lodash`: 4.17.21

## Exports

```typescript
import StreamlineIcon from '@fil-react-components/streamline-icon';
```

### Available Exports:

- `StreamlineIcon` (default export) - Main icon wrapper component

## Component Structure

### Main Component: StreamlineIcon

The StreamlineIcon component wraps SVG icon components with consistent styling, theming, and accessibility features.

### Component Variations:

1. **Standard Icon** - Default size (24px) with theme-aware styling
2. **Sized Icons** - Multiple predefined sizes (16px, 20px, 24px, 32px, 36px, 48px, 64px)
3. **Positioned Icons** - Left or right positioning with text offset
4. **Colored Icons** - Custom color using theme color tokens
5. **Filled Icons** - Filled style with solid color backgrounds
6. **Background Aware Icons** - Automatic contrast color selection based on background

### Component Hierarchy:

```
StreamlineIcon (Wrapper Span)
└── SVG Icon Component
    └── SVG Elements (paths, circles, etc.)
```

## Props

### StreamlineIconProps

| Prop                | Type                                    | Default      | Description                                      |
| ------------------- | --------------------------------------- | ------------ | ------------------------------------------------ |
| `size`              | `number`                                | `24`         | Icon size in pixels (16, 20, 24, 32, 36, 48, 64) |
| `position`          | `'left' \| 'right'`                     | -            | Position relative to text content                |
| `className`         | `string`                                | -            | Additional CSS class names                       |
| `icon`              | `React.ComponentType`                   | **Required** | SVG icon component to render                     |
| `wrapperProps`      | `React.HTMLAttributes<HTMLSpanElement>` | -            | Additional props for wrapper span                |
| `filled`            | `boolean`                               | `false`      | Whether to use filled icon style                 |
| `iconColor`         | `string`                                | -            | Theme color token for icon color                 |
| `strokeWidth`       | `number`                                | -            | Custom stroke width for icon paths               |
| `inheritFontStyles` | `boolean`                               | `false`      | Whether to inherit font size and line-height     |
| `background`        | `string`                                | -            | Background color token for contrast calculation  |

## Usage Examples

### Basic Icon

```tsx
import StreamlineIcon from '@fil-react-components/streamline-icon';
import IconAdd from '@fil-react-components/svg-icons/dist/Add';

<StreamlineIcon icon={IconAdd} />;
```

### Different Sizes

```tsx
// Extra small (16px)
<StreamlineIcon icon={IconAdd} size={16} />

// Small (20px)
<StreamlineIcon icon={IconAdd} size={20} />

// Default (24px)
<StreamlineIcon icon={IconAdd} size={24} />

// Medium (32px)
<StreamlineIcon icon={IconAdd} size={32} />

// Large (48px)
<StreamlineIcon icon={IconAdd} size={48} />

// Extra large (64px)
<StreamlineIcon icon={IconAdd} size={64} />
```

### Positioned Icons

```tsx
// Left positioned (for buttons, links)
<StreamlineIcon icon={IconAdd} position="left" />

// Right positioned
<StreamlineIcon icon={IconAdd} position="right" />
```

### Custom Colors

```tsx
// Using theme color tokens
<StreamlineIcon icon={IconAdd} iconColor="blue.500" />
<StreamlineIcon icon={IconAdd} iconColor="green.600" />
<StreamlineIcon icon={IconAdd} iconColor="red.500" />
<StreamlineIcon icon={IconAdd} iconColor="grey.800" />
```

### Filled Icons

```tsx
import IconPhoneActionsVoiceMail from '@fil-react-components/svg-icons/dist/PhoneActionsVoiceMail';

<StreamlineIcon icon={IconPhoneActionsVoiceMail} filled />;
```

### Background Aware Icons

```tsx
import Box from '@fil-react-components/box';

// Icon automatically adjusts color for contrast
<Box bgColor="blue.600" p={4}>
  <StreamlineIcon icon={IconAdd} background="blue.600" />
</Box>

<Box bgColor="green.600" p={4}>
  <StreamlineIcon icon={IconAdd} background="green.600" />
</Box>
```

### Custom Stroke Width

```tsx
<StreamlineIcon icon={IconAdd} size={24} strokeWidth={3} />
```

### Inherit Font Styles

```tsx
<div style={{ fontSize: '18px', lineHeight: '1.5' }}>
  <StreamlineIcon icon={IconAdd} inheritFontStyles />
</div>
```

### With Text Content

```tsx
// Icon with text in a button
<button>
  <StreamlineIcon icon={IconAdd} position="left" />
  Add Item
</button>

// Icon with text in a link
<a href="/add">
  <StreamlineIcon icon={IconAdd} position="right" />
  Add New
</a>
```

### Icon Grid/List

```tsx
import * as Icons from '@fil-react-components/svg-icons';

const IconGallery = () => {
  const iconNames = Object.keys(Icons);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(10, 1fr)',
        gap: '16px',
      }}
    >
      {iconNames.map((iconName) => {
        const IconComponent = (Icons as Record<string, React.ComponentType>)[
          iconName
        ];
        return (
          <div key={iconName} style={{ textAlign: 'center' }}>
            <StreamlineIcon icon={IconComponent} />
            <div style={{ fontSize: '12px', marginTop: '8px' }}>{iconName}</div>
          </div>
        );
      })}
    </div>
  );
};
```

### Button with Icon

```tsx
const IconButton = ({ icon, children, onClick }) => (
  <button
    onClick={onClick}
    style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
  >
    <StreamlineIcon icon={icon} size={16} />
    {children}
  </button>
);

// Usage
<IconButton icon={IconAdd} onClick={handleAdd}>
  Add Item
</IconButton>;
```

### Navigation with Icons

```tsx
const NavigationItem = ({ icon, label, active }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '8px 16px',
    backgroundColor: active ? '#f0f0f0' : 'transparent'
  }}>
    <StreamlineIcon icon={icon} size={20} />
    <span>{label}</span>
  </div>
);

// Usage
<NavigationItem icon={IconHome} label="Home" active />
<NavigationItem icon={IconSettings} label="Settings" />
```

### Status Indicators

```tsx
const StatusIcon = ({ status }) => {
  const getIconAndColor = (status) => {
    switch (status) {
      case 'success':
        return { icon: IconCheck, color: 'green.600' };
      case 'error':
        return { icon: IconX, color: 'red.500' };
      case 'warning':
        return { icon: IconAlert, color: 'orange.500' };
      default:
        return { icon: IconInfo, color: 'blue.500' };
    }
  };

  const { icon, color } = getIconAndColor(status);

  return <StreamlineIcon icon={icon} iconColor={color} size={16} />;
};

// Usage
<StatusIcon status="success" />
<StatusIcon status="error" />
<StatusIcon status="warning" />
```

### Loading States with Icons

```tsx
const LoadingButton = ({ loading, icon, children }) => (
  <button
    disabled={loading}
    style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
  >
    {loading ? (
      <StreamlineIcon icon={IconSpinner} size={16} />
    ) : (
      <StreamlineIcon icon={icon} size={16} />
    )}
    {loading ? 'Loading...' : children}
  </button>
);
```

### Form Field Icons

```tsx
const FormField = ({ icon, label, type = 'text', ...props }) => (
  <div style={{ position: 'relative' }}>
    <label style={{ display: 'block', marginBottom: '4px' }}>{label}</label>
    <div style={{ position: 'relative' }}>
      <input
        type={type}
        style={{ paddingLeft: '36px', width: '100%' }}
        {...props}
      />
      <div style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)' }}>
        <StreamlineIcon icon={icon} size={16} />
      </div>
    </div>
  </div>
);

// Usage
<FormField icon={IconUser} label="Username" placeholder="Enter username" />
<FormField icon={IconMail} label="Email" type="email" placeholder="Enter email" />
```

## Features

### Accessibility

- Semantic HTML structure with proper span wrapper
- Screen reader compatibility
- Focus management support
- ARIA attribute passthrough via wrapperProps

### Styling

- Styled-components integration with theme provider
- Theme-aware color tokens
- Automatic contrast color calculation
- Custom stroke width control
- Font style inheritance support

### Icon Management

- Consistent sizing across all icons
- Position offset calculations for text alignment
- Filled and outline style support
- Background contrast handling
- Custom color theming

### Performance

- SVG optimization with vector-effect
- Efficient style calculations
- Minimal DOM impact

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

- All available icon sizes
- Position variations (left/right)
- Color theming options
- Filled icon styles
- Custom stroke width
- Font style inheritance
- Background contrast handling
- Pictogram integration

## Data Attributes

- `data-frc="streamline-icon"` - Applied to the icon wrapper span

## CSS Classes

- `fil-icon-wrapper` - Base icon wrapper class
- `fil-svg-icon` - SVG icon element class

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
StreamlineIcon/
├── src/
│   ├── StreamlineIcon.tsx          # Main icon wrapper component
│   ├── StreamlineIcon.style.ts     # Icon styles with theming
│   ├── StreamlineIcon.mock.tsx     # Mock configurations for testing
│   ├── StreamlineIcon.stories.tsx  # Storybook stories
│   ├── index.ts                    # Main exports
│   └── tests/
│       ├── StreamlineIcon.test.tsx        # Unit tests
│       ├── StreamlineIcon.ct.tsx          # Component tests
│       ├── StreamlineIconWrapper.tsx      # Test wrapper
│       └── __snapshots__/                  # Jest snapshots
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Button Icons

```tsx
import IconAdd from '@fil-react-components/svg-icons/dist/Add';
import IconDelete from '@fil-react-components/svg-icons/dist/Delete';
import IconEdit from '@fil-react-components/svg-icons/dist/Edit';

const ActionButtons = () => (
  <div style={{ display: 'flex', gap: '8px' }}>
    <button style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <StreamlineIcon icon={IconAdd} size={16} />
      Add
    </button>

    <button style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <StreamlineIcon icon={IconEdit} size={16} />
      Edit
    </button>

    <button style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <StreamlineIcon icon={IconDelete} size={16} />
      Delete
    </button>
  </div>
);
```

### Navigation Menu

```tsx
import IconHome from '@fil-react-components/svg-icons/dist/Home';
import IconSettings from '@fil-react-components/svg-icons/dist/Settings';
import IconProfile from '@fil-react-components/svg-icons/dist/Profile';

const NavigationMenu = () => (
  <nav>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      <li
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '8px',
        }}
      >
        <StreamlineIcon icon={IconHome} size={20} />
        <span>Home</span>
      </li>
      <li
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '8px',
        }}
      >
        <StreamlineIcon icon={IconProfile} size={20} />
        <span>Profile</span>
      </li>
      <li
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '8px',
        }}
      >
        <StreamlineIcon icon={IconSettings} size={20} />
        <span>Settings</span>
      </li>
    </ul>
  </nav>
);
```

### Status Badges

```tsx
import IconCheck from '@fil-react-components/svg-icons/dist/Check';
import IconX from '@fil-react-components/svg-icons/dist/X';
import IconAlert from '@fil-react-components/svg-icons/dist/Alert';

const StatusBadge = ({ status, label }) => {
  const getStatusConfig = (status) => {
    switch (status) {
      case 'success':
        return { icon: IconCheck, color: 'green.600', bgColor: 'green.100' };
      case 'error':
        return { icon: IconX, color: 'red.500', bgColor: 'red.100' };
      case 'warning':
        return { icon: IconAlert, color: 'orange.500', bgColor: 'orange.100' };
      default:
        return { icon: IconInfo, color: 'blue.500', bgColor: 'blue.100' };
    }
  };

  const { icon, color, bgColor } = getStatusConfig(status);

  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '4px 8px',
      borderRadius: '4px',
      backgroundColor: bgColor,
      fontSize: '14px'
    }}>
      <StreamlineIcon icon={icon} iconColor={color} size={14} />
      <span>{label}</span>
    </div>
  );
};

// Usage
<StatusBadge status="success" label="Completed" />
<StatusBadge status="error" label="Failed" />
<StatusBadge status="warning" label="Pending" />
```

### Form Validation Icons

```tsx
import IconCheckCircle from '@fil-react-components/svg-icons/dist/CheckCircle';
import IconXCircle from '@fil-react-components/svg-icons/dist/XCircle';

const ValidationIcon = ({ isValid, message }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
    <StreamlineIcon
      icon={isValid ? IconCheckCircle : IconXCircle}
      iconColor={isValid ? 'green.600' : 'red.500'}
      size={16}
    />
    <span style={{ color: isValid ? 'green.600' : 'red.500', fontSize: '14px' }}>
      {message}
    </span>
  </div>
);

// Usage in form
<input type="email" />
<ValidationIcon isValid={false} message="Please enter a valid email address" />
```

### Tab Navigation

```tsx
import IconDashboard from '@fil-react-components/svg-icons/dist/Dashboard';
import IconAnalytics from '@fil-react-components/svg-icons/dist/Analytics';
import IconUsers from '@fil-react-components/svg-icons/dist/Users';

const TabNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: IconDashboard },
    { id: 'analytics', label: 'Analytics', icon: IconAnalytics },
    { id: 'users', label: 'Users', icon: IconUsers },
  ];

  return (
    <div style={{ display: 'flex', borderBottom: '1px solid #e0e0e0' }}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 16px',
            border: 'none',
            background: 'none',
            borderBottom:
              activeTab === tab.id
                ? '2px solid #007acc'
                : '2px solid transparent',
            color: activeTab === tab.id ? '#007acc' : '#666',
            cursor: 'pointer',
          }}
        >
          <StreamlineIcon icon={tab.icon} size={16} />
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
};
```

### Loading States

```tsx
import IconSpinner from '@fil-react-components/svg-icons/dist/Spinner';

const LoadingState = ({ size = 'medium', message = 'Loading...' }) => {
  const sizeMap = {
    small: 16,
    medium: 24,
    large: 32,
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        padding: '20px',
      }}
    >
      <StreamlineIcon
        icon={IconSpinner}
        size={sizeMap[size]}
        className="spinning"
      />
      <span style={{ fontSize: '14px', color: '#666' }}>{message}</span>
    </div>
  );
};

// CSS for spinning animation
const styles = `
  .spinning {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
```

## Best Practices

1. **Use consistent sizing** - Stick to the predefined sizes (16, 20, 24, 32, 36, 48, 64px)
2. **Choose appropriate colors** - Use theme color tokens for consistency
3. **Consider contrast** - Use background prop for automatic contrast on colored backgrounds
4. **Position icons properly** - Use position prop for text-adjacent icons
5. **Keep icons semantic** - Choose icons that clearly represent their function
6. **Test accessibility** - Ensure icons have proper context or aria-labels when needed
7. **Use filled sparingly** - Reserve filled icons for special emphasis
8. **Consider performance** - Use appropriate sizes to balance quality and performance
9. **Maintain consistency** - Use the same icon for the same function across your app
10. **Provide fallbacks** - Consider what happens when icons fail to load

## Migration Notes

### From older versions:

- Ensure you have the required peer dependencies installed
- The component now requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling
- Background prop added for automatic contrast color selection
- Pictogram SVG components support added
- Improved stroke width calculations for different sizes
- Better font style inheritance support
- Enhanced accessibility features

## Related Components

- `@fil-react-components/svg-icons` - SVG icon components library
- `@fil-react-components/gds-futuro-pictograms` - Pictogram components
- `@fil-react-components/theme-provider` - Required for styling and theming</content>
  <parameter name="filePath">c:\Users\A744601\Documents\codebase\TAPP101992-fil-react-components\metadata\StreamlineIcon-2.15.6.md
