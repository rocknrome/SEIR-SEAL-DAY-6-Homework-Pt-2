MadLibs


Mad libs was invented in 1953 and is a phrase template word game - where one player prompts others for a list of words to substitute for blanks in a story, before reading the - often comical or nonsensical - story aloud - wikipedia

For this section of the homework, you'll be creating a simple version of it on the browser to practice interactivity and accepting user input!

Getting Started
Create a directory called mad_libs inside of tonight's homework folder
Inside the mad_libs directory, create the following files: app.js and index.html
In your index.html, add the HTML boilerplate
Connect your app.js to your index.html
Test the connection by adding a console.log to your app.js and check your browser's dev tools console to make sure you can see the log! If you can, your connection was successful
Building an Object
First, create an object called words with the keys given below. Each key's property should be an empty string. This is where we will save the user's input later.

The keys:

number
adjective
plural noun (pluralNoun)
adverb
another adjective (anotherAdjective)
Interact With the User
Now that we have our object set up, we want to work on accepting user input so that we can save it to the object.

Start by creating a function called startMadlib that prompts a user to enter each word type and save their input to the appropriate object key. For example, the following prompt's user input should be saved to the number key in our words object:



To make sure you accepted all the user's input and saved it correctly, console.log your object after all the prompts are complete. After filling out all the prompts, you should thus see something like the following in the browser console:



Create the Tech Startup MadLib Story!
Now that we've accepted the user's input and saved it to the object, we can use those values to create a MadLib!

Use the following story and concatenate or interpolate the values from the object into it.

Once upon a time a group of _____(number) General Assembly graduates
got together and made a startup called _____ (adjective) Technologies.
Their goal was to create smart _____(plural noun).
They approached the challenge _____ (adverb)
which ultimately lead them to _______(another adjective) fame.
Finally, once the user finishes submitting all prompts, they should be alerted of the story they've created! For example:



