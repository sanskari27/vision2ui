# List Component Documentation

## Overview

The List component provides styled HTML list elements (ordered and unordered) with comprehensive theming, multiple variations, and accessibility features following the GDS (Global Design System) standards. It supports both data-driven lists and custom children, with specialized variations for ordered lists, unordered lists, and enhanced lists with custom styling. The component integrates seamlessly with the theme provider and supports nested list structures.

## Package Information

- **Package Name**: `@fil-react-components/list`
- **Version**: 2.9.11
- **Description**: List Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/list
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
- `@fil-react-components/heading`: ^2.11.10
- `@fil-react-utils/testing`: ^1.12.4

## Exports

```typescript
import {
  OrderedList,
  List,
  UnorderedList,
  EnhancedList,
} from '@fil-react-components/list';
```

### Available Exports:

- `OrderedList` - Styled ordered list with numbered items
- `List` (default export) - Styled unordered list (alias for UnorderedList)
- `UnorderedList` - Styled unordered list with bullet points
- `EnhancedList` - Enhanced list with custom arrow styling and variations

## Component Structure

### Main Component: List

A flexible list component that renders as either `<ul>` or `<ol>` based on configuration.

### Component Variations:

1. **UnorderedList/List** (default) - Standard unordered list with bullet points
2. **OrderedList** - Ordered list with numbered items and nested counters
3. **EnhancedList** - Enhanced list with arrow styling and border variations

### Component Features:

- **Data-Driven Lists**: Support for array-based list data with automatic rendering
- **Custom Children**: Support for custom React children with full control
- **Nested Lists**: Proper styling for nested ordered and unordered lists
- **Bullet Control**: Option to disable bullets for inline or custom styling
- **Theme Integration**: Full integration with GDS theme provider
- **Responsive Design**: Responsive spacing and typography
- **Accessibility**: Proper semantic HTML and screen reader support

### Component Hierarchy:

```
List Component
├── UnorderedList (ul element)
│   ├── Bullet styling with theme colors
│   ├── Nested list support
│   └── Responsive spacing
├── OrderedList (ol element)
│   ├── Numbered counters with theme colors
│   ├── Nested counter support (a, b, c...)
│   └── Responsive spacing
└── EnhancedList (ul element)
    ├── Arrow styling with theme colors
    ├── Border variations (grey-025)
    └── Enhanced spacing
```

## Props

### ListProps

| Prop            | Type                                                                                 | Default | Description                                 |
| --------------- | ------------------------------------------------------------------------------------ | ------- | ------------------------------------------- |
| `children`      | `React.ReactNode`                                                                    | -       | Custom list items as React children         |
| `isOrdered`     | `boolean`                                                                            | `false` | Renders as ordered list (`<ol>`) when true  |
| `isBulleted`    | `boolean`                                                                            | `true`  | Shows bullet points for unordered lists     |
| `listData`      | `Array<string \| number \| {key: string, value: string \| number}>`                  | `[]`    | Array of list items to render automatically |
| `className`     | `string`                                                                             | -       | Additional CSS class names                  |
| `variation`     | `'grey-025'`                                                                         | -       | Visual variation for EnhancedList           |
| `fontSize`      | `string`                                                                             | -       | Custom font size (inherited from theme)     |
| `...extraProps` | `React.OlHTMLAttributes<HTMLOListElement> \| React.HTMLAttributes<HTMLUListElement>` | -       | All standard HTML list attributes           |

## Usage Examples

### Basic Unordered List

```tsx
import { List } from '@fil-react-components/list';

<List listData={['Item 1', 'Item 2', 'Item 3']} />;
```

### Basic Ordered List

```tsx
import { OrderedList } from '@fil-react-components/list';

<OrderedList listData={['First item', 'Second item', 'Third item']} />;
```

### List with Custom Children

```tsx
<List>
  <li>Custom item 1</li>
  <li>Custom item 2</li>
  <li>Custom item 3</li>
</List>
```

### List with Object Data

```tsx
<List
  listData={[
    { key: 'item-1', value: 'First item' },
    { key: 'item-2', value: 'Second item' },
    { key: 'item-3', value: 'Third item' },
  ]}
/>
```

### Non-Bulleted List

```tsx
<List listData={['Item 1', 'Item 2', 'Item 3']} isBulleted={false} />
```

### Enhanced List

```tsx
import { EnhancedList } from '@fil-react-components/list';

<EnhancedList>
  <li>Enhanced item with arrow styling</li>
  <li>Another enhanced item</li>
  <li>Third enhanced item</li>
</EnhancedList>;
```

### Enhanced List with Grey Variation

```tsx
<EnhancedList variation="grey-025">
  <li>Item with grey border variation</li>
  <li>Another item with grey styling</li>
</EnhancedList>
```

### Nested Lists

