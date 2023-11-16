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
3function startMadlib() {
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



//////////////////////////////
// Create the Tech Startup MadLib Story!
// Now that we've accepted the user's input and saved it to the object, we can use those values to create a MadLib!

// Use the following story and concatenate or interpolate the values from the object into it.

// Once upon a time a group of _____(number) General Assembly graduates
// got together and made a startup called _____ (adjective) Technologies.
// Their goal was to create smart _____(plural noun).
// They approached the challenge _____ (adverb)
// which ultimately lead them to _______(another adjective) fame.
// Finally, once the user finishes submitting all prompts, they should be alerted of the story they've created! For example:
console.log(`Once upon a time a group of ${words.number} General Assembly graduates`);
console.log(`got together and made a startup called ${words.adjective} Technologies.`);
console.log(`Their goal was to create smart ${words.pluralNoun}.`);
console.log(`They approached the challenge ${words.adverb}`);
console.log(`which ultimately lead them to ${words.anotherAdjective} fame.`);

alert(`Once upon a time a group of ${words.number} General Assembly graduates, 
\ngot together and made a startup called ${words.adjective} Technologies., 
\nTheir goal was to create smart ${words.pluralNoun}., 
\nThey approached the challenge ${words.adverb}, 
\nwhich ultimately lead them to ${words.anotherAdjective} fame.`);