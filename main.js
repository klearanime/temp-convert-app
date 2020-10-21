const convertToC = require('./f2c.js') 
const convertToF = require('./c2f.js')


// this is our front end file
// it is in charge of user interaction ONLY
// heres how the data goes through our app
// user types in the terminal 
// when they hit enter, node puts their inputs into process.argv
// we're going to send that input to the backend function
// we'll print that answer to the user

// grab to temperature from user
const temp = process.argv[2]
// grab to unit from user
const unit = process.argv[3]

// feed the temperature to our function and get an answer
const result = convertToC(temp)

// print that answer


if (unit === 'c') {
    const celsius = convertToC(temp)
    console.log(celsius)
// otherwise, go get the answer from convertToF 
// then print it
} else {
    const fahrenheit = convertToF(temp)
    console.log(fahrenheit)
}

// ternary

console.log(unit === 'c' ? convertToC(temp) : convertToF(temp));