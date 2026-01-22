# 🚀 Alioth Design System - Quick Start Guide

## ⚡ Get Started in 3 Steps

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Start Development Server

```bash
npm run dev
```

This will start the server on `http://localhost:3000`

### Step 3: Open in Browser

Navigate to `http://localhost:3000` and you're ready to go!

---

## 🎨 Using the Design System

### Switching Color Themes

1. Look for the **color palette dropdown** in the main colors section
2. Click to open the dropdown
3. Select any of the 7 themes:
   - 🔵 Primary (Blue)
   - 🟣 Secondary (Purple)
   - ✅ Success (Green)
   - ⚠️ Warning (Yellow)
   - ❌ Error (Red)
   - ℹ️ Info (Cyan)
   - ⚪ Neutral (Gray)

All components update instantly!

### Copying Color Hex Codes

1. Click any **color swatch** in the palette grid
2. The hex code is copied to your clipboard
3. A tooltip will appear confirming the copy

### Exploring Typography

Click the **Typography** tab in the sidebar to see:

- Poppins font family
- 6 weight variations (300-800)
- 8 size examples (12px-36px)

### Viewing Component Examples

Click the **Components** tab to see:

- Demo Button
- Demo Badge
- Demo Card

These components change colors with your selected theme!

---

## 💻 Using in Your Code

### Import the Hook

```typescript
'use client'; // Required for client-side hooks

import { useColorTheme } from '@/context/ColorContext';

export function MyComponent() {
  const { theme, setTheme, currentPalette } = useColorTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme('secondary')}>
        Switch to Secondary
      </button>
    </div>
  );
}
```

### Using CSS Variables

```tsx
<div
  style={{
    backgroundColor: "var(--color-100)", // Light background
    color: "var(--color-900)", // Dark text
    borderColor: "var(--color-500)", // Mid-tone border
    padding: "1rem",
  }}
>
  Content with themed colors
</div>
```

### With Tailwind Classes

You can reference CSS variables in Tailwind config:

```tsx
<div className="bg-[var(--color-100)] text-[var(--color-900)]">Tailwind with CSS variables</div>
```

---

## 📦 Available Color Shades

For each palette, you have 11 tones:

| Shade | CSS Variable  | Usage                                   |
| ----- | ------------- | --------------------------------------- |
| 50    | `--color-50`  | Very light backgrounds, disabled states |
| 100   | `--color-100` | Light backgrounds, hover states         |
| 200   | `--color-200` | Secondary backgrounds                   |
| 300   | `--color-300` | Tertiary backgrounds                    |
| 400   | `--color-400` | Lighter foreground colors               |
| 500   | `--color-500` | **Base color** - primary use            |
| 600   | `--color-600` | Hover state alternative                 |
| 700   | `--color-700` | Darker foreground                       |
| 800   | `--color-800` | Even darker                             |
| 900   | `--color-900` | Very dark text, borders                 |
| 950   | `--color-950` | Darkest - text, dark backgrounds        |

**Pro Tip**: Use shade 500 for main buttons, shade 100 for backgrounds, shade 900 for text.

---

## 🛠️ Building for Production

### Create Production Build

```bash
npm run build
```

### Run Production Locally

```bash
npm run start
```

### Deploy to Vercel (Recommended)

```bash
# Link to Vercel
vercel

# Or use GitHub integration
# Push to GitHub → Connect to Vercel → Auto-deploy
```

---

## 🔍 Troubleshooting

**Q: Colors aren't updating when I switch themes**  
A: Make sure you're using `useColorTheme()` hook in a `'use client'` component

**Q: Getting "useColorTheme must be used inside ColorProvider"**  
A: Ensure DashboardContent is wrapped by ColorProvider in layout.tsx

**Q: Dev server won't start**  
A: Kill existing process and try again:

```bash
npm run dev -- -p 3001  # Use different port
```

**Q: Styles look wrong**  
A: Clear cache and reinstall:

```bash
rm -rf .next node_modules
npm install
npm run dev
```

---

## 📚 File Structure Reference

```
src/
├── components/
│   ├── color-system/      # Color display components
│   ├── typography/        # Font showcase
│   ├── examples/          # Demo components
│   ├── layout/            # Navigation & layout
│   └── DashboardContent.tsx
├── context/
│   └── ColorContext.tsx   # Theme management
├── lib/
│   └── colorPalettes.ts   # Color definitions
└── app/
    ├── globals.css        # CSS variables
    ├── layout.tsx         # Root layout
    └── page.tsx           # Main page
```

---

## 🎓 Next Steps

1. **Explore the code**: Open files in your editor to see how it's built
2. **Create a component**: Try adding a new demo component
3. **Add a palette**: Follow the pattern in `colorPalettes.ts`
4. **Deploy**: Push to GitHub and deploy to Vercel
5. **Share**: Use as reference for your design system

---

## 💡 Tips & Tricks

### Keyboard Shortcut for Dark Mode

- Press `Ctrl+Shift+T` (or `Cmd+Shift+T` on Mac) to toggle dark mode quickly

### View CSS Variables

Open browser DevTools:

```javascript
// In console
getComputedStyle(document.documentElement).getPropertyValue("--color-500");
```

### Create a Custom Component

```typescript
// components/examples/MyComponent.tsx
'use client';

import { useColorTheme } from '@/context/ColorContext';

export default function MyComponent() {
  const { currentPalette } = useColorTheme();

  return (
    <div className="p-4 rounded" style={{
      backgroundColor: `var(--color-100)`,
      borderLeft: `4px solid var(--color-500)`
    }}>
      <h3 style={{ color: `var(--color-900)` }}>
        {currentPalette.name} Palette
      </h3>
    </div>
  );
}
```

---

## 📞 Need Help?

Check these files for examples:

- **Using colors**: `src/components/color-system/ColorCard.tsx`
- **Theme switching**: `src/components/color-system/ColorPalettePicker.tsx`
- **Context setup**: `src/context/ColorContext.tsx`

---

**Happy designing! 🎨**
