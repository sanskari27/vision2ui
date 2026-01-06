## Overview

The withStyles Higher-Order Component (HOC) is a powerful styling utility that provides a comprehensive set of CSS-in-JS styling props for React components. It enables developers to apply responsive design, spacing, typography, colors, and layout properties directly as component props, following the GDS (Global Design System) standards. The HOC integrates seamlessly with styled-components and the theme provider system.

## Package Information

- **Package Name**: `@fil-react-components/with-styles`
- **Version**: 2.7.8
- **Description**: withStyles HOC from Icicle
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/with-styles
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-mixins/styled`: ^2.7.1
- `@fil-react-utils/common`: ^1.14.1
- `lodash`: 4.17.21

## Exports

```typescript
import withStyles, {
  withSpacingStyles,
  withFlexBoxStyles,
} from '@fil-react-components/with-styles';
```

### Available Exports:

- `withStyles` (default export) - Main HOC with full styling capabilities
- `withSpacingStyles` - HOC with only spacing-related styles
- `withFlexBoxStyles` - HOC with only flexbox-related styles

## Component Structure

### Main HOC: withStyles

The withStyles HOC wraps any React component and adds comprehensive styling props. It supports multiple style categories that can be enabled or disabled based on configuration options.

### Component Variations:

1. **Full withStyles** - All styling props enabled (default)
2. **Spacing Only** - Only spacing-related props using `withSpacingStyles`
3. **Flexbox Only** - Only flexbox-related props using `withFlexBoxStyles`
4. **Custom Configuration** - Selective enabling of style categories

### Style Categories:

- **Base Styles** - Color, background color, display, font size, width, height
- **Spacing Styles** - Margin and padding with responsive breakpoints
- **Flexbox Styles** - Flexbox layout properties with responsive support
- **Sizing Styles** - Width and height with responsive breakpoints
- **Color Styles** - Text and background colors from theme
- **Display Styles** - Display properties with responsive breakpoints
- **Font Size Styles** - Typography scale with responsive support

## Props

### WithStylesProps<O>

The props interface varies based on the options passed to the HOC.

#### Base Props (Always Available)

| Prop          | Type                      | Description                                   |
| ------------- | ------------------------- | --------------------------------------------- |
| `as`          | `string \| ComponentType` | Render as different HTML element or component |
| `className`   | `string`                  | Additional CSS class names                    |
| `theme`       | `any`                     | Theme object (automatically provided)         |
| `data-testid` | `string`                  | Test identifier attribute                     |

#### ColorProps

| Prop      | Type     | Description                                    |
| --------- | -------- | ---------------------------------------------- |
| `bgColor` | `string` | Background color from theme (e.g., 'blue.500') |
| `color`   | `string` | Text color from theme or CSS color value       |

#### DisplayProps

| Prop      | Type                       | Description                                  |
| --------- | -------------------------- | -------------------------------------------- |
| `display` | `string \| BreakpointType` | CSS display property with responsive support |

#### FontSizeProps

| Prop       | Type                                                                                | Description |
| ---------- | ----------------------------------------------------------------------------------- | ----------- |
| `fontSize` | `'small' \| 'xsmall' \| 'regular' \| 'large' \| string \| number \| BreakpointType` | Font size   |

#### SizingProps

| Prop     | Type                                 | Description |
| -------- | ------------------------------------ | ----------- |
| `width`  | `string \| number \| BreakpointType` | Width       |
| `height` | `string \| number \| BreakpointType` | Height      |

#### SpacingProps (when spacing=true)

| Prop | Type                         | Description         |
| ---- | ---------------------------- | ------------------- |
| `p`  | `string \| number \| Object` | Padding (all sides) |
| `px` | `string \| number \| Object` | Padding horizontal  |
| `py` | `string \| number \| Object` | Padding vertical    |
| `pl` | `string \| number \| Object` | Padding left        |
| `pr` | `string \| number \| Object` | Padding right       |
| `pt` | `string \| number \| Object` | Padding top         |
| `pb` | `string \| number \| Object` | Padding bottom      |
| `m`  | `string \| number \| Object` | Margin (all sides)  |
| `mx` | `string \| number \| Object` | Margin horizontal   |
| `my` | `string \| number \| Object` | Margin vertical     |
| `ml` | `string \| number \| Object` | Margin left         |
| `mr` | `string \| number \| Object` | Margin right        |
| `mt` | `string \| number \| Object` | Margin top          |
| `mb` | `string \| number \| Object` | Margin bottom       |

#### FlexProps (when flexbox=true)

| Prop             | Type                                 | Description     |
| ---------------- | ------------------------------------ | --------------- |
| `flexDirection`  | `string \| BreakpointType`           | Flex direction  |
| `flexWrap`       | `string \| BreakpointType`           | Flex wrap       |
| `justifyContent` | `string \| BreakpointType`           | Justify content |
| `alignItems`     | `string \| BreakpointType`           | Align items     |
| `alignContent`   | `string \| BreakpointType`           | Align content   |
| `order`          | `string \| number \| BreakpointType` | Flex order      |
| `flexGrow`       | `string \| BreakpointType`           | Flex grow       |
| `flexShrink`     | `string \| BreakpointType`           | Flex shrink     |
| `alignSelf`      | `string \| BreakpointType`           | Align self      |

### BreakpointType

```typescript
interface BreakpointType {
  sm?: number | string;
  md?: number | string;
  lg?: number | string;
  xlg?: number | string;
  xxlg?: number | string;
}
```

## Usage Examples

### Basic Usage

```tsx
import React from 'react';
import withStyles from '@fil-react-components/with-styles';

