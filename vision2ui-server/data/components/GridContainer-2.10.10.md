# GridContainer Component Documentation

## Overview

The GridContainer component provides a responsive container wrapper for Grid components, implementing max-width constraints and responsive padding based on the GDS (Global Design System) standards. It serves as the outer wrapper for grid layouts, ensuring consistent spacing and width management across different screen sizes. The component integrates seamlessly with the theme provider and supports fluid and full-width variations for flexible layout needs.

## Package Information

- **Package Name**: `@fil-react-components/grid-container`
- **Version**: 2.10.10
- **Description**: Contains GridContainer Component from Icicle
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/grid-container
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/with-styles`: ^2.7.8
- `@fil-react-mixins/styled`: ^2.7.1

## Dev Dependencies

- `@fil-react-components/grid`: ^2.9.11
- `@fil-react-utils/testing`: ^1.12.4

## Exports

```typescript
import GridContainer from '@fil-react-components/grid-container';
```

### Available Exports:

- `GridContainer` (default export) - Main container component for grid layouts

## Component Structure

### Main Component: GridContainer

A responsive container component that provides max-width constraints and responsive padding for grid layouts.

### Component Variations:

1. **Default Container** - Centered container with responsive padding and max-width
2. **Fluid Container** - Full-width container (100% width) with responsive padding
3. **Full Container** - Full-width container with no padding (edge-to-edge)

### Component Features:

- **Responsive Padding**: Automatic padding based on theme breakpoints
- **Max-Width Control**: Centered layout with configurable maximum width
- **Theme Integration**: Styled-components with theme provider
- **Flexible Variations**: Default, fluid, and full-width options
- **Grid Wrapper**: Designed specifically for Grid component usage

### Component Hierarchy:

```
GridContainer (variation)
├── Grid (margin/padding)
│   ├── Cell (responsive columns)
│   │   └── Content
│   └── Cell (responsive columns)
│       └── Content
└── Grid (additional grids)
    └── Content
```

## Props

### GridContainerProps

| Prop            | Type                                   | Default | Description                                                                                                |
| --------------- | -------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `variation`     | `'fluid' \| 'full' \| ''`              | `''`    | Container width variation (empty string = default, 'fluid' = 100% width, 'full' = 100% width + no padding) |
| `className`     | `string`                               | -       | Additional CSS class names                                                                                 |
| `children`      | `React.ReactNode`                      | -       | **Required** - Container content (typically Grid components)                                               |
| `...extraProps` | `React.HTMLAttributes<HTMLDivElement>` | -       | Standard HTML div attributes (id, style, onClick, etc.)                                                    |

## Usage Examples

### Basic Grid Container

```tsx
import { Grid, Cell } from '@fil-react-components/grid';
import GridContainer from '@fil-react-components/grid-container';

<GridContainer>
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
  </Grid>
</GridContainer>;
```

### Grid Container with Margin Gutters

```tsx
<GridContainer>
  <Grid margin>
    <Cell sm={12} md={6} lg={4}>
      Content with gutters
    </Cell>
    <Cell sm={12} md={6} lg={8}>
      More content
    </Cell>
  </Grid>
</GridContainer>
```

### Fluid Container (Full Width)

```tsx
<GridContainer variation="fluid">
  <Grid margin>
    <Cell sm={4}>Full width container</Cell>
    <Cell sm={4}>No max-width constraint</Cell>
    <Cell sm={4}>Responsive padding maintained</Cell>
  </Grid>
</GridContainer>
```

### Full Container (Edge-to-Edge)

```tsx
<GridContainer variation="full">
  <Grid margin>
    <Cell sm={6}>Edge-to-edge container</Cell>
    <Cell sm={6}>No padding on any breakpoint</Cell>
  </Grid>
</GridContainer>
```

### Multiple Grids in Container

```tsx
<GridContainer>
  <Grid margin>
    <Cell sm={12} md={6}>
      Header section
    </Cell>
    <Cell sm={12} md={6}>
      Navigation
    </Cell>
  </Grid>

  <Grid margin>
    <Cell sm={12} md={8}>
      Main content
    </Cell>
    <Cell sm={12} md={4}>
      Sidebar
    </Cell>
  </Grid>

  <Grid>
    <Cell>Footer content</Cell>
  </Grid>
</GridContainer>
```

### Responsive Layout with Container

```tsx
<GridContainer>
  <Grid margin>
    <Cell sm={12} md={4} lg={3}>
      <aside>Sidebar</aside>
    </Cell>
    <Cell sm={12} md={8} lg={9}>
      <main>
        <Grid padding>
          <Cell sm={12} md={6}>
            <article>Article 1</article>
          </Cell>
          <Cell sm={12} md={6}>
            <article>Article 2</article>
          </Cell>
        </Grid>
      </main>
    </Cell>
  </Grid>
