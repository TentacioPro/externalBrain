import React, { useEffect } from 'react';

interface CommentsProps {
  repo: string; // Format: "username/repo"
  repoId: string;
  category: string;
  categoryId: string;
  mapping?: 'pathname' | 'url' | 'title' | 'og:title' | 'specific' | 'number';
  theme?: 'light' | 'dark' | 'preferred_color_scheme';
}

export const Comments: React.FC<CommentsProps> = ({
  repo,
  repoId,
  category,
  categoryId,
  mapping = 'pathname',
  theme = 'light',
}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', repo);
    script.setAttribute('data-repo-id', repoId);
    script.setAttribute('data-category', category);
    script.setAttribute('data-category-id', categoryId);
    script.setAttribute('data-mapping', mapping);
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', theme);
    script.setAttribute('data-lang', 'en');
    script.crossOrigin = 'anonymous';
    script.async = true;

    const commentsDiv = document.getElementById('giscus-comments');
    if (commentsDiv) {
      commentsDiv.appendChild(script);
    }

    return () => {
      if (commentsDiv) {
        commentsDiv.innerHTML = '';
      }
    };
  }, [repo, repoId, category, categoryId, mapping, theme]);

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Comments & Feedback</h2>
      <div id="giscus-comments" className="giscus" />
    </div>
  );
};
