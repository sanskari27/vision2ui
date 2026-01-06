# Chips Component Documentation

## Overview

The Chips component provides flexible chip/tag functionality with two main variants: InputChips for displaying and managing removable tags, and SelectChips for selectable options with single or multi-select capabilities. It follows the GDS (Global Design System) standards and supports various sizes, states, and styling variations.

## Package Information

- **Package Name**: `@fil-react-components/chips`
- **Version**: 3.2.58
- **Description**: Chips Component Variations
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/chips
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/button`: ^3.4.2
- `@fil-react-components/streamline-icon`: ^2.15.6
- `@fil-react-components/svg-icons`: ^1.9.0
- `@fil-react-mixins/styled`: ^2.7.1
- `classnames`: ^2.5.1
- `lodash`: 4.17.21

## Exports

```typescript
import Chips, { SelectChips } from '@fil-react-components/chips';
```

### Available Exports:

- `Chips` (default export) - InputChips component for managing removable tags
- `SelectChips` - Selectable chips component with single/multi-select functionality
- `InputChipsProps` (type export) - TypeScript interface for InputChips props
- `SelectChipsProps` (type export) - TypeScript interface for SelectChips props

## Component Structure

### Main Components: InputChips and SelectChips

The Chips package provides two distinct components for different use cases:

### InputChips

Displays a collection of removable chips/tags, typically used for managing selected items or tags in forms.

### SelectChips

Provides selectable chip options with support for single-select or multi-select behavior.

### Component Variations:

1. **Input Chips** - Removable tags with delete functionality
2. **Select Chips** - Clickable options with selection states
3. **Single Select** - Radio button-like behavior (one selection)
4. **Multi Select** - Checkbox-like behavior (multiple selections)

### Component Hierarchy:

```
InputChips (Removable Tags)
├── Chip Items
│   ├── Label Text
│   └── Delete Icon (X)

SelectChips (Selectable Options)
├── Chip Items
│   ├── Selection Indicator (for multi-select)
│   └── Label Text
```

## Props

### ChipsProps (Base Props)

| Prop           | Type                                            | Default                      | Description                                    |
| -------------- | ----------------------------------------------- | ---------------------------- | ---------------------------------------------- |
| `className`    | `string`                                        | -                            | Additional CSS class names                     |
| `variation`    | `'primary' \| 'secondary'`                      | `'primary'`                  | Visual styling variation                       |
| `size`         | `'large' \| 'standard' \| 'small' \| 'x-small'` | `'standard'`                 | Size of the chips                              |
| `name`         | `string`                                        | `'input-chips'` or `'chips'` | Name attribute for form integration            |
| `onChange`     | `Function`                                      | `noop`                       | Change event handler                           |
| `isControlled` | `boolean`                                       | -                            | Whether the component is controlled externally |

### InputChipsProps

Extends `ChipsProps`

| Prop       | Type                                                                       | Default | Description                      |
| ---------- | -------------------------------------------------------------------------- | ------- | -------------------------------- |
| `value`    | `Array<{label: string, id: string, status?: 'error', disabled?: boolean}>` | -       | Array of chip objects to display |
| `onDelete` | `Function`                                                                 | `noop`  | Callback when a chip is deleted  |

### SelectChipsProps

Extends `ChipsProps`

| Prop    | Type                                                                       | Default           | Description                      |
| ------- | -------------------------------------------------------------------------- | ----------------- | -------------------------------- |
| `items` | `Array<{label: string, disabled?: boolean, status?: 'error', id: string}>` | -                 | Array of selectable chip options |
| `type`  | `'single-select' \| 'multi-select'`                                        | `'single-select'` | Selection behavior type          |
| `value` | `string \| Array<string>`                                                  | -                 | Selected value(s)                |

## Usage Examples

### Input Chips (Removable Tags)

```tsx
import Chips from '@fil-react-components/chips';

