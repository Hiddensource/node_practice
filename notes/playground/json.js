// var obj ={
//     name : "Deepak"
// };
// var stringObj = JSON.stringify(obj);
// console.log(stringObj);

// var personString = '{"name" :"Deepak" , "age" : 25}';
// var person = JSON.parse(personString);
// console.log(person);

const fs = require('fs');

var originalNote = {
    title : "title",
    body : "body"
};

originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync("notes.json", originalNoteString);

var noteString = fs.readFileSync('notes.json');

note = JSON.parse(noteString);
console .log (typeof note , note.title);
