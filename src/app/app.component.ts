import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular2021';
  myStatus = 'my statuss';

  constructor() {
    //Devuelve un array con los elementos encontrados.
    const testMap = [1, 2, 3, 4, 5, 6].map((item) => item * 2);
    console.log(testMap);

    //Solo recorre el array pero no devuelve resultado.
    const testForeach = [1, 2, 3, 4, 5, 6].forEach((item) => item);
    console.log(testForeach);

    //Buwsca y devuelve el valor del elemento encontrado en una colecion o array.
    const testFind = [1, 2, 3, 4, 5, 6].find((item) => item === 4);
    console.log(testFind);

    //Devuelve un array.
    const testFilter = [1, 2, 3, 4, 5, 6].filter((item) => item % 2 === 0);
    console.log(testFilter);

    //Devuelve un array de los indices con los elementos encontrados, si alguno no se encuentra devuelve -1.
    const testFindIndex = [1, 2, 3, 4, 5, 6].findIndex((item) => item === 3000);
    console.log(testFindIndex);

    /*Es similar a la funcion FindIndex, pero la funcion indexOf funciona también para cadenas, ejemplo:
    
    const testIndexOf = "ricardo".indexOf('0');
    console.log(testIndexOf);
    */

    const testIndexOf = [1, 2, 3, 4, 5, 6].indexOf(2);
    console.log(testIndexOf);

    /*Une los elementos del array con un caracter*/
    const testJoin = [1, 2, 3, 4, 5, 6].join('-');
    console.log(testJoin);

    /*La funcion split separa una cadema a partir de un elemento encontrado y la convierte en un array*/
    const testSplit = '1,2,3,456'.split(',');
    console.log(testSplit);

    /*Hay dos formas para ejecutar la funcion splice, una en la declaracion de la variable y otra despues de ejecutada la variable*/
    const testSpliceA = [10, 20, 30, 40, 50, 60];

    const testSpliceB = [1, 2, 3, 4, 5, 6].splice(
      1,
      2
    ); /*1) Si ejecutamos la variable en la declaracion, nos traera
    el array de los elementos que seleccionamos en el splice */

    testSpliceA.splice(
      0,
      1
    ); /*2) Si ejecutamos el splice en la variable , nos cortara la cadena*/

    console.log(testSpliceB, testSpliceA);

    //Recibe cuantro parametros pero utilizamos dos, suma los valores que contiene el array
    const testReduce = [10, 20, 30, 40, 50, 60].reduce(
      (acc, value) => acc + value,
      100
    );
    console.log(testReduce);

    const testEntries = { value: 'ricardo', key: 'RFC' };
    console.log('aaa', Object.entries(testEntries));
    console.log('bbb', Object.keys(testEntries));
    console.log('ccc', Object.values(testEntries));

    //Las variables declaradas con "let" se definen dentro de un contexto, es decir dentro de una funcion y pueden cambiar de valor a lo largo del programa.
    //operador de propagación (...), se utiliza con frecuencia en angular.
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [
      9,
      10,
      11,
      ...array1,
    ]; /*Con los tres puntos ... concatemos los array*/
    console.log('Spread', array2);

    const per1 = { name: 'a', age: 12 };
    const per2 = { data: 'R', ...per1 }; /*Podemos unir json*/
    console.log('Spread', per2);

    /*Desestructuracion.
    nos permite extraer de un array o de un json los datos que necesitemos*/
    const per3 = {
      name: 'a',
      age: 12,
      phone: 1234545455,
      extra: 1223,
      response: 200,
      reponse2: 200,
      response4: 200,
    };

    const { phone: dni, name: nombre } = per3;
    console.log('name=', dni + ' ' + 'oi=', nombre);

    /*EJERCICIOS:
      
     1- {1:'a',2:'a,3:'a',4:'a',5:'a',6:'a'} convertir a array y sumar los numeros pares

     2- [1,2,3,4,5,6] filtrar los numeros impares y mosntrarlos como cadena
      
    */

    const ejercicio1 = { 1: 'a', 2: 'a', 3: 'a', 4: 'a', 5: 'a', 6: 'a' };
    Object.keys(ejercicio1);
    console.log('aaa', Object.keys(ejercicio1));
  }

  printDataRicardoComp(event: any) {
    console.log('RICARDO COMP', event);
  }

  printData(event:any) {
    console.log('CHILD COMP SEND DATA: ', event);
  }
}
