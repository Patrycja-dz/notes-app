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
  const [notes, setNotes] = useState<NoteRecord[]>(initialValues);
  const [selectedNote, setSelectedNote] = useState<NoteRecord[] | null>(null);

  // const handleNoteClick = (note: NoteRecord) => {
  //   setSelectedNote(note);
  //   setNoteTitle(note.title);
  //   setNotePriority(note.priority);
  //   setNoteContent(noteContent);
  // };
  const editNote = (note) => {
    console.log("test");
    setSelectedNote(note);
  };

  return (
    <main className="app">
      <Form
        onNotesSubmit={(notes) => {
          setNotes((prevNotes) => {
            return [...prevNotes, notes];
          });
        }}
        onNotesEdit={({ notes }) => {
          setSelectedNote(notes);
        }}
        selectedNote={selectedNote}
        notes={notes}
      />
      <Notes
        notes={notes}
        setNotes={setNotes}
        testValue={(selectedNote) => {
          editNote(selectedNote);
        }}
      />
    </main>
  );
}

export default App;
