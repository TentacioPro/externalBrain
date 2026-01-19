# Notebooks Dashboard

A modern, dynamic dashboard for managing and displaying your collection of notebooks and learning resources. Built with React, Vite, and Tailwind CSS.

## Features

- 📚 Dynamic notebook cards powered by JSON data
- 🎨 Beautiful UI with Tailwind CSS
- ⚡ Lightning-fast development with Vite
- 🧭 Client-side routing with React Router
- 💬 Giscus-powered comments (GitHub Discussions)
- 📊 Cloudflare Web Analytics integration
- 🎯 TypeScript for type safety
- 🎭 Lucide React icons

## Tech Stack

- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **TypeScript** - Type-safe JavaScript
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
learning-notebook/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── NotebookCard.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   └── Comments.tsx
│   ├── pages/           # Route pages
│   │   ├── Dashboard.tsx
│   │   └── Docs.tsx
│   ├── data/            # JSON data files
│   │   └── notebooks.json
│   ├── types/           # TypeScript interfaces
│   │   └── notebook.ts
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

## Configuration

### Adding Notebooks

Edit `src/data/notebooks.json` to add your notebooks:

```json
{
  "id": "unique-id",
  "title": "Notebook Title",
  "description": "Brief description",
  "icon": "BookOpen",
  "link": "/notebook/your-notebook",
  "category": "Category Name",
  "tags": ["tag1", "tag2"]
}
```

### Giscus Comments

Update the Comments component props in `src/pages/Dashboard.tsx`:

```tsx
<Comments
  repo="your-username/your-repo"
  repoId="YOUR_REPO_ID"
  category="General"
  categoryId="YOUR_CATEGORY_ID"
/>
```

Get your configuration at [giscus.app](https://giscus.app)

### Cloudflare Analytics

Replace `YOUR_TOKEN_HERE` in `index.html` with your Cloudflare Web Analytics token.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## License

MIT
