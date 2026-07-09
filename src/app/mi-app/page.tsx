import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Mi App',
  description: 'El portal del vendedor de Herohome. Chatea con Hero, confirma visitas, negocia ofertas y gestiona tu vivienda desde el móvil.',
  alternates: { canonical: 'https://herohome.es/mi-app' },
}

const STYLES = `
.miapp {
  --ink:#0A0E17; --ink-2:#1C2333; --violet:#5B5CFF; --violet-dark:#3C3ECC; --violet-light:#EEEEFF;
  --teal:#0EA5A0; --teal-light:#E0F7F6; --surface:#F8FAFC; --white:#fff; --slate:#64748B;
  --slate-light:#94A3B8; --border:#E2E8F0; --border-subtle:#F1F5F9; --error:#E05353; --error-bg:#FFF0F0;
}
.miapp *, .miapp *::before, .miapp *::after { box-sizing: border-box; }
.miapp .gallery { padding: 24px 24px 96px; }
.miapp .frames { display: flex; flex-wrap: wrap; gap: 44px; max-width: 1360px; margin: 0 auto; justify-content: center; }
.miapp .frame-wrap { display: flex; flex-direction: column; gap: 16px; }
.miapp .frame-label { font-size: 12px; font-weight: 500; color: rgba(255,255,255,0.5); display: flex; align-items: baseline; gap: 8px; padding-left: 4px; }
.miapp .frame-label strong { font-size: 14px; font-weight: 600; color: #F8FAFC; letter-spacing: -0.01em; }
.miapp .frame-label .n { font-size: 11px; font-weight: 700; color: var(--violet); border: 1px solid rgba(91,92,255,0.4); border-radius: 20px; padding: 1px 8px; margin-right: 2px; }
.miapp .phone { width: 375px; height: 760px; background: var(--surface); border-radius: 34px; border: 4px solid #1C2333; overflow: hidden; display: flex; flex-direction: column; color: var(--ink); position: relative; box-shadow: 0 0 60px rgba(91,92,255,0.08), 0 40px 80px rgba(0,0,0,0.45); }
.miapp .navbar { height: 52px; background: #111827; flex-shrink: 0; display: flex; align-items: center; justify-content: space-between; padding: 0 16px; }
.miapp .navbar .lockup2 { display: flex; align-items: center; gap: 10px; }
.miapp .navbar .wordmark { font-size: 15px; font-weight: 600; letter-spacing: -0.03em; color: #F8FAFC; }
.miapp .navbar .bell { position: relative; display: flex; padding: 6px; }
.miapp .navbar .bell svg { stroke: rgba(255,255,255,0.7); }
.miapp .navbar .bell .dot { position: absolute; top: 4px; right: 4px; width: 8px; height: 8px; border-radius: 50%; background: var(--violet); border: 2px solid #111827; }
.miapp .tabbar { height: 60px; background: var(--white); border-top: 1px solid var(--border); flex-shrink: 0; display: flex; justify-content: space-around; align-items: center; }
.miapp .tab { display: flex; flex-direction: column; align-items: center; gap: 3px; font-size: 10px; font-weight: 500; color: var(--slate-light); width: 68px; }
.miapp .tab svg { stroke: var(--slate-light); }
.miapp .tab.active { color: var(--violet); }
.miapp .tab.active svg { stroke: var(--violet); }
.miapp .content { flex: 1; overflow: hidden; display: flex; flex-direction: column; }
.miapp .scroll { flex: 1; overflow: hidden; padding: 16px; display: flex; flex-direction: column; gap: 12px; }
.miapp .eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--violet); }
.miapp .page-title { font-size: 24px; font-weight: 600; letter-spacing: -0.025em; color: var(--ink); line-height: 1.2; margin-top: 2px; }
.miapp .page-header { padding: 20px 16px 12px; }
.miapp .card { background: var(--white); border: 1px solid var(--border); border-radius: 12px; padding: 16px; }
.miapp .btn { display: inline-flex; align-items: center; justify-content: center; padding: 10px 20px; border-radius: 7px; font-size: 13px; font-weight: 500; letter-spacing: -0.01em; border: none; font-family: inherit; cursor: pointer; }
.miapp .btn-primary { background: var(--violet); color: #fff; }
.miapp .btn-secondary { background: transparent; color: var(--ink); border: 1px solid var(--border); }
.miapp .btn-danger-ghost { background: transparent; color: var(--error); border: 1px solid var(--border); }
.miapp .btn-block { width: 100%; }
.miapp .badge { display: inline-flex; padding: 3px 10px; border-radius: 20px; font-size: 11px; font-weight: 600; letter-spacing: 0.02em; }
.miapp .badge-teal { background: var(--teal-light); color: var(--teal); }
.miapp .badge-neutral { background: var(--surface); color: var(--slate); border: 1px solid var(--border); }
.miapp .badge-violet { background: var(--violet-light); color: var(--violet-dark); }
.miapp .badge-error { background: var(--error-bg); color: var(--error); }
.miapp .segmented { display: flex; background: var(--border-subtle); border-radius: 9px; padding: 3px; margin: 0 16px 4px; gap: 2px; }
.miapp .segment { flex: 1; text-align: center; padding: 7px 4px; font-size: 12px; font-weight: 500; color: var(--slate); border-radius: 7px; display: flex; align-items: center; justify-content: center; gap: 5px; }
.miapp .segment.active { background: var(--white); color: var(--ink); border: 1px solid var(--border); font-weight: 600; }
.miapp .segment .count { background: var(--violet); color: #fff; font-size: 10px; font-weight: 700; border-radius: 10px; padding: 1px 6px; }
.miapp .chat-day { align-self: center; font-size: 11px; font-weight: 500; color: var(--slate-light); padding: 2px 0; }
.miapp .bubble-row { display: flex; gap: 8px; align-items: flex-end; }
.miapp .bubble-agent { background: var(--white); border: 1px solid var(--border); border-radius: 16px 16px 16px 4px; padding: 10px 14px; font-size: 14px; line-height: 1.6; color: var(--ink); max-width: 270px; }
.miapp .bubble-user { background: var(--violet); color: #fff; border-radius: 16px 16px 4px 16px; padding: 10px 14px; font-size: 14px; line-height: 1.6; max-width: 260px; margin-left: auto; }
.miapp .hero-avatar { width: 26px; height: 26px; border-radius: 50%; background: var(--violet); flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
.miapp .chips { display: flex; gap: 8px; flex-wrap: wrap; padding-left: 34px; }
.miapp .chip { font-size: 12px; font-weight: 500; color: var(--violet-dark); background: var(--violet-light); border: 1px solid #CACBFF; border-radius: 20px; padding: 6px 12px; }
.miapp .chat-input-bar { border-top: 1px solid var(--border); background: var(--white); padding: 10px 12px; display: flex; gap: 8px; align-items: center; flex-shrink: 0; }
.miapp .chat-input { flex: 1; border: 1px solid var(--border); border-radius: 20px; padding: 10px 16px; font-size: 14px; color: var(--slate-light); background: var(--white); }
.miapp .send-btn { width: 38px; height: 38px; border-radius: 50%; background: var(--violet); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.miapp .visit-top { display: flex; justify-content: space-between; align-items: flex-start; }
.miapp .visit-date { font-size: 11px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--slate-light); }
.miapp .visit-time { font-size: 18px; font-weight: 600; letter-spacing: -0.02em; color: var(--ink); margin-top: 2px; }
.miapp .visit-meta { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--slate); margin-top: 8px; }
.miapp .visit-meta svg { stroke: var(--slate-light); flex-shrink: 0; }
.miapp .visit-actions { display: flex; gap: 8px; margin-top: 14px; }
.miapp .visit-actions .btn { flex: 1; }
.miapp .chain-header { background: var(--violet-light); margin: -16px -16px 12px; padding: 8px 16px; border-bottom: 1px solid #CACBFF; border-radius: 12px 12px 0 0; font-size: 11px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--violet-dark); }
.miapp .offer-row { padding: 10px 0; border-bottom: 1px solid var(--border-subtle); }
.miapp .offer-row.past { opacity: 0.5; }
.miapp .offer-row:last-of-type { border-bottom: none; }
.miapp .offer-price { font-size: 20px; font-weight: 700; letter-spacing: -0.03em; color: var(--ink); }
.miapp .offer-who { font-size: 11px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--slate-light); }
.miapp .offer-date { font-size: 12px; color: var(--slate-light); margin-top: 2px; }
.miapp .prop-hero { border-radius: 12px; overflow: hidden; border: 1px solid var(--border); background: var(--white); }
.miapp .prop-img { height: 110px; background: linear-gradient(135deg, #1C2333 0%, #0A0E17 60%, #181966 130%); display: flex; align-items: flex-start; justify-content: flex-end; padding: 10px; }
.miapp .prop-body { padding: 14px 16px 16px; }
.miapp .prop-price { font-size: 22px; font-weight: 700; letter-spacing: -0.03em; color: var(--ink); }
.miapp .prop-addr { font-size: 12px; color: var(--slate-light); margin-top: 2px; }
.miapp .prop-specs { font-size: 12px; font-weight: 500; color: var(--slate); margin-top: 6px; }
.miapp .form-label { font-size: 11px; font-weight: 600; color: var(--slate-light); letter-spacing: 0.02em; display: block; margin-bottom: 5px; }
.miapp .input { border: 1px solid var(--border); border-radius: 7px; padding: 9px 13px; font-size: 13px; color: var(--ink); background: var(--white); width: 100%; font-family: inherit; }
.miapp .input.readonly { background: var(--surface); color: var(--slate); }
.miapp .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.miapp .col-2 { grid-column: span 2; }
.miapp .section-eyebrow { margin-bottom: 10px; display: block; }
.miapp .sticky-save { border-top: 1px solid var(--border); background: var(--white); padding: 12px 16px; flex-shrink: 0; }
.miapp .login { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 32px; position: relative; background: var(--surface); }
.miapp .login::before { content: ''; position: absolute; inset: 0 0 55% 0; background: radial-gradient(80% 100% at 50% 0%, rgba(91,92,255,0.09) 0%, rgba(91,92,255,0) 100%); pointer-events: none; }
.miapp .login-inner { width: 100%; max-width: 300px; display: flex; flex-direction: column; align-items: center; position: relative; }
.miapp .login-word { font-size: 22px; font-weight: 600; letter-spacing: -0.03em; color: var(--ink); margin-top: 18px; }
.miapp .login-sub { font-size: 13px; color: var(--slate); margin-top: 6px; margin-bottom: 32px; }
.miapp .login .input { padding: 12px 14px; font-size: 14px; border-radius: 9px; }
.miapp .login .btn { margin-top: 12px; padding: 12px; font-size: 14px; border-radius: 9px; }
.miapp .login-foot { margin-top: 28px; font-size: 12px; color: var(--slate-light); text-align: center; line-height: 1.6; }
@media (max-width: 480px) { .miapp .phone { width: 100%; max-width: 375px; } }
`

