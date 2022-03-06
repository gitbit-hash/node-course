const notes = require("./notes");

const yargs = require("yargs");

// Customize yargs version
yargs.version("1.1.0");

//Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//Create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

//Create read command
yargs.command({
  command: "read",
  describe: "read a note",
  builder: {
    title: { describe: "Read a Note", demandOption: true, type: "string" },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

//Create list command
yargs.command({
  command: "list",
  describe: "list notes",
  handler() {
    notes.listNotes();
  },
});

yargs.parse();
