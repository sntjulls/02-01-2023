// 02.01.2023
// alert(123)
// window.alert(456)

/*console.log(123)
console.log(12.3)
console.log('te"xt')
console.log(true)
console.log('true')
console.log(null)
console.log(undefined)

починається з букви, $ або _
не використовувати пробіл
регістрозалежне
відповідає на питання, що в ній
*/

// домашня робота:
// let userAge = 23;
// let isUserAdult = true;
// const userEmail = 'user@gmail.com';
// const programmingLanguage = 'C++';
// let havePet = false;
// const AMOUNT_SEASONS_OF_YEAR = 4;

// // урок:
// let userName = 'Brad';
// console.log(userName);

// // let userAge; //оголошення
// console.log(typeof userAge);
// userAge = 59n; //ініціалізація
// console.log(typeof userAge);

// const userYearOfBirth = 1963;

// // console.log(userName);
// // console.log(userAge);
// console.log('user age:'. userAge)

// userAge = 60;
// userName = "Bradly";

// const isUserMale = true;
// // const userGender = 'male';
// // userGender = 'female'; //error

// const AMOUNT_DAYS_WEEK = 7;

// let number = 12;

// {

//     let number =  89;
//     console.log(number);
// }

// console.log(number);

// 03.01.2023

// let number = 30;
// let number2 = 15;
// number = number - 8;
// console.log(number);
// number = number * 3;
// console.log(number);
// number2 = number2 % 2;
// console.log(number2);
// number2 = number2 + 15;
// console.log(number2);
// number = number / 2;
// console.log(number);
// let result = number + number2;
// console.log(result);

// let number = 27;
// if (number < 0) {
//   console.log("negative");
// } else {
//   console.log("positive");
// }

// let number3 = -27;
// if (number3 > 0) {
//   console.log("positive");
// } else if (number3 === 0) {
//   console.log("zero");
// } else if (number3 < 0) {
//   console.log("negative");
// }

// let number = 1;

// if (number%2 === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// if (number > 7 && number % 3 === 0) {
//   console.log("win");
// } else {
//   console.log("lose");
// }

// if (number<=7 || number%3) {
//     console.log("lose");
//   } else {
//     console.log("win");
//   }

// let number = 5;

// if (number % 2 === 0 && number > 0) {
//   number += 5;
// } else if (number % 2 && number > 0) {
//   number *= 2;
// } else if (number % 2 === 0 && number < 0) {
//   number = -number;
// }
//   console.log(number);

// if (number1, number 2% 2 == 0)

// let number1 = -1;
// let number2 = 3;
// if (number1 === number2) {
//   console.log(number1 * number2);

// if (number1 > 0 & number2 > 0 || number1 < 0 & number2 < 0){

// number1 * number2;

//   console.log(number1 * number2);
//   }
// else if (number1 > number2 || number1 < number2) {
//   console.log(number1 / number2);
// } else if (number1 === 0 || number2 === 0) {
//   console.log("true");
// } else if (number1 === 0 && number2 === 0) {
//   console.log("NaN");
// }

// else if (number1 === 0 && number2 === 0) {
//     console.log('NaN');
// }

// let number1 = 0;
// let number2 = 0;
// let result;
// if (number1 > 0 && number2 > 0 || number1 < 0 && number2 < 0) {
//   result = number1 * number2;
// }
// else if (number1 > 0 && number2 < 0 || number1 < 0 && number2 > 0) {
//   result = number1 / number2;
// } else if (number1 === 0 || number2 === 0) {
//   result = number1 || number2;
// } else if (number1 === 0 && number2 === 0) {
//   result = NaN;
// }
// console.log(result);

// дз 2 04.01.23
// let number3 = 17;
// if (!(number3 >= 0 && number3 % 2 === 0 && number3 % 3 === 0 && number3 % 6 === 0)
// ) {
//   console.log("lose");
// } else {
//   console.log("win");
// }

