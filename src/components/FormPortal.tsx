// import { useState } from "react";
import { createPortal } from "react-dom";
import { useNoteContextHook } from "../context/note-context";
import Form from "./Form";
const FormPortal = ({ onNotesSubmit }) => {
  //   const [showModal, setShowModal] = useState(false);
  const { showModal, setShowModal } = useNoteContextHook();
  return (
    <>
      {!showModal && (
        <button onClick={() => setShowModal(true)}>+ Add new note</button>
      )}
      {showModal &&
        createPortal(
          <Form
            onNotesSubmit={onNotesSubmit}
            onClose={() => setShowModal(false)}
          />,
          document.body
        )}
    </>
  );
};

export default FormPortal;
