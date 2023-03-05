import 'bootstrap/dist/css/bootstrap.min.css'
import { Client, fetchRandom } from "nekos-best.js";
import 'vanilla-tilt'

const button = document.querySelector('#button')
button.onclick = buscarInput
const waifu = document.querySelector('#waifu')



console.log(await fetchRandom("neko"));

async function buscarInput() {

    const res = await fetch('https://nekos.best/api/v2/neko')
    const data = await res.json()
    const DIV = document.createElement('div')
    DIV.innerHTML = `<img src="${data.results[0].url}" width='228px' class='m-2 border border-dark shadow-sm'>`
    VanillaTilt.init(DIV, {
        max: 25,
        speed: 400
    });
    waifu.appendChild(DIV)
}

