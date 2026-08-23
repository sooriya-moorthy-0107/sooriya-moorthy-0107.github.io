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

    // Fill with the photo's charcoal bg — matches the photo bg colour
    ctx.fillStyle = '#1b1b1b';
    ctx.fillRect(0, 0, cw, ch);

    // "contain" — always show the full portrait, letter-box on sides
    const imgRatio    = img.naturalWidth / img.naturalHeight;
    const canvasRatio = cw / ch;

    let dw, dh;
    if (canvasRatio > imgRatio) {
        // canvas wider than image → fit by height
        dh = ch;
        dw = ch * imgRatio;
    } else {
        // canvas taller than image → fit by width
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

function onLoad() {
    loadedCount++;
    const pct = Math.floor((loadedCount / FRAME_COUNT) * 100);
    if (fillBar)       fillBar.style.width = pct + '%';
    if (progressLabel) progressLabel.textContent = pct + '%';
    if (loadedCount === FRAME_COUNT) initScene();
}

resizeCanvas(); // size canvas before images arrive

for (let i = 0; i < FRAME_COUNT; i++) {
    const img   = new Image();
    img.src     = frameSrc(i);
    img.onload  = onLoad;
    img.onerror = onLoad;   // don't hang if a frame is missing
    images[i]   = img;
}

// ── Init GSAP scene after all frames ready ─────────────────────
function initScene() {
    // Fade out preloader
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => { preloader.style.display = 'none'; }, 600);
    }

    drawFrame(); // render frame 0

    const heroTrigger = {
        trigger : '#hero-scroll-container',
        start   : 'top top',
        end     : 'bottom bottom',
        scrub   : 0.6
    };

    // Image sequence — frame counter drives drawFrame via onUpdate
    gsap.to(seq, {
        frame     : FRAME_COUNT - 1,
        ease      : 'none',
        onUpdate  : drawFrame,
        scrollTrigger: heroTrigger
    });

    // Text #1: sweeps LEFT → RIGHT as user scrolls
    // Start: fully off-screen to the left;  End: fully off-screen to the right
    gsap.fromTo('#text-top',
        { x: '-110vw' },
        {
            x: '110vw',
            ease: 'none',
            scrollTrigger: { ...heroTrigger, scrub: 1 }
        }
    );

    // Text #2: sweeps RIGHT → LEFT (opposite direction)
    gsap.fromTo('#text-bottom',
        { x: '110vw' },
        {
            x: '-110vw',
            ease: 'none',
            scrollTrigger: { ...heroTrigger, scrub: 1 }
        }
    );
}
