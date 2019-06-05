


let vowels = ["a", "e", "i", "o", "u"];

// RECORRIENDO
for (let i=0; i < vowels.length; i++){
console.log(vowels[i]);
}


// INVERSO

for (let i=vowels.length; i>= 0; i--){
    console.log(vowels[i]);
}
 




// EJERCICIOS DE ARREGLOS 

//PAIR FOR SUM
// buscar numeros que sumados den un tercero 
function findPairForSum(array, number) {
    for (let i = 0; i < array.length; i++) {
      for ( let j = i + 1; j < array.length; j++) {
       if (array[i] + array[j] == number) {
         newArray = [array[i], array[j]];
       }
        
      }
    }
    return newArray;
  }
  // ejemplo
  let pair = findPairForSum([1, 2, 3, 4, 5, 6], 11);
  console.log(pair); 
  // funciona solo en consola odio esta cosa









  // TOTAL BILL 
// devuelve la cantidad total debida después de impuestos y propina -wtf son los pre impuestos

function calculateBillTotal(preTaxAndTipAmount) {

    let taxes = preTaxAndTipAmount * 0.095; //(9.5)
    let tip = preTaxAndTipAmount * 0.15; //(15%)
    let total = preTaxAndTipAmount + taxes + tip;
    return total;
  }

  
//    ejemplo
  let totalBill = calculateBillTotal(14.990);
  console.log(totalBill); 
//   solo funciona en consola







// AVERAGE
// sumar dos length, y dividirlos por 2 para sacar promedio 
  function computeAverageLengthOfWords(first, second) {
    let string1 = first.length;
    let string2 = second.length;
    let suma = (string1+string2) /2 ;
    
    return suma;
  }
//   ejemplo
let average = computeAverageLengthOfWords("cocodrilo", "cocoa");
  console.log(average); 

//   funciona en consola (debería dar 7) 






// ODDS
// rescatar solo los impares de un array

function filterOddElements(arr) {
    let odds = [];
    
    for ( let i = 0; i < arr.length; i++ ) {
      if ( arr[i] % 2 !== 0 ) {
        odds.push(arr[i]);
      }
    }
    return odds;
  }
  
//  ejemplo
  let oddsArray = filterOddElements([1, 2, 3, 4, 5, 6, 7]);
  console.log(oddsArray);
//   solo funciona en consola auxilio


// otra forma pero sin función para el mismo ejemplo con un bucle 
let number = 1;
while (number < 7) {
  console.log(number);
  number = number + 2;
}


// FIZZBUZZ


// array modo largo y feo
let hundred = [];
for (let i=0; i<=100; i++){
  hundred.push([i]);
}
console.log(hundred);

// respuesta elegante
for (let i=1; i<=100; i++){
if (i % 15 == 0)
console.log("FizzBuzz");
else if (i % 5 == 0)
console.log("Buzz");
else if (i % 3 == 0)
console.log("Fizz");
else console.log(i); 
}
 

 
// AJEDREZ
let size = 8;
let ajedrez = ""; 
for (let row=1; row<= size; row++){
  for (let col=1; col<=size ; col++){
if ((col + row) % 2 == 0)
ajedrez += (" ");
else ajedrez += ("#"); 
  }
  ajedrez += "\n"; // enter
}


// MULTIPLY

function multiply (num1, num2) {
  let coco= parseInt(num1);
  let drilo = parseInt(num2);
  mult = coco * drilo; 
    return mult;
}
    let result = multiply("2", "5");
    console.log(result); 


    // ADD

    function add (num1, num2) {
      let coco= parseInt(num1);
      let drilo = parseInt(num2);
      sum = coco + drilo; 
        return sum;
    }
        let result = add("2", "5");
        console.log(result); 


// ADD + MULT
  
function addMult(cocoa, chanel, uh){
  let coc = parseInt(cocoa);
  let chan = parseInt(chanel);
  let final = coc * (chan + uh);

return final;
}

let finalAddMult = addMult(36325, 9824, 777);
console.log(finalAddMult);