// 06.01.23
// const userInput = prompt("Enter");
// if (userInput === "" || userInput === null || Number.isNaN(Number(userInput))) {
//   console.log("Error");
// } else {
//   console.log(userInput, Number(userInput));
// }

// function logSumTwoUserInputNumbers() {
//   const userInput1 = prompt("Enter number: ");
//   const userInput2 = prompt("Enter number: ");

//  const checkUserInput1 = userInput1 === "" || userInput1 === null || Number.isNaN(Number(userInput1));

//   const checkUserInput2 =  userInput2 === "" || userInput2 === null || Number.isNaN(Number(userInput2));

//   if (
//     userInput1 === "" ||
//     userInput1 === null ||
//     Number.isNaN(Number(userInput1)) ||
//     userInput2 === "" ||
//     userInput2 === null ||
//     Number.isNaN(Number(userInput2))
//   ) {
//     console.log("error, value must be number!");
//   }
// }

/**
 *
 *
 */

// function logSumTwoUserInputNumbers() {
//   const userInput1 = prompt("Enter number: ", 6);
//   const userInput2 = prompt("Enter number: ", 3);

//   const checkUserInput1 =
//     userInput1 === "" ||
//     userInput1 === null ||
//     Number.isNaN(Number(userInput1));
//   const checkUserInput2 =
//     userInput2 === "" ||
//     userInput2 === null ||
//     Number.isNaN(Number(userInput1));

//   if (checkNumber(userInput1) === false || checkNumber(userInput2) === false) {
//     console.log("error! value must be a number!");
//   } else {
//     console.log(getSumTwoNumbers(Number(userInput1), Number(userInput2)));
//   }

//   else {
//     const summa = Number(userInput1) + Number(userInput2);
//     console.log(summa);
//   }
// }
// /**
//  * get summa two number
//  * @param {number} number1
//  * @param {number} number2
//  * @returns {number}
//  */
// function getSumTwoNumbers(number1, number2) {
//   //   const summa = Number(number1) + Number(number2);
//   //   return summa;

//   // функція повертмає суму двох чисел:
//   return number1 + number2;
// }
// /**
//  *
//  * @param {any} value
//  * @returns {boolean}
//  */
// function checkNumber(value) {
//   const checkValue =
//     userInput1 === "" ||
//     userInput1 === null ||
//     Number.isNaN(Number(userInput1));
//   return !checkValue;
// }

// console.log(getSumTwoNumbers(Number(userInput1), Number(userInput2)));

// практична 1 06.01
// /**
//  *
//  * @param {any} value1
//  * @param {any} value2
//  * @returns {any | null}
//  */
// function getMaxValue(value1, value2) {
//   if (typeof value1 === typeof value2) {
//     if (value1 > value2) {
//       return value1;
//     }
//     return value2;
//   }
//   return null;
// }
// console.log(getMaxValue("s", 5));
// console.log(getMaxValue(40, 5));

// практична 2 06.01 Напишіть функцію, яка приймає число, і визначає чи парне воно (повертає булевий тип). isEven

// домашнє завдання 06.01
/**
 *
 * @param {number} number
 * @returns {boolean}
 */
function isEven(number) {
  return number % 2 == 0;
}
console.log(isEven(7));
console.log(isEven(22));


// function isEven(number) {
//   if (number % 2 == 0) {
//     return true;
//   }
//   else {
//     return number;
//   }
// }
// console.log(isEven(7));
// console.log(isEven(5));

// function  func(){
//     return true;
//   }
//   isBool = func();
//   console.log(typeof (isBool));

//   let isBool = func();
//   console.log(typeof (isBool));

//   console.log(func(6));

// console.log(isEven(5));
// console.log(isEven(8));

//   if (checkNumber(userInput1) === false || checkNumber(userInput2) === false) {
//     console.log("error! value must be a number!");
//   } else {
//     console.log(getSumTwoNumbers(Number(userInput1), Number(userInput2)));
//   }

//   else {
//     const summa = Number(userInput1) + Number(userInput2);
//     console.log(summa);
//   }
