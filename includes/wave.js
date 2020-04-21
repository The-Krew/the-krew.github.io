//hledá canvas na webu
const canvas = document.getElementById('wave')
//const canvas2 = document.getElementById('background')
//vytváření objektu
const c = canvas.getContext('2d')
//const j = canvas2.getContext('2d')
//upravuje velikost canvasu
canvas.width = innerWidth
canvas.height = innerHeight

//canvas2.width = innerWidth
//canvas2.height = innerHeight

console.log(canvas)
//console.log(canvas2)
//vlna
const wave = {
  y: 125,
  lenght: 0.01,
  amplitude: 50,
  frequency: 0.01
}
const strokeColor ={
  h:255,
  s:50,
  l:50
}
const rectColor ={
  r:255,
  b:255,
  g:255,
  a:0.01
}


/*
//vytváření objektu dat.GUI
const gui = new dat.GUI()
//měniče
const waveFolder = gui.addFolder('wave')
waveFolder.add(wave, 'y', 0, canvas.height)
waveFolder.add(wave, 'lenght', -0.01, 0.01)
waveFolder.add(wave, 'amplitude', -300,300)
waveFolder.add(wave, 'frequency', -0.01,0.01)

const strokeColorFolder = gui.addFolder('strokeColor')
strokeColorFolder.add(strokeColor, 'h', 0,255)
strokeColorFolder.add(strokeColor, 's', 0,100)
strokeColorFolder.add(strokeColor, 'l', 0,100)

const rectColorFolder = gui.addFolder('rectColor')
rectColorFolder.add(rectColor, 'r', 0,255)
rectColorFolder.add(rectColor, 'g', 0,255)
rectColorFolder.add(rectColor, 'b', 0,255)
rectColorFolder.add(rectColor, 'a', 0,0.2)
*/

let increment = wave.frequency

function animate()
{
  requestAnimationFrame(animate)
  c.fillStyle = `rgba(${rectColor.r},${rectColor.g},${rectColor.b},${rectColor.a})`
  //j.fillStyle = `rgba(${rectColor.r},${rectColor.g},${rectColor.b},${rectColor.a})`
  c.fillRect(0,0,canvas.width, canvas.height)
  //j.fillRect(0,0,canvas2.width, canvas2.height)
  //začátek vlny
  c.beginPath()
  //přeson na pozadí na lokaci
  c.moveTo(0, canvas.height / 2)
  //tvoření segmantů vlny
  for (let i = 0; i < canvas.width; i++)
  {
    c.lineTo(i, (wave.y + Math.sin(i * wave.lenght + increment )* wave.amplitude * Math.sin(Math.tan(increment))))
  }
  c.strokeStyle = `hsl(${Math.abs(strokeColor.h * Math.sin(increment))}, ${strokeColor.s}%, ${strokeColor.l}%)`
  c.stroke()
  increment += wave.frequency
}
animate()
