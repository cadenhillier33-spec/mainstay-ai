'use client'

import { useEffect, useRef, useState } from 'react'

const INTEGRATIONS = [
  { name: 'Gmail', emoji: '📧' },
  { name: 'Instagram', emoji: '📸' },
  { name: 'Facebook', emoji: '📘' },
  { name: 'Google Business', emoji: '📍' },
  { name: 'Telegram', emoji: '✈️' },
  { name: 'Mailchimp', emoji: '📨' },
  { name: 'Google Sheets', emoji: '📊' },
  { name: 'Calendly', emoji: '📅' },
  { name: 'WhatsApp', emoji: '💬' },
  { name: 'Yelp', emoji: '⭐' },
  { name: 'Shopify', emoji: '🛍️' },
  { name: 'QuickBooks', emoji: '💰' },
]

const AUTOMATIONS = [
  { time: 'Every 30 min', label: 'Scans your email, flags urgent messages, drafts replies automatically' },
  { time: '8:00 AM daily', label: 'Sends you a morning briefing — appointments, leads, reviews overnight' },
  { time: 'Instantly', label: 'New lead submits contact form — personalized reply sent within 2 minutes' },
  { time: 'Ongoing', label: 'Writes and posts social content, responds to reviews, chases invoices' },
]

const FEATURES = [
  { icon: '📱', title: 'Social Media', desc: 'Generates and posts to Instagram and Facebook on a consistent schedule in your brand voice. You never open the app.' },
  { icon: '✉️', title: 'Email Newsletter', desc: 'Writes and sends a weekly email to your customer list. Keeps your audience engaged without lifting a finger.' },
  { icon: '⭐', title: 'Review Responses', desc: 'Monitors Google and Yelp and responds to every review within minutes — professionally and personally.' },
  { icon: '🔔', title: 'Lead Follow-Up', desc: 'Anyone who contacts you gets an instant personalized reply. No lead ever goes cold while you are busy.' },
  { icon: '💰', title: 'Invoice Chasing', desc: 'Automatically follows up on unpaid invoices at set intervals. Get paid faster without the awkward calls.' },
  { icon: '☀️', title: 'Morning Briefings', desc: 'Wake up to a daily summary of everything that happened overnight — leads, reviews, appointments, messages.' },
  { icon: '📋', title: 'Promotions', desc: 'Tell your agent about a sale or event. It writes all the posts, schedules them, and sends the email blast.' },
  { icon: '🔧', title: 'Custom Features', desc: 'Need something specific? We build it. Every business is different — tell us what you need and we scope it for free.' },
]

const PLAN_FEATURES = [
  'In-person on-site installation',
  'Full agent configuration and training',
  'Social media automation',
  'Email newsletter automation',
  'Google and Yelp review responses',
  'Lead follow-up sequences (replies within 2 min)',
  'Invoice chasing and payment follow-ups',
  'Morning briefings for the owner',
  'Promotion and event campaign automation',
  'Job application screening and ranking',
  'Telegram control — text it anything from anywhere',
  'Remote monitoring and support',
  'Custom feature development included',
  '14-day hypercare included',
]

