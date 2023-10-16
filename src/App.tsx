import "./App.css";
import Form from "./components/Form";
import Notes from "./components/Notes";
function App() {
  const handleSumbit = (e: React.FormEvent) => {};
  return (
    <main className="app">
      <Form />
      <Notes />
    </main>
  );
}

export default App;
