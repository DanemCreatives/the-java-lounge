import "./featured-banner.style.scss";
import WholeImage from "../../components/WholeImage/whole-image.component";
import HeaderDropShadow from "../../objects/HeaderDropShadow/header-drop-shadow.object";
import { Container } from "../../grid/TailwindGrid/tailwind-grid.component";
import { Parallax } from "react-scroll-parallax";

const FeaturedBanner = ({ src, title }) => {
  return (
    <div className="c-featured-banner">
      <Parallax className="c-featured-banner__parallax" speed={-40}>
        <WholeImage src={src} />
      </Parallax>
      <Container>
        <div className="c-featured-banner__textbox">
          <HeaderDropShadow>{title}</HeaderDropShadow>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedBanner;
