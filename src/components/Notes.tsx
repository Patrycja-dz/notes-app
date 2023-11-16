import Note from "./Note";
const Notes = ({ notes, setNotes, showModal }) => {
  const deletNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const notesElement = notes.map(
    (n) =>
      !showModal && (
        <Note
          onDeleteButtonClick={() => deletNote(n.id)}
          title={n.title}
          text={n.content}
          priority={n.priority}
          key={n.id}
          id={n.id}
        />
      )
  );
  return <div className="notes-container">{notesElement}</div>;
};

export default Notes;
