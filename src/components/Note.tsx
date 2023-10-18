const Note = ({ title, text, id, priority }) => {
  return (
    <div className="note-item" id={id}>
      <div className="note-header">
        <button className="note-remove">X</button>
      </div>
      <h2 className="note-heading">{title}</h2>

      <p className="note-content">{text}</p>
      <p>{priority}</p>
    </div>
  );
};

export default Note;
