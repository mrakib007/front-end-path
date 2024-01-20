const wrapperFunction = (func) => {
    return (num) =>{
        return func(num) * 2;
    }
}

const addOne = (num) =>{
    return num + 1;
}
console.log("First Time",addOne(1)); 

const addOneAndDouble = wrapperFunction(addOne);

console.log(addOneAndDouble(1));

console.log("second Time",addOne(5)); 