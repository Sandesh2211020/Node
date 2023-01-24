//-----------------Promises----------------------

// function examplePromise (){
//     return new Promise(function (resolve, reject){
//         resolve("Hello World")
//     });
// }



const examplePromise = () =>{
    return new Promise((resolve, reject) => {
        reject("Hello World")
        
    });
};

examplePromise()
.then(function(result){
    console.log("Result is: ",result);
})
.catch((error) => {
    console.log("Error: " ,error);
})
.finally(() => {
    console.log("Runnnnnnn");
})