const [tags, setTags] = useState([
  { label: 'React', id: 'react' },
  { label: 'TypeScript', id: 'typescript' },
  { label: 'JavaScript', id: 'javascript' },
]);

<Chips
  value={tags}
  onDelete={(chipId) => {
    setTags(tags.filter((tag) => tag.id !== chipId));
  }}
  isControlled
/>;
```

### Select Chips (Single Select)

```tsx
import { SelectChips } from '@fil-react-components/chips';

const [selectedCategory, setSelectedCategory] = useState('tech');

<SelectChips
  items={[
    { label: 'Technology', id: 'tech' },
    { label: 'Business', id: 'business' },
    { label: 'Science', id: 'science' },
  ]}
  value={selectedCategory}
  onChange={(e) => setSelectedCategory(e.target.value)}
  isControlled
/>;
```

### Select Chips (Multi Select)

```tsx
import { SelectChips } from '@fil-react-components/chips';

const [selectedTags, setSelectedTags] = useState(['react', 'typescript']);

<SelectChips
  items={[
    { label: 'React', id: 'react' },
    { label: 'Vue', id: 'vue' },
    { label: 'Angular', id: 'angular' },
    { label: 'TypeScript', id: 'typescript' },
  ]}
  value={selectedTags}
  onChange={(e) => setSelectedTags(e.target.value)}
  type="multi-select"
  isControlled
/>;
```

### Chip Sizes

```tsx
// Large chips
<Chips value={chips} size="large" />

// Small chips
<Chips value={chips} size="small" />

// Extra small chips
<Chips value={chips} size="x-small" />
```

### Chip Variations

```tsx
// Primary styling (default)
<Chips value={chips} variation="primary" />

// Secondary styling
<Chips value={chips} variation="secondary" />
```

### Chips with Error States

```tsx
<Chips
  value={[
    { label: 'Valid Tag', id: 'valid' },
    { label: 'Error Tag', id: 'error', status: 'error' },
  ]}
/>
```

### Disabled Chips

```tsx
<Chips
  value={[
    { label: 'Active', id: 'active' },
    { label: 'Disabled', id: 'disabled', disabled: true },
  ]}
/>
```

### Uncontrolled Usage

```tsx
// Input chips with internal state management
<Chips
  value={initialChips}
  onChange={(e) => console.log('Chips changed:', e.target.value)}
/>

// Select chips with internal state
<SelectChips
  items={options}
  onChange={(e) => console.log('Selection changed:', e.target.value)}
