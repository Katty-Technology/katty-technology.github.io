
    function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');

    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
        if(textoArray.length == i+1){
            const titulo = document.querySelector('.titulo-principal');
       
        }
    }, 100 * i)

  
  });
}
document.getElementById("year").innerHTML = new Date().getFullYear();
const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);