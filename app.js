// constantes de precios
var cucurucho = 2000;
var palito = 1000;
var chup = 1000;
var cremoso = 1500; 

function calculos() {
    // cuanto llevó:
    var Lpalito = prompt("cuanto llevo palito?");
    var Lcrem = prompt("cuanto llevo cremoso?");
    var Lcucu = prompt("cuanto llevo cucurucho?");
    var Lchup = prompt("cuanto llevo chupachup?");

    // cuanto trajo:
    var Tpalito = prompt("cuanto trajo palito?");
    var Tcrem = prompt("cuanto trajo cremoso?");
    var Tcucu = prompt("cuanto trajo cucurucho?");
    var Tchup = prompt("cuanto trajo chupachup?");


    //calculos
    var TotalCucu = (Lcucu - Tcucu) * cucurucho;
    var TotalPalito = (Lpalito - Tpalito) * palito;
    var TotalChupachup = (Lchup - Tchup) * chup;
    var TotalCremoso = (Lcrem - Tcrem) * cremoso;
    var Total = TotalCucu + TotalPalito + TotalCremoso + TotalChupachup;
}

// function resultado() {
//     //impresiones
//     window.alert("LLEVO" + "    " + "TRAJO" + "     " + "TOTAL");
//     window.alert(Lpalito + "    " + Tpalito + "     " + TotalPalito);
//     window.alert(Lcrem + "    " + Tcrem + "     " + TotalCremoso);
//     window.alert(Lcucu + "    " + Tcucu + "     " + TotalCucu);
//     window.alert(Lchup + "    " + Tchup + "     " + TotalChupachup);
// }

document.getElementById("total").innerHTML = Total;