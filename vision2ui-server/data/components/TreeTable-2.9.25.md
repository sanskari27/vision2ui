## Overview

The TreeTable component is a hierarchical table component that displays data in a tree-like structure with collapsible/expandable rows. It extends the base Table component to support nested data organization with multiple grouping levels, allowing users to navigate complex datasets through expandable sections. The component supports custom group headers, nested hierarchies up to multiple levels deep, and integrates with table sorting functionality following the GDS (Global Design System) standards.

## Package Information

- **Package Name**: `@fil-react-components/tree-table`
- **Version**: 2.9.25
- **Description**: TreeTable Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/tree-table
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/streamline-icon`: ^2.15.6
- `@fil-react-components/svg-icons`: ^1.9.0
- `@fil-react-components/table`: ^2.11.25
- `@fil-react-components/with-styles`: ^2.7.8
- `@fil-react-mixins/styled`: ^2.7.1
- `@fil-react-utils/common`: ^1.14.1
- `classnames`: ^2.5.1
- `lodash`: 4.17.21

## Exports

```typescript
import TreeTable, {
  TreeTableVanilla,
  GroupConfigType,
  TreeTablePropsType,
} from '@fil-react-components/tree-table';
```

### Available Exports:

- `TreeTable` (default export) - Main tree table component with styling
- `TreeTableVanilla` - Unstyled tree table component
- `GroupConfigType` - TypeScript type for group configuration
- `TreeTablePropsType` - TypeScript type for component props

## Component Structure

### Main Component: TreeTable

The TreeTable component extends the base Table component to provide hierarchical data display with collapsible groups. It manages complex nested data structures and provides interactive expand/collapse functionality.

### Component Variations:

1. **Single Level Groups** - Basic grouping with one level of hierarchy
2. **Multi-Level Groups** - Nested hierarchies with multiple levels deep
3. **Custom Headers** - Custom group header rendering with React components
4. **Collapsed by Default** - Groups that start in collapsed state
5. **Skipped Headers** - Groups without visible header rows

### Component Hierarchy:

```
TreeTable (extends Table)
├── Group Header Row (optional)
│   ├── Expand/Collapse Icon
│   └── Group Title
├── Data Rows (when expanded)
└── Child Groups (recursive)
    ├── Child Group Header
    ├── Child Data Rows
    └── Further Nested Groups
```

## Props

### TreeTableProps<DataItem>

Extends `Omit<TableProps<DataItem>, 'data'>`

| Prop              | Type                                                             | Default      | Description                                                |
| ----------------- | ---------------------------------------------------------------- | ------------ | ---------------------------------------------------------- |
| `groupConfig`     | `GroupConfig[]`                                                  | **Required** | Configuration array defining group structure and hierarchy |
| `data`            | `{ [key: string]: { [key: string]: DataItem[] } \| DataItem[] }` | **Required** | Hierarchical data object matching group configuration      |
| `columns`         | `Column<DataItem>[]`                                             | -            | Column definitions (inherited from Table)                  |
| `tableId`         | `string`                                                         | -            | Unique identifier for the table                            |
| `isSortable`      | `boolean`                                                        | -            | Whether table supports sorting                             |
| `sortOrder`       | `'asc' \| 'desc'`                                                | -            | Current sort direction                                     |
| `onSort`          | `(accessor: string, sortOrder: string) => void`                  | -            | Sort change handler                                        |
| `mobileVariation` | `'stack' \| 'scroll'`                                            | `'stack'`    | Mobile display mode                                        |
| `className`       | `string`                                                         | -            | Additional CSS class names                                 |

### GroupConfig

| Property            | Type                 | Default      | Description                           |
| ------------------- | -------------------- | ------------ | ------------------------------------- |
| `title`             | `string \| Function` | **Required** | Group header title or render function |
| `accessor`          | `string`             | **Required** | Data accessor key for this group      |
| `skipGroupTitleRow` | `boolean`            | `false`      | Whether to hide the group header row  |
| `isCollapsed`       | `boolean`            | `false`      | Whether group starts collapsed        |
| `children`          | `GroupConfig[]`      | -            | Nested child group configurations     |

## Usage Examples

### Basic Single-Level Grouping

```tsx
import React from 'react';
import TreeTable from '@fil-react-components/tree-table';

