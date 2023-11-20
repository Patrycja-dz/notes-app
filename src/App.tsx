import "./App.css";
import Notes from "./components/Notes";
import FormPortal from "./components/FormPortal";

function App() {
  return (
    <>
      <nav className="navbar">
        <FormPortal />
      </nav>
      <main>
        <Notes />
      </main>
    </>
  );
}

export default App;
