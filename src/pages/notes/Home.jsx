import "./home.css";
import NoteItem from "../../components/note-item/NoteItem";
import { CiSearch } from "react-icons/ci";
import { BsPlusLg } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";

function Notes({ noteBox }) {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNote, setFilteredNote] = useState(noteBox);

  const navigate = useNavigate();

  function searchNote() {
    setFilteredNote(
      noteBox.filter((note) => {
        if (note.title.toLowerCase().match(text.toLowerCase())) {
          return note;
        }
      }),
    );
  }

  useEffect(() => {
    searchNote;
  }, [text]);

  return (
    <div>
      <section>
        <header className="note-header">
          {!showSearch ? <h2>My Notes</h2> : ""}
          {showSearch ? (
            <input
              type="text"
              autoFocus
              placeholder="keywords..."
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                searchNote(e);
              }}
            />
          ) : (
            ""
          )}
          <button
            className="btn"
            id="search-btn"
            onClick={() => {
              setShowSearch((prev) => !prev);
            }}
          >
            {showSearch ? <GrClose /> : <CiSearch />}
          </button>
        </header>

        <div className="container">
          {filteredNote.map(({ id, title, details, date }) => {
            return (
              <NoteItem
                key={id}
                id={id}
                date={date}
                title={title}
                details={details}
              />
            );
          })}
        </div>

        <button
          className="btn add-btn"
          onClick={() => {
            navigate("/new-note");
          }}
        >
          <BsPlusLg />
        </button>
      </section>
    </div>
  );
}

export default Notes;
