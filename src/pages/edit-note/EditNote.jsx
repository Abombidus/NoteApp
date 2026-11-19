import { Link, useNavigate, useParams } from "react-router-dom";
import "./editNote.css";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import { v4 as uuid } from "uuid";

import { UseCreateDate } from "../../components/note-item/UseCreateDate";

// function EditNote({ noteBox, setNoteBox }) {
function EditNote({ noteBox, setNoteBox }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const editTime = UseCreateDate();

  const singleNote = noteBox.find((note) => {
    return note.id == id;
  });
  console.log(singleNote);

  const [title, setTitle] = useState(singleNote.title);
  const [details, setDetails] = useState(singleNote.details);

  function save(e) {
    e.preventDefault();

    if (title && details) {
      const newObjNote = { ...singleNote, title, details, date: editTime };

      const newStep = noteBox.map((item) => {
        if (item.id == id) {
          item = newObjNote;
        }
        return item;
      });
      setNoteBox(newStep);
    }
    navigate("/");
  }

  function deleteNote() {
    const newNote = noteBox.filter((note) => {
      return note.id != id;
    });
    setNoteBox(newNote);
    navigate("/");
  }

  return (
    <div>
      <section>
        <header className="edit-note-header">
          <Link to="/" className="btn">
            <IoIosArrowBack />
          </Link>
          <button
            className="btn lg primary"
            onClick={(e) => {
              save(e);
            }}
          >
            Save
          </button>
          <button className="btn lg danger" onClick={deleteNote}>
            <RiDeleteBin6Line />
          </button>
        </header>
        {/* <h2 className="text-head">Edit note</h2> */}

        <form
          className="form"
          onSubmit={(e) => {
            save(e);
          }}
        >
          <input
            type="text"
            autoFocus
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            row="28"
            placeholder="Note details...."
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          ></textarea>
        </form>
      </section>
    </div>
  );
}

export default EditNote;
