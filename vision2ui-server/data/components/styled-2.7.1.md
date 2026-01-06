## Overview

The styled mixins package provides a comprehensive set of utility functions and CSS mixins for styled-components. It includes responsive breakpoint utilities, typography mixins, validation styles, and helper functions for consistent styling across the GDS (Global Design System). The package enables developers to create responsive, theme-aware styles with ease.

## Package Information

- **Package Name**: `@fil-react-mixins/styled`
- **Version**: 2.7.1
- **Description**: Mixins for styled components
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-mixins/styled
```

## Peer Dependencies

- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

None

## Exports

```typescript
import {
  pxToRem,
  breakpoint,
  breakpointNames,
  breakpointsMap,
  fontSize,
  fontSizeLarge,
  fontSizeSmall,
  fontSizeXSmall,
  getFontStyle,
  validationStyles,
  labelStyles,
  assistiveTextStyles,
  setSpacing,
  styleAttribute,
  mapBreakpoint,
} from '@fil-react-mixins/styled';
```

### Available Exports:

- `pxToRem` - Converts pixel values to rem units
- `breakpoint` - Creates responsive breakpoint styles
- `breakpointNames` - Array of available breakpoint names
- `breakpointsMap` - Mapping of short to full breakpoint names
- `fontSize` - Default font size mixin (medium)
- `fontSizeLarge` - Large font size mixin
- `fontSizeSmall` - Small font size mixin
- `fontSizeXSmall` - Extra small font size mixin
- `getFontStyle` - Dynamic font style generator
- `validationStyles` - Validation state border styles
- `labelStyles` - Form label styling mixin
- `assistiveTextStyles` - Assistive text styling mixin
- `setSpacing` - Spacing utility for margin/padding
- `styleAttribute` - Responsive style attribute generator
- `mapBreakpoint` - Breakpoint mapping utility

## Component Structure

### Utility Functions

The package provides utility functions for:

1. **Unit Conversion** - pxToRem for responsive typography
2. **Breakpoint Management** - Responsive design utilities
3. **Typography** - Font size and line height mixins
4. **Validation** - Form validation state styles
5. **Form Styling** - Label and assistive text styles
6. **Spacing** - Margin and padding utilities

### Breakpoint System

- **sm** (small): 0rem (base/mobile)
- **md** (medium): 40rem (~640px)
- **lg** (large): 64rem (~1024px)
- **xlg** (xlarge): 75rem (~1200px)
- **xxlg** (xxlarge): 90rem (~1440px)

### Typography Scale

- **body-xs**: Extra small body text
- **body-s**: Small body text
- **body-m**: Medium body text (default)
- **body-l**: Large body text

## Functions

### pxToRem

Converts pixel values to rem units for responsive typography.

| Parameter      | Type                                          | Default      | Description              |
| -------------- | --------------------------------------------- | ------------ | ------------------------ |
| `value`        | `Array<string \| number> \| string \| number` | **Required** | Value(s) to convert      |
| `baseFontSize` | `number`                                      | `16`         | Base font size in pixels |

**Returns**: `string` - Converted rem value(s)

### breakpoint

Creates responsive CSS for specific breakpoints.

| Parameter             | Type              | Default      | Description                                       |
| --------------------- | ----------------- | ------------ | ------------------------------------------------- |
| `size`                | `Breakpoint`      | **Required** | Breakpoint size ('sm', 'md', 'lg', 'xlg', 'xxlg') |
| `style`               | `any`             | **Required** | CSS styles to apply                               |
| `options.dir`         | `'up' \| 'down'`  | `'up'`       | Direction for media query                         |
| `options.breakpoints` | `BreakpointsType` | -            | Custom breakpoints                                |

**Returns**: CSS mixin

### getFontStyle

Generates font styles for different text sizes.

| Parameter  | Type                                            | Description  |
| ---------- | ----------------------------------------------- | ------------ | ----------------- |
| `fontType` | `'body-xs' \| 'body-s' \| 'body-m' \| 'body-l'` | **Required** | Font size variant |

**Returns**: CSS mixin

### validationStyles

Returns border styles for form validation states.

| Parameter    | Type     | Description  |
| ------------ | -------- | ------------ | -------------------------------------------------------- |
| `validation` | `string` | **Required** | Validation state ('info', 'warning', 'valid', 'invalid') |
| `theme`      | `any`    | **Required** | Theme object                                             |

**Returns**: CSS mixin

### styleAttribute

Creates responsive CSS attributes.

| Parameter      | Type             | Default      | Description               |
| -------------- | ---------------- | ------------ | ------------------------- |
| `attribute`    | `any`            | **Required** | CSS property name         |
| `value`        | `BreakpointType` | **Required** | Value(s) for breakpoints  |
| `convertToRem` | `boolean`        | `true`       | Whether to convert to rem |

**Returns**: CSS string

### mapBreakpoint

Maps breakpoint objects to CSS styles.

| Parameter        | Type                       | Description  |
| ---------------- | -------------------------- | ------------ | --------------------------- |
| `breakPoint`     | `T extends BreakpointType` | **Required** | Breakpoint object           |
| `cssTransformer` | `Function`                 | **Required** | CSS transformation function |

**Returns**: `string` - Generated CSS

### setSpacing

Creates spacing styles from theme values.

| Parameter | Type                                 | Description  |
| --------- | ------------------------------------ | ------------ | --------------------- |
| `spacing` | `Record<string, number \| number[]>` | **Required** | Spacing configuration |

**Returns**: CSS mixins array

## Usage Examples

### Basic Unit Conversion

```tsx
import { pxToRem } from '@fil-react-mixins/styled';

