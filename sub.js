@by krease 

setCpm(160/4)
$:n("b2 ~ b2 0 ~ 0 3 ~").slow(4)
.scale("e1:phrygian")
  .s("bass_one_shots:7")
.lpf(333).gain(.14)

$:n("b2 ~ b2 0 ~ 0 3 ~").slow(16)
.scale("e0:phrygian").s("05_filtered:6")
.lpf(2100) 

$:note("c1 g1 c2 g1")
.s("bass:10").cut(2).slow(9)
.lpf(480)

//$:note("f1").s("drumloops:2").slow(.2).clip(.8).gain(.3)
 $:   s("drum_loops:2").clip(1.5).att(1.8).slow(1).o(2).lpf(1733)

 $:   s("01_loops:[0 |8 | x] ").att(.5).slice(4,"0  3 1 2 3 0 1 2 3".slow(8)).lpf(1733)


$:note("c1 g1")
.s("bass_one_shots:9").cut(2).slow(2)
.lpf(480)

$:chord("Dm9 Fm7 Cm7 Em9").voicing()
.s("processedacoustics_mini_sp:9").trans("<-33 -55 -44>/8").slow(16)
.room(.75).delay(1.5)


$:note("<[d2 a2 c3 e3] [f2 c3 e3 a3] [c2 g2 b2 e3] [g1 d2 f2 a2]>")
  .s("pads")
  .slow(16)
  .room(.8)
  .delay(.2)
  .lpf(300)
  .gain(.45)

$:s("bd")
  .bank("RolandTR909")
  .struct(" < x ~ x ~ x ~ x [x | x x] x ~ x ~ x ~ ~ [x x | x]>*4").lpf(333)

$:s("fx_and_weirdness:3").struct("~ ~ ~ x").slow(64)
