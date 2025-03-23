import ListBar from "./navList";
import Social from "./socialLink";

function Footer() {
  return (
    <footer className="section footer" id="footer">
      <ListBar idName="footer-links" class="footer-link" />
      <Social class={"footer-icons"} />
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer;
