// // let a = 10;

// // function print(num){
// //     console.log(num);
// //     return num;
// // }

// // print(a);

// const add = (a , b) =>  {
//     return a + b;
// }

// function substract(num1 , num2){
//     return num1 - num2;
// }

// function multiply(num1 , num2){
//     return num1 * num2;
// }    

// function opetaion(cb1 , cb2){
//     const sub = cb1(100 , 10);
//     const mul = cb2(10 , 10);
//     console.log(sub , mul);

//     const name = "harsh";

//     return function(a , b){
//         console.log(a , b);
//         console.log(name);
//     }
// }

// console.log(substract(10 , 5));
// const val = opetaion(substract , multiply);

// val(10 , 20);

let count = 0; // undefined

function increment(count){ // 0
    count++;
    console.log(count);
}

increment(count);
console.log(count);