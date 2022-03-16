import passwordsInput from "./input.js";
//Array vacio para luego almacenar los passwords formateados
let passwordsFormateados = [];

//Cada línea del array de passwords originales la convierto en objeto
passwordsInput.forEach((input) => {
  let objPassword = {};
  let formato = input.split(" ");
  let min = formato[0].split("-")[0];
  let max = formato[0].split("-")[1];
  let caracter = formato[1].charAt(0);
  let password = formato[2];

  //Asigno las propiedades anteriores al objeto
  Object.assign(objPassword, {min, max, caracter, password});
  //Lleno el array
  passwordsFormateados.push(objPassword);
});

let primeraParte = () => {
  let passwordsValidos = 0;
  //Busco según la política de passwords y sumo las que correspondan
  passwordsFormateados.forEach(({min, max, caracter, password}) => {
    let corresponden = password.split(new RegExp(caracter)).length - 1;
    if (corresponden >= min && corresponden <= max) passwordsValidos++;
  });
  document.getElementById('primeraParte').innerHTML = ("Contraseñas válidas: " +passwordsValidos);
};

let segundaParte = () => {
  let passwordsValidos2 = 0;
  function condicion(a, b) {
    return (a || b) && !(a && b);
  }
  //Busco según la nueva política de passwords y sumo las que correspondan
  passwordsFormateados.forEach(({ min, max, caracter, password }) => {
    let d = password[min - 1] == caracter;
    let h = password[max - 1] == caracter;
    if (condicion(d, h)) passwordsValidos2++;
  });
  document.getElementById('segundaParte').innerHTML = ("Contraseñas válidas: " +passwordsValidos2);
};

primeraParte();
segundaParte();
