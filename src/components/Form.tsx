import { useState } from "react";

const Form = ({ onNotesSubmit }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [notePriority, setNotePriority] = useState("");
  function handleSubmit(event) {
    event.preventDefault();

    const title = noteTitle;
    const content = noteContent;
    const priority = notePriority;
    onNotesSubmit({ title, content, priority });
  }
  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          required
          value={noteTitle}
          onChange={(e) => {
            setNoteTitle(e.target.value);
          }}
        />
        <select
          placeholder="Add priprity"
          value={notePriority}
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
          value={noteContent}
          onChange={(e) => {
            setNoteContent(e.target?.value);
          }}
        />
        <button type="submit">Add note</button>
      </form>
    </div>
  );
};

export default Form;
