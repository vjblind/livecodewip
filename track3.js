


samples('github:tidalcycles/Dirt-Samples')
setCpm(130/4)

// LAYERS
let layers = [
  s("bd*4").duck(2),          // 0 kick
  n("<0 ~ 0 0 0~ 0 ~>*16").s("jvbass"), // 1 bass
  s("hh*8"),          // 2 hats
  n("<0 3 5 7>!4").s("stab!4").struct("1 0 1 0 0 1"), // 3 hook
stack( s("glitch:2").fit().o(2),s("loops:4") ),// 4 texture
  s("flick!4").set(gain("<.21 0 .21 >!32")).o(2)      // 5 fx
]

// SCENES
let intro, groove, build, drop, breakx

intro  = [0,4]
groove = [0,1,2]
build  = [0,1,2,4]
drop   = [0,1,2,3,5]
breakx  = [4,3]

// SCENE PLAYER
function play(scene){
  return stack(...scene.map(x => layers[x]))
}

// PLAY
$:play([5])