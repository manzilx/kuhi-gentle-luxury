/* ============================================
   KUHI GENTLE LUXURY — Main JavaScript
   Shared interactions across all pages
   ============================================ */

(function () {
    'use strict';

    // ---- Scroll Progress Bar ----
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.prepend(progressBar);

    function updateProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = progress + '%';
    }

    // ---- Nav Scroll Behavior ----
    const nav = document.querySelector('nav');
    let lastScrollY = 0;
    let ticking = false;

    function handleNavScroll() {
        const currentScrollY = window.scrollY;

        // Compact on scroll
        if (currentScrollY > 80) {
            nav.classList.add('nav-compact');
        } else {
            nav.classList.remove('nav-compact');
        }

        // Hide on scroll down, show on scroll up
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }

        lastScrollY = currentScrollY;
        ticking = false;
    }

    // ---- IntersectionObserver Reveal System ----
    function initReveals() {
        const revealElements = document.querySelectorAll('[data-reveal]');
        if (!revealElements.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
        );

        revealElements.forEach((el) => observer.observe(el));
    }

    // ---- Parallax Engine ----
    function initParallax() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        if (!parallaxElements.length) return;

        function updateParallax() {
            const scrollY = window.scrollY;
            parallaxElements.forEach((el) => {
                const speed = parseFloat(el.dataset.parallax) || 0.15;
                const rect = el.getBoundingClientRect();
                const center = rect.top + rect.height / 2;
                const viewCenter = window.innerHeight / 2;
                const offset = (center - viewCenter) * speed;
                el.style.transform = `translateY(${offset}px)`;
            });
        }

        window.addEventListener('scroll', updateParallax, { passive: true });
        updateParallax();
    }

    // ---- Counter Animation ----
    function initCounters() {
        const counters = document.querySelectorAll('[data-counter]');
        if (!counters.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateCounter(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        counters.forEach((el) => observer.observe(el));
    }

    function animateCounter(el) {
        const target = parseInt(el.dataset.counter, 10);
        const duration = 2000;
        const start = performance.now();
        const formatter = el.dataset.counterFormat === 'comma';

        function step(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);
            el.textContent = formatter
                ? current.toLocaleString('en-IN')
                : current.toString();
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        }
        requestAnimationFrame(step);
    }

    // ---- Mobile Menu ----
    function initMobileMenu() {
        const menuBtn = document.querySelector('[data-mobile-menu-toggle]');
        const menu = document.querySelector('.mobile-menu');
        const closeBtn = document.querySelector('[data-mobile-menu-close]');
        if (!menuBtn || !menu) return;

        menuBtn.addEventListener('click', () => {
            menu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        function closeMenu() {
            menu.classList.remove('active');
            document.body.style.overflow = '';
        }

        if (closeBtn) closeBtn.addEventListener('click', closeMenu);

        menu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', closeMenu);
        });
    }

    // ---- View Transitions API ----
    function initViewTransitions() {
        if (!document.startViewTransition) return;

        document.querySelectorAll('a[href]').forEach((link) => {
            const href = link.getAttribute('href');
            // Only intercept local page links
            if (
                !href ||
                href.startsWith('#') ||
                href.startsWith('http') ||
                href.startsWith('mailto')
            )
                return;

            link.addEventListener('click', (e) => {
                e.preventDefault();
                document.startViewTransition(() => {
                    window.location.href = href;
                });
            });
        });
    }

    // ---- Lazy load images ----
    function initLazyImages() {
        document.querySelectorAll('img[data-src]').forEach((img) => {
            img.setAttribute('loading', 'lazy');
        });
    }

    // ---- Master scroll handler ----
    window.addEventListener(
        'scroll',
        () => {
            updateProgress();
            if (!ticking) {
                requestAnimationFrame(handleNavScroll);
                ticking = true;
            }
        },
        { passive: true }
    );

    // ---- Init on DOM ready ----
    document.addEventListener('DOMContentLoaded', () => {
        initReveals();
        initParallax();
        initCounters();
        initMobileMenu();
        initViewTransitions();
        initLazyImages();
        updateProgress();
    });
})();
