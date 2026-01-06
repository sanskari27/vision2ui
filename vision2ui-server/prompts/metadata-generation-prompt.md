# Generic Component Documentation Prompt Template

Replace `[COMPONENT_NAME]` with the actual component name (e.g., Button, Input, Modal, etc.)

---

## Prompt:

Please create comprehensive documentation for the **[COMPONENT_NAME]** component from the `@fil-react-components` library. Analyze the component located in `/packages/components/[COMPONENT_NAME]/` directory and generate a detailed markdown file similar to the checkbox-2.12.14.md structure.

### Required Analysis:
1. Read and analyze the package.json file to extract:
   - Package name
   - Version number
   - Description
   - Dependencies and peer dependencies
   - Available scripts

2. Read and analyze the source code files to understand:
   - Main component structure and variations
   - All exported components and utilities
   - Props interfaces and types
   - Component hierarchy
   - File structure

3. Read test files and stories to identify:
   - Usage examples
   - Different variations and states
   - Common use cases
   - Integration patterns

### Documentation Structure:

Generate a markdown file with the following sections:

#### 1. Overview
- Brief description of what the component does
- Key features and capabilities
- GDS/design system compliance

**Example (Checkbox):**
```markdown
## Overview
The Checkbox component is a flexible, accessible form input component that provides checkbox functionality with multiple variations and validation states. It follows the GDS (Global Design System) standards and supports both regular and large sizes.
```

#### 2. Package Information
- Package name
- Current version
- Description
- Main export path
- TypeScript types path

**Example (Checkbox):**
```markdown
## Package Information
- **Package Name**: `@fil-react-components/checkbox`
- **Version**: 2.12.14
- **Description**: Checkbox Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`
```

#### 3. Installation
```bash
npm install @fil-react-components/[component-name]
```

**Example (Checkbox):**
```markdown
## Installation
\```bash
npm install @fil-react-components/checkbox
\```
```

#### 4. Peer Dependencies
List all peer dependencies with version requirements

**Example (Checkbox):**
```markdown
## Peer Dependencies
- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0
```

#### 5. Dependencies
List all runtime dependencies

**Example (Checkbox):**
```markdown
## Dependencies
- `@fil-react-components/input`: ^2.12.12
- `@fil-react-components/large-label`: ^2.10.12
- `@fil-react-components/regular-label`: ^2.11.13
- `@fil-react-components/with-label-wrapper`: ^1.10.13
- `@fil-react-components/with-styles`: ^2.7.9
- `classnames`: ^2.5.1
- `lodash`: 4.17.21
```

#### 6. Exports
```typescript
import [COMPONENT_NAME], { ... } from '@fil-react-components/[component-name]';
```
- Document all named exports
- Document default export

**Example (Checkbox):**
```markdown
## Exports
\```typescript
import Checkbox, { CheckboxGroup, BaseCheckbox } from '@fil-react-components/checkbox';
\```

### Available Exports:
- `Checkbox` (default export) - Main checkbox component with variations
- `CheckboxGroup` - Container for grouping multiple checkboxes
- `BaseCheckbox` - Base checkbox component without label wrapper
```

#### 7. Component Structure
- Describe the main component
- Document all variations/variants
- Show component hierarchy tree

**Example (Checkbox):**
```markdown
## Component Structure

### Main Component: Checkbox
The main Checkbox component supports multiple variations and automatically renders the appropriate variant based on the `variation` prop.

### Component Variations:
1. **Regular Checkbox** (default) - Standard size checkbox with regular label
2. **Large Checkbox** - Larger size checkbox with large label
3. **Base Checkbox** - Minimal checkbox without label wrapper

### Component Hierarchy:
\```
Checkbox (Main Component)
├── RegularCheckbox (wrapped with RegularLabel)
├── LargeCheckbox (wrapped with LargeLabel)
└── BaseCheckbox (basic input wrapper)
\```
```

#### 8. Props
Create detailed tables for each component's props including:
- Prop name
- Type
- Default value
- Description

