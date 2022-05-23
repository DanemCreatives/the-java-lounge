import "./footer.style.scss";
import {
  Col,
  Container,
  Row,
} from "../../grid/TailwindGrid/tailwind-grid.component";
import Menu from "../Menu/menu.component";
import SubscribeFieldset from "../../objects/SubscribeFieldset/subscribe-fieldset.object";
import { ReactComponent as Logo } from "../../assets/images/svgs/logo.svg";
import { ReactComponent as FacebookIcon } from "../../assets/images/svgs/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../assets/images/svgs/twitter.svg";
import { ReactComponent as YouTubeIcon } from "../../assets/images/svgs/youtube.svg";
import { ReactComponent as InstagramIcon } from "../../assets/images/svgs/instagram.svg";
import { Link } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Footer = ({ showImage }) => {
  const date = new Date();
  return (
    <div className="c-footer">
      <AnimationOnScroll animateIn="animate__fadeIn">
        {showImage && <div className="c-footer__canvas"></div>}
      </AnimationOnScroll>
      <div className="c-footer__resources">
        <Container>
          <Row cols={{ default: 12 }}>
            <Col
              className="order-4 sm:order-1"
              span={{ default: 12, sm: 4, lg: 3 }}
            >
              <div className="c-footer__company">
                <div className="c-footer__logo">
                  <Link to="/">
                    <Logo />
                  </Link>
                </div>
                <div className="c-footer__social">
                  <a
                    className="c-footer__link c-footer__link--fb"
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    className="c-footer__link c-footer__link--tw"
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TwitterIcon />
                  </a>
                  <a
                    className="c-footer__link c-footer__link--ig"
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    className="c-footer__link c-footer__link--yt"
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <YouTubeIcon />
                  </a>
                </div>
              </div>
            </Col>
            <Col
              className="order-1 sm:order-2"
              span={{ default: 12, sm: 5, lg: 3 }}
            >
              <div className="c-footer__menu c-footer__menu--main">
                <h3 className="c-footer__menu-header">Quick Links</h3>
                <Menu type="main" />
              </div>
            </Col>
            <Col
              className="order-2 sm:order-3"
              span={{ default: 12, sm: 3, lg: 2 }}
            >
              <div className="c-footer__menu c-footer__menu--legal">
                <h3 className="c-footer__menu-header">Company</h3>
                <Menu type="legal" />
              </div>
            </Col>
            <Col
              className="order-3 sm:order-4"
              span={{ default: 12, sm: 12, lg: 4 }}
            >
              <div className="c-footer__newsletter">
                <h3 className="c-footer__menu-header">Newsletter</h3>
                <p className="c-footer__paragraph">
                  Stay up to date with all the latest from the Java Lounge
                </p>
                <SubscribeFieldset />
              </div>
            </Col>
          </Row>
          <div className="c-footer__copyright">
            &copy; {date.getFullYear()} The Java Lounge Ltd. All rights
            reserved.
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
