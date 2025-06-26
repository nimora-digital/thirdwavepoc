'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const preloadRoutes = [
  '/about',
  '/services',
  '/careers',
  '/blog',
  '/forum',
  '/consultation',
];

export const PreloadAllPages = () => {
  const router = useRouter();

  useEffect(() => {
    preloadRoutes.forEach((route) => {
      router.prefetch(route);
    });
  }, [router]);

  return null;
};
