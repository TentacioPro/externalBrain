import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200/50 bg-background-light/80 backdrop-blur-xl dark:border-stone-800 dark:bg-background-dark/80 transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-lg bg-stone-200 dark:bg-stone-800 text-primary">
            <span className="material-symbols-outlined text-[20px]">spa</span>
          </div>
          <Link to="/" className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            Learning Garden
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
          >
            Notebooks
          </Link>
          <a
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
          >
            Infographics
          </a>
          <Link
            to="/docs"
            className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
          >
            Docs
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center justify-center rounded-xl bg-primary px-5 py-2 text-sm font-bold text-white shadow-sm hover:bg-primary-hover hover:shadow transition-all active:scale-95">
            Subscribe
          </button>
          <button className="md:hidden flex items-center justify-center text-gray-600 dark:text-gray-400">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};
