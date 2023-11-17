export type Note = {
  id: number;
  noteTitle: string;
  notePriority: string;
  noteContent: string;
};
export type NoteContextProviderProps = {
  children: React.ReactNode;
};
export type NoteContext = {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  editNote: boolean;
  setEditNote: React.Dispatch<React.SetStateAction<boolean>>;
};
