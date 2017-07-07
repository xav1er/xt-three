import Webgl from 'js/core/Webgl'
import Loop from 'js/core/Loop'
import props from 'js/core/props'
import Example from 'js/components/Example'

const webgl = new Webgl(window.innerWidth, window.innerHeight)
document.body.appendChild(webgl.dom)

const loop = new Loop()
loop.add(webgl.onUpdate)

const gui = new dat.GUI()
gui.add(props, 'rotation', 0.01, 1)
gui.close()

const light = new THREE.DirectionalLight(0xffffff, 0.5)
light.position.set(1, 1, 1)
webgl.add(light)

const example = new Example()
webgl.add(example)
loop.add(example.onUpdate)
loop.start()

window.addEventListener('resize', () => {
  webgl.onResize(window.innerWidth, window.innerHeight)
})

window.addEventListener('orientationchange', () => {
  webgl.onResize(window.innerWidth, window.innerHeight)
})