```tsx
<List>
  <li>Parent item 1</li>
  <li>
    Parent item 2
    <List>
      <li>Nested item 2.1</li>
      <li>Nested item 2.2</li>
    </List>
  </li>
  <li>Parent item 3</li>
</List>
```

### Mixed Nested Lists

```tsx
<OrderedList>
  <li>First main item</li>
  <li>
    Second main item
    <List>
      <li>Unordered sub-item</li>
      <li>Another unordered sub-item</li>
    </List>
  </li>
  <li>Third main item</li>
</OrderedList>
```

### Navigation Menu

```tsx
const NavigationMenu = () => (
  <nav>
    <List isBulleted={false} className="nav-menu">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/services">Services</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </List>
  </nav>
);
```

### Features List

```tsx
const FeaturesList = () => (
  <div className="features">
    <h3>Key Features</h3>
    <List
      listData={[
        'Responsive design that works on all devices',
        'Built with accessibility in mind',
        'Comprehensive theme integration',
        'TypeScript support for better development experience',
        'Extensive testing coverage',
      ]}
    />
  </div>
);
```

### Table of Contents

```tsx
const TableOfContents = ({ sections }) => (
  <nav aria-label="Table of contents">
    <h4>Contents</h4>
    <OrderedList>
      {sections.map((section, index) => (
        <li key={section.id}>
          <a href={`#${section.id}`}>{section.title}</a>
        </li>
      ))}
    </OrderedList>
  </nav>
);
```

### Steps List

```tsx
const RecipeSteps = ({ steps }) => (
  <div className="recipe-steps">
    <h3>Instructions</h3>
    <OrderedList>
      {steps.map((step, index) => (
        <li key={index}>{step}</li>
      ))}
    </OrderedList>
  </div>
);
```

### FAQ List

```tsx
const FAQList = ({ faqs }) => (
  <div className="faq-list">
    <h3>Frequently Asked Questions</h3>
    <List isBulleted={false}>
      {faqs.map((faq, index) => (
        <li key={index}>
          <details>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        </li>
      ))}
    </List>
  </div>
);
```

### Product Benefits

```tsx
const ProductBenefits = () => (
  <section className="benefits">
    <h2>Why Choose Our Product?</h2>
    <EnhancedList>
      <li>
        <strong>Reliable Performance:</strong> Built with enterprise-grade
        components for consistent, high-performance operation.
      </li>
      <li>
        <strong>Easy Integration:</strong> Seamless integration with existing
        systems and workflows.
      </li>
      <li>
        <strong>Comprehensive Support:</strong> 24/7 technical support and
        extensive documentation.
      </li>
      <li>
        <strong>Scalable Architecture:</strong> Designed to grow with your
        business needs.
      </li>
    </EnhancedList>
  </section>
);
```

### Comparison List

```tsx
const ComparisonList = () => (
  <div className="comparison">
    <h3>Standard Plan vs Premium Plan</h3>
    <List isBulleted={false}>
      <li>
        <span className="feature">Basic Support</span>
        <span className="standard">✓</span>
        <span className="premium">✓</span>
      </li>
      <li>
        <span className="feature">Priority Support</span>
        <span className="standard">✗</span>
        <span className="premium">✓</span>
      </li>
      <li>
        <span className="feature">Advanced Features</span>
        <span className="standard">✗</span>
        <span className="premium">✓</span>
      </li>
    </List>
  </div>
);
```

### Breadcrumb Navigation

```tsx
const Breadcrumb = ({ items }) => (
  <nav aria-label="Breadcrumb">
    <List isBulleted={false} className="breadcrumb">
      <li>
        <a href="/">Home</a>
      </li>
      {items.map((item, index) => (
        <li key={item.path}>
          {index === items.length - 1 ? (
            <span>{item.label}</span>
          ) : (
            <a href={item.path}>{item.label}</a>
          )}
        </li>
      ))}
    </List>
  </nav>
);
```

### Task Checklist

```tsx
const TaskChecklist = ({ tasks }) => (
  <div className="task-checklist">
    <h3>Project Tasks</h3>
    <List isBulleted={false}>
      {tasks.map((task, index) => (
        <li key={index} className={task.completed ? 'completed' : ''}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(index)}
            id={`task-${index}`}
          />
          <label htmlFor={`task-${index}`}>{task.title}</label>
        </li>
      ))}
    </List>
  </div>
);
```

### File Structure Display

```tsx
const FileStructure = () => (
  <div className="file-structure">
    <h4>Project Structure</h4>
    <List isBulleted={false}>
      <li>src/</li>
      <li>
        components/
        <List isBulleted={false}>
          <li>Button.tsx</li>
          <li>Input.tsx</li>
          <li>
            forms/
            <List isBulleted={false}>
              <li>LoginForm.tsx</li>
              <li>RegistrationForm.tsx</li>
            </List>
          </li>
        </List>
      </li>
      <li>utils/</li>
      <li>styles/</li>
    </List>
  </div>
);
```

### Terms and Conditions

```tsx
const TermsAndConditions = () => (
  <div className="terms">
    <h2>Terms and Conditions</h2>
    <OrderedList>
      <li>
        <strong>Acceptance of Terms</strong>
        <p>By accessing this website, you agree to be bound by these terms.</p>
      </li>
      <li>
        <strong>Use License</strong>
        <p>
          Permission is granted to temporarily use this website for personal
          use.
        </p>
      </li>
      <li>
        <strong>User Responsibilities</strong>
        <List>
          <li>Provide accurate information</li>
          <li>Maintain account security</li>
          <li>Follow applicable laws</li>
        </List>
      </li>
    </OrderedList>
  </div>
);
```

## Features

### List Types

- **Unordered Lists**: Standard bullet-point lists with customizable bullets
- **Ordered Lists**: Numbered lists with automatic counter increment
- **Enhanced Lists**: Custom-styled lists with arrow indicators and borders
- **Nested Lists**: Support for nested ordered and unordered lists

### Data Rendering

- **Array Support**: Automatic rendering from string/number arrays
- **Object Support**: Key-value pair rendering with custom keys
- **Children Override**: Full React children support for custom content
- **Mixed Content**: Combination of data-driven and custom items

### Styling Variations

- **Bullet Control**: Option to hide bullets for custom styling
- **Enhanced Styling**: Arrow-based styling with theme colors
- **Border Variations**: Grey border option for enhanced lists
- **Responsive Spacing**: Mobile and desktop spacing adjustments

### Nested List Support

- **Ordered in Unordered**: Numbered lists within bullet lists
- **Unordered in Ordered**: Bullet lists within numbered lists
- **Counter Inheritance**: Proper counter continuation in nested ordered lists
- **Styling Consistency**: Consistent styling across nesting levels

### Accessibility

- **Semantic HTML**: Proper `<ul>` and `<ol>` element usage
- **Screen Reader**: Proper list announcement for assistive technologies
- **Keyboard Navigation**: Full keyboard accessibility support
- **ARIA Support**: Compatible with ARIA attributes and roles

### Theme Integration

- **Color Tokens**: Theme-based colors for bullets, numbers, and arrows
- **Typography**: Theme-consistent font sizing and line heights
- **Spacing**: Theme-based margins and padding
- **Responsive**: Breakpoint-aware styling adjustments

## Testing

The component includes:

- Unit tests using Jest with snapshot testing
- Component tests using Playwright
- Accessibility testing with axe-devtools
- Nested list testing
- Variation testing (ordered, unordered, enhanced)
- Data-driven rendering testing

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

- All list variations (unordered, ordered, enhanced)
- Data-driven vs children-based rendering
- Nested list structures
- Non-bulleted list styling
- Enhanced list variations
- Accessibility testing results

## Data Attributes

- `data-frc="list"` - Applied to all list elements

## CSS Classes

- No additional CSS classes applied (uses semantic HTML)

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
List/
├── src/
│   ├── List.tsx                # Main List component
│   ├── List.mock.tsx           # Mock configurations for testing
│   ├── List.stories.tsx        # Storybook stories
│   ├── List.style.ts           # Base list styling
│   ├── ListVariations.style.ts # Styled variations (OrderedList, UnorderedList, EnhancedList)
│   ├── index.ts                # Main exports
│   └── tests/
│       ├── List.ct.tsx         # Component tests
│       ├── List.test.tsx       # Unit tests
│       ├── a11y-results/       # Accessibility test results
│       ├── coverage/           # Test coverage reports
│       └── __snapshots__/      # Snapshot files
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Content Navigation

```tsx
const ContentNavigation = () => (
  <aside className="content-nav">
    <h3>On This Page</h3>
    <OrderedList>
      <li>
        <a href="#introduction">Introduction</a>
      </li>
      <li>
        <a href="#getting-started">Getting Started</a>
      </li>
      <li>
        <a href="#api-reference">API Reference</a>
        <List>
          <li>
            <a href="#api-components">Components</a>
          </li>
          <li>
            <a href="#api-hooks">Hooks</a>
          </li>
          <li>
            <a href="#api-utils">Utilities</a>
          </li>
        </List>
      </li>
      <li>
        <a href="#examples">Examples</a>
      </li>
    </OrderedList>
  </aside>
);
```

### Recipe Instructions

```tsx
const RecipeCard = ({ recipe }) => (
  <article className="recipe-card">
    <h2>{recipe.title}</h2>

    <section>
      <h3>Ingredients</h3>
      <List listData={recipe.ingredients} />
    </section>

    <section>
      <h3>Instructions</h3>
      <OrderedList>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </OrderedList>
    </section>

    <section>
      <h3>Nutrition Facts</h3>
      <List isBulleted={false}>
        <li>
          <strong>Calories:</strong> {recipe.nutrition.calories}
        </li>
        <li>
          <strong>Protein:</strong> {recipe.nutrition.protein}g
        </li>
        <li>
          <strong>Carbs:</strong> {recipe.nutrition.carbs}g
        </li>
        <li>
          <strong>Fat:</strong> {recipe.nutrition.fat}g
        </li>
      </List>
    </section>
  </article>
);
```

### Product Specifications

```tsx
const ProductSpecs = ({ specs }) => (
  <div className="product-specs">
    <h3>Specifications</h3>
    <EnhancedList>
      <li>
        <strong>Dimensions:</strong> {specs.dimensions}
      </li>
      <li>
        <strong>Weight:</strong> {specs.weight}
      </li>
      <li>
        <strong>Material:</strong> {specs.material}
      </li>
      <li>
        <strong>Warranty:</strong> {specs.warranty}
      </li>
      <li>
        <strong>Compatibility:</strong> {specs.compatibility}
      </li>
    </EnhancedList>
  </div>
);
```

### Legal Document

```tsx
const LegalDocument = ({ clauses }) => (
  <div className="legal-document">
    <h1>Terms of Service</h1>

    {clauses.map((clause, index) => (
      <section key={clause.id}>
        <h2>
          {index + 1}. {clause.title}
        </h2>
        <OrderedList>
          {clause.subclauses.map((subclause, subIndex) => (
            <li key={subIndex}>
              {subclause.content}
              {subclause.bullets && (
                <List>
                  {subclause.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>{bullet}</li>
                  ))}
                </List>
              )}
            </li>
          ))}
        </OrderedList>
      </section>
    ))}
  </div>
);
```

### Course Curriculum

```tsx
const CourseCurriculum = ({ modules }) => (
  <div className="course-curriculum">
    <h3>Course Content</h3>
    <OrderedList>
      {modules.map((module, index) => (
        <li key={module.id}>
          <strong>{module.title}</strong>
          <List>
            {module.lessons.map((lesson, lessonIndex) => (
              <li key={lesson.id}>
                {lesson.title} ({lesson.duration})
              </li>
            ))}
          </List>
        </li>
      ))}
    </OrderedList>
  </div>
);
```

### Site Map

```tsx
const SiteMap = ({ navigation }) => (
  <div className="site-map">
    <h2>Site Map</h2>
    <List isBulleted={false}>
      {navigation.map((section) => (
        <li key={section.id}>
          <a href={section.path}>{section.title}</a>
          {section.children && (
            <List isBulleted={false}>
              {section.children.map((child) => (
                <li key={child.id}>
                  <a href={child.path}>{child.title}</a>
                </li>
              ))}
            </List>
          )}
        </li>
      ))}
    </List>
  </div>
);
```

## Best Practices

1. **Choose appropriate list types**: Use ordered lists for sequences, unordered for collections
2. **Use semantic HTML**: Leverage proper `<ul>` and `<ol>` elements for accessibility
3. **Consider data-driven rendering**: Use `listData` prop for simple lists, children for complex content
4. **Maintain consistent nesting**: Keep nesting levels reasonable (max 3-4 levels)
5. **Provide meaningful content**: Ensure list items are descriptive and useful
6. **Use EnhancedList for emphasis**: Reserve enhanced styling for important content
7. **Test with screen readers**: Ensure lists are properly announced by assistive technologies
8. **Consider responsive behavior**: Test list appearance across different screen sizes
9. **Use proper keys**: Provide stable keys for dynamic list content
10. **Avoid excessive styling**: Let the component handle styling for consistency

## Migration Notes

### General Migration:

- Ensure you have the required peer dependencies installed
- The component requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling
- React 16.14.0+ is required

### Recent Updates:

- Added `data-frc` attribute for component identification (v2.9.0)
- Theme provider peer dependency updates for compatibility
- Enhanced list variations added with grey-025 option

### Breaking Changes:

- Verify that your theme provider includes list-related configuration
- Check that GDS tokens package is available for bullet and counter colors
- Ensure CSS custom properties are available for theme values

### From Previous Versions:

- Component API remains consistent
- Props interface maintained
- List variations unchanged
- Styling approach maintained with styled-components

## Related Components

- `@fil-react-components/theme-provider` - Theme provider for list styling
- `@fil-react-components/heading` - Heading components for list titles
- `@fil-react-components/grid` - Grid components for list layouts
- `@fil-react-components/card` - Card components that may contain lists</content>
  <parameter name="filePath">c:\Users\A744601\Documents\codebase\TAPP101992-fil-react-components\metadata\List-2.9.11.md
