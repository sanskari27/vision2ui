## Overview

The withPagination Higher-Order Component (HOC) adds pagination functionality to any React component, typically tables or data lists. It provides a complete pagination interface with page navigation, page size selection, and customizable controls. The component automatically handles data slicing, state management, and integrates seamlessly with existing components following the GDS (Global Design System) standards.

## Package Information

- **Package Name**: `@fil-react-components/with-pagination`
- **Version**: 2.17.28
- **Description**: WithPagination HOC
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/with-pagination
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/button`: ^3.4.2
- `@fil-react-components/input`: ^2.12.11
- `@fil-react-components/select-input`: ^2.17.24
- `@fil-react-components/svg-icons`: ^1.9.0
- `@fil-react-components/table`: ^2.11.25
- `@fil-react-mixins/styled`: ^2.7.1
- `@fil-react-utils/common`: ^1.14.1
- `classnames`: ^2.5.1
- `lodash`: 4.17.21

## Exports

```typescript
import withPagination from '@fil-react-components/with-pagination';
```

### Available Exports:

- `withPagination` (default export) - Main HOC for adding pagination functionality

## Component Structure

### Main HOC: withPagination

The withPagination HOC wraps any component and adds pagination controls below it. It manages pagination state internally and provides methods for external control.

### Component Variations:

1. **Automatic Pagination** - Component handles data slicing automatically
2. **API-Driven Pagination** - External control via callback functions
3. **Controlled Pagination** - Parent component controls page state
4. **Custom Page Sizes** - Configurable items per page options

### Component Hierarchy:

```
WithPagination (HOC Wrapper)
├── WrappedComponent (e.g., Table)
│   └── Paginated Data
└── Pagination Controls
    ├── Page Size Selector
    ├── Page Navigation
    │   ├── Previous Button
    │   ├── Page Input
    │   └── Next Button
    └── Range Display
```

## Props

### PaginationProps<DataItem>

| Prop                    | Type                                                                            | Default                                  | Description                                 |
| ----------------------- | ------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------- |
| `pageStartIndex`        | `number`                                                                        | `1`                                      | Initial page number (1-based)               |
| `defaultPageSize`       | `number`                                                                        | `10`                                     | Default number of items per page            |
| `paginationAriaText`    | `string`                                                                        | `'Pagination'`                           | ARIA label for pagination navigation        |
| `nextButtonAria`        | `string`                                                                        | `'Go to Next Page'`                      | ARIA label for next button                  |
| `prevButtonAria`        | `string`                                                                        | `'Go to Previous Page'`                  | ARIA label for previous button              |
| `itemsPerPage`          | `number[]`                                                                      | `[5, 10, 20, 30]`                        | Available page size options                 |
| `itemsPerPageText`      | `string`                                                                        | `'Rows per page'`                        | Label for page size selector                |
| `rangeText`             | `Function`                                                                      | `({ totalPages }) => 'of ${totalPages}'` | Function to format page range display       |
| `isPaginated`           | `boolean`                                                                       | `false`                                  | Force pagination on/off                     |
| `isPageSizeControlled`  | `boolean`                                                                       | `false`                                  | Whether page size is controlled externally  |
| `isPageIndexControlled` | `boolean`                                                                       | `false`                                  | Whether page index is controlled externally |
| `afterPageChange`       | `Function`                                                                      | -                                        | Callback after page change completes        |
| `onPageSizeChange`      | `Function`                                                                      | -                                        | Callback when page size changes             |
| `onPageIndexChange`     | `(arg1: { currentPage: number }) => void`                                       | -                                        | Callback when page index changes            |
| `onPageChange`          | `(arg1: { currentPage: number; pageSize: number; type?: 'page-size' }) => void` | -                                        | Main page change callback                   |
| `previousText`          | `string`                                                                        | `'Previous'`                             | Previous button text                        |
| `nextText`              | `string`                                                                        | `'Next'`                                 | Next button text                            |
| `position`              | `'bottom'`                                                                      | `'bottom'`                               | Position of pagination controls             |
| `maxPageDropDownHeight` | `number`                                                                        | -                                        | Maximum height for page size dropdown       |
| `childConfig`           | `TableProps<DataItem>`                                                          | **Required**                             | Configuration for wrapped component         |
| `className`             | `string`                                                                        | -                                        | Additional CSS class names                  |
| `totalRecords`          | `number`                                                                        | **Required**                             | Total number of records                     |

## Usage Examples

### Basic Table Pagination

```tsx
import React from 'react';
import Table from '@fil-react-components/table';
import withPagination from '@fil-react-components/with-pagination';

