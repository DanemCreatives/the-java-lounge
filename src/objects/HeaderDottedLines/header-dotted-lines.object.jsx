import "./header-dotted-lines.style.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";

const HeaderDottedLines = ({ children, className }) => {
  return (
    <AnimationOnScroll animateIn="active">
      <h2 className="o-header-dotted-lines">{children}</h2>
    </AnimationOnScroll>
  );
};

export default HeaderDottedLines;
