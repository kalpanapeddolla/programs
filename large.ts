let arr = [5, 2, 67, 37, 85, 19, 10];
temp = 0;

arr.forEach((element) => {
  if (temp < element) {
    temp = element;
  }
});

console.log(`The largest number in the array: ${temp}`);
