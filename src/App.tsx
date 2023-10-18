import "./App.css";
import Form from "./components/Form";
import Notes from "./components/Notes";
import { Note } from "./interfaces/Note";
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
        onNotesSubmit={(title, content, priority) => {
          // setNotes((prevNotes) => {
          //   return [
          //     {
          //       title,
          //       content,
          //       priority,
          //       id: prevNotes.length + 1,
          //     },
          //     ...prevNotes,
          //   ];
          // });
          setNotes((prevNotes) => {
            return [
              { title, content, id: prevNotes.length + 1, priority },
              ...prevNotes,
            ];
          });
        }}
      />
      <Notes notes={notes} />
    </main>
  );
}

export default App;
