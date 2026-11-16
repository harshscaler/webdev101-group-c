//Map function --->
let newArr = [10,20,30,40];

function creatingMapFunction(arr,cb){
    let returnArr = [];
    for(let i in arr){
        returnArr[i] = cb(arr[i]);
    }
    return returnArr;
}

function double(val){
    return val*2;
}

let result = creatingMapFunction(newArr,double);

console.log(result);