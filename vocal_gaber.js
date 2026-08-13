$:setCpm(180/4)

//samples('shabda:No Backboard,hihat:4,rimshot:2')


_$:s("<voc/42>")//.gain(13).fit()//.splice(8,  "0 8!9 2@16 [2 3 0]@2 7@9 3 4@2 2@7").slow(2).cut(1)
  .slice(16,"15 4".fast(2)).struct("1 1 ~!16").gain(3)


_$: s("<voc/42>").slice(16,"<4 8> 2".fast(2))
  .struct("<1@2 ~@2>")
  .gain(3)

$:s("voc/42")//.gain(13).fit()//.splice(8,  "0 8!9 2@16 [2 3 0]@2 7@9 3 4@2 2@7").slow(2).cut(1)
//.delay(.7)
//.ply(2)
//splice(4, "0 1 <2 2*2> 3 [4 0] 5 6 7".every(3, rev)).cut(3)//.cut(1)
  .slice(16," 7*6  4".fast(4))
//," 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15".fast(1))  // joue chaque slice dans l'ordre
  .slow(16).gain(3).cut(3)//.o(2)         // étire sur 16 cycles pour que chaque slice dure 1 cycle


//.loopAt(3).clip(8).gain(6).fit()//.splice(3)

$:s("leads:2!4").n("<1!4 2!4 5 > ,<~ 0>*4").o(2)
  .scale("C:Minor").ply(3).gain(.6)//.delay(.95)

_$:s('music_&_instruments').n("7")//.gain(2)
  .note("<1 2 5 >*8 ,<~ 0>*4"
        .ply(2)
  //.note("c2!4")      
        .add("<24 16 32>/8"))
  .fast(8).o(2)
  .scale("C:Minor")
.cut(1).gain(1).delay(.8).room(3)


//.lpf(1230)
_$:s("basses:2 ~").o(2).diode(1).clip(.82)//.delay(.2)
_$:s("kicks_from_artists:<1!4 9>*4").lpf(222)
  .struct("<1 1 1!8 [1!4]  >*4")
  .diode(2)
 . gain(2)
  .cut(1)
.ply(2)
 // .degradeBy(0.
             .room(.2)
.duck(2)
$:s("<screeches:<8 4!2 1!3> ~!8>").gain(2)
$:s("snares:<8 4!2 1!3>!4")//.o(2)
$:s("hh!16").gain(.6)
_$:s("edm_kicks:5!8").diode(7).duck(2).cut(1)

$:s("snares:<9>!16")//.o(2)$:s("<~!16 effects:2>").gain(.5)
$:s("<effects:4  ~!8 >").gain(.2)
$:s("flp *4").clip(1).gain(.8)//.o(2)
//$:s("<atmos:2 ~!64>").clip(8).fm(22)
 // .gain(10).room(2).o(2)
_$:s("new_breaks:9/8").gain(2).fit()
_$:s("loops:4/8").gain(2).fit()


//$:s("loops:12/8").gain(2).fit()

sound of freesound and samples pack 