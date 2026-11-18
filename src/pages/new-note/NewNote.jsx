import "./newNote.css";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { v4 as uuid } from "uuid";

import { UseCreateDate } from "../../components/note-item/UseCreateDate";

function NewNote({ setNoteBox }) {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const currentDate = UseCreateDate();

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  function changeMessage(e) {
    setMessage(e.target.value);
  }

  function sendForm(e) {
    e.preventDefault();
    if (title && message) {
      const noteSchema = {
        id: uuid(),
        title,
        details: message,
        date: currentDate,
      };

      // AJouter le nouvel element dans le tableau
      setNoteBox((prevNote) => {
        return [noteSchema, ...prevNote];
      });

      navigate("/");
    }
  }
  return (
    <div>
      <section>
        <header className="new-note-header">
          <Link to="/" className="btn">
            <IoIosArrowBack />
          </Link>
          <h2>New note</h2>
          <button
            className="btn lg primary"
            onClick={(e) => {
              sendForm(e);
            }}
          >
            Save
          </button>
        </header>

        <form
          className="form"
          onSubmit={() => {
            sendForm();
          }}
        >
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
