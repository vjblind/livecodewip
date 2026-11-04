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

if (window._p5smile) { window._p5smile.remove(); }

// ===== SHARED RHYTHM: edit here, sound + visuals follow =====
const K = "1 0 1 0 1 0 1 0"   // kick
const S = "0 0 1 0 0 0 1 0"   // snare
const kP = H(K)
const sP = H(S)

const TRAIL = .5   // 0 = smileys pile up forever (like the Processing version), higher = faster fade

const sketchSmile = (p) => {
  let sz = 100          // current smiley size
  let punch = 0         // extra size from kick / snare hits
  let last = { k: 0, s: 0 }

  const edge = (key, val) => {
    const hit = val && !last[key]
    last[key] = val
    return hit
  }

  // same smiley as the Processing code, everything scaled from s
  const smile = (cx, cy, s) => {
    p.fill(p.random(255), 0, p.random(255))
    p.ellipse(cx, cy, s, s)

    p.fill(50, 100, 200)
    p.ellipse(cx - s * 0.2, cy - s * 0.2, s * 0.2, s * 0.2)
    p.ellipse(cx + s * 0.2, cy - s * 0.2, s * 0.2, s * 0.2)
    p.arc(cx, cy + s * 0.1, s * 0.8, s * 0.6, 0, p.PI)
  }

  p.setup = () => {
    p.createCanvas(800, 600)
    p.ellipseMode(p.CENTER)
    p.background(200, 10, 100)
    s0.init({ src: p.canvas })
  }

  p.draw = () => {
    // mouse position (window coords mapped to the 800x600 canvas)
    const mx = p.map(p.winMouseX, 0, p.windowWidth, 0, p.width)
    const my = p.map(p.winMouseY, 0, p.windowHeight, 0, p.height)

    // size from mouse speed
    const speed = p.dist(p.winMouseX, p.winMouseY, p.pwinMouseX, p.pwinMouseY)
    const base = p.constrain(p.map(speed, 0, 40, 40, 160), 40, 160)

    // size from rhythm: kick = big punch, snare = small punch
    if (edge('k', kP() ? 1 : 0)) punch = 140
    if (edge('s', sP() ? 1 : 0)) punch = Math.max(punch, 70)
    punch = p.lerp(punch, 0, 0.12)

    sz = p.lerp(sz, base + punch, 0.3)

    if (TRAIL > 0) p.background(200, 10, 100, TRAIL)   // fading background = trails
    smile(mx, my, sz)
  }

  // click = save a frame, like the original
  p.mouseClicked = () => { p.saveCanvas('smileystapel', 'png') }
}

window._p5smile = new p5(sketchSmile)

// ===== HYDRA =====
src(s0)
  .out(o0)

// with feedback trails instead:
src(o0).kaleid(2).scale(1.004).blend(src(s0), .5).out(o0)

// ===== SOUND: same structs =====
setcps(135/60/4)
$: s("bd").struct(K)
$: s("sd:0").struct(S)
