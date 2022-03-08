var lista=[];

function submit(){
    
    var enlistado1=document.getElementById("elemento1").value;
    var enlistado2=document.getElementById("elemento2").value;
    var enlistado3=document.getElementById("elemento3").value;
    var enlistado4=document.getElementById("elemento4").value;

    lista.push(enlistado1);
    lista.push(enlistado2);
    lista.push(enlistado3);
    lista.push(enlistado4);

    console.log (lista);

  
    document.getElementById("resultado").innerHTML=lista;
}