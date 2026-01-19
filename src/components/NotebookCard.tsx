import React from 'react';
import { Notebook } from '@/types/notebook';

interface NotebookCardProps {
  notebook: Notebook;
}

const colorMap = {
  mint: 'bg-card-mint dark:bg-[#1a2e2e] border-transparent hover:border-primary/10 text-teal-800 dark:text-teal-200',
  lavender: 'bg-card-lavender dark:bg-[#25182e] border-transparent hover:border-purple-500/10 text-purple-800 dark:text-purple-200',
  peach: 'bg-card-peach dark:bg-[#2e1d18] border-transparent hover:border-orange-500/10 text-orange-800 dark:text-orange-200',
  cream: 'bg-card-cream dark:bg-[#2e2b18] border-transparent hover:border-yellow-500/10 text-yellow-800 dark:text-yellow-200',
  sky: 'bg-card-sky dark:bg-[#18262e] border-transparent hover:border-blue-500/10 text-sky-800 dark:text-sky-200',
};

export const NotebookCard: React.FC<NotebookCardProps> = ({ notebook }) => {
  const colorClasses = colorMap[notebook.color];

  return (
    <article className={`group break-inside-avoid rounded-2xl p-6 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 relative overflow-hidden border ${colorClasses.split(' ').slice(0, 3).join(' ')}`}>
      <div className="mb-4 flex items-start justify-between">
        <span className="text-4xl filter drop-shadow-sm">{notebook.icon}</span>
        <span className={`inline-flex items-center rounded-full bg-white/60 dark:bg-black/20 px-2.5 py-1 text-xs font-medium backdrop-blur-sm ${colorClasses.split(' ').slice(3).join(' ')}`}>
          {notebook.sourceCount} {notebook.sourceCount === 1 ? 'source' : 'sources'}
        </span>
      </div>
      <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white tracking-tight">{notebook.title}</h3>
      <p className="mb-6 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
        {notebook.description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Updated {notebook.updatedAt}</span>
        <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg bg-primary px-3 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-primary-hover">
          View
        </button>
      </div>
    </article>
  );
};
