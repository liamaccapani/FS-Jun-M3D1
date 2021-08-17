const car = { // dictionary
    brand: "bmw",
    manufactured: 2018,
    "left-driving": true,
    features: {
        airbag: true,
        warmedSeats: true
    }
    //left: undefined....
}

const myCar = Object.assign({}, car)
console.log(car, myCar)

console.log(myCar.features)