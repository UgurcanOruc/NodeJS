import fs from 'fs';
import chalk from 'chalk';

export const getNotes = () => {
    return 'Your notes...'
}

export const addNote = (title,body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title)
    
    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green('Note has been added.'));
    } else {
        console.log(chalk.red('There already exist note title named: ' + title));
    }
}

export const removeNote = (title) => {
    const notes = loadNotes();
    var message = chalk.red('There is not any note title named ' + title);
    
    const notesToKeep = notes.filter((note) => note.title !== title);

    if(notes.length > notesToKeep.length){
        message = chalk.green('The note title named ' + title + ' has been removed.');
        saveNotes(notesToKeep);
    }
    console.log(message);
}

export const listNotes = () => {
    const notes = loadNotes();

    console.log(chalk.inverse('Your Notes'));

    notes.forEach(note => {
        console.log(note.title);
    });
}

export const readNotes = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);

    if(note !== null){
        console.log(chalk.blue(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red('There is not any note titled: ' + title));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}