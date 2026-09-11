setCpm(174/4)

_$:s("bd*4").ply("1 0 1 0 2 ")
.rib(4,"<12 34 22 1 4>".slow(8))
_$:s("sd*2").ply("1 0 1 0 1 0 1 2 ")

$:s("bassdrum*4").ply("1 0 0 0 1 1 0 2 ")

$:s("bass_one_shots:<0!36 1!8 ~!16 >*4").ply("1 0 0 0 1 1 0 2 ")

_$:s("long_reverb_tails ~!24").slow(8).speed(.5).diode(2)//.ply("1 0 0 0 1 1 0 2 ")
_$:s("long_reverb_tails ~!24").slow(8).speed(.5).diode(2)//.ply("1 0 0 0 1 1 0 2 ")
$:s("evenmorebreaks:6/2").speed(1.8).diode(2)
.cut(8)//.ply("1 0 0 0 1 1 0 2 ")
_$:s("evenmorebreaks:<2  3!16 23 1>/2").speed(1.).diode(1).lpf(777)

_$:s("drumloops:<3!8 2!16 1!8>").ply("1 0 0 0 1 1 0 2 ").cut(3)

$:s("top_drum_loops:<1!8 2!4 1!8 7!4>").speed(2).ply("1 0 0 0 1 1 0 2 ").diode(2).cut(13)

_$:s("amen_breaks:<3!8 <12!8 34!2 2!6> 7!8>").ply("1 0 0 0 1 1 0 2 ").cut(3)


$:s("kick")