import HeaderDottedLines from "../../objects/HeaderDottedLines/header-dotted-lines.object";
import "./featured-text.style.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";

const FeaturedText = () => {
  return (
    <div className="c-featured-text">
      <div className="c-featured-text__textbox">
        <HeaderDottedLines>
          The <span>Connoisseur's</span> Coffee
        </HeaderDottedLines>
        <AnimationOnScroll animateIn="animate__fadeIn" delay={250}>
          <div className="c-featured-text__copy">
            <p>
              The Java Lounge features whole bean coffee varieties that have
              been hand-selected to create the luxurious, versatile collection
              you deserve. Fresh coffee is the last thing you should have to
              worry about. That's why all of our coffee is roasted-to-order, in
              small batches, to ensure quality and consistency of flavor.
            </p>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default FeaturedText;
