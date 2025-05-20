//search method
const text = "Looking for the best colour options or color schemes.";

//reg expression
const regexp = /colou?r/gi;

//using search
const index = text.search(regexp);
console.log(index);

//global match
const global = "This is a test. Test the global test function.";
const regexGlobal = /test/g;
const matches = global.match(regexGlobal);
console.log(matches);   //output ['test', 'test]

//case sensitive
const text1 = "Test your code and then test again.";
const regexCaseSensitive = /Test/;
const index1 = text1.search(regexCaseSensitive);
console.log(index1);  //output 0 is the index

//multiline
const ml = "First line\nSecond line\nThird line";
const regexMultiline = /^Second line$/m;

const isMatch = regexMultiline.test(ml);
console.log(isMatch);  //output true

//replace and replace all()
const newtext = "The cat sat on the mat.";
//replace first occurence
const replaced = newtext.replace(/\bcat\b/, "dog");
console.log(replaced);  //output  "The dog sat on the mat"

//replace all
const allReplaced = text.replaceAll(/\bthe\b/gi, "a");
console.log(allReplaced);

//\b word boundary
const word = "cat cater concatenate";
const regexWordBoundary = /\bcat\b/g;

const matchesBoundary = word.match(regexWordBoundary);
console.log(matchesBoundary);