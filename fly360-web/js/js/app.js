// ══════════════════════════════════════
// APP.JS — Fonctions communes Fly360
// ══════════════════════════════════════

// ── DARK MODE ──
function initDarkMode() {
  const btn = document.getElementById('dark-toggle')
  const icon = document.getElementById('dark-icon')
  const isDark = localStorage.getItem('fly360-theme') === 'dark'

  document.body.classList.toggle('dark', isDark)
  updateDarkIcon(isDark)

  btn?.addEventListener('click', () => {
    const now = document.body.classList.toggle('dark')
    localStorage.setItem('fly360-theme', now ? 'dark' : 'light')
    updateDarkIcon(now)
  })
}

function updateDarkIcon(dark) {
  const icon = document.getElementById('dark-icon')
  if (!icon) return
  icon.setAttribute('icon', dark ? 'solar:sun-bold-duotone' : 'solar:moon-bold-duotone')
}

// ── HEADER SCROLL ──
function initHeaderScroll() {
  window.addEventListener('scroll', () => {
    document.getElementById('header')?.classList.toggle('scrolled', window.scrollY > 8)
  })
}

// ── MOBILE MENU ──
function toggleMenu() {
  const menu = document.getElementById('mobile-menu')
  const isOpen = menu?.classList.toggle('open')
  const btn = document.querySelector('.burger iconify-icon')
  if (btn) btn.setAttribute('icon', isOpen ? 'solar:close-circle-bold-duotone' : 'solar:hamburger-menu-bold-duotone')
}

// ── NOTIFICATIONS ──
function toggleNotifs() {
  document.getElementById('notif-panel')?.classList.toggle('open')
}

function clearNotifs() {
  document.querySelectorAll('.notif-item.unread').forEach(i => i.classList.remove('unread'))
  const badge = document.getElementById('notif-count')
  if (badge) { badge.style.display = 'none' }
  document.getElementById('notif-panel')?.classList.remove('open')
}

// ── AUTH ──
function updateAuth() {
  const user = JSON.parse(localStorage.getItem('fly360_user') || 'null')
  const btnLogin  = document.getElementById('btn-login')
  const btnSignup = document.getElementById('btn-signup')
  const userMenu  = document.getElementById('user-menu')
  const userName  = document.getElementById('user-name')

  if (user) {
    if (btnLogin)  btnLogin.style.display  = 'none'
    if (btnSignup) btnSignup.style.display = 'none'
    if (userMenu)  userMenu.style.display  = 'flex'
    if (userName)  userName.textContent    = user.firstName || 'Mon compte'
  }
}

function logout() {
  localStorage.removeItem('fly360_user')
  window.location.href = 'index.html'
}

// ── NEWSLETTER ──
function subscribeNewsletter(e) {
  e.preventDefault()
  const btn = e.target.querySelector('button[type=submit]')
  const orig = btn.innerHTML
  btn.innerHTML = '<iconify-icon icon="solar:check-circle-bold-duotone"></iconify-icon> Inscrit !'
  btn.style.background = '#22C55E'
  setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; e.target.reset() }, 3000)
}

// ── ACTIVE NAV ──
function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html'
  document.querySelectorAll('.nav-link').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === page)
  })
}

// ── TOAST ──
function showToast(msg, type = 'info') {
  const colors = { success:'#22C55E', error:'#EF4444', info:'#0284C7', warning:'#F59E0B' }
  const icons  = { success:'solar:check-circle-bold-duotone', error:'solar:close-circle-bold-duotone', info:'solar:info-circle-bold-duotone', warning:'solar:danger-triangle-bold-duotone' }
  const t = document.createElement('div')
  t.className = 'fly-toast'
  t.style.cssText = `position:fixed;bottom:24px;right:24px;z-index:9999;display:flex;align-items:flex-start;gap:12px;background:white;border-radius:12px;padding:14px 18px;max-width:360px;box-shadow:0 20px 50px rgba(0,0,0,0.15);border-left:4px solid ${colors[type]};animation:slideInRight 0.3s ease;font-family:inherit`
  t.innerHTML = `<iconify-icon icon="${icons[type]}" style="font-size:22px;color:${colors[type]};flex-shrink:0;margin-top:1px"></iconify-icon><div><strong style="font-size:13px;font-weight:700;color:#1e293b;display:block">${msg}</strong></div><button onclick="this.parentElement.remove()" style="color:#94a3b8;font-size:18px;flex-shrink:0;line-height:1;background:none;border:none;cursor:pointer">×</button>`
  document.body.appendChild(t)
  setTimeout(() => t.remove(), 4000)
}

// ── CLOSE DROPDOWNS ON OUTSIDE CLICK ──
document.addEventListener('click', e => {
  if (!e.target.closest('.notif-trigger') && !e.target.closest('#notif-panel')) {
    document.getElementById('notif-panel')?.classList.remove('open')
  }
  if (!e.target.closest('.burger') && !e.target.closest('.mobile-menu')) {
    document.getElementById('mobile-menu')?.classList.remove('open')
  }
})

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode()
  initHeaderScroll()
  updateAuth()
  setActiveNav()
})