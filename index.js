"use strict";
// Tasks 1, 2, 3
var message0 = "Hello Saffi! Try to focus on your career to acheive your goals";
var person = "Saffi"; // Task 10 - Name Moaiz Ali, Date 30 July 2023, Showing Person Name in lower Case and Upper Case Letters. and showing quote in Title case letters
console.log(person.toLowerCase(), person.toUpperCase());
function toTitleCase(str) {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLocaleLowerCase());
}
console.log(toTitleCase(message0));
// Tasks 4
var qoute = 'Allama Iqbal Once Said: "Elevate yourself to such heights that before every decree of fate, God Himself inquires, What is it that you wish, O human?"';
console.log(qoute); // Task 10 - Name Moaiz Ali, Date 30 July 2023 - showing another quote with poet's name
// Task 5
var famous_person = "Allama Iqbal"; // Task 10 - Name Moaiz Ali, Date 30 July 2023 - Added poet name in specific variable and showing his quote in double quotes
var message = '"Khudi ko kar buland itna ke har taqdeer se pehle, Khuda bande se khud pooche bata teri raza kya hai."';
console.log(message);
// Task 6
var nameWithWhiteSpaces = "\t \n Allama Iqbal \t \n";
console.log("Name With White Spaces:", nameWithWhiteSpaces); // Task 10 - Name Moaiz Ali, Date 30 July 2023 - Printing name with white spaces and then stripping those spaces.
var strippedName = nameWithWhiteSpaces.trim();
console.log("Stripped Name is:", strippedName);
// Task 7, 8
console.log("Number 8!"); // Task 10 - Name Moaiz Ali, Date 30 July 2023 - using operators to show result 8
console.log(4 + 4);
console.log(12 - 4);
console.log(16 / 2);
console.log(2 * 4);
// Task 9
var favNum = 4; // Task 10 - Name Moaiz Ali, Date 30 July 2023 - showing my favorite number in output with the message
console.log("This is my Favorite Number: ", favNum);
// Task 11
var friendsList = ["Talha", "Farooq", "Sufyan", "Haider", "Hamza", "Umair"];
console.log("My Friendlist:");
for (let i = 0; i < friendsList.length; i++) {
    console.log(friendsList[i]);
}
// Task 12
var friendsMessage = ["Talha", "Farooq", "Sufyan", "Haider", "Hamza", "Umair"];
console.log("Message to each friends:");
for (let i = 0; i < friendsList.length; i++) {
    console.log("Hello", friendsMessage[i], "Please bring my laptop tomorrow.");
}
// Task 13
var tranport = ["Mercedes", "Audi", "Mustang GT"];
for (let i = 0; i < tranport.length; i++) {
    console.log("I would like own", tranport[i]);
}
// Task 14
var dinnerInvitation = ["Talha", "Farooq", "Sufyan", "Haider", "Hamza", "Umair"];
for (let i = 0; i < dinnerInvitation.length; i++) {
    console.log("MR.", dinnerInvitation[i], "I would like to invite you to dinner at my place");
}
// Task 15
var updatedInvitation = ["Talha", "Farooq", "Shaami", "Haider", "Hamza", "Asghar"];
console.log("I would like to let you guys know that Sufyan and Umair cannot join us because of emergency");
for (let i = 0; i < updatedInvitation.length; i++) {
    console.log("MR.", updatedInvitation[i], "I would like to invite you to dinner at my place");
}
