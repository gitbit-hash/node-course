const fs = require("fs");

const addNote = (title, body) => {
  //load notes
  const notes = loadNotes();

  // check if any duplicate note's title
  const duplicateNotes = notes.filter((note) => note.title === title);

  // if no duplicate note, push the new note to the array
  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body,
    });
    // save the new note
    saveNotes(notes);
  } else {
    console.log("Note title was taken");
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
  const noteToKeep = notes.filter((note) => note.title !== title);

  // save the notes back
  saveNotes(noteToKeep);
};

module.exports = {
  addNote,
  removeNote,
};
