const Note = ({ title, text, priority, id, onDeleteButtonClick }) => {
  return (
    <div className="note-item" key={id}>
      <div className="note-header">
        <button className="note-remove" onClick={onDeleteButtonClick}>
          X
        </button>
      </div>
      <h2 className="note-heading">{title}</h2>

      <p className="note-content">{text}</p>
      <p>{priority}</p>
    </div>
  );
};

export default Note;
