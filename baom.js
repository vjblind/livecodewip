setCpm(145/4)

//$:n("1!4,[ 2 < ~ 4!6 >]!4"
_$:s("170bpm:<2 3 8> /8").speed(.1)
    //.add("2"))
   // .s("hh!2")//.duck(1)
.diode(1)

//@by krease_kill
  $:s("kicks:2!4")//.degrade()

  $:s("kicks:8")
  .struct("x x!16 x ~ x x ~".fast(.1)).gain(.3).delay(.6)

$:s("sd:3!2").almostNever(ply(1)).gain(2).lpf(333)
$:arrange([8,stack(n("2!8,[ 2 < ~ 4!6 >]".add("<0!8 4!4 9!8 5!9   1!8 >!8")).s("bass")
   ,      s("<bass>!2").n("<8!8 5!16>").diode(1.2).euclid(4,8).cut(1).lpf(777).almostNever (ply(3))),      
],
 [8,s(" 808:7!16").fm(11)//.degrade()
]
   )
$:n(-2).scale("e0:minor").s("vocal:8").slow(8).splice(4,1).gain(2).struct("<x ~!34>")
$:s("oh:2!2").almostNever(ply(3)).gain(.2)
$:s("~ oh:3!1").almostNever(ply(3)).gain(.2)
$:s("hh:2!16").almostNever(ply(2)).gain(.3)
$:n("<~!16 [3*2]>").s("percusion_"). ply(2)
$:n("<0!16 2 8>/16".add(0)).s("darkwaves_mini_noiiz")

$:n("<~!32 [8]>").s("risers")
 $:s("<impacts:8 ~!8>")// .struct("x x ~ ~ x x x ~ x ~ x x ~".fast(1)) 
$:s("<impacts:3 ~!16>")// .struct("x x ~ ~ x x x ~ x ~ x x ~".fast(1)) 
 $:s("<impacts:<~ 9  12 12 4> ~!4>")// .struct("x x ~ ~ x x x ~ x ~ x x ~".fast(1)) 

const a = 
  
stack ( 
  n("0 7 10 7 5 3 0 3").s("<bass>!1").n("<2!8 3!16>").almostNever (ply(3)).color("blue"),
  s("<bass>!1").n("<2!8 3!16>").diode(1.2).euclid(5,8).cut(2).lpf(777).almostNever (ply(3)),  
  s("<bass>!2").n("<8!8 5!16>").diode(1.2).euclid(4,8).cut(1).lpf(777).almostNever (ply(3)),  
    )
    
const b =stack( 
  n("0 3 7 10 12 10 7 3").s("square").color("orange"),
  s("<bass>!1").n("<2!8 3!16>").diode(1.2).euclid(5,8).cut(2).lpf(777).almostNever (ply(3)),  
  s("<bass>!8").n("<7! 2!4 1!4>").diode(1.2).euclid(8,8).cut(3).lpf(777).almostNever (ply(3)),                 
                
)               
const c = n("0 31").slow(32).s("sawtooth").color("purple").lpf(sine.range(200,6000).slow(32))
const riser = stack(
  s("sd").struct("<x*4 x*8 x*16 x*32>").decay(.05).hpf(400).gain(.6),
  s("rises").n(6).note("<c3 c3 c3 c4>").lpf("<300 1200 4000 8000>").room(.6).gain(.8),
  s("riser").hpf("<200 800 3000 9000>").gain(.5).room(.5),
  s("bd").struct("x ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~").gain(.5)
)
riser

// $:arrange([16,a],[16,a] )//[8,  riser],[16,a],[16,b],[16,a],[16,b],[32,c]).punchcard()

/*

$:s("sd:3!2").almostNever(ply(2))
$:s("hh:3!8").almostNever(ply(2))
$:s("oh:3!1").almostNever(ply(3))
$:n("9").s("percusion_")

//$:n("<0!16 8>/16").s("darkwaves_mini_noiiz")
$:n("<9!16 4 2!8>/2").s("pads_-_drones").o(1)

 _$:s("<impacts:3 ~!16>")// .struct("x x ~ ~ x x x ~ x ~ x x ~".fast(1)) 
 $:s("<impacts:8 ~!8>")// .struct("x x ~ ~ x x x ~ x ~ x x ~".fast(1)) 
 $:s("<impacts:<7 2 3>~!4>")// .struct("x x ~ ~ x x x ~ x ~ x x ~".fast(1)) 


 $:s("<processed_hits:<7 9 2>~!4>")// .struct("x x ~ ~ x x x ~ x ~ x x ~".fast(1)) 

_$:n("<1!8 3!8 5!2>,[ 2 < ~ 10!6 >]").s("percusion_")
.ply(" 1 2 4 2 ")
  .struct("x x ~ ~ x x x ~ x ~ x x ~".fast(2)) 
.slow(2).delay(.05)

*/

