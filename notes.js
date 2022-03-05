const fs = require("fs");

const chalk = require("chalk");

const addNote = (title, body) => {
  //load notes
  const notes = loadNotes();

  // check if any duplicate note's title
  const duplicateNote = notes.filter((note) => note.title === title);

  // if no duplicate note, push the new note to the array
  if (duplicateNote.length === 0) {
    notes.push({
      title,
      body,
    });
    console.log(chalk.bgGreen("A note has been added"));

    // save the new note
    saveNotes(notes);
  } else {
    console.log(chalk.bgRed("Note title was taken"));
  }
};

const saveNotes = (notes) => {
  // stringify the newly added note
  const dataJSON = JSON.stringify(notes);

  //write the newly added note to notes.json file
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    //read file data
    const dataBuffer = fs.readFileSync("notes.json");

    // convert buffer to string
    const dataJSON = dataBuffer.toString();

    // return the parsed data
    return JSON.parse(dataJSON);
  } catch (error) {
    // if no existing file, return an empty array
    return [];
  }
};

const removeNote = (title) => {
  // load existing notes
  const notes = loadNotes();

  // keep the notes with no matching title
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notesToKeep.length !== notes.length) {
    console.log(chalk.bgGreen("Note removed!"));

    // save the notes back
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.bgRed("No note found!"));
  }
};

module.exports = {
  addNote,
  removeNote,
};
