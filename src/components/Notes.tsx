import { useNoteContextHook } from "../context/note-context";
import Note from "./Note";
const Notes = () => {
  const { showModal, notes } = useNoteContextHook();
  console.log(notes);
  const notesElement = notes.map(
    (n) =>
      !showModal && (
        <Note
          title={n.title}
          text={n.content}
          // priority={n.notePriority}
          key={n.id}
          id={n.id}
          note={n}
        />
      )
  );
  return <div className="notes-container">{notesElement}</div>;
};

export default Notes;
