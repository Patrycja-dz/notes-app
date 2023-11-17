import "./App.css";
import Notes from "./components/Notes";
import FormPortal from "./components/FormPortal";
import { useNoteContextHook } from "./context/note-context";
function App() {
  const { notes, setNotes } = useNoteContextHook();

  return (
    <>
      <nav className="navbar">
        <FormPortal
          onNotesSubmit={(notes) => {
            setNotes((prevNotes) => {
              return [...prevNotes, notes];
            });
          }}
        />
      </nav>
      <main>
        <Notes notes={notes} />
      </main>
    </>
  );
}

export default App;
