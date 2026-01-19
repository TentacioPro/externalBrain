import React from 'react';

export const Infographics: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center py-20 md:py-24 text-center">
        <div className="mb-4 inline-flex items-center rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-medium text-gray-500 shadow-sm dark:border-stone-800 dark:bg-stone-900 dark:text-gray-400">
          <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-purple-500 animate-pulse"></span>
          Visual Knowledge Base
        </div>
        <h1 className="mb-4 text-4xl font-semibold tracking-tighter text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
          Infographics & Visuals
        </h1>
        <p className="max-w-[600px] text-lg text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Visual representations of complex concepts, workflows, and data. Making information beautiful and accessible.
        </p>
        
        {/* Search Bar */}
        <div className="mt-8 w-full max-w-md relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">search</span>
          </div>
          <input
            className="block w-full rounded-2xl border-0 py-3 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-stone-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 shadow-sm bg-white dark:bg-stone-900 dark:ring-stone-800 dark:text-white transition-all"
            placeholder="Search infographics..."
            type="text"
          />
        </div>
      </div>

      {/* Coming Soon Message */}
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="p-12 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-soft">
          <span className="material-symbols-outlined text-primary text-6xl mb-6 inline-block">architecture</span>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Coming Soon</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            We're working on curating beautiful infographics and visual content. Check back soon!
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-primary-hover hover:shadow transition-all active:scale-95">
              <span className="material-symbols-outlined mr-2">notifications</span>
              Notify Me
            </button>
          </div>
        </div>
      </div>

      {/* Decorative background gradient */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-30 dark:opacity-10" style={{ background: 'radial-gradient(circle at 15% 50%, rgba(61, 109, 113, 0.15), transparent 25%), radial-gradient(circle at 85% 30%, rgba(250, 232, 224, 0.5), transparent 25%)' }}></div>
    </div>
  );
};
