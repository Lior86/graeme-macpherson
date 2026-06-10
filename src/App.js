import { useState } from 'react';
import graemePhoto from './Images/graeme.png.png';
import './App.css';
import heroBg from './Images/hero-bg.jpg.jpg';

function App() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <nav className="navbar">
        <span className="nav-logo">Graeme Macpherson</span>
        <div className="nav-links">
          <button onClick={() => scrollTo('about')}>About</button>
          <button onClick={() => scrollTo('areas')}>Practice Areas</button>
          <button onClick={() => scrollTo('faq')}>FAQ</button>
          <button onClick={() => scrollTo('contact')}>Contact</button>
        </div>
      </nav>

      <section className="hero" style={{backgroundImage: `url(${heroBg})`}}>
        <div className="hero-tag">Solicitor · London, UK</div>
        <h1>Practical legal advice<br />you can count on</h1>
        <p>Clear, straightforward guidance for individuals and businesses navigating complex legal matters.</p>
        <button className="hero-btn" onClick={() => scrollTo('contact')}>Book a Consultation</button>
      </section>

      <section className="section" id="about">
        <div className="about-inner">
          <img src={graemePhoto} alt="Graeme Macpherson" className="about-photo" />
          <div className="about-text">
            <p className="section-label">About</p>
            <h2>Here to help you move forward</h2>
            <p className="section-body">Graeme Macpherson is a London-based solicitor with experience across corporate law, real estate, family matters, and estate planning. A graduate of the London School of Law, he believes in plain-English advice with no jargon, no surprises, just clear guidance when you need it most.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="areas">
        <div className="section-inner">
          <p className="section-label">Practice Areas</p>
          <h2>How I can help</h2>
          <div className="areas-grid">
            <div className="area-card">🏢 Corporate Law</div>
            <div className="area-card">🏠 Real Estate</div>
            <div className="area-card">❤️ Family Law</div>
            <div className="area-card">📄 Wills & Estates</div>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="section-inner">
          <p className="section-label">FAQ</p>
          <h2>Common questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <p className="faq-q">What happens during an initial consultation?</p>
              <p className="faq-a">We discuss your situation and options. No pressure, no commitment.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">How do you charge for your services?</p>
              <p className="faq-a">Transparent pricing with a clear estimate before any work begins.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">Is everything I share with you confidential?</p>
              <p className="faq-a">Yes, all communications are protected by solicitor-client privilege.</p>
            </div>
            <div className="faq-item">
              <p className="faq-q">How do I get started?</p>
              <p className="faq-a">Simply book a consultation and we'll take it from there.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="book">
  <div className="section-inner" style={{textAlign: 'center'}}>
    <p className="section-label">Free Guide</p>
    <h2>Starting Smart: Corporate Law for UK Business Owners</h2>
    <p className="section-body" style={{margin: '0 auto 32px'}}>A practical guide written by Graeme to help business owners understand the legal foundations that matter most.</p>
    <div className="book-embed" dangerouslySetInnerHTML={{__html: `<iframe allowfullscreen="allowfullscreen" allow="clipboard-write" scrolling="no" class="fp-iframe" src="https://heyzine.com/flip-book/74d63defd8.html" style="border: 1px solid lightgray; width: 100%; height: 400px;"></iframe>
  
                        `}} />
  </div>
</section>

      <section className="section contact-dark" id="contact">
        <div className="section-inner" style={{textAlign: 'center'}}>
          <p className="section-label">Contact</p>
          <h2 style={{color: '#fff'}}>Get in touch</h2>
          <p className="section-body" style={{color: 'rgba(255,255,255,0.6)', margin: '0 auto 32px'}}>Ready to discuss your matter? Reach out and we'll take it from there.</p>
          <div className="contact-btns">
            <a href="mailto:graeme@email.com" className="contact-btn primary">Book a Consultation</a>
            <a href="mailto:graeme@email.com" className="contact-btn">Email</a>
            <a href="tel:+44000000000" className="contact-btn">Phone</a>
            <a href="https://www.linkedin.com/in/graeme-macpherson" target="_blank" rel="noreferrer" className="contact-btn">LinkedIn</a>
          </div>
          {submitted ? (
            <div className="form-success">
              <p>Thank you! Graeme will be in touch shortly.</p>
            </div>
          ) : (
            <div className="contact-form">
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="form-input" />
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="form-input" />
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="form-input" />
              <textarea name="message" placeholder="Briefly describe your matter" value={formData.message} onChange={handleChange} className="form-input form-textarea"></textarea>
              <button onClick={handleSubmit} className="form-submit">Send Message</button>
            </div>
          )}
        </div>
      </section>

      <footer className="footer">
        <span>© Graeme Macpherson · London, UK</span>
      </footer>
    </div>
  );
}

export default App;