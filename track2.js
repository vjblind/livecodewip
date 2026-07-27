
$:setCps("135/60/4")

samples('github:tidalcycles/Dirt-Samples');
register(
  'acid',(x,pat=>pat.lpf(100).lpenv(x*9).lps(0.81)
    .lpd(0.1).lpq(28))
)
const grab = (i, xs) => xs[i % xs.length]
const melody = irand(4).pick(["C","C#","E","F"])

const bass =
//n("430,<171!8 110 122>*2 ,<7001 100>!16").
  s("sawtooth!8")
  .acid( )
  .clip(1)
  .set(gain(" <1 0 1 1 1 0 1 0>*16"))  
   .fm( time.mod("<1 0 0 2 >") )
    .diode(2)
    .dist(" < 1 1 1 100 1 1 1 30>*4")
 // .o(3).almostNever(ply(2|4))
  ._scope().gain(1)


const ld  = note( melody).rib("<15 >",8).fast(8).ply(2)
.s("sawtooth")
  .unison(2)
  .dist(3)
  //.lps(0.555)
  .lpenv(10).lpq(.16)
.lpf(1).gain(1.53)._scope()

 

 const synth =s("stab:<11 ~ 1 11 4 6>*8!4")
   .set(gain("<1 1 1 1 0 1 0 1 >*4")).o(3).duckdepth(1.3)._scope()


$:s("[clubkick:<4 6>   ]!4 ")
  //.struct("< 1 0 1 0 1 0 0  1 1 0 1>*16")
  .delay(0.15).postgain(2.51).duck("3").duckdepth(1.3)._scope()
 

_$:s("hh:2!16").o(3)._scope()

$:s("cp/3").almostNever( ply(2|4))._scope()


$:s(" top_drum_loops:6*2").rib(1,4).postgain(2).clip(1)._scope()



$: stack(
 bass.struct("[1 _ _ 1]!3 [0 1]"),
  //synth//.struct("[[1 _ 1 1]!3 [0 1]]@44"),
ld// .scrub("1 .1 11@3 .2 .7 ",0.16)//.struct("[0 1 1 1 1 1 _ _]!3 [1@5 0]")
).rib(3 ,3)
