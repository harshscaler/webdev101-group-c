// let arr = [10 , 20 , 30 , 40 , 50 , 60 , 70];

// let brr = arr;

// brr[2] = 60;

// console.log(arr)
// console.log(brr);

// let a = 10;
// let b = a;

// b = 20;
// console.log(a);
// console.log(b);


// console.log(typeof arr[6]);

// arr.push('random value');
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.unshift("This is added at first");
// console.log(arr);

    //  [  0  , 1 , 2  , 3. , 4. , 5. , 6 ]
let arr = [10 , 20 , 30 , 40 , 50 , 60 , 70];
// console.log(arr.slice(1, 4));
// console.log(arr.splice(1 , 4));

// let brr = arr.slice(1 , 4);
let brr = arr.splice(1 , 4);

// brr[2] = 10;
console.log(arr);
console.log(brr);