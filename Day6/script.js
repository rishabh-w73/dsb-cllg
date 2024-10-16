let arr = [1, 2, 32, 36, 31, 33, 70];
// let newarr=arr.map((x)=>x*2);
// console.log(newarr);
// let sum = arr.reduce((x, y) => x + y, 0);
// console.log(newarr);

let sum = arr.filter((x) => x % 2 == 0).reduce((x, y) => x + y, 0);

console.log(sum);
