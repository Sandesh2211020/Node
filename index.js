//----------------------Promise part 2-------------------------------------

let promise1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hello")
        }, 1000)
    })
};

let promise2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("world")
        }, 2000)
    })
};

//---------------------Ez method---------------------------------
// let(name, age) = {
//     name = "Sandesh",
//     age = 19,
// }

// let arr = ["hello", "world"]
// let [first, second] = arr
// console.log(first);


// const arrayOfPromises = [promise1(), promise2()]
// Promise.all(arrayOfPromises)
// .then(([promise1Value, promise2Value])=> {
//     console.log(promise1Value);
//     console.log(promise2Value);
// })

//-------------------async and await----------------------

const resultFunction = async () => {
    try {
        // let promise1Value = await promise1();
        // let promise2Value = await promise2();               // 3 second complete time.
        let [promise1Value, promise2Value] = await Promise.all([
            promise1(),
            promise2(),
        ]); // complete in 2 second.

        console.log(promise1Value, promise2Value);
    } catch (error) {
        console.log(error);
    }
}

resultFunction();





