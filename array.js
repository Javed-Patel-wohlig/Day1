
const array = [1,2,3,4,"one","two","three", 1.2,2.4,3.6,true,false]

for(let i = 0; i < array.length; i++){
    if(!(typeof array[i] === "string")){
        array.splice(i, 1)
        i--
    }
};

console.log(array)