//literal notation
var favFilms = ["Frozen", "Harry Potter", "Rush Hour"];

/// new
const hobbies = new Array("Reading", "Coloring", "Crocheting");
// new example
const luckyNums = new Array(8, 12, 96);

//literal example
const fortune = ["Yes!", "Nope.", "Uhm, maybe...", "Ugh, ask again.", "Yes...but the catch is no."];
fortune[0] = "ABSolutely!";
console.log(fortune[2]);

fortune[4] = "meow.";
console.log(fortune);

//to find length
console.log(fortune.length);
//or
let length = fortune.length;
console.log(length);

//
var superLong = [1,2,3,4,5,6,,7,8,9,10,11,12,13,14,15,16,17.18,19,20,21,22,23,24,25.66666,666,444,4646,65565646,6453653];
console.log(superLong.length);
superLong[superLong.length-1] = 100000;
