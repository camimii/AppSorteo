function sortea(){
    var participantes = document.getElementById("nombres").value.split("\n");
    
    var ganador = participantes[Math.floor(Math.random() * participantes.length)];
    
    var tex_ga = document.getElementById("gana");
    var cnt_ga = document.getElementById("ganador");
    var cnt_imag = document.getElementById("imag");

    tex_ga.innerHTML = "¡Ganaste!";
    cnt_ga.innerHTML = '<kbd class="texto2 badge-default">'+`${ganador}`+'</kbd>';
    cnt_imag.innerHTML ='<img src="img/poncheleros.jpg" width="250" height="125"></img>';

}
