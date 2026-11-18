import { Link, useParams } from "react-router-dom";
import "./editNote.css";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
// import { useState } from "react";

// function EditNote({ noteBox, setNoteBox }) {
function EditNote({ noteBox, setNoteBox }) {
  const { id } = useParams();
  const searchNote = noteBox.find((note) => {
    note.id == id;
  });
  console.log(searchNote.title);

  // const [title, setTitle] = useState(searchNote.title);
  // const [details, setDetails] = useState(searchNote.details);
  return (
    <div>
      <section>
        <header className="edit-note-header">
          <Link to="/" className="btn">
            <IoIosArrowBack />
          </Link>
          <button className="btn lg primary">Save</button>
          <button className="btn lg danger">
            <RiDeleteBin6Line />
          </button>
        </header>
        {/* <h2 className="text-head">Edit note</h2> */}

        <form className="form">
          <input
            type="text"
            autoFocus
            placeholder="Title"
            // value={title}
            // onChange={(e) => {
            //   setTitle(e.target.value);
            // }}
          />
          <textarea
            row="28"
            placeholder="Note details...."
            // value={details}
            // onChange={(e) => {
            //   setDetails(e.target.value);
            // }}
          ></textarea>
        </form>
      </section>
    </div>
  );
}

export default EditNote;