const StyledDiv = withStyles('div');

const BasicExample = () => (
  <StyledDiv
    p={4}
    m={2}
    bgColor="primary"
    color="white"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    Hello World
  </StyledDiv>
);
```

### Responsive Design

```tsx
const ResponsiveLayout = () => (
  <StyledDiv
    display="flex"
    flexDirection="column"
    flexDirectionMd="row"
    p={2}
    pMd={4}
    gap={2}
    gapMd={4}
  >
    <StyledDiv flex={1} p={2}>
      Column 1
    </StyledDiv>
    <StyledDiv flex={1} p={2}>
      Column 2
    </StyledDiv>
  </StyledDiv>
);
```

### Spacing Only HOC

```tsx
import { withSpacingStyles } from '@fil-react-components/with-styles';

const SpacingDiv = withSpacingStyles('div');

const SpacingExample = () => (
  <SpacingDiv p={3} m={2} mx="auto" className="my-custom-class">
    Only spacing props work here
  </SpacingDiv>
);
```

### Flexbox Only HOC

```tsx
import { withFlexBoxStyles } from '@fil-react-components/with-styles';

const FlexDiv = withFlexBoxStyles('div');

const FlexExample = () => (
  <FlexDiv
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    flexDirection="row"
    flexWrap="wrap"
  >
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </FlexDiv>
);
```

### Custom Component Styling

```tsx
import Button from '@fil-react-components/button';
import withStyles from '@fil-react-components/with-styles';

const StyledButton = withStyles(Button);

const CustomButton = () => (
  <StyledButton
    p={3}
    bgColor="secondary"
    color="white"
    borderRadius={4}
    fontSize="md"
  >
    Custom Styled Button
  </StyledButton>
);
```

### Configuration Options

```tsx
// Enable only spacing and color styles
const MinimalStyledDiv = withStyles('div', '', {
  spacing: true,
  flexbox: false,
});

