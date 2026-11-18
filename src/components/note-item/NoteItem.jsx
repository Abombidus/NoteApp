import { Link } from "react-router-dom";

function NoteItem({ id, date, title }) {
  return (
    <div>
      <Link to={`/edit-note/${id}`} className="note">
        {/* <h4>{title.length > 55 ? title.substr(0, 50) + ` ...` : title}</h4> */}
        <h4>{title.length > 55 ? title.substr(0, 50) + "...." : title}</h4>
        <p>{date}</p>
      </Link>
    </div>
  );
}

export default NoteItem;
