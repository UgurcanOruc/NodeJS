import fs from 'fs';

export const getNotes = function () {
    return 'Your notes...'
}

export const addNote = function (title,body) {
    const notes = loadNotes();
    const isExist = checkTitles(notes, title);
    if(!isExist) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(notes);
    } else {
        console.log('There already exist note title named: ' + title);
    }
}

export const removeNote = function (title) {
    const notes = loadNotes();
    const loadedNotesCount = notes.length;
    var message = 'There is not any note title named ' + title;
    notes.filter(function (note) {
        return note.title !== title;
    });
    const filteredNotesCount = notes.length;
    if(loadedNotesCount > filteredNotesCount){
        message = 'The note title named' + title + 'has been removed.';
        saveNotes(notes);
    }
    console.log(message);
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const checkTitles = function (notes, title) {
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    });
    return duplicateNotes.length === 0 ? false : true;
}