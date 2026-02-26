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

    </>
  )
}
