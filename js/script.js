
//literal notation
var favFilms = ["Frozen", "Harry Potter", "Rush Hour"];

/// new
const hobbies = new Array("Reading", "Coloring", "Crocheting");
// new example with numbers
const luckyNums = new Array(8, 12, 96);

//literal example pt2
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

// pop n' push functions

console.log(fortune);
//we are starting off with 5 elements.

console.log(fortune[fortune.length - 1]); // this prints the last item.
fortune.push("Sometimes...");
console.log(fortune); // now we are 6 elements :,)
console.log(fortune[fortune.length - 1]); // this prints the last item.
fortune.pop();
console.log(fortune);

//with functions

function array (arr) {
    console.log(arr[0]);
    console.log(arr[2]);
}