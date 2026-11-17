import { Link } from "react-router-dom";
import "./newNote.css";
import { IoIosArrowBack } from "react-icons/io";

function NewNote() {
  return (
    <div>
      <section>
        <header className="new-note-header">
          <Link to="/" className="btn">
            <IoIosArrowBack />
          </Link>
          <button className="btn lg primary">Save</button>
        </header>
      </section>
    </div>
  );
}

export default NewNote;
