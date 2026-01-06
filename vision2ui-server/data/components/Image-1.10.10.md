# Image Component Documentation

## Overview

The Image component provides responsive image display with support for modern web standards including srcset and sizes attributes for responsive images. It enforces accessibility best practices by requiring alt text and provides proper semantic HTML structure. The component integrates with the theme provider and follows GDS (Global Design System) standards for consistent image handling across applications.

## Package Information

- **Package Name**: `@fil-react-components/image`
- **Version**: 1.10.10
- **Description**: Image Component
- **Main Export**: `dist/index.js`
- **TypeScript Types**: `dist/index.d.ts`

## Installation

```bash
npm install @fil-react-components/image
```

## Peer Dependencies

- `@fil-react-components/theme-provider`: ^1.6.0 || ^2.0.0 || ^3.0.0
- `react`: >= 16.14.0
- `styled-components`: ^5.2.1 || ^6.1.0

## Dependencies

- `@fil-react-components/with-styles`: ^2.7.8
- `prop-types`: 15.8.1

## Dev Dependencies

- `@fil-react-utils/testing`: ^1.12.4

## Exports

```javascript
import Image from '@fil-react-components/image';
```

### Available Exports:

- `Image` (default export) - Main image component

## Component Structure

### Main Component: Image

A responsive image component that provides proper semantic HTML and accessibility features.

### Component Features:

- **Responsive Images**: Support for srcset and sizes attributes
- **Accessibility**: Required alt text for screen readers
- **Semantic HTML**: Proper img element structure
- **Theme Integration**: Styled-components integration with theme provider
- **Dimension Control**: Width and height attribute support
- **Modern Standards**: HTML5 responsive image standards

### Component Hierarchy:

```
Image Component
├── img element
│   ├── src attribute (required)
│   ├── alt attribute (required)
│   ├── srcset attribute (optional)
│   ├── sizes attribute (optional)
│   ├── width/height attributes (optional)
│   └── data-frc attribute
```

## Props

### ImageProps

| Prop            | Type                                             | Default      | Description                                            |
| --------------- | ------------------------------------------------ | ------------ | ------------------------------------------------------ |
| `alt`           | `string`                                         | **Required** | Alternative text for screen readers and accessibility  |
| `src`           | `string`                                         | **Required** | Image source URL                                       |
| `srcset`        | `Array<{size: string, path: string}>`            | -            | Array of image sources for different viewport sizes    |
| `sizes`         | `Array<{size: string, mediaCondition?: string}>` | -            | Media conditions for responsive image loading          |
| `width`         | `string`                                         | `''`         | Image width attribute                                  |
| `height`        | `string`                                         | `''`         | Image height attribute                                 |
| `className`     | `string`                                         | -            | Additional CSS class names                             |
| `...extraProps` | `React.ImgHTMLAttributes<HTMLImageElement>`      | -            | Standard HTML img attributes (loading, decoding, etc.) |

## Usage Examples

### Basic Image Usage

```jsx
import Image from '@fil-react-components/image';

<Image src="https://example.com/image.jpg" alt="A beautiful landscape" />;
```

### Image with Dimensions

```jsx
<Image
  src="https://example.com/photo.jpg"
  alt="Product photo"
  width="320"
  height="240"
/>
```

### Responsive Image with Srcset

```jsx
<Image
  src="https://example.com/image-360.jpg"
  alt="Responsive landscape"
  srcset={[
    { size: '360w', path: 'https://example.com/image-360.jpg' },
    { size: '720w', path: 'https://example.com/image-720.jpg' },
    { size: '1200w', path: 'https://example.com/image-1200.jpg' },
  ]}
  sizes={[
    { size: '100vw', mediaCondition: '(max-width: 30em)' },
    { size: '50vw', mediaCondition: '(max-width: 50em)' },
    { size: 'calc(33vw - 100px)' },
  ]}
/>
```

### Hero Image

```jsx
const HeroSection = () => (
  <section className="hero">
    <Image
      src="https://example.com/hero-image.jpg"
      alt="Welcome to our website"
      width="1200"
      height="600"
      className="hero-image"
    />
    <div className="hero-content">
      <h1>Welcome</h1>
      <p>Discover our amazing products</p>
    </div>
  </section>
);
```

### Product Image Gallery

```jsx
const ProductGallery = ({ product }) => (
  <div className="product-gallery">
    <Image
      src={product.mainImage}
      alt={`${product.name} main image`}
      width="600"
      height="600"
      className="main-product-image"
    />
    <div className="thumbnail-gallery">
      {product.thumbnails.map((thumb, index) => (
        <Image
          key={index}
          src={thumb.src}
          alt={`${product.name} thumbnail ${index + 1}`}
          width="150"
          height="150"
        />
      ))}
    </div>
  </div>
);
```

