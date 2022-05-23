import "./link-underline.style.scss";
import { Link } from "react-router-dom";

const LinkUnderline = ({ to, text }) => {
  return (
    <Link to={to} className="o-link-underline">
      {text}
    </Link>
  );
};

export default LinkUnderline;
