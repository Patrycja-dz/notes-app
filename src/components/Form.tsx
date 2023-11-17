import React, { useState } from "react";

const Form = ({ onNotesSubmit, onClose }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [notePriority, setNotePriority] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    // const title = noteTitle;
    // const content = noteContent;
    // const priority = notePriority;
    const id = new Date().valueOf();
    const newNotes = { noteTitle, noteContent, notePriority, id };
    onNotesSubmit(newNotes);
    clearInputsAfterSubmission();
    onClose();
  }

  const clearInputsAfterSubmission = () => {
    setNoteTitle("");
    setNoteContent("");
    setNotePriority("");
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="form">
        <button onClick={onClose} className="test">
          X
        </button>

        <input
          type="text"
          placeholder="Title"
          required
          value={noteTitle}
          onChange={(e) => {
            setNoteTitle(e.target.value);
          }}
          className="form-field"
        />
        <select
          placeholder="Add priprity"
          value={notePriority}
          onChange={(e) => {
            setNotePriority(e.target.value);
          }}
          className="form-field"
        >
          <option value="">-- Add priority --</option>
          <option value="Urgent">Urgent</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
          <option value="None">None</option>
        </select>
        <textarea
          placeholder="Note content"
          required
          rows={20}
          className="note-content  form-field"
          value={noteContent}
          onChange={(e) => {
            setNoteContent(e.target?.value);
          }}
        />
        <button type="submit" className="btn">
          Add note
        </button>
      </form>
    </div>
  );
};

export default Form;
