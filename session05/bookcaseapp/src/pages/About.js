import { Link } from "react-router-dom";
import "./styles.css";


const about = (props) => {
  return (
    <div className="header">
      <div className="page">
        <h1>Welcome to Veronica's bookcase app</h1>
        <p class="aboutme">
        The following application was created by me,<a href="https://www.linkedin.com/in/vglamb8/">Veronica Goncalves Lamb!</a>
        <br></br>
        This bookcase app displays a list of books that a user can
        save to a local bookcase.<br></br>
        Click on the "Add to Bookcase " button to add a book to your personal bookcase.<br></br>
        Use the search bar to find the latest books by name, author
        or description
        </p>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default about;