**Example (Checkbox):**
```markdown
## Props

### CheckboxProps
Extends `BaseCheckboxProps` and `RegularCheckboxLabelProps`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variation` | `'large' \| 'regular' \| 'medium'` | `'regular'` | Determines the checkbox size variation |
| `className` | `string` | - | Additional CSS class names |
| `checked` | `boolean` | - | Controlled checked state |
| `id` | `string` | - | HTML id attribute |
| `name` | `string` | - | HTML name attribute |
| `label` | `string` | - | Label text for the checkbox |
| `disabled` | `boolean` | - | Disables the checkbox |
| `partialChecked` | `boolean` | - | Shows intermediate/indeterminate state |
| `isControlled` | `boolean` | - | Whether the checkbox is controlled or uncontrolled |
| `validation` | `'info' \| 'invalid' \| 'warning' \| 'valid'` | - | Validation state styling |
| `inputAlign` | `'left' \| 'right'` | `'left'` | Alignment of the checkbox input |
| `onChange` | `(event) => void` | `noop` | Change event handler |
```

#### 9. Usage Examples
Provide code examples for:
- Basic usage
- All variations
- Different states (disabled, loading, error, etc.)
- Validation states (if applicable)
- Controlled vs Uncontrolled (if applicable)
- Common patterns and combinations

**Example (Checkbox):**
```markdown
## Usage Examples

### Basic Usage
\```tsx
import Checkbox from '@fil-react-components/checkbox';

// Simple checkbox
<Checkbox label="Checkbox" />

// Checked checkbox
<Checkbox label="Checkbox" checked />

// Disabled checkbox
<Checkbox label="Checkbox" disabled />

// Disabled and checked
<Checkbox label="Checkbox" disabled checked />
\```

### Variations
\```tsx
// Regular variation (default)
<Checkbox label="Regular Checkbox" variation="regular" />

// Large variation
<Checkbox label="Large Checkbox" variation="large" />
\```

### Validation States
\```tsx
// Info state
<Checkbox label="Info" variation="large" validation="info" />

// Invalid state
<Checkbox label="Invalid" variation="large" validation="invalid" />

// Warning state
<Checkbox label="Warning" variation="large" validation="warning" />

// Valid state
<Checkbox label="Valid" variation="large" validation="valid" />
\```
```

#### 10. Features
- Accessibility features
- Styling capabilities
- State management
- Special behaviors

**Example (Checkbox):**
```markdown
## Features

### Accessibility
- Proper checkbox input semantics with `type="checkbox"`
- Label association for screen readers
- Keyboard navigation support
- Disabled state properly indicated

### Styling
- Styled-components integration
- Theme provider support
- Custom className support
- Validation state styling

### State Management
- Supports both controlled and uncontrolled modes
- Partial/intermediate state support
- Group-level disabled state
```

#### 11. Testing
- Available test commands
- Test coverage information
- Component testing info

**Example (Checkbox):**
```markdown
## Testing
The component includes:
- Unit tests using Jest
- Component tests using Playwright
- Test utilities from `@fil-react-utils/testing`

Run tests:
\```bash
npm test
\```

Run component tests:
\```bash
npm run test-ct
\```
```

#### 12. Storybook Stories
- List available stories
- Key scenarios demonstrated

**Example (Checkbox):**
```markdown
## Storybook Stories
The component has Storybook stories demonstrating:
- Regular checkbox variations
- Checkbox group variations
- Large checkbox with validation states
```

#### 13. Data Attributes
- Custom data attributes used
- Their purposes

**Example (Checkbox):**
```markdown
## Data Attributes
- `data-frc="checkbox-group"` - Applied to CheckboxGroup container
```

#### 14. CSS Classes
- Key CSS classes applied
- Styling hooks

**Example (Checkbox):**
```markdown
## CSS Classes
- `checkbox__input` - Applied to the base input element
- `fil-checkbox-group` - Applied to CheckboxGroup container
```

#### 15. Build & Development
- Available npm scripts
- Build commands
- Linting commands
- Testing commands

**Example (Checkbox):**
```markdown
## Build & Development

### Scripts
\```bash
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
\```
```

