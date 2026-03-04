# KuroPDF - Project Overview

KuroPDF is a modern, privacy-first file conversion and manipulation tool built with React, TypeScript, and Vite.

## Key Features

### 1. File Format Support
- PDF manipulation (merge, split, convert, watermark, lock)
- Word document conversion and editing
- Image to PDF conversion
- Multi-format extraction (PDF to text, PDF to images, Word to text)

### 2. Privacy & Security
- **100% Client-Side Processing**: All file operations happen in your browser
- **No Server Uploads**: Your files stay on your device
- **No Data Tracking**: Complete privacy for your documents
- **Password Protection**: Lock PDF files with encryption

### 3. User Experience
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Intuitive Interface**: Simple drag-and-drop file uploads
- **Fast Processing**: Instant conversions without waiting
- **Modern UI**: Beautiful gradient designs and smooth animations

## Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS for responsive design
- **PDF/Document Libraries**:
  - pdf-lib: PDF creation and manipulation
  - jspdf: PDF generation
  - mammoth: DOCX to HTML conversion
  - docx: DOCX file creation
- **UI Components**: Lucide React icons, Aceternity UI components
- **Routing**: React Router v6 for navigation

## Project Structure

```
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.tsx     # Navigation bar
│   │   ├── FileUploader.tsx
│   │   ├── ToolCard.tsx
│   │   ├── ProcessingLoader.tsx
│   │   ├── Background.tsx
│   │   └── FAQSection.tsx
│   ├── pages/             # Page components
│   │   ├── Home.tsx       # Landing page
│   │   ├── ToolsPage.tsx  # All tools listing
│   │   └── ToolPage.tsx   # Individual tool page
│   ├── services/          # Business logic
│   │   └── toolService.ts # Tool operations
│   ├── App.tsx            # Main app component
│   ├── constants.tsx      # App constants
│   ├── types.ts           # TypeScript definitions
│   └── index.tsx          # Entry point
├── public/                # Static assets
├── package.json           # Dependencies
├── vite.config.ts         # Vite configuration
└── tailwind.config.js     # Tailwind CSS configuration
```

## Getting Started

### Development Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## Core Components

### Home Page
- Hero section with prominent call-to-action
- Grid display of PDF Tools
- Grid display of Word Tools
- Quick access to popular conversions

### Tools Page
- Complete listing of all available tools
- Organized by category (PDF, Word, Image, Utility)
- Quick access links to individual tools

### Tool Page
- Dedicated interface for each tool
- File upload handling
- Processing status indicators
- Download results functionality

## Browser Compatibility

KuroPDF works on all modern browsers:
- Chrome/Chromium
- Firefox
- Safari
- Edge

## Performance Optimizations

- Lazy loading of components
- Optimized PDF processing
- Client-side caching of conversion states
- Responsive image sizing
- Minimized bundling with Vite

## Future Enhancements

- Additional file format support
- Batch processing capabilities
- Advanced PDF editing features
- Cloud synchronization (optional)
- Plugin system for extensibility
