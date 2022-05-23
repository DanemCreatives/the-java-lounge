import {
  Col,
  Container,
  Row,
} from "../../grid/TailwindGrid/tailwind-grid.component";
import WholeImage from "../WholeImage/whole-image.component";
import "./image-with-textbox.style.scss";
import { Parallax } from "react-scroll-parallax";
import { AnimationOnScroll } from "react-animation-on-scroll";

const ImageWithTextbox = ({ src, header, children, parallax }) => {
  return (
    <div className="c-image-with-textbox">
      <Container>
        <Row cols={{ default: 12 }}>
          <Col span={{ default: 12, lg: 6 }}>
            <Parallax className="desktop-only" speed={parallax}>
              <WholeImage
                className="c-image-with-textbox__canvas"
                src={src}
                withFrame={true}
                withFade={false}
              />
            </Parallax>
          </Col>
          <Col
            className="c-image-with-textbox__col-right"
            span={{ default: 12, lg: 6 }}
          >
            <AnimationOnScroll animateIn="animate__fadeIn" duration={1.5}>
              <div className="c-image-with-textbox__textbox">
                <h3 className="c-image-with-textbox__header">{header}</h3>
                <div className="c-image-with-textbox__copy">{children}</div>
              </div>
            </AnimationOnScroll>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ImageWithTextbox;
