import { Note } from "../interfaces/Note";
import { useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "Eat dinner",
      priority: "None",
      content: "eat delicious dinner with family",
    },

    {
      id: 2,
      title: "Sleep",
      priority: "High",
      content: "Sleep ...",
    },
    {
      id: 3,
      title: "Shopping",
      priority: "Medium",
      content: "Butter,salad,water,bread ...",
    },
  ]);

  return (
    <div className="notes-container">
      {notes.map((note) => {
        return (
          <div className="note-item" key={note.id}>
            <div className="note-header">
              <button className="note-remove">X</button>
            </div>
            <h2 className="note-heading">{note.title}</h2>

            <p className="note-content">{note.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
