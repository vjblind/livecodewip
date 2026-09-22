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

if (window._p5sketch) { window._p5sketch.remove(); }

const sketch = (p) => {
  let flash = 0;
  let dernierBattement = 0;
  const tempo = 500;

  p.setup = () => {
    const canvas = p.createCanvas(800, 600);
    canvas.style('display', 'block');
    canvas.style('margin', '0 auto');
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

window._p5sketch = new p5(sketch);