const ConfigExample = () => (
  <MinimalStyledDiv p={3} m={2} bgColor="primary" color="white">
    Only spacing and color props work here
  </MinimalStyledDiv>
);
```

## Features

### Accessibility

- Supports semantic HTML with `as` prop
- Maintains accessibility of wrapped components
- Theme-aware color contrast ratios

### Styling

- Styled-components integration
- Theme provider support
- Custom className support
- Responsive breakpoint system
- CSS-in-JS approach

### State Management

- No internal state management
- Pure styling HOC
- Props-based styling

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

- Basic styling examples
- Responsive design patterns
- Configuration options
- Different style categories

## Data Attributes

- `data-testid` - Test identifier attribute (passed through)

## CSS Classes

The component generates dynamic CSS classes based on props and doesn't use fixed class names.

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
WithStyles/
├── src/
│   ├── Color/
│   │   └── style.ts
│   ├── Display/
│   │   └── style.ts
│   ├── FlexBox/
│   │   └── style.ts
│   ├── FontSize/
│   │   └── style.ts
│   ├── Sizing/
│   │   └── style.ts
│   ├── Spacing/
│   │   └── style.ts
│   ├── withStyles.tsx
│   ├── index.ts
│   └── tests/
│       ├── WithStyles.test.tsx
│       ├── WithStyles.ct.tsx
│       └── WithStylesWrapper.tsx
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Layout Components

```tsx
const Layout = ({ children }) => (
  <StyledDiv minHeight="100vh" display="flex" flexDirection="column">
    <Header />
    <StyledDiv flex={1} p={4}>
      {children}
    </StyledDiv>
    <Footer />
  </StyledDiv>
);
```

### Card Grid

```tsx
const CardGrid = ({ items }) => (
  <StyledDiv
    display="grid"
    gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
    gap={4}
    p={4}
  >
    {items.map((item) => (
      <StyledDiv
        key={item.id}
        p={4}
        bgColor="white"
        borderRadius={8}
        boxShadow="0 2px 8px rgba(0,0,0,0.1)"
      >
        {item.content}
      </StyledDiv>
    ))}
  </StyledDiv>
);
```

### Form Components

```tsx
const FormField = ({ label, children, error }) => (
  <StyledDiv display="flex" flexDirection="column" mb={4}>
    <StyledDiv mb={2} fontWeight="bold">
      {label}
    </StyledDiv>
    {children}
    {error && (
      <StyledDiv mt={1} color="error.main" fontSize="sm">
        {error}
      </StyledDiv>
    )}
  </StyledDiv>
);
```

## Best Practices

1. **Use Appropriate HOC** - Choose `withSpacingStyles` or `withFlexBoxStyles` for better bundle size when only specific styles are needed
2. **Leverage Theme Values** - Use theme colors and spacing for consistency
3. **Responsive First** - Design mobile-first with responsive breakpoints
4. **Combine with Custom Styles** - Use component styles parameter for complex styling
5. **Type Safety** - Take advantage of TypeScript for prop validation
6. **Performance** - Avoid unnecessary style categories in options
7. **Semantic HTML** - Use `as` prop to maintain semantic meaning
8. **Accessibility** - Ensure color contrast ratios are maintained

## Migration Notes

### From older versions:

- Ensure you have the required peer dependencies installed
- The component now requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling
- `data-testid` prop is now included in the interface for testing
- Global spacing classes are now optional to reduce bundle size
- Some CSS `!important` declarations have been removed from spacing styles

## Related Components

- `@fil-react-components/theme-provider` - Provides theme context for styling
- `@fil-react-mixins/styled` - Styled-components mixins and utilities
- `@fil-react-utils/common` - Utility functions for color contrast and common operations

### Component Variations:

1. **Full withStyles** - All styling props enabled (default)
2. **Spacing Only** - Only spacing-related props using `withSpacingStyles`
3. **Flexbox Only** - Only flexbox-related props using `withFlexBoxStyles`
4. **Custom Configuration** - Selective enabling of style categories

### Style Categories:

- **Base Styles** - Color, background color, display, font size, width, height
- **Spacing Styles** - Margin and padding with responsive breakpoints
- **Flexbox Styles** - Flexbox layout properties with responsive support
- **Sizing Styles** - Width and height with responsive breakpoints
- **Color Styles** - Text and background colors from theme
- **Display Styles** - Display properties with responsive breakpoints
- **Font Size Styles** - Typography scale with responsive support

## Props

### WithStylesProps<O>

The props interface varies based on the options passed to the HOC.

#### Base Props (Always Available)

| Prop          | Type                      | Description                                   |
| ------------- | ------------------------- | --------------------------------------------- |
| `as`          | `string \| ComponentType` | Render as different HTML element or component |
| `className`   | `string`                  | Additional CSS class names                    |
| `theme`       | `any`                     | Theme object (automatically provided)         |
| `data-testid` | `string`                  | Test identifier attribute                     |

#### ColorProps

| Prop      | Type     | Description                                    |
| --------- | -------- | ---------------------------------------------- |
| `bgColor` | `string` | Background color from theme (e.g., 'blue.500') |
| `color`   | `string` | Text color from theme or CSS color value       |

#### DisplayProps

| Prop      | Type                       | Description                                  |
| --------- | -------------------------- | -------------------------------------------- |
| `display` | `string \| BreakpointType` | CSS display property with responsive support |

#### FontSizeProps

| Prop       | Type                                                                                | Description                                |
| ---------- | ----------------------------------------------------------------------------------- | ------------------------------------------ |
| `fontSize` | `'small' \| 'xsmall' \| 'regular' \| 'large' \| string \| number \| BreakpointType` | Font size from theme scale or custom value |

#### SizingProps

| Prop     | Type                                 | Description                    |
| -------- | ------------------------------------ | ------------------------------ |
| `width`  | `string \| number \| BreakpointType` | Width with responsive support  |
| `height` | `string \| number \| BreakpointType` | Height with responsive support |

#### SpacingProps (when spacing=true)

| Prop | Type                         | Description            |
| ---- | ---------------------------- | ---------------------- |
| `p`  | `string \| number \| Object` | Padding all sides      |
| `px` | `string \| number \| Object` | Padding left and right |
| `py` | `string \| number \| Object` | Padding top and bottom |
| `pl` | `string \| number \| Object` | Padding left           |
| `pr` | `string \| number \| Object` | Padding right          |
| `pt` | `string \| number \| Object` | Padding top            |
| `pb` | `string \| number \| Object` | Padding bottom         |
| `m`  | `string \| number \| Object` | Margin all sides       |
| `mx` | `string \| number \| Object` | Margin left and right  |
| `my` | `string \| number \| Object` | Margin top and bottom  |
| `ml` | `string \| number \| Object` | Margin left            |
| `mr` | `string \| number \| Object` | Margin right           |
| `mt` | `string \| number \| Object` | Margin top             |
| `mb` | `string \| number \| Object` | Margin bottom          |

#### FlexProps (when flexbox=true)

| Prop             | Type                                 | Description                             |
| ---------------- | ------------------------------------ | --------------------------------------- |
| `flexDirection`  | `string \| BreakpointType`           | Flex direction with responsive support  |
| `flexWrap`       | `string \| BreakpointType`           | Flex wrap with responsive support       |
| `justifyContent` | `string \| BreakpointType`           | Justify content with responsive support |
| `alignItems`     | `string \| BreakpointType`           | Align items with responsive support     |
| `alignContent`   | `string \| BreakpointType`           | Align content with responsive support   |
| `order`          | `string \| number \| BreakpointType` | Flex order with responsive support      |
| `flexGrow`       | `string \| BreakpointType`           | Flex grow with responsive support       |
| `flexShrink`     | `string \| BreakpointType`           | Flex shrink with responsive support     |
| `alignSelf`      | `string \| BreakpointType`           | Align self with responsive support      |

### BreakpointType

Responsive breakpoint support for applicable props:

```typescript
type BreakpointType = {
  sm?: string | number;
  md?: string | number;
  lg?: string | number;
  xlg?: string | number;
  xxlg?: string | number;
};
```

## Usage Examples

### Basic withStyles Usage

```tsx
import React from 'react';
import withStyles from '@fil-react-components/with-styles';

