import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const posts = [
  {
    id: 1,
    title: '5 Things Every UK Business Owner Should Know About Corporate Law',
    date: 'June 10, 2026',
    excerpt: 'Whether you\'re starting out or scaling up, understanding the legal foundations of your business can save you from costly mistakes down the road.',
    slug: 'uk-business-corporate-law'
  }
];

function Blog() {
  return (
    <div className="app">
      <nav className="navbar">
        <span className="nav-logo">Graeme Macpherson</span>
        <div className="nav-links blog-nav">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </nav>

 <div className="blog-hero">
  <p className="section-label">Insights</p>
  <h1>Legal insights & updates</h1>
  <p className="section-body">Plain-English commentary on the legal issues that matter to individuals and businesses in the UK.</p>
</div>

<div className="blog-page">
        <div className="blog-list">
          {posts.map(post => (
            <Link to={`/blog/${post.slug}`} key={post.id} className="blog-card">
              <p className="blog-date">{post.date}</p>
              <h2>{post.title}</h2>
              <p className="blog-excerpt">{post.excerpt}</p>
              <span className="blog-read-more">Read more →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;