### Avatar Image

```jsx
const UserAvatar = ({ user }) => (
  <div className="user-avatar">
    <Image
      src={user.avatarUrl || '/default-avatar.jpg'}
      alt={`${user.name}'s avatar`}
      width="64"
      height="64"
      className="avatar-image"
    />
    <span className="user-name">{user.name}</span>
  </div>
);
```

### Article Featured Image

```jsx
const ArticleCard = ({ article }) => (
  <article className="article-card">
    <Image
      src={article.featuredImage}
      alt={article.title}
      width="400"
      height="250"
      className="article-image"
    />
    <div className="article-content">
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
      <a href={article.url}>Read more</a>
    </div>
  </article>
);
```

### Logo Image

```jsx
const SiteHeader = () => (
  <header className="site-header">
    <Image
      src="/logo.png"
      alt="Company Logo"
      width="200"
      height="50"
      className="site-logo"
    />
    <nav>{/* Navigation items */}</nav>
  </header>
);
```

### Background Image Alternative

```jsx
const HeroBanner = ({ title, subtitle, backgroundImage }) => (
  <div className="hero-banner">
    <Image
      src={backgroundImage}
      alt=""
      width="1920"
      height="600"
      className="background-image"
      aria-hidden="true"
    />
    <div className="hero-overlay">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  </div>
);
```

### Image with Loading States

```jsx
const LazyImage = ({ src, alt, width, height }) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    loading="lazy"
    decoding="async"
  />
);
```

### Image Grid Layout

```jsx
import { Grid, Cell } from '@fil-react-components/grid';

const ImageGrid = ({ images }) => (
  <Grid margin>
    {images.map((image, index) => (
      <Cell key={index} sm={12} md={6} lg={4}>
        <Image src={image.src} alt={image.alt} width="400" height="300" />
      </Cell>
    ))}
  </Grid>
);
```

### Image Carousel

```jsx
const ImageCarousel = ({ images, currentIndex }) => (
  <div className="image-carousel">
    <Image
      src={images[currentIndex].src}
      alt={images[currentIndex].alt}
      width="800"
      height="500"
      className="carousel-image"
    />
    <div className="carousel-controls">
      <button>Previous</button>
      <button>Next</button>
    </div>
  </div>
);
```

### Thumbnail Navigation

```jsx
const ImageViewer = ({ images, selectedImage, onSelectImage }) => (
  <div className="image-viewer">
    <div className="main-image">
      <Image
        src={selectedImage.src}
        alt={selectedImage.alt}
        width="800"
        height="600"
      />
    </div>
    <div className="thumbnail-strip">
      {images.map((image, index) => (
        <button
          key={index}
          onClick={() => onSelectImage(index)}
          className={selectedImage === image ? 'active' : ''}
        >
          <Image src={image.src} alt={image.alt} width="100" height="75" />
        </button>
      ))}
    </div>
  </div>
);
```

### Social Media Image

```jsx
const SocialMediaPost = ({ post }) => (
  <div className="social-post">
    <div className="post-header">
      <Image
        src={post.author.avatar}
        alt={`${post.author.name}'s avatar`}
        width="40"
        height="40"
      />
      <span>{post.author.name}</span>
    </div>
    {post.image && (
      <Image
        src={post.image}
        alt={post.caption || 'Post image'}
        width="500"
        height="400"
      />
    )}
    <p>{post.caption}</p>
  </div>
);
```

## Features

### Responsive Images

- **Srcset Support**: Multiple image sources for different screen sizes
- **Sizes Attribute**: Media queries for responsive image loading
- **Modern Standards**: HTML5 responsive image specification compliance

### Accessibility

- **Required Alt Text**: Enforced alt attribute for screen readers
- **Semantic HTML**: Proper img element usage
- **Screen Reader Support**: Accessible image descriptions

### Performance

- **Lazy Loading**: Support for native lazy loading
- **Async Decoding**: Optimized image decoding
- **Dimension Attributes**: Width/height for layout stability

### Theme Integration

- **Styled Components**: Full styled-components integration
- **Theme Provider**: Works with theme provider for consistent styling
- **GDS Standards**: Follows Global Design System guidelines

### Image Optimization

- **Format Support**: Works with all standard image formats
- **Responsive Loading**: Appropriate image size loading based on viewport
- **Performance**: Optimized for fast loading and rendering

### Customization

- **Class Name Support**: Additional CSS classes for styling
- **HTML Attributes**: Full access to standard img attributes
- **Styling Flexibility**: CSS customization through className

## Testing

The component includes:

- Unit tests using Jest with snapshot testing
- Component tests using Playwright
- Accessibility testing with axe-devtools

Run tests:

```bash
npm test
```

## Storybook Stories

The component has Storybook stories demonstrating:

- Basic image usage with different sizes
- Responsive image configurations
- Error handling for missing alt text
- Various image formats and use cases

## Data Attributes

- `data-frc="image"` - Applied to Image img elements

## CSS Classes

- No specific CSS classes - styling handled through styled-components

## Build & Development

### Scripts

```bash
# Run tests
npm test

