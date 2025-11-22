# Image Mapping Documentation

This document maps all images used in the Orca Circle project, including their locations, usage, and references.

## 📁 Local Images (public/images/)

### 1. `logo.png`
- **Location**: `public/images/logo.png`
- **Used in**: `components/Header.tsx` (line 82)
- **Usage**: Main site logo displayed in the header navigation
- **Implementation**:
  ```tsx
  <Image
    src="/images/logo.png"
    alt="Trust Reach Club"
    width={120}
    height={40}
    className="h-8 sm:h-10 w-auto"
    priority
  />
  ```
- **Status**: ✅ Active

### 2. `og-image.png`
- **Location**: `public/images/og-image.png`
- **Used in**: `app/layout.tsx` (lines 30, 41)
- **Usage**: Open Graph and Twitter card image for social media sharing
- **Implementation**:
  ```tsx
  // OpenGraph metadata
  images: [{
    url: 'https://trustreach.club/images/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Trust Reach Club',
  }]
  
  // Twitter metadata
  images: ['https://trustreach.club/images/og-image.png']
  ```
- **Status**: ✅ Active

### 3. `favicon.png`
- **Location**: `public/images/favicon.png`
- **Used in**: Not currently referenced in code (may be used via Next.js convention)
- **Usage**: Browser favicon (typically auto-detected by Next.js from public folder)
- **Status**: ⚠️ Present but not explicitly referenced

---

## 🌐 External Images

### 4. Avatar Images (ui-avatars.com)
- **Service**: `https://ui-avatars.com/api/`
- **Used in**: `components/Testimonials.tsx` (lines 21-27, 31-67)
- **Configuration**: Allowed in `next.config.js` (lines 6-9)
- **Usage**: Dynamically generated avatar images for testimonials
- **Implementation**:
  ```tsx
  const getAvatarUrl = (name: string) => {
    if (name === "Prabhu") {
      return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=56&background=3B82F6&color=fff&bold=true&rounded=true`;
    }
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=56&background=random&color=fff&bold=true&rounded=true`;
  };
  ```
- **Testimonials using avatars**:
  1. Kumar
  2. Priyanka
  3. Shan Walsh
  4. Hemalatha
  5. Prabhu (custom blue background)
  6. Sugavanesh
  7. Nandhini
- **Status**: ✅ Active

### 5. GitHub Avatars (avatars.githubusercontent.com)
- **Service**: `https://avatars.githubusercontent.com`
- **Used in**: Not currently used
- **Configuration**: Allowed in `next.config.js` (lines 10-13)
- **Status**: ⚠️ Configured but not used

---

## 🧩 Image Components

### 6. StoryImage Component
- **Location**: `components/Stories.tsx` (lines 129-144)
- **Type**: Generic reusable component
- **Usage**: For displaying images in story cards
- **Current Usage**: Not actively used with actual images in `StoriesSection.tsx`
- **Status**: ⚠️ Component exists but not used with images

### 7. AvatarImage Component
- **Location**: `components/ui/avatar.tsx` (lines 21-31)
- **Type**: Generic reusable component (shadcn/ui)
- **Usage**: For displaying user avatars with fallback
- **Current Usage**: Used in `Stories.tsx` via `StoryAuthorImage` component
- **Status**: ✅ Active (as part of Stories component system)

---

## 📊 Summary

| Image Type | Count | Status | Location |
|------------|-------|--------|----------|
| Local Static Images | 3 | 2 active, 1 unused | `public/images/` |
| External Avatar Images | 7+ | Active | `ui-avatars.com` |
| Image Components | 2 | 1 active, 1 unused | `components/` |

---

## 🔍 Image Configuration

### Next.js Image Configuration
**File**: `next.config.js`

```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'ui-avatars.com',
    },
    {
      protocol: 'https',
      hostname: 'avatars.githubusercontent.com',
    },
  ],
}
```

### Global CSS Image Styles
**File**: `app/globals.css` (lines 73-77)

```css
/* Ensure all images are responsive */
img {
  max-width: 100%;
  height: auto;
}
```

---

## 📝 Notes

1. **Favicon**: The `favicon.png` file exists but is not explicitly referenced. Next.js may auto-detect it from the public folder, but consider adding explicit favicon configuration in `layout.tsx` or `app/icon.png` for better control.

2. **OG Image**: The Open Graph image uses an absolute URL (`https://trustreach.club/images/og-image.png`). Ensure this matches your production domain.

3. **Avatar Images**: All testimonial avatars are dynamically generated. Consider caching or pre-generating these for better performance.

4. **Story Images**: The `StoryImage` component is available but not currently used with actual images in the `StoriesSection` component.

5. **Image Optimization**: All local images should be optimized (WebP format, appropriate sizes) for better performance.

---

## 🚀 Recommendations

1. Add explicit favicon configuration in `app/layout.tsx` metadata
2. Consider using Next.js Image component for all images (including external ones where possible)
3. Pre-generate or cache avatar images for testimonials
4. Add image optimization pipeline for local images
5. Document image dimensions and formats for design consistency

