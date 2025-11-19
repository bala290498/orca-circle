# Mobile Viewport & Overflow Fix Guide

## 🐛 Common Issues

1. **Horizontal gaps** on mobile devices
2. **Landscape mode zoom-in** (page appears "blown up")
3. **Horizontal scrolling** (page scrolls left/right)
4. **Text overflow** (text extends beyond containers)
5. **Oversized text** in landscape orientation

---

## ✅ Quick Fixes

### 1. Viewport Meta Tag
**Location:** `app/layout.tsx` or `_document.tsx`

```typescript
// Next.js App Router
export const metadata: Metadata = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,        // ✅ Prevents zoom
    userScalable: false,   // ✅ Prevents manual zoom
  },
}

// Or in HTML head
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
```

---

### 2. Global Overflow Prevention
**Location:** `globals.css` or main CSS file

```css
html, body {
  overflow-x: hidden;
  width: 100%;
  max-width: 100%;
}

img {
  max-width: 100%;
  height: auto;
}
```

---

### 3. Main Container
**Location:** Main layout component

```tsx
<main className="overflow-x-hidden w-full max-w-full">
  {/* content */}
</main>
```

---

### 4. Responsive Typography
**Limit vw values in clamp() functions:**

```tsx
// ❌ Bad - Too large in landscape
style={{ fontSize: 'clamp(1.5rem, 4vw + 1rem, 2.5rem)' }}

// ✅ Good - Safe for landscape
style={{ fontSize: 'clamp(1.5rem, 2.5vw + 1rem, 2.5rem)' }}
```

**Guidelines:**
- Headings: Max `2.5vw`
- Body text: Max `1.5vw`
- Small text: Max `1vw`

---

### 5. Component Overflow
**For absolutely positioned large elements:**

```tsx
// ✅ Parent contains overflow
<div className="relative overflow-hidden">
  <div className="absolute w-[300%] ...">
    {/* Large element */}
  </div>
</div>

// ✅ Constrain fixed widths
<div className="w-[18.75rem] max-w-[100vw] ...">
```

---

### 6. Text Wrapping
**Replace whitespace-nowrap where needed:**

```tsx
// ❌ Bad
<button className="whitespace-nowrap">Long Text</button>

// ✅ Good
<button className="max-w-full">
  <span className="truncate">Long Text</span>
</button>

// ✅ Good for multiple items
<div className="flex flex-wrap">
  {items.map(...)}
</div>
```

---

## 🚀 Setup Checklist for New Projects

- [ ] Set viewport meta tag with `maximumScale: 1`
- [ ] Add `overflow-x: hidden` to html/body
- [ ] Add responsive image styles globally
- [ ] Limit vw values in clamp() (max 2.5vw for headings)
- [ ] Test on mobile portrait & landscape
- [ ] Verify no horizontal scroll
- [ ] Check text wrapping on small screens

---

## 🔍 Debugging Steps

If you see horizontal overflow:

1. **Check viewport:** `maximumScale: 1`, `userScalable: false`
2. **Add overflow-x:** `html, body { overflow-x: hidden; }`
3. **Find fixed widths:** Search for `w-[XXXpx]` or `width: XXXpx`
4. **Check vw values:** Look for `4vw+` in clamp(), reduce to `2.5vw` max
5. **Find whitespace-nowrap:** Replace with `truncate` or remove
6. **Check images:** Ensure `max-width: 100%` on all images

---

## 📱 Testing

**Always test:**
- Mobile portrait (375px)
- Mobile landscape (667px)
- Tablet (768px)
- Desktop (1280px+)

**Check for:**
- No horizontal scrollbar
- No unwanted zoom in landscape
- All text readable
- Images fit within viewport
- Buttons/cards don't overflow

---

## 📝 Component Template

```tsx
export default function Component() {
  return (
    <section className="overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 
            style={{ fontSize: 'clamp(1.25rem, 2.5vw + 1rem, 2.25rem)' }}
          >
            Heading
          </h2>
          
          <img 
            src="..." 
            alt="..." 
            className="max-w-full h-auto"
          />
          
          <button className="max-w-full">
            <span className="truncate">Button Text</span>
          </button>
        </div>
      </div>
    </section>
  )
}
```

---

**Key Principle:** Always prevent overflow at the root level, then handle it at component level when needed.