const GALLERY_HTML = `
<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
  <linearGradient id="pl" x1="0" y1="6" x2="0" y2="58" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#A5A6FF"/><stop offset="100%" stop-color="#3C3ECC"/></linearGradient>
  <linearGradient id="pr" x1="0" y1="18" x2="0" y2="58" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#5B5CFF"/><stop offset="100%" stop-color="#282999"/></linearGradient>
</defs></svg>
<section class="gallery"><div class="frames">

  <div class="frame-wrap">
    <div class="frame-label"><span class="n">01</span><strong>Login</strong> acceso con enlace mágico</div>
    <div class="phone">
      <div class="login">
        <div class="login-inner">
          <svg width="54" height="80" viewBox="0 0 64 64" fill="none" aria-hidden="true"><rect x="10" y="6" width="12" height="52" rx="5" fill="url(#pl)"/><rect x="30" y="18" width="12" height="40" rx="5" fill="url(#pr)"/></svg>
          <div class="login-word">Herohome</div>
          <div class="login-sub">Portal del vendedor</div>
          <div style="width:100%">
            <label class="form-label" style="font-size:12px; color:#64748B">Correo electrónico</label>
            <div class="input" style="color:#94A3B8">tu@email.com</div>
            <button class="btn btn-primary btn-block">Enviar enlace de acceso</button>
          </div>
          <p class="login-foot">Sin contraseñas. Te enviamos un enlace<br>y entras con un toque.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="frame-wrap">
    <div class="frame-label"><span class="n">02</span><strong>Inicio</strong> chat con Hero</div>
    <div class="phone">
      <div class="navbar">
        <div class="lockup2">
          <svg width="22" height="22" viewBox="0 0 64 64" fill="none" aria-hidden="true"><rect x="10" y="6" width="12" height="52" rx="5" fill="url(#pl)"/><rect x="30" y="18" width="12" height="40" rx="5" fill="url(#pr)"/></svg>
          <span class="wordmark">Herohome</span>
        </div>
        <div style="display:flex; align-items:center; gap:2px"><div class="bell"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><div class="bell">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          <span class="dot"></span>
        </div></div>
      </div>
      <div class="content">
        <div class="scroll" style="gap:14px">
          <span class="chat-day">Hoy, 7 de julio</span>
          <div class="bubble-row">
            <div class="hero-avatar"><svg width="13" height="13" viewBox="0 0 64 64" fill="none"><rect x="10" y="6" width="12" height="52" rx="5" fill="rgba(255,255,255,0.9)"/><rect x="30" y="18" width="12" height="40" rx="5" fill="rgba(255,255,255,0.65)"/></svg></div>
            <div class="bubble-agent">Buenos días, María. Tienes una visita pendiente de confirmar para el miércoles a las 18:00. ¿Quieres que la confirme?</div>
          </div>
          <div class="bubble-user">Sí, confírmala. ¿Cómo va la venta esta semana?</div>
          <div class="bubble-row">
            <div class="hero-avatar"><svg width="13" height="13" viewBox="0 0 64 64" fill="none"><rect x="10" y="6" width="12" height="52" rx="5" fill="rgba(255,255,255,0.9)"/><rect x="30" y="18" width="12" height="40" rx="5" fill="rgba(255,255,255,0.65)"/></svg></div>
            <div class="bubble-agent">Hecho — visita del miércoles confirmada, Carlos recibirá el aviso por WhatsApp.<br><br>Esta semana: 2 visitas realizadas y una oferta activa de 420.000 €. La tienes en la sección Ofertas.</div>
          </div>
          <div class="chips">
            <span class="chip">Ver mis visitas</span>
            <span class="chip">¿Tengo ofertas nuevas?</span>
            <span class="chip">Bloquear un día</span>
          </div>
        </div>
        <div class="chat-input-bar">
          <div class="chat-input">Escribe un mensaje…</div>
          <div class="send-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></div>
        </div>
      </div>
      <div class="tabbar">
        <div class="tab active"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>Hero</div>
        <div class="tab"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>Vivienda</div>
        <div class="tab"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>Visitas</div>
        <div class="tab"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>Ofertas</div>
      </div>
    </div>
  </div>

  <div class="frame-wrap">
    <div class="frame-label"><span class="n">03</span><strong>Visitas</strong> pendientes de confirmar</div>
    <div class="phone">
      <div class="navbar">
        <div class="lockup2">
          <svg width="22" height="22" viewBox="0 0 64 64" fill="none" aria-hidden="true"><rect x="10" y="6" width="12" height="52" rx="5" fill="url(#pl)"/><rect x="30" y="18" width="12" height="40" rx="5" fill="url(#pr)"/></svg>
          <span class="wordmark">Herohome</span>
        </div>
        <div style="display:flex; align-items:center; gap:2px"><div class="bell"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><div class="bell">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
        </div></div>
      </div>
      <div class="content">
        <div class="page-header"><span class="eyebrow">Mi calendario</span><h2 class="page-title">Visitas</h2></div>
        <div class="segmented">
          <div class="segment active">Pendientes <span class="count">2</span></div>
          <div class="segment">Próximas</div>
          <div class="segment">Disponibilidad</div>
        </div>
        <div class="scroll">
          <div class="card">
            <div class="visit-top"><div><div class="visit-date">Miércoles, 9 de julio</div><div class="visit-time">18:00 – 19:00</div></div><span class="badge badge-neutral">Pendiente</span></div>
            <div class="visit-meta"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>Carlos Fernández</div>
            <div class="visit-meta" style="margin-top:4px"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>+34 612 345 678</div>
            <div class="visit-actions"><button class="btn btn-primary">Confirmar</button><button class="btn btn-danger-ghost">Cancelar</button></div>
          </div>
          <div class="card">
            <div class="visit-top"><div><div class="visit-date">Viernes, 11 de julio</div><div class="visit-time">10:00 – 11:00</div></div><span class="badge badge-neutral">Pendiente</span></div>
            <div class="visit-meta"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>Lucía Romero</div>
            <div class="visit-actions"><button class="btn btn-primary">Confirmar</button><button class="btn btn-danger-ghost">Cancelar</button></div>
          </div>
          <div class="card" style="border-color:#99E6D8; background:#FDFFFE">
            <div class="visit-top"><div><div class="visit-date">Sábado, 12 de julio</div><div class="visit-time">12:00 – 13:00</div></div><span class="badge badge-teal">Confirmada</span></div>
            <div class="visit-meta"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>Roberto Díaz</div>
          </div>
        </div>
      </div>
      <div class="tabbar">
        <div class="tab"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>Hero</div>
        <div class="tab"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>Vivienda</div>
        <div class="tab active"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>Visitas</div>
        <div class="tab"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>Ofertas</div>
      </div>
    </div>
  </div>

  <div class="frame-wrap">
    <div class="frame-label"><span class="n">04</span><strong>Ofertas</strong> ronda de negociación</div>
    <div class="phone">
      <div class="navbar">
        <div class="lockup2">
          <svg width="22" height="22" viewBox="0 0 64 64" fill="none" aria-hidden="true"><rect x="10" y="6" width="12" height="52" rx="5" fill="url(#pl)"/><rect x="30" y="18" width="12" height="40" rx="5" fill="url(#pr)"/></svg>
          <span class="wordmark">Herohome</span>
        </div>
        <div style="display:flex; align-items:center; gap:2px"><div class="bell"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><div class="bell">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          <span class="dot"></span>
        </div></div>
      </div>
      <div class="content">
        <div class="page-header"><span class="eyebrow">Mis ofertas</span><h2 class="page-title">1 negociación activa</h2></div>
        <div class="scroll">
          <div class="card">
            <div class="chain-header">Ronda de negociación · 3 ofertas</div>
            <div class="offer-row past"><div class="offer-who">Oferta del comprador</div><div class="offer-price">400.000 €</div><div class="offer-date">Carlos Fernández · 2 jul</div></div>
            <div class="offer-row past"><div class="offer-who">Tu contraoferta</div><div class="offer-price">435.000 €</div><div class="offer-date">4 jul</div></div>
            <div class="offer-row">
              <div style="display:flex; justify-content:space-between; align-items:flex-start">
                <div><div class="offer-who">Oferta del comprador</div><div class="offer-price">420.000 €</div><div class="offer-date">Carlos Fernández · 6 jul</div></div>
                <span class="badge badge-violet">Pendiente</span>
              </div>
            </div>
            <div style="display:flex; flex-direction:column; gap:8px; margin-top:12px; padding-top:12px; border-top:1px solid var(--border-subtle)">
              <div style="display:flex; gap:8px"><button class="btn btn-primary" style="flex:1">Aceptar</button><button class="btn btn-danger-ghost" style="flex:1">Rechazar</button></div>
              <button class="btn btn-secondary btn-block">Contraofertar</button>
            </div>
          </div>
          <div class="card" style="opacity:0.75">
            <div class="offer-row" style="padding:0; border:none">
              <div style="display:flex; justify-content:space-between; align-items:flex-start">
                <div><div class="offer-who">Oferta del comprador</div><div class="offer-price">380.000 €</div><div class="offer-date">Ana Beltrán · 28 jun</div></div>
                <span class="badge badge-error">Rechazada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tabbar">
        <div class="tab"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>Hero</div>
        <div class="tab"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>Vivienda</div>
        <div class="tab"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>Visitas</div>
        <div class="tab active"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>Ofertas</div>
      </div>
    </div>
  </div>

  <div class="frame-wrap">
    <div class="frame-label"><span class="n">05</span><strong>Vivienda</strong> ficha y edición</div>
    <div class="phone">
      <div class="navbar">
        <div class="lockup2">
          <svg width="22" height="22" viewBox="0 0 64 64" fill="none" aria-hidden="true"><rect x="10" y="6" width="12" height="52" rx="5" fill="url(#pl)"/><rect x="30" y="18" width="12" height="40" rx="5" fill="url(#pr)"/></svg>
          <span class="wordmark">Herohome</span>
        </div>
        <div style="display:flex; align-items:center; gap:2px"><div class="bell"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><div class="bell">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
        </div></div>
      </div>
      <div class="content">
        <div class="scroll" style="padding-top:20px">
          <div class="prop-hero">
            <div class="prop-img"><span class="badge" style="background:rgba(255,255,255,0.12); color:#F8FAFC">En venta</span></div>
            <div class="prop-body"><div class="prop-price">450.000 €</div><div class="prop-addr">C/ Gran Vía 48, 3ºA · Madrid</div><div class="prop-specs">3 hab. · 85 m² · 2 baños · Ascensor</div></div>
          </div>
          <div class="card">
            <span class="eyebrow section-eyebrow">Ubicación</span>
            <div class="form-grid">
              <div class="col-2"><label class="form-label">Calle</label><div class="input">C/ Gran Vía 48, 3ºA</div></div>
              <div><label class="form-label">Ciudad</label><div class="input">Madrid</div></div>
              <div><label class="form-label">Código postal</label><div class="input">28013</div></div>
            </div>
          </div>
          <div class="card">
            <span class="eyebrow section-eyebrow">Precios</span>
            <div class="form-grid">
              <div><label class="form-label">Precio de venta (€)</label><div class="input">450.000</div></div>
              <div><label class="form-label">Oferta mínima (€)</label><div class="input">410.000</div></div>
              <div><label class="form-label">Honorarios (%)</label><div class="input readonly">1 %</div></div>
              <div><label class="form-label">Honorarios (€)</label><div class="input readonly">4.500 €</div></div>
            </div>
          </div>
        </div>
        <div class="sticky-save"><button class="btn btn-primary btn-block" style="padding:12px">Guardar cambios</button></div>
      </div>
      <div class="tabbar">
        <div class="tab"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>Hero</div>
        <div class="tab active"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>Vivienda</div>
        <div class="tab"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>Visitas</div>
        <div class="tab"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>Ofertas</div>
      </div>
    </div>
  </div>

</div></section>
`

