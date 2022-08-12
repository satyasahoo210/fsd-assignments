/**
 * 1. Implement a map using the Inversion of Control principle that will perform operations on an array such as:
 * Squaring the elements
 * Dividing them by 5.
 * The root of the element
 * etc
 * 2. Implement a generator that will return power all the powers of 3.
 * 3. Program to explain difference between Promise.all() and Promise.race().
 */

function squareOfAll(arr) {
    return arr.map(item => item * item)
}

function divideBy5(arr) {
    return arr.map(item => item / 5)
}

function rootOfAll(arr) {
    return arr.map(Math.sqrt)
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('The array', arr)
console.log('Squaring the elements', squareOfAll(arr))
console.log('Dividing them by 5', divideBy5(arr))
console.log('The root the elements', rootOfAll(arr))

function* powerOf3() {
    let power = 0

    while (true) {
        yield Math.pow(3, power++)
    }
}

const powersOf3Generator = powerOf3()
let N = 5

console.log('Powers of 3 till', N)
while (N--) {
    console.log(powersOf3Generator.next().value)
}

const promise1 = Promise.resolve('Resolved already')
const promise2 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve('Resolved after 1 second')
    }, 1000)
});

(async function () {
    console.log('Promise.all', await Promise.all([promise1, promise2]))
    console.log('Promise.race', await Promise.race([promise1, promise2]))
})();
