function solve(arr, start, end) {
    if(Array.isArray(arr) == false) {
        return NaN;
    }

if(start < 0){
    start = 0;
}

if(end > arr.length - 1){
    end = arr.length - 1;
}
    let sum = 0;
    for (let index = start; index <= end; index++) {
       sum += Number(arr[index]);
        
    }
    return sum;
}