window.addEventListener('load', function() {
const main = document.querySelector("main");
const h2 = document.querySelector("h2");
const a = document.querySelector("a");
const p = document.querySelectorAll("p");

let usuario = prompt("Ingrese su nombre:");
if(usuario == null || usuario == "")  {
    h2.innerHTML += "Invitado"
} else {
    h2.innerHTML += usuario
};

h2.style.textTransform = "uppercase";
a.style.color = "#E51B3E";

let fondo = confirm("¿Desea colocar un fondo de pantalla?");
if(fondo) {
    document.querySelector("body").classList.add("fondo")
};

/*p.forEach((p, i) => {
    if(i %2 === 0){
        p.classList.add("descatadoPar");
    }else{
        p.classList.add("destacadoImpar");
    }
});*/
for(let i= 0; i<p.length; i++){
    if(i%2 == 0){
        p[i].classList.add('destacadoPar');
    } else {
        p[i].classList.add('destacadoImpar');
    }
}

main.style.display = "block";

})
