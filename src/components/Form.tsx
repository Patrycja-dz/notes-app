import React, { useState } from "react";

const Form = ({ onNotesSubmit, notes, onNotesEdit, selectedNote }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [notePriority, setNotePriority] = useState("");
  // const noteExample = {
  //   noteTitle: "",
  //   noteContent: "",
  //   notePriority: "",
  // };
  const title = noteTitle;
  const content = noteContent;
  const priority = notePriority;
  const id = new Date().valueOf();
  const newNotes = { title, content, priority, id };
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    onNotesSubmit(newNotes);
    clearInputsAfterSubmission();
  }

  const clearInputsAfterSubmission = () => {
    setNoteTitle("");
    setNoteContent("");
    setNotePriority("");
  };
  const handleEditClick = (e) => {
    onNotesEdit(
      {
        ...notes,
        content: e.target.value,
        title: e.target.value,
        priority: e.target.value,
      },
      console.log(content)
    );
  };
  const cancel = () => {
    console.log("cancel");
    // setNoteTitle("");
    // setNoteContent("");
    // setNotePriority("");
  };

  return (
    <div className="form-wrapper">
      {/* <h1>To do</h1>
      <p>{notes.length}</p> */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          required
          value={selectedNote ? selectedNote.title : noteTitle}
          onChange={(e) => {
            setNoteTitle(e.target.value);
          }}
        />
        <select
          placeholder="Add priprity"
          value={selectedNote ? selectedNote.priority : notePriority}
          onChange={(e) => {
            setNotePriority(e.target.value);
          }}
        >
          <option value="">-- Add priority --</option>
          <option value="urgent">Urgent</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
          <option value="none">None</option>
        </select>
        <textarea
          placeholder="Note content"
          required
          rows={20}
          className="note-content"
          value={selectedNote ? selectedNote.content : noteContent}
          onChange={(e) => {
            setNoteContent(e.target?.value);
          }}
        />

        {/* <button onClick={handleEditClick}>Edit</button> */}
      </form>
      {selectedNote ? (
        <button type="button" onClick={handleEditClick}>
          Save
        </button>
      ) : (
        <button type="submit">Add note</button>
      )}

      {selectedNote && <button onClick={cancel}>Cancel</button>}
    </div>
  );
};

export default Form;
