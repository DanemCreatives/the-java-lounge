import "./hero.style.scss";
import Video from "../../objects/Video/video.object";
import CoffeeVideo from "../../assets/video/coffee-cream.mp4";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Parallax } from "react-scroll-parallax";

const Hero = () => {
  return (
    <div className="c-hero">
      <Parallax className="h-full" speed={-40}>
        <div className="c-hero__background">
          <Video src={CoffeeVideo} />
        </div>
      </Parallax>
      <div className="c-hero__textbox">
        <div className="overflow-hidden">
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            delay={750}
            animateOnce={true}
          >
            <h1 className="c-hero__header">
              Immaculate Execution. <span>Refined Selection.</span> Exquisite
              Quality.
            </h1>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Hero;
