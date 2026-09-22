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
if (window._p53d) { window._p53d.remove(); }

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
    let ani2 = 0;
  let img , img2;
  let lastChange ;
  let changeInterval ; // Change every 5 seconds (ms)
 // p.preload = () => {
  //};

  
  p.setup = () => {
    p.createCanvas(800, 600);
    s1.init({ src: p.canvas });
       img = p.loadImage('https://picsum.photos/800/600');
       img2 = p.loadImage('https://picsum.photos/800/600');
  lastChange = Date.now();
  changeInterval = 5000; // 5 seconds (in milliseconds)
  };

  p.draw = () => {
    p.background(0);
    ani++;


      
  if (Date.now() - p.lastChange > p.changeInterval) {
    // Increment and wrap around using modulo
    p.ani2 = (p.ani2 + 1) % title.length;
    p.lastChange = Date.now();
  }
    
    p.fill(255);
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(180 + 11 * p.sin(ani / 10));
    p.text(title[ani2], p.width / 2, p.height / 2);



    
    if (img) {
     // p.image(img, ani/10%100+250, 250,ani/10%100+ p.width/2,ani/10%100+ p.height/2);
  ///    p.image(img2, 50, 250, p.width/4, p.height/4);

  }
  };
};

// Canvas 3 : la 3D
const sketch3d = (p) => {
  let ani = 0;

  p.setup = () => {
    p.createCanvas(800, 600, p.WEBGL);
    s2.init({ src: p.canvas });
  };

  p.draw = () => {
    ani++;
    p.background(0);
    p.rotateX(ani * 0.01);
    p.rotateY(ani * 0.013);
    p.noStroke();
    p.ambientLight(60);
    p.pointLight(255, 100, 255, 0, 0, 300);
    p.fill(255, 80, 150);
    p.box(500);

    p.push();
    p.translate(250, 0, 0);
    p.rotateZ(ani * 0.02);
    p.fill(80, 200, 255);
    p.torus(60, 20);
    p.pop();
  };
};

window._p5flash = new p5(sketchFlash);
window._p5text = new p5(sketchText);
window._p53d = new p5(sketch3d);

src(s0).repeat(10,4)
  .modulate(o0,1.05)	.diff(src(o0).rotate([-.012,.01,-.002,0]).scrollY(0,[-1/199800,0].fast(0.7)))

  .modulateKaleid(shape(1,() => Math.sin(time) * 0.05 +0.1,1)).blend(src(s1))	.diff(src(o0).scale(3.8))  
 // .mult(src(s2).add(src(s1)))//.layer(src(o0))
  .out(o0)

s('bd ~ sn ~');
