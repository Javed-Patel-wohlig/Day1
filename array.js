
const array = [1,2,3,4,"one","two","three", 1.2,2.4,3.6,true,false]

array.forEach(element => {
    if (typeof(element)=== "string"){
        console.log(element)
    }else{
        console.log(typeof(element))
    }
})