// Convert single value
const fontSize = pxToRem(16); // "1rem"

// Convert multiple values
const padding = pxToRem([8, 16, 8, 16]); // "0.5rem 1rem 0.5rem 1rem"

// Convert with custom base
const largeFont = pxToRem(24, 20); // "1.2rem"
```

### Responsive Breakpoints

```tsx
import styled from 'styled-components';
import { breakpoint } from '@fil-react-mixins/styled';

const ResponsiveContainer = styled.div`
  padding: ${pxToRem(16)};

  ${breakpoint(
    'md',
    `
    padding: ${pxToRem(24)};
  `
  )}

  ${breakpoint(
    'lg',
    `
    padding: ${pxToRem(32)};
    display: flex;
  `
  )}
`;
```

### Typography Mixins

```tsx
import styled from 'styled-components';
import {
  fontSize,
  fontSizeLarge,
  getFontStyle,
} from '@fil-react-mixins/styled';

const Text = styled.p`
  ${fontSize}// Default medium size
`;

const Heading = styled.h1`
  ${fontSizeLarge}
`;

const SmallText = styled.span`
  ${getFontStyle('body-s')}
`;
```

### Form Validation Styles

```tsx
import styled from 'styled-components';
import { validationStyles } from '@fil-react-mixins/styled';

const Input = styled.input<{ validation?: string }>`
  border: 1px solid #ccc;
  padding: ${pxToRem(8)};

  ${({ validation, theme }) => validation && validationStyles(validation, theme)}
`;

// Usage
<Input validation="invalid" /> // Red border
<Input validation="valid" />   // Green border
<Input validation="warning" /> // Yellow border
<Input validation="info" />    // Blue border
```

### Label and Assistive Text

```tsx
import styled from 'styled-components';
import { labelStyles, assistiveTextStyles } from '@fil-react-mixins/styled';

const Label = styled.label`
  ${labelStyles}
`;

const AssistiveText = styled.span`
  ${assistiveTextStyles}
`;

const ErrorText = styled.span<{ disabled?: boolean }>`
  ${assistiveTextStyles}
  color: red;
`;
```

### Spacing Utilities

```tsx
import styled from 'styled-components';
import { setSpacing } from '@fil-react-mixins/styled';

const Card = styled.div`
  ${setSpacing({
    padding: [3, 4], // padding: theme.spacing[3] theme.spacing[4]
    marginBottom: 2, // margin-bottom: theme.spacing[2]
  })}
`;
```

### Responsive Style Attributes

```tsx
import styled from 'styled-components';
import { styleAttribute } from '@fil-react-mixins/styled';

const ResponsiveBox = styled.div`
  ${styleAttribute('padding', { sm: 8, md: 16, lg: 24 })}
  ${styleAttribute('font-size', { sm: 14, lg: 18 }, false)}
`;
```

### Custom Breakpoint Mapping

```tsx
import styled from 'styled-components';
import { mapBreakpoint } from '@fil-react-mixins/styled';

