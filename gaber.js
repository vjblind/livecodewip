(180/4)


$:s("leads:2!4").n("<1!4 2!4 5 > ,<~ 0>*4").o(2)
  .scale("C:Minor").ply(3)
.lpf(1230)
$:s("basses:2 ~").o(2).diode(1).clip(.82)
$:s("kicks_from_artists:<1!4 9>*4").lpf(222)
  .struct("<1 1 1!8 [1!4]  >*4")
  .diode(2)
 // .ply(2)
 // .degradeBy(0.
             .room(.2)
.duck(2)
$:s("<screeches:<8 4!2 1!3> ~!8>")
_$:s("snares:<8 4!2 1!3>!4")//.o(2)
$:s("hh!16")
_$:s("edm_kicks:5!2").diode(7).duck(2)

//$:s("snares:<9>!16")//.o(2)
$:s("<~!16 effects:2>").gain(.5)
//$:s("<effects:4  ~!8 >")
$:s("flp *4").clip(1).gain(.3).o(2)


need melodie vocal test. more texture