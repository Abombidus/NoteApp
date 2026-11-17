import { Link } from "react-router-dom";
import "./editNote.css";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

function EditNote() {
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
          <input type="text" autoFocus placeholder="Title" />
          <textarea row="28" placeholder="Note details...."></textarea>
        </form>
      </section>
    </div>
  );
}

export default EditNote;
