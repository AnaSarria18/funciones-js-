/* ejercicio 1 */
/* Escribe una función que tome dos números como parámetros y devuelva
su suma. */

function suma (num1, num2){
    return num1 + num2
}
console.log(suma(15,12));

/* ------------------------------------------------------------------------------------------------------ */

/* ejercicio 2 */
/* Escribe una función que determine si un número dado es primo. */

function Nprimo(numero){

    for (let w =2; w < numero; w++){
        if (numero % w ===0) {
            return console.log(`el numero ${numero} no es primo`);
        } else{
            return console.log(`el numero ${numero} ingresado es primo`);
        }
    }
}

Nprimo();
const resultado = Nprimo(8)

/* ----------------------------------------------------------------------------------------------- */


/* ejercicio 3 */
/* Escribe una función que calcule el promedio de números dados. */

/* num1 + num2 / 2 */
function promedio (num1, num2){
    return (num1 + num2) / 2;
}
console.log(promedio(6,10));

/* ------------------------------------------------------------------------------------------ */
/* ejercicio 4 */
/* Escribe una función que imprima todos los números pares hasta un límite
dado */

function Npares(){
    let inicio = 0;
    let par = [];
    do{
        if(inicio % 2 === 0){
        console.log(inicio)
        }
       
        inicio++;
    } while(inicio <= 60);
        return par;
}

Npares();
const numerosprimos = Npares 

/* --------------------------------------------------------------------------------------------- */

/* ejercicio 5 */
/* Escribe una función que imprima la tabla de multiplicar de un número
dado. */

function multiplicar () {
    let num1 = prompt("ingresa un numero");
       let multiplicacion = [];
       for (let r = 1; r <=10; r++){
    
           console.log(`${num1} x ${r} = ${num1 * r}`);
            
     } return multiplicacion;
            
     } 
     multiplicar();
     const tabla = multiplicar
    
/* -------------------------------------------------------------------------------------------------------- */
     /* ejercicio 6 */
     function numeroMayor(a, b, c) {
        if (a === b && a === c) {
          return "Son Iguales";
        } else {
          return Math.max(a, b, c);
        }
      }
      
      console.log(numeroMayor(30, 45, 10));
      

/* ------------------------------------------------------------------------------------------------------------- */
      /* ejercicio 7 */
      /* Crea una función llamada generar_caracteres() que tome como
      parámetro un número entero (n) y un carácter, retornar el carácter
      multiplicado por n. Por ejemplo, generar_caracteres(5,x), debería retornar
      «xxxxx». */

      function generarcaracter(n, caracter){
        return caracter.repeat (n);
    }
    
    console.log(generarcaracter(20, 'm'));

/* --------------------------------------------------------------------------------------------------------- */
    /* ejercicio 8 */
    /* Sumar los números del 1 al 10 utilizando un bucle. */

    function sumanumeros(){
        let suma = 0;
        for (let i = 1; i <= 10; i++){
            suma += i;
        }
        return suma;
    }
    
    console.log(sumanumeros());

/* ----------------------------------------------------------------------------------------------------------- */
    /* ejercicio 9 */
    /* Pedir al usuario que ingrese un número mayor que 100 utilizando un
    bucle. */

    function solicitarnum() {
        let numero;
        do {
            numero = prompt("Ingrese un número mayor que 100:");
            numero = Number(numero);
        } while (numero <= 100 || isNaN(numero));
        alert("Número correcto: " + numero);
    }
    
    solicitarnum();
    

/* ---------------------------------------------------------------------------------------------------------- */
    /* ejercicio 10 */
    /* Generar un número aleatorio entre 1 y 10 hasta que se obtenga un 7. */

    function obtenersiete() {
        let numero;
        while (numero !== 7) {
            numero = Math.floor(Math.random() * 10) + 1;
            console.log(numero); 
        }
    }
    
    obtenersiete();
    
/* --------------------------------------------------------------------------------------------------------- */
    /* ejercicio 11 */
    /* Imprimir los números pares del 0 al 20. */
    
    function imprimirpares() {
    for (let i = 0; i <= 20; i += 2) {
        console.log(i);
    }
}

