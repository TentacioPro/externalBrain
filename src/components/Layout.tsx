import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-gray-100 antialiased selection:bg-primary/20 selection:text-primary">
      <Header />
      <main className="flex-1 px-6 lg:px-12 pb-20">
        <div className="mx-auto max-w-[1400px]">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};