#### 16. File Structure
```
[COMPONENT_NAME]/
├── src/
│   └── ...
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

**Example (Checkbox):**
```markdown
## File Structure
\```
Checkbox/
├── src/
│   ├── Base/
│   │   ├── Base.tsx              # Base checkbox component
│   │   ├── Base.style.ts         # Base checkbox styles
│   │   ├── Base.mock.tsx         # Mock data for testing
│   │   └── tests/
│   │       └── Base.test.tsx     # Base checkbox tests
│   ├── Regular/
│   │   ├── Regular.tsx           # Regular variation
│   │   ├── Regular.mock.tsx      # Mock data
│   │   └── tests/
│   │       └── Regular.test.tsx  # Regular variation tests
│   ├── Checkbox/
│   │   ├── Checkbox.tsx          # Main component
│   │   ├── CheckboxGroup.tsx     # Group component
│   │   ├── CheckboxGroup.style.ts # Group styles
│   │   ├── Checkbox.mock.tsx     # Mock configurations
│   │   ├── Checkbox.stories.tsx  # Storybook stories
│   │   └── tests/
│   │       ├── Checkbox.test.tsx    # Main component tests
│   │       ├── Checkbox.ct.tsx      # Component tests
│   │       └── CheckboxWrapper.tsx  # Test wrapper
│   └── index.ts                  # Main exports
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
\```
```

#### 17. Common Use Cases
Real-world examples showing:
- Form integration
- State management patterns
- Common UI patterns

**Example (Checkbox):**
```markdown
## Common Use Cases

### Form Integration
\```tsx
<form>
  <CheckboxGroup>
    <Checkbox label="I agree to terms" name="terms" />
    <Checkbox label="Subscribe to newsletter" name="newsletter" />
  </CheckboxGroup>
</form>
\```

### Select All Pattern
\```tsx
const [items, setItems] = useState([false, false, false]);
const allChecked = items.every(Boolean);
const someChecked = items.some(Boolean) && !allChecked;

<Checkbox 
  label="Select All" 
  checked={allChecked}
  partialChecked={someChecked}
  onChange={(e) => setItems(items.map(() => e.target.checked))}
  isControlled
/>
{items.map((checked, i) => (
  <Checkbox 
    key={i}
    label={\`Item \${i + 1}\`}
    checked={checked}
    onChange={() => {
      const newItems = [...items];
      newItems[i] = !newItems[i];
      setItems(newItems);
    }}
    isControlled
  />
))}
\```
```

#### 18. Best Practices
- Dos and don'ts
- Accessibility recommendations
- Performance tips
- Usage guidelines

**Example (Checkbox):**
```markdown
## Best Practices

1. **Always provide a label** - For accessibility and usability
2. **Use CheckboxGroup** - When displaying multiple related checkboxes
3. **Use controlled components** - When you need to manage state externally
4. **Set isControlled flag** - When using controlled mode to ensure proper behavior
5. **Use validation states** - To provide visual feedback on form validation
6. **Use partialChecked** - For "select all" or hierarchical checkbox scenarios
7. **Provide unique IDs** - When using multiple checkboxes in forms
```

#### 19. Migration Notes
- Breaking changes from older versions
- Required updates
- Deprecated features

**Example (Checkbox):**
```markdown
## Migration Notes

### From older versions:
- Ensure you have the required peer dependencies installed
- The component now requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling
```

#### 20. Related Components
List related components from the same library

**Example (Checkbox):**
```markdown
## Related Components
- `@fil-react-components/input` - Base input component
- `@fil-react-components/regular-label` - Regular label component
- `@fil-react-components/large-label` - Large label component
- `@fil-react-components/with-label-wrapper` - HOC for label wrapping
- `@fil-react-components/theme-provider` - Theme provider for styling
```

---

### Output Format:
- File name: `[component-name]-[version].md` (e.g., Button-2.14.5.md)
- File name should be in Pascal case
- Use proper markdown formatting
- Include syntax-highlighted code blocks
- Use tables for props documentation
- Ensure all TypeScript types are accurate
- Include practical, runnable examples

### Analysis Instructions:
- Examine all source files in the component directory
- Check for TypeScript interfaces and type definitions
- Review test files for usage patterns
- Look at Storybook stories for variations
- Read CHANGELOG.md for version history
- Infer missing information from code structure when needed
- Maintain consistency with the checkbox documentation style

 