setcpm(145/4)
//@by krease vertigo
$:stack(
  // ==========
  // KICK – evolving 4/4 (Berghain style)
  // ==========
  s("<bd:1*4, bd*<2 2 8 3 2>, bd*4, bd [bd bd] bd [bd bd]>")
    .iter(2)
    .bank("RolandTR909")
    .gain(1.0)
    .shape(0.725)
    .room(0.15)
    .delay(0.21),

  // ==========
  // SNARE / CLAP – backbeat with variation
  // ==========
  s("<~ sd ~ sd, ~ sd ~ [sd sd], ~ sd ~ sd, ~ [sd sd] ~ sd>")
    .bank("RolandTR909")
    .gain(0.7)
    .room(0.25),

  // ==========
  // CLOSED HATS – driving 8ths + 16th bursts
  // ==========
  s("<hh*16, hh [hh hh] hh [hh hh] hh [hh hh], hh*8, hh [hh hh] hh [hh hh] hh [hh hh]>")
    .degrade()
    .rib(4, 8)
    .bank("RolandTR909")
    .gain(0.5)
    .hpf(3000)
    .room(0.1),

  // ==========
  // OPEN HAT ACCENT
  // ==========
  s("~ ~ ~ ~ oh ~ ~ ~")
    .bank("RolandTR909")
    .gain(0.35)
    .room(0.25),

  // ==========
  // RIM / CLAP PERC FOR GROOVE
  // ==========
  s("<~ cp ~ ~, ~ ~ cp ~, cp ~ ~ ~, ~ ~ ~ cp>")
    .bank("RolandTR909")
    .gain(0.3)
    .lpf(5000)
    .shape(0.8)
    .room(0.2),

  // ==========
  // TOP PERC: SHAKER (16ths)
  // Replace "shaker_sample" with your real sample name
  // ==========
  s("percusion_*16")
    .gain(0.25)
    .hpf(5000)
    .room(0.15),

  // ==========
  // TOP PERC: NOISE HITS (syncopated)
  // Replace "noise" with your real sample name
  // ==========
  s("<~ impacts:7 ~ ~ ~ ~ impacts:8 ~ noise ~ ~ ~ ~ ~ ~ noise>")
    .gain(0.22)
    .hpf(6000)
    .room(0.1),

  // ==========
  // METALLIC PERC (4‑bar rotation)
  // Replace "140bpm_loops" with your real sample name
  // ==========
  s("<~ ~ 140bpm_loops:3 ~ 140bpm_loops:2 ~ ~ ~, ~ 140bpm_loops:4 ~ ~, ~ ~ ~ 140bpm_loops:4>")
    .gain(.38)
    .lpf(8000)
    .room(0.25),

  // ==========
  // IMPACT EVERY 8 BARS
  // Replace "impacts:8" with your real sample name
  // ==========
  s("~ ~ ~ ~ ~ ~ ~ impacts:8")
    .gain(0.9)
    .room(0.6),

  // ==========
  // STABS EVERY 4 BARS (ALTERNATING 2 SOUNDS)
  // Replace "synth_stabs" and "140bpm_loops_b" with your real sample names
  // ==========
  s("<synth_stabs ~ 140bpm_loops_b ~>")
    .gain(0.7)
    .lpf(4000),

  // ==========
  // BASS – sub + mid
  // Adjust notes, scale, and filter to taste
  // ==========
  note("<e1 e1 e1 e1, e1 e1 b0 e1, e1 e1 e1 e1, e1 b0 e1 e1>")
    .scale("E4:minor")
    .sound("distortion_bass:<1!8 2!8 10!8>")
    .lpf(180)
    .gain(0.0818)
    .room(0.15)
)

_$:s("earthquake_kicks_1!2")

//all(x=>x.compressor("-0.5:16:0:0.001:0.05"))

