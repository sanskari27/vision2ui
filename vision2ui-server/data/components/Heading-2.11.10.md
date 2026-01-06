# Heading Component Documentation

## Overview

The Heading component provides semantic heading elements with responsive typography and consistent spacing following the GDS (Global Design System) standards. It includes six size variations (XXL through XS) with automatic responsive font sizing and proper semantic HTML structure. The component integrates seamlessly with the theme provider for consistent typography across breakpoints.

## Package Information

- **Package Name**: `@fil-react-components/heading`
- **Version**: 2.11.10
- **Description**: Heading Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/heading
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
import Heading, {
  HeadingXL,
  HeadingL,
  HeadingM,
  HeadingS,
  HeadingXS,
  HeadingXXL,
} from '@fil-react-components/heading';
```

### Available Exports:

- `Heading` (default export) - Base heading component (renders as h1)
- `HeadingXXL` - Extra extra large heading (h1)
- `HeadingXL` - Extra large heading (h1)
- `HeadingL` - Large heading (h2)
- `HeadingM` - Medium heading (h3)
- `HeadingS` - Small heading (h4)
- `HeadingXS` - Extra small heading (h5)

## Component Structure

### Main Component: Heading

A base heading component that provides consistent typography styling and semantic structure.

### Component Variations:

1. **HeadingXXL** - Largest heading size, typically for page titles
2. **HeadingXL** - Extra large heading, for main section titles
3. **HeadingL** - Large heading, for subsection titles
4. **HeadingM** - Medium heading, for content sections
5. **HeadingS** - Small heading, for minor sections
6. **HeadingXS** - Extra small heading, for detailed subsections

### Component Features:

- **Responsive Typography**: Font sizes and line heights adjust based on breakpoints
- **Semantic HTML**: Automatic heading tag assignment (h1-h5)
- **Weight Variations**: Bold (default) and regular font weights
- **Consistent Spacing**: Automatic bottom margins for proper content flow
- **Theme Integration**: Typography values from theme provider
- **Accessibility**: Proper heading hierarchy for screen readers

### Component Hierarchy:

```
Page Content
├── HeadingXXL (h1) - Page Title
│   ├── HeadingXL (h1) - Main Section
│   │   ├── HeadingL (h2) - Subsection
│   │   │   ├── HeadingM (h3) - Content Block
│   │   │   │   ├── HeadingS (h4) - Minor Section
│   │   │   │   │   └── HeadingXS (h5) - Detail Section
```

## Props

### HeadingProps

| Prop        | Type                            | Default      | Description                        |
| ----------- | ------------------------------- | ------------ | ---------------------------------- |
| `variation` | `'bold' \| 'regular'`           | `'bold'`     | Font weight variation              |
| `className` | `string`                        | -            | Additional CSS class names         |
| `children`  | `React.ReactNode`               | **Required** | Heading content                    |
| `as`        | `string \| React.ComponentType` | -            | Override the rendered HTML element |

### Size-Specific Props

All heading size components (HeadingXXL, HeadingXL, etc.) accept the same props as the base Heading component, plus:

| Prop | Type                            | Default                       | Description                         |
| ---- | ------------------------------- | ----------------------------- | ----------------------------------- |
| `as` | `string \| React.ComponentType` | Size-specific default (h1-h5) | Override the semantic heading level |

## Usage Examples

### Basic Heading Usage

```tsx
import { HeadingXXL, HeadingXL, HeadingL, HeadingM, HeadingS, HeadingXS } from '@fil-react-components/heading';

<HeadingXXL>Page Title</HeadingXXL>
<HeadingXL>Main Section</HeadingXL>
<HeadingL>Subsection</HeadingL>
<HeadingM>Content Block</HeadingM>
<HeadingS>Minor Section</HeadingS>
<HeadingXS>Detail Section</HeadingXS>
```

### Heading with Regular Weight

```tsx
<HeadingXXL variation="regular">Regular Weight Page Title</HeadingXXL>
<HeadingXL variation="regular">Regular Weight Section</HeadingXL>
<HeadingL variation="regular">Regular Weight Subsection</HeadingL>
```

### Custom Semantic Level

```tsx
<HeadingXXL as="h2">Custom h2 Element</HeadingXXL>
<HeadingL as="h1">Custom h1 Element</HeadingL>
```

### Page Structure Example

```tsx
import {
  HeadingXXL,
  HeadingXL,
  HeadingL,
  HeadingM,
} from '@fil-react-components/heading';

