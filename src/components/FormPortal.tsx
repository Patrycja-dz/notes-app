// import { useState } from "react";
import { createPortal } from "react-dom";
import Form from "./Form";
const FormPortal = ({ onNotesSubmit, setShowModal, showModal }) => {
  //   const [showModal, setShowModal] = useState(false);
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