const PaginatedTable = withPagination(Table);

const data = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
  value: Math.random() * 100,
}));

const columns = [
  { title: 'ID', accessor: 'id' },
  { title: 'Name', accessor: 'name' },
  { title: 'Value', accessor: 'value' },
];

const App = () => (
  <PaginatedTable
    tableId="basic-pagination"
    columns={columns}
    data={data}
    totalRecords={data.length}
    defaultPageSize={10}
  />
);
```

### API-Driven Pagination

```tsx
const ApiPaginatedTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (page, size) => {
    setLoading(true);
    try {
      const response = await api.getData({ page, pageSize: size });
      setData(response.data);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = ({ currentPage, pageSize, type }) => {
    setCurrentPage(currentPage);
    if (type === 'page-size') {
      setPageSize(pageSize);
    }
    fetchData(currentPage, pageSize);
  };

  return (
    <PaginatedTable
      tableId="api-pagination"
      columns={columns}
      data={loading ? [] : data}
      totalRecords={1000} // Total from API
      onPageChange={handlePageChange}
      noData={loading ? () => <Spinner /> : undefined}
    />
  );
};
```

### Controlled Pagination

```tsx
const ControlledPagination = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  return (
    <PaginatedTable
      tableId="controlled-pagination"
      columns={columns}
      data={data}
      totalRecords={data.length}
      pageStartIndex={pageIndex}
      defaultPageSize={pageSize}
      isPageSizeControlled={true}
      isPageIndexControlled={true}
      onPageSizeChange={({ pageSize: newSize }) => setPageSize(newSize)}
      onPageIndexChange={({ currentPage }) => setPageIndex(currentPage)}
    />
  );
};
```

### Custom Page Sizes

```tsx
const CustomPageSizes = () => (
  <PaginatedTable
    tableId="custom-sizes"
    columns={columns}
    data={data}
    totalRecords={data.length}
    defaultPageSize={25}
    itemsPerPage={[10, 25, 50, 100]}
    itemsPerPageText="Items per page"
  />
);
```

### Custom Range Text

```tsx
const CustomRangeText = () => (
  <PaginatedTable
    tableId="custom-range"
    columns={columns}
    data={data}
    totalRecords={data.length}
    rangeText={({ startIndex, endIndex, totalRecords, totalPages }) =>
      `${startIndex}-${endIndex} of ${totalRecords} items (${totalPages} pages)`
    }
  />
);
```

### Custom Styling and Labels

```tsx
const CustomStyledPagination = () => (
  <PaginatedTable
    tableId="custom-styled"
    columns={columns}
    data={data}
    totalRecords={data.length}
    className="my-custom-pagination"
    paginationAriaText="Data navigation"
    nextButtonAria="Next set of results"
    prevButtonAria="Previous set of results"
    previousText="← Back"
    nextText="Forward →"
    itemsPerPageText="Show"
  />
);
```

### Pagination with Callbacks

```tsx
const WithCallbacks = () => {
  const handlePageChange = ({ currentPage, pageSize }) => {
    console.log(`Page changed to ${currentPage}, page size: ${pageSize}`);
    // Track analytics, update URL, etc.
  };

  const handleAfterPageChange = (state) => {
    console.log('Page change animation complete', state);
  };

  return (
    <PaginatedTable
      tableId="with-callbacks"
      columns={columns}
      data={data}
      totalRecords={data.length}
      onPageChange={handlePageChange}
      afterPageChange={handleAfterPageChange}
    />
  );
};
```

### Large Dataset Handling

```tsx
const LargeDataset = () => {
  const [data, setData] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);

  useEffect(() => {
    // Load initial page
    loadPageData(1, 50);
  }, []);

  const loadPageData = async (page, pageSize) => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    // Simulate API call for large dataset
    const pageData = await api.getLargeDataset(startIndex, endIndex);
    setData(pageData);
    setTotalRecords(50000); // Total records in database
  };

  return (
    <PaginatedTable
      tableId="large-dataset"
      columns={columns}
      data={data}
      totalRecords={totalRecords}
      defaultPageSize={50}
      itemsPerPage={[25, 50, 100, 250]}
      onPageChange={({ currentPage, pageSize }) => {
        loadPageData(currentPage, pageSize);
      }}
    />
  );
};
```

## Features

### Data Management

- **Automatic Slicing** - Handles data pagination automatically
- **API Integration** - Supports server-side pagination
- **State Management** - Manages pagination state internally
- **Controlled Mode** - Allows external state control

### User Interface

- **Page Navigation** - Previous/Next buttons with direct page input
- **Page Size Selection** - Dropdown to choose items per page
- **Range Display** - Shows current page range and total
- **Responsive Design** - Adapts to mobile screens
- **Accessibility** - Full keyboard navigation and screen reader support

### Customization

- **Custom Labels** - Configurable button text and ARIA labels
- **Custom Page Sizes** - Flexible page size options
- **Custom Range Format** - Customizable range display function
- **Styling** - CSS classes for custom styling

### Performance

- **Efficient Rendering** - Only renders current page data
- **Memory Management** - Handles large datasets efficiently
- **Callback Optimization** - Optimized re-rendering

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

- Basic table pagination
- API-driven pagination with loading states
- Controlled pagination with external state
- Custom page sizes and labels
- All mock configurations and use cases

## Data Attributes

- `data-frc="with-pagination"` - Applied to the main pagination container

## CSS Classes

- `pagination` - Main pagination container
- `pagination__controls` - Controls container
- `pagination__items-list` - Page size selector container
- `pagination__items` - Page size select input
- `pagination__nav` - Navigation controls container
- `pagination__page` - Page input container
- `pagination__input` - Page number input
- `pagination__range` - Range display text
- `pagination__arrow` - Navigation arrow buttons
- `pagination__arrow--prev` - Previous button
- `pagination__arrow--next` - Next button
- `pagination__arrow__text` - Button text

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
WithPagination/
├── src/
│   ├── WithPagination.tsx           # Main HOC implementation
│   ├── Pagination.style.ts          # Pagination styling
│   ├── WithPagination.mock.tsx      # Mock configurations
│   ├── WithPagination.component.mock.tsx # Component mocks
│   ├── WithPagination.stories.tsx   # Storybook stories
│   ├── index.ts                     # Main exports
│   └── tests/
│       ├── WithPagination.test.tsx  # Unit tests
│       ├── WithPagination.ct.tsx    # Component tests
│       └── WithPaginationWrapper.tsx # Test wrapper
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Data Table Pagination

```tsx
const DataTable = withPagination(Table);

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);

  const loadUsers = async (page, pageSize) => {
    const response = await api.getUsers({ page, pageSize });
    setUsers(response.data);
    setTotalUsers(response.total);
  };

  return (
    <DataTable
      tableId="user-management"
      columns={userColumns}
      data={users}
      totalRecords={totalUsers}
      defaultPageSize={20}
      itemsPerPage={[10, 20, 50]}
      onPageChange={({ currentPage, pageSize }) => {
        loadUsers(currentPage, pageSize);
      }}
    />
  );
};
```

### Search Results Pagination

```tsx
const SearchResults = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  const search = async (searchQuery, page, pageSize) => {
    const response = await api.search(searchQuery, { page, pageSize });
    setResults(response.data);
    setTotalResults(response.total);
  };

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    search(newQuery, 1, 10);
  };

  return (
    <div>
      <SearchInput onSearch={handleSearch} />
      <PaginatedTable
        tableId="search-results"
        columns={resultColumns}
        data={results}
        totalRecords={totalResults}
        onPageChange={({ currentPage, pageSize }) => {
          search(query, currentPage, pageSize);
        }}
      />
    </div>
  );
};
```

### Admin Dashboard

```tsx
const AdminDashboard = () => {
  const [logs, setLogs] = useState([]);
  const [totalLogs, setTotalLogs] = useState(0);
  const [pageSize, setPageSize] = useState(50);

  useEffect(() => {
    loadLogs(1, pageSize);
  }, [pageSize]);

  const loadLogs = async (page, size) => {
    const response = await api.getAuditLogs({ page, pageSize: size });
    setLogs(response.data);
    setTotalLogs(response.total);
  };

  return (
    <PaginatedTable
      tableId="audit-logs"
      columns={logColumns}
      data={logs}
      totalRecords={totalLogs}
      defaultPageSize={pageSize}
      isPageSizeControlled={true}
      itemsPerPage={[25, 50, 100, 250]}
      onPageSizeChange={({ pageSize: newSize }) => setPageSize(newSize)}
      onPageChange={({ currentPage }) => loadLogs(currentPage, pageSize)}
      itemsPerPageText="Logs per page"
      rangeText={({ startIndex, endIndex, totalRecords }) =>
        `Showing ${startIndex}-${endIndex} of ${totalRecords} logs`
      }
    />
  );
};
```

### Product Catalog

```tsx
const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [sortBy, setSortBy] = useState('name');

  const loadProducts = async (page, pageSize, sort) => {
    const response = await api.getProducts({
      page,
      pageSize,
      sort,
    });
    setProducts(response.data);
    setTotalProducts(response.total);
  };

  return (
    <div>
      <SortControls onSort={setSortBy} />
      <PaginatedTable
        tableId="product-catalog"
        columns={productColumns}
        data={products}
        totalRecords={totalProducts}
        defaultPageSize={24}
        itemsPerPage={[12, 24, 48, 96]}
        onPageChange={({ currentPage, pageSize }) => {
          loadProducts(currentPage, pageSize, sortBy);
        }}
        itemsPerPageText="Products per page"
      />
    </div>
  );
};
```

### Report Viewer

```tsx
const ReportViewer = () => {
  const [reportData, setReportData] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [loading, setLoading] = useState(false);

  const loadReportPage = async (page, pageSize) => {
    setLoading(true);
    try {
      const response = await api.getReportData({ page, pageSize });
      setReportData(response.data);
      setTotalRecords(response.total);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PaginatedTable
      tableId="report-viewer"
      columns={reportColumns}
      data={loading ? [] : reportData}
      totalRecords={totalRecords}
      defaultPageSize={100}
      itemsPerPage={[50, 100, 250, 500]}
      onPageChange={({ currentPage, pageSize }) => {
        loadReportPage(currentPage, pageSize);
      }}
      noData={loading ? () => <Spinner /> : undefined}
      itemsPerPageText="Records per page"
      paginationAriaText="Report data navigation"
    />
  );
};
```

## Best Practices

1. **Choose Appropriate Page Sizes** - Consider data complexity and user needs
2. **Handle Loading States** - Show loading indicators during data fetching
3. **Optimize API Calls** - Use debouncing for rapid page changes
4. **Provide Context** - Show total records and current range
5. **Test Edge Cases** - Handle empty data, single page, and large datasets
6. **Accessibility** - Ensure keyboard navigation and screen reader support
7. **Performance** - Implement virtualization for very large datasets
8. **State Management** - Use controlled mode for complex applications
9. **URL Synchronization** - Keep pagination state in URL for bookmarking
10. **Error Handling** - Handle API failures gracefully

## Migration Notes

### From older versions:

- Ensure you have the required peer dependencies installed
- The component now requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling
- Component now uses updated SelectInput component
- Focus states and accessibility have been improved
- API has been enhanced with better TypeScript support

## Related Components

- `@fil-react-components/table` - Primary component for tabular data display
- `@fil-react-components/button` - Button components used in pagination controls
- `@fil-react-components/input` - Input component for page number entry
- `@fil-react-components/select-input` - Select component for page size selection
- `@fil-react-components/spinner` - Loading indicator for async operations
