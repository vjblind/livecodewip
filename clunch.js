$:s("jazz!4").duck(2).lpf(700).diode(1.3)
$:s("hh!16 , oh@3").late(.152).gain(.01)

$:s("<atmoshperes:4>").lpf(111)
$:s("<atmoshperes:2 ~!8>").lpf(111) 
$:s("<atmoshperes:8 ~!8>").lpf(222).delay(3)
$://n("<2 4 5 2 1 1 1>").
//scale("C0:major")
  s("<atmoshperes:13 ~>").lpf(444)

$:s("beat_loops:2/8").fit()

$:s("percussion_loops:2/4").fit().gain(.3)

$:s("top_loops:7/8").fit().gain(.3)

$:s("long_reverb_tails:2/8 ~!4").fit()


$:s("<textures:2 >").speed(.0011).gain(.01).hpf(20)
$:s("granulartextures_mini_noiiz:5 ~!6").o(2).lpf(444)

$:s("<diverse_sounds:6 ~!4>").delay(3)
//$:s("<textures:1 ~!16>").gain(.92).hpf(200)
//$:n(" <0 2 4 5@3 1 4 [4 4 ]5>") .scale("C2:major")
  .s("saw").lpf(333).o(2)