import Navbar from '../components/Navbar';
import React from 'react';

type BlogPost = {
  id: number;
  title: string;
  summary: string;
};

const blogPosts: BlogPost[] = [
  { id: 1, title: 'Post One', summary: 'This is the first post.' },
  { id: 2, title: 'Post Two', summary: 'This is the second post.' },
  // More posts...
];

const Blog: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center">Blog</h1>
        <div className="mt-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="mb-4">
              <h2 className="text-xl font-bold">{post.title}</h2>
              <p className="text-gray-700">{post.summary}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;
