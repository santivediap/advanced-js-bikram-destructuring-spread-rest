//RESUELVE LOS EJERCICIOS AQUÍ

// Ejercicio 1

const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

const [, ana, ] = empleados

// Ejercicio 2

const [luis] = empleados;
const emailLuis = luis.email;

// Ejercicio 3

let [a, b] = [5, 3];
[a, b] = [b, a]

// Ejercicio 4

const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };

const {today: maximaHoy, tomorrow: maximaManana} = HIGH_TEMPERATURES;

// Ejercicio 5

function sumEveryOther(...nums) {
    return nums.reduce((count, num) => count += num);
}

// Ejercicio 6

function addOnlyNums(...args) {
    return args
            .filter(value => typeof(value) == "number")
            .reduce((count, num) => count += num)
}
// Ejercicio 7

function countTheArgs(...args) {
    return args.length;
}

// Ejercicio 8

function combineTwoArrays(array1, array2) {
    return [...array1, ...array2];
}

// Ejercicio 9

function onlyUniques(...args) {
    return args.filter((val, i, arr) => {
        if(val == arr[i + 1]) {
            arr.splice(i, 1);
        }

        return arr;
    })
}

console.log(onlyUniques("perro", "perro", "gato"));

// Ejercicio 10

function combineAllArrays(...arrays) {
    let finalArray = [];
    arrays.map(value => finalArray.push(...value))
    return finalArray;
}

// Ejercicio 11

function sumAndSquare(...args) {
    return args
            .map(val => val ** 2)
            .reduce((counter, currVal) => counter += currVal);
}