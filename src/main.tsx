import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import "./index.css";
import NoteContextProvider from "./context/note-context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NoteContextProvider>
      <App />
    </NoteContextProvider>
  </React.StrictMode>
);
