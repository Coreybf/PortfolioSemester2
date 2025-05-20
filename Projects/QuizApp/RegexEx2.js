//define sample text
const text = "Hello, World! 123456 This is a test: test123.";

// \w - Matches any alphanumeric character (letters, digits, and underscores)
const regexW = /\w+/g;
console.log("Matches for \\w:", text.match(regexW));

//\W - matches any non alphanumeric character
const regexNonW = /\W+/g;
console.log("Matches for \\W:", text.match(regexNonW));

// Non-greedy matching using *?
// Finds the smallest sequence of any characters followed by a space
const regexStarNonGreedy = /.*? /g;
console.log("Non-greedy match for *?:", text.match(regexStarNonGreedy));

// Non-greedy matching using +?
// Finds the smallest sequence of one or more characters followed by a space
const regexPlusNonGreedy = /.+? /g;
console.log("Non-greedy match for +?:", text.match(regexPlusNonGreedy));

// Non-greedy matching using ??
// Tries to match 0 times before 1 time for optional elements
const regexOptionalNonGreedy = /colou??r/g;
console.log("Non-greedy match for ??:", "color colour colouur".match(regexOptionalNonGreedy));

// Non-greedy quantifier {n,}?
// Matches at least 'n' times, but as few times as possible
const regexCurlyNonGreedy = /a{2,}?/g;
console.log("Non-greedy match for {n,}?:", "aaaaa".match(regexCurlyNonGreedy));

// Positive lookahead (?=...)
// Matches a 'test' only if it's followed by a digit
const regexLookahead = /test(?=\d)/g;
console.log("Matches for positive lookahead (?=...):", "test1 test test2".match(regexLookahead));

// Negative lookahead (?!...)
// Matches a 'test' only if it's NOT followed by a digit
const regexNegativeLookahead = /test(?!\d)/g;
console.log("Matches for negative lookahead (?!...):", "test1 test test2".match(regexNegativeLookahead));