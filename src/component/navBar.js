import logo from "../images/logo.svg";
import Social from "./socialLink";
import ListBar from "./navList";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ListBar idName="nav-links" class="nav-link" />
        <Social class={"nav-icons"} />
      </div>
    </nav>
  );
};

export default Navbar;
