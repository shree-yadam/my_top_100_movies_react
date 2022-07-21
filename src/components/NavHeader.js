function NavHeader() {
  return(
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <div className="navbar-brand">Navbar</div>
        <div>
          <button className="btn btn-outline-success" type="submit">Register</button>
          <button className="btn btn-outline-success" type="submit">Login</button>
        </div>
      </div>
    </nav>
  );

}

export default NavHeader;