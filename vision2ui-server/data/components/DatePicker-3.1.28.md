# DatePicker Component Documentation

## Overview

The DatePicker component is a comprehensive date selection component that provides a masked input field with a calendar popup for date selection. It follows the GDS (Global Design System) standards and integrates seamlessly with forms, supporting various locales, date ranges, validation states, and accessibility features. The component wraps react-datepicker with custom styling and enhanced functionality.

## Package Information

- **Package Name**: `@fil-react-components/date-picker`
- **Version**: 3.1.28
- **Description**: DatePicker Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/date-picker
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/box`: ^3.2.8
- `@fil-react-components/button`: ^3.4.2
- `@fil-react-components/formatted-text-input`: ^3.3.6
- `@fil-react-components/label`: ^2.9.11
- `@fil-react-components/paragraph`: ^2.10.9
- `@fil-react-components/select-input`: ^2.17.24
- `@fil-react-components/streamline-icon`: ^2.15.6
- `@fil-react-components/svg-icons`: ^1.9.0
- `@fil-react-components/text-field`: ^2.15.24
- `@fil-react-components/with-styles`: ^2.7.8
- `@fil-react-hooks/unique-id`: ^1.4.3
- `@fil-react-mixins/styled`: ^2.7.1
- `classnames`: ^2.5.1
- `date-fns`: ^4.1.0
- `lodash`: 4.17.21
- `react-datepicker`: ^8.8.0
- `text-mask-addons`: 3.8.0

## Exports

```typescript
import DatePicker, {
  DatePickerVanilla,
} from '@fil-react-components/date-picker';
```

### Available Exports:

- `DatePicker` (default export) - Styled date picker component with full functionality
- `DatePickerVanilla` - Unstyled date picker component for custom styling

## Component Structure

### Main Component: DatePicker

A comprehensive date selection component with masked input and calendar popup.

### Component Features:

1. **Masked Input**: Auto-corrected date input with DD - MM - YYYY format
2. **Calendar Popup**: Interactive calendar for date selection
3. **Locale Support**: Multiple language and regional date formats
4. **Date Ranges**: Min/max date constraints and range selection
5. **Validation**: Error states and form integration
6. **Accessibility**: Full keyboard navigation and screen reader support

### Component Hierarchy:

```
DatePicker
├── Label (optional)
├── Assistive Text (optional)
├── Input Container
│   ├── TextField (masked input)
│   └── Calendar Button
└── Calendar Popup (when open)
    ├── Custom Header (month/year selectors)
    ├── Calendar Grid
    └── Navigation Arrows
```

## Props

### DatePickerProps

Extends `Omit<ReactDatePickerProps, 'selected' | 'onChange' | 'value'>`

| Prop                | Type              | Default                     | Description                                               |
| ------------------- | ----------------- | --------------------------- | --------------------------------------------------------- |
| `className`         | `string`          | -                           | Additional CSS class names                                |
| `yearRange`         | `number[]`        | `[1900, currentYear + 100]` | Range of selectable years                                 |
| `inputProps`        | `TextFieldProps`  | -                           | Props to pass to the input TextField                      |
| `dateFormat`        | `string`          | `'dd - MM - yyyy'`          | Date format for display and parsing                       |
| `value`             | `Date \| string`  | -                           | Selected date value                                       |
| `isControlled`      | `boolean`         | -                           | Whether the component is controlled externally            |
| `locale`            | `string`          | `'en-GB'`                   | Locale string for date formatting                         |
| `localeObject`      | `Locale`          | `enGB`                      | date-fns locale object                                    |
| `onChange`          | `(event) => void` | `noop`                      | Change event handler                                      |
| `minDate`           | `Date`            | -                           | Minimum selectable date                                   |
| `maxDate`           | `Date`            | -                           | Maximum selectable date                                   |
| `id`                | `string`          | -                           | HTML id attribute                                         |
| `label`             | `string`          | -                           | Label text for the input                                  |
| `assistiveText`     | `string`          | -                           | Assistive text below the input                            |
| `required`          | `boolean`         | -                           | Whether the field is required                             |
| `name`              | `string`          | `''`                        | Name attribute for form integration                       |
| `setFormattedValue` | `boolean`         | -                           | Whether to return formatted string instead of Date object |
| `validation`        | `'invalid'`       | -                           | Validation state                                          |
| `disabled`          | `boolean`         | -                           | Whether the input is disabled                             |
| `selected`          | `Date \| string`  | -                           | Selected date (alias for value)                           |
| `aria-labelledby`   | `string`          | -                           | ARIA labelledby attribute                                 |

## Usage Examples

### Basic DatePicker

```tsx
import DatePicker from '@fil-react-components/date-picker';

