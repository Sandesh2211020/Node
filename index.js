/* 
function getName(fullName,lastName){
    return fullName + ' ' + lastName;
}

console.log("My name is " +getName('Sandesh' , 'Shrestha'));

function getInfo(fullName,age){
    return `My full name is ${fullName} and my age is ${age}`;
}

console.log(getInfo('Sandesh Shrestha',19)); 
*/

function oldFunction(firstName, lastName){
    return `Hello ${firstName} ${lastName}`;
}

let newFunction = (firstName, lastName) => `Hello ${firstName} ${lastName}`;

console.log(newFunction('Sandesh', 'Shrestha'));








