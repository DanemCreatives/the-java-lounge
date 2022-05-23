import "./brew-guide.style.scss";
import FeaturedBanner from "../../components/FeaturedBanner/featured-banner.component";
import AccordionWithImagery from "../../components/AccordionWithImagery/accordion-with-imagery.component";
import PreparedCoffee from "../../assets/images/prepared-coffee.jpg";

const BrewGuide = () => {
  return (
    <div className="page brew-guide">
      <FeaturedBanner src={PreparedCoffee} title="Brew Guide" />
      <AccordionWithImagery />
    </div>
  );
};

export default BrewGuide;
