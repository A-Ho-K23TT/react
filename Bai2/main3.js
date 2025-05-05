// câu 3a
const average = (...numbers) => {
    const total = numbers.reduce((sum, num) => sum + num, 0);
    return numbers.length ? total / numbers.length : 0;
  };

  console.log(average(2, 4, 6)); 

// 3b 
const arr1 = [1, 2];
const arr2 = [3, 4];
const combinedArray = [...arr1, ...arr2];

console.log(combinedArray); 

const obj1 = { name: "udck" };
const obj2 = { ...obj1, age: 18 };

console.log(obj2); 

  