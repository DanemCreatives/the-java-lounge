import "./mobile-menu.style.scss";
import { ReactComponent as Close } from "../../assets/images/svgs/x.svg";
import Menu from "../Menu/menu.component";
import CustomButton from "../../objects/CustomButton/custom-button.object";
import LinkIcon from "../../objects/LinkIcon/link-icon.object";
import { useLocation } from "react-router-dom";

const MobileMenu = ({ handleMobileMenu, mobileMenu }) => {
  const location = useLocation();
  return (
    <div className={`c-mobile-menu ` + (mobileMenu ? "active" : "")}>
      <div className="c-mobile-menu__content">
        <div className="c-mobile-menu__head">
          <Close onClick={() => handleMobileMenu(false)} />
        </div>
        <Menu type="main" />
        <CustomButton styleType="primary" text="Buy Now" to="shop" />
        <div className="c-mobile-menu__personal">
          <LinkIcon to="/login" type="login" text="Login" />
          <LinkIcon to={location.pathname} type="cart" text="Cart" />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
