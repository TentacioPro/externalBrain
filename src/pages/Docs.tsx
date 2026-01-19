import React from 'react';
import { Link } from 'react-router-dom';

export const Docs: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center py-20 md:py-24 text-center">
        <h1 className="mb-4 text-4xl font-semibold tracking-tighter text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
          Documentation
        </h1>
        <p className="max-w-[600px] text-lg text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Learn how this Learning Garden works and how to customize it for your own knowledge management.
        </p>
      </div>

      <div className="space-y-8 max-w-4xl mx-auto">
        <section className="p-6 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-soft">
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-primary text-3xl">layers</span>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Tech Stack</h2>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>React 18</strong> - Modern UI library with hooks</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Vite</strong> - Fast build tool and dev server</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Tailwind CSS</strong> - Utility-first CSS framework</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>React Router</strong> - Client-side routing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Lucide React</strong> - Beautiful icon library</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>TypeScript</strong> - Type-safe JavaScript</span>
            </li>
          </ul>
        </section>

        <section className="p-6 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-soft">
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-primary text-3xl">database</span>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Data Structure</h2>
          </div>
          <p className="text-gray-700 mb-4">
            All notebook data is stored in <code className="px-2 py-1 bg-gray-100 rounded text-sm">src/data/notebooks.json</code>. 
            Each notebook follows this schema:
          </p>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "id": "unique-id",
  "title": "Notebook Title",
  "description": "Brief description",
  "icon": "LucideIconName",
  "link": "/path/to/notebook",
  "category": "Optional category",
  "tags": ["tag1", "tag2"]
}`}
          </pre>
        </section>

        <section className="p-6 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-soft">
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-primary text-3xl">code</span>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Components</h2>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-1">NotebookCard</h3>
              <p className="text-gray-600 text-sm">Displays individual notebook with icon, title, description, and tags.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-1">Header</h3>
              <p className="text-gray-600 text-sm">Navigation bar with logo and links to Dashboard and Docs.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-1">Footer</h3>
              <p className="text-gray-600 text-sm">Site footer with social links and copyright information.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-1">Layout</h3>
              <p className="text-gray-600 text-sm">Wrapper component providing consistent layout across all pages.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-1">Comments</h3>
              <p className="text-gray-600 text-sm">Giscus-powered comments using GitHub Discussions for feedback.</p>
            </div>
          </div>
        </section>

        <section className="p-6 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-soft">
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-primary text-3xl">rocket_launch</span>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Getting Started</h2>
          </div>
          <ol className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <span>Install dependencies: <code className="px-2 py-1 bg-gray-100 rounded text-sm">npm install</code></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <span>Start dev server: <code className="px-2 py-1 bg-gray-100 rounded text-sm">npm run dev</code></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <span>Edit <code className="px-2 py-1 bg-gray-100 rounded text-sm">src/data/notebooks.json</code> to add your notebooks</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <span>Update Giscus configuration in Dashboard.tsx with your repo details</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
              <span>Build for production: <code className="px-2 py-1 bg-gray-100 rounded text-sm">npm run build</code></span>
            </li>
          </ol>
        </section>

        <div className="p-6 bg-card-mint dark:bg-[#1a2e2e] border border-primary/20 rounded-2xl">
          <div className="flex items-start gap-4">
            <span className="material-symbols-outlined text-primary text-3xl flex-shrink-0">book</span>
            <div>
              <p className="text-gray-900 dark:text-white font-semibold mb-2">Ready to explore?</p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-semibold transition-colors"
              >
                Back to Dashboard →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background gradient */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-30 dark:opacity-10" style={{ background: 'radial-gradient(circle at 15% 50%, rgba(61, 109, 113, 0.15), transparent 25%), radial-gradient(circle at 85% 30%, rgba(250, 232, 224, 0.5), transparent 25%)' }}></div>
    </div>
  );
};
