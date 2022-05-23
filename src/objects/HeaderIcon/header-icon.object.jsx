import "./header-icon.style.scss";
import { ReactComponent as CoffeeIcon } from "../../assets/images/svgs/coffee-icon.svg";
import { ReactComponent as CoffeeBeanIcon } from "../../assets/images/svgs/coffee-bean-icon.svg";
import { ReactComponent as HoldingBeansIcon } from "../../assets/images/svgs/beans.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";

const HeaderIcon = ({ children, type }) => {
  let icon;
  switch (type) {
    case "cup":
      icon = <CoffeeIcon className="o-header-icon__image" />;
      break;
    case "beans":
      icon = <HoldingBeansIcon className="o-header-icon__image" />;
      break;
    default:
      icon = <CoffeeBeanIcon className="o-header-icon__image" />;
  }
  return (
    <AnimationOnScroll animateIn="active" duration={1} initiallyVisible={true}>
      <div className="o-header-icon">
        {icon}
        <h2 className="o-header-icon__text">{children}</h2>
      </div>
    </AnimationOnScroll>
  );
};

export default HeaderIcon;
