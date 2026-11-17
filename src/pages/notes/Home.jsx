import "./home.css";
import NoteItem from "../../components/note-item/NoteItem";
import { CiSearch } from "react-icons/ci";
import { BsPlusLg } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Notes({ noteBox }) {
  const navigate = useNavigate();
  return (
    <div>
      <section>
        <header className="note-header">
          <h2>My Notes</h2>
          {/* <input type="text" autoFocus placeholder="keywords..." /> */}
          <button className="btn" id="search-btn">
            <CiSearch />
          </button>
        </header>

        <div className="container">
          {noteBox.map(({ id, title, details, date }) => {
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
