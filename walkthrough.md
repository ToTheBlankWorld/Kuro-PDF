# KuroPDF — Developer Walkthrough

A technical guide for contributors and developers.

## Architecture

KuroPDF is a fully client-side single-page app. There is no backend. All file processing happens in the user's browser using native Web APIs.

```
Browser
  +-- React (HashRouter)
        +-- /           ? Home.tsx
        +-- /tools      ? ToolsPage.tsx
        +-- /tools/:id  ? ToolPage.tsx
```

## Key Files

| File | Purpose |
|---|---|
| `constants.tsx` | Defines all tools (id, name, icon, accepts, path) |
| `types.ts` | TypeScript interfaces (ToolDef, FileState, ProcessingResult) |
| `services/toolService.ts` | All file conversion logic |
| `pages/ToolPage.tsx` | Generic tool UI — file upload, options, process, download |
| `components/ui/` | Aceternity UI primitives (GlowingEffect, Cover, FloatingDock, etc.) |

## Adding a New Tool

1. Add an entry to `TOOLS` in `constants.tsx`:
   ```ts
   {
     id: 'my-tool',
     name: 'My Tool',
     description: 'Does something cool.',
     icon: SomeIcon,
     accepts: '.pdf',
     multiple: false,
     category: ToolCategory.PDF,
     path: '/tools/my-tool',
   }
   ```

2. Handle it in `services/toolService.ts` inside `processFiles()`:
   ```ts
   case 'my-tool':
     // your processing logic
     return { success: true, files: [...], message: 'Done!' };
   ```

No new page or route needed — `ToolPage.tsx` handles everything generically.

## UI Components

- **GlowingEffect** — Conic gradient border that tracks mouse position
- **Cover** — Interactive text with sparkle hover effect
- **FloatingDock** — Animated macOS-style navigation dock
- **FileUpload** — Animated drag-and-drop uploader (motion/react + react-dropzone)

## Build & Deploy

```bash
npm run build   # outputs to /dist
npm run preview # preview the build locally
```

Deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages).

### Vercel (recommended)
- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`

## Dependencies

```json
"react": "^18",
"react-router-dom": "^6",
"motion": "latest",
"pdf-lib": "latest",
"jspdf": "latest",
"pdfjs-dist": "latest",
"mammoth": "latest",
"docx": "latest",
"tailwindcss": "^3.4",
"@tabler/icons-react": "latest",
"react-dropzone": "latest"
```

## Routing Note

The app uses `HashRouter` (`/#/tools`) so it can be deployed on any static host without server-side redirect rules.
