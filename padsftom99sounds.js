
$:chord("<~ C G G F >/8").voicing()
.s("movement:19").lpf("700").delay(.5)

$:chord("<C G Gm11 F >/4").voicing().trans(-4)
.s("movement:44").lpf("700").delay(.5)

_$:s("samples:12").gain(.24).clip(1).diode(2)


$:chord("<C G Gm11 F >/4").voicing().speed(.024)
.s("movement:2").lpf("700").delay(.5)

_$: chord("<C G Gm11 F >/4").voicing()
  .transpose(-12).s("movement")   // shift all notes down by semitones (negative = down)
  .speed(.024).s("movement:2").lpf("700").delay(.5)
_$:note("c2 c1 g3 g4 f5 ".slow(8)).scale("c:minor")
  .s("sparkle_g:1").lpf("700")







$:chord("<C^13 G7 G9 F^13 >/2").voicing().scale("E:major")
  .s("satellite_c:1").lpf("700")


_$:note("c2 c1 g3 g4 f5 ".slow(8)).scale("c:minor")
  .s("sparkle_g:1").lpf("700")