export default function MiAppPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--color-ink)', color: '#F8FAFC' }}>
        {/* Hero intro */}
        <header style={{ position: 'relative', overflow: 'hidden', padding: '168px 24px 64px', textAlign: 'center' }}>
          <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 900, height: 620, pointerEvents: 'none', background: 'radial-gradient(60% 60% at 50% 0%, rgba(91,92,255,0.16) 0%, rgba(91,92,255,0) 70%)' }} />
          <div style={{ position: 'relative', maxWidth: 760, margin: '0 auto' }}>
            <p className="eyebrow" style={{ marginBottom: 20 }}>Mi app</p>
            <h1 className="display-text" style={{ color: '#F8FAFC' }}>Tu venta entera,<br />en una sola app</h1>
            <p style={{ margin: '20px auto 0', maxWidth: 580, fontSize: 17, lineHeight: 1.65, color: 'rgba(248,250,252,0.55)' }}>
              El portal del vendedor de Herohome. Chatea con Hero, confirma visitas, negocia ofertas y gestiona tu vivienda desde el móvil — con tu equipo de IA trabajando a todas horas.
            </p>
            <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: '10px 20px', justifyContent: 'center' }}>
              {['Hero IA 24/7', 'Visitas y ofertas', 'Firma digital'].map(t => (
                <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 500, color: 'rgba(248,250,252,0.6)' }}>
                  <span style={{ width: 6, height: 6, borderRadius: 99, background: 'var(--color-violet)' }} />{t}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Gallery (static markup) */}
        <style dangerouslySetInnerHTML={{ __html: STYLES }} />
        <div className="miapp" dangerouslySetInnerHTML={{ __html: GALLERY_HTML }} />

        {/* CTA band */}
        <section style={{ position: 'relative', overflow: 'hidden', textAlign: 'center', padding: '96px 24px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(50% 120% at 50% 0%, rgba(91,92,255,0.12) 0%, rgba(91,92,255,0) 70%)' }} />
          <div style={{ position: 'relative', maxWidth: 560, margin: '0 auto' }}>
            <h2 className="h1-text" style={{ color: '#F8FAFC' }}>¿Listo para vender con tu equipo de IA?</h2>
            <p style={{ margin: '14px 0 30px', fontSize: 16, color: 'rgba(248,250,252,0.5)' }}>Empieza con una valoración gratuita y te damos acceso al portal del vendedor.</p>
            <Link href="/valoracion" className="btn-primary" data-gtm="cta-valorar-miapp" style={{ padding: '14px 32px' }}>Valorar mi vivienda →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
