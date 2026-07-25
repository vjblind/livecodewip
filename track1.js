

// 1. Load the reliable standard library
samples('github:tidalcycles/Dirt-Samples');

// 2. Set the techno pulse
setCpm(135/4); 

// 3. Define performance macros
const energy = slider(0.5, 0, 1); // Controls brightness and space
const build = slider(3440, 0, 10000); // Master High-Pass Filter for drops
const kk = slider(0,0,2)
const bb = slider(0,0,2)
stack(
  // THE KICK: Using Roland TR-909 for that classic techno punch
  s("bd:8*4").bank("RolandTR808")
 // .sometimes(.1,x=>x.beat("1,2,4,<2 3>,7",16))
 // .beat("1,2,4,<2 3>,7",16)
  .postgain(3.5) // Adds "heat" and saturation [7]
    .hpf(75).duck(2).gain(kk),

  // THE SIDECHAIN BUS: This "pump" variable ducks other sounds
  // when the kick hits.
  // ... layers below will use .gain(pump)
  // THE BASS: Layered Square and Sawtooth for "body" and "bite"
  note("a1*2 ~ a1 a2,<a0 e0>*8 ,<~!3 e3@2>")

    .sound("[square, sawtooth]") // Multi-layering [11]
    .transpose("[-12, 0]")      // Sub-octave for massive weight [12]
   .coarse(2)                  // Adds digital "grit" [11]
    //.decay(0.08)                // Keeps it tight and .lpf(energy.range(200, 2000)) // Interactive filter control [7]
    .hpf(77)                   // Leaves room for the kick [11]
    .orbit(2).gain(bb),
//  .duck(1.8)     
  
  
  // Sidechaining to the kick [3]2
//note("a3 ~ c4 ~ f3 ~ g3 ~").transpose("< 0 0 12 5>!4")//.rib(33,2)
  note("[<a3  c4  f3  g3 >!8 ]@12").transpose("< 0 0 12 5>!4")//.rib(33,2)
 .add("[a3 ~ c4 ~ f3 ~ g3 ~]/4@3").transpose("< 0 0 12 5>!4").ply("< 2 1>").rib(3,2)
    .sound("sawtooth")
    .lpf(energy.range(600, 5000)) // Filter controlled by slider
    .lpq(0.9) // High resonance for that "squelch"
    .decay(0.3)
  .diode (1.2).orbit(2)
  .off(0.25, x => x.transpose(7).gain(0.5)) // Call and response echo
    .jux(rev)
,
s("cp")//.bank("roland")
    .struct("~ ~ x ~") 
    .room(0.3)
    .postgain(0.8)
    .jux(rev).ply(3),
  s("hh:26*16")
    //.bank("rolland")
    .postgain(2.4)
    .room(energy.range(0.05, 0.3)) // Adds "air" as energy rises
   .jux(rev)
    .gain(0)// Essential width 
).lpf(build)

