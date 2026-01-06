# MultiSelect Component Documentation

## Overview

The MultiSelect component provides a comprehensive multi-selection dropdown interface with advanced features including filtering, sections, sub-text, checkboxes/radio buttons, and virtualized lists following the GDS (Global Design System) standards. It supports both controlled and uncontrolled usage patterns, with built-in accessibility features, keyboard navigation, and theme integration. The component can handle large datasets efficiently using react-window for virtualization.

## Package Information

- **Package Name**: `@fil-react-components/multi-select`
- **Version**: 3.5.10
- **Description**: MultiSelect Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/multi-select
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/button`: ^3.4.2
- `@fil-react-components/checkbox`: ^2.12.13
- `@fil-react-components/input`: ^2.12.11
- `@fil-react-components/label`: ^2.9.11
- `@fil-react-components/radio-button`: ^2.12.13
- `@fil-react-components/streamline-icon`: ^2.15.6
- `@fil-react-components/svg-icons`: ^1.9.0
- `@fil-react-mixins/styled`: ^2.7.1
- `classnames`: ^2.5.1
- `lodash`: 4.17.21
- `memoize-one`: 6.0.0
- `react-cool-onclickoutside`: 1.5.9
- `react-window`: 1.8.9

## Dev Dependencies

- `@fil-react-components/grid`: ^2.9.11
- `@fil-react-components/grid-container`: ^2.10.10
- `@fil-react-utils/testing`: ^1.12.4

## Exports

```typescript
import Multiselect, {
  MultiselectVanilla,
} from '@fil-react-components/multi-select';
```

### Available Exports:

- `Multiselect` (default export) - Styled multi-select component with theme integration
- `MultiselectVanilla` - Unstyled multi-select component for custom styling
- `MultiSelectProps` - TypeScript interface for component props

## Component Structure

### Main Component: Multiselect

A comprehensive multi-selection dropdown with advanced features and accessibility.

### Component Features:

- **Selection Types**: Checkbox-based multi-select or radio button single-select
- **Filtering**: Built-in search/filter functionality
- **Sections**: Grouped options with section headers
- **Sub-text**: Additional descriptive text for options
- **Virtualization**: Efficient rendering of large option lists
- **Apply/Clear**: Optional apply and clear actions
- **Select All**: Bulk selection with customizable behavior
- **Controlled/Uncontrolled**: Support for both usage patterns
- **Accessibility**: Full ARIA support and keyboard navigation
- **Theme Integration**: Complete GDS theme provider integration

### Component Hierarchy:

```
Multiselect Component
├── Label (optional)
├── Trigger Button
│   ├── Selected Values Display
│   ├── Placeholder Text
│   └── Dropdown Arrow
├── Dropdown Menu
│   ├── Filter Input (optional)
│   ├── Select All Option (optional)
│   ├── Options List (virtualized)
│   │   ├── Section Headers (optional)
│   │   ├── Option Items
│   │   │   ├── Checkbox/Radio Button
│   │   │   ├── Option Text
│   │   │   └── Sub-text (optional)
│   └── Action Buttons (optional)
```

## Props

### MultiSelectProps

| Prop                   | Type                    | Default         | Description                               |
| ---------------------- | ----------------------- | --------------- | ----------------------------------------- |
| `placeholder`          | `string`                | -               | Placeholder text when no options selected |
| `id`                   | `string`                | -               | HTML id attribute                         |
| `name`                 | `string`                | -               | HTML name attribute                       |
| `labels`               | `LabelsType`            | `defaultLabels` | Custom labels for various UI elements     |
| `height`               | `number`                | -               | Custom dropdown height                    |
| `itemSize`             | `number`                | `52`            | Height of each option item                |
| `optionList`           | `Array<Option>`         | `[]`            | Array of selectable options               |
| `onChange`             | `(e: Event) => void`    | `noop`          | Change event handler                      |
| `className`            | `string`                | -               | Additional CSS class names                |
| `isControlled`         | `boolean`               | -               | Whether component is controlled           |
| `isFilterEnable`       | `boolean`               | -               | Enable search/filter functionality        |
| `onSelect`             | `Function`              | `noop`          | Selection callback function               |
| `type`                 | `'checkbox' \| 'radio'` | `'checkbox'`    | Selection input type                      |
| `value`                | `string[]`              | `[]`            | Controlled selected values                |
| `defaultVisibleItems`  | `number`                | `6`             | Default number of visible items           |
| `disabled`             | `boolean`               | `false`         | Disable the component                     |
| `label`                | `string`                | -               | Label text for the component              |
| `assistiveText`        | `string`                | -               | Assistive text for accessibility          |
| `status`               | `'invalid'`             | -               | Validation status                         |
| `errorText`            | `string`                | -               | Error message text                        |
| `isAllEnabled`         | `boolean`               | `true`          | Enable select all functionality           |
| `hasApplyAndClear`     | `boolean`               | -               | Show apply and clear buttons              |
| `clearText`            | `string`                | `'Clear'`       | Clear button text                         |
| `applyText`            | `string`                | `'Apply'`       | Apply button text                         |
| `fixedSizeList`        | `boolean`               | `true`          | Use fixed-size list virtualization        |
| `inputAlign`           | `'right'`               | -               | Text alignment for input                  |
| `expanded`             | `boolean`               | -               | Expand dropdown to content width          |
| `width`                | `number \| string`      | -               | Custom component width                    |
| `children`             | `React.ReactNode`       | -               | Custom trigger content                    |
| `sectionSelectEnabled` | `boolean`               | -               | Enable section-level selection            |
| `listOnly`             | `boolean`               | -               | Show as permanent list without dropdown   |
| `listHeaderComponent`  | `ReactElement`          | -               | Custom header for list mode               |

### Option Type

```typescript
type Option = {
  text: string; // Display text
  value?: string; // Option value
  disabled?: boolean; // Whether option is disabled
  subText?: React.ReactNode; // Additional descriptive text
  section?: string; // Section identifier
  optionList?: Option[]; // Nested options for sections
  type?: 'section'; // Section header type
  id?: string; // Unique identifier
  title?: string; // Tooltip/title text
};
```

### LabelsType

```typescript
type LabelsType = {
  selectedItem?: string; // Text for selected items summary
  allItem?: string; // "Select All" text
  allSelectedItem?: string; // Text when all items selected
  filterPlaceholder?: string; // Filter input placeholder
  allItemSubText?: string; // Sub-text for select all
  selectedAllItems?: string; // Alternative selected text
};
```

## Usage Examples

### Basic MultiSelect

```tsx
import Multiselect from '@fil-react-components/multi-select';

