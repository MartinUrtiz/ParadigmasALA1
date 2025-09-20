
// 1. Importar readline
const readline = require("readline");

// 2. Crear interfaz de lectura/escritura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 3. Función auxiliar para pedir datos
function input(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
    

let num1 = parseFloat(await input("Ingrese el primer numero: "));
let operador = await input("Ingrese el operador (+ , - , * , /): ") ;
let num2 = parseFloat(await input("Ingrese el segundo numero: "));

let resultado;


if(operador === "+"){
    resultado = num1 + num2;
} else if(operador === "-"){
    resultado = num1 - num2;
}else if(operador === "*"){
    resultado = num1 * num2;
} else if(operador === "/"){
    if(num2 !== 0){
    resultado = num1 / num2;
    } else{
        resultado = "No se puede dividir por 0";
    }
}else{
    resultado = "Operador no valido"
};

console.log("El resultado es: ", resultado);
rl.close();
}

main()
