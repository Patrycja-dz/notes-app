import "./App.css";
import Notes from "./components/Notes";
import { useState } from "react";
import FormPortal from "./components/FormPortal";
import { useNoteContextHook } from "./context/note-context";
function App() {
  const { notes, setNotes } = useNoteContextHook();
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