# Build with SWC
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
```

## File Structure

```
Image/
├── src/
│   ├── Image.jsx             # Main Image component
│   ├── Image.mock.js         # Mock configurations for testing
│   ├── Image.stories.js      # Storybook stories
│   ├── Image.style.js        # Image styling
│   ├── index.d.ts            # TypeScript definitions
│   ├── index.js              # Main exports
│   └── tests/
│       ├── Image.ct.tsx      # Component tests
│       ├── Image.test.tsx    # Unit tests
│       ├── a11y-results/     # Accessibility test results
│       ├── coverage/         # Test coverage reports
│       └── __snapshots__/    # Snapshot files
├── package.json
├── tsconfig.json
├── jest.config.js
└── CHANGELOG.md
```

## Common Use Cases

### Image Component with Fallback

```jsx
const ImageWithFallback = ({ src, alt, fallbackSrc, ...props }) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && fallbackSrc) {
      setImageSrc(fallbackSrc);
      setHasError(true);
    }
  };

  return <Image src={imageSrc} alt={alt} onError={handleError} {...props} />;
};
```

### Progressive Image Loading

```jsx
const ProgressiveImage = ({ src, placeholder, alt, ...props }) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <Image
      src={imageSrc}
      alt={alt}
      className={isLoaded ? 'loaded' : 'loading'}
      {...props}
    />
  );
};
```

### Image Modal/Overlay

```jsx
const ImageModal = ({ image, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <Image src={image.src} alt={image.alt} width="800" height="600" />
      </div>
    </div>
  );
};
```

### Image Comparison Slider

```jsx
const ImageComparison = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="image-comparison">
      <Image
        src={beforeImage.src}
        alt={beforeImage.alt}
        className="before-image"
      />
      <Image
        src={afterImage.src}
        alt={afterImage.alt}
        className="after-image"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      />
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={(e) => setSliderPosition(e.target.value)}
        className="slider"
      />
    </div>
  );
};
```

### Image Upload Preview

```jsx
const ImageUpload = ({ onImageSelect }) => {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target.result);
        onImageSelect(file);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image-upload">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && (
        <Image src={preview} alt="Upload preview" width="200" height="200" />
      )}
    </div>
  );
};
```

### Image Gallery with Lightbox

```jsx
const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className="gallery-item"
          >
            <Image
              src={image.thumbnail}
              alt={image.alt}
              width="200"
              height="150"
            />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <Image
            src={selectedImage.full}
            alt={selectedImage.alt}
            width="800"
            height="600"
          />
        </div>
      )}
    </>
  );
};
```

## Best Practices

1. **Always provide alt text** - Alt text is required and improves accessibility
2. **Use appropriate image formats** - Choose WebP, AVIF for modern browsers, JPEG/PNG as fallbacks
3. **Implement responsive images** - Use srcset and sizes for different screen sizes
4. **Specify dimensions** - Include width and height for layout stability
5. **Optimize image sizes** - Serve appropriately sized images for each device
6. **Consider lazy loading** - Use loading="lazy" for images below the fold
7. **Provide fallbacks** - Handle broken image URLs gracefully
8. **Test across devices** - Ensure images work on all target screen sizes
9. **Compress images** - Optimize file sizes for faster loading
10. **Use semantic alt text** - Describe the image content meaningfully

## Migration Notes

### General Migration:

- Ensure you have the required peer dependencies installed
- The component requires styled-components v5.2.1+ or v6.1.0+
- Theme provider is required for proper styling
- React 16.14.0+ is required

### Recent Updates:

- Added `data-frc` attribute for component identification (v1.10.0)
- Theme provider peer dependency updates for compatibility
- SWC build system replacement (v1.9.0)

### Breaking Changes:

- Alt text is now required (was previously optional)
- Component structure may have changed with styled-components updates
- Verify that your theme provider includes image-related configuration

### From Previous Versions:

- Component API remains consistent
- Props interface maintained
- Required alt prop enforced for accessibility
- Responsive image support unchanged

## Related Components

- `@fil-react-components/theme-provider` - Theme provider for image styling
- `@fil-react-components/card` - Card components that may contain images
- `@fil-react-components/grid` - Grid components for image layouts
- `@fil-react-components/modal` - Modal components for image overlays</content>
  <parameter name="filePath">c:\Users\A744601\Documents\codebase\TAPP101992-fil-react-components\metadata\Image-1.10.10.md
