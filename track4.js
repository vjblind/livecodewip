samples('github:tidalcycles/Dirt-Samples')
//const melo=note("<e4 g#4 e3 a#3 e#3 E2>".fast("16!16 4!2 ")).rev()//
 setCpm(135/4)
const melo1= note("e f g").scale("F:minor")

const melo2= note("e f g g g g g ")
const basss= note("< ~ e1>, e0").struct("<0 1 1 1 0 1>*16".degrade()).dist(2).fm(3).diode(3).gain(.3)
const kickkk= s("jazz!4")//.mask("< 1 0 1 0 0 0 1 1 > ".fast(16)).delay(.5)
$: stack(
 arrange(  
[2,basss.mask("1@10").lpf(77)],
//  [16,basss.lpf(111).mask("1@10")],
 ///     [16,basss.gain(.2).mask("1@10")],
 ),
  arrange(
[16,stack (kickkk.duck(2),s("hh:11!16").lpf(500))] ,
   [16,stack(s("<jazz sd>*4").euclidRot(3,4,14),s("hh27:3!8"))],
       [16,s("<jazz sd>*4")]
  ),
  s("< industrial:11@8>").scrub(irand(8).div(8).segment(8)).speed(.105).lpf(70).delay(.5).o(2),
 s("< industrial:2@8>").clip(2).scrub(irand(8).div(8).segment(2)).speed(.105).o(2).lpf(70).delay(.5),
s("< ~!16  fm:0@4>").clip(1).scrub(irand(8).div(8).segment(2)).speed(1).o(2).lpf(700).delay(.5),
  s("< jungle:<7 9 5 8 8 9 >*4>*4").clip(1).scrub(irand(18).div(16).segment(16)).speed(1).gain(2).o(2).lpf(2000).delay(.5),
// s("< cosmicg:<14 15 8 8>>").clip(1).scrub(irand(18).div(16).segment(8)).gain(.3).o(2),//.speed(1).o(2).lpf(2000).delay(.5),
    s("newnotes")
)


