$:s("jazz!4").
  //.
n(22).s("bd*0,~ sawtooth!3, hh*3")
  .struct("<x ~@2 x ~ x>*2, <x ~@2>!4/8".fast(8))
.layer(
//  x => x.delay(.515).delaytime(1/89).delayfeedback(8.85).ply(18),
//  x => x.delay(.53).delaytime(1/366).delayfeedback(1.8),
  x => x.delay(.053).delaytime(1/6135).delayfeedback(sine.range(.8,9).slow(4))
).lpf(1222)
 // 
 .diode(3)//
//.fm(.99).detune(.2)
//.phaser(1.13)
//.phaserdepth(1.91).room(1.83).o(3)
$:s("cp").slow(4)
$:s("bd!4 , cp:6/4").euclid("<4!16 6 3 >",8).fm(3).diode(11.6).dist(1.6).lpf(1777).duck(3)