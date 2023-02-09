// basic example 1
const valid = true;

const mypromise_example = () => {
  return new Promise((resolve, reject) => {
    if (valid) {
      setTimeout(() => {
        resolve("hello world");
      }, 1000);
    } else {
      reject(error);
    }
  });
};

async function test() {
  try {
    const result = await mypromise_example();
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally");
  }
}
test();

console.log("valid");
console.log("valid");
console.log("valid");

// basic example 2

const getData = async () => {
  return new Promise((resolve, reject) => {
    if (valid) {
      setTimeout(() => {
        const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        resolve(data);
      }, 2000);
    } else {
      reject(error);
    }
  });
};

const processData = async (data) => {
  return new Promise((resolve, reject) => {
    if (valid) {
        
      const newData = data.filter((item) => item % 2 === 0);
      resolve(newData);
    } else {
      reject(error);
    }
  });
};
const result = async () => {
  try {
    const data = await getData();
    const updatedata = await processData(data);
    console.log(data);
    console.log(updatedata);
  } catch (error) {
    console.log(error);
  }
};

result();
