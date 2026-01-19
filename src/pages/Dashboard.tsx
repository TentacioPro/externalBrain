import React from 'react';
import { NotebookCard } from '@/components/NotebookCard';
import notebooksData from '@/data/notebooks.json';
import { Notebook } from '@/types/notebook';

export const Dashboard: React.FC = () => {
  const notebooks = notebooksData as Notebook[];

  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center py-20 md:py-24 text-center">
        <div className="mb-4 inline-flex items-center rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-medium text-gray-500 shadow-sm dark:border-stone-800 dark:bg-stone-900 dark:text-gray-400">
          <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
          Last sync: Just now
        </div>
        <h1 className="mb-4 text-4xl font-semibold tracking-tighter text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
          My External Brain
        </h1>
        <p className="max-w-[600px] text-lg text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          A curated digital garden of notes, research papers, and synthesized thoughts. Exploring the intersection of technology and biology.
        </p>
        
        {/* Search Bar */}
        <div className="mt-8 w-full max-w-md relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">search</span>
          </div>
          <input
            className="block w-full rounded-2xl border-0 py-3 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-stone-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 shadow-sm bg-white dark:bg-stone-900 dark:ring-stone-800 dark:text-white transition-all"
            placeholder="Search your notebooks..."
            type="text"
          />
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {notebooks.map((notebook) => (
          <NotebookCard key={notebook.id} notebook={notebook} />
        ))}
        
        {/* Create Notebook Placeholder */}
        <article className="group break-inside-avoid rounded-2xl border-2 border-dashed border-stone-300 dark:border-stone-700 p-6 flex flex-col items-center justify-center text-center min-h-[220px] cursor-pointer hover:border-primary hover:bg-primary/5 transition-all">
          <div className="size-12 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-400 dark:text-stone-500 mb-3 group-hover:bg-white group-hover:text-primary transition-colors shadow-sm">
            <span className="material-symbols-outlined text-3xl">add</span>
          </div>
          <h3 className="text-lg font-bold text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors">Create Notebook</h3>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Start a new collection</p>
        </article>
      </div>

      {/* Floating Action Button for mobile */}
      <button className="md:hidden fixed bottom-6 right-6 size-14 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:bg-primary-hover active:scale-95 transition-transform z-40">
        <span className="material-symbols-outlined text-2xl">add</span>
      </button>

      {/* Decorative background gradient */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-30 dark:opacity-10" style={{ background: 'radial-gradient(circle at 15% 50%, rgba(61, 109, 113, 0.15), transparent 25%), radial-gradient(circle at 85% 30%, rgba(250, 232, 224, 0.5), transparent 25%)' }}></div>
    </div>
  );
};
