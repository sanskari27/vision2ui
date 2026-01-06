# Card Component Documentation

## Overview

The Card component is a versatile, accessible content container that supports images, videos, icons, and call-to-action buttons. It follows the GDS (Global Design System) standards and integrates seamlessly with the grid system for responsive layouts. Cards can display various media types including static images, playable videos, and icons, with support for categories, headlines, subtext, and customizable CTAs.

## Package Information

- **Package Name**: `@fil-react-components/card`
- **Version**: 2.14.9
- **Description**: Card Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/card
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/anchor`: ^2.15.2
- `@fil-react-components/button`: ^3.4.2
- `@fil-react-components/grid`: ^2.9.11
- `@fil-react-components/heading`: ^2.11.10
- `@fil-react-components/image`: ^1.10.10
- `@fil-react-components/paragraph`: ^2.10.9
- `@fil-react-components/streamline-icon`: ^2.15.6
- `@fil-react-components/svg-icons`: ^1.9.0
- `@fil-react-mixins/styled`: ^2.7.1
- `classnames`: ^2.5.1
- `lodash`: 4.17.21

## Exports

```typescript
import Card, { CardProps } from '@fil-react-components/card';
```

### Available Exports:

- `Card` (default export) - Main card component with full functionality
- `CardProps` (type export) - TypeScript interface for Card component props

## Component Structure

### Main Component: Card

The Card component is a styled wrapper around the Grid Cell component, providing a flexible content container with support for various media types and interactive elements.

### Component Features:

1. **Media Support** - Images, videos (with modal playback), and icons
2. **Content Hierarchy** - Category, headline, subtext, and custom children
3. **Call-to-Action** - Configurable CTA button with multiple variations
4. **Responsive Design** - Inherits grid system responsiveness
5. **Accessibility** - Proper ARIA labels and keyboard navigation

### Component Hierarchy:

```
Card (extends Cell)
├── Image/Video/Icon Media
├── Content Area
│   ├── Category (optional)
│   ├── Headline (clickable if URL provided)
│   ├── Subtext (optional)
│   ├── Custom Children
│   └── CTA Button (optional)
└── Badge Overlay (optional)
```

## Props

### CardProps

Extends `CellProps` from `@fil-react-components/grid`

| Prop               | Type                                               | Default      | Description                                      |
| ------------------ | -------------------------------------------------- | ------------ | ------------------------------------------------ |
| `children`         | `React.ReactNode`                                  | -            | Additional content to render in the card         |
| `cta`              | `string`                                           | -            | Call-to-action button text                       |
| `ctaProps`         | `Object`                                           | `{}`         | Props to pass to the CTA button                  |
| `className`        | `string`                                           | -            | Additional CSS class names                       |
| `image`            | `string`                                           | -            | Image source URL for card image                  |
| `videoUrl`         | `string`                                           | -            | Video source URL for card video                  |
| `videoImageUrl`    | `string`                                           | -            | Thumbnail image URL for video                    |
| `isIframeVideo`    | `boolean`                                          | -            | Whether video is an iframe embed                 |
| `playVideoInModal` | `boolean`                                          | -            | Whether to play video in a modal overlay         |
| `alt`              | `string`                                           | -            | Alt text for image/video/icon                    |
| `category`         | `string`                                           | -            | Category text displayed above headline           |
| `categoryProps`    | `Object`                                           | `{}`         | Props for category anchor element                |
| `headline`         | `string \| Function`                               | -            | Main headline text or render function (required) |
| `headlineType`     | `string`                                           | -            | HTML element type for headline                   |
| `subtext`          | `string`                                           | -            | Subtitle/description text                        |
| `ctaType`          | `'primary' \| 'secondary' \| 'tertiary' \| 'link'` | `'primary'`  | CTA button variation                             |
| `icon`             | `React.ComponentType`                              | -            | Icon component to display                        |
| `url`              | `string`                                           | -            | URL for headline link                            |
| `target`           | `string`                                           | -            | Link target attribute                            |
| `background`       | `string`                                           | `'grey.025'` | Background color theme path                      |
| `badge`            | `React.ReactNode`                                  | -            | Badge content to overlay on image                |

## Usage Examples

### Basic Card

```tsx
import Card from '@fil-react-components/card';

<Card
  headline="Card Title"
  subtext="This is a description of the card content."
  lg={6}
/>;
```

### Card with Image

```tsx
<Card
  headline="Card with Image"
  subtext="Cards can display images at the top."
  image="https://example.com/image.jpg"
  alt="Descriptive alt text"
  lg={6}
/>
```

### Card with Video

```tsx
<Card
  headline="Card with Video"
  subtext="Click the play button to watch the video."
  videoUrl="https://example.com/video.mp4"
  videoImageUrl="https://example.com/thumbnail.jpg"
  alt="Video thumbnail"
  playVideoInModal={true}
  lg={6}
/>
```

### Card with Icon

```tsx
import AnalyticsGraphBar from '@fil-react-components/svg-icons/dist/AnalyticsGraphBar';

<Card
  headline="Card with Icon"
  subtext="Icons can be displayed prominently."
  icon={AnalyticsGraphBar}
  alt="Analytics icon"
  lg={6}
/>;
```

### Card with Category and CTA

```tsx
<Card
  category="News"
  categoryProps={{ href: '/news' }}
  headline="Breaking News Headline"
  subtext="Detailed description of the news item."
  cta="Read More"
  ctaProps={{ onClick: handleReadMore }}
  ctaType="primary"
  url="/news/article"
  lg={6}
/>
```

### Card with Custom Background

```tsx
<Card
  headline="Custom Background Card"
  subtext="Cards support different background colors."
  background="blue.050"
  lg={6}
