function inserir_dados (){
    let nomes = document.getElementById("nomes").value;
    let notas = document.getElementById("notas").value;
    let tr = document.createElement("tr");


    tr.innerHTML = "<td>" + nomes + "</td><td>" + notas + "</td>";

    tabela.appendChild(tr);
    

    

    

}