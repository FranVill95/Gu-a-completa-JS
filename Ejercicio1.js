// Leer un número entero y determinar si tiene 3 dígitos.

  let digitos = 2
     numero = String(digitos)
     numero_final = parseInt(numero.length)
     if(numero_final == 3){
        console.log("El numero ingresado tiene 3 digitos" )
     }else{
        console.log("El numero ingresado no tiene 3 digitos")
     }

/*En un cierto país el impuesto que se debe pagar por artículos
 importados se calcula mediante las siguientes reglas:*/

 let precio = 5
 if (precio >= 20.01 && precio <= 40.00){
    precio_final = precio + (precio*0.30)
    console.log("El total a pagar con impuesto es: " + precio_final)
 }else if (precio >= 40.01 && precio <= 500.00){
    precio_final = precio + (precio*0.40)
    console.log("El total a pagar con impuesto es: " + precio_final)
 }else if (precio >= 500.01){
    precio_final = precio + (precio*0.50)
    console.log("El total a pagar con impuesto es: " + precio_final)
 }else {
    console.log("Su gasto total no genera impuesto")
 }

 /*El costo de las llamadas telefónicas internacionales depende de la zona geográfica en la que se encuentre 
el país destino y del número de minutos hablados. En la siguiente tabla se presenta el costo del minuto por zona. 
A cada zona se le ha asociado una clave*/
// Para llamadas con duración menor a 30 minutos se hace descuento del 10%.

function costo_llamada(clave , tiempo){
   if (clave == 12) {
       precio = 2.00
       total_llamada = tiempo * precio
       precio_total = total_llamada - (total_llamada*0.10)
       console.log("El total de su llamada a América del Norte es: " + precio_total + " dólares")
   }else if (clave == 15) {
       precio = 2.20
       total_llamada = tiempo * precio
       precio_total = total_llamada - (total_llamada*0.10)
       console.log("El total de su llamada a América Central es: " + precio_total + " dólares") 
   }else if (clave == 18) {
       precio = 4.50
       total_llamada = tiempo * precio
       precio_total = total_llamada - (total_llamada*0.10)
       console.log("El total de su llamada a América del Sur es: " + precio_total + " dólares") 
   }else if (clave == 19) {
       precio = 3.50
       total_llamada = tiempo * precio
       precio_total = total_llamada - (total_llamada*0.10)
       console.log("El total de su llamada a Europa es: " + precio_total + " dólares") 
   }else if (clave == 23) {
       precio = 6.00
       total_llamada = tiempo * precio
       precio_total = total_llamada - (total_llamada*0.10)
       console.log("El total de su llamada a Asia es: " + precio_total + " dólares") 
   }else if (clave == 25) {
       precio = 6.00
       total_llamada = tiempo * precio
       precio_total = total_llamada - (total_llamada*0.10)
       console.log("El total de su llamada a África es: " + precio_total + " dólares") 
   }else if (clave == 29) {
       precio = 5.00
       total_llamada = tiempo * precio
       precio_total = total_llamada - (total_llamada*0.10)
       console.log("El total de su llamada a Oceanía es: " + precio_total + " dólares") 
   }else {
       precio = 2.00
       precio_total = tiempo * precio
       console.log("Su llamada no aplica a descuentos y fue un total de: " + precio_total + " dólares")
   }
}

costo_llamada(2, 10)

// Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado por el usuario.
let numero = 8   
switch (numero){
case 1 :
for(let i = 1 ; i <= 10 ; i++){
console.log(numero + " x " + i + " = " + (numero * i) );
}
break
case 2 :
    for(let i = 1 ; i <= 10 ; i++){
    console.log(numero + " x " + i + " = " + (numero * i) );
    }  
break
case 3 :
for(let i = 1 ; i <= 10 ; i++){
    console.log(numero + " x " + i + " = " + (numero * i) );
} 
break
case 4 :
    for(let i = 1 ; i <= 10 ; i++){
    console.log(numero + " x " + i + " = " + (numero * i) );
    } 
    break
    case 5:
    for(let i = 1 ; i <= 10 ; i++){
    console.log(numero + " x " + i + " = " + (numero * i) );
    }  
    break 
    case 6 :
    for(let i = 1 ; i <= 10 ; i++){
    console.log(numero + " x " + i + " = " + (numero * i) );
} 
    break
    case 7 :
    for(let i = 1 ; i <= 10 ; i++){
    console.log(numero + " x " + i + " = " + (numero * i) );
    } 
    break
    case 8 :
    for(let i = 1 ; i <= 10 ; i++){
    console.log(numero + " x " + i + " = " + (numero * i) );
    } 
    break
    case 9 :
    for(let i = 1 ; i <= 10 ; i++){
    console.log(numero + " x " + i + " = " + (numero * i) );
    }
    break
    case 10 :
    for(let i = 1 ; i <= 10 ; i++){
    console.log(numero + " x " + i + " = " + (numero * i) );
    }   
}

// Elaborar un algoritmo para leer la edad de 10 personas y mostrar cuantos son mayores de edad.

const array = [ 15,11,37,22,83,65,41,36,18]
let contador = 0;
array.forEach(value => {
    if (value>= 18){
        contador++;
        
    }
    
});
console.log(contador);

// 6.	Elaborar un algoritmo para leer las notas de 1 estudiantes.
/*Calcular el promedio de cada estudiante de la siguiente manera:
Nota 1 (20%)
Nota 2 (30%)
Nota 3 (50%)*/


function notas(a , b , c) {
  

   nota_final1 = a * 0.20;
   nota_final2 = b  * 0.30;
   nota_final3 = c * 0.50;
   total = nota_final1 + nota_final2 + nota_final3 ;
 
   console.log( "su promedio de notas es "  + total)
 }
 notas(8 , 5 , 9);

 // Elaborar un algoritmo para leer la nota de diez estudiantes y mostrar cantidad de aprobados y reprobados.

//const array = [ 1,3,4,4,9,2,2,9,5,10]
//let contador = 0;
let contador2 = 0;
array.forEach(value => {
    if (value>= 5){
        contador++;
        
    }else if(value < 5){
     contador2++;
    }
})

console.log( "alumnos aprobados = " + contador);
console.log("alumnos reprobados = " + contador2);

// Elabore un algoritmo con un menú simple con las cuatro operaciones básicas: sumar, restar, multiplicar, dividir.

function aritmetica( a , b){
   sumar = a + b ;
   restar = a - b;
   multiplicar = a * b ;
   dividir = a / b ;

   console.log(" el resultado de la sume es = " + sumar);
   console.log("el resultado de la resta es " + restar);
   console.log("el resultado de la multiplicación es " + multiplicar);
   console.log ("el resultado de la division es " + dividir)
  }
  aritmetica(4 , 2)

