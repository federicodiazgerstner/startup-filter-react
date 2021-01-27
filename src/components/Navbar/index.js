import Search from "../Search";

function Navbar(props) {
  function handleChange(inputvalue) {
    props.handleCallback(inputvalue);
  }

  return (
    <nav className="navbar">
      <p className="nav-title">STARTUPS ARGENTINAS</p>
      <Search handleCallback={handleChange} />
    </nav>
  );
}

export default Navbar;
