import { createPortal } from "react-dom";
import { useNoteContextHook } from "../context/note-context";
import Form from "./Form";
const FormPortal = () => {
  const { showModal, setShowModal } = useNoteContextHook();
  return (
    <>
      {!showModal && (
        <button onClick={() => setShowModal(true)}>+ Add new note</button>
      )}
      {showModal &&
        createPortal(
          <Form onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
};

export default FormPortal;
