//@by fme


arrange(
[8,stack(
s("< tonal_impacts:<8 3 2>/3 ~!8>")
  .lpf(111),

s("< tonal_impacts:<7 5 6>/3 ~!4>")
  .lpf(111),  

s(" tonals").n("< <3!8 4!8>>".add(3)).gain(.4) .lpf(777),

s(" impacts").n("<~!8 2>").lpf(777),

s(" impacts").n("<~!4 9 ~!2 10>").lpf(777),  
  
s("<atmos:<1 4 15 2>/2 >").lpf(122),

s("<170:<33!2 12 15 2>/2 >").lpf(1122),

s("<bass>!8").n("<5!8 8!16>").cut(3).lpf(777).almostNever (ply(3)),  

s(" kicks!4").n("<0!8 5!16>").cut(3).lpf(333)//.almostNever (ply(3))
  ,    

s("<bass>!1").n("<2!8 3!16>").diode(1.2).euclid(3,8).cut(2).lpf(777).almostNever (ply(3)),  
s("<bass>!2").n("<8!8 5!16>").diode(1.2).euclid(4,8).cut(1).lpf(777).almostNever (ply(3)),  
//s("<earthquake_kicks_1>!2").n("<7! 2!4 1!4>").diode(1.2).euclid(8,8).cut(1).lpf(777).almostNever (ply(3)),  
s("<bass>!8").n("<7! 2!4 1!4>").diode(1.2).euclid(8,8).cut(3).lpf(777).almostNever (ply(3)),  


  
)

]

  
)









