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
    let ani = 0;
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
    p.background(0, 0*flash, 0*flash * 1.3);
    p.fill(0, 195, 255, flash + 100);
    ani++
    p.stroke(250,0,0)
    p.line(250+32*p.sin( ani/100),0,250+32*p.sin( ani/100),1200)

        p.line(450+32*p.sin( ani/100),0,32*p.sin( ani/100)+450,1200)
p.line(0, 450+32*p.sin( ani/100),1200,32*p.sin( ani/100)+450)
p.line(0, 150+32*p.sin( ani/100),1200,32*p.sin( ani/100)+150)


    for(x=0;x<10;x++)
      for(y=0;y<10;y++)
        p.rect (100+x*210,y*100+ani*p.sin(3)+200,50,50)

    
    //  p.noStroke();
    //p.ellipse(p.width / 2, p.height / 2, 200 + flash);
  };
};

const sketchText = (p) => {
  let title = ['bass','Kick','love'];
  let ani = 0;
  let img , img2;

 // p.preload = () => {
  //};

  p.setup = () => {
    p.createCanvas(800, 600);
    s1.init({ src: p.canvas });
       img = p.loadImage('https://picsum.photos/800/600');
       img2 = p.loadImage('https://picsum.photos/800/600');

  };

  p.draw = () => {
    p.background(0);
    ani++;
    p.fill(255);
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(180 + 11 * p.sin(ani / 10));
    p.text(title[2], p.width / 2, p.height / 2);

    if (img) {
     // p.image(img, ani/10%100+250, 250,ani/10%100+ p.width/2,ani/10%100+ p.height/2);
  ///    p.image(img2, 50, 250, p.width/4, p.height/4);

  }
  };
};
window._p5flash = new p5(sketchFlash);
window._p5text = new p5(sketchText);

src(s0).repeat(10,4)
  .modulate(o0,1.05)	.diff(src(o0).rotate([-.012,.01,-.002,0]).scrollY(0,[-1/199800,0].fast(0.7)))

  .modulateKaleid(shape(1,() => Math.sin(time) * 0.05 +0.1,1)).blend(src(s1))	.diff(src(o0).scale(3.8)).out(o0)

s('bd ~ sn ~');