const BasicTreeTable = () => {
  const groupConfig = [
    {
      title: 'Direct Investments',
      accessor: 'direct',
    },
    {
      title: 'Fund Investments',
      accessor: 'funds',
    },
  ];

  const data = {
    direct: [
      { id: 1, name: 'Apple Inc.', value: 100000 },
      { id: 2, name: 'Microsoft Corp.', value: 150000 },
    ],
    funds: [
      { id: 3, name: 'Tech Growth Fund', value: 250000 },
      { id: 4, name: 'Value Fund', value: 300000 },
    ],
  };

  const columns = [
    { title: 'ID', accessor: 'id' },
    { title: 'Name', accessor: 'name' },
    { title: 'Value', accessor: 'value' },
  ];

  return (
    <TreeTable
      groupConfig={groupConfig}
      data={data}
      columns={columns}
      tableId="basic-tree-table"
    />
  );
};
```

### Multi-Level Nested Groups

```tsx
const NestedTreeTable = () => {
  const groupConfig = [
    {
      title: 'Portfolio A',
      accessor: 'portfolioA',
      children: [
        {
          title: 'Stocks',
          accessor: 'portfolioA.stocks',
        },
        {
          title: 'Bonds',
          accessor: 'portfolioA.bonds',
        },
      ],
    },
    {
      title: 'Portfolio B',
      accessor: 'portfolioB',
      children: [
        {
          title: 'Stocks',
          accessor: 'portfolioB.stocks',
        },
        {
          title: 'Real Estate',
          accessor: 'portfolioB.realEstate',
        },
      ],
    },
  ];

  const data = {
    portfolioA: {
      stocks: [
        { id: 1, name: 'AAPL', value: 50000 },
        { id: 2, name: 'MSFT', value: 75000 },
      ],
      bonds: [{ id: 3, name: 'US Treasury', value: 100000 }],
    },
    portfolioB: {
      stocks: [{ id: 4, name: 'GOOGL', value: 60000 }],
      realEstate: [{ id: 5, name: 'Office Building', value: 500000 }],
    },
  };

  return (
    <TreeTable
      groupConfig={groupConfig}
      data={data}
      columns={columns}
      tableId="nested-tree-table"
    />
  );
};
```

### Custom Group Headers

```tsx
import { HeadingS, HeadingXS } from '@fil-react-components/heading';

const CustomHeadersTable = () => {
  const groupConfig = [
    {
      title: (item, level, isExpanded) => (
        <td colSpan={3}>
          <HeadingS>
            {item.title} {isExpanded ? '▼' : '▶'}
          </HeadingS>
        </td>
      ),
      accessor: 'investments',
    },
    {
      title: (item, level, isExpanded) => (
        <td colSpan={3}>
          <HeadingXS>
            {item.title} {isExpanded ? '▼' : '▶'}
          </HeadingXS>
        </td>
      ),
      accessor: 'savings',
    },
  ];

  return (
    <TreeTable
      groupConfig={groupConfig}
      data={data}
      columns={columns}
      tableId="custom-headers-table"
    />
  );
};
```

### Collapsed Groups by Default

```tsx
const CollapsedByDefaultTable = () => {
  const groupConfig = [
    {
      title: 'Q1 Results',
      accessor: 'q1',
      isCollapsed: true, // Starts collapsed
    },
    {
      title: 'Q2 Results',
      accessor: 'q2',
      isCollapsed: false, // Starts expanded
    },
  ];

  return (
    <TreeTable
      groupConfig={groupConfig}
      data={quarterlyData}
      columns={columns}
      tableId="collapsed-default-table"
    />
  );
};
```

### Skipped Group Headers

```tsx
const SkippedHeadersTable = () => {
  const groupConfig = [
    {
      title: 'Main Category',
      accessor: 'main',
      skipGroupTitleRow: true, // No header row shown
      children: [
        {
          title: 'Subcategory A',
          accessor: 'main.subA',
        },
        {
          title: 'Subcategory B',
          accessor: 'main.subB',
        },
      ],
    },
  ];

  return (
    <TreeTable
      groupConfig={groupConfig}
      data={data}
      columns={columns}
      tableId="skipped-headers-table"
    />
  );
};
```

### Sortable Tree Table

```tsx
import { withTableSort } from '@fil-react-components/table';

const SortableTreeTable = withTableSort(TreeTable);

