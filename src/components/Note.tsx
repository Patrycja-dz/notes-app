const Note = ({ title, text, priority, id, onDeleteButtonClick }) => {
  return (
    <div className="cuttoff-text" key={id}>
      <div className="note-header">
        <p>{priority}</p>
        <button className="note-remove" onClick={onDeleteButtonClick}>
          X
        </button>
      </div>
      <h2 className="note-heading">{title}</h2>

      <p className="note-content">{text}</p>

      {/* <button onClick={onEditClick}>Edit</button> */}
      <input type="checkbox" className="expand-note" />
    </div>
  );
};

export default Note;
