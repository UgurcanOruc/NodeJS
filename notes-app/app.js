import chalk from 'chalk';
import yargsjs from "yargs";
import { hideBin } from 'yargs/helpers';
import { getNotes, addNote, removeNote } from './notes.js'

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
    handler: function (argv) {
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
    handler: function (argv) {
        removeNote(argv.title)
    }
});

// Create List Command
yargs.command({
    command:'list',
    describe:'List your notes',
    handler: function () {
        console.log('Listing out all notes');
    }
});

// Create Read Command
yargs.command({
    command: 'read',
    describe:'Read a note',
    handler: function () {
        console.log('Reading a note');
    }
});

yargs.parse();

// console.log(yargs.argv);
