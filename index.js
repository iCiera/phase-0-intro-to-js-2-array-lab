// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function destructivelyRemoveLastCat() {
    cats.pop(name)
}
function destructivelyRemoveFirstCat() {
    cats.shift(name)
}

function appendCat(name) {
    const newKitty = [...cats]
    newKitty.push(name)
    return newKitty
}

function prependCat(name) {
    const newKitty = [...cats]
    newKitty.unshift(name)
    return newKitty
}

function removeLastCat() {
    const newKitty = [...cats]
    newKitty.splice(2)
    return newKitty
}

function removeFirstCat() {
    const newKitty = [...cats]
    newKitty.shift()
    return newKitty
}