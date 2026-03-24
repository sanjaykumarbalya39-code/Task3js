// Spread & Rest Operator
// Question-1  

const arr1 = [10, 20];
const arr2 = [30, 40];

const merged = [...arr1, ...arr2, 50];
console.log(merged); 


// Question-2
const original = [1, 2, 3];
const clone = [...original];
clone.push(4);
console.log(original);
console.log(clone);

//Question-3
const obj1 = { name: "A", salary: 1000 };
const obj2 = { salary: 2000 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

//Question-4
function sum(...nums) {
  return nums.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1,2,3,4));

//Question-5
function showRest(a, b, ...rest) {
  console.log(rest);
}
showRest(1,2,3,4,5);


// Destructuring
//Question-6
const arr = [5,10,15,20];
const [first, , , last] = arr;

console.log(first, last);

//Question-7
let a = 10, b = 20;
[a, b] = [b, a];
console.log(a, b);

//Question-8
const nested = [1,[2,[3,[4]]]];
const [, [, [, [value]]]] = nested;

console.log(value);

//Question-9
const user = { name: "John", age: 25 };
const { name: userName, age } = user;
console.log(userName);

//Question-10
const obj = { name: "John" };
const { name, age1 = 18 } = obj;
console.log(age1);

// Basic Array Operations
//Question-11
let arr3 = [1,2,3,4,5];
arr3.push(6,7);
console.log(arr3);

//Question-12
let last1 = arr.pop();
console.log(arr3);

//Question-13
let first1 = arr.shift();
console.log(arr3);

//Question-14
arr3.unshift(0);
console.log(arr3);

//Question-15
arr3.splice(2,2);
console.log(arr3);

//Slice / Splice / Flat
//Question-16
const arr4 = [1000,2000,3000,4000,5000,6000];
console.log(arr4.slice(3)); 

//Question-17
let arr5 = [1,2,3,4];
arr.splice(1,2,"A","B");
console.log(arr5);

//Question-18
const nested1 = [1,[2,[3,[4]]]];
console.log(nested1.flat(Infinity));


//Question-19
console.log([1,[2,[3]]].flat());

//Question-20
let arr6 = [1,2,5];
arr.splice(2,0,3,4);
console.log(arr6);

//Searching & Checking

const arr7 = [1,2,3,5,5];

//Question-21
// includes
console.log(arr7.includes(100)); 

//Question-22
// indexOf from position
console.log(arr7.indexOf(3,2));

//Question-23
// lastIndexOf
console.log(arr7.lastIndexOf(5));

//Question-24
// every
console.log(arr7.every(n => n > 0));

//Question-25
// some
console.log(arr7.some(n => n > 50)); 


// Sorting
// Question-26
[10,5,100,1].sort((a,b)=>a-b);
// Question-27
[10,5,100,1].sort((a,b)=>b-a);
// Question-28
const emp = [{salary:300},{salary:100},{salary:200}];
emp.sort((a,b)=>a.salary-b.salary);
// Question-29
let arr8 = [20,36,15,8,63,96,82,99]
arr8.sort((a,b)=>a-b).reverse();
// Question-30
[10,5,100].sort();
// Because after the second digit, the sort function treats the values as strings rather than numbers.

//Higher Order Functions

//Question-31

[1,2,3].forEach(n => console.log(n));

//Question-32
const result = [1,2,3].forEach(n => n*2);
console.log(result); // undefined

//Question-33
[1,2,3].map(n => n*2);
["a","b"].map(n => n.toUpperCase());
const emp1 = [{salary:100},{salary:200}];
emp1.map(e => e.salary);

//Question-34
emp1.filter(e => e.salary > 300000);
[1,2,3,4].filter(n => n % 2 === 0);
["hello","hi","welcome"].filter(s => s.length > 5);

//Question-35
[10,20,60].find(n => n > 50);
emp1.find(e => e.salary < 200000);

//Reduce

//Question-36
// sum
[10,20,30].reduce((a,b)=>a+b,0);

// max
[10,50,30].reduce((a,b)=>Math.max(a,b));

// count
[1,2,3].reduce(acc => acc+1, 0);

// array → object
["a","b"].reduce((acc,val)=>{
  acc[val]=true;
  return acc;
}, {});

// total salary
[10,20,30].reduce((a,b)=>a+b,0);
//Question-37
[10,50,30].reduce((a,b)=>Math.max(a,b));
//Question-38
[1,2,3].reduce(acc => acc+1, 0);
//Question-39
["a","b"].reduce((acc,val)=>{
  acc[val]=true;
  return acc;
}, {});

//Question-40
emp1.reduce((sum,e)=>sum+e.salary,0);


//Conversion
//Question-41
[1,2,3].toString();
//Question-42
[1,2,3].join(" - ");
//Question-43
[1,2,3].join(" - ");
//Question-44
[1,2,3].join(" - ");
//Question-45
[1,2,3].join(" - ");

//Bonus (Real-World)
//Question-46
const cart = [{price:100},{price:200}];
const total = cart.reduce((sum,item)=>sum+item.price,0);
products.filter(p => p.price < 500);

//Question-47
products.filter(p => p.name.includes("phone"));

//Question-48
//[1,2,2,3,3] = [...new Set([1,2,2,3,3])];

//Question-49
const grouped = emp.reduce((acc,e)=>{
  const key = e.salary > 300000 ? "high" : "low";
  if(!acc[key]) acc[key] = [];
  acc[key].push(e);
  return acc;
}, {});


