</GridContainer>
```

### Auto-sizing Grid in Container

```tsx
<GridContainer>
  <Grid margin>
    <Cell sm={4}>Fixed sidebar</Cell>
    <Cell auto>
      <div>Main content area expands</div>
    </Cell>
  </Grid>
</GridContainer>
```

### Vertical Grid in Container

```tsx
<GridContainer>
  <Grid direction="grid-y" paddingY style={{ minHeight: '400px' }}>
    <Cell sm={6}>Header section</Cell>
    <Cell auto>Main content</Cell>
    <Cell shrink>Footer</Cell>
  </Grid>
</GridContainer>
```

### Offset Grid in Container

```tsx
<GridContainer>
  <Grid margin>
    <Cell sm={4} offset={{ lg: 2 }}>
      Offset content
    </Cell>
    <Cell sm={6}>Regular content</Cell>
  </Grid>
</GridContainer>
```

### Page Layout Structure

```tsx
const PageLayout = ({ header, navigation, main, sidebar, footer }) => (
  <GridContainer>
    {/* Header */}
    <Grid>
      <Cell>{header}</Cell>
    </Grid>

    {/* Navigation */}
    <Grid margin>
      <Cell sm={12}>{navigation}</Cell>
    </Grid>

    {/* Main Content Area */}
    <Grid margin>
      <Cell sm={12} lg={8}>
        {main}
      </Cell>
      <Cell sm={12} lg={4}>
        {sidebar}
      </Cell>
    </Grid>

    {/* Footer */}
    <Grid>
      <Cell>{footer}</Cell>
    </Grid>
  </GridContainer>
);
```

### Dashboard Layout

```tsx
const Dashboard = () => (
  <GridContainer>
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
    </Grid>

    <Grid margin>
      <Cell sm={12} lg={8}>
        <ChartCard title="Analytics" />
      </Cell>
      <Cell sm={12} lg={4}>
        <ActivityFeed />
      </Cell>
    </Grid>
  </GridContainer>
);
```

### Product Grid Layout

```tsx
const ProductGrid = ({ products }) => (
  <GridContainer>
    <Grid margin>
      {products.map((product) => (
        <Cell key={product.id} sm={12} md={6} lg={4} xlg={3}>
          <ProductCard product={product} />
        </Cell>
      ))}
    </Grid>
  </GridContainer>
);
```

### Form Layout with Container

```tsx
const ContactForm = () => (
  <GridContainer>
    <Grid margin>
      <Cell sm={12} md={6}>
        <TextField name="firstName" label="First Name" />
      </Cell>
      <Cell sm={12} md={6}>
        <TextField name="lastName" label="Last Name" />
      </Cell>
      <Cell sm={12}>
        <TextField name="email" label="Email" type="email" />
      </Cell>
      <Cell sm={12}>
        <TextArea name="message" label="Message" rows={4} />
      </Cell>
      <Cell sm={12}>
        <PrimaryButton type="submit">Send Message</PrimaryButton>
      </Cell>
    </Grid>
  </GridContainer>
);
```

## Features

### Container Variations

- **Default**: Centered container with max-width and responsive padding
- **Fluid**: Full-width container maintaining responsive padding
- **Full**: Full-width container with no padding (edge-to-edge)

### Responsive Design

- **Breakpoint-Based Padding**: Automatic padding adjustments per theme breakpoints
- **Max-Width Constraints**: Configurable maximum width from theme
- **Mobile-First**: Responsive design starting from mobile breakpoints

### Theme Integration

- **GDS Standards**: Follows Global Design System specifications
- **Theme Provider**: Integrates with theme for consistent spacing
- **Styled Components**: CSS-in-JS with theme-aware styling

### Layout Flexibility

- **Grid Wrapper**: Optimized for Grid component usage
- **Multiple Grids**: Support for multiple grid sections
- **Nested Layouts**: Complex nested grid structures
- **Content Flexibility**: Works with any content type

### Accessibility

- **Semantic HTML**: Proper div structure for screen readers
- **Keyboard Navigation**: Logical tab order through container content
- **Screen Reader Support**: ARIA attributes inherited from child components
- **Focus Management**: Proper focus handling within container

### Styling

- **Theme Integration**: Consistent with GDS design system
- **Custom Styling**: CSS class support for customization
- **Responsive Layouts**: Mobile-first responsive approach
- **Flexible Containers**: Multiple width and padding options

## Testing

The component includes:

- Unit tests using Jest with snapshot testing
- Component tests using Playwright
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

- Basic grid container configurations
- Margin and padding gutter examples
- Fluid and full container variations
- Auto-sizing and responsive adjustments
- Offset positioning examples
- Vertical grid layouts
- Multiple grids in container
- Complex layout patterns

## Data Attributes

- `data-frc="grid-container"` - Applied to GridContainer elements

## CSS Classes

- No specific CSS classes - styling handled through styled-components

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
GridContainer/
├── src/
│   ├── GridContainer.constants.ts    # Padding style constants
│   ├── GridContainer.stories.tsx     # Storybook stories
│   ├── GridContainer.style.ts        # Styled-components styles
│   ├── GridContainer.tsx             # Main component
│   ├── index.ts                      # Main exports
│   └── tests/
│       ├── GridContainer.ct.tsx      # Component tests
│       ├── GridContainer.test.tsx    # Unit tests
│       ├── a11y-results/             # Accessibility test results
│       ├── coverage/                 # Test coverage reports
│       └── __snapshots__/            # Snapshot files
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Page Layout Container

```tsx
const Page = () => (
  <GridContainer>
    <Header />
    <GridContainer variation="fluid">
      <Navigation />
    </GridContainer>
    <GridContainer>
      <Grid margin>
        <Cell sm={12} lg={8}>
          <MainContent />
        </Cell>
        <Cell sm={12} lg={4}>
          <Sidebar />
        </Cell>
      </Grid>
    </GridContainer>
    <Footer />
  </GridContainer>
);
```

### Content Wrapper

```tsx
const ContentWrapper = ({ children, variation = '' }) => (
  <GridContainer variation={variation}>
    <Grid margin>
      <Cell>{children}</Cell>
    </Grid>
  </GridContainer>
);

