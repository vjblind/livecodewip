setCpm(174/4)
$:s("bd:4!2").gain(.2)
$:s("oh:2!16").gain(.01).degrade()

$:s("beats:< 8!8 4>/2").fit().clip("<1>").gain(.105)


$:n("23").note("ab0!8 cb0!8/4").slow(16).s("atmoshperes").clip(1).scrub("0.5 .2!4 .9!5").slow(4).gain(1.3)


$:n("13@5").s("synth_sounds").note("< <e a a g >f  e >*.2").legato(6).ply(2).clip(1).lpf(333).delay(.6)

$:s("loops:<8!4    ~!8 9!4>").clip(1).speed(.2).begin("<.75  .4 .5>").rib(3,3).gain("<.2!8 .4234!8>").room("<.2 1.0>").delay("<3 .2!32>")
$:s("impacts:26/2").note("f3").lpf(333).struct("x ~ x x ~ ~ x ~").degradeBy(.1).slow(1)
_$:s("upset_bass:<0!4 9!8> !8").gain(.26).mask("<1 0 0 0 1 0>").fast(2)