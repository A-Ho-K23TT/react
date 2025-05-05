// câu 4a
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled);
// 4b
const names = ["alice", "bob", "charlie"];
const capitalized = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));
console.log(capitalized);
// 4c
const nums = [5, 8, 1, 10, 3];
const filtered = nums.filter(num => num > 5);
console.log(filtered);
//4d
const fruits = ["apple", "banana", "kiwi", "mango"];
const longNames = fruits.filter(fruit => fruit.length > 4);
console.log(longNames);
//4e
const nums2 = [1, 2, 3, 4];
const sum = nums2.reduce((total, num) => total + num, 0);
console.log(sum); // 10
//4f
const chars = ['a', 'b', 'c'];
const combined = chars.join('');
console.log(combined); 
//4g
const arr = [3, 7, 11, 14];
const firstDivBy7 = arr.find(num => num % 7 === 0);
console.log(firstDivBy7); 
//4h
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 600 },
    { name: "Tablet", price: 800 }
  ];
  
  const total = products
    .filter(product => product.price > 700)
    .reduce((sum, product) => sum + product.price, 0);
  
  console.log(total); 
  //4j
  const scores = [7, 4, 9, 10, 5, 8];
const grades = scores.map(score => score >= 5 ? "Đậu" : "Rớt");
console.log(grades);

  


