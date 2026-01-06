## Overview

The Table component is a comprehensive, flexible data table component that provides multiple display variations including standard tables, tile layouts, list views, and responsive stack tables. It supports sorting, custom cell rendering, row spanning, and various styling options following the GDS (Global Design System) standards.

## Package Information

- **Package Name**: `@fil-react-components/table`
- **Version**: 2.11.25
- **Description**: Table Component Variations
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/table
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/grid-container`: ^2.10.10
- `@fil-react-components/streamline-icon`: ^2.15.6
- `@fil-react-components/svg-icons`: ^1.9.0
- `@fil-react-components/with-styles`: ^2.7.8
- `@fil-react-mixins/styled`: ^2.7.1
- `@fil-react-types/types`: ^1.4.1
- `classnames`: ^2.5.1
- `lodash`: 4.17.21

## Exports

```typescript
import Table, {
  TileTable,
  ListTable,
  StackTable,
  StickyFooterTable,
  StickyTable,
  VerticalScrollTable,
  TableVanilla,
} from '@fil-react-components/table';
```

### Available Exports:

- `Table` (default export) - Main table component with styling
- `TableVanilla` - Unstyled table component
- `TileTable` - Pre-styled tile layout table
- `ListTable` - Pre-styled list layout table
- `StackTable` - Pre-styled stack layout table
- `StickyFooterTable` - Table with sticky footer functionality
- `StickyTable` - Table with sticky column functionality
- `VerticalScrollTable` - Table with vertical scrolling

## Component Structure

### Main Component: Table

The main Table component is a class-based React component that handles data rendering, sorting, and various display modes.

### Component Variations:

1. **Standard Table** (default) - Traditional table layout with headers and rows
2. **Tile Table** - Card-like tile layout for data display
3. **List Table** - List-style layout with rows as list items
4. **Stack Table** - Responsive stack layout for mobile devices
5. **Sticky Table** - Table with sticky first column
6. **Sticky Footer Table** - Table with sticky footer
7. **Vertical Scroll Table** - Table with vertical scrolling capability

### Component Hierarchy:

```
Table (Main Component)
├── TableCaption (optional)
├── ColGroup (optional)
├── TableHead
│   └── TableHeaderCells
├── TableBody
│   ├── TableRows
│   │   └── TableCells
│   └── NoDataRow (when no data)
└── TableFooter (optional)
```

## Props

### TableProps<DataItem>

| Prop              | Type                                                             | Default           | Description                                      |
| ----------------- | ---------------------------------------------------------------- | ----------------- | ------------------------------------------------ |
| `bordered`        | `boolean`                                                        | `false`           | Adds border styling to the table                 |
| `responsive`      | `boolean`                                                        | `false`           | Makes table responsive with horizontal scrolling |
| `striped`         | `boolean`                                                        | `false`           | Adds alternating row colors                      |
| `tableId`         | `string`                                                         | -                 | Unique ID for the table element                  |
| `tableCaption`    | `string`                                                         | -                 | Accessibility caption for the table              |
| `columns`         | `Array<Column<DataItem>>`                                        | -                 | Column definitions with titles and accessors     |
| `data`            | `DataItem[]`                                                     | -                 | Array of data objects to display                 |
| `isHeader`        | `boolean`                                                        | `true`            | Whether to show table headers                    |
| `isColGroup`      | `boolean`                                                        | `true`            | Whether to use colgroup for column widths        |
| `type`            | `'tile' \| 'list' \| 'stack' \| ''`                              | `''`              | Table layout type                                |
| `rows`            | `(data: DataItem, index: number) => React.ReactNode`             | -                 | Custom row rendering function                    |
| `rowLimit`        | `number`                                                         | -                 | Maximum number of rows to display                |
| `isSortable`      | `boolean \| boolean[]`                                           | `false`           | Whether columns are sortable                     |
| `sortOrder`       | `'asc' \| 'desc'`                                                | -                 | Current sort order                               |
| `sortBy`          | `string`                                                         | -                 | Currently sorted column accessor                 |
| `onSortChange`    | `(accessor: ColumnAccessor, sortOrder: 'asc' \| 'desc') => void` | -                 | Sort change handler                              |
| `noData`          | `Function`                                                       | `() => 'No Data'` | Function returning no-data message               |
| `className`       | `string`                                                         | -                 | Additional CSS class names                       |
| `tableFooter`     | `Function`                                                       | -                 | Function returning table footer content          |
| `size`            | `'standard' \| 'small'`                                          | `'standard'`      | Table size variant                               |
| `textSize`        | `'medium' \| 'small'`                                            | `'medium'`        | Text size within table                           |
| `mobileVariation` | `'stack' \| 'none'`                                              | `'stack'`         | Mobile responsive behavior                       |
| `columnNoWrap`    | `boolean`                                                        | `false`           | Prevent column text wrapping                     |
| `rowNoWrap`       | `boolean`                                                        | `false`           | Prevent row text wrapping                        |

### Column<DataItem>

| Prop        | Type                         | Default    | Description                      |
| ----------- | ---------------------------- | ---------- | -------------------------------- |
| `title`     | `string \| Function`         | -          | Column header title or function  |
| `id`        | `string`                     | -          | Unique identifier for the column |
| `accessor`  | `ColumnAccessor`             | -          | Data accessor path or array      |
| `cell`      | `Function`                   | -          | Custom cell rendering function   |
| `cellClass` | `string \| Function`         | -          | CSS class for table cells        |
| `headClass` | `string \| Function`         | -          | CSS class for header cells       |
| `width`     | `string \| number`           | -          | Column width                     |
| `rowSpan`   | `(data: DataItem) => number` | -          | Row span calculation function    |
| `type`      | `'string' \| 'number'`       | `'string'` | Column data type                 |
| `titleText` | `string`                     | -          | Accessible title text            |

## Usage Examples

### Basic Table

```tsx
import Table from '@fil-react-components/table';

