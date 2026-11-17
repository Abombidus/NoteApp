import { Link } from "react-router-dom";
import "./newNote.css";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";

function NewNote() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  function changeMessage(e) {
    setMessage(e.target.value);
  }
  return (
    <div>
      <section>
        <header className="new-note-header">
          <Link to="/" className="btn">
            <IoIosArrowBack />
          </Link>
          <h2>New note</h2>
          <button className="btn lg primary">Save</button>
        </header>

        <form className="form">
          <input
            value={title}
            type="text"
            autoFocus
            placeholder="Title"
            onChange={(e) => {
              changeTitle(e);
            }}
          />
          <textarea
            value={message}
            row="28"
            placeholder="Note details...."
            onChange={(e) => {
              changeMessage(e);
            }}
          ></textarea>
        </form>
      </section>
    </div>
  );
}

export default NewNote;
