import { Route, Routes } from "react-router-dom";
import Home from "./pages/notes/Home";
import NewNote from "./pages/new-note/NewNote";
import EditNote from "./pages/edit-note/EditNote";
// import { notes } from "./Data";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [noteBox, setNoteBox] = useState(
    JSON.parse(localStorage.getItem("Notes")) || [],
  );

  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(noteBox));
  }, [noteBox]);

  return (
    <>
      <div id="app">
        <Routes>
          <Route path="/" element={<Home noteBox={noteBox} />} />
          <Route
            path="/new-note"
            element={<NewNote setNoteBox={setNoteBox} />}
          />
          <Route
            path="/edit-note/:id"
            element={<EditNote noteBox={noteBox} setNoteBox={setNoteBox} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
