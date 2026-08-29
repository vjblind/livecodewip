
_$:note("<[1 2 3 5 8 3 2 2 2 3 ]!4 [8 8 7 7 6 6 6 7]!4 >").scale("E2:minor").s("crypticsoundwaves_mini_sp:4").slice("8","2!8").delay(.25)
.slow(6).gain(2)

_$:s("168bpm:13").slice(8,"3 0 7 5 ".add("<1 0 3 0 0 0 0>/8")//.rib(122,"<0 0 0 0 8 7 4 3 7 6 8 >") 
                       .slow(.75)).sometimes(ply(2)).gain(2)           

$:s("168bpm:12").slice(8,"3 0 7 5 ".add("<1 0 3 0 0 0 0>/8").slow(.75)).almostNever(ply(2)).gain(2)


$:s("<FX:<25 13> ~!8>").slow(1)._punchcard()
$:s("<FX:33 ~!16>").slow(1)._punchcard()
$:s("<FX:44 ~!7>").slow(1)._punchcard()

$:s("<sfx:<5 3 2 5 5> ~!4>").slow(1)._punchcard()

$:note("2 ~!32").scale("E1:minor").s("wompa:12")//.slice("8","2!8 ").delay(.25)
.slow(1).gain(2)

_$:note("2 ~!32").scale("E1:minor").s("nasty_grumble:12")//.slice("8","2!8 ").delay(.25)
.slow(1).gain(2)

$: //note("c e f a c c") 
s("emergence_mini_sp:1").slice(32, "0 2 5 7").ply(2).att(.2).delay(.25)//.legato(.51)
.lpf(666)
.slow(2)
/*


 $://note("c e f a c c  ").
   s("crypticsoundwaves_mini_sp:3").slice(32, cat ("0 2 5 7 ","3 4 6 8 ")).delay(.05).legato(.51).lpf(366).slow(8)//.struct("[x _ _ _ _]/32")
_$:s("168bpm:8").slice(8,"7 5 8 1 3 4 5 1 2 3".slow(1.75)).gain(2)

_$:s("168bpm:12").slice(8,"7 5 8 4 3 7 7 1 3".slow(1.75)).delay(1).degrade().gain(2)

$:s("jazz!4 ,< jazz!3 ~!4>")
$:s("hh!16").lpf(950)
$:note("c e f a c c  ").s("crypticsoundwaves_mini_sp:8").slice(8, "0 2 5 7").delay(.5).legato(.51).lpf(666).slow(4)

$: //note("c e f a c c") 
s("emergence_mini_sp:1").slice(32, "0 2 5 7").ply(2).att(.2).delay(.25)//.legato(.51)
.lpf(666)
.slow(2)*/