const Page = () => (
  <>
    <HeadingXXL>Company Dashboard</HeadingXXL>

    <HeadingXL>Analytics Overview</HeadingXL>
    <p>Key metrics and performance indicators...</p>

    <HeadingL>User Engagement</HeadingL>
    <p>User activity and interaction data...</p>

    <HeadingM>Monthly Trends</HeadingM>
    <p>Chart showing monthly user trends...</p>

    <HeadingM>Top Performing Content</HeadingM>
    <p>List of most popular content...</p>

    <HeadingXL>Revenue Reports</HeadingXL>
    <p>Financial performance and revenue data...</p>

    <HeadingL>Quarterly Summary</HeadingL>
    <p>Summary of quarterly performance...</p>
  </>
);
```

### Article Layout

```tsx
const Article = ({ title, subtitle, sections }) => (
  <>
    <HeadingXXL>{title}</HeadingXXL>
    <HeadingL variation="regular">{subtitle}</HeadingL>

    {sections.map((section, index) => (
      <section key={index}>
        <HeadingXL>{section.title}</HeadingXL>
        <p>{section.content}</p>

        {section.subsections?.map((subsection, subIndex) => (
          <div key={subIndex}>
            <HeadingM>{subsection.title}</HeadingM>
            <p>{subsection.content}</p>
          </div>
        ))}
      </section>
    ))}
  </>
);
```

### Card with Heading

```tsx
import { Card } from '@fil-react-components/card';

