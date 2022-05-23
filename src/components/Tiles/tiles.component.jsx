import "./tiles.style.scss";
import CoffeeImage from "../../assets/images/coffee-cup.jpg";
import { Row, Col } from "../../grid/TailwindGrid/tailwind-grid.component";
import WholeImage from "../../components/WholeImage/whole-image.component";
import CustomButton from "../../objects/CustomButton/custom-button.object";
import HeaderIcon from "../../objects/HeaderIcon/header-icon.object";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Tiles = () => {
  return (
    <Row cols={12} className="c-tiles">
      <Col span={{ default: 12, lg: 6 }}>
        <WholeImage src={CoffeeImage} withFade={true} alt="Coffee" />
      </Col>
      <Col span={{ default: 12, lg: 6 }}>
        <div className="c-tiles__textbox">
          <HeaderIcon>
            ELEVATE YOURSELF, <br />
            ELEVATE SOCIETY
          </HeaderIcon>
          <AnimationOnScroll animateIn="animate__fadeIn" delay={250}>
            <p className="c-tiles__paragraph">
              We donate 10% of our revenue to non-profit organizations based in
              the United Kingdom.
            </p>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn" delay={250}>
            <CustomButton styleType="primary" text="Buy Now" to="shop" />
          </AnimationOnScroll>
        </div>
      </Col>
    </Row>
  );
};

export default Tiles;
