import "./custom-button.style.scss";

import { Link } from "react-router-dom";

const CustomButton = ({ styleType, text, to, type }) => {
  const inner = <span>{text}</span>;
  let markup;
  if (to) {
    markup = (
      <Link to={to} className={`o-custom-button o-custom-button--` + styleType}>
        {inner}
      </Link>
    );
  } else {
    markup = (
      <button
        className={`o-custom-button o-custom-button--` + styleType}
        type={type}
      >
        {inner}
      </button>
    );
  }
  return markup;
};

export default CustomButton;
