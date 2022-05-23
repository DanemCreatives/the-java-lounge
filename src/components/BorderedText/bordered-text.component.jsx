import "./bordered-text.style.scss";
import HeaderIcon from "../../objects/HeaderIcon/header-icon.object";
import CustomButton from "../../objects/CustomButton/custom-button.object";
import { AnimationOnScroll } from "react-animation-on-scroll";

const BorderedText = ({ title, children, icon, link, linkText }) => {
  return (
    <div className="c-bordered-text">
      <AnimationOnScroll animateIn="active">
        <div className="c-bordered-text__inner">
          <div className="c-bordered-text__textbox">
            <HeaderIcon type={icon}>{title}</HeaderIcon>
            <AnimationOnScroll animateIn="animate__fadeIn" delay={300}>
              <div className="c-bordered-text__copy">{children}</div>
              {linkText && (
                <CustomButton styleType="primary" text={linkText} to={link} />
              )}
            </AnimationOnScroll>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default BorderedText;
