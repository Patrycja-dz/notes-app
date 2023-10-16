import { Notes } from "../interfaces/Note";
import { useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState<Notes[]>([
    {
      id: 1,
      title: "Eat dinner",
      priority: "None",
      content: "eat delicious dinner with family",
    },
    ,
    {
      id: 2,
      title: "Sleep",
      priority: "High",
      content: "Sleep ...",
    },
  ]);
  return (
    <div className="notes-container">
      <div className="note-item">
        <div className="note-header">
          <button className="note-remove">X</button>
        </div>
        <h2 className="note-heading">napisać email</h2>

        <p className="note-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet minus
          tenetur ut repellat adipisci ea voluptate reprehenderit sunt soluta,
          sed laboriosam autem a architecto ullam nesciunt eum, inventore
          doloribus tempora.
        </p>
      </div>
      <div className="note-item">
        <div className="note-header">
          <button className="note-remove">X</button>
        </div>
        <h2 className="note-heading">napisać email</h2>

        <p className="note-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet minus
          tenetur ut repellat adipisci ea voluptate reprehenderit sunt soluta,
          sed laboriosam autem a architecto ullam nesciunt eum, inventore
          doloribus tempora.
        </p>
      </div>
      <div className="note-item">
        <div className="note-header">
          <button className="note-remove">X</button>
        </div>
        <h2 className="note-heading">napisać email</h2>

        <p className="note-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet minus
          tenetur ut repellat adipisci ea voluptate reprehenderit sunt soluta,
          sed laboriosam autem a architecto ullam nesciunt eum, inventore
          doloribus tempora.
        </p>
      </div>
      <div className="note-item">
        <div className="note-header">
          <button className="note-remove">X</button>
        </div>
        <h2 className="note-heading">napisać email</h2>

        <p className="note-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet minus
          tenetur ut repellat adipisci ea voluptate reprehenderit sunt soluta,
          sed laboriosam autem a architecto ullam nesciunt eum, inventore
          doloribus tempora.
        </p>
      </div>
    </div>
  );
};

export default Notes;
