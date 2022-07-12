import "./google-button.style.scss";

import { ReactComponent as Google } from "../../assets/images/svgs/google.svg";

const GoogleButton = ({ onClick }) => {
  return (
    <div className="o-google-button" onClick={onClick}>
      <Google />
      <span>Sign in with Google</span>
    </div>
  );
};

export default GoogleButton;
