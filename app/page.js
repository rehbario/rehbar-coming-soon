'use client';

import { useState, useEffect } from 'react';

const LAUNCH_DATE = new Date('2026-07-31T00:00:00');

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    function calc() {
      const diff = LAUNCH_DATE - new Date();
      if (diff <= 0) return setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);
  return timeLeft;
}

const FEATURES = [
  {
    icon: '🧠',
    title: 'AI Mentor',
    desc: 'Ask anything — Physics, Chemistry, Maths. Get step-by-step explanations tuned to NUST NET & ECAT syllabus.',
    bg: '#EEF2FF',
  },
  {
    icon: '⚡',
    title: 'Adaptive Practice',
    desc: 'Smart MCQ engine that learns your weak areas and focuses sessions where improvement matters most.',
    bg: '#F0F9FF',
  },
  {
    icon: '📋',
    title: 'Full Mock Tests',
    desc: 'Timed, full-length tests modelled on NUST NET and ECAT — with score reports and subject breakdowns.',
    bg: '#ECFDF5',
  },
  {
    icon: '📊',
    title: 'Smart Analytics',
    desc: 'Rank estimates, topic-level progress, and personalised revision plans before exam day.',
    bg: '#FFFBEB',
  },
];

const UNIS = ['NUST NET', 'ECAT', 'UET', 'NED', 'GIKI', 'PIEAS'];

function IgIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M5 3l14 9-14 9V3z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function CountdownBox({ value, label }) {
  return (
    <div className="cd-box">
      <span className="cd-num">{String(value).padStart(2, '0')}</span>
      <span className="cd-label">{label}</span>
    </div>
  );
}

