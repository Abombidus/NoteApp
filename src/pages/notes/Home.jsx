import "./home.css";
import NoteItem from "../../components/note-item/NoteItem";
import { CiSearch } from "react-icons/ci";
import { notes } from "../../Data";
import { BsPlusLg } from "react-icons/bs";

function Notes() {
  return (
    <div>
      <section>
        <header className="note-header">
          <h2>My Notes</h2>
          <input type="text" autoFocus placeholder="keywords..." />
          <button className="btn" id="search-btn">
            <CiSearch />
          </button>
        </header>

        <div className="container">
          {notes.map(({ id, title, details, date }) => {
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

        <button className="btn add-btn">
          <BsPlusLg />
        </button>
      </section>
    </div>
  );
}

export default Notes;
