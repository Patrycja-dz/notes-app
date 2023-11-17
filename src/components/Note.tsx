import { useNoteContextHook } from "../context/note-context";

const Note = ({ title, text, priority, id }) => {
  const { setNotes, setShowModal } = useNoteContextHook();

  const handleEditNoteClick = () => {
    console.log("tets", id);
    setShowModal(true);
  };

  const deletNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };
  return (
    <div className="cuttoff-text" key={id}>
      <div className="note-header">
        <p>{priority}</p>
        <button className="note-remove" onClick={() => deletNote(id)}>
          X
        </button>
      </div>
      <h2 className="note-heading">{title}</h2>

      <p className="note-content">{text}</p>

      <button onClick={() => handleEditNoteClick()}>Edit</button>
      {/* <input type="checkbox" className="expand-note" /> */}
    </div>
  );
};

export default Note;
