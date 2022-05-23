import { Fragment } from "react";
import FeaturedText from "../../components/FeaturedText/featured-text.component";
import Tiles from "../../components/Tiles/tiles.component";
import FeaturedProducts from "../../components/FeaturedProducts/featured-products.component";
import BorderedText from "../../components/BorderedText/bordered-text.component";
import Hero from "../../components/Hero/hero.component";
import Footer from "../../components/Footer/footer.component";
import "./home-page.style.scss";

const HomePage = () => {
  return (
    <div className="page home-page">
      <Hero />
      <FeaturedText />
      <Tiles />
      <FeaturedProducts />
      <BorderedText
        title={
          <Fragment>
            EXACTING <span> AND </span> TIMELY
          </Fragment>
        }
        icon="cup"
        link="contact"
        linkText="Contact Us"
      >
        <p>
          We offer a single-purchase or subscription option that automatically
          delivers your coffee to you. As a subscription member, we reserve
          coffee in each batch, specifically for you. Simply set your frequency,
          and we'll handle the rest.
        </p>
      </BorderedText>
    </div>
  );
};

export default HomePage;
