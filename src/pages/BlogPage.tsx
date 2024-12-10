import React from 'react';
import { BlogHero } from '../components/blog/BlogHero';
import { Blog } from '../components/sections/Blog';

export function BlogPage() {
  return (
    <div>
      <BlogHero />
      <Blog />
    </div>
  );
}