// Usage
<ContentWrapper>
  <h1>Page Title</h1>
  <p>Page content...</p>
</ContentWrapper>;
```

### Section Container

```tsx
const Section = ({ title, children, backgroundColor }) => (
  <GridContainer style={{ backgroundColor }}>
    <Grid margin>
      <Cell>
        <h2>{title}</h2>
        {children}
      </Cell>
    </Grid>
  </GridContainer>
);
```

### Card Grid Container

```tsx
const CardGrid = ({ cards, variation = '' }) => (
  <GridContainer variation={variation}>
    <Grid margin>
      {cards.map((card) => (
        <Cell key={card.id} sm={12} md={6} lg={4}>
          <Card {...card} />
        </Cell>
      ))}
    </Grid>
  </GridContainer>
);
```

### Hero Section Container

```tsx
const HeroSection = ({ title, subtitle, cta }) => (
  <GridContainer variation="fluid" style={{ backgroundColor: '#f5f5f5' }}>
    <Grid margin>
      <Cell sm={12} md={8} lg={6}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {cta}
      </Cell>
    </Grid>
  </GridContainer>
);
```

### Footer Container

```tsx
const Footer = () => (
  <GridContainer variation="full" style={{ backgroundColor: '#333' }}>
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
  </GridContainer>
);
```

### Modal Content Container

```tsx
const ModalContent = ({ children }) => (
  <GridContainer>
    <Grid margin>
      <Cell>{children}</Cell>
    </Grid>
  </GridContainer>
);
```

### Article Layout Container

```tsx
const ArticleLayout = ({ article, related }) => (
  <GridContainer>
    <Grid margin>
      <Cell sm={12} lg={8}>
        <article>{article}</article>
      </Cell>
      <Cell sm={12} lg={4}>
        <aside>{related}</aside>
      </Cell>
    </Grid>
  </GridContainer>
);
```

## Best Practices

1. **Use appropriate variations** - Choose default for content, fluid for full-width sections, full for edge-to-edge layouts
2. **Wrap Grid components** - GridContainer is designed specifically for Grid component usage
3. **Maintain consistent spacing** - Use margin gutters on Grid components within containers
4. **Consider responsive behavior** - Test layouts across all breakpoints
5. **Use semantic structure** - Combine with proper heading hierarchy and content organization
6. **Limit nesting depth** - Avoid deeply nested GridContainer structures
7. **Theme consistency** - Ensure theme provider includes proper grid configuration
8. **Performance considerations** - Use appropriate container variations for content needs
9. **Accessibility first** - Ensure proper heading structure and content flow
10. **Mobile optimization** - Design mobile-first with progressive enhancement

## Migration Notes

### General Migration:

- Ensure you have the required peer dependencies installed
- The component requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling and breakpoints
- React 16.14.0+ is required

### Recent Updates:

- Added `data-frc` attribute for component identification (v2.9.0)
- Theme provider peer dependency updates for compatibility

### Breaking Changes:

- Verify that your theme provider includes grid container configuration
- Check that breakpoint values are properly defined in theme
- Ensure CSS Grid support in target browsers

### From Previous Versions:

- Component structure remains consistent
- Props interface unchanged
- Styling approach maintained with styled-components

## Related Components

- `@fil-react-components/grid` - Grid and Cell components for layout structure
- `@fil-react-components/theme-provider` - Theme provider for breakpoints and spacing
- `@fil-react-components/box` - Box component for additional layout utilities
- `@fil-react-components/card` - Card components for grid content
