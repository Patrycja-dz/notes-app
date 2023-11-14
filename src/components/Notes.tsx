import Note from "./Note";
// import { useState } from "react";
// import { NoteRecord } from "../interfaces/Note";

const Notes = ({ notes, setNotes, testValue }) => {
  const deletNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };
  // const editNote = (notes) => {
  //   console.log("test");
  //   console.log(notes.content);
  // };
  const notesElement = notes.map((n) => (
    <Note
      onDeleteButtonClick={() => deletNote(n.id)}
      title={n.title}
      text={n.content}
      priority={n.priority}
      key={n.id}
      id={n.id}
      onEditClick={() => testValue(n)}
    />
  ));
  return <div className="notes-container">{notesElement}</div>;
};

export default Notes;
