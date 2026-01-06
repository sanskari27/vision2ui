# Grid Component Documentation

## Overview

The Grid component provides a flexible, responsive grid layout system based on the Foundation framework's XY Grid. It includes both Grid and Cell components that work together to create responsive layouts with support for horizontal and vertical directions, gutters, offsets, and auto-sizing. The grid system follows the GDS (Global Design System) standards and integrates seamlessly with the theme provider for consistent spacing and breakpoints.

## Package Information

- **Package Name**: `@fil-react-components/grid`
- **Version**: 2.9.11
- **Description**: Contains Grid and Cell Component from Icicle
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/grid
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/with-styles`: ^2.7.8
- `@fil-react-mixins/styled`: ^2.7.1
- `@fil-react-types/types`: ^1.4.1
- `classnames`: ^2.5.1

## Exports

```typescript
import Grid, { Grid, Cell, CellProps } from '@fil-react-components/grid';
```

### Available Exports:

- `Grid` (default export) - Main grid container component
- `Grid` (named export) - Grid container component
- `Cell` - Grid cell component for content placement
- `CellProps` - TypeScript interface for Cell component props

## Component Structure

### Main Component: Grid

A responsive grid container that provides layout structure with horizontal or vertical direction support.

### Component Variations:

1. **Horizontal Grid** (default) - Left-to-right layout with `grid-x` direction
2. **Vertical Grid** - Top-to-bottom layout with `grid-y` direction
3. **Grid with Margins** - Horizontal gutters between cells
4. **Grid with Padding** - Internal padding for cells
5. **Grid as Cell** - Grid that can be used as a cell within another grid

### Component Features:

- **Responsive Breakpoints**: Support for sm, md, lg, xlg, xxlg breakpoints
- **Direction Control**: Horizontal (grid-x) and vertical (grid-y) layouts
- **Gutter Management**: Margin and padding gutters for spacing
- **Nested Grids**: Support for complex nested grid structures
- **Auto-sizing**: Automatic cell sizing based on content or available space
- **Offset Support**: Cell positioning with offset properties
- **Shrink Behavior**: Cells that shrink to content size
- **Theme Integration**: Styled-components with theme provider

### Component Hierarchy:

```
Grid Container
├── Cell (responsive columns)
│   ├── Content or nested Grid
│   └── More Cells...
└── Cell (responsive columns)
    └── Content or nested Grid
```

## Props

### GridProps

| Prop        | Type                   | Default    | Description                                   |
| ----------- | ---------------------- | ---------- | --------------------------------------------- |
| `direction` | `'grid-x' \| 'grid-y'` | `'grid-x'` | Layout direction (horizontal or vertical)     |
| `margin`    | `boolean`              | `false`    | Add horizontal margins/gutters between cells  |
| `padding`   | `boolean`              | `false`    | Add horizontal padding to cells               |
| `marginY`   | `boolean`              | `false`    | Add vertical margins/gutters between cells    |
| `paddingY`  | `boolean`              | `false`    | Add vertical padding to cells                 |
| `className` | `string`               | -          | Additional CSS class names                    |
| `asCell`    | `boolean`              | `false`    | Render grid as a cell (for nesting)           |
| `children`  | `React.ReactNode`      | -          | **Required** - Grid content (Cell components) |
| `sm`        | `number \| string`     | -          | Small breakpoint column span                  |
| `md`        | `number \| string`     | -          | Medium breakpoint column span                 |
| `lg`        | `number \| string`     | -          | Large breakpoint column span                  |

### CellProps

| Prop          | Type               | Default | Description                                  |
| ------------- | ------------------ | ------- | -------------------------------------------- |
| `className`   | `string`           | -       | Additional CSS class names                   |
| `children`    | `React.ReactNode`  | -       | Cell content                                 |
| `auto`        | `boolean`          | `false` | Auto-size cell to content or available space |
| `shrink`      | `boolean`          | `false` | Shrink cell to content size                  |
| `center`      | `boolean`          | `false` | Center cell content                          |
| `sm`          | `number \| string` | -       | Small breakpoint column span                 |
| `md`          | `number \| string` | -       | Medium breakpoint column span                |
| `lg`          | `number \| string` | -       | Large breakpoint column span                 |
| `xlg`         | `number \| string` | -       | Extra large breakpoint column span           |
| `xxlg`        | `number \| string` | -       | Extra extra large breakpoint column span     |
| `offset`      | `BreakpointType`   | -       | Offset positioning for breakpoints           |
| `offsetRight` | `BreakpointType`   | -       | Right offset positioning for breakpoints     |

### BreakpointType

```typescript
type BreakpointType = {
  sm?: number | string;
  md?: number | string;
  lg?: number | string;
  xlg?: number | string;
  xxlg?: number | string;
};
```

## Usage Examples

### Basic Horizontal Grid

```tsx
import { Grid, Cell } from '@fil-react-components/grid';

