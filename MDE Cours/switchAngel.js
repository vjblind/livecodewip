// Starting tempo — not visible in the screenshot
setCpm(140/4)

// Switch Angel's current acidenv settings.
// Adapted to support numbers AND patterns.
register('acidenv', (amount, pat) => pat
  .lpf(100)
  .lpenv(reify(amount).mul(9))
  .lps(.2)
  .lpd(.12)
  .lpq(2)
)

// Her orbit shortcut
register('o', (orbit, pat) => pat.orbit(orbit))

// LET US TRANCE ONCE MORE
$: n("<0 4 0 9 7>*16")
  .scale("g:minor").trans(-12)
  .o(3).s("sawtooth")
  .acidenv(slider(0.546))
  ._pianoroll()

$: n("<0>*16")
  .scale("g:minor").trans(-24)
  .detune(rand)
  .o(4).s("supersaw")
  .acidenv(slider(0.662))
  ._pianoroll()

// Built-in kick substituted for her unidentified tbd sample
$: s("bd:2!4")
  .duck("3:4:5:6")
  .duckdepth(.8)
  .duckattack(.16)
