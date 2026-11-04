samples('github:tidalcycles/dirt-samples')
setcps(130/60/4)   // 130 bpm, 1 cycle = 1 bar of 16 steps

//        1 . . . 2 . . . 3 . . . 4 . . .
const K  = "x ~ ~ ~ x ~ ~ ~ x ~ ~ ~ x ~ ~ ~"   // kick on every beat
const C  = "~ ~ ~ ~ x ~ ~ ~ ~ ~ ~ ~ x ~ ~ ~"   // clap on 2 and 4
const R  = "~ x ~ ~ ~ x ~ ~ ~ x ~ ~ ~ x ~ ~"   // rumble, right after each kick
const S  = "~ ~ ~ ~ ~ ~ ~ x ~ ~ ~ ~ ~ ~ ~ ~"   // stab, free step only

stack(
  // 1. kick, it also triggers the sidechain on orbit 2
  s(" hardkick:0").struct(K).orbit(1).delay(0.125),
    //.duckorbit(2).duckattack(.2).duckdepth(.9),

  // 2. ghost kicks: soft and short, so it rolls
s(" hardkick:0").struct(K).late(1.5).gain(.83).lpf(400).orbit(1),

  // 3. clap on 2 and 4
  s("cp").struct(C).gain(.7).o(1),

  // 4. hats on every 16th + open hat on the offbeat
  s("hh*8").delay(.514).gain(1.53).orbit(1),
  s("oh").struct(R).late(1.15).gain(.04).o(1),

  // 5. rumble: kick + huge reverb, lows only, ducked by the kick (orbit 2)
  s("clubkick:6").struct(R)
    .lpf(120).room(.95).roomsize(16).gain(1.1)
    .orbit(2),
note("<eb3!8  cb4 >/2").trans(-20).midiport('nfcmidi').midi()
 
  // 6. chord stab with echo, where nobody else plays
 // note("<[a3,c4,e4,g4] [f3,a3,c4,e4]>").struct(S)
  //  .s("sawtooth").lpf(1800).decay(.12).sustain(0)
 //   .delay(.5).delaytime(.35).delayfeedback(.55)
//    .gain(.4).orbit(3)
)
