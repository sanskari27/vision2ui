# How to Use Components - AI Agent Guide

This guide provides comprehensive instructions for AI agents on how to use the FIL React Components library (`@fil-react-components`) when generating UI code.

## Table of Contents

1. [Component Structure](#component-structure)
2. [NPM Dependencies](#npm-dependencies)
3. [Static Content](#static-content)
4. [Component Usage Patterns](#component-usage-patterns)
5. [Styling Guidelines](#styling-guidelines)
6. [Responsive Design](#responsive-design)
7. [Storybook Integration](#storybook-integration)
8. [Best Practices](#best-practices)

---

## Component Structure

### Standard Component File Organization

All UI components follow a consistent file structure pattern:

```text
/public                          # assets folder
/spec                            # Component Tests along with accessibility tests
/src                             # all components are created here
   <MainContainerName>.tsx
   index.tsx
   <MainContainerName>.spec.tsx
   <MainContainerName>.mock.ts
   <MainContainerName>.stories.tsx
   <MainContainerName>.content.ts
   bootstrap.tsx
   <MainContainerName>.types.ts
   __snapshots__
   /child-component1              # kebab case
       ChildComponent1.tsx        # camel case
       ChildComponent1.spec.tsx
       ChildComponent1.mock.ts   # add mocks for unit tests here
       ChildComponent1.stories.tsx
       ChildComponent1.content.ts
       ChildComponent1.types.ts
       index.tsx
       __snapshots__
   /child-component2             # kebab case
       ChildComponent2.tsx        # camel case
       ChildComponent2.spec.tsx
       ChildComponent2.mock.ts
       ChildComponent2.stories.tsx
       ChildComponent2.content.ts
       ChildComponent2.types.ts
       index.tsx
       services
          <ServiceName>.ts
          <ServiceName>.spec.ts  # unit tests
          <ServiceName>.mock.ts  # add mocks for unit tests here
       __snapshots__
       /child-component3         # kebab case
           ChildComponent3.tsx    # camel case
           ChildComponent3.spec.tsx
           ChildComponent3.mock.ts
           ChildComponent3.stories.tsx
           ChildComponent3.content.ts
           ChildComponent3.types.ts
           index.tsx
           __snapshots__
   services
       <ServiceName>.ts
       <ServiceName>.spec.ts     # unit tests
       <ServiceName>.mock.ts     # add mocks for unit tests here
/terraform
   .terraform.lock.hcl           # commit the lock file
   terraform.tf
   provider.tf
   vars.tf
   terraform.tfvars
craco.config.ts
jest.config.ts
package.json
playwright.config.mjs
README.md
stryker.config.mjs
tsconfig.json
.npmignore
```

### Key Naming Conventions

- **Directory names**: Use kebab-case (e.g., `child-component1`)
- **Component file names**: Use PascalCase (e.g., `ChildComponent1.tsx`)
- **Service files**: Use PascalCase (e.g., `UserService.ts`)
- **Type files**: Use PascalCase with `.types.ts` suffix (e.g., `Button.types.ts`)
- **Content files**: Use PascalCase with `.content.ts` suffix (e.g., `Button.content.ts`)

### Component File Types

1. **Main Component** (`<ComponentName>.tsx`): The primary component implementation
2. **Index** (`index.tsx`): Export file for the component
3. **Types** (`<ComponentName>.types.ts`): TypeScript type definitions
4. **Content** (`<ComponentName>.content.ts`): Static content and text
5. **Stories** (`<ComponentName>.stories.tsx`): Storybook stories for component documentation
6. **Spec** (`<ComponentName>.spec.tsx`): Component tests
7. **Mock** (`<ComponentName>.mock.ts`): Mock data for testing
8. **Bootstrap** (`bootstrap.tsx`): Component initialization and setup

---

## NPM Dependencies

### Dependency Management Rules

1. **All 3rd party packages** (express, react, jest, etc.) and `@fil-react-components/*` packages should be added to the root `package.json` for reuse across micro-frontends (MFEs).

2. **Common libraries** must be added to the `dependencies` section in your `package.json`.

3. **Peer Dependencies**: Most `@fil-react-components` require:

   - `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
   - `react`: >= 16.14.0
   - `styled-components`: ^5.2.1 || ^6.1.0

4. **Version Management**: The engineering community regularly checks for missing or outdated dependencies. Keep dependencies up to date and correctly listed to avoid build and runtime issues.

### Installation Pattern

When using a component, install it from the `@fil-react-components` namespace:

```bash
npm install @fil-react-components/button
npm install @fil-react-components/card
npm install @fil-react-components/form
```

### Import Pattern

Always import components from their package:

```tsx
// ✅ Correct
import Button from '@fil-react-components/button';
import Card from '@fil-react-components/card';
import Form, { withField } from '@fil-react-components/form';

// ❌ Incorrect - Don't use relative imports for component library
import Button from '../../../components/Button';
```

---

## Static Content

### Content File Structure

Static content required in a component should be added in `<componentName>.content.ts` in the same directory as the component. The content is added under a typed object, with types defined in `<componentName>.types.ts`.

### Content Pattern

- Create `<componentName>.content.ts` file with typed content object
- Define types in `<componentName>.types.ts`
- Import and use content in the component
- Content is deployed along with the component in the same GitHub workflow

---

## Component Usage Patterns

### Import Pattern

Always import components from their `@fil-react-components` package:

```tsx
// ✅ Correct - Import from package
import Button from '@fil-react-components/button';
import Card from '@fil-react-components/card';
import Form, { withField } from '@fil-react-components/form';
import { Grid, Cell } from '@fil-react-components/grid';

// ❌ Incorrect - Don't use relative imports
import Button from '../../../components/Button';
```

### Component Usage Guidelines

1. **Refer to Component Documentation**: Each component has detailed documentation in `data/components/` folder with:

   - Available props and types
   - Usage examples
   - Component variations
   - Integration patterns

2. **Form Components**: When using form fields with the Form component, wrap them with `withField` HOC:

   ```tsx
   import Form, { withField } from '@fil-react-components/form';
   import TextField from '@fil-react-components/text-field';

   const TextInput = withField(TextField);
   ```

3. **Component Variations**: Many components support variations (e.g., `variation="primary"` for Button). Check component docs for available options.

4. **Grid System**: Use Grid and Cell components for responsive layouts:

   ```tsx
   import { Grid, Cell } from '@fil-react-components/grid';
   // Use responsive props: xs, sm, md, lg, xl
   ```

5. **Theme Provider**: Ensure components are wrapped with ThemeProvider for proper styling.

---

## Styling Guidelines

### Critical Styling Rules

1. **Minimize Inline Styles**: Avoid using inline styles (`style={{ ... }}`) whenever possible. Use Tailwind CSS classes or styled-components instead.

2. **Prefer Tailwind Classes**: When styling is needed, use Tailwind CSS utility classes.

3. **Use Theme Provider**: Components are designed to work with the theme provider. Ensure your app is wrapped with `ThemeProvider`.

### Styling Patterns

- **✅ Use Tailwind Classes**: Prefer Tailwind utility classes for styling
- **✅ Use Component Props**: Many components accept styling props like `className`, `size`, `variation`, `background`
- **❌ Avoid Inline Styles**: Minimize use of `style={{ ... }}` prop
- **✅ Styled Components**: Use styled-components when complex theming is needed

### Tailwind Class Usage

When using Tailwind classes, follow these patterns:

- **Layout**: `flex`, `grid`, `block`, `inline-block`
- **Spacing**: `p-4`, `m-2`, `px-6`, `py-4`, `gap-4`
- **Typography**: `text-xl`, `font-semibold`, `text-gray-800`
- **Colors**: `bg-white`, `text-blue-600`, `border-gray-300`
- **Responsive**: `md:flex`, `lg:grid-cols-3`, `sm:hidden`

### Component Styling Props

Many components accept styling props:

- `className`: Additional CSS classes
- `size`: Size variants (`'small'`, `'standard'`, `'medium'`, `'large'`)
- `variation`: Style variations (component-specific)
- `background`: Theme color paths (e.g., `'grey.025'`, `'blue.050'`)

---

## Responsive Design

### Responsive Guidelines

1. **Always make components responsive** - Components should work well on mobile, tablet, and desktop devices.

2. **Use Grid System** - Leverage the Grid and Cell components for responsive layouts with breakpoint props (`xs`, `sm`, `md`, `lg`, `xl`)

3. **Breakpoint System**: The grid system uses standard breakpoints:
   - `xs`: Extra small devices (default)
   - `sm`: Small devices (≥576px)
   - `md`: Medium devices (≥768px)
   - `lg`: Large devices (≥992px)
   - `xl`: Extra large devices (≥1200px)

### Responsive Patterns

- **Grid System**: Use `Cell` component with responsive props (`xs`, `sm`, `md`, `lg`, `xl`) for layout
- **Tailwind Classes**: Use responsive utilities like `md:flex`, `lg:grid-cols-3`, `sm:hidden`
- **Component Props**: Some components accept responsive props or size variants

### Mobile-First Approach

- Design for mobile first, then enhance for larger screens
- Test components on different screen sizes
- Use responsive utilities from Tailwind or the Grid system
- Ensure touch targets are at least 44x44px on mobile

---

## Storybook Integration

### Storybook Purpose

Storybook provides an isolated iframe to render components without interference from business logic and context. This is useful for:

- Component development and testing
- Design system documentation
- Visual regression testing
- Component showcase

### Story File Structure

Each component should have a corresponding `.stories.tsx` file following Storybook patterns. Stories should demonstrate:

- All component variations
- Different states (disabled, loading, error, etc.)
- Size variations
- Common use cases
- Integration with other components

---

## Best Practices

### Component Selection

1. **Choose the right component**: Review available components before creating custom ones
2. **Check component documentation**: Each component has detailed documentation in the `data/components/` folder
3. **Use component variations**: Many components have built-in variations (primary, secondary, etc.)

### Form Handling

1. **Always use `withField` HOC**: When using form fields with the Form component, wrap them with `withField`
2. **Provide validation**: Use Yup schemas or custom validation functions
3. **Handle errors properly**: Let the Form component handle error display
4. **Use appropriate field types**: Choose TextField, SelectBox, DatePicker, etc., based on input type

### Accessibility

1. **Provide labels**: Always include labels for form fields
2. **Use semantic HTML**: Prefer semantic elements over divs
3. **ARIA attributes**: Components include ARIA attributes, but add custom ones when needed
4. **Keyboard navigation**: Ensure all interactive elements are keyboard accessible
5. **Alt text**: Always provide alt text for images

### Performance

1. **Lazy load components**: Use React.lazy() for code splitting when appropriate
2. **Memoize expensive computations**: Use useMemo and useCallback when needed
3. **Avoid unnecessary re-renders**: Use React.memo for pure components
4. **Optimize images**: Use appropriate image formats and sizes

### Code Quality

1. **TypeScript**: Always use TypeScript for type safety
2. **Error handling**: Implement proper error boundaries and error handling
3. **Testing**: Write tests for components (unit tests and component tests)
4. **Documentation**: Add JSDoc comments for complex components
5. **Consistent naming**: Follow the naming conventions outlined in this guide

### Component Composition

1. **Compose, don't duplicate**: Build complex UIs by composing simpler components
2. **Reuse components**: Use existing components rather than creating new ones
3. **Props drilling**: Avoid excessive prop drilling; use context when appropriate
4. **Single responsibility**: Each component should have a single, clear purpose

---

## Component Documentation Reference

Each component in the library has detailed documentation available in the `data/components/` folder. The documentation includes:

- Package information and installation
- Props and types
- Usage examples
- Best practices
- Related components
- Migration notes

When using a component, refer to its specific documentation file for detailed information about:

- Available props and their types
- Component variations
- Integration patterns
- Common use cases
- Accessibility features

---

## Summary Checklist

When generating code using components, ensure:

- [ ] Components are imported from `@fil-react-components/*` packages
- [ ] Required peer dependencies are installed
- [ ] Components are wrapped with `ThemeProvider` when needed
- [ ] Form fields use `withField` HOC when used with Form component
- [ ] Inline styles are minimized; Tailwind classes are preferred
- [ ] Components are responsive (use Grid system or Tailwind responsive classes)
- [ ] Accessibility is considered (labels, alt text, ARIA attributes)
- [ ] TypeScript types are properly defined
- [ ] Error handling is implemented
- [ ] Components follow the naming conventions
- [ ] Static content is placed in `.content.ts` files
- [ ] Component structure follows the standard file organization

---

This guide should be referenced whenever generating code that uses components from the `@fil-react-components` library. For specific component details, refer to the individual component documentation files in the `data/components/` folder.
