import chalk from 'chalk';
import yargsjs from "yargs";
import { hideBin } from 'yargs/helpers';
import { getNotes, addNote, removeNote, listNotes, readNotes } from './notes.js'

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
    builder:  {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        readNotes(argv.title);
    }
});

yargs.parse();

// console.log(yargs.argv);