interface Product {
  id: number;
  name: string;
  price: number;
}

const columns = [
  { title: 'ID', accessor: 'id' },
  { title: 'Name', accessor: 'name' },
  { title: 'Price', accessor: 'price', type: 'number' },
];

const data: Product[] = [
  { id: 1, name: 'Product 1', price: 29.99 },
  { id: 2, name: 'Product 2', price: 49.99 },
];

<Table tableId="products-table" columns={columns} data={data} />;
```

### Sortable Table

```tsx
import React, { useState } from 'react';
import Table from '@fil-react-components/table';

const SortableTable = () => {
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSort = (accessor: string, order: 'asc' | 'desc') => {
    setSortBy(accessor);
    setSortOrder(order);
  };

  return (
    <Table
      columns={columns}
      data={data}
      isSortable={true}
      sortBy={sortBy}
      sortOrder={sortOrder}
      onSortChange={handleSort}
    />
  );
};
```

### Custom Cell Rendering

```tsx
const columns = [
  {
    title: 'Name',
    accessor: 'name',
    cell: (data: Product) => <strong>{data.name}</strong>,
  },
  {
    title: 'Price',
    accessor: 'price',
    type: 'number',
    cell: (data: Product) => `$${data.price.toFixed(2)}`,
  },
];
```

### Tile Table Layout

```tsx
import { TileTable } from '@fil-react-components/table';

<TileTable columns={columns} data={data} type="tile" />;
```

### Responsive Table

```tsx
<Table
  columns={columns}
  data={data}
  responsive={true}
  mobileVariation="stack"
/>
```

### Table with Footer

```tsx
const footerContent = () => (
  <tr>
    <td colSpan={3}>Total: $79.98</td>
  </tr>
);

