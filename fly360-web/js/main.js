// ── HEADER SCROLL ──
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header')
  if (header) header.classList.toggle('scrolled', window.scrollY > 8)
})

// ── ACTIVE NAV LINK ──
const currentPage = location.pathname.split('/').pop() || 'index.html'
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.getAttribute('href') === currentPage) link.classList.add('active')
})

// ── MOBILE MENU ──
const burger   = document.querySelector('.burger')
const mobileMenu = document.querySelector('.mobile-menu')
if (burger && mobileMenu) {
  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
  })
}

// ── DARK MODE ──
const darkBtn = document.getElementById('dark-toggle')
const body    = document.body
const saved   = localStorage.getItem('fly360-theme')
if (saved === 'dark') body.classList.add('dark')

if (darkBtn) {
  updateDarkIcon()
  darkBtn.addEventListener('click', () => {
    body.classList.toggle('dark')
    localStorage.setItem('fly360-theme', body.classList.contains('dark') ? 'dark' : 'light')
    updateDarkIcon()
  })
}
function updateDarkIcon() {
  if (!darkBtn) return
  const isDark = body.classList.contains('dark')
  darkBtn.innerHTML = isDark
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`
}

// ── SEARCH TABS ──
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
  })
})

// ── CAROUSEL ──
let currentSlide = 0
const slidesTrack = document.getElementById('slides-track')
const dotsContainer = document.getElementById('carousel-dots')

function initCarousel() {
  if (!slidesTrack) return
  const totalSlides = slidesTrack.children.length

  // Create dots
  if (dotsContainer) {
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('button')
      dot.className = 'cdot' + (i === 0 ? ' active' : '')
      dot.setAttribute('aria-label', `Slide ${i + 1}`)
      dot.addEventListener('click', () => goToSlide(i))
      dotsContainer.appendChild(dot)
    }
  }

  // Auto play
  setInterval(() => goToSlide((currentSlide + 1) % totalSlides), 4500)
}

function goToSlide(n) {
  if (!slidesTrack) return
  const totalSlides = slidesTrack.children.length
  currentSlide = (n + totalSlides) % totalSlides
  slidesTrack.style.transform = `translateX(-${currentSlide * 100}%)`
  document.querySelectorAll('.cdot').forEach((d, i) => {
    d.classList.toggle('active', i === currentSlide)
  })
}

const prevBtn = document.querySelector('.carousel-prev')
const nextBtn = document.querySelector('.carousel-next')
if (prevBtn) prevBtn.addEventListener('click', () => {
  const total = slidesTrack.children.length
  goToSlide((currentSlide - 1 + total) % total)
})
if (nextBtn) nextBtn.addEventListener('click', () => {
  const total = slidesTrack.children.length
  goToSlide((currentSlide + 1) % total)
})

// ── AUTH STATE ──
function updateHeaderAuth() {
  const user = JSON.parse(localStorage.getItem('fly360_user') || 'null')
  const loginBtn  = document.getElementById('btn-login')
  const signupBtn = document.getElementById('btn-signup')
  const userMenu  = document.getElementById('user-menu')
  const userName  = document.getElementById('user-name')

  if (user) {
    if (loginBtn)  loginBtn.style.display  = 'none'
    if (signupBtn) signupBtn.style.display = 'none'
    if (userMenu)  userMenu.style.display  = 'flex'
    if (userName)  userName.textContent    = user.firstName
  }
}

function logout() {
  localStorage.removeItem('fly360_user')
  location.reload()
}

// ── TOAST NOTIFICATIONS ──
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container') || createToastContainer()
  const toast = document.createElement('div')
  const colors = { success: '#22C55E', error: '#EF4444', info: '#0284C7', warning: '#F59E0B' }
  toast.style.cssText = `
    display:flex;align-items:center;gap:10px;
    padding:12px 16px;background:white;
    border-radius:10px;
    box-shadow:0 8px 24px rgba(0,0,0,0.12);
    border-left:4px solid ${colors[type] || colors.info};
    font-size:13px;font-weight:500;
    color:#1E293B;min-width:260px;
    animation:slideIn 0.3s ease;
  `
  toast.textContent = message
  container.appendChild(toast)
  setTimeout(() => toast.remove(), 3500)
}

function createToastContainer() {
  const c = document.createElement('div')
  c.id = 'toast-container'
  c.style.cssText = 'position:fixed;top:80px;right:20px;z-index:9999;display:flex;flex-direction:column;gap:10px;'
  document.body.appendChild(c)
  return c
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  initCarousel()
  updateHeaderAuth()
})
