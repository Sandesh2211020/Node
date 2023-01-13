
// -----------------------callBack---------------------

// function getFullName(firstName, lastName, cb){
//     return cb (`${firstName} ${lastName}`);
// }

// function makeUpperCb(name){
//     return name.toUpperCase();
// }

// let fullName = getFullName('sandesh','Shrestha', makeUpperCb);
// console.log(fullName);

//-----------------------Map---------------------
let countries = ['Nepal', 'Bhutan', 'India', 'China'];

function makeCountryUpperCase(countryName){
    countryName.toUpperCase()
}

let upperCountries = countries.forEach(function (countryName){
    return makeCountryUpperCase(countryName)
});

console.log(upperCountries);