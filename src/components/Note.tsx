import { useNoteContextHook } from "../context/note-context";

const Note = ({ title, text, id, note, priority }) => {
  const { setNotes, handleNoteClick } = useNoteContextHook();

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <div className="cuttoff-text" key={id}>
      <div className="note-header">
        <p>{priority}</p>
        <button className="note-remove" onClick={() => deleteNote(id)}>
          X
        </button>
      </div>
      <h2 className="note-heading">{title}</h2>

      <p className="note-content">{text}</p>

      <button onClick={() => handleNoteClick(note)} className="edit-button">
        Edit
      </button>
    </div>
  );
};

export default Note;