imprimirpares();

/* -------------------------------------------------------------------------------------------------------------- */
    /* ejercicio 12 */
    /* Pedir al usuario que ingrese un número entre 1 y 5. */

    function pedirnumero() {
        let numero;
        do {
            numero = prompt("ingrese un número entre 1 y 5:");
            numero = parseInt(numero, 10);  
        } while (numero < 1 || numero > 5 || isNaN(numero)); 
    
        alert("Número ingresado correcto: " + numero);
    }
    
    pedirnumero();

/* ------------------------------------------------------------------------------------------------------------- */
   /*  ejercicio 13 */
   /* Imprimir los primeros 10 números de la serie de Fibonacci. */

   function imprimirfibonacci() {
    let a = 0, b = 1, c;
    console.log(a); 
    console.log(b); 
    for (let i = 2; i < 10; i++) {
        c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}

imprimirfibonacci();

/* ----------------------------------------------------------------------------------------------------------- */
/* ejercicio 14 */
/* Pedir al usuario que ingrese una contraseña y repetir la solicitud hasta
que ingrese una contraseña válida (por ejemplo, "contraseña123").
 */

function validarcontrasena() {
    let contrasena;
    while (contrasena !== "contraseña123") {
        contrasena = prompt("Ingrese su contraseña:");
    }
    alert("Contraseña correcta!");
}

validarcontrasena();


/* ------------------------------------------------------------------------------------------------------------ */
   /*  ejercicio 15 */
   /* Imprimir los primeros 5 números primos. */
/* 
   function imprimirP(n) {
    for (let num = 2, count = 0; count < n; num++) {
      for (let i = 2, s = Math.sqrt(num); i <= s && num % i === 0;) i += 2;
      if (i > s) console.log(num), count++;
    }
  }
  
  imprimirP(5); // Imprime: 2 3 5 7 11 */

/* -------------------------------------------------------------------------------------------------------------- */
  /* ejercicio 16  */
/*   Pedir al usuario que ingrese un número positivo utilizando un bucle do-
while y mostrar un mensaje de error si no lo hace. */

function pedirnumeropositivo() {
    let numero;
    do {
      numero = prompt("Ingrese un número positivo:");
    } while (isNaN(numero) || numero <= 0);
    return numero;
  }
  
  const numeroIngresado = pedirnumeropositivo();
  console.log("Número ingresado:", numeroIngresado);

/* ------------------------------------------------------------------------------------------------------------- */
  /* ejercicio 17 */
  /* Imprimir los números del 10 al 1 */

  function imprimirnumerosatras(inicio, fin) {
    for (let i = inicio; i >= fin; i--) console.log(i);
  }
  
  imprimirnumerosatras(10, 1); 

/* ------------------------------------------------------------------------------------------------------------ */
   /* ejercicio 18 */ 
  /*  Calcular el factorial de un número dado. 
 */
  /* function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }

  factorial();
 
 */

/* ------------------------------------------------------------------------------------------------------------ */
  /* ejercicio 19 */
 /*  este ejercicicio esta repetido ya esta hecho en el punto 15 */


/*  ------------------------------------------------------------------------------------------------------------- */
  /* ejercicio 20 */
 /*  Imprimir la secuencia de números del 1 al 100, pero para múltiplos de 3
imprimir "Fizz", para múltiplos de 5 imprimir "Buzz" y para múltiplos de
ambos 3 y 5 imprimir "FizzBuzz“. */

function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
      const resultado = i % 3 === 0 ? "Fizz" : i % 5 === 0 ? "buzz" : i;
      console.log(resultado);
    }
  }
  
  fizzbuzz(); 


/* ----------------------------------------------------------------------------------------------------------- */
 /*  ejercicio 21 */
 /* este ejercicio ya esta resuelto en el punto 17 */

/* 
 ------------------------------------------------------------------------------------------------------------ */
  /* ejercicio 22 */
 /*  este ejercicio ya esta resuelto en el punto 13 */