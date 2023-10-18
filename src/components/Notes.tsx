import Note from "./Note";
const Notes = ({ notes }) => {
  const notesElement = notes.map((n) => (
    <Note title={n.title} text={n.content} id={n.id} priority={n.priority} />
  ));
  return <div className="notes-container">{notesElement}</div>;
};

export default Notes;
