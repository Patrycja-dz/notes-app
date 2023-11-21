import { useNoteContextHook } from "../context/note-context";
import { Note } from "../types/Note";

const Form = ({ onClose }) => {
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
    priority,
    setPriority,
  } = useNoteContextHook();

  const id = new Date().valueOf();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    addNewNote({ title, content, id, priority });
    setSelectedNote(null);
    clearInputsAfterSubmission();
    onClose();
  }

  const clearInputsAfterSubmission = () => {
    setNoteTitle("");
    setNoteContent("");
    setPriority("");
  };

  const handleUpdateNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedNote) return;
    const updateNote: Note = {
      id: selectedNote.id,
      title: title,
      content: content,
      priority: priority,
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
    setPriority("");
    setSelectedNote(null);
  };

  const handleNoteTitleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNoteTitle(e.target.value);
  };
  const handleNoteContentChange = (
    e: React.DetailedHTMLProps<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      | HTMLTextAreaElement
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEventHandler<HTMLTextAreaElement>
    >
  ): void => {
    setNoteContent(e?.target.value);
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
          onChange={handleNoteTitleChange}
          className="form-field"
        />
        <select
          placeholder="Add priprity"
          value={priority}
          onChange={(e) => {
            setPriority(e.target.value);
          }}
          className="form-field selected"
          defaultValue="Low"
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
          value={content}
          onChange={handleNoteContentChange}
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
