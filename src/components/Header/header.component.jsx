import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./header.style.scss";
import Menu from "../Menu/menu.component";
import CustomButton from "../../objects/CustomButton/custom-button.object";
import { Container } from "../../grid/TailwindGrid/tailwind-grid.component";
import { ReactComponent as Logo } from "../../assets/images/svgs/logo.svg";
import { ReactComponent as Cart } from "../../assets/images/svgs/cart.svg";
import { ReactComponent as User } from "../../assets/images/svgs/user.svg";

const Header = ({ type, handleMobileMenu }) => {
  const location = useLocation();
  return (
    <div
      className={`c-header c-header--${
        location.pathname === "/" ? type : "fill"
      }`}
    >
      <Container className="c-header__inner">
        <div className="c-header__leftside">
          <Menu type="main" />
          <div
            className="c-header__mobile"
            onClick={() => handleMobileMenu(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="c-header__center">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="c-header__rightside">
          <CustomButton styleType="primary" text="Buy Now" to="shop" />
          <Link to="/login" className="c-header__icon c-header__icon--login">
            <User />
          </Link>
          <div className="c-header__icon c-header__icon--cart">
            <Cart />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
