import { proxy } from "valtio";


//in const state, we define the initial statewe want and use it similar to react context
const state = proxy({
    intro: true, // are we currently in the home route?
    color: '#dfe9eb',
    isLogoTexture: true, //meaining are we currently displaying the logo on ouur shirt?
    isFullTexture: false,
    logoDecal: '/mine.PNG',
    fullDecal: './threejs.png'
})

export default state;