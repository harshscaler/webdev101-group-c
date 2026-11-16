let newArr = [10,20,30,40];

function creatingReducerFunction(arr,initial){
    let sum = initial;
    for(let i in arr){
        sum = sum + arr[i];
    }
    return sum;
}

let result = creatingReducerFunction(newArr,0);

console.log(result);