import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background-light dark:bg-background-dark border-t border-stone-200 dark:border-stone-800 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Learning Garden. Built with React + Vite + Tailwind CSS.
          </p>
          
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <span className="material-symbols-outlined">code</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <span className="material-symbols-outlined">share</span>
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
