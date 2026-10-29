// let radius = [10 , 20 , 30 , 40];

// // area , circumference , diameter

// function area(arr){
//     let output = [];

//     for(let i = 0 ; i < arr.length ; i++){
//         output.push(3.14 * arr[i] * arr[i]);
//     }

//     return output;
// }

// function circumference(arr){
//     let output = [];

//     for(let i = 0 ; i < arr.length ; i++){
//         output.push((2 * 3.14 * arr[i]).toFixed(2));
//     }

//     return output;
// }

// function diameter(arr){
//     let output = [];

//     for(let i = 0 ; i < arr.length ; i++){
//         output.push(2 * arr[i]);
//     }

//     return output;
// }

// console.log(radius);
// console.log(area(radius));
// console.log(circumference(radius));
// console.log(diameter(radius));


// let radius = [10 , 20 , 30 , 40];

// function area(rad){
//     return 3.14 * rad * rad;
// }

// function circumference(rad){
//     return (2 * 3.14 * rad).toFixed(2);
// }

// function diameter(rad){
//     return 2 * rad;
// }

// function calculate(arr , cb){
//     let output = [];

//     for(let i = 0 ; i < arr.length ; i++){
//         output.push(cb(arr[i]));
//     }

//     return output;
// }

// const areaOutput = calculate(radius , area);
// const circumferenceOutput = calculate(radius , circumference);
// const diameterOutput = calculate(radius , diameter);

// console.log(areaOutput);
// console.log(circumferenceOutput);
// console.log(diameterOutput);


// let radius = [10 , 20 , 30 , 40];

// const area = radius.map(function(rad){
//     return 3.14 * rad * rad;
// });

// function diameter(rad){
//     return 2 * rad;
// }

// const diameterOutput = radius.map(diameter);

// console.log(radius);
// console.log(area);
// console.log(diameterOutput);


// let arr = [10 , 21 , 30 , 45];

// function evenValues(nums){
//     let output = [];
//     for(let i = 0 ; i < nums.length ; i++){
//         if(nums[i] % 2 === 0){
//             output.push(nums[i]);
//         }
//     }

//     return output;
// }

// console.log(evenValues(arr));

// const evenValues = arr.filter(function(num){
//     return num % 2 === 0;
// });

// console.log(evenValues);


let arr = [10 , 21 , 30 , 45];

const sumOfArray = arr.reduce(function(accumulator , currentValue){
    return accumulator + currentValue;
} );

console.log(sumOfArray);

// function sumOfArray(nums){
//     let sum = 0; // accumulator

//     for(let i = 0 ; i < nums.length ; i++){
//         sum += nums[i];
//     }

//     return sum;
// }

// console.log(sumOfArray(arr));