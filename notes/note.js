// console.log('note');

// module.exports.addNote = () => {
//     console.log('addNote');
//     return 'new note';
// }
const fs = require('fs');

var fetchNotes = () => {
    try {
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (note) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(note));
};

var addNote = (title, body) => {
    // console.log(`Adding note with title: ${title} and body : ${body}`);
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });

    if (duplicateNotes.length == 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAllNote = (title) => {
    var notes = fetchNotes();
    return notes;

};

var removeNote = (noteTitle) => {
    var notes = fetchNotes();
    var notesr = notes.filter((note)=> note.title!=noteTitle);
    saveNotes(notesr);
    return notes.length!=notesr.length;
};

module.exports = {
    addNote,
    getAllNote,
    removeNote

};