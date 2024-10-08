import type { Metadata } from 'next';
import Link from 'next/link';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Magnus Hanesand',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const paths: Map<string, string> = new Map([
    ['/', 'home'],
    ['/blog', 'blog'],
    ['/contact', 'contact'],
    ['/about', 'about'],
  ]);
  return (
    <html lang='en'>
      <body className='antialiased p-4 h-screen flex flex-col overflow-hidden justify-between'>
        <div>
          <header className='flex flex-row gap-4 row-span-1 text-xl sticky top-0 mb-4'>
            {Array.from(paths.entries()).map((path, index) => (
              <div key={index} className='flex gap-4'>
                <Link href={path[0]}>{path[1]}</Link>
                {index != paths.size - 1 && <p>/</p>}
              </div>
            ))}
          </header>
          <main>{children}</main>
        </div>
        <footer>Magnus Hanesand 2024</footer>
      </body>
    </html>
  );
}