const SortableExample = () => {
  return (
    <SortableTreeTable
      groupConfig={groupConfig}
      data={data}
      columns={columns}
      tableId="sortable-tree-table"
      isSortable={true}
      sortOrder="asc"
      onSort={(accessor, sortOrder) => {
        console.log('Sorting by:', accessor, sortOrder);
      }}
    />
  );
};
```

### Complex Data Structure

```tsx
const ComplexTreeTable = () => {
  const groupConfig = [
    {
      title: 'Assets',
      accessor: 'assets',
      children: [
        {
          title: 'Fixed Income',
          accessor: 'assets.fixedIncome',
          children: [
            {
              title: 'Government Bonds',
              accessor: 'assets.fixedIncome.govt',
            },
            {
              title: 'Corporate Bonds',
              accessor: 'assets.fixedIncome.corp',
            },
          ],
        },
        {
          title: 'Equities',
          accessor: 'assets.equities',
          children: [
            {
              title: 'Domestic',
              accessor: 'assets.equities.domestic',
            },
            {
              title: 'International',
              accessor: 'assets.equities.international',
            },
          ],
        },
      ],
    },
  ];

  const data = {
    assets: {
      fixedIncome: {
        govt: [
          { id: 1, name: 'US Treasury 10Y', value: 1000000 },
          { id: 2, name: 'UK Gilts 5Y', value: 500000 },
        ],
        corp: [{ id: 3, name: 'Apple Corp Bond', value: 750000 }],
      },
      equities: {
        domestic: [{ id: 4, name: 'S&P 500 ETF', value: 2000000 }],
        international: [{ id: 5, name: 'MSCI World ETF', value: 1500000 }],
      },
    },
  };

  return (
    <TreeTable
      groupConfig={groupConfig}
      data={data}
      columns={columns}
      tableId="complex-tree-table"
    />
  );
};
```

## Features

### Hierarchical Data Display

- **Multi-Level Nesting** - Support for unlimited nesting levels
- **Dynamic Expansion** - Expand/collapse groups interactively
- **Visual Hierarchy** - Clear visual distinction between levels
- **State Management** - Maintains collapse/expand state

### Group Configuration

- **Flexible Headers** - String titles or custom React components
- **Default States** - Configure initial collapsed/expanded state
- **Header Skipping** - Hide group headers when not needed
- **Custom Rendering** - Full control over header appearance

### Data Structure

- **Nested Objects** - Support for complex nested data structures
- **Dynamic Accessors** - Dot-notation for deep property access
- **Array Support** - Handle both arrays and nested objects
- **Type Safety** - Full TypeScript support for data structures

### Integration

- **Table Features** - Inherits all Table component functionality
- **Sorting Support** - Compatible with table sorting HOCs
- **Styling** - Consistent with GDS design system
- **Responsive** - Mobile-friendly responsive behavior

## Testing

The component includes:

- Unit tests using Jest
- Component tests using Playwright
- Accessibility tests
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

- Basic row grouping with single level
- Multi-level nested group hierarchies
- Custom group header rendering
- Default collapsed group states
- Skipped group header rows
- All mock configurations and data structures

## Data Attributes

- `data-frc="tree-table"` - Applied to the main tree table container

## CSS Classes

- `fil-table` - Base table styling (inherited)
- `fil-table__group-header` - Group header row styling
- `fil-table__group-level-{n}` - Level-specific group styling
- `fil-table__group-header--inactive` - Collapsed group styling
- `fil-icon-wrapper` - Icon container in group headers

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
TreeTable/
├── src/
│   ├── TreeTable.tsx              # Main tree table component
│   ├── TreeTable.style.ts         # Tree table styling
│   ├── TreeTable.mock.tsx         # Mock configurations and data
│   ├── TreeTable.stories.tsx      # Storybook stories
│   ├── index.ts                   # Main exports
│   └── tests/
│       ├── TreeTable.test.tsx     # Unit tests
│       ├── TreeTable.ct.tsx       # Component tests
│       └── TreeTableWrapper.tsx   # Test wrapper
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Financial Portfolio Management

```tsx
const PortfolioTreeTable = () => {
  const groupConfig = [
    {
      title: 'Equities',
      accessor: 'equities',
      children: [
        { title: 'US Stocks', accessor: 'equities.us' },
        { title: 'International Stocks', accessor: 'equities.intl' },
      ],
    },
    {
      title: 'Fixed Income',
      accessor: 'fixedIncome',
      children: [
        { title: 'Bonds', accessor: 'fixedIncome.bonds' },
        { title: 'Cash Equivalents', accessor: 'fixedIncome.cash' },
      ],
    },
  ];

  return (
    <TreeTable
      groupConfig={groupConfig}
      data={portfolioData}
      columns={portfolioColumns}
      tableId="portfolio-tree"
      isSortable={true}
    />
  );
};
```

### Organizational Hierarchy

```tsx
const OrgTreeTable = () => {
  const groupConfig = [
    {
      title: 'Executive Team',
      accessor: 'executives',
    },
    {
      title: 'Departments',
      accessor: 'departments',
      children: [
        { title: 'Engineering', accessor: 'departments.engineering' },
        { title: 'Sales', accessor: 'departments.sales' },
        { title: 'Marketing', accessor: 'departments.marketing' },
      ],
    },
  ];

  return (
    <TreeTable
      groupConfig={groupConfig}
      data={orgData}
      columns={employeeColumns}
      tableId="org-tree"
    />
  );
};
```

### Product Catalog

```tsx
const ProductTreeTable = () => {
  const groupConfig = [
    {
      title: 'Electronics',
      accessor: 'electronics',
      children: [
        { title: 'Smartphones', accessor: 'electronics.phones' },
        { title: 'Laptops', accessor: 'electronics.laptops' },
      ],
    },
    {
      title: 'Clothing',
      accessor: 'clothing',
      children: [
        { title: 'Men', accessor: 'clothing.men' },
        { title: 'Women', accessor: 'clothing.women' },
      ],
    },
  ];

  return (
    <TreeTable
      groupConfig={groupConfig}
      data={productData}
      columns={productColumns}
      tableId="product-tree"
      isSortable={true}
    />
  );
};
```

### Project Management

```tsx
const ProjectTreeTable = () => {
  const groupConfig = [
    {
      title: 'Active Projects',
      accessor: 'active',
      children: [
        { title: 'Q1 Projects', accessor: 'active.q1' },
        { title: 'Q2 Projects', accessor: 'active.q2' },
      ],
    },
    {
      title: 'Completed Projects',
      accessor: 'completed',
      isCollapsed: true,
    },
  ];

  return (
    <TreeTable
      groupConfig={groupConfig}
      data={projectData}
      columns={projectColumns}
      tableId="project-tree"
    />
  );
};
```

### File System Browser

```tsx
const FileTreeTable = () => {
  const groupConfig = [
    {
      title: 'Root',
      accessor: 'root',
      skipGroupTitleRow: true,
      children: [
        { title: 'Documents', accessor: 'root.documents' },
        { title: 'Images', accessor: 'root.images' },
        { title: 'Videos', accessor: 'root.videos' },
      ],
    },
  ];

  return (
    <TreeTable
      groupConfig={groupConfig}
      data={fileData}
      columns={fileColumns}
      tableId="file-tree"
    />
  );
};
```

## Best Practices

1. **Plan Data Structure** - Design your data hierarchy before implementing
2. **Use Meaningful Accessors** - Choose clear, descriptive accessor keys
3. **Consider Performance** - Be mindful of deeply nested structures
4. **Provide Context** - Use clear group titles that explain the hierarchy
5. **Handle Empty States** - Consider what happens when groups have no data
6. **Test Expand/Collapse** - Ensure all levels work correctly
7. **Mobile Responsiveness** - Test on mobile devices for usability
8. **Accessibility** - Ensure keyboard navigation works for all groups
9. **State Management** - Consider persisting collapse/expand state
10. **Loading States** - Handle async data loading appropriately

## Migration Notes

### From older versions:

- Ensure you have the required peer dependencies installed
- The component now requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling
- Component extends the base Table component, inheriting all its features
- Group configuration structure has been enhanced for better flexibility
- Custom header rendering now supports full React components
- Improved TypeScript support with better type definitions

## Related Components

- `@fil-react-components/table` - Base table component (extended by TreeTable)
- `@fil-react-components/streamline-icon` - Icons used for expand/collapse indicators
- `@fil-react-components/heading` - Heading components used in custom headers
- `@fil-react-components/theme-provider` - Theme provider for styling
- `@fil-react-components/with-table-sort` - HOC for adding sorting functionality
