export type Note = {
  id?: number;
  title: string;
  // notePriority: string;
  content: string;
};
export type NoteContextProviderProps = {
  children: React.ReactNode;
};
export type NoteContext = {
  notes: Note[] | void[];
  setNotes: React.Dispatch<React.SetStateAction<Note[] | void[]>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  // editNote: boolean;
  // setEditNote: React.Dispatch<React.SetStateAction<boolean>>;
  addNewNote: (note: Note) => void;
  selectedNote: Note | null;
  setSelectedNote: React.Dispatch<React.SetStateAction<Note | null>>;
  handleNoteClick: (note: Note) => void;
  title: string;
  setNoteTitle: React.Dispatch<React.SetStateAction<string>>;
  content: string;
  setNoteContent: React.Dispatch<React.SetStateAction<string>>;
};