const BasicExample = () => (
  <Multiselect
    placeholder="Select options"
    optionList={[
      { text: 'Option 1', value: '1' },
      { text: 'Option 2', value: '2' },
      { text: 'Option 3', value: '3' },
    ]}
    onChange={(values) => console.log('Selected:', values)}
  />
);
```

### MultiSelect with Label

```tsx
const LabeledExample = () => (
  <Multiselect
    label="Choose your preferences"
    placeholder="Select preferences"
    optionList={[
      { text: 'Email notifications', value: 'email' },
      { text: 'SMS notifications', value: 'sms' },
      { text: 'Push notifications', value: 'push' },
    ]}
    onChange={(values) => console.log('Selected:', values)}
  />
);
```

### Controlled MultiSelect

```tsx
const ControlledExample = () => {
  const [selectedValues, setSelectedValues] = useState(['email']);

  return (
    <Multiselect
      label="Notification preferences"
      placeholder="Select preferences"
      value={selectedValues}
      isControlled={true}
      optionList={[
        { text: 'Email notifications', value: 'email' },
        { text: 'SMS notifications', value: 'sms' },
        { text: 'Push notifications', value: 'push' },
      ]}
      onChange={(values) => setSelectedValues(values)}
    />
  );
};
```

### MultiSelect with Filter

```tsx
const FilterExample = () => (
  <Multiselect
    label="Select countries"
    placeholder="Choose countries"
    isFilterEnable={true}
    optionList={[
      { text: 'United States', value: 'us' },
      { text: 'United Kingdom', value: 'uk' },
      { text: 'Canada', value: 'ca' },
      { text: 'Australia', value: 'au' },
      { text: 'Germany', value: 'de' },
      { text: 'France', value: 'fr' },
      { text: 'Japan', value: 'jp' },
    ]}
    onChange={(values) => console.log('Selected countries:', values)}
  />
);
```

### MultiSelect with Sections

```tsx
const SectionsExample = () => (
  <Multiselect
    label="Select accounts"
    placeholder="Choose accounts"
    fixedSizeList={false}
    optionList={[
      {
        type: 'section',
        text: 'Investment Accounts',
        optionList: [
          { text: 'Account 12345', value: 'inv-1', subText: '£25,000' },
          { text: 'Account 67890', value: 'inv-2', subText: '£15,000' },
        ],
      },
      {
        type: 'section',
        text: 'Savings Accounts',
        optionList: [
          { text: 'Account 54321', value: 'sav-1', subText: '£5,000' },
          { text: 'Account 09876', value: 'sav-2', subText: '£10,000' },
        ],
      },
    ]}
    onChange={(values) => console.log('Selected accounts:', values)}
  />
);
```

### MultiSelect with Sub-text

```tsx
const SubTextExample = () => (
  <Multiselect
    label="Select investment accounts"
    placeholder="Choose accounts"
    itemSize={80} // Larger items for sub-text
    optionList={[
      {
        text: 'Premium Account',
        value: 'premium',
        subText: 'AG123456789 • £50,000 • 2.5% APY',
      },
      {
        text: 'Standard Account',
        value: 'standard',
        subText: 'AG987654321 • £25,000 • 1.8% APY',
      },
      {
        text: 'Basic Account',
        value: 'basic',
        subText: 'AG456789123 • £10,000 • 1.2% APY',
      },
    ]}
    onChange={(values) => console.log('Selected accounts:', values)}
  />
);
```

### Radio Button Selection

```tsx
const RadioExample = () => (
  <Multiselect
    label="Select payment method"
    placeholder="Choose payment method"
    type="radio"
    optionList={[
      { text: 'Credit Card', value: 'credit' },
      { text: 'Debit Card', value: 'debit' },
      { text: 'Bank Transfer', value: 'transfer' },
      { text: 'PayPal', value: 'paypal' },
    ]}
    onChange={(value) => console.log('Selected payment:', value)}
  />
);
```

### MultiSelect with Apply/Clear

```tsx
const ApplyClearExample = () => (
  <Multiselect
    label="Select skills"
    placeholder="Choose your skills"
    hasApplyAndClear={true}
    applyText="Confirm Selection"
    clearText="Reset"
    optionList={[
      { text: 'JavaScript', value: 'js' },
      { text: 'TypeScript', value: 'ts' },
      { text: 'React', value: 'react' },
      { text: 'Node.js', value: 'node' },
      { text: 'Python', value: 'python' },
      { text: 'Java', value: 'java' },
    ]}
    onChange={(values) => console.log('Skills selected:', values)}
  />
);
```

### Disabled MultiSelect

```tsx
const DisabledExample = () => (
  <Multiselect
    label="Disabled selection"
    placeholder="Cannot select"
    disabled={true}
    optionList={[
      { text: 'Option 1', value: '1' },
      { text: 'Option 2', value: '2' },
    ]}
  />
);
```

### MultiSelect with Custom Width

```tsx
const CustomWidthExample = () => (
  <Multiselect
    label="Wide selection"
    placeholder="Select options"
    width="400px"
    optionList={[
      { text: 'Option 1', value: '1' },
      { text: 'Option 2', value: '2' },
      { text: 'Option 3', value: '3' },
    ]}
    onChange={(values) => console.log('Selected:', values)}
  />
);
```

### List-Only Mode

```tsx
const ListOnlyExample = () => (
  <Multiselect
    label="Always visible list"
    listOnly={true}
    height={300}
    optionList={[
      { text: 'Item 1', value: '1' },
      { text: 'Item 2', value: '2' },
      { text: 'Item 3', value: '3' },
    ]}
    onChange={(values) => console.log('Selected:', values)}
  />
);
```

### MultiSelect with Section Selection

```tsx
const SectionSelectExample = () => (
  <Multiselect
    label="Select accounts by category"
    placeholder="Choose accounts"
    sectionSelectEnabled={true}
    fixedSizeList={false}
    optionList={[
      {
        type: 'section',
        text: 'Checking Accounts',
        optionList: [
          { text: 'Primary Checking', value: 'check-1' },
          { text: 'Secondary Checking', value: 'check-2' },
        ],
      },
      {
        type: 'section',
        text: 'Savings Accounts',
        optionList: [
          { text: 'High Yield Savings', value: 'save-1' },
          { text: 'Regular Savings', value: 'save-2' },
        ],
      },
    ]}
    onChange={(values) => console.log('Selected accounts:', values)}
  />
);
```

### MultiSelect with Custom Labels

```tsx
const CustomLabelsExample = () => (
  <Multiselect
    label="Select your interests"
    placeholder="Choose interests"
    labels={{
      selectedItem: 'interests chosen',
      allItem: 'Select all interests',
      filterPlaceholder: 'Search interests...',
      allItemSubText: 'Choose all available options',
    }}
    isFilterEnable={true}
    optionList={[
      { text: 'Technology', value: 'tech' },
      { text: 'Sports', value: 'sports' },
      { text: 'Music', value: 'music' },
      { text: 'Travel', value: 'travel' },
      { text: 'Food', value: 'food' },
    ]}
    onChange={(values) => console.log('Interests:', values)}
  />
);
```

### MultiSelect with Error State

```tsx
const ErrorExample = () => (
  <Multiselect
    label="Required field"
    placeholder="Please select at least one"
    status="invalid"
    errorText="This field is required"
    optionList={[
      { text: 'Option 1', value: '1' },
      { text: 'Option 2', value: '2' },
      { text: 'Option 3', value: '3' },
    ]}
    onChange={(values) => console.log('Selected:', values)}
  />
);
```

### MultiSelect with Assistive Text

```tsx
const AssistiveTextExample = () => (
  <Multiselect
    label="Select departments"
    placeholder="Choose departments"
    assistiveText="Select all departments you work with"
    optionList={[
      { text: 'Engineering', value: 'eng' },
      { text: 'Marketing', value: 'mkt' },
      { text: 'Sales', value: 'sales' },
      { text: 'Support', value: 'support' },
    ]}
    onChange={(values) => console.log('Departments:', values)}
  />
);
```

### MultiSelect with Disabled Options

```tsx
const DisabledOptionsExample = () => (
  <Multiselect
    label="Select available services"
    placeholder="Choose services"
    optionList={[
      { text: 'Basic Service', value: 'basic' },
      { text: 'Premium Service', value: 'premium', disabled: true },
      { text: 'Enterprise Service', value: 'enterprise', disabled: true },
      { text: 'Custom Service', value: 'custom' },
    ]}
    onChange={(values) => console.log('Services:', values)}
  />
);
```

## Features

### Selection Modes

- **Checkbox Mode**: Multiple selection with checkboxes
- **Radio Mode**: Single selection with radio buttons
- **Section Selection**: Select entire sections at once
- **Select All**: Bulk selection of all available options

### Data Organization

- **Flat Lists**: Simple array of options
- **Sectioned Lists**: Options grouped by categories
- **Nested Options**: Hierarchical option structures
- **Sub-text Support**: Additional descriptive information

### User Experience

- **Filtering**: Real-time search and filtering
- **Virtualization**: Efficient rendering of large datasets
- **Keyboard Navigation**: Full keyboard accessibility
- **Click Outside**: Close dropdown when clicking outside
- **Apply/Clear Actions**: Optional confirmation workflow

### Accessibility

- **ARIA Support**: Proper ARIA attributes and roles
- **Screen Reader**: Screen reader friendly announcements
- **Keyboard Navigation**: Tab, arrow keys, and Enter support
- **Focus Management**: Proper focus handling and restoration
- **Error States**: Accessible error message association

### Styling

- **Theme Integration**: Complete GDS theme provider integration
- **Custom Width**: Flexible width configuration
- **Expanded Mode**: Dropdown expands to content width
- **Custom Styling**: Support for additional CSS classes
- **Responsive Design**: Mobile-friendly responsive behavior

## Testing

The component includes:

- Unit tests using Jest with snapshot testing
- Component tests using Playwright
- Accessibility testing with axe-devtools
- Keyboard navigation testing
- Selection state testing
- Filter functionality testing

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

- Basic multi-select configurations
- Multi-select with apply and clear buttons
- Multi-select with label and assistive text
- Expanded dropdown width
- Multi-select with sub-text
- Multi-select with sections
- Disabled item configurations
- Select all functionality
- Multi-select with default values
- Multi-select with filter enabled
- Section select with checkboxes
- Always open list mode

## Data Attributes

- No specific data attributes applied

## CSS Classes

- Custom CSS classes can be applied via className prop
- Component uses internal class names for styling

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
MultiSelect/
├── src/
│   ├── Multiselect.tsx         # Main Multiselect component
│   ├── Multiselect.mock.tsx    # Mock configurations for testing
│   ├── Multiselect.stories.tsx # Storybook stories
│   ├── Multiselect.style.ts    # Multiselect styling
│   ├── ListItem.tsx            # Individual list item component
│   ├── ListItemAllSelection.tsx # Select all item component
│   ├── index.ts                # Main exports
│   └── tests/
│       ├── Multiselect.test.tsx # Unit tests
│       ├── MultiSelect.ct.tsx   # Component tests
│       ├── MultiSelectWrapper.tsx # Test wrapper
│       ├── a11y-results/       # Accessibility test results
│       ├── coverage/           # Test coverage reports
│       └── __snapshots__/      # Snapshot files
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Account Selection

```tsx
const AccountSelector = ({ accounts, onSelectionChange }) => (
  <Multiselect
    label="Select accounts"
    placeholder="Choose accounts to include"
    isFilterEnable={true}
    itemSize={80}
    optionList={accounts.map((account) => ({
      text: account.name,
      value: account.id,
      subText: `${account.number} • £${account.balance}`,
    }))}
    onChange={onSelectionChange}
    labels={{
      selectedItem: 'accounts selected',
      allItem: 'Select all accounts',
      filterPlaceholder: 'Search accounts...',
    }}
  />
);
```

### Permission Management

```tsx
const PermissionSelector = ({ permissions, selectedPermissions, onChange }) => (
  <Multiselect
    label="User permissions"
    placeholder="Select permissions"
    value={selectedPermissions}
    isControlled={true}
    fixedSizeList={false}
    optionList={[
      {
        type: 'section',
        text: 'User Management',
        optionList: permissions.filter((p) => p.category === 'user'),
      },
      {
        type: 'section',
        text: 'Content Management',
        optionList: permissions.filter((p) => p.category === 'content'),
      },
      {
        type: 'section',
        text: 'System Administration',
        optionList: permissions.filter((p) => p.category === 'system'),
      },
    ]}
    onChange={onChange}
  />
);
```

### Tag Selection

```tsx
const TagSelector = ({ availableTags, selectedTags, onTagsChange }) => (
  <Multiselect
    label="Tags"
    placeholder="Add tags"
    value={selectedTags}
    isControlled={true}
    isFilterEnable={true}
    optionList={availableTags.map((tag) => ({
      text: tag.name,
      value: tag.id,
      subText: `${tag.usageCount} uses`,
    }))}
    onChange={onTagsChange}
    labels={{
      selectedItem: 'tags selected',
      filterPlaceholder: 'Search tags...',
    }}
  />
);
```

### Product Filter

```tsx
const ProductFilter = ({ categories, selectedCategories, onFilterChange }) => (
  <Multiselect
    label="Product categories"
    placeholder="Filter by category"
    value={selectedCategories}
    isControlled={true}
    hasApplyAndClear={true}
    applyText="Apply Filters"
    clearText="Clear All"
    optionList={categories.map((category) => ({
      text: category.name,
      value: category.id,
      subText: `${category.productCount} products`,
    }))}
    onChange={onFilterChange}
  />
);
```

### Survey Question

```tsx
const SurveyQuestion = ({ question, options, onAnswer }) => (
  <div className="survey-question">
    <Multiselect
      label={question.text}
      placeholder="Select all that apply"
      type="checkbox"
      optionList={options.map((option) => ({
        text: option.text,
        value: option.id,
      }))}
      onChange={onAnswer}
      labels={{
        selectedItem: 'options selected',
      }}
    />
  </div>
);
```

### File Type Selection

```tsx
const FileTypeSelector = ({ onSelection }) => (
  <Multiselect
    label="Allowed file types"
    placeholder="Select file types"
    optionList={[
      { text: 'PDF Documents', value: 'pdf' },
      { text: 'Word Documents', value: 'doc' },
      { text: 'Excel Spreadsheets', value: 'xls' },
      { text: 'Images', value: 'img' },
      { text: 'Videos', value: 'video' },
      { text: 'Audio Files', value: 'audio' },
    ]}
    onChange={onSelection}
    isAllEnabled={true}
  />
);
```

## Best Practices

1. **Choose appropriate selection mode**: Use checkboxes for multiple selection, radio for single
2. **Provide clear labels**: Use descriptive labels and placeholders
3. **Enable filtering for large lists**: Add search functionality for lists over 10 items
4. **Use sections for organization**: Group related options into sections
5. **Consider item height**: Increase itemSize when using sub-text
6. **Handle controlled vs uncontrolled**: Choose based on your state management needs
7. **Provide feedback**: Use assistive text and error states appropriately
8. **Test accessibility**: Ensure keyboard navigation and screen reader support
9. **Consider performance**: Use virtualization for lists over 100 items
10. **Validate selections**: Implement proper validation for required fields

## Migration Notes

### General Migration:

- Ensure you have the required peer dependencies installed
- The component requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling
- React 16.14.0+ is required

### Recent Updates:

- Select all checkbox bug fix when option list is empty (v3.5.7)
- Multi-select styling updates (v3.5.4)
- Theme provider peer dependency updates for compatibility

### Breaking Changes:

- Verify that your theme provider includes multi-select related configuration
- Check that GDS tokens package is available for component colors
- Ensure CSS custom properties are available for theme values

### From Previous Versions:

- Component API remains consistent
- Props interface maintained
- Selection behavior unchanged
- Styling approach maintained with styled-components

## Related Components

- `@fil-react-components/theme-provider` - Theme provider for multi-select styling
- `@fil-react-components/checkbox` - Checkbox components used in multi-select
- `@fil-react-components/radio-button` - Radio button components used in multi-select
- `@fil-react-components/input` - Input components used for filtering
- `@fil-react-components/label` - Label components for multi-select labels
- `@fil-react-components/button` - Button components used in actions</content>
  <parameter name="filePath">c:\Users\A744601\Documents\codebase\TAPP101992-fil-react-components\metadata\MultiSelect-3.5.10.md
