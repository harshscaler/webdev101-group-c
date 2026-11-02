let newArr = [10,23,30,43];

function creatingFilterFunction(arr,condition){
    let returnArr = [];    
    for(let i in arr){
            if(condition(arr[i])){
                returnArr.push(arr[i]);
            }
        }
    return returnArr;    
}

function cond(val){
    if(val%2 == 0){return true;}
    else{return false}
}

let result = creatingFilterFunction(newArr,cond);

console.log(result);