const MyComponent = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);

const StyledComponent = withStyles(MyComponent);

const App = () => (
  <StyledComponent bgColor="blue.500" color="white" p={4} fontSize="large">
    Styled content
  </StyledComponent>
);
```

### Responsive Design

```tsx
<StyledComponent
  display={{ sm: 'block', md: 'flex' }}
  flexDirection={{ sm: 'column', md: 'row' }}
  p={{ sm: 2, md: 4, lg: 6 }}
  fontSize={{ sm: 'small', md: 'regular', lg: 'large' }}
>
  Responsive content
</StyledComponent>
```

### Spacing-Only Styles

```tsx
import { withSpacingStyles } from '@fil-react-components/with-styles';

const SpacingComponent = withSpacingStyles('div');

const App = () => (
  <SpacingComponent m={4} p={3} mx="auto" maxWidth="1200px">
    Content with spacing
  </SpacingComponent>
);
```

### Flexbox-Only Styles

```tsx
import { withFlexBoxStyles } from '@fil-react-components/with-styles';

const FlexComponent = withFlexBoxStyles('div');

const App = () => (
  <FlexComponent
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="space-between"
    minHeight="100vh"
  >
    <header>Header</header>
    <main>Main content</main>
    <footer>Footer</footer>
  </FlexComponent>
);
```

### Custom Component with Styles

```tsx
const Card = ({ title, children, ...props }) => (
  <div {...props}>
    <h2>{title}</h2>
    <div>{children}</div>
  </div>
);

