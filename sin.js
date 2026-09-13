
//@by vj sine

setcpm(140/4)
samples('github:tidalcycles/dirt-samples')

$: note("e@3 f@2 g2@3" .add(sine.range(3,-3).segment(16).slow(4)))
 .legato(8) .s("  .struct("x - - x - - x - - x - - x - - -")
  .vib(11)
  .ply(2)
  .postgain(1)._punchcard()

_$: note("e2?3 f#2 g2?3")
  .s("sine").vib(1).trans("24").sustain(0.5).room(1)._punchcard()
