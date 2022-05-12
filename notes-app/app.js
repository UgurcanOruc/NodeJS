import chalk from 'chalk';
import yargsjs from "yargs";
import { hideBin } from 'yargs/helpers';
<<<<<<< HEAD
import { getNotes, addNote, removeNote, listNotes, readNotes } from './notes.js'
=======
import { addNote, removeNote, listNotes, readNote } from './notes.js'
>>>>>>> 31dc2d10195e2cf2f8991c64113d890bff614eda

const yargs = yargsjs(hideBin(process.argv));
const { argv } = yargsjs(process.argv);

// Create Add Command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        addNote(argv.title, argv.body);
    }
});

// Create Remove Command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:  {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        removeNote(argv.title)
    }
});

// Create List Command
yargs.command({
    command:'list',
    describe:'List your notes',
    handler () {
        listNotes();
    }
});

// Create Read Command
yargs.command({
    command: 'read',
    describe:'Read a note',
<<<<<<< HEAD
    builder:  {
=======
    builder: {
>>>>>>> 31dc2d10195e2cf2f8991c64113d890bff614eda
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
<<<<<<< HEAD
    handler (argv) {
        readNotes(argv.title);
=======
    handler (args) {
        readNote(args.title);
>>>>>>> 31dc2d10195e2cf2f8991c64113d890bff614eda
    }
});

yargs.parse();

// console.log(yargs.argv);
