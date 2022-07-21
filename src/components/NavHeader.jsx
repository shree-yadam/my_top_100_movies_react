import { Link } from "react-router-dom";

function NavHeader() {
  return(
    <nav className="navbar bg-dark bg-secondary text-white">
      <div className="container-fluid">
        <div className="navbar-brand">My Top 100 Movies</div>
        <div>
          <Link to="/register">
            <button className="btn btn-outline-success" type="submit">Register</button>
          </Link>
          <Link to="/login">
            <button className="btn btn-outline-success" type="submit">Login</button>
          </Link>
        </div>
      </div>
    </nav>
  );

}

export default NavHeader;