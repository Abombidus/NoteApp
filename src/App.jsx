import { Route, Routes } from "react-router-dom";
import Home from "./pages/notes/Home";
import NewNote from "./pages/new-note/NewNote";
import EditNote from "./pages/edit-note/EditNote";

function App() {
  return (
    <>
      <div id="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-note" element={<NewNote />} />
          <Route path="/edit-note/:id" element={<EditNote />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
