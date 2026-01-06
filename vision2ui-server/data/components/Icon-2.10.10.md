# Icon Component Documentation

## Overview

The Icon component provides a comprehensive icon system with over 100 different icon types, supporting various weights (bold, regular, light) and sizes. It uses a custom icon font and provides semantic HTML structure with screen reader support. The component integrates seamlessly with the theme provider and follows GDS (Global Design System) standards for consistent iconography across applications.

## Package Information

- **Package Name**: `@fil-react-components/icon`
- **Version**: 2.10.10
- **Description**: Icon Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/icon
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/with-styles`: ^2.7.8
- `@fil-react-mixins/styled`: ^2.7.1
- `classnames`: ^2.5.1
- `prop-types`: 15.8.1

## Dev Dependencies

- `@fil-react-utils/testing`: ^1.12.4

## Exports

```javascript
import Icon from '@fil-react-components/icon';
```

### Available Exports:

- `Icon` (default export) - Main icon component

## Component Structure

### Main Component: Icon

A flexible icon component that renders icons using CSS classes and a custom icon font.

### Component Features:

- **Icon Font**: Uses custom FIL icon font with Unicode mappings
- **Weight Variants**: Bold, regular, and light weight options
- **Size Variants**: Multiple size options including 14px, small, and circle
- **Semantic HTML**: Proper span structure with screen reader support
- **Theme Integration**: Styled-components integration with theme provider
- **Accessibility**: Screen reader text for icon descriptions

### Component Hierarchy:

```
Icon Component
├── Span (icon container)
│   ├── CSS classes for icon display
│   └── Screen reader text (icon type)
```

## Props

### IconProps

| Prop            | Type                                                                                                        | Default    | Description                                         |
| --------------- | ----------------------------------------------------------------------------------------------------------- | ---------- | --------------------------------------------------- |
| `iconType`      | `string`                                                                                                    | `'search'` | **Required** - The type/name of the icon to display |
| `variant`       | `'bold' \| 'regular' \| 'light' \| 'circle' \| 'small' \| '14' \| 's' \| 'm' \| 'r' \| 'd' \| 'link' \| ''` | -          | Visual variant/style of the icon                    |
| `className`     | `string`                                                                                                    | -          | Additional CSS class names                          |
| `unicode`       | `string`                                                                                                    | -          | Direct Unicode character for custom icons           |
| `...otherProps` | `React.HTMLAttributes<HTMLSpanElement>`                                                                     | -          | Standard HTML span attributes                       |

## Usage Examples

### Basic Icon Usage

```jsx
import Icon from '@fil-react-components/icon';

<Icon iconType="search" />
<Icon iconType="person" />
<Icon iconType="home" />
```

### Icon with Weight Variants

```jsx
<Icon iconType="chevron-r" variant="bold" />
<Icon iconType="chevron-r" variant="regular" />
<Icon iconType="chevron-r" variant="light" />
```

### Icon with Size Variants

```jsx
<Icon iconType="cog" variant="14" />
<Icon iconType="settings" variant="small" />
<Icon iconType="help" variant="circle" />
```

### Navigation Icons

```jsx
const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Icon iconType="home" />
        <span>Home</span>
      </li>
      <li>
        <Icon iconType="person" />
        <span>Account</span>
      </li>
      <li>
        <Icon iconType="settings" />
        <span>Settings</span>
      </li>
    </ul>
  </nav>
);
```

### Button with Icon

```jsx
import { PrimaryButton } from '@fil-react-components/button';

const IconButton = () => (
  <PrimaryButton>
    <Icon iconType="download" />
    Download
  </PrimaryButton>
);
```

### Form Field Icons

```jsx
const SearchField = () => (
  <div className="search-field">
    <input type="search" placeholder="Search..." />
    <Icon iconType="search" />
  </div>
);

