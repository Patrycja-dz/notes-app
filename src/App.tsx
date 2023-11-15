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
        "Croissant gummi bears halvah bear claw liquorice cookie apple pie fruitcake. Candy gummies liquorice gingerbread tart danish. Candy sweet roll lemon drops gummi bears sugar plum. Chupa chups oat cake carrot cake gummi bears soufflé bear claw caramels. Cake powder chocolate cake chupa chups caramels. Sweet roll apple pie dragée chocolate bar tiramisu pudding. Toffee cupcake apple pie cake ice cream apple pie. Gummies gingerbread bear claw chupa chups jujubes jelly-o. Lemon drops sweet roll macaroon muffin croissant candy canes brownie. Dragée chupa chups cupcake fruitcake gummies soufflé tiramisu tart ice cream. Candy canes croissant sesame snaps lemon drops sugar plum jelly-o. Ice cream tart cookie muffin cake macaroon pie gummi bears jujubes. Oat cake sugar plum sweet roll sweet caramels chocolate bar gummies tiramisu. Dessert jelly pudding caramels fruitcake wafer apple pie sugar plum sweet.",
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
