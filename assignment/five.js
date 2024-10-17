let sum = 0;
let product = 1;

for (let i = 5; i <= 10; i++) {
  console.log(i);
  sum += i;
  product *= i;
}

console.log("Sum:", sum);
console.log("Product:", product);