export default function ComingSoon() {
  const timeLeft = useCountdown();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.includes('@')) return;
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 5000);
  }

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #fff;
          font-family: var(--font-geist, system-ui, sans-serif);
          color: #0f172a;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }

        .page { min-height: 100vh; display: flex; flex-direction: column; }

        /* Top rainbow accent line */
        .accent-line {
          height: 3px;
          background: linear-gradient(90deg, #4f46e5 0%, #818cf8 35%, #0ea5e9 65%, #10b981 100%);
          flex-shrink: 0;
        }

        /* ── Navbar ── */
        .nav {
          position: sticky; top: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 2rem; height: 62px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid #f1f5f9;
        }
        .nav-logo {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none; color: inherit;
        }
        .nav-mark {
          width: 34px; height: 34px; border-radius: 10px;
          background: linear-gradient(135deg, #4f46e5 0%, #818cf8 100%);
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-heading, sans-serif);
          font-size: 16px; font-weight: 800; color: #fff;
        }
        .nav-name {
          font-family: var(--font-heading, sans-serif);
          font-size: 19px; font-weight: 800;
          color: #0f172a; letter-spacing: -0.3px;
        }
        .nav-name em { color: #4f46e5; font-style: normal; }
        .nav-socials { display: flex; gap: 6px; }
        .nav-social {
          width: 32px; height: 32px; border-radius: 8px;
          border: 1px solid #e2e8f0; background: #fff;
          display: flex; align-items: center; justify-content: center;
          color: #94a3b8; text-decoration: none;
          transition: border-color 0.18s, color 0.18s, background 0.18s;
        }
        .nav-social:hover { border-color: #4f46e5; color: #4f46e5; background: #eef2ff; }

        /* ── Hero ── */
        .hero {
          flex: 1; position: relative;
          display: flex; flex-direction: column; align-items: center;
          padding: 5.5rem 1.5rem 5rem;
          overflow: hidden; background: #fff;
        }
        .hero-dots {
          position: absolute; inset: 0;
          background-image: radial-gradient(#d1d5db 1px, transparent 1px);
          background-size: 24px 24px;
          opacity: 0.55; z-index: 0;
        }
        .hero-fade {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 80% 65% at 50% -5%, #fff 30%, transparent 100%);
          z-index: 1;
        }
        .hero-fade-bottom {
          position: absolute; bottom: 0; left: 0; right: 0; height: 100px;
          background: linear-gradient(to bottom, transparent, #fff);
          z-index: 1;
        }
        .hero-content {
          position: relative; z-index: 2;
          max-width: 700px; width: 100%;
          display: flex; flex-direction: column; align-items: center;
        }

        .badge {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 5px 14px 5px 9px;
          background: #eef2ff; border: 1px solid #c7d2fe; border-radius: 999px;
          font-size: 12px; font-weight: 600; color: #4338ca; letter-spacing: 0.02em;
          margin-bottom: 1.75rem;
          animation: fadeUp 0.5s ease both;
        }
        .badge-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #4f46e5;
          animation: blink 2s ease-in-out infinite;
        }

        .h1 {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(2.4rem, 6.5vw, 4.25rem);
          font-weight: 800; line-height: 1.1; letter-spacing: -1px;
          text-align: center; color: #0f172a;
          margin-bottom: 1.25rem;
          animation: fadeUp 0.5s 0.08s ease both;
        }
        .h1-grad {
          background: linear-gradient(90deg, #4f46e5 0%, #0ea5e9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .sub {
          font-size: 1.075rem; font-weight: 400; line-height: 1.72;
          color: #475569; text-align: center; max-width: 500px;
          margin-bottom: 2rem;
          animation: fadeUp 0.5s 0.15s ease both;
        }

        .stat-pill {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 14px;
          background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 999px;
          font-size: 12px; font-weight: 500; color: #64748b;
          margin-bottom: 2rem;
          animation: fadeUp 0.5s 0.21s ease both;
        }
        .stat-num { font-weight: 700; color: #0f172a; }

        .form-wrap {
          width: 100%; max-width: 450px;
          animation: fadeUp 0.5s 0.27s ease both;
        }
        .form-row {
          display: flex;
          border: 1.5px solid #e2e8f0; border-radius: 14px;
          overflow: hidden; background: #fff;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .form-row:focus-within {
          border-color: #818cf8;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);
        }
        .form-input {
          flex: 1; padding: 13px 16px;
          border: none; outline: none;
          font-family: inherit; font-size: 14px; color: #0f172a;
          background: transparent; min-width: 0;
        }
        .form-input::placeholder { color: #9ca3af; }
        .form-btn {
          margin: 5px; padding: 0 20px;
          background: #4f46e5; border: none; border-radius: 10px;
          font-family: inherit; font-size: 13px; font-weight: 600; color: #fff;
          cursor: pointer; white-space: nowrap;
          transition: background 0.18s, transform 0.12s;
        }
        .form-btn:hover { background: #4338ca; transform: scale(1.02); }
        .form-btn:active { transform: scale(0.98); }
        .form-note {
          text-align: center; font-size: 12px; color: #94a3b8;
          margin-top: 0.5rem;
          animation: fadeUp 0.5s 0.31s ease both;
        }
        .form-success {
          text-align: center; font-size: 13px; font-weight: 500; color: #059669;
          margin-top: 0.5rem;
        }

        .or-divider {
          display: flex; align-items: center; gap: 12px;
          width: 100%; max-width: 450px;
          color: #94a3b8; font-size: 11px; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          margin: 1.5rem 0;
          animation: fadeUp 0.5s 0.35s ease both;
        }
        .or-divider::before, .or-divider::after {
          content: ''; flex: 1; height: 1px; background: #e2e8f0;
        }

        .stores {
          display: flex; gap: 12px; flex-wrap: wrap; justify-content: center;
          animation: fadeUp 0.5s 0.39s ease both;
        }
        .store-btn {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 18px;
          background: #fff; border: 1.5px solid #e2e8f0; border-radius: 12px;
          text-decoration: none; color: #0f172a;
          opacity: 0.7; cursor: not-allowed;
          transition: border-color 0.18s, box-shadow 0.18s, transform 0.12s, opacity 0.18s;
        }
        .store-btn:hover {
          border-color: #c7d2fe; box-shadow: 0 2px 8px rgba(99, 102, 241, 0.1);
          transform: translateY(-1px); opacity: 0.88;
        }
        .store-icon { color: #475569; display: flex; align-items: center; }
        .store-text { display: flex; flex-direction: column; }
        .store-sub { font-size: 10px; color: #94a3b8; }
        .store-name {
          font-family: var(--font-heading, sans-serif);
          font-size: 13px; font-weight: 700;
        }
        .store-chip {
          display: inline-block;
          font-size: 9px; padding: 1px 6px;
          background: #eef2ff; border-radius: 999px;
          color: #6366f1; font-weight: 600; letter-spacing: 0.04em;
          margin-left: 4px; vertical-align: middle;
          font-family: var(--font-geist, sans-serif);
        }

        /* ── Features ── */
        .features {
          background: #f8fafc;
          border-top: 1px solid #f1f5f9;
          border-bottom: 1px solid #f1f5f9;
          padding: 5rem 1.5rem;
        }
        .features-inner { max-width: 900px; margin: 0 auto; }
        .s-eyebrow {
          text-align: center; font-size: 12px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: #4f46e5; margin-bottom: 0.6rem;
        }
        .s-title {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(1.5rem, 3.5vw, 2rem);
          font-weight: 700; letter-spacing: -0.3px;
          text-align: center; color: #0f172a; margin-bottom: 0.75rem;
        }
        .s-sub {
          text-align: center; font-size: 15px; color: #64748b;
          max-width: 480px; margin: 0 auto 3rem; line-height: 1.65;
        }
        .feat-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }
        .feat-card {
          background: #fff; border: 1px solid #e2e8f0; border-radius: 16px;
          padding: 1.5rem;
          transition: box-shadow 0.2s, transform 0.18s;
        }
        .feat-card:hover { box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07); transform: translateY(-2px); }
        .feat-icon {
          width: 44px; height: 44px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 22px; margin-bottom: 1rem;
        }
        .feat-title {
          font-family: var(--font-heading, sans-serif);
          font-size: 15px; font-weight: 700; color: #0f172a; margin-bottom: 0.4rem;
        }
        .feat-desc { font-size: 13.5px; color: #64748b; line-height: 1.62; }

        /* ── Countdown ── */
        .countdown {
          padding: 5rem 1.5rem;
          display: flex; flex-direction: column; align-items: center;
          background: #fff;
        }
        .cd-eyebrow {
          font-size: 12px; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; color: #94a3b8; margin-bottom: 0.5rem;
        }
        .cd-title {
          font-family: var(--font-heading, sans-serif);
          font-size: 1.75rem; font-weight: 700; letter-spacing: -0.3px;
          color: #0f172a; margin-bottom: 2.5rem; text-align: center;
        }
        .cd-row { display: flex; align-items: flex-start; gap: 1rem; }
        .cd-box {
          display: flex; flex-direction: column; align-items: center;
          background: #fff; border: 1.5px solid #e2e8f0; border-radius: 16px;
          padding: 1.25rem 1.5rem; min-width: 90px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }
        .cd-num {
          font-family: var(--font-mono, monospace);
          font-size: 2.75rem; font-weight: 700; color: #0f172a;
          line-height: 1; letter-spacing: -1px;
          font-variant-numeric: tabular-nums;
        }
        .cd-label {
          font-size: 10px; font-weight: 600; color: #94a3b8;
          text-transform: uppercase; letter-spacing: 0.1em;
          margin-top: 0.45rem;
        }
        .cd-sep {
          font-family: var(--font-mono, monospace);
          font-size: 2rem; font-weight: 700; color: #cbd5e1;
          margin-top: 1.1rem; line-height: 1; user-select: none;
        }

        /* ── Universities ── */
        .unis {
          background: #f8fafc;
          border-top: 1px solid #f1f5f9;
          padding: 3.5rem 1.5rem;
          display: flex; flex-direction: column; align-items: center; gap: 1.25rem;
        }
        .unis-label {
          font-size: 12px; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; color: #94a3b8;
        }
        .unis-row { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
        .uni-chip {
          padding: 7px 16px;
          border: 1.5px solid #e2e8f0; border-radius: 999px;
          font-size: 13px; font-weight: 600; color: #475569;
          background: #fff; cursor: default;
          transition: border-color 0.18s, color 0.18s, background 0.18s;
        }
        .uni-chip:hover { border-color: #818cf8; color: #4f46e5; background: #eef2ff; }

        /* ── Footer ── */
        .footer {
          border-top: 1px solid #f1f5f9;
          padding: 1.5rem 2rem;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 1rem; background: #fff;
        }
        .footer-copy { font-size: 13px; color: #94a3b8; }
        .footer-copy a { color: #94a3b8; text-decoration: none; transition: color 0.18s; }
        .footer-copy a:hover { color: #4f46e5; }
        .footer-links { display: flex; gap: 16px; }
        .footer-link { font-size: 13px; color: #94a3b8; text-decoration: none; transition: color 0.18s; }
        .footer-link:hover { color: #4f46e5; }

        /* ── Animations ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.8); }
        }

        /* ── Responsive ── */
        @media (max-width: 640px) {
          .nav { padding: 0 1.25rem; }
          .hero { padding: 3.5rem 1.25rem 4rem; }
          .feat-grid { grid-template-columns: 1fr 1fr; }
          .cd-row { gap: 0.6rem; }
          .cd-box { min-width: 72px; padding: 1rem 0.75rem; }
          .cd-num { font-size: 2rem; }
          .cd-sep { font-size: 1.5rem; margin-top: 0.85rem; }
          .cd-title { font-size: 1.4rem; }
          .footer { justify-content: center; text-align: center; }
        }
        @media (max-width: 400px) {
          .feat-grid { grid-template-columns: 1fr; }
          .stores { flex-direction: column; align-items: center; }
          .cd-sep { display: none; }
        }
      `}</style>

      <div className="page">
        <div className="accent-line" />

        {/* Navbar */}
        <nav className="nav">
          <a className="nav-logo" href="/">
            <div className="nav-mark">R</div>
            <span className="nav-name">rehbar<em>.io</em></span>
          </a>
          <div className="nav-socials">
            <a className="nav-social" href="https://instagram.com/rehbar.io" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <IgIcon />
            </a>
            <a className="nav-social" href="https://linkedin.com/company/rehbario" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a className="nav-social" href="https://twitter.com/rehbario" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
              <XIcon />
            </a>
          </div>
        </nav>

        {/* Hero */}
        <section className="hero">
          <div className="hero-dots" />
          <div className="hero-fade" />
          <div className="hero-fade-bottom" />
          <div className="hero-content">
            <div className="badge">
              <span className="badge-dot" />
              Launching July 31, 2026
            </div>

            <h1 className="h1">
              Your <span className="h1-grad">AI Guide</span> to<br />
              Pakistan&apos;s Top Engineering<br />
              Universities
            </h1>

            <p className="sub">
              Smart MCQ practice, adaptive mock tests, and an AI mentor that explains every wrong
              answer — built for students preparing for NUST, UET, NED, GIKI &amp; PIEAS.
            </p>

            <div className="stat-pill">
              <span className="stat-num">500,000+</span>
              students take Pakistan&apos;s engineering entry tests every year
            </div>

            <div className="form-wrap">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <input
                    className="form-input"
                    type="email"
                    placeholder="Enter your email for early access"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                  <button className="form-btn" type="submit">
                    Notify Me
                  </button>
                </div>
              </form>
              {status === 'success' && (
                <p className="form-success">You&apos;re on the early access list!</p>
              )}
            </div>
            <p className="form-note">No spam. One email when we launch.</p>

            <div className="or-divider">Available on</div>

            <div className="stores">
              <a className="store-btn" href="#" aria-label="Google Play">
                <span className="store-icon"><PlayIcon /></span>
                <span className="store-text">
                  <span className="store-sub">Get it on</span>
                  <span className="store-name">
                    Google Play <span className="store-chip">Soon</span>
                  </span>
                </span>
              </a>
              <a className="store-btn" href="#" aria-label="App Store">
                <span className="store-icon"><AppleIcon /></span>
                <span className="store-text">
                  <span className="store-sub">Download on the</span>
                  <span className="store-name">
                    App Store <span className="store-chip">Soon</span>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="features">
          <div className="features-inner">
            <p className="s-eyebrow">What&apos;s inside</p>
            <h2 className="s-title">Everything you need to crack the entry test</h2>
            <p className="s-sub">
              From concept explanations to exam-day strategy — Rehbar covers every stage of your preparation.
            </p>
            <div className="feat-grid">
              {FEATURES.map(f => (
                <div className="feat-card" key={f.title}>
                  <div className="feat-icon" style={{ background: f.bg }}>{f.icon}</div>
                  <p className="feat-title">{f.title}</p>
                  <p className="feat-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Countdown */}
        <section className="countdown">
          <p className="cd-eyebrow">Time remaining</p>
          <h2 className="cd-title">MVP launches July 31, 2026</h2>
          <div className="cd-row">
            <CountdownBox value={timeLeft.days} label="Days" />
            <span className="cd-sep">:</span>
            <CountdownBox value={timeLeft.hours} label="Hours" />
            <span className="cd-sep">:</span>
            <CountdownBox value={timeLeft.minutes} label="Min" />
            <span className="cd-sep">:</span>
            <CountdownBox value={timeLeft.seconds} label="Sec" />
          </div>
        </section>

        {/* Universities */}
        <section className="unis">
          <p className="unis-label">Supporting entry tests for</p>
          <div className="unis-row">
            {UNIS.map(u => (
              <div className="uni-chip" key={u}>{u}</div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p className="footer-copy">
            © 2026 Rehbar &nbsp;·&nbsp;{' '}
            <a href="mailto:hello@rehbar.io">hello@rehbar.io</a>
          </p>
          <div className="footer-links">
            <a className="footer-link" href="https://instagram.com/rehbar.io" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a className="footer-link" href="https://linkedin.com/company/rehbario" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="footer-link" href="https://twitter.com/rehbario" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </footer>
      </div>
    </>
  );
}
