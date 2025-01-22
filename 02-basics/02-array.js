const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all = [...marvel_heros,...dc_heros]
// console.log(all);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Hitesh")) 
/* The Array.isArray() static method determines whether the passed value is an Array. */
console.log(Array.from("Hitesh"))
/* The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object. */
console.log(Array.from({name: "hitesh"})) // interesting
/* The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments. */

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));