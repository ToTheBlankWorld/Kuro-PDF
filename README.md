# KuroPDF

KuroPDF is a powerful, client-side file manipulation tool built with React, TypeScript, and Vite. It offers a comprehensive suite of utilities to manage, convert, and edit various file formats directly in your browser without uploading data to any server, ensuring maximum privacy and security.

## Features

### PDF Tools
- **Merge PDF**: Combine multiple PDF files into a single document.
- **Split PDF**: Extract individual pages from a PDF file.
- **PDF to Images**: Convert PDF pages into high-quality images.
- **Images to PDF**: Convert images (PNG, JPG) into a single PDF document.
- **Watermark PDF**: Add text watermarks to your PDF files.
  - **Customization**: Choose font, color, opacity, and position.
- **Lock PDF**: Encrypt your PDF files with a password.
- **PDF Layout**: Re-arrange PDF pages (2-up, 4-up) per sheet.
- **PDF to Text**: Extract text content from PDF files.
- **PDF to Word**: Convert PDF documents to editable Word files.

### Word Tools
- **Word to PDF**: Convert DOCX files to PDF.
- **Word to Text**: Extract raw text from Word documents.
- **Merge Word**: Combine multiple Word documents.
- **Watermark Word**: Add text watermarks to Word documents.

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS
- **PDF Processing**: pdf-lib, jspdf, pdfjs-dist
- **Word Processing**: mammoth, docx
- **Icons**: lucide-react
- **UI Components**: Aceternity UI

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

### Building for Production

```bash
npm run build
```

The optimized production build will be created in the `dist` folder.

## Features Highlights

- **100% Privacy**: All file processing happens locally in your browser. No files are uploaded to external servers.
- **No Installation Required**: Use KuroPDF directly from your web browser.
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices.
- **Multiple Format Support**: Handle PDF, Word documents, and various image formats.
- **User-Friendly Interface**: Intuitive design for easy file manipulation.

## Project Structure

```
├── components/          # Reusable React components
├── pages/              # Page components
├── services/           # Service utilities
├── App.tsx             # Main application component
├── constants.tsx       # Application constants
├── types.ts            # TypeScript type definitions
├── tailwind.config.js  # Tailwind CSS configuration
├── vite.config.ts      # Vite configuration
└── tsconfig.json       # TypeScript configuration
```

## Browser Support

KuroPDF works on all modern browsers that support:
- ES6+ JavaScript
- Web Workers
- Canvas API
- File API

## License

This project is open source and available for personal and commercial use.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

