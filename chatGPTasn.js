const valid = true;

const getData = async () => {
  return new Promise((resolve, reject) => {
    if (valid) {
      setTimeout(() => {
        const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        resolve(data);
      }, 2000);
    } else {
      reject("error");
    }
  });
};

const processData = async (data) => {
  return new Promise((resolve, reject) => {
    if (valid) {
      const newData = data.forEach(element => {
        if(!(element% 2 === 0)){
            data.splice(data.indexOf(element), 1)
        }})
        resolve(newData);
      }
    else {
      reject("error");
    }
})}


const result = async () => {
    try {
      const data = await getData();
      const newData = await processData(data);
      console.log(data);
      console.log(newData);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  
  result();
  
