import "./link-icon.style.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Cart } from "../../assets/images/svgs/cart.svg";
import { ReactComponent as User } from "../../assets/images/svgs/user.svg";

const LinkIcon = ({ type, text, to }) => {
  return (
    <Link to={to} className="o-link-icon">
      {type === "cart" && <Cart />}
      {type === "login" && <User />}
      <span className="o-link-icon__text">{text}</span>
    </Link>
  );
};

export default LinkIcon;
