setCpm(160/4)
let lead = n(" ~ 1 0 2 1 0 ").scale("f:minor")
let kick = s("earthquake_kicks_2:2*2").gain(0.6)
.euclid("<4 4 4 2 1 5 4 8 4 4 4 4 6 3 7 7 7    >",8).almostNever(ply(2))

let drums = s("earthquake_kicks_1").struct("x ~ ~ ~ x").slow(2)
let bounce = s("earthquake_kicks_1:10").almostNever(ply(2))//.degrade()
  .struct("~ x " ).fast(2)
  let clap = s("cp").struct("~ ~ ~ x").delay(0.1)
$:stack(drums.distort(0.2), bounce, clap.gain(0.3))
$ :stack(lead.s("synths:1").trans(-44).striate(16).legato(1).fast(.4),
kick, s("hh*8").gain(0.1))