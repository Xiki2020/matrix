let DeleteElementArr = (arr, count = 0) => {
    arr.forEach(function (element, index, arr) {
        if (index % 2 !== 0 && element % 2 === 0) arr.splice(count, 1);
        else count++;
    });
    return arr;
};
let arr = [2, 4, 6, 8, 10, 11];
console.log(DeleteElementArr(arr));
console.log(arr);
//arr[2, 6, 10, 11];
