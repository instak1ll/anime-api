import 'bootstrap/dist/css/bootstrap.min.css'
import { Client, fetchRandom } from "nekos-best.js";

const button = document.querySelector('#button')
button.onclick = buscarInput
const waifu = document.querySelector('#waifu')



console.log(await fetchRandom("neko"));

async function buscarInput() {

    const res = await fetch('https://nekos.best/api/v2/neko')
    const data = await res.json()
    waifu.innerHTML += `<img src="${data.results[0].url}" width='228px' class='m-2'>`

}