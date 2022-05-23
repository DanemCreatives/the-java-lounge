import "./about.style.scss";
import { Fragment } from "react";
import FeaturedBanner from "../../components/FeaturedBanner/featured-banner.component";
import BorderedText from "../../components/BorderedText/bordered-text.component";
import ImageWithTextbox from "../../components/ImageWithTextbox/image-with-textbox.component";
import CoffeeShopWindow from "../../assets/images/coffee-shop-window.jpg";
import CoffeeInHand from "../../assets/images/coffee-in-hand.jpg";
import BrewInHand from "../../assets/images/brew-in-hand.jpg";
import CustomersInCoffeeShop from "../../assets/images/customers-in-coffee-shop.jpg";

const About = () => {
  return (
    <div className="page about">
      <FeaturedBanner src={CoffeeShopWindow} title="About Us" />
      <BorderedText
        title={
          <Fragment>
            MATILDA <span>DI CANOSSA</span>, OTTAVIANO <span>FREGOSO</span>,
            PIETRO <span>BEMBO</span>
          </Fragment>
        }
        icon="beans"
      >
        <p>
          The namesakes of our three brews were innovators and leaders in their
          communities during the italian renaissance. That humanity had immense
          potential for achievement and that their humanist teachings could
          elevate society and thinking in their time.
        </p>
      </BorderedText>
      <ImageWithTextbox
        src={CoffeeInHand}
        header={
          <Fragment>
            Their <span>Philosophy</span>
          </Fragment>
        }
        parallax={30}
      >
        <p>
          That humanity had immense potential for achievement and that their
          humanist teachings could elevate society and thinking in their time.
        </p>
      </ImageWithTextbox>
      <ImageWithTextbox
        src={BrewInHand}
        header={
          <Fragment>
            Our <span>Philosophy</span>
          </Fragment>
        }
        parallax={30}
      >
        <p>
          At the Java Lounge, we still believe in humanity's potential and in
          your ability to help elevate the society around you.
        </p>
        <p>
          That's why we're partnering with non-profit organizations based in the
          United States of America that aid in the professional development of
          underserved youth across the country.
        </p>
      </ImageWithTextbox>
      <ImageWithTextbox
        src={CustomersInCoffeeShop}
        header={
          <Fragment>
            Your purchase <span>empowers</span>
          </Fragment>
        }
        parallax={30}
      >
        <p>
          In 2021, the Java Lounge worked directly with Braven. A non-profit
          organisation with a passionate mission statement:
        </p>
        <p>
          <i>
            "To empower promising, underrepresented young people from low-income
            backgrounds with the skills, confidence and experiences necessary to
            transition from college to meaningful careers and lives of impact"
          </i>
        </p>
      </ImageWithTextbox>
    </div>
  );
};

export default About;
