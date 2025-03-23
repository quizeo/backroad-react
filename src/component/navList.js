import { pageLinks } from "../data";

function ListBar(props) {
  return (
    <ul className={props.idName} id={props.idName}>
      {pageLinks.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <a href={url} className={props.class}>
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default ListBar;