const StyledCard = withStyles(
  Card,
  `
  border: 1px solid #e1e5e9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`
);

const App = () => (
  <StyledCard
    title="Card Title"
    bgColor="white"
    p={4}
    m={2}
    width={{ sm: '100%', md: '50%', lg: '33%' }}
  >
    Card content
  </StyledCard>
);
```

### Advanced Configuration

```tsx
const AdvancedComponent = withStyles(
  'section',
  `
    background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
    color: white;
  `,
  {
    spacing: true,
    flexbox: true,
    attrs: { 'data-component': 'advanced' },
  }
);

const App = () => (
  <AdvancedComponent
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    minHeight="100vh"
    p={6}
    textAlign="center"
  >
    <h1>Advanced Component</h1>
    <p>With custom styles and configuration</p>
  </AdvancedComponent>
);
```

### Theme Integration

```tsx
const ThemedComponent = withStyles(
  'div',
  `
  border: 2px solid ${(props) => props.theme.color.base.blue['500'].value};
  border-radius: ${(props) => props.theme.borderRadius};
`
);

const App = () => (
  <ThemedComponent bgColor="grey.050" color="blue.700" p={3} m={2}>
    Themed content
  </ThemedComponent>
);
```

### Render as Different Element

```tsx
const FlexibleComponent = withStyles('div');

const App = () => (
  <>
    {/* Renders as div */}
    <FlexibleComponent p={2}>Div element</FlexibleComponent>

    {/* Renders as span */}
    <FlexibleComponent as="span" m={1}>
      Span element
    </FlexibleComponent>

    {/* Renders as custom component */}
    <FlexibleComponent as={CustomButton} variant="primary">
      Custom component
    </FlexibleComponent>
  </>
);
```

## Features

### Responsive Design

- **Breakpoint Support** - Responsive props for all applicable styles
- **Mobile First** - Breakpoint system follows mobile-first approach
- **Flexible Values** - Support for theme values, CSS units, and numbers

### Theme Integration

- **Color System** - Access to full theme color palette
- **Typography Scale** - Consistent font sizes from theme
- **Spacing Scale** - Standardized spacing values
- **Automatic Contrast** - Background colors automatically set text contrast

### Performance

- **Prop Filtering** - Non-style props are properly forwarded
- **CSS-in-JS** - Efficient styled-components integration
- **Tree Shaking** - Only include needed style categories

### Developer Experience

- **TypeScript Support** - Full type safety for all props
- **IntelliSense** - IDE autocomplete for theme values
- **Consistent API** - Same prop patterns across all style categories

## Testing

The component includes:

- Unit tests using Jest
- Type checking with TypeScript
- Test utilities from `@fil-react-utils/testing`

Run tests:

```bash
npm test
```

## Data Attributes

- `data-testid` - Custom test identifier (passed through)

## CSS Classes

The HOC doesn't add specific CSS classes but forwards className prop to the wrapped component.

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
```

## File Structure

