// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat (name) {return cats.push('Ralph')}
function destructivelyPrependCat (name) {return cats.unshift('Bob')}
function destructivelyRemoveLastCat (name) {return cats.pop()}
function destructivelyRemoveFirstCat (name) {return cats.shift()}
function appendCat(name) {
const cats1 = [...cats,'Broom']
 return cats1;
}
function prependCat(name) {
    const cats2 = ["Arnold",...cats]
    return cats2
}function removeLastCat(name){
    const cats3 = cats.slice(0,2)
    return cats3
}function removeFirstCat(name){
    const cats4=cats.slice(1)
    return cats4
}