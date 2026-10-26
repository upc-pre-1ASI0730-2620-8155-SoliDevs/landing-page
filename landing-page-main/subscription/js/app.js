/* Tri-Aid wireframes — comportamiento compartido.
   Carga: <script src="assets/app.js" defer> en <head>.
   Las páginas definen window.pageInit(OD) para su lógica propia. */
(function () {
  'use strict';

  /* ---------- Sprite de iconos (stroke 24x24) ---------- */
  var SPRITE =
    '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>' +
    '<symbol id="i-menu" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M3 12h18M3 18h18"/></g></symbol>' +
    '<symbol id="i-x" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></g></symbol>' +
    '<symbol id="i-search" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.35-4.35"/></g></symbol>' +
    '<symbol id="i-bell" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></g></symbol>' +
    '<symbol id="i-plus" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></g></symbol>' +
    '<symbol id="i-check" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></g></symbol>' +
    '<symbol id="i-check-c" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.2 2.4 2.4 4.6-4.8"/></g></symbol>' +
    '<symbol id="i-x-c" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m15 9-6 6M9 9l6 6"/></g></symbol>' +
    '<symbol id="i-info" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/></g></symbol>' +
    '<symbol id="i-alert" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/></g></symbol>' +
    '<symbol id="i-chev-d" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></g></symbol>' +
    '<symbol id="i-chev-r" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></g></symbol>' +
    '<symbol id="i-arr-r" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></g></symbol>' +
    '<symbol id="i-user" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></g></symbol>' +
    '<symbol id="i-users" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></g></symbol>' +
    '<symbol id="i-out" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5M21 12H9"/></g></symbol>' +
    '<symbol id="i-filter" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 3H2l8 9.46V19l4 2v-8.54z"/></g></symbol>' +
    '<symbol id="i-cal" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></g></symbol>' +
    '<symbol id="i-down" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5M12 15V3"/></g></symbol>' +
    '<symbol id="i-print" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></g></symbol>' +
    '<symbol id="i-sms" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></g></symbol>' +
    '<symbol id="i-phone" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></g></symbol>' +
    '<symbol id="i-mail" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></g></symbol>' +
    '<symbol id="i-clock" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></g></symbol>' +
    '<symbol id="i-gauge" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 17.5a8 8 0 1 1 13 0"/><path d="M12 13.5 15.5 9"/><circle cx="12" cy="14" r="1"/></g></symbol>' +
    '<symbol id="i-drop" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.7C12 2.7 5.5 9.6 5.5 14a6.5 6.5 0 0 0 13 0C18.5 9.6 12 2.7 12 2.7z"/></g></symbol>' +
    '<symbol id="i-pulse" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></g></symbol>' +
    '<symbol id="i-thermo" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></g></symbol>' +
    '<symbol id="i-vol" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.8 5.2a9.5 9.5 0 0 1 0 13.6"/></g></symbol>' +
    '<symbol id="i-refresh" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 4v6h-6"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></g></symbol>' +
    '<symbol id="i-file" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/></g></symbol>' +
    '<symbol id="i-shield" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 11.5 2 2 4-4"/></g></symbol>' +
    '<symbol id="i-edit" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"/></g></symbol>' +
    '<symbol id="i-dev" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></g></symbol>' +
    '<symbol id="i-lock" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></g></symbol>' +
    '<symbol id="i-qr" viewBox="0 0 24 24"><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM21 14v.01M14 21h.01M18 18h3v3h-3z"/></g></symbol>' +
    '<symbol id="i-qr-big" viewBox="0 0 29 29"><g fill="currentColor" stroke="none"><rect width="7" height="7"/><rect x="22" width="7" height="7"/><rect y="22" width="7" height="7"/><rect x="1" y="1" width="5" height="5" fill="var(--surface)"/><rect x="23" y="1" width="5" height="5" fill="var(--surface)"/><rect x="1" y="23" width="5" height="5" fill="var(--surface)"/><rect x="2" y="2" width="3" height="3"/><rect x="24" y="2" width="3" height="3"/><rect x="2" y="24" width="3" height="3"/><rect x="9" width="1" height="1"/><rect x="11" width="2" height="1"/><rect x="15" width="1" height="2"/><rect x="18" width="1" height="1"/><rect x="20" width="1" height="1"/><rect x="9" y="3" width="1" height="1"/><rect x="12" y="3" width="1" height="1"/><rect x="16" y="3" width="2" height="1"/><rect x="19" y="3" width="1" height="1"/><rect x="9" y="5" width="2" height="1"/><rect x="13" y="5" width="1" height="1"/><rect x="17" y="5" width="1" height="1"/><rect x="20" y="5" width="1" height="1"/><rect x="10" y="7" width="1" height="1"/><rect x="14" y="7" width="2" height="1"/><rect x="18" y="7" width="1" height="1"/><rect x="9" y="9" width="1" height="1"/><rect x="11" y="9" width="1" height="2"/><rect x="13" y="10" width="1" height="1"/><rect x="15" y="9" width="2" height="1"/><rect x="18" y="9" width="1" height="2"/><rect x="20" y="9" width="1" height="1"/><rect x="22" y="9" width="1" height="1"/><rect x="24" y="9" width="2" height="1"/><rect x="27" y="9" width="1" height="1"/><rect x="9" y="12" width="1" height="1"/><rect x="12" y="12" width="1" height="1"/><rect x="14" y="12" width="1" height="1"/><rect x="17" y="12" width="1" height="1"/><rect x="19" y="12" width="1" height="1"/><rect x="22" y="12" width="1" height="1"/><rect x="25" y="12" width="1" height="1"/><rect x="27" y="12" width="1" height="1"/><rect x="10" y="14" width="1" height="1"/><rect x="13" y="14" width="2" height="1"/><rect x="16" y="14" width="1" height="1"/><rect x="20" y="14" width="1" height="1"/><rect x="23" y="14" width="1" height="1"/><rect x="26" y="14" width="1" height="1"/><rect x="9" y="16" width="1" height="1"/><rect x="11" y="16" width="1" height="1"/><rect x="14" y="16" width="1" height="1"/><rect x="17" y="16" width="2" height="1"/><rect x="21" y="16" width="1" height="1"/><rect x="24" y="16" width="1" height="1"/><rect x="27" y="16" width="1" height="1"/><rect x="10" y="18" width="1" height="1"/><rect x="12" y="18" width="1" height="1"/><rect x="15" y="18" width="1" height="1"/><rect x="18" y="18" width="1" height="1"/><rect x="20" y="18" width="1" height="1"/><rect x="23" y="18" width="1" height="1"/><rect x="26" y="18" width="1" height="1"/><rect x="9" y="20" width="1" height="1"/><rect x="13" y="20" width="1" height="1"/><rect x="16" y="20" width="1" height="1"/><rect x="19" y="20" width="1" height="1"/><rect x="22" y="20" width="1" height="1"/><rect x="24" y="20" width="1" height="1"/><rect x="27" y="20" width="1" height="1"/><rect x="9" y="22" width="1" height="1"/><rect x="11" y="22" width="1" height="1"/><rect x="14" y="22" width="2" height="1"/><rect x="17" y="22" width="1" height="1"/><rect x="20" y="22" width="1" height="1"/><rect x="23" y="22" width="1" height="1"/><rect x="26" y="22" width="1" height="1"/><rect x="9" y="24" width="1" height="1"/><rect x="12" y="24" width="1" height="1"/><rect x="15" y="24" width="1" height="1"/><rect x="18" y="24" width="1" height="1"/><rect x="21" y="24" width="1" height="1"/><rect x="24" y="24" width="1" height="1"/><rect x="9" y="26" width="1" height="1"/><rect x="13" y="26" width="1" height="1"/><rect x="16" y="26" width="1" height="1"/><rect x="19" y="26" width="1" height="1"/><rect x="22" y="26" width="1" height="1"/><rect x="25" y="26" width="1" height="1"/><rect x="9" y="28" width="1" height="1"/><rect x="11" y="28" width="1" height="1"/><rect x="14" y="28" width="1" height="1"/><rect x="17" y="28" width="1" height="1"/><rect x="20" y="28" width="1" height="1"/><rect x="23" y="28" width="1" height="1"/><rect x="26" y="28" width="1" height="1"/></g></symbol>' +
    '</defs></svg>';
  document.body.insertAdjacentHTML('afterbegin', SPRITE);

  /* ---------- Utilidades ---------- */
  function qs(s, c) { return (c || document).querySelector(s); }
  function qsa(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }
  var state = new URLSearchParams(location.search).get('state');
  if (state) document.body.dataset.state = state;

  /* ---------- Marca (logo de la landing) ---------- */
  var BRAND_SVG =
    '<svg class="brand-mark" viewBox="0 0 32 32" aria-hidden="true" focusable="false">' +
    '<rect width="32" height="32" rx="7" class="brand-bg"></rect>' +
    '<path d="M6 17h5l2-6 4 10 2-6h7" class="brand-pulse"></path></svg>';

  /* ---------- Navegación del panel (inyectada) ---------- */
  var PANEL_NAV = [
    { id: 'p2',  href: 'p2-cola-triaje.html',   ic: 'i-gauge', t: 'Panel' },
    { id: 'p3',  href: 'p3-registro.html',      ic: 'i-users', t: 'Pacientes' },
    { id: 'p6',  href: 'p6-alertas.html',       ic: 'i-bell',  t: 'Alertas', badge: 3 },
    { id: 'p9',  href: 'p9-reportes.html',      ic: 'i-file',  t: 'Reportes' },
    { id: 'p10', href: 'p10-dispositivos.html', ic: 'i-dev',   t: 'Dispositivos' }
  ];
  function mountSidebar() {
    var host = qs('[data-panel-nav]');
    if (!host) return;
    var active = host.dataset.panelNav;
    var links = PANEL_NAV.map(function (n) {
      return '<li><a href="' + n.href + '" class="' + (n.id === active ? 'active' : '') + '"' +
        (n.id === active ? ' aria-current="page"' : '') + '>' +
        '<svg class="ic" aria-hidden="true"><use href="#' + n.ic + '"/></svg><span>' + n.t + '</span>' +
        (n.badge ? '<span class="sbadge">' + n.badge + '</span>' : '') + '</a></li>';
    }).join('');
    host.className = 'sidebar';
    host.innerHTML =
      '<a class="brand" href="p2-cola-triaje.html" data-od-id="brand">' + BRAND_SVG + '<span class="brand-name">Tri-Aid</span></a>' +
      '<p class="side-sub">Emergencias · Turno tarde</p>' +
      '<nav class="snav" aria-label="Principal"><ul style="display:grid;gap:4px">' + links + '</ul></nav>' +
      '<div class="side-foot">' +
      '<div class="side-user"><span class="avatar">RP</span><span><b>Enf. Rocío Paredes</b><small>Triaje · Jerarquía 2</small></span></div>' +
      '<a class="snav-out-link" href="p1-iniciar-sesion.html" data-od-id="salir">' +
      '<svg class="ic" aria-hidden="true"><use href="#i-out"/></svg><span>Salir</span></a>' +
      '<span class="demo-chip">Wireframe · datos de demostración</span>' +
      '</div>';
  }

  /* ---------- Navegación del portal (inyectada) ---------- */
  var PORTAL_NAV = [
    { id: 'c2', href: 'c2-mi-estado.html',      ic: 'i-pulse', t: 'Mi estado' },
    { id: 'c3', href: 'c3-mi-turno.html',       ic: 'i-clock', t: 'Mi turno' },
    { id: 'c4', href: 'c4-mi-comprobante.html', ic: 'i-qr',    t: 'Comprobante' }
  ];
  function mountPortalNav() {
    var host = qs('[data-portal-nav]');
    if (!host) return;
    document.body.classList.add('has-portal-nav');
    var active = host.dataset.portalNav;
    host.className = 'bnav';
    host.setAttribute('aria-label', 'Portal del paciente');
    host.innerHTML = '<ul style="display:contents">' + PORTAL_NAV.map(function (n) {
      return '<li><a href="' + n.href + '" class="' + (n.id === active ? 'active' : '') + '"' +
        (n.id === active ? ' aria-current="page"' : '') + '>' +
        '<svg class="ic" aria-hidden="true"><use href="#' + n.ic + '"/></svg><span>' + n.t + '</span></a></li>';
    }).join('') + '</ul>';
  }

  /* ---------- Toast ---------- */
  var toastTimer = null;
  function toast(msg, type) {
    type = type || 'success';
    var el = qs('#odToast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'odToast';
      el.className = 'toast';
      el.setAttribute('role', 'status');
      document.body.appendChild(el);
    }
    el.innerHTML = '<svg class="ic" aria-hidden="true"><use href="#' + (type === 'error' ? 'i-x-c' : type === 'warn' ? 'i-alert' : 'i-check-c') + '"/></svg><span></span>';
    el.querySelector('span').textContent = msg;
    el.className = 'toast show t-' + type;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.className = 'toast'; }, 3000);
  }

  /* ---------- Diálogos ---------- */
  function openDialog(sel) {
    var d = qs(sel);
    if (!d) return;
    if (d.showModal) d.showModal(); else d.setAttribute('open', '');
    var f = qs('button, [href], input, select, textarea', d);
    if (f) f.focus();
  }
  function closeDialog(sel) {
    var d = qs(sel);
    if (!d) return;
    if (d.close) d.close(); else d.removeAttribute('open');
  }
  qsa('dialog').forEach(function (d) {
    d.addEventListener('click', function (e) { if (e.target === d) closeDialog('#' + d.id); });
    d.addEventListener('cancel', function (e) { e.preventDefault(); closeDialog('#' + d.id); });
  });

  /* ---------- Tabs ---------- */
  function initTabs() {
    qsa('[data-tabs]').forEach(function (scope) {
      qsa('.tab', scope).forEach(function (btn) {
        btn.addEventListener('click', function () {
          qsa('.tab', scope).forEach(function (b) {
            b.classList.toggle('active', b === btn);
            b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
          });
          qsa('.tabpanel', scope).forEach(function (p) {
            p.classList.toggle('active', p.dataset.panel === btn.dataset.panel);
          });
        });
      });
    });
  }

  /* ---------- Validación de formularios ---------- */
  function setErr(input, msg) {
    var f = input.closest('.field');
    if (!f) return;
    f.classList.add('invalid');
    var e = qs('.err', f);
    if (e) e.textContent = msg;
  }
  function clearErr(input) {
    var f = input.closest('.field');
    if (f) f.classList.remove('invalid');
  }
  function validate(form) {
    var ok = true;
    qsa('[required]', form).forEach(function (i) {
      if (!i.value.trim()) { setErr(i, i.dataset.msg || 'Este campo es obligatorio'); ok = false; }
      else clearErr(i);
    });
    qsa('[data-numeric]', form).forEach(function (i) {
      if (i.value.trim() && !/^\d+$/.test(i.value.trim())) { setErr(i, 'Ingresa solo números'); ok = false; }
    });
    qsa('[data-range]', form).forEach(function (i) {
      if (!i.value.trim()) return;
      var v = parseFloat(i.value.replace(',', '.'));
      var min = parseFloat(i.dataset.min);
      var max = parseFloat(i.dataset.max);
      if (isNaN(v) || v < min || v > max) { setErr(i, 'Valor fuera de rango realista. Verifica e ingresa nuevamente'); ok = false; }
    });
    return ok;
  }
  qsa('form[data-validate]').forEach(function (f) {
    f.addEventListener('submit', function (e) { if (!validate(f)) e.preventDefault(); });
    qsa('input, select, textarea', f).forEach(function (i) {
      i.addEventListener('input', function () { clearErr(i); });
    });
  });

  /* ---------- Menú móvil (sidebar del panel) ---------- */
  var mb = qs('#menuBtn');
  if (mb) mb.addEventListener('click', function () { document.body.classList.toggle('menu-open'); });
  var scrim = qs('.scrim');
  if (scrim) scrim.addEventListener('click', function () { document.body.classList.remove('menu-open'); });
  qsa('.snav a').forEach(function (a) {
    a.addEventListener('click', function () { document.body.classList.remove('menu-open'); });
  });

  /* ---------- API pública + init de página ---------- */
  window.OD = {
    qs: qs, qsa: qsa, toast: toast,
    openDialog: openDialog, closeDialog: closeDialog,
    initTabs: initTabs, validate: validate, setErr: setErr, clearErr: clearErr,
    state: state, brandSvg: BRAND_SVG
  };
  mountSidebar();
  mountPortalNav();
  initTabs();
  if (typeof window.pageInit === 'function') window.pageInit(window.OD);
})();
