// Maps are objects which holds key value pair of any data type


const stationary = new Map([
    ["pencil",1],
    ["rubber",2],
    ["sharpner",3],
    ["scale",10]
])

stationary.forEach((value, key)=> console.log(`${key} $${value}`));

console.log(stationary.get("rubber"));
stationary.set("ruler",30);
stationary.delete("scale");
console.log(stationary.has("rubber"));


let shoppingCart = 0;

shoppingCart = stationary.get("pencil") + stationary.get("rubber") + stationary.get("ruler") + stationary.get("sharpner");

console.log(shoppingCart);