const PasswordField = () => (
  <div className="password-field">
    <input type="password" placeholder="Password" />
    <Icon iconType="eye" />
  </div>
);
```

### Status Indicators

```jsx
const StatusIndicator = ({ status }) => {
  const iconMap = {
    success: { type: 'tick', variant: 'bold' },
    error: { type: 'warning-circle-filled', variant: 'regular' },
    warning: { type: 'warning-triangle', variant: 'regular' },
    info: { type: 'info-circle', variant: 'regular' },
  };

  const icon = iconMap[status];
  return <Icon iconType={icon.type} variant={icon.variant} />;
};
```

### Accordion with Icons

```jsx
const AccordionItem = ({ title, isOpen, onToggle }) => (
  <div className="accordion-item">
    <button onClick={onToggle}>
      <span>{title}</span>
      <Icon iconType="chevron-d" className={isOpen ? 'rotated' : ''} />
    </button>
    {isOpen && <div className="accordion-content">Content...</div>}
  </div>
);
```

### Breadcrumb Navigation

```jsx
const Breadcrumb = ({ items }) => (
  <nav aria-label="Breadcrumb">
    <ol>
      {items.map((item, index) => (
        <li key={index}>
          {index > 0 && <Icon iconType="chevron-r" variant="light" />}
          {item.link ? (
            <a href={item.link}>{item.label}</a>
          ) : (
            <span>{item.label}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);
```

### Tab Navigation

```jsx
const Tabs = ({ tabs, activeTab, onTabChange }) => (
  <div className="tabs">
    {tabs.map((tab, index) => (
      <button
        key={index}
        className={activeTab === index ? 'active' : ''}
        onClick={() => onTabChange(index)}
      >
        <Icon iconType={tab.icon} />
        <span>{tab.label}</span>
      </button>
    ))}
  </div>
);
```

### Social Media Links

```jsx
const SocialLinks = () => (
  <div className="social-links">
    <a href="#" aria-label="Facebook">
      <Icon iconType="logo-facebook" />
    </a>
    <a href="#" aria-label="Twitter">
      <Icon iconType="logo-twitter" />
    </a>
    <a href="#" aria-label="LinkedIn">
      <Icon iconType="logo-linkedin" />
    </a>
  </div>
);
```

### File Type Indicators

```jsx
const FileIcon = ({ fileType }) => {
  const iconMap = {
    pdf: 'pdf',
    csv: 'csv',
    doc: 'doc-chevron-r',
    image: 'image',
    video: 'movie',
    default: 'doc-stacked',
  };

  return <Icon iconType={iconMap[fileType] || iconMap.default} />;
};
```

### Loading States

```jsx
const LoadingButton = ({ loading, children }) => (
  <button disabled={loading}>
    {loading && <Icon iconType="refresh" className="spinning" />}
    {children}
  </button>
);
```

### Dropdown Menu

```jsx
const Dropdown = ({ label, options, isOpen }) => (
  <div className="dropdown">
    <button>
      {label}
      <Icon iconType="chevron-d" className={isOpen ? 'rotated' : ''} />
    </button>
    {isOpen && (
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            {option.icon && <Icon iconType={option.icon} />}
            {option.label}
          </li>
        ))}
      </ul>
    )}
  </div>
);
```

### Card Actions

```jsx
const Card = ({ title, content, onEdit, onDelete }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{content}</p>
    <div className="card-actions">
      <button onClick={onEdit}>
        <Icon iconType="pencil" />
        Edit
      </button>
      <button onClick={onDelete}>
        <Icon iconType="cross" />
        Delete
      </button>
    </div>
  </div>
);
```

## Available Icons

### Navigation & UI

- `chevron-d`, `chevron-l`, `chevron-r`, `chevron-u` (with bold/light/regular variants)
- `cross`, `plus`, `tick` (with bold/light/regular variants)
- `menu`, `ellipsis`, `cog`, `settings`
- `search`, `eye`, `home`

### Status & Feedback

- `tick`, `confirm`, `circle-tick`
- `warning-triangle`, `warning-triangle-filled`, `warning`
- `warning-circle-filled`, `error`
- `info-circle`, `info`
- `circle-plus`, `circle-minus`

### User & Account

- `person`, `account`, `person-plus`, `account-add`
- `person-lock`, `lock-account`
- `person-circle-filled`, `person-help`

### Communication

- `messages`, `chatbubble`, `smartphone`, `mobile`
- `letter`, `post`, `check-mail`
- `phone`, `sms-alert`

### Files & Documents

- `pdf`, `doc-pdf`, `doc-chevron-r`, `doc-arrow-d`
- `doc-stacked`, `doc-csv`, `csv`
- `paperclip`, `attach`
- `download`, `export`, `print`

### Financial

- `coinstack`, `currency`, `coins-sterling`, `buy`
- `piggybank`, `saving`, `hand-coins`, `sell`
- `receipt`, `receipt-dollar`

### Media & Content

- `movie`, `image`, `camera`
- `play`, `pause`, `stop`
- `volume-up`, `volume-down`, `volume-off`

### Social & External

- `logo-facebook`, `logo-twitter`, `logo-xing`, `logo-googleplus`, `logo-linkedin`, `logo-youtube`
- `external-link`, `share`, `link`

### Miscellaneous

- `calendar`, `clock`, `globe`
- `map-pin`, `location`
- `star`, `star-filled`, `bookmark-star`
- `medal`, `awards`
- `leaf`, `droplet`
- `computer`, `laptop`

## Features

### Icon Variants

- **Weight Variants**: `bold`, `regular`, `light` - Different visual weights
- **Size Variants**: `14`, `small`, `circle` - Different sizes and shapes
- **Special Variants**: `link`, `s`, `m`, `r`, `d` - Specialized styling

### Icon Font System

- **Unicode Mapping**: Each icon maps to a specific Unicode character
- **CSS Classes**: Icons rendered using CSS `:before` pseudo-elements
- **Font Loading**: Automatic font loading through CSS

### Accessibility

- **Screen Reader Support**: Icon type included as screen reader text
- **Semantic HTML**: Proper span element structure
- **ARIA Labels**: Can be enhanced with aria-label attributes

### Theme Integration

- **Styled Components**: Full styled-components integration
- **Theme Provider**: Works with theme provider for consistent styling
- **GDS Standards**: Follows Global Design System guidelines

### Performance

- **Icon Font**: Efficient font-based icon delivery
- **CSS Rendering**: Fast CSS-based rendering
- **Minimal DOM**: Lightweight span element structure

### Customization

- **Class Name Support**: Additional CSS classes for customization
- **Style Props**: Standard HTML attributes for styling
- **Unicode Override**: Direct Unicode character support

## Testing

The component includes:

- Unit tests using Jest with snapshot testing
- Component tests using Playwright
- Accessibility testing with axe-devtools

Run tests:

```bash
npm test
```

## Storybook Stories

The component has Storybook stories demonstrating:

- All available icon types and variants
- Different weight and size combinations
- Accessibility testing results

## Data Attributes

- `data-frc="icon"` - Applied to Icon span elements

## CSS Classes

- `icon` - Base icon class
- `fil-icon` - FIL icon namespace
- `fil-icon-{iconType}` - Icon type class
- `fil-icon-{iconType}-{variant}` - Icon variant class
- `show-for-sr` - Screen reader only text

## Build & Development

### Scripts

```bash
# Run tests
npm test

# Build with SWC
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
```

## File Structure

```
Icon/
├── src/
│   ├── Icon.jsx              # Main Icon component
│   ├── Icon.mock.js          # Mock configurations for testing
│   ├── Icon.stories.jsx      # Storybook stories
│   ├── Icon.style.js         # Icon styling
│   ├── IconMap.js            # Icon Unicode mappings
│   ├── index.d.ts            # TypeScript definitions
│   ├── index.js              # Main exports
│   └── tests/
│       ├── Icon.ct.tsx       # Component tests
│       ├── Icon.test.tsx     # Unit tests
│       ├── a11y-results/     # Accessibility test results
│       ├── coverage/         # Test coverage reports
│       └── __snapshots__/    # Snapshot files
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Icon Button Component

```jsx
const IconButton = ({ icon, label, onClick, variant = 'primary' }) => (
  <button className={`btn btn-${variant}`} onClick={onClick}>
    <Icon iconType={icon} />
    <span>{label}</span>
  </button>
);
```

### Status Badge

```jsx
const StatusBadge = ({ status, children }) => {
  const statusConfig = {
    success: { icon: 'tick', color: 'green' },
    error: { icon: 'warning-circle-filled', color: 'red' },
    warning: { icon: 'warning-triangle', color: 'orange' },
    info: { icon: 'info-circle', color: 'blue' },
  };

  const config = statusConfig[status];
  return (
    <span className={`badge badge-${config.color}`}>
      <Icon iconType={config.icon} />
      {children}
    </span>
  );
};
```

### Collapsible Section

```jsx
const CollapsibleSection = ({ title, children, isOpen, onToggle }) => (
  <div className="collapsible-section">
    <button className="collapsible-header" onClick={onToggle}>
      <Icon iconType="chevron-r" className={isOpen ? 'rotated' : ''} />
      <span>{title}</span>
    </button>
    {isOpen && <div className="collapsible-content">{children}</div>}
  </div>
);
```

### Notification Component

```jsx
const Notification = ({ type, message, onClose }) => (
  <div className={`notification notification-${type}`}>
    <Icon
      iconType={type === 'error' ? 'warning-circle-filled' : 'info-circle'}
    />
    <span>{message}</span>
    <button onClick={onClose}>
      <Icon iconType="cross" />
    </button>
  </div>
);
```

### Pagination Component

```jsx
const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <nav className="pagination">
    <button
      disabled={currentPage === 1}
      onClick={() => onPageChange(currentPage - 1)}
    >
      <Icon iconType="chevron-l" />
      Previous
    </button>

    <span>
      Page {currentPage} of {totalPages}
    </span>

    <button
      disabled={currentPage === totalPages}
      onClick={() => onPageChange(currentPage + 1)}
    >
      Next
      <Icon iconType="chevron-r" />
    </button>
  </nav>
);
```

## Best Practices

1. **Use semantic icon names** - Choose icons that clearly represent their function
2. **Consider accessibility** - Use aria-label when icon meaning isn't clear from context
3. **Maintain consistency** - Use the same icon for the same function across your app
4. **Choose appropriate variants** - Select weight and size variants that fit your design
5. **Test across browsers** - Ensure icon font loads correctly on all target browsers
6. **Provide fallbacks** - Consider what happens if the icon font fails to load
7. **Use screen reader text** - The component automatically includes icon type for screen readers
8. **Combine with text** - Icons work best when paired with descriptive text
9. **Consider touch targets** - Ensure clickable icons meet minimum touch target sizes
10. **Document icon usage** - Maintain consistency in icon usage across your application

## Migration Notes

### General Migration:

- Ensure you have the required peer dependencies installed
- The component requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling
- React 16.14.0+ is required

### Recent Updates:

- Added `data-frc` attribute for component identification (v2.10.0)
- Theme provider peer dependency updates for compatibility
- SWC build system replacement (v2.9.0)

### Breaking Changes:

- Verify that your theme provider includes icon font configuration
- Check that icon font files are properly loaded in your application
- Ensure CSS custom properties are available for theme values

### From Previous Versions:

- Component API remains consistent
- Icon map and available icons unchanged
- Props interface maintained
- Styling approach consistent with styled-components

## Related Components

- `@fil-react-components/theme-provider` - Theme provider for icon font configuration
- `@fil-react-components/button` - Button components that may include icons
- `@fil-react-components/card` - Card components that may use icons
- `@fil-react-components/badge` - Badge components that may include status icons</content>
  <parameter name="filePath">c:\Users\A744601\Documents\codebase\TAPP101992-fil-react-components\metadata\Icon-2.10.10.md
