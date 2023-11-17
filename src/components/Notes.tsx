import { useNoteContextHook } from "../context/note-context";
import Note from "./Note";
const Notes = ({ notes }) => {
  const { showModal } = useNoteContextHook();

  const notesElement = notes.map(
    (n) =>
      !showModal && (
        <Note
          title={n.noteTitle}
          text={n.noteContent}
          priority={n.notePriority}
          key={n.id}
          id={n.id}
        />
      )
  );
  return <div className="notes-container">{notesElement}</div>;
};

export default Notes;
