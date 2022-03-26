function subirTela () {
    window.scrollTo ({
       top: 0,
  	   left: 0,
	   behavisor: 'smooth',
	});
}

function tirarButtonScroll() {
    if (window.scrollY === 0) {
        document.querySelector ('.scrollbutton').style.display = 'none';
    } else {
        document.querySelector ('.scrollbutton').style.display = 'flex';
    }
   
}
setInterval (tirarButtonScroll, 1000) 

function abrirConteudo1() {
    document.querySelector('.configpc').removeAttribute(display = 'none');
}

function Mudarestado() {
    var display = document.getElementById('minhaDiv').style.display;

    if(display == "none")
        document.getElementById('minhaDiv').style.display = 'block';
    else
        document.getElementById('minhaDiv').style.display = 'none';
}

function Mudarestado2() {
    var display = document.getElementById('minhaDiv2').style.display;

    if(display == "none")
        document.getElementById('minhaDiv2').style.display = 'block';
    else
        document.getElementById('minhaDiv2').style.display = 'none';
}

  