
function esMultiploDe(valor, multiplo){
    var r = valor % multiplo;
    if(r == 0) 
        return true;
    else 
        return false;
}

//Declaro 3 arrays para almacenar los resultados
var multi3=[];
var multi5=[];
var multi3y5=[];

//Dentro de la siguiente función realizo las validaciones necesarias, las muestro en consola para conocer el número calculado y además las guardo en el array que corresponda para después mostrar en pantalla
function multiplo(){
    //Variable correspondiente al valor mínimo
    var vMin = 0;
    //For que recorre hasta el valor máximo (100)
    for(var i=1;i<=100;i++){
        var mul3 = esMultiploDe(i,3);
        var mul5 = esMultiploDe(i,5);
        //Primero verifico si el valor es múltiplo de 3 y 5
        if(mul3 && mul5){
          console.log(i, "cyberclick")
          multi3y5.push("cyberclick");
        }else{
            //Verifico si solo es múltiplo de 3
            if(mul3){
                console.log(i, " cyber")
                multi3.push("cyber");
            }else{
            //O si solo es múltiplo de 5
            if(mul5){
                console.log(i, " click")
                multi5.push("click");
                }else{
                    console.log(i, "No es múltiplo de ninguno")
                }
            }
        }
    }

    //Muestro los resultados en elementos del documento HTML
    document.getElementById('tresCinco').innerHTML = ("Múltiplos de 3 y 5 reemplazados: " + multi3y5);
    document.getElementById('tres').innerHTML = ("Múltiplos de 3 remplazados: " + multi3);
    document.getElementById('cinco').innerHTML = ("Múltiplos de 5 reemplazados " + multi5);

}

multiplo()
