import React, { createContext, useContext, useState } from "react";
import { initialValues } from "../utils/initialValues";
import { Note, NoteContextProviderProps, NoteContext } from "../types/Note";

export const NoteAppContext = createContext<NoteContext | null>(null);
export default function NoteContextProvider({
  children,
}: NoteContextProviderProps) {
  const [notes, setNotes] = useState<Note[] | void[]>(initialValues);
  const [showModal, setShowModal] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [title, setNoteTitle] = useState("");
  const [content, setNoteContent] = useState("");

  const addNewNote = (note) => {
    console.log(notes);
    setNotes([...notes, note]);
    console.log(notes);
  };
  const handleNoteClick = (note: Note) => {
    setShowModal(true);
    setSelectedNote(note);
    setNoteTitle(note.title);
    setNoteContent(note.content);
  };

  return (
    <NoteAppContext.Provider
      value={{
        notes,
        setNotes,
        showModal,
        setShowModal,
        addNewNote,
        handleNoteClick,
        selectedNote,
        setSelectedNote,
        content,
        setNoteContent,
        title,
        setNoteTitle,
      }}
    >
      {children}
    </NoteAppContext.Provider>
  );
}

export function useNoteContextHook() {
  const context = useContext(NoteAppContext);
  if (!context) {
    throw new Error(
      "useNoteContextHoook must be used within a NoteContextProvider"
    );
  }
  return context;
}
