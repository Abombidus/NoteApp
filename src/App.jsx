import { Route, Routes } from "react-router-dom";
import Home from "./pages/notes/Home";
import NewNote from "./pages/new-note/NewNote";
import EditNote from "./pages/edit-note/EditNote";
import { notes } from "./Data";
import { useState } from "react";

function App() {
  const [noteBox, setNoteBox] = useState(notes);

  return (
    <>
      <div id="app">
        <Routes>
          <Route path="/" element={<Home noteBox={noteBox} />} />
          <Route path="/new-note" element={<NewNote />} />
          <Route path="/edit-note/:id" element={<EditNote />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
