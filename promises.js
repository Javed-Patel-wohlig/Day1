const valid = true

const mypromise_example = ()=>{
    return new Promise((resolve, reject) => {
        if(valid){
            setTimeout(() => {
                resolve(console.log('hello'));
            }, 2000);
        }else{
            reject(console.log('invalid'));
        }
    })
}

mypromise_example()
.then(()=>{
    setTimeout(() => {
        console.log("task1................................");
    },4000)
})
.then(()=>{
    setTimeout(() => {
        console.log("task2................................");
    }, 2000);
})
.then(()=>{
    javed
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("task4................end............");
})