const FAQS = [
  {
    q: 'What exactly is installed at my business?',
    a: 'A Mac Mini — a small, silent computer about the size of a thick book. It sits behind your counter or in a back office, plugs into power and your WiFi, and runs your automations 24/7. You never touch it.',
  },
  {
    q: 'How does the $43,000/year savings work?',
    a: 'The average full-time executive or personal assistant costs $45,000 to $55,000 per year in salary alone, before benefits, taxes, and management overhead. Mainstay at $600 per month is $7,200 per year — handling the same tasks for a fraction of the cost, 24/7, with no sick days.',
  },
  {
    q: 'Do I need to be technical?',
    a: 'Not at all. We handle everything — setup, configuration, connecting your accounts. After installation you control your agent by texting it on Telegram. No technical knowledge required.',
  },
  {
    q: 'How do I control my agent?',
    a: 'You get a private Telegram bot linked directly to your agent. Text it from anywhere — "post a lunch special for tomorrow", "what happened this week", "draft a response to this complaint". It executes instantly.',
  },
  {
    q: 'What if I need a custom feature?',
    a: 'Custom feature development is included. Tell us what you need in the consultation and we scope it out for free. If it can be automated, we can build it.',
  },
  {
    q: 'What if I need to make changes after install?',
    a: 'We handle all changes remotely via secure remote access. Text or email us what you want updated and we make it happen within a few hours. You never need to let us back into your building.',
  },
  {
    q: 'What if the device goes offline?',
    a: 'We monitor every device remotely. If yours goes offline we will know before you do and reach out. 99% of the time it is a simple power or WiFi issue you can fix by unplugging and replugging.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Cancel anytime with 30 days notice. The Mac Mini is our hardware — we remote in and wipe it, or you can purchase it outright at cost and keep it.',
  },
  {
    q: 'What types of businesses is this for?',
    a: 'Any local service business with customers and an online presence. Best fit: restaurants, salons, gyms, med spas, real estate agents, insurance agents, accountants, chiropractors, dentists, and retail shops.',
  },
]

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({ name: '', business: '', email: '', phone: '', plan: '', message: '' })
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0
    const cursor = cursorRef.current
    const ring = ringRef.current

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (cursor) {
        cursor.style.left = mx + 'px'
        cursor.style.top = my + 'px'
      }
    }

    const animate = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      if (ring) {
        ring.style.left = rx + 'px'
        ring.style.top = ry + 'px'
      }
      requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMove)
    animate()

    document.querySelectorAll('a, button, input, textarea, select').forEach(el => {
      el.addEventListener('mouseenter', () => {
        if (cursor) cursor.style.transform = 'translate(-50%,-50%) scale(2)'
        if (ring) {
          ring.style.width = '60px'
          ring.style.height = '60px'
        }
      })
      el.addEventListener('mouseleave', () => {
        if (cursor) cursor.style.transform = 'translate(-50%,-50%) scale(1)'
        if (ring) {
          ring.style.width = '36px'
          ring.style.height = '36px'
        }
      })
    })

    const onScroll = () => {
      if (navRef.current) navRef.current.classList.toggle('scrolled', window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll)

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 60)
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.06 })
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))

    return () => {
      document.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      setFormState(res.ok ? 'success' : 'error')
    } catch {
      setFormState('error')
    }
  }

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />

      <nav ref={navRef}>
        <a href="#" className="logo">Mainstay<span className="gold">.</span>AI</a>
        <div className="nav-links">
          <a href="#how">How it works</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>
        <a href="#contact" className="nav-cta">Get Started</a>
      </nav>

      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-line" />
        
        <div className="hero-badge reveal">AI Automation for Local Business</div>
        <h1 className="reveal">
          We install <em>AI</em><br />that runs<br />your business.
        </h1>
        <p className="hero-sub reveal">
          One visit. We set up a small computer at your location. It handles your marketing, customer follow-up, and daily operations automatically — 24/7.
        </p>
        <div className="hero-actions reveal">
          <a href="#contact" className="btn-gold">
            <span>Get started — free consultation</span>
          </a>
          <a href="#how" className="btn-ghost">See how it works</a>
        </div>

        <div className="integrations-strip reveal">
          <span className="int-label">Connects to</span>
          <div className="int-list">
            {INTEGRATIONS.map((item, i) => (
              <div key={i} className="int-pill">
                <span>{item.emoji}</span>
                <span>{item.name}</span>
              </div>
            ))}
            <div className="int-pill">+ more</div>
          </div>
        </div>
      </section>

      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...Array(3)].flatMap(() => [
            'Social Media Automation',
            'Email Newsletters',
            'Review Management',
            'Lead Follow-Up',
            '24/7 Automation',
            'On-Site Installation',
            'Invoice Chasing',
            'Morning Briefings',
            'Telegram Control',
          ]).map((item, i) => (
            <div key={i} className="marquee-item">
              <span>{item}</span>
              <span className="marquee-dot" />
            </div>
          ))}
        </div>
      </div>

      <section className="always-on" id="how">
        <div className="inner">
          <div className="reveal">
            <div className="section-label">Always On</div>
            <h2 className="section-title">Your agent works<br /><em>while you sleep.</em></h2>
            <p className="section-sub">Unlike ChatGPT or other AI tools you have to open, your Mainstay agent runs 24/7 on hardware installed at your business. It checks, acts, and executes — automatically, every single day.</p>
          </div>
          
          <div className="timeline reveal">
            {AUTOMATIONS.map((a, i) => (
              <div key={i} className="timeline-row">
                <div className="tl-time">{a.time}</div>
                <div className="tl-dot-wrap"><div className="tl-dot" /></div>
                <div className="tl-desc">{a.label}</div>
              </div>
            ))}
          </div>
          
          <div className="tg-callout reveal">
            <div className="tg-icon">✈️</div>
            <div>
              <div className="tg-title">Control everything from Telegram</div>
              <div className="tg-desc">Text your agent like you would text an employee. Post a flash sale, check last week's leads, draft a response to a complaint. It handles it instantly from anywhere in the world.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-section">
        <div className="inner">
          <div className="reveal">
            <div className="section-label">The Process</div>
            <h2 className="section-title">Three steps.<br /><em>Then forget about it.</em></h2>
          </div>
          <div className="steps-grid">
            {[
              { n: '1', title: 'Free consultation', desc: 'We have a 30-minute call to understand your business, your goals, and which automations will have the biggest impact. No commitment required.' },
              { n: '2', title: 'We come to you', desc: 'We show up at your business, install everything on-site, connect your accounts, and train the agent on your brand. Takes about an hour.' },
              { n: '3', title: 'It runs itself', desc: 'From that moment your agent works automatically. We monitor it remotely, handle updates, and you control it anytime from Telegram.' },
            ].map((s, i) => (
              <div key={i} className="step-card reveal">
                <div className="step-n">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="inner">
          <div className="reveal">
            <div className="section-label">What It Does</div>
            <h2 className="section-title">Everything running<br /><em>automatically.</em></h2>
          </div>
          <div className="feat-grid">
            {FEATURES.map((f, i) => (
              <div key={i} className="feat-card reveal">
                <div className="feat-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="proof-section">
        <div className="inner">
          <div className="reveal">
            <div className="section-label">What Clients Say</div>
            <h2 className="section-title">Real results for<br /><em>real businesses.</em></h2>
          </div>
          <div className="proof-grid">
            {[
              { quote: 'I used to spend two hours every Sunday scheduling social posts. Now I do not think about it. The thing just runs.', name: 'Restaurant Owner', loc: 'Guilford, CT' },
              { quote: 'A lead came in at 11pm Saturday and had a full reply waiting when they woke up. That is the one that sold me.', name: 'Insurance Agent', loc: 'New Haven, CT' },
              { quote: 'It responded to a negative Google review better than I would have. Professionally, quickly, and actually addressed the issue.', name: 'Salon Owner', loc: 'Branford, CT' },
            ].map((t, i) => (
              <div key={i} className="proof-card reveal">
                <div className="proof-quote">&ldquo;{t.quote}&rdquo;</div>
                <div className="proof-author">— {t.name}, {t.loc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-section" id="pricing">
        <div className="inner">
          <div className="reveal">
            <div className="section-label">Pricing</div>
            <h2 className="section-title">One plan.<br /><em>Everything included.</em></h2>
            <p className="section-sub">One flat setup fee covers the consultation, on-site installation, account connections, agent training, and 14-day hypercare. Monthly fee covers API costs, remote monitoring, updates, and ongoing support.</p>
          </div>
          
          <div className="savings-bar reveal">
            <div className="savings-num">$43,000</div>
            <div className="savings-text">average annual savings compared to hiring a full-time assistant</div>
          </div>
          
          <div className="plan-wrap reveal">
            <div className="plan-card">
              <div className="plan-top-line" />
              <div className="plan-name">Mac Mini Setup</div>
              <div className="plan-price">$3,000<span className="plan-per"> one-time</span></div>
              <div className="plan-monthly">+ $600 / month after setup</div>
              <div className="plan-divider" />
              <ul className="plan-list">
                {PLAN_FEATURES.map((f, i) => (
                  <li key={i}>
                    <span className="plan-dot" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="plan-btn">Get started — free consultation</a>
            </div>
          </div>
          
          <div className="custom-callout reveal">
            <div className="cc-title">Need something custom?</div>
            <div className="cc-desc">Every business is different. If you need a workflow, integration, or automation that is not listed — we build it. Tell us what you need in the consultation and we scope it out for free.</div>
            <a href="#contact" className="cc-link">Tell us what you need</a>
          </div>
          
          <p className="pricing-note reveal">Hardware (Mac Mini) purchased at cost and remains our property. Clients can buy it outright at any time. Cancel anytime with 30 days notice.</p>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="inner">
          <div className="reveal">
            <div className="section-label">FAQ</div>
            <h2 className="section-title">Common<br /><em>questions.</em></h2>
          </div>
          <div className="faq-list">
            {FAQS.map((faq, i) => (
              <div key={i} className="faq-item reveal" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="faq-q">
                  <span>{faq.q}</span>
                  <span className="faq-toggle">{openFaq === i ? '−' : '+'}</span>
                </div>
                {openFaq === i && <div className="faq-a">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="inner contact-inner">
          <div className="reveal">
            <div className="section-label">Get Started</div>
            <h2 className="section-title">Free consultation.<br /><em>No commitment.</em></h2>
            <p className="section-sub">Fill out the form and we will reach out within 24 hours to schedule a free 30-minute call. We will walk through exactly what we would build for your business before you spend a dollar.</p>
          </div>
          
          {formState === 'success' ? (
            <div className="success-box reveal">
              <div className="success-title">You are on the list.</div>
              <p>We will reach out within 24 hours. Check your email at {formData.email}.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form reveal">
              <div className="form-row">
                <div className="field">
                  <label>Your Name *</label>
                  <input type="text" required placeholder="John Smith" value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} />
                </div>
                <div className="field">
                  <label>Business Name *</label>
                  <input type="text" required placeholder="Smith Barbershop" value={formData.business} onChange={e => setFormData(p => ({ ...p, business: e.target.value }))} />
                </div>
              </div>
              <div className="form-row">
                <div className="field">
                  <label>Email *</label>
                  <input type="email" required placeholder="john@yourbusiness.com" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} />
                </div>
                <div className="field">
                  <label>Phone</label>
                  <input type="tel" placeholder="(203) 555-0100" value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} />
                </div>
              </div>
              <div className="field">
                <label>What type of business do you run?</label>
                <textarea placeholder="Tell us about your business, what you currently do for marketing, and what takes up most of your time." value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} />
              </div>
              {formState === 'error' && <p className="form-error">Something went wrong. Email us at hello@mainstay.ai</p>}
              <button type="submit" disabled={formState === 'loading'} className="submit-btn">
                <span>{formState === 'loading' ? 'Sending...' : 'Book free consultation'}</span>
              </button>
            </form>
          )}
        </div>
      </section>

      <footer>
        <div className="inner footer-inner">
          <a href="#" className="logo">Mainstay<span className="gold">.</span>AI</a>
          <p>We install AI that runs your business.</p>
          <div className="footer-links">
            <a href="mailto:hello@mainstay.ai">hello@mainstay.ai</a>
            <span>·</span>
            <span>Guilford, CT</span>
            <span>·</span>
            <span>2025 Mainstay AI</span>
          </div>
        </div>
      </footer>

      <style jsx>{\`
        :root {
          --black: #080808;
          --s1: #0f0f0f;
          --s2: #161616;
          --b1: rgba(255,255,255,0.07);
          --b2: rgba(255,255,255,0.12);
          --gold: #C9A96E;
          --white: #F8F6F1;
          --m1: rgba(248,246,241,0.45);
          --m2: rgba(248,246,241,0.2);
        }

        .gold { color: var(--gold); }

        /* CURSOR */
        .cursor {
          position: fixed;
          width: 8px;
          height: 8px;
          background: var(--gold);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%,-50%);
          transition: transform 0.15s;
        }
        .cursor-ring {
          position: fixed;
          width: 36px;
          height: 36px;
          border: 1px solid rgba(201,169,110,0.35);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          transform: translate(-50%,-50%);
          transition: width 0.3s, height 0.3s;
        }

        /* NAV */
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 500;
          padding: 24px 56px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid transparent;
          transition: all 0.4s;
        }
        nav.scrolled {
          background: rgba(8,8,8,0.95);
          backdrop-filter: blur(20px);
          border-color: var(--b1);
        }
        .logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 400;
          letter-spacing: 2px;
          color: var(--white);
          text-decoration: none;
        }
        .nav-links {
          display: flex;
          gap: 40px;
        }
        .nav-links a {
          text-decoration: none;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--m1);
          transition: color 0.2s;
          cursor: none;
        }
        .nav-links a:hover {
          color: var(--white);
        }
        .nav-cta {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--gold);
          text-decoration: none;
          border-bottom: 1px solid rgba(201,169,110,0.4);
          padding-bottom: 2px;
          cursor: none;
        }

        /* HERO */
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 120px 56px 80px;
          position: relative;
          overflow: hidden;
          gap: 32px;
        }
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(201,169,110,0.035) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(201,169,110,0.035) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 100%);
        }
        .hero-glow {
          position: absolute;
          width: 800px;
          height: 800px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%,-55%);
          pointer-events: none;
        }
        .hero-line {
          position: absolute;
          top: 0;
          left: 56px;
          right: 56px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          opacity: 0;
          animation: lineReveal 1.5s 0.5s forwards;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gold);
        }
        .hero-badge::before {
          content: '';
          display: block;
          width: 32px;
          height: 1px;
          background: var(--gold);
        }
        .hero h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(68px, 9vw, 130px);
          font-weight: 300;
          line-height: 0.95;
          letter-spacing: -2px;
          color: var(--white);
          max-width: 900px;
        }
        .hero h1 em {
          font-style: italic;
          color: var(--gold);
        }
        .hero-sub {
          font-size: 16px;
          color: var(--m1);
          line-height: 1.75;
          max-width: 500px;
        }
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        /* BUTTONS */
        .btn-gold {
          display: inline-flex;
          align-items: center;
          background: var(--gold);
          color: var(--black);
          padding: 15px 32px;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          position: relative;
          overflow: hidden;
          cursor: none;
        }
        .btn-gold::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--white);
          transform: translateX(-101%);
          transition: transform 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .btn-gold:hover::before {
          transform: translateX(0);
        }
        .btn-gold span {
          position: relative;
          z-index: 1;
        }
        .btn-ghost {
          font-size: 12px;
          font-weight: 500;
          color: var(--m1);
          text-decoration: none;
          cursor: none;
          transition: color 0.2s;
        }
        .btn-ghost:hover {
          color: var(--white);
        }

        /* INTEGRATIONS */
        .integrations-strip {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          padding-top: 16px;
          border-top: 1px solid var(--b1);
        }
        .int-label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--m2);
          white-space: nowrap;
        }
        .int-list {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .int-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border: 1px solid var(--b1);
          border-radius: 20px;
          font-size: 11px;
          color: var(--m1);
          transition: all 0.2s;
          white-space: nowrap;
          cursor: none;
        }
        .int-pill:hover {
          border-color: var(--gold);
          color: var(--white);
        }

        /* MARQUEE */
        .marquee-wrap {
          border-top: 1px solid var(--b1);
          border-bottom: 1px solid var(--b1);
          padding: 18px 0;
          overflow: hidden;
          background: var(--s1);
        }
        .marquee-track {
          display: flex;
          animation: marquee 28s linear infinite;
          white-space: nowrap;
        }
        .marquee-item {
          display: flex;
          align-items: center;
          gap: 28px;
          padding: 0 36px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--m2);
        }
        .marquee-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: var(--gold);
          opacity: 0.5;
          flex-shrink: 0;
        }

        /* SHARED */
        .inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .section-label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .section-label::after {
          content: '';
          width: 36px;
          height: 1px;
          background: var(--gold);
          opacity: 0.4;
        }
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(40px, 5.5vw, 72px);
          font-weight: 300;
          line-height: 1.05;
          letter-spacing: -1px;
          color: var(--white);
          margin-bottom: 20px;
        }
        .section-title em {
          font-style: italic;
          color: var(--gold);
        }
        .section-sub {
          font-size: 15px;
          color: var(--m1);
          line-height: 1.8;
          max-width: 560px;
        }

        /* ALWAYS ON */
        .always-on {
          padding: 120px 56px;
          background: var(--s1);
          border-top: 1px solid var(--b1);
        }
        .timeline {
          margin-top: 48px;
          border: 1px solid var(--b1);
        }
        .timeline-row {
          display: grid;
          grid-template-columns: 140px 36px 1fr;
          align-items: center;
          padding: 22px 28px;
          border-bottom: 1px solid var(--b1);
          transition: background 0.2s;
        }
        .timeline-row:last-child {
          border-bottom: none;
        }
        .timeline-row:hover {
          background: var(--s2);
        }
        .tl-time {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--gold);
        }
        .tl-dot-wrap {
          display: flex;
          justify-content: center;
        }
        .tl-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--gold);
          opacity: 0.5;
        }
        .tl-desc {
          font-size: 14px;
          color: var(--m1);
          line-height: 1.6;
        }
        .tg-callout {
          margin-top: 28px;
          padding: 28px 32px;
          border: 1px solid rgba(201,169,110,0.15);
          background: rgba(201,169,110,0.04);
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }
        .tg-icon {
          font-size: 28px;
          flex-shrink: 0;
        }
        .tg-title {
          font-size: 15px;
          font-weight: 600;
          color: var(--white);
          margin-bottom: 8px;
        }
        .tg-desc {
          font-size: 14px;
          color: var(--m1);
          line-height: 1.7;
        }

        /* HOW */
        .how-section {
          padding: 120px 56px;
          background: var(--black);
        }
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 1px;
          margin-top: 48px;
          background: var(--b1);
          border: 1px solid var(--b1);
        }
        .step-card {
          background: var(--black);
          padding: 44px 32px;
          transition: background 0.3s;
        }
        .step-card:hover {
          background: var(--s1);
        }
        .step-n {
          font-family: 'Cormorant Garamond', serif;
          font-size: 52px;
          font-weight: 300;
          color: var(--b2);
          line-height: 1;
          margin-bottom: 20px;
        }
        .step-card h3 {
          font-size: 16px;
          font-weight: 600;
          color: var(--white);
          margin-bottom: 10px;
        }
        .step-card p {
          font-size: 14px;
          color: var(--m1);
          line-height: 1.8;
        }

        /* SERVICES */
        .services-section {
          padding: 120px 56px;
          background: var(--s1);
          border-top: 1px solid var(--b1);
        }
        .feat-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 1px;
          margin-top: 48px;
          background: var(--b1);
          border: 1px solid var(--b1);
        }
        .feat-card {
          background: var(--s1);
          padding: 36px 28px;
          transition: background 0.3s;
        }
        .feat-card:hover {
          background: var(--s2);
        }
        .feat-icon {
          font-size: 22px;
          margin-bottom: 14px;
        }
        .feat-card h3 {
          font-size: 14px;
          font-weight: 600;
          color: var(--white);
          margin-bottom: 8px;
        }
        .feat-card p {
          font-size: 13px;
          color: var(--m1);
          line-height: 1.8;
        }

        /* PROOF */
        .proof-section {
          padding: 120px 56px;
          background: var(--black);
          border-top: 1px solid var(--b1);
        }
        .proof-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 20px;
          margin-top: 48px;
        }
        .proof-card {
          padding: 36px;
          border: 1px solid var(--b1);
          background: var(--s1);
          transition: border-color 0.3s;
        }
        .proof-card:hover {
          border-color: rgba(201,169,110,0.3);
        }
        .proof-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 300;
          font-style: italic;
          color: var(--white);
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .proof-author {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--gold);
        }

        /* PRICING */
        .pricing-section {
          padding: 120px 56px;
          background: var(--s1);
          border-top: 1px solid var(--b1);
        }
        .savings-bar {
          display: flex;
          align-items: center;
          gap: 24px;
          max-width: 600px;
          margin: 40px auto 0;
          padding: 28px 36px;
          border: 1px solid rgba(201,169,110,0.2);
          background: rgba(201,169,110,0.05);
        }
        .savings-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 52px;
          font-weight: 300;
          color: var(--gold);
          line-height: 1;
          white-space: nowrap;
        }
        .savings-text {
          font-size: 13px;
          color: var(--m1);
          line-height: 1.6;
        }
        .plan-wrap {
          display: flex;
          justify-content: center;
          margin-top: 40px;
        }
        .plan-card {
          width: 100%;
          max-width: 600px;
          border: 1px solid var(--b2);
          background: var(--s2);
          padding: 48px;
          position: relative;
        }
        .plan-top-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--gold);
        }
        .plan-name {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 20px;
        }
        .plan-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 68px;
          font-weight: 300;
          color: var(--white);
          line-height: 1;
          letter-spacing: -2px;
        }
        .plan-per {
          font-size: 18px;
          font-weight: 300;
          letter-spacing: 0;
        }
        .plan-monthly {
          font-size: 13px;
          color: var(--m2);
          margin-top: 4px;
          letter-spacing: 0.5px;
        }
        .plan-divider {
          height: 1px;
          background: var(--b1);
          margin: 28px 0;
        }
        .plan-list {
          list-style: none;
          margin-bottom: 36px;
        }
        .plan-list li {
          font-size: 14px;
          color: var(--m1);
          padding: 9px 0 9px 18px;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          position: relative;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .plan-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--gold);
          opacity: 0.5;
          flex-shrink: 0;
          position: absolute;
          left: 0;
        }
        .plan-btn {
          display: block;
          text-align: center;
          padding: 16px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          background: var(--gold);
          color: var(--black);
          cursor: none;
          transition: background 0.2s;
        }
        .plan-btn:hover {
          background: var(--white);
        }
        .custom-callout {
          max-width: 600px;
          margin: 20px auto 0;
          padding: 28px 32px;
          border: 1px solid rgba(201,169,110,0.15);
          background: rgba(201,169,110,0.03);
        }
        .cc-title {
          font-size: 14px;
          font-weight: 600;
          color: var(--white);
          margin-bottom: 8px;
        }
        .cc-desc {
          font-size: 13px;
          color: var(--m1);
          line-height: 1.7;
          margin-bottom: 16px;
        }
        .cc-link {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--gold);
          text-decoration: none;
          border-bottom: 1px solid rgba(201,169,110,0.3);
          padding-bottom: 1px;
          cursor: none;
        }
        .pricing-note {
          font-size: 12px;
          color: var(--m2);
          margin-top: 24px;
          text-align: center;
          line-height: 1.7;
        }

        /* FAQ */
        .faq-section {
          padding: 120px 56px;
          background: var(--black);
          border-top: 1px solid var(--b1);
        }
        .faq-list {
          margin-top: 48px;
          border: 1px solid var(--b1);
        }
        .faq-item {
          border-bottom: 1px solid var(--b1);
          cursor: pointer;
          transition: background 0.2s;
        }
        .faq-item:last-child {
          border-bottom: none;
        }
        .faq-item:hover {
          background: var(--s1);
        }
        .faq-q {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          padding: 24px 28px;
          font-size: 15px;
          font-weight: 500;
          color: var(--white);
        }
        .faq-toggle {
          font-size: 20px;
          font-weight: 300;
          color: var(--gold);
          flex-shrink: 0;
        }
        .faq-a {
          padding: 0 28px 24px;
          font-size: 14px;
          color: var(--m1);
          line-height: 1.8;
        }

        /* CONTACT */
        .contact-section {
          padding: 120px 56px;
          background: var(--s1);
          border-top: 1px solid var(--b1);
        }
        .contact-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .field label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--m1);
        }
        .field input,
        .field select,
        .field textarea {
          background: var(--black);
          border: 1px solid var(--b2);
          color: var(--white);
          padding: 13px 16px;
          font-size: 14px;
          font-family: 'Syne', sans-serif;
          outline: none;
          transition: border-color 0.2s;
          border-radius: 0;
          appearance: none;
        }
        .field input:focus,
        .field select:focus,
        .field textarea:focus {
          border-color: var(--gold);
        }
        .field textarea {
          min-height: 130px;
          resize: vertical;
        }
        .field input::placeholder,
        .field textarea::placeholder {
          color: var(--m2);
        }
        .submit-btn {
          background: var(--gold);
          color: var(--black);
          border: none;
          padding: 16px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-family: 'Syne', sans-serif;
          position: relative;
          overflow: hidden;
          cursor: none;
          margin-top: 8px;
          transition: background 0.2s;
        }
        .submit-btn:hover {
          background: var(--white);
        }
        .submit-btn:disabled {
          opacity: 0.6;
        }
        .form-error {
          font-size: 13px;
          color: #ff7070;
          text-align: center;
        }
        .success-box {
          padding: 56px 40px;
          border: 1px solid rgba(201,169,110,0.3);
          background: rgba(201,169,110,0.04);
          text-align: center;
        }
        .success-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 44px;
          font-weight: 300;
          color: var(--gold);
          margin-bottom: 12px;
        }
        .success-box p {
          font-size: 15px;
          color: var(--m1);
          line-height: 1.7;
        }

        /* FOOTER */
        footer {
          padding: 40px 56px;
          border-top: 1px solid var(--b1);
          background: var(--black);
        }
        .footer-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }
        footer p {
          font-size: 12px;
          color: var(--m2);
        }
        .footer-links {
          display: flex;
          gap: 12px;
          align-items: center;
          font-size: 11px;
          color: var(--m2);
        }
        .footer-links a {
          color: var(--m2);
          text-decoration: none;
          transition: color 0.2s;
          cursor: none;
        }
        .footer-links a:hover {
          color: var(--gold);
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .feat-grid {
            grid-template-columns: repeat(2,1fr);
          }
          .contact-inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
        @media (max-width: 768px) {
          nav {
            padding: 18px 24px;
          }
          .nav-links {
            display: none;
          }
          .hero, .always-on, .how-section, .services-section, .proof-section, .pricing-section, .faq-section, .contact-section {
            padding: 80px 24px;
          }
          footer {
            padding: 36px 24px;
          }
          .steps-grid, .proof-grid {
            grid-template-columns: 1fr;
          }
          .feat-grid {
            grid-template-columns: 1fr;
          }
          .timeline-row {
            grid-template-columns: 90px 28px 1fr;
            padding: 18px 16px;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
          .footer-inner {
            flex-direction: column;
            text-align: center;
          }
          .savings-bar {
            flex-direction: column;
            text-align: center;
          }
          .hero-line {
            left: 24px;
            right: 24px;
          }
        }
      `}</style>
    </>
  )
}
