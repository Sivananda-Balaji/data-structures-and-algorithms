const nums = [40, 60, 20, 80, 50];

console.log("array:", nums);
console.log("length:", nums.length);
console.log("first item:", nums[0]);
console.log("last item:", nums.at(-1));

console.log("-------");
//for loop
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

console.log("-------");

//for... of loop

for (let val of nums) {
  console.log(val);
}
