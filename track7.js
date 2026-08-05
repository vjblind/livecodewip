setCpm(174/4)
samples('github:tidalcycles/Dirt-Samples')

// live controls
const prog = "<Cm9 Fm11 AbM9 EbM9>/16"
const vocalGain = slider(1.47, 0, 1.5, 0.01)
const vocalTone = slider(8000, 200, 8000, 10)

// intro
const introPad = note("[c4 d4 g4 f4]").trans(-24).rev().slow(16)
  .s("gm_pad_halo, gm_pad_new_age:8")
  .att(.53).ply(8).release(9).fm(.3).lpf(300).gain(1.8)

const introSine = chord(prog).voicing().s("sine")
  .fm(.2) // the higher the number, the more "metallic" it gets
  .att(0.5).release(2).delay(2)
  .struct("~!16 1 ~!16".slow(8))

const introSax = chord("CM9 EM3").voicing().s("sax:2")
  .fm(.2)
  .att(0.5).release(2).delay(2)
  .room(0.8).struct("~!16 1 ~!16".slow(8))

// drums
const kick = stack(
  s("bd ~ ~ ~ ~ ~ ~ ~ ~ [ bd ~ ] ~ ~"),
  //s("~ ~ ~ ~ sd ~ ~  [~ sd]  ~ "),
)
//const altSnare = s("~  sd  ~ ~ ~ sd ~ [~ ]  ~")

const jazzHit = s("jazz ~ ~  jazz ~ ~ ~ ~ ").delay(.2)
const hats16 = s("hh!16").gain(.53)
const hats8 = s("hh:8!8").gain(.516).degrade()
