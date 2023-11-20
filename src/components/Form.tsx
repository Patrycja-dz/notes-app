import { useNoteContextHook } from "../context/note-context";
import { Note } from "../types/Note";

const Form = ({ onClose }) => {
  // const [title, setNoteTitle] = useState("");
  // const [content, setNoteContent] = useState("");
  // const [notePriority, setNotePriority] = useState("");
  const {
    addNewNote,
    notes,
    setNotes,
    setShowModal,

    selectedNote,
    setSelectedNote,
    setNoteContent,
    setNoteTitle,
    title,
    content,
  } = useNoteContextHook();
  const id = new Date().valueOf();
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    addNewNote({ title, content, id });
    setSelectedNote(null);
    clearInputsAfterSubmission();
    onClose();
  }

  const clearInputsAfterSubmission = () => {
    setNoteTitle("");
    setNoteContent("");
    // setNotePriority("");
  };

  const handleUpdateNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedNote) return;
    const updateNote: Note = {
      id: selectedNote.id,
      title: title,
      content: content,
    };

    const updateNotesList = notes.map((note) =>
      note.id === selectedNote.id ? updateNote : note
    );

    setNotes(updateNotesList);
    clearInputsAfterSubmission();
    setSelectedNote(null);
    setShowModal(false);
  };
  const handleCancel = () => {
    setNoteTitle("");
    setNoteContent("");
    setSelectedNote(null);
  };

  return (
    <div className="form-wrapper">
      <form
        onSubmit={(event) =>
          selectedNote ? handleUpdateNote(event) : handleSubmit(event)
        }
        className="form"
      >
        <button onClick={onClose} className="test">
          X
        </button>

        <input
          type="text"
          placeholder="Title"
          required
          value={title}
          onChange={(e) => {
            setNoteTitle(e.target.value);
          }}
          className="form-field"
        />
        {/* <select
          placeholder="Add priprity"
          value={notePriority}
          onChange={(e) => {
            setNotePriority(e.target.value);
          }}
          className="form-field selected"
        >
          <option value="">-- Add priority --</option>
          <option value="Urgent">Urgent</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
          <option value="None">None</option>
        </select> */}
        <textarea
          placeholder="Note content"
          required
          rows={20}
          className="note-content  form-field"
          value={content}
          onChange={(e) => {
            setNoteContent(e.target.value);
          }}
        />
        {selectedNote ? (
          <div>
            <button type="submit">Edit note</button>
            <button onClick={() => handleCancel}>Cancel</button>
          </div>
        ) : (
          <button type="submit" className="btn">
            Add note
          </button>
        )}
      </form>
    </div>
  );
};

export default Form;
