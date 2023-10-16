const NoteContent = () => {
  return (
    <textarea
      placeholder="Note content"
      required
      rows={20}
      className="note-content"
    />
  );
};

export default NoteContent;
