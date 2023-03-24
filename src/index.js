import "bootstrap/dist/css/bootstrap.min.css";
import "vanilla-tilt";

const button = document.querySelector("#button");
button.onclick = buscarInput;
const waifu = document.querySelector("#waifu");


async function buscarInput() {
    
    const res = await fetch("https://nekos.best/api/v2/neko");
    const data = await res.json();
    const DIV = document.createElement("div");
    
    DIV.innerHTML = `<a href="${data.results[0].source_url}" target="_blank">
    <img title="${data.results[0].artist_name}"
        alt="${data.results[0].artist_name}"
        src="${data.results[0].url}"
        width='228px'
        class='m-2 border border-dark shadow-sm'>
    </a>`
    VanillaTilt.init(DIV, {
        max: 25,
        speed: 400
    });
    waifu.appendChild(DIV);
}
// Hidden Button and Main text
const marginHidden = 100;
const navbar = document.querySelector("#main");
const upBtn = document.querySelector("#up");

const updateInterface = () => {
    if (window.scrollY >= marginHidden) {
        const moveOffset = document.querySelector("#title").offsetHeight;
        upBtn.style.visibility = "visible";
    upBtn.style.display = "inline";
    navbar.style.top = `-${moveOffset}px`;
    } else {
        upBtn.style.visibility = "hidden";
        upBtn.style.display = "none";
        navbar.style.top = "0px";
    }
}

window.addEventListener('scroll', updateInterface)