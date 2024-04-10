const arr1 = ["Rakib", "Rahim", "Karim", "Sakib", "Tamim"];
// array.push("Mushfiq");
// console.log(array);
// array.pop();

const arr2 = [...arr1, "Mushfiq"];

const filter = arr1.filter((name) => name !== "Karim");

//Function Currying
const add = (a) =>{
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}

console.log(add(1)(2)(3));

const level = add(1);
console.log(level(2)(3));
console.log(level(5)(6));
console.log(level(4)(10));