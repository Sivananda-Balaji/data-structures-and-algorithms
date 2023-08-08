// Strings and String Method

const state = "washington";

console.log(state);

console.log("-----");

for (let i = 0; i < state.length; i++) {
  console.log(state[i]);
}

console.log("-----");

for (let val of state) {
  console.log(val);
}

//String Methods
console.log("-----");

console.log("length:", state.length);

console.log("Type:", typeof state);

console.log("character:", state.charAt(2));

console.log("character code:", state.charCodeAt(2));

console.log("index:", state.indexOf("g"));

console.log("includes:", state.includes("g"));

console.log("lowercase:", state.toLowerCase());

console.log("uppercase:", state.toUpperCase());

console.log("trim:", state.trim());

console.log("slice:", state.slice(0, 4));
