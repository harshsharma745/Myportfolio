/* ================================================
   HARSH SHARMA — STUDENT PORTFOLIO JAVASCRIPT
   ================================================ */
(function () {
'use strict';

// ──────────────────────────────────────────────
// 1. SCROLL PROGRESS BAR
// ──────────────────────────────────────────────
const progressBar = document.getElementById('progressBar');

function updateProgress() {
    const scrollTop  = window.scrollY;
    const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
    const pct        = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
}

// ──────────────────────────────────────────────
// 2. NAVBAR — scroll shadow + active link
// ──────────────────────────────────────────────
const navbar  = document.getElementById('navbar');
const navBtns = document.querySelectorAll('.nav-link');
const sections = [...document.querySelectorAll('[data-section]')];

// collect all section elements by id
const sectionEls = navBtns.length
    ? [...new Set([...navBtns].map(b => document.getElementById(b.dataset.section)).filter(Boolean))]
    : [];

function updateNav() {
    navbar.classList.toggle('scrolled', window.scrollY > 30);

    let current = '';
    sectionEls.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.section === current));
}

// ──────────────────────────────────────────────
// 3. MOBILE NAV TOGGLE
// ──────────────────────────────────────────────
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
});

// close mobile menu on link click
navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
    });
});

// ──────────────────────────────────────────────
// 4. SMOOTH SCROLL for all internal links
// ──────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ──────────────────────────────────────────────
// 5. SCROLL REVEAL
// ──────────────────────────────────────────────
// Mark elements for reveal
[
    '.about-story',
    '.about-right',
    '.stat-card',
    '.quick-facts',
    '.skill-card',
    '.project-card',
    '.edu-item',
    '.ach-card',
    '.contact-info-card',
    '.contact-form'
].forEach(sel => {
    document.querySelectorAll(sel).forEach(el => el.classList.add('reveal'));
});

const revealObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // stagger siblings
            const parent   = entry.target.parentElement;
            const siblings = [...parent.querySelectorAll('.reveal')];
            const idx      = siblings.indexOf(entry.target);
            setTimeout(() => entry.target.classList.add('visible'), idx * 70);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ──────────────────────────────────────────────
// 6. SKILL BARS — animate fill on scroll
// ──────────────────────────────────────────────
const skillBarObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-fill').forEach(fill => {
                const w = fill.dataset.width;
                // reset then animate
                fill.style.width = '0';
                void fill.offsetWidth; // force reflow
                fill.style.width = w + '%';
            });
            skillBarObs.unobserve(entry.target); // only once
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-card').forEach(c => skillBarObs.observe(c));

// ──────────────────────────────────────────────
// 7. TYPEWRITER — hero role
// ──────────────────────────────────────────────
const roles = [
    'AI & Data Science Student',
    'Aspiring Data Analyst',
    'C++ & Python Developer',
    'Problem Solver & Learner'
];
let rIdx = 0, cIdx = 0, deleting = false;
const roleEl = document.getElementById('roleText');

function typeRole() {
    const word = roles[rIdx];

    if (deleting) {
        cIdx--;
        roleEl.textContent = word.slice(0, cIdx);
        if (cIdx === 0) {
            deleting = false;
            rIdx = (rIdx + 1) % roles.length;
            setTimeout(typeRole, 550);
            return;
        }
        setTimeout(typeRole, 34);
    } else {
        cIdx++;
        roleEl.textContent = word.slice(0, cIdx);
        if (cIdx === word.length) {
            deleting = true;
            setTimeout(typeRole, 1600);
            return;
        }
        setTimeout(typeRole, 58);
    }
}
setTimeout(typeRole, 900);

// ──────────────────────────────────────────────
// 8. SKILL TABS filter
// ──────────────────────────────────────────────
const tabBtns   = document.querySelectorAll('.tab-btn');
const skillCards = document.querySelectorAll('.skill-card');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.tab;
        skillCards.forEach(card => {
            if (filter === 'all' || card.dataset.cat === filter) {
                card.classList.remove('hidden');
                // re-trigger bar animation
                card.querySelectorAll('.skill-fill').forEach(fill => {
                    fill.style.width = '0';
                    void fill.offsetWidth;
                    fill.style.width = fill.dataset.width + '%';
                });
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// ──────────────────────────────────────────────
// 9. ACHIEVEMENT TABS
// ──────────────────────────────────────────────
const achTabs   = document.querySelectorAll('.ach-tab');
const achPanels = document.querySelectorAll('.ach-panel');

achTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        achTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const target = tab.dataset.achtab;
        achPanels.forEach(panel => {
            panel.classList.toggle('active', panel.id === 'panel-' + target);
        });
    });
});

// ──────────────────────────────────────────────
// 10. CONTACT FORM
// ──────────────────────────────────────────────
const sendBtn  = document.getElementById('sendBtn');
const fName    = document.getElementById('fName');
const fEmail   = document.getElementById('fEmail');
const fSubject = document.getElementById('fSubject');
const fMsg     = document.getElementById('fMsg');
const fStatus  = document.getElementById('formStatus');

sendBtn.addEventListener('click', () => {
    const name    = fName.value.trim();
    const email   = fEmail.value.trim();
    const subject = fSubject.value.trim();
    const msg     = fMsg.value.trim();

    fStatus.className = '';

    if (!name || !email || !subject || !msg) {
        fStatus.textContent = '⚠️ Please fill in all fields before sending.';
        fStatus.className = 'error';
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        fStatus.textContent = '⚠️ Please enter a valid email address.';
        fStatus.className = 'error';
        return;
    }

    fStatus.textContent = 'Preparing your message…';

    setTimeout(() => {
        const sub  = encodeURIComponent(subject || 'Message from ' + name);
        const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + msg);
        window.open('mailto:harshsharma2444@gmail.com?subject=' + sub + '&body=' + body, '_blank');

        fStatus.textContent = '✓ Your mail client should open now!';
        fStatus.className = 'success';

        fName.value = ''; fEmail.value = ''; fSubject.value = ''; fMsg.value = '';

        setTimeout(() => { fStatus.textContent = ''; fStatus.className = ''; }, 5000);
    }, 700);
});

// ──────────────────────────────────────────────
// 11. BACK TO TOP
// ──────────────────────────────────────────────
const backTop = document.getElementById('backTop');
function updateBackTop() {
    backTop.classList.toggle('visible', window.scrollY > 500);
}
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ──────────────────────────────────────────────
// MASTER SCROLL LISTENER
// ──────────────────────────────────────────────
window.addEventListener('scroll', () => {
    updateProgress();
    updateNav();
    updateBackTop();
});

// initial call
updateProgress();
updateNav();
updateBackTop();

})();