const FeatureCard = ({ title, description }) => (
  <Card>
    <HeadingM>{title}</HeadingM>
    <p>{description}</p>
  </Card>
);
```

### Form Section Headings

```tsx
const ContactForm = () => (
  <form>
    <HeadingXL>Contact Information</HeadingXL>

    <HeadingM>Personal Details</HeadingM>
    {/* Personal details fields */}

    <HeadingM>Contact Preferences</HeadingM>
    {/* Contact preference fields */}

    <HeadingS>Privacy Notice</HeadingS>
    {/* Privacy information */}
  </form>
);
```

### Navigation with Headings

```tsx
const Navigation = () => (
  <nav>
    <HeadingS>Main Navigation</HeadingS>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/services">Services</a>
      </li>
    </ul>
  </nav>
);
```

### Content Hierarchy

```tsx
const ContentPage = () => (
  <main>
    <HeadingXXL>The Future of Technology</HeadingXXL>

    <section>
      <HeadingXL>Introduction</HeadingXL>
      <p>Technology continues to evolve...</p>

      <HeadingL>Current Trends</HeadingL>
      <p>Several key trends are shaping...</p>

      <HeadingM>Artificial Intelligence</HeadingM>
      <p>AI is transforming industries...</p>

      <HeadingS>Machine Learning</HeadingS>
      <p>ML algorithms are becoming...</p>

      <HeadingM>Internet of Things</HeadingM>
      <p>IoT devices are connecting...</p>

      <HeadingS>Smart Homes</HeadingS>
      <p>Smart home technology...</p>
    </section>

    <section>
      <HeadingXL>Future Outlook</HeadingXL>
      <p>Looking ahead to 2030...</p>
    </section>
  </main>
);
```

### Blog Post Structure

```tsx
const BlogPost = ({ post }) => (
  <article>
    <header>
      <HeadingXXL>{post.title}</HeadingXXL>
      <HeadingS variation="regular">
        By {post.author} on {post.date}
      </HeadingS>
    </header>

    <section>
      <HeadingXL>Introduction</HeadingXL>
      <p>{post.introduction}</p>

      {post.sections.map((section, index) => (
        <section key={index}>
          <HeadingL>{section.title}</HeadingL>
          <p>{section.content}</p>

          {section.subsections?.map((subsection, subIndex) => (
            <div key={subIndex}>
              <HeadingM>{subsection.title}</HeadingM>
              <p>{subsection.content}</p>
            </div>
          ))}
        </section>
      ))}
    </section>

    <footer>
      <HeadingS>Related Posts</HeadingS>
      {/* Related posts list */}
    </footer>
  </article>
);
```

### Dashboard Layout

```tsx
const Dashboard = () => (
  <div>
    <HeadingXXL>Analytics Dashboard</HeadingXXL>

    <section>
      <HeadingXL>Key Metrics</HeadingXL>
      <div className="metrics-grid">{/* Metric cards */}</div>
    </section>

    <section>
      <HeadingXL>Reports</HeadingXL>

      <div>
        <HeadingM>Monthly Report</HeadingM>
        {/* Monthly report content */}
      </div>

      <div>
        <HeadingM>Quarterly Report</HeadingM>
        {/* Quarterly report content */}
      </div>
    </section>
  </div>
);
```

### Product Page

```tsx
const ProductPage = ({ product }) => (
  <div>
    <HeadingXXL>{product.name}</HeadingXXL>
    <HeadingL variation="regular">{product.tagline}</HeadingL>

    <section>
      <HeadingXL>Overview</HeadingXL>
      <p>{product.description}</p>
    </section>

    <section>
      <HeadingXL>Features</HeadingXL>
      {product.features.map((feature, index) => (
        <div key={index}>
          <HeadingM>{feature.title}</HeadingM>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>

    <section>
      <HeadingXL>Specifications</HeadingXL>
      {/* Specifications content */}
    </section>
  </div>
);
```

## Features

### Typography Scale

- **HeadingXXL**: Largest size, for page titles and hero sections
- **HeadingXL**: Extra large, for main section headings
- **HeadingL**: Large, for subsection headings
- **HeadingM**: Medium, for content block headings
- **HeadingS**: Small, for minor section headings
- **HeadingXS**: Extra small, for detailed subsection headings

### Responsive Design

- **Breakpoint-Based Sizing**: Font sizes and line heights adjust at lg breakpoint
- **Mobile-First**: Smaller sizes on mobile, larger on desktop
- **Consistent Ratios**: Maintains proper visual hierarchy across devices

### Font Weight Variations

- **Bold (default)**: Standard heading weight for emphasis
- **Regular**: Lighter weight for subtle headings or subtitles

### Semantic HTML

- **Automatic Tagging**: Components render appropriate h1-h5 elements
- **Custom Override**: `as` prop allows semantic level customization
- **Accessibility**: Proper heading hierarchy for screen readers

### Spacing & Layout

- **Bottom Margins**: Automatic spacing below headings
- **Responsive Spacing**: Margin values adjust with breakpoints
- **Content Flow**: Proper spacing for readable content hierarchy

### Theme Integration

- **Typography Values**: Font sizes and line heights from theme
- **GDS Standards**: Follows Global Design System specifications
- **Consistent Styling**: Unified appearance across applications

### Accessibility

- **Semantic Structure**: Proper heading hierarchy (h1-h6)
- **Screen Reader Support**: Clear content structure for assistive technologies
- **Keyboard Navigation**: Logical document outline
- **Focus Management**: Proper heading navigation

### Styling

- **CSS-in-JS**: Styled-components integration
- **Theme Provider**: Consistent with design system
- **Custom Styling**: CSS class support for customization
- **Responsive Design**: Mobile-first approach

## Testing

The component includes:

- Unit tests using Jest with snapshot testing
- Component tests using Playwright
- Accessibility testing with axe-devtools
- Responsive breakpoint testing

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

- All heading size variations (XXL through XS)
- Bold and regular weight variations
- Responsive behavior across breakpoints
- Grid layout examples
- Accessibility testing results

## Data Attributes

- `data-frc="heading"` - Applied to Heading elements

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
Heading/
├── src/
│   ├── Heading.constants.ts        # (Not present in this version)
│   ├── Heading.mock.tsx            # Mock configurations for testing
│   ├── Heading.stories.tsx         # Storybook stories
│   ├── Heading.style.ts            # Base heading styles
│   ├── Heading.tsx                 # Main Heading component
│   ├── HeadingVariations.styles.ts # Size variation components
│   ├── index.ts                    # Main exports
│   └── tests/
│       ├── Heading.ct.tsx          # Component tests
│       ├── Heading.test.tsx        # Unit tests
│       ├── a11y-results/           # Accessibility test results
│       ├── coverage/               # Test coverage reports
│       └── __snapshots__/          # Snapshot files
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Document Structure

```tsx
const Document = () => (
  <>
    <HeadingXXL>Document Title</HeadingXXL>
    <HeadingXL>Chapter 1</HeadingXL>
    <HeadingL>Section 1.1</HeadingL>
    <HeadingM>Subsection 1.1.1</HeadingM>
    <HeadingS>Detail 1.1.1.1</HeadingS>
    <HeadingXS>Note 1.1.1.1.1</HeadingXS>
  </>
);
```

### Content Hierarchy Component

```tsx
const ContentSection = ({ level, title, children }) => {
  const HeadingComponent =
    {
      1: HeadingXXL,
      2: HeadingXL,
      3: HeadingL,
      4: HeadingM,
      5: HeadingS,
      6: HeadingXS,
    }[level] || HeadingM;

  return (
    <section>
      <HeadingComponent>{title}</HeadingComponent>
      {children}
    </section>
  );
};
```

### Dynamic Heading Component

```tsx
const DynamicHeading = ({ level = 1, children, ...props }) => {
  const components = {
    1: HeadingXXL,
    2: HeadingXL,
    3: HeadingL,
    4: HeadingM,
    5: HeadingS,
    6: HeadingXS,
  };

  const Component = components[level] || HeadingXXL;
  return <Component {...props}>{children}</Component>;
};
```

### Blog Post Component

```tsx
const BlogPost = ({ post }) => (
  <article>
    <DynamicHeading level={1}>{post.title}</DynamicHeading>
    <DynamicHeading level={6} variation="regular">
      By {post.author} • {post.date}
    </DynamicHeading>

    {post.content.map((section, index) => (
      <section key={index}>
        <DynamicHeading level={2}>{section.title}</DynamicHeading>
        <p>{section.text}</p>
      </section>
    ))}
  </article>
);
```

### Table of Contents

```tsx
const TableOfContents = ({ sections }) => (
  <nav>
    <HeadingS>Table of Contents</HeadingS>
    <ul>
      {sections.map((section, index) => (
        <li key={index}>
          <a href={`#section-${index}`}>{section.title}</a>
          {section.subsections && (
            <ul>
              {section.subsections.map((subsection, subIndex) => (
                <li key={subIndex}>
                  <a href={`#subsection-${index}-${subIndex}`}>
                    {subsection.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </nav>
);
```

### FAQ Section

```tsx
const FAQ = ({ questions }) => (
  <section>
    <HeadingXL>Frequently Asked Questions</HeadingXL>
    {questions.map((faq, index) => (
      <div key={index}>
        <HeadingM>{faq.question}</HeadingM>
        <p>{faq.answer}</p>
      </div>
    ))}
  </section>
);
```

### Step-by-Step Guide

```tsx
const Guide = ({ steps }) => (
  <div>
    <HeadingXXL>How to Get Started</HeadingXXL>
    {steps.map((step, index) => (
      <section key={index}>
        <HeadingL>
          Step {index + 1}: {step.title}
        </HeadingL>
        <p>{step.description}</p>
        {step.details && (
          <div>
            <HeadingS>Details</HeadingS>
            <p>{step.details}</p>
          </div>
        )}
      </section>
    ))}
  </div>
);
```

## Best Practices

1. **Use semantic hierarchy** - Follow proper heading levels (h1-h6) for document structure
2. **Maintain visual hierarchy** - Use appropriate size variations for content importance
3. **Consider responsive behavior** - Test headings across all breakpoints
4. **Use regular variation sparingly** - Reserve for subtitles or less important headings
5. **Don't skip heading levels** - Maintain logical document outline
6. **Keep headings concise** - Use clear, descriptive heading text
7. **Use custom `as` prop carefully** - Only override semantic levels when necessary
8. **Test accessibility** - Ensure proper heading hierarchy for screen readers
9. **Maintain consistent spacing** - Let automatic margins handle content flow
10. **Plan content structure** - Design heading hierarchy before implementation

## Migration Notes

### General Migration:

- Ensure you have the required peer dependencies installed
- The component requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper typography values
- React 16.14.0+ is required

### Recent Updates:

- Added `data-frc` attribute for component identification (v2.10.0)
- Theme provider peer dependency updates for compatibility

### Breaking Changes:

- Verify that your theme provider includes typography configuration
- Check that font size and line height values are properly defined
- Ensure CSS custom properties are available for theme values

### From Previous Versions:

- Component API remains consistent
- Size variations (XXL-XS) unchanged
- Props interface maintained
- Styling approach consistent with styled-components

## Related Components

- `@fil-react-components/theme-provider` - Theme provider for typography values
- `@fil-react-components/text` - Text components for body content
- `@fil-react-components/card` - Card components that may contain headings
- `@fil-react-components/box` - Box component for layout with headings