<Grid>
  <Cell sm={6} md={4} lg={3}>
    Column 1
  </Cell>
  <Cell sm={6} md={4} lg={3}>
    Column 2
  </Cell>
  <Cell sm={6} md={4} lg={3}>
    Column 3
  </Cell>
  <Cell sm={6} md={4} lg={3}>
    Column 4
  </Cell>
</Grid>;
```

### Grid with Margins

```tsx
<Grid margin>
  <Cell sm={6} md={4}>
    Content with gutters
  </Cell>
  <Cell sm={6} md={8}>
    More content
  </Cell>
</Grid>
```

### Responsive Grid

```tsx
<Grid margin>
  <Cell sm={12} md={6} lg={4}>
    Small: full width, Medium: half width, Large: third width
  </Cell>
  <Cell sm={12} md={6} lg={8}>
    Small: full width, Medium: half width, Large: two thirds width
  </Cell>
</Grid>
```

### Vertical Grid

```tsx
<Grid direction="grid-y" paddingY style={{ height: '300px' }}>
  <Cell sm={6}>Top half</Cell>
  <Cell sm={6}>Bottom half</Cell>
</Grid>
```

### Auto-sizing Cells

```tsx
<Grid margin>
  <Cell sm={4}>Fixed width column</Cell>
  <Cell auto>Takes remaining space</Cell>
</Grid>
```

### Shrink Cells

```tsx
<Grid>
  <Cell shrink>Content-sized column</Cell>
  <Cell auto>Expands to fill space</Cell>
</Grid>
```

### Offset Cells

```tsx
<Grid margin>
  <Cell sm={4} offset={{ lg: 2 }}>
    Offset by 2 columns on large screens
  </Cell>
  <Cell sm={6}>Regular cell</Cell>
</Grid>
```

### Nested Grids

```tsx
<Grid margin>
  <Cell sm={8}>
    <Grid direction="grid-y" paddingY style={{ height: '200px' }}>
      <Cell sm={6}>Nested vertical cell 1</Cell>
      <Cell sm={6}>Nested vertical cell 2</Cell>
    </Grid>
  </Cell>
  <Cell sm={4}>Sidebar content</Cell>
</Grid>
```

### Grid as Cell

```tsx
<Grid margin>
  <Grid asCell sm={6} direction="grid-y" paddingY style={{ height: '200px' }}>
    <Cell sm={4}>Nested cell 1</Cell>
    <Cell sm={4}>Nested cell 2</Cell>
    <Cell auto>Nested cell 3</Cell>
  </Grid>
  <Cell sm={6}>Regular cell</Cell>
</Grid>
```

### Complex Layout

```tsx
<Grid margin>
  <Cell sm={12} md={8} lg={9}>
    <h2>Main Content</h2>
    <Grid margin>
      <Cell sm={12} md={6}>
        <article>Article 1</article>
      </Cell>
      <Cell sm={12} md={6}>
        <article>Article 2</article>
      </Cell>
    </Grid>
  </Cell>
  <Cell sm={12} md={4} lg={3}>
    <aside>Sidebar</aside>
  </Cell>
</Grid>
```

### Form Layout

```tsx
import { TextField } from '@fil-react-components/text-field';
import { PrimaryButton } from '@fil-react-components/button';

<Grid margin>
  <Cell sm={12} md={6}>
    <TextField name="firstName" label="First Name" />
  </Cell>
  <Cell sm={12} md={6}>
    <TextField name="lastName" label="Last Name" />
  </Cell>
  <Cell sm={12}>
    <TextField name="email" label="Email" />
  </Cell>
  <Cell sm={12}>
    <PrimaryButton type="submit">Submit</PrimaryButton>
  </Cell>
</Grid>;
```

### Card Grid Layout

```tsx
import { Card } from '@fil-react-components/card';

<Grid margin>
  <Cell sm={12} md={6} lg={4}>
    <Card>
      <h3>Card 1</h3>
      <p>Content for card 1</p>
    </Card>
  </Cell>
  <Cell sm={12} md={6} lg={4}>
    <Card>
      <h3>Card 2</h3>
      <p>Content for card 2</p>
    </Card>
  </Cell>
  <Cell sm={12} md={6} lg={4}>
    <Card>
      <h3>Card 3</h3>
      <p>Content for card 3</p>
    </Card>
  </Cell>
