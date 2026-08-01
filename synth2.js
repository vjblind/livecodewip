// ===== CONSTANTS — edit once, both voices follow =====
const NAME  = "your-folder-name-as-shown"        // raw name, no wt_ needed
const NOTES = "<c1 ~ c1 eb1 ~ g1 ~ c1 ~>"         // ~ = rest

stack(
  // ===== VOICE A — core =====
  note(NOTES).s(NAME)
    .loop(1).unit("c")
    .begin(slider(0, 0, 1, 0.001))     // wave position (like Serum's WT pos)
    .end(slider(0.02, 0, 1, 0.001))    // window width — narrow = static frame
    .speed(slider(1, 0.5, 2, 0.001))
    .clip(slider(1, 0.1, 2, 0.01))
    .attack(slider(0.01, 0, 1))
    .decay(slider(0.15, 0, 1))
    .sustain(slider(0.6, 0, 1))
    .release(slider(0.3, 0, 2))
    .pan(0.4).gain(0.8),

  // ===== VOICE B — width/unison =====
  note(NOTES).s(NAME)
    .loop(1).unit("c")
    .begin(slider(0, 0, 1, 0.001))
    .end(slider(0.02, 0, 1, 0.001))
    .speed(slider(1.01, 0.98, 1.02, 0.001))
    .clip(slider(1, 0.1, 2, 0.01))
    .attack(slider(0.01, 0, 1))
    .decay(slider(0.15, 0, 1))
    .sustain(slider(0.6, 0, 1))
    .release(slider(0.3, 0, 2))
    .pan(0.6).gain(0.6)
)
// ===== FILTER + ENVELOPE (Serum's filter env tab) =====
.lpf(slider(1200, 100, 8000, 1))
.resonance(slider(10, 0, 40, 1))
.lpenv(slider(5, 0, 12))
.lpattack(slider(0.01, 0, 1))
.lpdecay(slider(0.25, 0, 1))
.lpsustain(slider(0.3, 0, 1))
.lprelease(slider(0.3, 0, 2))
// ===== DRIVE =====
.distort(slider(0.25, 0, 1))
// ===== FX =====
.chorus(slider(0.4, 0, 2))
.delay(slider(0.2, 0, 1))
.room(slider(0.3, 0, 1))
.compressor("-20:3:1:0.005:0.2")
// ===== MASTER =====
.gain(slider(0.9, 0, 1.2))
._scope()