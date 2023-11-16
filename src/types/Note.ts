export type Note = {
  id: number;
  title: string;
  priority: string;
  content: string;
};
export type NoteContextProviderProps = {
  children: React.ReactNode;
};
export type NoteContext = {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};
