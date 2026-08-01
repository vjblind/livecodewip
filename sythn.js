samples('github:bubobubobubobubo/dough-waveforms')
setcps(0.6)

// ===== OSC + UNISON (3-voice stack = Vital's unison voices) =====
stack(
  note("<c2 c2 eb2 g1>*4").s("wt_dbass").clip(1.5)
    .wt(sine.range(0,1).slow(8))
    .warp(slider(0.3,0,1)).warpmode("stretch")
    .speed(1)
    .gain(0.75),
  note("<c2 c2 eb2 g1>*4").s("wt_dbass").clip(1.5)
    .wt(sine.range(0,1).slow(8).early(0.1))
    .warp(slider(0.3,0,1))
    .speed(slider(1.007,0.98,1.02,0.001))   // unison detune +
    .pan(slider(0.35,0,1))
    .gain(0.6),
  note("<c2 c2 eb2 g1>*4").s("wt_dbass").clip(1.5)
    .wt(sine.range(0,1).slow(8).late(0.1))
    .speed(slider(0.993,0.98,1.02,0.001))   // unison detune -
    .pan(slider(0.65,0,1))
    .gain(0.6)
)
// ===== FM cross-mod (Vital osc-mod equivalent) =====
.fm(slider(0.4,0,4))
.fmh(slider(1.5,0.5,8,0.5))
// ===== SHAPE / DRIVE =====
.distort(slider(0.3,0,1))
.shape(slider(0.15,0,1))
// ===== FILTER + RESONANCE + ENVELOPE =====
.ftype('24db')
.lpf(sine.range(500, slider(3000,500,8000)).slow(2))
.resonance(slider(8,0,40,1))
.lpenv(slider(6,0,12))
.lpattack(slider(0.01,0,1))
.lpdecay(slider(0.2,0,1))
.lpsustain(slider(0.3,0,1))
// ===== FX =====
.chorus(slider(0.4,0,2))
.delay(slider(0.2,0,1))
.room(slider(0.35,0,1))
.compressor("-20:3:1:0.005:0.2")
// ===== MASTER =====
.gain(slider(0.9,0,1.2))
._scope()