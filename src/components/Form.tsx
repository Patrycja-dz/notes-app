import { useState } from "react";
import Button from "./Button";
import FormField from "./FormField";
import NoteContent from "./NoteContent";
const Form = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [priority, setPriority] = useState();
  return (
    <div className="form-wrapper">
      <FormField type="text" placeholder="Title" />
      <select
        placeholder="Add priprity"
        onChange={(e) => {
          setPriority(e.target.value);
        }}
        value={priority}
      >
        <option value="">-- Add priority --</option>
        <option value="urgent">Urgent</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
        <option value="none">None</option>
      </select>
      <NoteContent />
      <Button />
    </div>
  );
};

export default Form;
