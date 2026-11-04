await initHydra()

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector('script[src="' + src + '"]')) { resolve(); return; }
    var s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

await loadScript('https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js');

if (window._p5flash) { window._p5flash.remove(); }
if (window._p5text) { window._p5text.remove(); }

// ===== SHARED RHYTHM: edit here, sound + visuals follow =====
const K = "1 0 1 0 1 0 1 0"   // kick on the beat
const B = "0 1 0 1 0 1 0 1"   // kick on the off-beat (the "up")
const S = "0 0 1 0 0 0 1 0"   // snare
const kP = H(K)
const bP = H(B)
const sP = H(S)

const PAL_K = [[0, 195, 255], [255, 0, 128], [0, 255, 180]]  // on-beat kick
const PAL_B = [[255, 200, 0], [255, 90, 0]]                  // off-beat kick
const PAL_S = [[255, 255, 255]]                              // snare

// Canvas 1: flash + particles
const sketchFlash = (p) => {
  let flash = 0
  let last = { k: 0, b: 0, s: 0 }
  let particles = []

  const spawn = (n, pal, vmin, vmax, smin, smax) => {
    for (let i = 0; i < n; i++) {
      const a = p.random(p.TWO_PI)
      const v = p.random(vmin, vmax)
      particles.push({
        x: p.width / 2 + p.random(-20, 20),
        y: p.height / 2 + p.random(-20, 20),
        vx: p.cos(a) * v,
        vy: p.sin(a) * v,
        life: 1,
        size: p.random(smin, smax),
        c: pal[Math.floor(p.random(pal.length))]
      })
    }
    if (particles.length > 250) particles.splice(0, particles.length - 250)
  }

  // rising edge detector
  const edge = (key, val) => {
    const hit = val && !last[key]
    last[key] = val
    return hit
  }

  p.setup = () => {
    p.createCanvas(800, 600);
    s0.init({ src: p.canvas });
  };

  p.draw = () => {
    if (edge('k', kP() ? 1 : 0)) { flash = 150; spawn(Math.floor(p.random(10, 20)), PAL_K, 2, 8, 3, 9) }
    if (edge('b', bP() ? 1 : 0)) { flash = Math.max(flash, 90); spawn(Math.floor(p.random(6, 12)), PAL_B, 3, 11, 2, 6) }
    if (edge('s', sP() ? 1 : 0)) { spawn(Math.floor(p.random(4, 8)), PAL_S, 4, 12, 2, 5) }

    flash = p.lerp(flash, 0, 0.1);
    p.background(0, flash, flash * 1.3);

    p.blendMode(p.ADD)
    p.noStroke()
    for (let i = particles.length - 1; i >= 0; i--) {
      const q = particles[i]
      q.x += q.vx
      q.y += q.vy
      q.vx *= .96
      q.vy = q.vy * .96 + .06
      q.life -= .012
      if (q.life <= 0) { particles.splice(i, 1); continue }
      p.fill(q.c[0], q.c[1], q.c[2], 255 * q.life)
      p.ellipse(q.x, q.y, q.size * q.life)
    }
    p.blendMode(p.BLEND)

    p.fill(0, 195, 255, flash + 100)
    p.ellipse(p.width / 2, p.height / 2, 200 + flash);
  };
};

// Canvas 2: text
const sketchText = (p) => {
  p.setup = () => {
    p.createCanvas(800, 600);
    s1.init({ src: p.canvas });
  };
  p.draw = () => {
    p.background(0);
    p.fill(255);
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(80);
    p.text('hello', p.width / 2, p.height / 2);
  };
};

window._p5flash = new p5(sketchFlash);
window._p5text = new p5(sketchText);

src(o0)
  .scale(1.004)
  .blend(src(s0))
  .blend(src(s1))
  .out(o0)

// ===== SOUND: same structs =====
setcps(135/60/4)
$: s("bd").struct(K)
$: s("bd:3").struct(B).gain(.7).lpf(1200)   // off-beat kick, softer
$: s("sd:0").struct(S)