const CustomResponsive = styled.div`
  ${(props) =>
    mapBreakpoint(
      { sm: 'block', md: 'flex', lg: 'grid' },
      (key, value) => `
        @media (min-width: ${props.theme.size.breakpoint[key].value}rem) {
          display: ${value};
        }
      `
    )}
`;
```

### Complete Form Component

```tsx
import styled from 'styled-components';
import {
  labelStyles,
  assistiveTextStyles,
  validationStyles,
} from '@fil-react-mixins/styled';

const FormField = styled.div`
  margin-bottom: ${pxToRem(16)};
`;

const FieldLabel = styled.label<{ disabled?: boolean }>`
  ${labelStyles}
`;

const FieldInput = styled.input<{ validation?: string }>`
  width: 100%;
  padding: ${pxToRem(8)};
  border: 1px solid #ccc;
  border-radius: 4px;

  ${({ validation, theme }) =>
    validation && validationStyles(validation, theme)}

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const FieldError = styled.span`
  ${assistiveTextStyles}
  color: #dc3545;
`;

const FieldHelp = styled.span`
  ${assistiveTextStyles}
`;

// Usage in component
const TextField = ({ label, error, help, validation, ...props }) => (
  <FormField>
    <FieldLabel>{label}</FieldLabel>
    <FieldInput validation={validation} {...props} />
    {error && <FieldError>{error}</FieldError>}
    {help && <FieldHelp>{help}</FieldHelp>}
  </FormField>
);
```

### Theme-Aware Responsive Grid

```tsx
import styled from 'styled-components';
import { breakpoint, pxToRem } from '@fil-react-mixins/styled';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${pxToRem(16)};

  ${breakpoint(
    'md',
    `
    grid-template-columns: repeat(2, 1fr);
    gap: ${pxToRem(24)};
  `
  )}

  ${breakpoint(
    'lg',
    `
    grid-template-columns: repeat(3, 1fr);
    gap: ${pxToRem(32)};
  `
  )}
`;

const GridItem = styled.div`
  padding: ${pxToRem(16)};
  border: 1px solid #eee;
  border-radius: 4px;
`;
```

### Dynamic Font Sizing

```tsx
import styled from 'styled-components';
import { getFontStyle } from '@fil-react-mixins/styled';

const DynamicText = styled.p<{ size?: 'body-xs' | 'body-s' | 'body-m' | 'body-l' }>`
  ${({ size = 'body-m' }) => getFontStyle(size)}
`;

// Usage
<DynamicText size="body-l">Large text</DynamicText>
<DynamicText size="body-s">Small text</DynamicText>
```

## Features

### Responsive Design

- **Breakpoint System** - Mobile-first responsive breakpoints
- **Flexible Units** - Automatic px to rem conversion
- **Theme Integration** - Uses theme breakpoint values

### Typography

- **Font Scale** - Consistent typography hierarchy
- **Responsive Fonts** - Automatic font scaling across breakpoints
- **Theme Integration** - Uses theme font size values

### Form Styling

- **Validation States** - Visual feedback for form validation
- **Accessibility** - Proper label and assistive text styling
- **Consistent Spacing** - Standardized form element spacing

### Utility Functions

- **Unit Conversion** - Reliable px to rem conversion
- **Style Mapping** - Breakpoint-aware style generation
- **CSS Generation** - Programmatic CSS creation

## Testing

The component includes:

- Unit tests using Jest
- Test utilities from `@fil-react-utils/testing`

Run tests:

```bash
npm test
```

## Storybook Stories

The package provides utility functions that are demonstrated through component stories in dependent packages.

## Data Attributes

The mixins don't add data attributes but work with theme and styled-components.

## CSS Classes

The mixins generate dynamic CSS classes through styled-components and don't use fixed class names.

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

# Run all linters
npm run lint
```

## File Structure

