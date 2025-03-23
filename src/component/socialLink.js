import { socialLinks } from "../data";

function Social(props) {
  return (
    <ul className={props.class}>
      {socialLinks.map((link) => {
        const { id, url, icon } = link;
        return (
          <li>
            <a key={id} href={url} className="nav-icon">
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Social;