/>
```

## Features

### Input Chips Features

- **Removable Tags**: Each chip has a delete button (X icon)
- **Keyboard Support**: Delete/Backspace keys remove focused chips
- **Truncation**: Long labels are truncated with tooltips
- **State Management**: Controlled and uncontrolled modes

### Select Chips Features

- **Selection Modes**: Single-select or multi-select behavior
- **Visual Feedback**: Selected state styling and checkmarks (multi-select)
- **Accessibility**: Proper ARIA attributes and keyboard navigation
- **State Management**: Controlled and uncontrolled modes

### Common Features

- **Size Variants**: Large, standard, small, and x-small sizes
- **Visual Variations**: Primary and secondary color schemes
- **Error States**: Visual indication of error conditions
- **Disabled States**: Support for disabled chips
- **Theme Integration**: Styled-components with theme provider
- **Responsive Design**: Flexible layout that adapts to container

### Accessibility

- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Full keyboard support for interactions
- **Focus Management**: Visible focus indicators
- **Semantic Markup**: Appropriate roles and attributes
- **Screen Reader Support**: Descriptive text for interactive elements

## Testing

The component includes:

- Unit tests using Jest
- Component tests using Playwright
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

- Input chips with various sizes and states
- Select chips with single and multi-select modes
- Controlled and uncontrolled usage examples
- Error and disabled state examples
- Size and variation combinations

## Data Attributes

- `data-frc="chips"` - Applied to the chips container

## CSS Classes

- `fil-chips` - Main chips container
- `fil-chips--input` - Input chips container
- `fil-chips--single-select` - Single-select chips container
- `fil-chips--multi-select` - Multi-select chips container
- `fil-chip` - Individual chip element
- `fil-chip--selected` - Selected chip state
- `fil-chip--disabled` - Disabled chip state
- `fil-chip--error` - Error chip state
- `fil-chip__label` - Chip label text
- `fil-chip__delete-icon` - Delete icon in input chips

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
Chips/
├── src/
│   ├── Chips.mock.tsx             # Mock data for testing
│   ├── Chips.stories.tsx          # Storybook stories
│   ├── Chips.style.ts             # Styled-components styles
│   ├── Chips.utils.ts             # Utility functions
│   ├── InputChips.tsx             # Input chips component
│   ├── SelectChips.tsx            # Select chips component
│   ├── index.ts                   # Main exports
│   └── tests/
│       ├── Chips.ct.tsx           # Component tests
│       ├── Chips.test.tsx         # Unit tests
│       └── ChipsWrapper.tsx       # Test wrapper
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Tag Management

```tsx
const TagInput = () => {
  const [tags, setTags] = useState([]);

  const addTag = (newTag) => {
    setTags([...tags, { label: newTag, id: Date.now().toString() }]);
  };

  const removeTag = (tagId) => {
    setTags(tags.filter((tag) => tag.id !== tagId));
  };

  return (
    <div>
      <input onKeyPress={(e) => e.key === 'Enter' && addTag(e.target.value)} />
      <Chips value={tags} onDelete={removeTag} isControlled />
    </div>
  );
};
```

### Filter Selection

```tsx
const FilterChips = () => {
  const [activeFilters, setActiveFilters] = useState([]);

  return (
    <SelectChips
      items={filterOptions}
      value={activeFilters}
      onChange={(e) => setActiveFilters(e.target.value)}
      type="multi-select"
      isControlled
    />
  );
};
```

### Category Selection

```tsx
const CategorySelector = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <SelectChips
      items={[
        { label: 'All Categories', id: 'all' },
        { label: 'Technology', id: 'tech' },
        { label: 'Business', id: 'business' },
        { label: 'Science', id: 'science' },
      ]}
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
      isControlled
    />
  );
};
```

### Form Integration

```tsx
const MultiSelectForm = () => {
  const [formData, setFormData] = useState({ skills: [] });

  const handleSkillsChange = (e) => {
    setFormData({ ...formData, skills: e.target.value });
  };

  return (
    <form>
      <SelectChips
        name="skills"
        items={skillOptions}
        value={formData.skills}
        onChange={handleSkillsChange}
        type="multi-select"
        isControlled
      />
    </form>
  );
};
```

## Best Practices

1. **Choose the right component**: Use InputChips for managing tags, SelectChips for options
2. **Use controlled mode**: For complex state management and form integration
3. **Provide meaningful labels**: Ensure chip labels are clear and concise
4. **Handle long labels**: Component auto-truncates but consider tooltip text
5. **Consider accessibility**: Test with screen readers and keyboard navigation
6. **Use appropriate sizes**: Match chip size to surrounding content
7. **Manage state properly**: Keep controlled and uncontrolled usage separate
8. **Handle errors gracefully**: Use error states to indicate validation issues
9. **Test interactions**: Ensure delete/select actions work as expected
10. **Consider mobile**: Chips should be touch-friendly on mobile devices

## Migration Notes

### General Migration:

- Ensure you have the required peer dependencies installed
- The component requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper color theming
- React 16.14.0+ is required

## Related Components

- `@fil-react-components/button` - Base button component used in chips
- `@fil-react-components/streamline-icon` - Icon component for delete/check indicators
- `@fil-react-components/theme-provider` - Theme provider for styling
- `@fil-react-components/form` - Form integration utilities</content>
  <parameter name="filePath">c:\Users\A744601\Documents\codebase\TAPP101992-fil-react-components\metadata\Chips-3.2.58.md