```
styled/
├── src/
│   ├── mixins.ts              # Main mixins implementation
│   ├── index.ts               # Main exports
│   └── tests/
│       └── mixins.test.ts     # Unit tests
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Responsive Layout Components

```tsx
import styled from 'styled-components';
import { breakpoint, pxToRem } from '@fil-react-mixins/styled';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${pxToRem(16)};

  ${breakpoint(
    'md',
    `
    padding: 0 ${pxToRem(24)};
  `
  )}

  ${breakpoint(
    'lg',
    `
    padding: 0 ${pxToRem(32)};
  `
  )}
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${breakpoint(
    'md',
    `
    flex-direction: row;
  `
  )}
`;
```

### Theme-Aware Form Components

```tsx
import styled from 'styled-components';
import {
  labelStyles,
  assistiveTextStyles,
  validationStyles,
} from '@fil-react-mixins/styled';

const FormGroup = styled.div`
  margin-bottom: ${pxToRem(24)};
`;

const FormLabel = styled.label`
  ${labelStyles}
`;

const FormInput = styled.input`
  width: 100%;
  padding: ${pxToRem(12)};
  border: 1px solid ${({ theme }) => theme.color.base.grey[300].value};
  border-radius: 4px;

  &:focus {
    border-color: ${({ theme }) => theme.color.primary.main.value};
    outline: none;
  }
`;

const FormError = styled.span`
  ${assistiveTextStyles}
  color: ${({ theme }) => theme.color.error.main.value};
`;

const FormHelp = styled.span`
  ${assistiveTextStyles}
`;
```

### Card Grid System

```tsx
import styled from 'styled-components';
import { breakpoint, pxToRem } from '@fil-react-mixins/styled';

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${pxToRem(16)};

  ${breakpoint(
    'sm',
    `
    grid-template-columns: repeat(2, 1fr);
  `
  )}

  ${breakpoint(
    'md',
    `
    grid-template-columns: repeat(3, 1fr);
    gap: ${pxToRem(24)};
  `
  )}

  ${breakpoint(
    'lg',
    `
    grid-template-columns: repeat(4, 1fr);
    gap: ${pxToRem(32)};
  `
  )}
`;

const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: ${pxToRem(24)};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  ${breakpoint(
    'md',
    `
    padding: ${pxToRem(32)};
  `
  )}
`;
```

### Navigation Components

```tsx
import styled from 'styled-components';
import { breakpoint, pxToRem } from '@fil-react-mixins/styled';

const Nav = styled.nav`
  background: ${({ theme }) => theme.color.primary.main.value};
  color: white;
  padding: ${pxToRem(16)};

  ${breakpoint(
    'md',
    `
    padding: ${pxToRem(16)} ${pxToRem(24)};
  `
  )}
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: ${pxToRem(8)};

  ${breakpoint(
    'md',
    `
    flex-direction: row;
    gap: ${pxToRem(24)};
  `
  )}
`;

const NavItem = styled.li`
  ${fontSize}
`;
```

### Modal/Dialog Components

```tsx
import styled from 'styled-components';
import { breakpoint, pxToRem } from '@fil-react-mixins/styled';

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${pxToRem(16)};
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  padding: ${pxToRem(24)};
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;

  ${breakpoint(
    'md',
    `
    padding: ${pxToRem(32)};
    max-width: 600px;
  `
  )}
`;
```

## Best Practices

1. **Use Theme Values** - Leverage theme breakpoints and spacing for consistency
2. **Mobile-First Design** - Start with mobile styles, enhance for larger screens
3. **Consistent Units** - Use pxToRem for all spacing and sizing
4. **Breakpoint Order** - Define breakpoints from smallest to largest
5. **Performance** - Avoid excessive breakpoint usage in single components
6. **Accessibility** - Ensure sufficient contrast ratios in validation states
7. **Semantic HTML** - Use appropriate HTML elements with styling
8. **Type Safety** - Take advantage of TypeScript for breakpoint and validation types

## Migration Notes

### From older versions:

- Ensure you have the required peer dependencies installed
- The component now requires styled-components v5.2.1+ or v6.1.0+
- Breakpoint system has been enhanced with better ordering
- Font size mixins now support theme integration
- Validation styles improved for accessibility
- pxToRem function enhanced for array support

## Related Components

- `@fil-react-components/theme-provider` - Provides theme context for styling
- All styled-components in the library use these mixins
- `@fil-react-components/with-styles` - HOC that uses these mixins
