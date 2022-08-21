

//gastos

function calcularGastos() {

const imputLuz= document.getElementById("inputLuz");
const imputLuz_value = imputLuz.value;

const inputAgua= document.getElementById("inputAgua");
const inputAgua_value = inputAgua.value;

const inputGas= document.getElementById("inputGas");
const inputGas_value = inputGas.value;

const inputInternet= document.getElementById("inputInternet");
const inputInternet_value = inputInternet.value;

const inputTv= document.getElementById("inputTv");
const inputTv_value = inputTv.value;

const inputImpuestos= document.getElementById("inputImpuestos");
const inputImpuestos_value =inputImpuestos.value;

const inputAlquiler= document.getElementById("inputAlquiler");
const inputAlquiler_value =inputAlquiler.value;

const inputTarjetas= document.getElementById("inputTarjetas");
const inputTarjetas_value =inputTarjetas.value;

const inputEstudios= document.getElementById("inputEstudios");
const inputEstudios_value =inputEstudios.value;

const inputDeportes= document.getElementById("inputDeportes");
const inputDeportes_value =inputDeportes.value;

const inputTelefono= document.getElementById("inputTelefono");
const inputTelefono_value =inputTelefono.value;

const inputOtros= document.getElementById("inputOtros");
const inputOtros_value =inputOtros.value;

const respuesta= document.getElementById("respuesta");
const respuesta_value =respuesta.value;

const inputMonth= document.getElementById("inputMonth");
const inputMonth_value =inputMonth.value;

//suma de gastos

  const gastos =
    parseInt(imputLuz.value) +
    parseInt(inputAgua.value) +
    parseInt(inputGas.value) +
    parseInt(inputInternet.value) +
    parseInt(inputTv.value) +
    parseInt(inputImpuestos.value) +
    parseInt(inputAlquiler.value) +
    parseInt(inputTarjetas.value)+
    parseInt(inputEstudios.value)+
    parseInt(inputDeportes.value)+
    parseInt(inputTelefono.value)+
    parseInt(inputOtros.value);

  return gastos;

}
//function onclick




//ingreso y saldo
const inputIngresos = document.getElementById("inputIngresos");
const inputIngresos_value = inputIngresos.value;

const ingresosT = document.getElementById("ingresosT");
const ingresosT_value = ingresosT.value;

const saldoT = document.getElementById("saldoT");
const saldoT_value =saldoT.value;



const endeudamientoT = document.getElementById("endeudamientoT");
const endeudamientoT_value = endeudamientoT.value;

function onClickButtonCalcular(){
  const gastosTotales=calcularGastos();
  
const saldos=inputIngresos.value-gastosTotales;
const capacidad_endeudamiento = (inputIngresos.value-gastosTotales) * 0.4;
  respuesta.innerHTML="La suma de sus gastos en el mes de  " +inputMonth.value + " es $" +
  gastosTotales;
  ingresosT.innerHTML="Sus ingresos son $ "+inputIngresos.value;
  saldoT.innerHTML=" Le quedan $ " + saldos + " para gastar";
  endeudamientoT.innerHTML =  "Su capacidad de endeudamiento es de: $" + capacidad_endeudamiento + "  por mes (se toma en referencia  40% del total de sus ingresos - sus deudas)";
  }








/* ingresar los gastos de la persona
const serviciosBasicos = document.getElementById("serviciosBasicos");
const serviciosBasicos_value = serviciosBasicos.value;

const alquiler = document.getElementById("alquiler");
const alquiler_value = alquiler.value;

const alimentacion = document.getElementById("alimentacion");
const alimentacion_value = alimentacion.value;

const transporte = document.getElementById("transporte");
const transporte_value = transporte.value;

const deudasPrevias = document.getElementById("deudasPrevias");
const deudasPrevias_value = deudasPrevias.value;

const entretenimiento = document.getElementById("entretenimiento");
const entretenimiento_value = entretenimiento.value;

const vacaciones = document.getElementById("vacaciones");
const vacaciones_value = vacaciones.value;

const varios = document.getElementById("varios");
const varios_value = varios.value;

function calcularGastos() {
  const gastos =
    parseInt(serviciosBasicos.value) +
    parseInt(alquiler.value) +
    parseInt(alimentacion.value) +
    parseInt(transporte.value) +
    parseInt(deudasPrevias.value) +
    parseInt(entretenimiento.value) +
    parseInt(vacaciones.value) +
    parseInt(varios.value);
  return gastos;
}

 La capacidad de endeudamiento esta recomendada 
entre el 35% y 40% de ingresos menos los gastos 
de una persona, con esta cifra se puede calcular: 
el monto del prestamo y el tiempo necesario para terminar
de pagarlo
function capacidadEndeudamiento() {
  const ingresos_value = ingresos.value;
  const gastos = calcularGastos();
  const capacidad_endeudamiento = (ingresos_value - gastos) * 0.4;
  document.getElementById("capacidadEndeudamiento").innerHTML =
    "Su capacidad de deuda es de: " + capacidad_endeudamiento + " $ por mes";
}*/