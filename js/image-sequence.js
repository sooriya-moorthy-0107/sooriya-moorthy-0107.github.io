gsap.registerPlugin(ScrollTrigger);

const canvas  = document.getElementById('sequence-canvas');
const ctx     = canvas.getContext('2d');

const FRAME_COUNT = 240;
const images      = new Array(FRAME_COUNT);
const seq         = { frame: 0 };

const frameSrc = i =>
    `assets/photo frame/ezgif-frame-${String(i + 1).padStart(3, '0')}.jpg`;

// ── Canvas sizing ──────────────────────────────────────────────
function resizeCanvas() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    drawFrame();
}
window.addEventListener('resize', resizeCanvas);

// ── Draw helper ────────────────────────────────────────────────
function drawFrame() {
    const img = images[Math.round(seq.frame)];
    if (!img || !img.complete || !img.naturalWidth) return;

    const cw = canvas.width;
    const ch = canvas.height;

    // Fill background with the photo's charcoal colour
    ctx.fillStyle = '#1b1b1b';
    ctx.fillRect(0, 0, cw, ch);

    // "contain" — keep full portrait visible, letter-box with dark bg
    const imgRatio    = img.naturalWidth / img.naturalHeight;
    const canvasRatio = cw / ch;

    let dw, dh;
    if (canvasRatio > imgRatio) {
        // canvas is wider → fit by height
        dh = ch;
        dw = ch * imgRatio;
    } else {
        // canvas is taller → fit by width
        dw = cw;
        dh = cw / imgRatio;
    }

    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;

    ctx.drawImage(img, dx, dy, dw, dh);
}

// ── Preload ────────────────────────────────────────────────────
const preloader     = document.getElementById('preloader');
const fillBar       = document.getElementById('preloader-fill');
const progressLabel = document.getElementById('load-progress');

let loadedCount = 0;

function onImageLoad() {
    loadedCount++;
    const pct = Math.floor((loadedCount / FRAME_COUNT) * 100);
    if (fillBar)       fillBar.style.width = pct + '%';
    if (progressLabel) progressLabel.textContent = pct + '%';

    if (loadedCount === FRAME_COUNT) {
        initScene();
    }
}

resizeCanvas(); // set canvas size before images load

for (let i = 0; i < FRAME_COUNT; i++) {
    const img  = new Image();
    img.src    = frameSrc(i);
    img.onload = onImageLoad;
    img.onerror = onImageLoad; // don't hang if a frame is missing
    images[i]  = img;
}

// ── Init GSAP scene ────────────────────────────────────────────
function initScene() {
    // Dismiss preloader
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => preloader.style.display = 'none', 600);
    }

    // Draw first frame
    drawFrame();

    const heroTrigger = {
        trigger : '#hero-scroll-container',
        start   : 'top top',
        end     : 'bottom bottom',
        scrub   : 0.6
    };

    // ── Image Sequence ──────────────────────────────────────────
    gsap.to(seq, {
        frame: FRAME_COUNT - 1,
        ease : 'none',
        onUpdate: drawFrame,
        scrollTrigger: heroTrigger
    });

    // ── Text: top-left → sweeps to right ──────────────────────
    // Start well off-screen left, end off-screen right
    gsap.fromTo('#text-top',
        { x: '-105vw', y: '15vh' },
        {
            x: '105vw', y: '15vh',
            ease: 'none',
            scrollTrigger: heroTrigger
        }
    );

    // ── Text: bottom-right → sweeps to left ───────────────────
    gsap.fromTo('#text-bottom',
        { x: '105vw', y: '75vh' },
        {
            x: '-105vw', y: '75vh',
            ease: 'none',
            scrollTrigger: { ...heroTrigger, scrub: 0.8 }
        }
    );
}