/>
```

### Card with Badge

```tsx
<Card
  headline="Card with Badge"
  subtext="Badges can be overlaid on images."
  image="https://example.com/image.jpg"
  badge={<span>New</span>}
  lg={6}
/>
```

### Card with Custom Headline

```tsx
import UnsafeHtml from '@fil-react-components/unsafe-html';

<Card
  headline={() => (
    <UnsafeHtml>{'<span>Custom <strong>Headline</strong></span>'}</UnsafeHtml>
  )}
  subtext="Headlines can be custom rendered."
  lg={6}
/>;
```

### Card with Children

```tsx
<Card headline="Card with Children" lg={6}>
  <p>Additional content can be passed as children.</p>
  <ul>
    <li>List item 1</li>
    <li>List item 2</li>
  </ul>
</Card>
```

## Features

### Media Support

- **Images**: Static images with responsive sizing
- **Videos**: HTML5 video or iframe embeds with modal playback
- **Icons**: Large SVG icons with customizable sizing
- **Badges**: Overlay content on images

### Content Flexibility

- **Categories**: Optional category links above headlines
- **Headlines**: Text or custom render functions with optional linking
- **Subtext**: Description content with paragraph styling
- **Custom Children**: Arbitrary React content

### Call-to-Action

- **Button Variations**: Primary, secondary, tertiary, and link styles
- **Custom Props**: Pass any button props through ctaProps
- **Event Handling**: Click handlers and navigation

### Responsive Design

- **Grid Integration**: Inherits Cell props for responsive behavior
- **Flexible Layout**: Content adapts to container size
- **Touch Friendly**: Appropriate sizing for mobile devices

### Accessibility

- **Alt Text**: Required for images and meaningful for videos/icons
- **ARIA Labels**: Proper labeling for interactive elements
- **Keyboard Navigation**: Video controls and links accessible
- **Screen Reader Support**: Semantic markup and descriptions

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

- Basic card layouts
- Image and video integration
- Icon display
- Category and CTA variations
- Custom backgrounds and badges
- HTML content and custom headlines

## Data Attributes

- `data-frc="card"` - Applied to the card container

## CSS Classes

- `fil-card` - Main card container class
- `fil-card__image` - Image container
- `fil-card__image-badge` - Badge overlay on images
- `fil-card__video-wrapper` - Video container
- `fil-card__play-icon` - Video play button
- `fil-card__close-icon` - Video modal close button
- `fil-card__content` - Main content area
- `fil-card__icon` - Icon container
- `fil-card__title` - Headline container
- `fil-card__headline` - Headline link/text
- `fil-card__category` - Category link
- `fil-card__subtext` - Subtitle text
- `fil-card__desc` - Description area
- `fil-card__cta` - Call-to-action button

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
Card/
├── src/
│   ├── Card.mock.tsx             # Mock data for testing
│   ├── Card.stories.tsx          # Storybook stories
│   ├── Card.style.ts             # Styled-components styles
│   ├── Card.tsx                  # Main card component
│   ├── index.ts                  # Main exports
│   └── tests/
│       ├── assets/               # Test assets
│       ├── Card.ct.tsx           # Component tests
│       ├── Card.test.tsx         # Unit tests
│       └── CardWrapper.tsx       # Test wrapper
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Content Cards

```tsx
// News article cards
<Card
  image={article.image}
  category="News"
  categoryProps={{ href: '/news' }}
  headline={article.title}
  subtext={article.excerpt}
  cta="Read Article"
  url={article.url}
  lg={4}
/>
```

### Product/Service Cards

```tsx
// Service offering cards
<Card
  icon={ServiceIcon}
  headline="Investment Planning"
  subtext="Comprehensive financial planning services."
  cta="Learn More"
  ctaProps={{ onClick: () => navigate('/services/investment') }}
  lg={6}
/>
```

### Video Gallery

```tsx
// Video content cards
<Card
  videoUrl={video.url}
  videoImageUrl={video.thumbnail}
  headline={video.title}
  subtext={video.description}
  playVideoInModal={true}
  lg={6}
/>
```

### Feature Highlights

```tsx
// Feature showcase cards
<Card
  icon={FeatureIcon}
  headline="Advanced Analytics"
  subtext="Get insights with our powerful analytics tools."
  background="blue.025"
  lg={4}
/>
```

## Best Practices

1. **Always provide alt text** - Images, videos, and icons need descriptive alt text for accessibility
2. **Use appropriate CTA types** - Primary for main actions, secondary for alternatives, link for navigation
3. **Keep content concise** - Headlines and subtext should be brief and impactful
4. **Consider responsive behavior** - Test cards across different grid breakpoints
5. **Use categories sparingly** - Categories work best when consistently applied across card sets
6. **Provide meaningful CTAs** - CTA text should clearly indicate the action
7. **Test video functionality** - Ensure videos work in both modal and inline modes
8. **Maintain aspect ratios** - Use consistent image/video dimensions for visual harmony

## Migration Notes

### From version 2.13.x to 2.14.x:

- Added flexibility for different background colors via the `background` prop
- Background prop accepts theme color paths (e.g., 'grey.025', 'blue.050')

### General Migration:

- The component requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper color theming
- React 16.14.0+ is required
- Grid system integration requires @fil-react-components/grid

## Related Components

- `@fil-react-components/grid` - Grid system for responsive layouts
- `@fil-react-components/button` - CTA button component
- `@fil-react-components/image` - Image display component
- `@fil-react-components/heading` - Headline typography
- `@fil-react-components/paragraph` - Text content
- `@fil-react-components/anchor` - Link component
- `@fil-react-components/streamline-icon` - Icon display
- `@fil-react-components/theme-provider` - Theme and styling</content>
  <parameter name="filePath">c:\Users\A744601\Documents\codebase\TAPP101992-fil-react-components\metadata\Card-2.14.9.md
