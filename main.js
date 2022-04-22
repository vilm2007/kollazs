var termek1 = 10000
var termek2 = 1500
var termek3 = 2000


function kosarba(termek) {
    db=Number(prompt("Add meg hány darabot szeretnél"))
    localStorage.setItem(termek,db)
}

function torles(){
    localStorage.clear()
}

function kosar(){
    var lista = "<tr> <th> név: </th> <th> darab: </th> <th> ár: </th> </tr>"
    aru = localStorage.key
    darab = localStorage.getItem(localStorage.key(0))
    ar = localStorage.key(0)
    lista += "<tr> <th>" + aru + "</th> <th>" + darab + " </th> <th> " + ar + "FT </th> </tr>"

    document.getElementById('lista').innerHTML = lista
}
