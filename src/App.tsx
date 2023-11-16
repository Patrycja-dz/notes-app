import "./App.css";
import Notes from "./components/Notes";
import { NoteRecord } from "./interfaces/Note";
import { useState } from "react";
import FormPortal from "./components/FormPortal";
function App() {
  const initialValues = [
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
      content:
        "Croissant gummi bears halvah bear claw liquorice cookie apple pie fruitcake.",
    },
  ];
  const [notes, setNotes] = useState<NoteRecord[]>(initialValues);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <nav className="navbar">
        <FormPortal
          onNotesSubmit={(notes) => {
            setNotes((prevNotes) => {
              return [...prevNotes, notes];
            });
          }}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </nav>
      <main>
        <Notes notes={notes} setNotes={setNotes} showModal={showModal} />
      </main>
    </>
  );
}

export default App;
