
await initHydra()

const urls = [
  'https://media.giphy.com/media/8t7Sg8FHlpVPGb7oCP/giphy.mp4',
  'https://media.giphy.com/media/077i6AULCXc0FKTj9s/giphy.mp4',
  'https://media.giphy.com/media/I0e4u216Qhww8eRTVq/giphy.mp4',
  'https://media.giphy.com/media/SvFwXYela3POnL0Bvd/giphy.mp4',
  'https://media.giphy.com/media/YQGatFvxRXElgLPLUc/giphy.mp4',
  'https://media.giphy.com/media/3o6Zt2iHqqrjNlbPS8/giphy.mp4',
  'https://media.giphy.com/media/C3HW1koXFMNW49cdNr/giphy.mp4',
  'https://media.giphy.com/media/0zVCOshL7izTAZP9b0/giphy.mp4',
  'https://media.giphy.com/media/JTheOT8fz6vMzQeFmB/giphy.mp4',
  'https://media.giphy.com/media/IedrY2VP5IO5ivDQAD/giphy.mp4'
]

// ── loader UI ──
const loader = document.createElement('div')
loader.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);font:18px monospace;color:#0ff;background:#0008;padding:12px 20px;z-index:9999;font-family:monospace'
loader.textContent = 'Loading videos... 0 / ' + urls.length
document.body.appendChild(loader)

const videos = urls.map(url => {
  const v = document.createElement('video')
  v.crossOrigin = 'anonymous'
  v.src = url
  v.loop = true
  v.muted = true
  v.playsInline = true
  v.preload = 'auto'
  v.style.cssText = 'position:fixed;width:2px;height:2px;opacity:.01;pointer-events:none'
  document.body.appendChild(v)
  return v
})

// canvas as stable texture source
const canvas = document.createElement('canvas')
canvas.width = 480
canvas.height = 270
const ctx = canvas.getContext('2d')
canvas.style.cssText = 'position:fixed;width:2px;height:2px;opacity:.01;pointer-events:none'
document.body.appendChild(canvas)

// wait until a video has enough data to play through
function whenReady(v) {
  return new Promise(resolve => {
    if (v.readyState >= 4) return resolve()
    v.addEventListener('canplaythrough', () => resolve(), { once: true })
    v.addEventListener('loadeddata', () => {
      if (v.readyState >= 4) resolve()
    }, { once: true })
    // safety net: resolve after 8s no matter what
    setTimeout(resolve, 8000)
  })
}

// preload loop with progress
let loaded = 0
async function preloadAll() {
  await Promise.all(videos.map(async v => {
    await whenReady(v)
    loaded++
    loader.textContent = 'Loading videos... ' + loaded + ' / ' + urls.length
  }))
  loader.remove()
}

await preloadAll()

// now everything is ready — start the show
let current = 0
let counter = 0
let started = false

// kick off first video
videos[current].play().catch(() => {})
s0.init({ src: canvas, dynamic: true })
started = true

// draw loop
function drawLoop() {
  if (started && videos[current].readyState >= 2) {
    ctx.drawImage(videos[current], 0, 0, canvas.width, canvas.height)
  }
  requestAnimationFrame(drawLoop)
}
drawLoop()

$: n('2').onTrigger(() => {
  if (!started) return
  counter++
  const next = counter % videos.length
  if (next === current) return
  videos[current].pause()
  current = next
  videos[current].currentTime = 0
  videos[current].play().catch(() => {})
})

src(s0)
//.kaleid(2)
 // .colorama(0.15)
 .modulate(noise(3, 0.1), 0.12)
  .out(o0)


