import { memo } from "react";
import { useNoteContextHook } from "../context/note-context";
import Note from "./Note";

const Notes = () => {
  const { showModal, notes } = useNoteContextHook();
  console.log(notes, "notes");
  const NoteMemo = memo(Note);
  const notesElement = notes.map(
    (n) =>
      !showModal && (
        <NoteMemo
          title={n.title}
          text={n.content}
          priority={n.priority}
          key={n.id}
          id={n.id}
          note={n}
        />
      )
  );

  return <div className="notes-container">{notesElement}</div>;
};

export default Notes;
