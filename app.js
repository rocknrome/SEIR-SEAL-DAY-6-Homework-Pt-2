///  R'N'R   November 16, 2023


//////////////////////////////
console.log('*****| connection test |*****');
// Building an Object
// First, create an object called words with the keys given below.
//Each key's property should be an empty string. This is where we will save the user's input later.
const words = {  //declared an object
    number: "",  //added keys with empty string values
    adjective: "",
    pluralNoun: "",
    adverb: "",
    anotherAdjective: "",
}
// The keys:

// number
// adjective
// plural noun (pluralNoun)
// adverb
// another adjective (anotherAdjective)



//////////////////////////////
// Interact With the User
//Now that we have our object set up, we want to work on accepting user input so that we can save it to the object.
function startMadlib() {
    words.number = prompt("Enter any number");
    words.adjective = prompt("Enter any adjective");
    words.pluralNoun = prompt("Enter plural noun");
    words.adverb = prompt("Enter adverb");
    words.anotherAdjective = prompt("Enter one more adjective")
}
startMadlib();
console.log(words);

//Start by creating a function called startMadlib that prompts a user to enter each word type and save their 
//input to the appropriate object key. For example, the following prompt's user input should be saved to 
//the number key in our words object:

//To make sure you accepted all the user's input and saved it correctly, console.log your object after all the prompts are complete. 
//After filling out all the prompts, you should thus see something like the following in the browser console:


