# KuroPDF

> Privacy-first file conversion and manipulation — 100% in your browser.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## What is KuroPDF?

KuroPDF is a modern, open-source file toolkit built with React and TypeScript. Every operation runs entirely client-side — your files never leave your device, no servers, no uploads, no tracking.

## Features

### PDF Tools
- **Merge PDF** — Combine multiple PDFs into one
- **Split PDF** — Extract individual pages
- **PDF to Images** — Export PDF pages as high-quality images
- **Images to PDF** — Pack images into a single PDF
- **Watermark PDF** — Add custom text watermarks (font, color, opacity, position)
- **Lock PDF** — Password-encrypt your PDFs
- **PDF Layout** — Arrange pages 2-up or 4-up per sheet
- **PDF to Text** — Extract plain text from PDFs
- **PDF to Word** — Convert to editable DOCX

### Word Tools
- **Word to PDF** — Convert DOCX to PDF
- **Word to Text** — Extract raw text from Word documents
- **Merge Word** — Combine multiple DOCX files
- **Watermark Word** — Add text watermarks to Word documents

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS v3 |
| Animations | Motion (Framer Motion) |
| PDF | pdf-lib, jspdf, pdfjs-dist |
| Word | mammoth, docx |
| Icons | lucide-react, @tabler/icons-react |
| UI | Aceternity UI components |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) ? New Project ? Import your repo
3. Framework: **Vite** (auto-detected)
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click **Deploy**

No environment variables needed — everything runs client-side.

## Project Structure

```
+-- components/          # UI components
¦   +-- ui/              # Aceternity UI primitives
¦   +-- Navbar.tsx
¦   +-- ToolCard.tsx
¦   +-- Background.tsx
¦   +-- ...
+-- pages/
¦   +-- Home.tsx
¦   +-- ToolsPage.tsx
¦   +-- ToolPage.tsx
+-- services/
¦   +-- toolService.ts   # All file processing logic
+-- lib/
¦   +-- utils.ts
+-- constants.tsx         # Tool definitions
+-- types.ts
+-- App.tsx
+-- index.tsx
```

## Privacy

All file operations use browser-native APIs (File API, Canvas, Web Workers). No data is ever sent to any external server.

## License

MIT — free for personal and commercial use.
