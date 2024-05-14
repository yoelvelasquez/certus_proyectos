let bgdesktop = "md:bg-[url('./home/background-home-desktop.jpg')]";
let bgmobile  =  "bg-[url('./home/background-home-mobile.jpg')]";

const main = document.querySelector("#main");
const componentes = document.querySelector("#componentes");
main.classList.add(bgdesktop);
main.classList.add(bgmobile);

componentes.onclick = function(){
    console.log("estoy haciendo click");
    let bgdesktop = "md:bg-[url('./crew/background-crew-desktop.jpg')]";
    main.classList.add(bgdesktop)
}