<DatePicker label="Select Date" assistiveText="DD - MM - YYYY" />;
```

### Controlled DatePicker

```tsx
const [selectedDate, setSelectedDate] = useState(new Date());

<DatePicker
  label="Birth Date"
  value={selectedDate}
  onChange={({ target: { value } }) => setSelectedDate(value)}
  isControlled
/>;
```

### Date Range Selection

```tsx
const [startDate, setStartDate] = useState(null);
const [endDate, setEndDate] = useState(null);

<DatePicker
  label="Start Date"
  value={startDate}
  onChange={({ target: { value } }) => setStartDate(value)}
  selectsStart
  startDate={startDate}
  endDate={endDate}
  isControlled
/>

<DatePicker
  label="End Date"
  value={endDate}
  onChange={({ target: { value } }) => setEndDate(value)}
  selectsEnd
  startDate={startDate}
  endDate={endDate}
  minDate={startDate}
  isControlled
/>
```

### With Date Constraints

```tsx
<DatePicker
  label="Future Date"
  minDate={new Date()}
  maxDate={addDays(new Date(), 30)}
/>
```

### Custom Date Format

```tsx
<DatePicker label="US Format" dateFormat="MM/dd/yyyy" locale="en-US" />
```

### With Validation

```tsx
<DatePicker
  label="Required Date"
  required
  validation={hasError ? 'invalid' : undefined}
/>
```

### Different Locales

```tsx
import { ja } from 'date-fns/locale';

<DatePicker
  label="Japanese Date"
  locale="ja-JP"
  localeObject={ja}
  dateFormat="yyyy/MM/dd"
/>;
```

### Formatted Value Output

```tsx
<DatePicker
  label="Formatted Output"
  setFormattedValue
  onChange={({ target: { value } }) => {
    // value will be a formatted string like "25 - 12 - 2023"
    console.log('Formatted date:', value);
  }}
/>
```

### Custom Year Range

```tsx
<DatePicker label="Historical Date" yearRange={[1800, 2100]} />
```

### With Placeholder

```tsx
<DatePicker
  label="Event Date"
  inputProps={{
    placeholder: 'Choose event date',
  }}
