setCpm(174/4)
  
_$:stack(
// Kick: Hits on the 1st beat and the "and" of the 3rd beat [5-7]
  s("bd ~ ~ ~ ~  bd ~ ~"),
  // Snare: Hits consistently on the 2nd and 4th beats [1, 6, 8]
  s("~ ~ sd [~ sd] ~ ~ sd [~ sd]").degradeBy(.031),//rib("<1 5>",2 ),
s("oh:2!8").degrade().lpf(1333)
)//.scrub(3,4)//fast("< 1 1 1 1.2>*4")

$:
note("<c2 eb2 g2>!4,< c3? g2>*8").s("sawtooth").ply(2)//.rib(3,1)
 .distort(0.8)
  .compressor(.3)
  .crush(4)



$:// A bright, rhythmic lead melody in C minor
note("[c4 g4 eb4 c5 b4 g4 ab4 f4]@8").slow(1).degradeBy(.6).rib(120,12)
  .s("supersaw")
//  .struct("1(3,8) 1(5,8)") // Creates an interesting syncopated rhythm
  .cutoff(2000).resonance(20) // Sharp synth opening
  .shape(0.4) // Subtle distortion for that OTT saturation
  .delay(0.5).delaytime(0.25).delayfeedback(0.4) // Spatial echo
  .gain(0.7) // Balanced master level


$:// A bright, rhythmic lead melody in C minor
note("c4 g4 eb4 c5 b4 g4 ab4 f4").slow(.1).degradeBy(.6).rib(120,2)
  .s("sawtooth")
  .struct("1(3,8) 1(5,8)") // Creates an interesting syncopated rhythm
  .cutoff(2000).resonance(20) // Sharp synth opening
  .shape(0.4) // Subtle distortion for that OTT saturation
  .delay(0.5).delaytime(0.25).delayfeedback(0.4) // Spatial echo
  .gain(0.7) // Balanced master level
