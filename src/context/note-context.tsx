import React, { createContext, useContext, useState } from "react";
import { initialValues } from "../utils/initialValues";
import { Note, NoteContextProviderProps, NoteContext } from "../types/Note";

export const NoteAppContext = createContext<NoteContext | null>(null);
export default function NoteContextProvider({
  children,
}: NoteContextProviderProps) {
  const [notes, setNotes] = useState<Note[]>(initialValues);
  return (
    <NoteAppContext.Provider value={{ notes, setNotes }}>
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