```
WithStyles/
├── src/
│   ├── withStyles.tsx              # Main HOC implementation
│   ├── index.ts                    # Main exports
│   ├── Color/
│   │   └── Color.style.ts          # Color styling utilities
│   ├── Display/
│   │   └── Display.style.ts        # Display property styles
│   ├── FlexBox/
│   │   └── FlexBox.style.ts        # Flexbox layout styles
│   ├── FontSize/
│   │   └── FontSize.style.ts       # Typography styles
│   ├── Sizing/
│   │   └── Sizing.style.ts         # Width/height styles
│   └── Spacing/
│       └── Spacing.style.ts        # Margin/padding styles
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Layout Components

```tsx
const Layout = withStyles('div', '', { flexbox: true, spacing: true });

const App = () => (
  <Layout display="flex" flexDirection="column" minHeight="100vh">
    <Layout as="header" p={4} bgColor="blue.500" color="white">
      Header
    </Layout>
    <Layout as="main" flexGrow={1} p={4}>
      Main content
    </Layout>
    <Layout as="footer" p={4} bgColor="grey.100">
      Footer
    </Layout>
  </Layout>
);
```

### Card Components

```tsx
const Card = withStyles(
  'div',
  `
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: box-shadow 0.2s ease;
  
  &:hover {
    box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  }
`
);

const App = () => (
  <Card
    bgColor="white"
    p={4}
    m={2}
    width={{ sm: '100%', md: '48%', lg: '32%' }}
  >
    <h3>Card Title</h3>
    <p>Card content with responsive width</p>
  </Card>
);
```

### Button Variants

```tsx
const Button = withStyles(
  'button',
  `
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`
);

const App = () => (
  <>
    <Button bgColor="blue.500" color="white" p={{ sm: 2, md: 3 }} m={1}>
      Primary Button
    </Button>
    <Button bgColor="grey.200" color="grey.800" p={{ sm: 2, md: 3 }} m={1}>
      Secondary Button
    </Button>
  </>
);
```

### Grid System

```tsx
const Grid = withStyles('div', '', { flexbox: true, spacing: true });
const Col = withStyles('div', '', { flexbox: true, spacing: true });

const App = () => (
  <Grid display="flex" flexWrap="wrap" mx={-2}>
    <Col width={{ sm: '100%', md: '50%', lg: '33%' }} px={2} mb={4}>
      Column 1
    </Col>
    <Col width={{ sm: '100%', md: '50%', lg: '33%' }} px={2} mb={4}>
      Column 2
    </Col>
    <Col width={{ sm: '100%', md: '50%', lg: '33%' }} px={2} mb={4}>
      Column 3
    </Col>
  </Grid>
);
```

### Form Layout

```tsx
const FormGroup = withStyles('div', '', { spacing: true });
const Input = withStyles(
  'input',
  `
  border: 1px solid #d1d5db;
  border-radius: 4px;
  padding: 8px 12px;
  width: 100%;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`
);

const App = () => (
  <FormGroup m={4}>
    <FormGroup mb={3}>
      <label>Name</label>
      <Input type="text" p={2} mt={1} />
    </FormGroup>
    <FormGroup mb={3}>
      <label>Email</label>
      <Input type="email" p={2} mt={1} />
    </FormGroup>
  </FormGroup>
);
```

## Best Practices

1. **Use Appropriate HOC** - Choose `withSpacingStyles` or `withFlexBoxStyles` for better bundle size when only specific styles are needed
2. **Leverage Theme Values** - Use theme colors and spacing for consistency
3. **Responsive First** - Design mobile-first with responsive breakpoints
4. **Combine with Custom Styles** - Use component styles parameter for complex styling
5. **Type Safety** - Take advantage of TypeScript for prop validation
6. **Performance** - Avoid unnecessary style categories in options
7. **Semantic HTML** - Use `as` prop to maintain semantic meaning
8. **Accessibility** - Ensure color contrast ratios are maintained

## Migration Notes

### From older versions:

- Ensure you have the required peer dependencies installed
- The component now requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling
- `data-testid` prop is now included in the interface for testing
- Global spacing classes are now optional to reduce bundle size
- Some CSS `!important` declarations have been removed from spacing styles

## Related Components

- `@fil-react-components/theme-provider` - Provides theme context for styling
- `@fil-react-mixins/styled` - Styled-components mixins and utilities
- `@fil-react-utils/common` - Utility functions for color contrast and common operations
