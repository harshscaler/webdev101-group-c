// var a = 10;
// var b = 20;

// function addNumbers(num1 , num2){
//     var addition = num1 + num2;

//     return addition;
// }

// var sum = addNumbers(a , b);
// var sum2 = addNumbers(100 , 200);
// console.log(a , b);
// console.log(sum);
// console.log(sum2);



// console.log(a , b); // undefined undefined

let a = 10;
const b = 20;

console.log(addNumbers(a , b)); // ReferenceError: Cannot access 'sum' before initialization

const addNumber = (num1 , num2) => {
    var addition = num1 + num2;

    return addition;
}

var sum = addNumbers(a , b);