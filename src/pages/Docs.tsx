import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Code, Database, Layers, Rocket } from 'lucide-react';

export const Docs: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Documentation</h1>
        <p className="text-lg text-gray-600">
          Learn how this Notebooks Dashboard works and how to customize it.
        </p>
      </div>

      <div className="space-y-8">
        <section className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Layers className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Tech Stack</h2>
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

        <section className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Database className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Data Structure</h2>
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

        <section className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Code className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Components</h2>
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

        <section className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Rocket className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Getting Started</h2>
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

        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg">
          <div className="flex items-start gap-4">
            <BookOpen className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-blue-900 font-semibold mb-2">Ready to explore?</p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold hover:underline"
              >
                Back to Dashboard →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