/>
```

## Features

### Input Masking

- **Auto-correction**: Automatically formats input as DD - MM - YYYY
- **Validation**: Prevents invalid date entry
- **User-friendly**: Guides user input with visual separators

### Calendar Interface

- **Month/Year Navigation**: Custom header with dropdown selectors
- **Keyboard Navigation**: Full keyboard support for calendar navigation
- **Visual Feedback**: Today highlighting and selection states
- **Responsive Design**: Adapts to different screen sizes

### Localization

- **Multiple Locales**: Support for different languages and regions
- **Date Formatting**: Configurable date display formats
- **Cultural Adaptation**: Proper date conventions per locale

### Form Integration

- **Controlled/Uncontrolled**: Supports both patterns
- **Validation States**: Error indication and styling
- **Accessibility**: Proper ARIA attributes and labels
- **Form Events**: onChange, onBlur with standard event format

### Date Constraints

- **Min/Max Dates**: Restrict selectable date ranges
- **Range Selection**: Start/end date coordination
- **Dynamic Constraints**: Min date can depend on other selections

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

- Basic date picker configurations
- Date range selection
- Different locales and formats
- Validation states
- Disabled and required states
- Custom year ranges
- Formatted value output

## Data Attributes

- `data-frc="date-picker"` - Applied to the date picker container

## CSS Classes

- `fil-datepicker` - Main date picker container
- `fil-datepicker__input` - Input container with text field and calendar button
- `fil-datepicker__icon` - Calendar button
- `fil-datepicker__label` - Label element
- `fil-datepicker__assistive-text` - Assistive text element
- `fil-datepicker__header` - Calendar header
- `fil-datepicker__year-list` - Year selector dropdown
- `fil-datepicker__arrows` - Month navigation arrows
- `fil-datepicker__arrow` - Individual navigation arrow
- `fil-datepicker__chevron-down` - Dropdown chevron icon

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
DatePicker/
├── src/
│   ├── DatePicker.mock.tsx         # Mock configurations for testing
│   ├── DatePicker.stories.tsx      # Storybook stories
│   ├── DatePicker.style.ts         # Styled-components styles
│   ├── DatePicker.tsx              # Main date picker component
│   ├── DatePicker.utils.ts         # Utility functions
│   ├── ReactDatePicker.style.ts    # React-datepicker overrides
│   ├── index.ts                    # Main exports
│   └── tests/
│       ├── DatePicker.ct.tsx       # Component tests
│       ├── DatePicker.test.tsx     # Unit tests
│       └── DatePickerWrapper.tsx   # Test wrapper
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Form Date Fields

```tsx
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    birthDate: null,
    startDate: null,
  });

  const handleDateChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  return (
    <form>
      <DatePicker
        label="Date of Birth"
        name="birthDate"
        value={formData.birthDate}
        onChange={handleDateChange('birthDate')}
        maxDate={new Date()}
        required
        isControlled
      />

      <DatePicker
        label="Employment Start Date"
        name="startDate"
        value={formData.startDate}
        onChange={handleDateChange('startDate')}
        isControlled
      />
    </form>
  );
};
```

### Date Range Picker

```tsx
const DateRangePicker = () => {
  const [dateRange, setDateRange] = useState({
    start: null,
    end: null,
  });

  return (
    <div>
      <DatePicker
        label="Check-in Date"
        value={dateRange.start}
        onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
        selectsStart
        startDate={dateRange.start}
        endDate={dateRange.end}
        isControlled
      />

      <DatePicker
        label="Check-out Date"
        value={dateRange.end}
        onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
        selectsEnd
        startDate={dateRange.start}
        endDate={dateRange.end}
        minDate={dateRange.start}
        isControlled
      />
    </div>
  );
};
```

### Localized Date Picker

```tsx
const LocalizedDatePicker = () => {
  const [locale, setLocale] = useState('en-GB');

  const localeConfigs = {
    'en-GB': { locale: 'en-GB', format: 'dd - MM - yyyy' },
    'en-US': { locale: 'en-US', format: 'MM/dd/yyyy' },
    'ja-JP': { locale: 'ja-JP', format: 'yyyy/MM/dd' },
  };

  return (
    <DatePicker
      label="Localized Date"
      locale={localeConfigs[locale].locale}
      dateFormat={localeConfigs[locale].format}
    />
  );
};
```

### Booking System

```tsx
const BookingForm = () => {
  const [booking, setBooking] = useState({
    checkIn: null,
    checkOut: null,
    guests: 1,
  });

  const today = new Date();
  const maxDate = addDays(today, 365); // Book up to 1 year in advance

  return (
    <div>
      <DatePicker
        label="Check-in Date"
        value={booking.checkIn}
        onChange={(e) => setBooking({ ...booking, checkIn: e.target.value })}
        minDate={today}
        maxDate={maxDate}
        isControlled
      />

      <DatePicker
        label="Check-out Date"
        value={booking.checkOut}
        onChange={(e) => setBooking({ ...booking, checkOut: e.target.value })}
        minDate={booking.checkIn || today}
        maxDate={maxDate}
        isControlled
      />
    </div>
  );
};
```

## Best Practices

1. **Use appropriate constraints**: Set min/max dates to prevent invalid selections
2. **Provide clear labels**: Always include descriptive labels and assistive text
3. **Consider locale**: Match date format to user expectations
4. **Handle controlled state**: Use isControlled prop for external state management
5. **Validate dates**: Implement client and server-side validation
6. **Test accessibility**: Ensure keyboard navigation works properly
7. **Consider mobile**: Date picker should work well on touch devices
8. **Provide feedback**: Show validation errors clearly
9. **Use consistent formatting**: Maintain date format consistency across the application
10. **Handle edge cases**: Consider timezone and daylight saving time issues

## Migration Notes

### General Migration:

- Ensure you have the required peer dependencies installed
- The component requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper color theming
- React 16.14.0+ is required
- date-fns v4.1.0+ is required for locale support

### Recent Updates:

- React-datepicker upgraded to v8.8.0 with DOM alignment fixes
- Focus outline improvements
- Month label alignment fixes
- Today date underline fixes for edge cases

## Related Components

- `@fil-react-components/text-field` - Base input component
- `@fil-react-components/label` - Label component
- `@fil-react-components/select-input` - Dropdown component used in calendar header
- `@fil-react-components/button` - Button component for calendar navigation
- `@fil-react-components/theme-provider` - Theme provider for styling</content>
  <parameter name="filePath">c:\Users\A744601\Documents\codebase\TAPP101992-fil-react-components\metadata\DatePicker-3.1.28.md
