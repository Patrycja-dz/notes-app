import "./App.css";
import Form from "./components/Form";
import Notes from "./components/Notes";
import { NoteRecord } from "./interfaces/Note";
import { useState } from "react";
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
      content: "Butter,salad,water,bread ...",
    },
  ];
  const [notes, setNotes] = useState<Note[]>(initialValues);
  return (
    <main className="app">
      <Form
        onNotesSubmit={(notes) => {
          setNotes((prevNotes) => {
            return [...prevNotes, notes];
          });
        }}
        notes={notes}
      />
      <Notes notes={notes} setNotes={setNotes} />
    </main>
  );
}

export default App;
