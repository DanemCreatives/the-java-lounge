import "./whole-image.style.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Fragment } from "react";

const WholeImage = ({ src, alt, className, withFrame, withFade }) => {
  let innerHTML = (
    <Fragment>
      {withFrame && <span></span>}
      <img src={src} alt={alt} />
      {withFrame && <span></span>}
    </Fragment>
  );

  if (withFade) {
    innerHTML = (
      <Fragment>
        <AnimationOnScroll animateIn="animate__fadeIn" duration={1.5}>
          {innerHTML}
        </AnimationOnScroll>
      </Fragment>
    );
  }
  return (
    <div className={className ? className + " c-whole-image" : "c-whole-image"}>
      {innerHTML}
    </div>
  );
};

export default WholeImage;
