export const initialValues = [
  {
    id: 1,
    noteTitle: "Eat dinner",
    notePriority: "None",
    noteContent: "eat delicious dinner with family",
  },

  {
    id: 2,
    noteTitle: "Sleep",
    notePriority: "High",
    noteContent: "Sleep ...",
  },
  {
    id: 3,
    noteTitle: "Shopping",
    notePriority: "Medium",
    noteContent:
      "Croissant gummi bears halvah bear claw liquorice cookie apple pie fruitcake.",
  },
];
export const initialState = {
  noteTitle: "",
  notePriority: "",
  noteContent: "",
  id: new Date().valueOf(),
};
