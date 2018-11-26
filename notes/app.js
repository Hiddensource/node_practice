const fs = require('fs');
const _ = require('lodash'); 
const yargs = require('yargs');

const notes = require('./note.js');

var argv = yargs.argv;

var command = argv._[0];
if(command === 'add'){
    if(_.isUndefined(notes.addNote(argv.title , argv.body))){
        console.log('Note already exists');
    }else{
        console.log(`Note created with title : ${argv.title}`);
    }
}else if (command === 'getAll') {
    var note = notes.getAllNote();
    debugger;
    if(note){
        note.forEach(note => {
            console.log(`Node title : ${note.title} , body : ${note.body}`);
        });
    }
}else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var msg = noteRemoved ? `Note removed with title ${argv.title}` : 'Note not found';
    console.log(msg);

} else {
    console.log("Command not recognized");
}