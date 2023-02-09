    // function to add numbers

function toAdd(a, b){
    return a+b
}

console.log(toAdd(2, 3))

//another way to wriet the same function

const toAdd2 = (a, b) => a+b

console.log(toAdd2(2, 3))


const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

data.forEach((item) => {
    if (item%2 === 0) {
        data.splice(data.indexOf(item), 1)
    }
})


console.log(data)

