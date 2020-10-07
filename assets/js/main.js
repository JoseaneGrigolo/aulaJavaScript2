/* Seletores 1  */
/* document.getElementById('nav').innerHTML = ""; */

/* Seletores 2  */
document.querySelector('#lechuza').style.filter = "grayscale(100%)";

/* Seletores 3  */
let inputs = document.querySelectorAll("form input");

for(let i = 0; i < inputs.length; i++){
    /* let input = inputs[i]; */
    inputs[i].style.background = "red";
}

/* DOM 1  */

let copyright = document.getElementById("copyright");
console.log(copyright.attributes);
/* document.getElementById("copyright").attributes */

/* DOM 2  */
let urlTwitter = document.querySelector('.fa-twitter');
urlTwitter.getAttribute('href');
/* document.querySelector('.fa-twitter').getAttribute('href') */

/* DOM 3  */
let urlFacebbok = document.querySelector('.fa-facebook');
urlTwitter.getAttribute('href');
/* document.querySelector('.fa-facebook').getAttribute('href') */

/* DOM 4  */
let iconeTube = document.querySelector('.fa-youtube');
iconeTube.setAttribute('href', 'https://www.youtube.com/channel/UCRQdwmWMhTcqDFjPT4UPZYA');

/* DOM 5  */

let form = document.querySelector('form');
console.log("O form tem um action?", form.hasAttribute('action'));
/* document.querySelector('form').hasAttribute('action') */

/* DOM 6  */
let link = form.getAttribute('url');
form.setAttribute('action', link);
form.removeAttribute('url');

/* DOM 7  */
document.querySelector('h2').style.color = "red";

/* DOM 8  */
let icons = document.querySelectorAll(".icon");

for(let i = 0; i < icons.length; i++){
    /* let ic = icons[i]; */
    icons[i].style.color = "red";
}

/* Elementos 1  */

let novoBotao = document.createElement("a");
novoBotao.setAttribute("href","#work");
novoBotao.setAttribute("class","button big scrolly");
novoBotao.text = "Sumir";

let container = document.querySelectorAll("div");
container[3].appendChild(novoBotao);

novoBotao.onclick = function removerCoruja(){
    let coruja = document.querySelector("#lechuza");
    coruja.setAttribute("style","display: none");
}


let abra = document.querySelector("#abracadabra");
abra.onclick = function removerCoruja(){
    let coruja = document.querySelector("#lechuza");
    coruja.setAttribute("style","display: block");
}
 
/* Elementos 2  */
document.getElementById('top').textContent = "Topo";
document.getElementById('work').textContent = "Trabalho";
document.getElementById('portfolio').textContent = "Portfolio";
document.getElementById('contact').textContent = "Contato";

/* Elementos 3  */
/* alterou o primeiro bloco */
let box = document.getElementById('caja1');
box.innerHTML = `<a href="https://www.google.com/" class="image featured"><img src="images/pic01.jpg" alt="" /></a>
<h3><a href="#">Outro titulo</a></h3>
<p>Outro texto.</p>`;

/* Elementos 4  */
let acessaPai = document.querySelector('.social');
acessaPai.removeChild(acessaPai.childNodes[7]);