<Table columns={columns} data={data} tableFooter={footerContent} />;
```

## Features

### Accessibility

- Proper table semantics with `<table>`, `<thead>`, `<tbody>`, `<tfoot>`
- Table captions for screen readers
- Scope attributes on header cells
- ARIA labels and roles where appropriate

### Styling

- Styled-components integration
- Theme provider support
- Multiple size variants (standard, small)
- Text size options (medium, small)
- Bordered and striped styling options
- Custom CSS class support

### Data Handling

- Flexible data accessor patterns
- Support for nested object properties
- Custom cell rendering functions
- Row spanning capabilities
- Data type handling (string, number)

### Responsive Design

- Responsive wrapper for horizontal scrolling
- Stack layout for mobile devices
- Configurable mobile behavior

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

- Basic table configurations
- Sortable tables
- Custom cell rendering
- Different table types (tile, list, stack)
- Responsive behavior
- Table with inputs and interactions
- Sticky table variations

## Data Attributes

- `data-frc="table"` - Applied to the main table element

## CSS Classes

- `fil-table` - Base table class
- `fil-table--size-standard` - Standard size variant
- `fil-table--size-small` - Small size variant
- `fil-table--text-medium` - Medium text size
- `fil-table--text-small` - Small text size
- `fil-table__row` - Table row class
- `fil-table__sort-column` - Sortable column class
- `fil-table__sorting` - Sorting-enabled table header

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
Table/
├── src/
│   ├── Table.tsx                    # Main table component
│   ├── Table.style.ts               # Table styling
│   ├── TableVariations.style.ts     # Variation-specific styles
│   ├── Table.mock.tsx               # Mock data configurations
│   ├── Table.stories.tsx            # Storybook stories
│   ├── StickyTable.tsx              # Sticky table variation
│   ├── StickyFooterTable.tsx        # Sticky footer table
│   ├── VerticalScrollTable.tsx      # Vertical scroll table
│   ├── index.ts                     # Main exports
│   └── tests/
│       ├── Table.test.tsx           # Unit tests
│       └── Table.ct.tsx             # Component tests
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Data Grid

```tsx
const dataGridColumns = [
  { title: 'ID', accessor: 'id', width: '10%' },
  { title: 'Name', accessor: 'name', width: '40%' },
  { title: 'Email', accessor: 'email', width: '30%' },
  { title: 'Status', accessor: 'status', width: '20%' },
];

<Table columns={dataGridColumns} data={users} striped={true} bordered={true} />;
```

### Financial Table

```tsx
const financialColumns = [
  { title: 'Asset', accessor: 'asset' },
  { title: 'Value', accessor: 'value', type: 'number' },
  {
    title: 'Change',
    accessor: 'change',
    type: 'number',
    cell: (data) => (
      <span className={data.change >= 0 ? 'positive' : 'negative'}>
        {data.change >= 0 ? '+' : ''}
        {data.change}%
      </span>
    ),
  },
];
```

### Admin Dashboard

```tsx
<Table
  columns={adminColumns}
  data={adminData}
  isSortable={true}
  responsive={true}
  size="small"
/>
```

## Best Practices

1. **Define column widths** - Use the `width` prop to control column sizing
2. **Use appropriate data types** - Set `type: 'number'` for numeric columns for proper alignment
3. **Provide accessible titles** - Use `titleText` for complex column headers
4. **Handle empty states** - Customize the `noData` function for better UX
5. **Consider responsive behavior** - Use `responsive={true}` for wide tables
6. **Use semantic markup** - Provide meaningful `tableCaption` for accessibility
7. **Optimize performance** - Use `rowLimit` for large datasets
8. **Test sorting** - Ensure sort handlers work correctly with your data structure

## Migration Notes

### From older versions:

- Ensure you have the required peer dependencies installed
- The component now requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling
- Table component is now class-based with improved TypeScript support
- Column accessor now supports more flexible patterns

## Related Components

- `@fil-react-components/grid-container` - Container component for layout
- `@fil-react-components/streamline-icon` - Icon component for table actions
- `@fil-react-components/svg-icons` - Icon library
- `@fil-react-components/with-styles` - Styling HOC
- `@fil-react-components/theme-provider` - Theme provider for styling
