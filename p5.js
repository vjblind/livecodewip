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

// Canvas 1 : le flash
const sketchFlash = (p) => {
  let flash = 0;
  let dernierBattement = 0;
  const tempo = 500;

  p.setup = () => {
    p.createCanvas(800, 600);
    s0.init({ src: p.canvas });
  };

  p.draw = () => {
    if (p.millis() - dernierBattement > tempo) {
      flash = 150;
      dernierBattement = p.millis();
    }
    flash = p.lerp(flash, 0, 0.1);
    p.background(0, flash, flash * 1.3);
    p.fill(0, 195, 255, flash + 100);
    p.noStroke();
    p.ellipse(p.width / 2, p.height / 2, 200 + flash);
  };
};

// Canvas 2 : juste le texte "hello"
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

src(s0).blend(src(s1)).out(o0)

s('bd ~ sn ~');