</Grid>;
```

## Features

### Responsive Breakpoints

- **Small (sm)**: Mobile devices (default breakpoint)
- **Medium (md)**: Tablets and small desktops
- **Large (lg)**: Standard desktops
- **Extra Large (xlg)**: Large displays
- **Extra Extra Large (xxlg)**: Ultra-wide displays

### Layout Directions

- **Horizontal (grid-x)**: Left-to-right layout (default)
- **Vertical (grid-y)**: Top-to-bottom layout

### Spacing & Gutters

- **Margin Gutters**: Horizontal spacing between cells
- **Padding Gutters**: Internal cell padding
- **Vertical Gutters**: Top/bottom spacing for vertical grids
- **Theme Integration**: Consistent spacing from theme provider

### Cell Sizing

- **Fixed Columns**: Specific column spans (1-12)
- **Auto-sizing**: Cells expand to fill available space
- **Shrink**: Cells size to content width
- **Responsive Overrides**: Different sizes per breakpoint

### Positioning

- **Offsets**: Push cells right by specified columns
- **Right Offsets**: Push cells from the right edge
- **Centering**: Center cell content horizontally
- **Flexible Layouts**: Mix fixed and flexible cells

### Nesting Support

- **Nested Grids**: Grids within grid cells
- **Grid as Cell**: Use Grid component as a Cell
- **Complex Layouts**: Multi-level grid hierarchies
- **Flexible Structure**: Unlimited nesting depth

### Accessibility

- **Semantic Structure**: Proper HTML structure for screen readers
- **Keyboard Navigation**: Logical tab order through grid content
- **Screen Reader Support**: ARIA attributes for grid navigation
- **Focus Management**: Proper focus handling in grid layouts

### Styling

- **Theme Integration**: Consistent with GDS design system
- **Custom Styling**: CSS class support for customization
- **Responsive Design**: Mobile-first responsive approach
- **Flexible Layouts**: CSS Grid-based modern layout system

## Testing

The component includes:

- Unit tests using Jest
- Component tests using Playwright
- Snapshot testing for UI consistency
- Responsive breakpoint testing
- Accessibility testing with axe-devtools

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

- Basic grid configurations
- Margin and padding gutter examples
- Auto-sizing and shrink cell behaviors
- Responsive breakpoint variations
- Offset positioning examples
- Vertical grid layouts
- Nested grid structures
- Grid as cell usage
- Complex layout patterns

## Data Attributes

- `data-frc="grid"` - Applied to Grid container elements
- `data-frc="cell"` - Applied to Cell container elements

## CSS Classes

- `grid-x` - Horizontal grid direction
- `grid-y` - Vertical grid direction
- `grid-margin` - Horizontal margin gutters
- `grid-margin-y` - Vertical margin gutters
- `grid-padding` - Horizontal padding gutters
- `grid-padding-y` - Vertical padding gutters
- `cell` - Cell container class
- `auto` - Auto-sizing cell
- `shrink` - Shrink-to-content cell

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
Grid/
├── src/
│   ├── Cell/
│   │   ├── Cell.mock.ts         # Cell mock configurations
│   │   ├── Cell.style.ts        # Cell styling
│   │   ├── Cell.tsx             # Cell component
│   │   ├── index.ts             # Cell exports
│   │   └── tests/               # Cell tests
│   ├── Grid.constants.ts        # Grid constants and utilities
│   ├── Grid.mock.ts             # Grid mock configurations
│   ├── Grid.stories.tsx         # Storybook stories
│   ├── Grid.style.ts            # Grid styling
│   ├── Grid.tsx                 # Grid component
│   ├── index.ts                 # Main exports
│   └── tests/
│       ├── Grid.ct.tsx          # Component tests
│       ├── Grid.test.tsx        # Unit tests
│       ├── GridWrapper.tsx      # Test wrapper
│       ├── a11y-results/        # Accessibility test results
│       ├── coverage/            # Test coverage reports
│       └── __snapshots__/       # Snapshot files
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Page Layout

```tsx
const PageLayout = ({ header, sidebar, main, footer }) => (
  <Grid direction="grid-y" style={{ minHeight: '100vh' }}>
    <Cell shrink>{header}</Cell>
    <Cell auto>
      <Grid margin>
        <Cell sm={12} lg={3}>
          {sidebar}
        </Cell>
        <Cell sm={12} lg={9}>
          {main}
        </Cell>
      </Grid>
    </Cell>
    <Cell shrink>{footer}</Cell>
  </Grid>
);
```

### Dashboard Grid

```tsx
const Dashboard = () => (
  <Grid margin>
    <Cell sm={12} md={6} lg={3}>
      <MetricCard title="Users" value="1,234" />
    </Cell>
    <Cell sm={12} md={6} lg={3}>
      <MetricCard title="Revenue" value="$12,345" />
    </Cell>
    <Cell sm={12} md={6} lg={3}>
      <MetricCard title="Orders" value="567" />
    </Cell>
    <Cell sm={12} md={6} lg={3}>
      <MetricCard title="Conversion" value="3.2%" />
    </Cell>
    <Cell sm={12} lg={8}>
      <ChartCard title="Analytics" />
    </Cell>
    <Cell sm={12} lg={4}>
      <ActivityFeed />
    </Cell>
  </Grid>
);
```

### Product Grid

```tsx
const ProductGrid = ({ products }) => (
  <Grid margin>
    {products.map((product) => (
      <Cell key={product.id} sm={12} md={6} lg={4} xlg={3}>
        <ProductCard product={product} />
      </Cell>
    ))}
  </Grid>
);
```

### Form Sections

```tsx
const MultiSectionForm = () => (
  <Grid direction="grid-y" paddingY>
    <Cell shrink>
      <h2>Personal Information</h2>
      <Grid margin>
        <Cell sm={12} md={6}>
          <TextField name="firstName" label="First Name" />
        </Cell>
        <Cell sm={12} md={6}>
          <TextField name="lastName" label="Last Name" />
        </Cell>
      </Grid>
    </Cell>
    <Cell shrink>
      <h2>Contact Details</h2>
      <Grid margin>
        <Cell sm={12}>
          <TextField name="email" label="Email" />
        </Cell>
        <Cell sm={12} md={6}>
          <TextField name="phone" label="Phone" />
        </Cell>
        <Cell sm={12} md={6}>
          <TextField name="address" label="Address" />
        </Cell>
      </Grid>
    </Cell>
  </Grid>
);
```

### Image Gallery

```tsx
const ImageGallery = ({ images }) => (
  <Grid margin>
    {images.map((image, index) => (
      <Cell key={index} sm={12} md={6} lg={4}>
        <div className="image-container">
          <img src={image.src} alt={image.alt} />
        </div>
      </Cell>
    ))}
  </Grid>
);
```

### Content Columns

```tsx
const ContentColumns = ({ leftContent, rightContent }) => (
  <Grid margin>
    <Cell sm={12} lg={8}>
      <article>{leftContent}</article>
    </Cell>
    <Cell sm={12} lg={4}>
      <aside>{rightContent}</aside>
    </Cell>
  </Grid>
);
```

### Footer Links

```tsx
const Footer = () => (
  <Grid margin>
    <Cell sm={12} md={3}>
      <h4>Company</h4>
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/careers">Careers</a>
        </li>
      </ul>
    </Cell>
    <Cell sm={12} md={3}>
      <h4>Support</h4>
      <ul>
        <li>
          <a href="/help">Help Center</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
    </Cell>
    <Cell sm={12} md={3}>
      <h4>Legal</h4>
      <ul>
        <li>
          <a href="/privacy">Privacy Policy</a>
        </li>
        <li>
          <a href="/terms">Terms of Service</a>
        </li>
      </ul>
    </Cell>
    <Cell sm={12} md={3}>
      <h4>Follow Us</h4>
      <SocialLinks />
    </Cell>
  </Grid>
);
```

## Best Practices

1. **Use semantic breakpoints** - Choose breakpoints that match content needs
2. **Plan responsive behavior** - Design mobile-first with progressive enhancement
3. **Use gutters consistently** - Apply margin or padding gutters throughout layouts
4. **Combine auto and fixed cells** - Mix sizing strategies for flexible layouts
5. **Limit nesting depth** - Keep grid nesting to 2-3 levels maximum
6. **Test across breakpoints** - Verify layouts work on all screen sizes
7. **Use offsets sparingly** - Prefer natural flow over complex positioning
8. **Consider content hierarchy** - Use grid to reinforce content importance
9. **Maintain consistent spacing** - Use theme-provided gutter values
10. **Document grid usage** - Comment complex grid structures for maintainability

## Migration Notes

### General Migration:

- Ensure you have the required peer dependencies installed
- The component requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling and breakpoints
- React 16.14.0+ is required

### Recent Updates:

- Added `data-frc` attributes for component identification (v2.9.0)
- Theme provider peer dependency updates for compatibility

### Breaking Changes:

- Verify that your theme provider includes grid configuration
- Check that breakpoint values are properly defined in theme
- Ensure CSS Grid support in target browsers

## Related Components

- `@fil-react-components/theme-provider` - Theme provider for breakpoints and spacing
- `@fil-react-components/card` - Card components for grid content
- `@fil-react-components/box` - Box component for layout utilities
- `@fil-react-components/heading` - Heading components for grid sections
