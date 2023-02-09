// simple callback function

const printing = (rgb) => console.log(rgb)

const add = (a, b, callback) => callback(a+b)

add(3, 2, printing)


//callback hell 


//Callback Hell" is a term used to describe a situation where an excessive number of nested callbacks makes the code difficult to read and maintain. This often happens when dealing with asynchronous operations, where callbacks are used to process the result of an operation after it has completed.

//Here's an example of what callback hell looks like:
const order = () => {
    console.log("Order...")
}

const kitchen = (callback) => {
    console.log("tasks...")
    callback()
}

const hell = () =>{
    setTimeout(() => {
        kitchen(order)
        setTimeout(() => {
            kitchen(order)
            setTimeout(() => {
                kitchen(order)
                setTimeout(() => {
                    kitchen(order)
                    setTimeout(() => {
                        kitchen(order)
                        setTimeout(() => {
                            kitchen(order)
                            setTimeout(() => {
                                kitchen(order)
                                console.log("callback hell")
                            }, 2000)
                        }, 2000)
                    }, 2000)
                }, 2000)
            },1000)
        }, 1000)
    }, 1000)
}

hell()


//This type of code can become difficult to understand and maintain as the number of nested callbacks grows. To avoid this situation, developers have come up with alternative approaches, such as Promises and async/await, that make it easier to write and manage asynchronous code
