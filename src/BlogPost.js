import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const posts = {
  'uk-business-corporate-law': {
    title: '5 Things Every UK Business Owner Should Know About Corporate Law',
    date: 'June 10, 2026',
    content: `
      Starting or running a business in the UK comes with a host of legal responsibilities that many owners don't fully appreciate until something goes wrong. Here are five fundamentals that every business owner should understand.

      1. Your company structure matters more than you think

      Whether you operate as a sole trader, partnership, or limited company affects everything from your personal liability to how you're taxed. A limited company creates a legal separation between you and the business, meaning your personal assets are generally protected if the business runs into trouble. Many small business owners delay incorporating and later wish they hadn't.

      2. Shareholder agreements are not optional

      If you have co-founders or investors, a shareholder agreement sets out what happens when things go wrong, who can sell their shares, what happens if someone wants to leave, and how disputes are resolved. Without one, you're relying on default legal rules that may not reflect what anyone actually intended.

      3. Contracts protect everyone

      A handshake deal or email chain is rarely enough. Proper written contracts with clients, suppliers, and employees define expectations clearly and give you a basis for action if someone doesn't deliver. The cost of a well-drafted contract is almost always less than the cost of a dispute.

      4. Employment law obligations start from day one

      The moment you hire someone, you take on significant legal obligations, written employment contracts, statutory rights, health and safety duties, and more. Getting this wrong can be expensive and time-consuming to fix.

      5. Take legal advice before you need it

      The most common mistake businesses make is only consulting a solicitor when a problem has already escalated. Early advice is almost always cheaper and more effective than trying to resolve a dispute after the fact.

      If any of these areas are relevant to your business, feel free to get in touch for a no-obligation conversation.
    `
  }
};

function BlogPost() {
  const slug = window.location.pathname.split('/').pop();
  const post = posts[slug];

  if (!post) {
    return (
      <div className="app">
        <nav className="navbar">
          <span className="nav-logo">Graeme Macpherson</span>
          <div className="nav-links blog-nav">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
          </div>
        </nav>
        <div className="blog-page">
          <h2>Post not found.</h2>
          <Link to="/blog">Back to blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <nav className="navbar">
        <span className="nav-logo">Graeme Macpherson</span>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </nav>

      <div className="blog-post-page">
        <Link to="/blog" className="blog-back">← Back to blog</Link>
        <p className="blog-date">{post.date}</p>
        <h1>{post.title}</h1>
        <div className="blog-content">
          {post.content.trim().split('\n\n').map((para, i) => (
            <p key={i}>{para.trim()}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPost;