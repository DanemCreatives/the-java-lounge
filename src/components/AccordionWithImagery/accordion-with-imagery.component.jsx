import { useState } from "react";
import "react-light-accordion/demo/css/index.css";
import "./accordion-with-imagery.style.scss";
import HeaderDropShadow from "../../objects/HeaderDropShadow/header-drop-shadow.object";
import {
  Col,
  Container,
  Row,
} from "../../grid/TailwindGrid/tailwind-grid.component";
import Accordion from "../Accordion/accordion.component";
import AccordionSegment from "../Accordion/accordion-segment.component";
import PreparedCoffee from "../../assets/images/prepared-coffee.jpg";
import FilteredCoffee from "../../assets/images/filter-coffee.jpg";
import AutomaticDrip from "../../assets/images/automatic-drip.jpg";
import EspressoMachine from "../../assets/images/espresso-machine.jpg";
import FrenchPress from "../../assets/images/french-press.jpg";

const AccordionWithImagery = () => {
  const [activeType, setActiveType] = useState("guide");
  const brewGuideOptions = [
    {
      id: 1,
      title: "Brew Guide",
      slug: "guide",
      imgSrc: PreparedCoffee,
      content: "",
    },
    {
      id: 2,
      title: "Filter",
      slug: "filter",
      imgSrc: FilteredCoffee,
      content:
        "<p>For best results, we recommend starting with whole beancoffee and grinding with a burr grinder just beforebrewing.</p><p>We also suggest using a scale which will make brewingeasier by taking any guesswork out of the equation.</p><p>For manual drip coffees, a gooseneck kettle will give youcontrol over how fast you're pouring and where the watermakes contact with the coffee.</p><p>When in doubt, check your machine's manual forinstructions specific to your equipment.</p><h3>What you need</h3><ul><li>Chemex Brewer and Chemex filters</li><li>Coffee beans of your choosing</li><li>Coffee Burr Grinder</li><li> Scale for coffee measuring or tablespoon if you don't have a scale</li><li>Gooseneck Kettle or Stovetop Kettle</li></ul><h3>Instructions</h3><p><em> <strong>The Prep</strong></em></p><p>Heat a full kettle of water to 205ºF/96ºC. If your kettledoesn't have a temperature gauge, bring to boil and removefrom heat for one minute.</p><p><em> <strong>Measure &amp; Grind the Beans</strong></em></p><p>Weigh out 30g coffee (approx. 2 tablespoons). Grind to atexture like coarse sand/couscous.</p><p><em> <strong>The Rinse</strong></em></p><p>Open a paper filter and place it in the brewer. Thoroughlyrinse the filter with hot water. This will also pre-heatthe carafe and set the filter in place. Be sure to pourout the rinse water before brewing.</p><p><em> <strong>The Bloom</strong></em></p><p>When the water is ready, put the grounds in the filter andsettle them so they lie flat. Pour just enough water tosaturate them, in a gentle circular motion. Let it sit and“bloom” for 40 seconds. This will allow bubbles of carbondioxide to escape. The fresher the beans, the longer thiswill take.&nbsp;</p><p><em> <strong>The Pour</strong></em></p><p>Once the bloom is complete, slowly pour the water onto thecoffee in either a side-by-side or circular motion, makingsure to distribute the water evenly across the grounds.Start and stop your pour at intervals to maintain aconstant water level in the filter until you reach480-500g, or approximately 2 cups.</p><p>Ideal brew time usually lands between 3.5 and 4 minutesbut this will vary based on coffee, freshness, and yourown taste.</p><p>After all the water has dripped through, gently swirl thecarafe to mix all the layers of the brew, and enjoy.</p><p>Brewing with the Chemex can be challenging. So, giveyourself time to hone your skill. The more you do it, thebetter you will get (and the better your coffee willtaste-which is the most important part).</p>",
    },
    {
      id: 3,
      title: "Automatic Drip",
      slug: "jug",
      imgSrc: AutomaticDrip,
      content:
        "<p>For best results, we recommend starting with whole beancoffee and grinding with a burr grinder just beforebrewing.</p><p>We also suggest using a scale which will make brewingeasier by taking any guesswork out of the equation.</p><p>For manual drip coffees, a gooseneck kettle will give youcontrol over how fast you're pouring and where the watermakes contact with the coffee.</p><p>When in doubt, check your machine's manual forinstructions specific to your equipment.</p><h3>What you need</h3><ul><li>Chemex Brewer and Chemex filters</li><li>Coffee beans of your choosing</li><li>Coffee Burr Grinder</li><li> Scale for coffee measuring or tablespoon if you don't have a scale</li><li>Gooseneck Kettle or Stovetop Kettle</li></ul><h3>Instructions</h3><p><em> <strong>The Prep</strong></em></p><p>Heat a full kettle of water to 205ºF/96ºC. If your kettledoesn't have a temperature gauge, bring to boil and removefrom heat for one minute.</p><p><em> <strong>Measure &amp; Grind the Beans</strong></em></p><p>Weigh out 30g coffee (approx. 2 tablespoons). Grind to atexture like coarse sand/couscous.</p><p><em> <strong>The Rinse</strong></em></p><p>Open a paper filter and place it in the brewer. Thoroughlyrinse the filter with hot water. This will also pre-heatthe carafe and set the filter in place. Be sure to pourout the rinse water before brewing.</p><p><em> <strong>The Bloom</strong></em></p><p>When the water is ready, put the grounds in the filter andsettle them so they lie flat. Pour just enough water tosaturate them, in a gentle circular motion. Let it sit and“bloom” for 40 seconds. This will allow bubbles of carbondioxide to escape. The fresher the beans, the longer thiswill take.&nbsp;</p><p><em> <strong>The Pour</strong></em></p><p>Once the bloom is complete, slowly pour the water onto thecoffee in either a side-by-side or circular motion, makingsure to distribute the water evenly across the grounds.Start and stop your pour at intervals to maintain aconstant water level in the filter until you reach480-500g, or approximately 2 cups.</p><p>Ideal brew time usually lands between 3.5 and 4 minutesbut this will vary based on coffee, freshness, and yourown taste.</p><p>After all the water has dripped through, gently swirl thecarafe to mix all the layers of the brew, and enjoy.</p><p>Brewing with the Chemex can be challenging. So, giveyourself time to hone your skill. The more you do it, thebetter you will get (and the better your coffee willtaste-which is the most important part).</p>",
    },
    {
      id: 4,
      title: "Espresso Machine",
      slug: "machine",
      imgSrc: EspressoMachine,
      content:
        "<p>For best results, we recommend starting with whole beancoffee and grinding with a burr grinder just beforebrewing.</p><p>We also suggest using a scale which will make brewingeasier by taking any guesswork out of the equation.</p><p>For manual drip coffees, a gooseneck kettle will give youcontrol over how fast you're pouring and where the watermakes contact with the coffee.</p><p>When in doubt, check your machine's manual forinstructions specific to your equipment.</p><h3>What you need</h3><ul><li>Chemex Brewer and Chemex filters</li><li>Coffee beans of your choosing</li><li>Coffee Burr Grinder</li><li> Scale for coffee measuring or tablespoon if you don't have a scale</li><li>Gooseneck Kettle or Stovetop Kettle</li></ul><h3>Instructions</h3><p><em> <strong>The Prep</strong></em></p><p>Heat a full kettle of water to 205ºF/96ºC. If your kettledoesn't have a temperature gauge, bring to boil and removefrom heat for one minute.</p><p><em> <strong>Measure &amp; Grind the Beans</strong></em></p><p>Weigh out 30g coffee (approx. 2 tablespoons). Grind to atexture like coarse sand/couscous.</p><p><em> <strong>The Rinse</strong></em></p><p>Open a paper filter and place it in the brewer. Thoroughlyrinse the filter with hot water. This will also pre-heatthe carafe and set the filter in place. Be sure to pourout the rinse water before brewing.</p><p><em> <strong>The Bloom</strong></em></p><p>When the water is ready, put the grounds in the filter andsettle them so they lie flat. Pour just enough water tosaturate them, in a gentle circular motion. Let it sit and“bloom” for 40 seconds. This will allow bubbles of carbondioxide to escape. The fresher the beans, the longer thiswill take.&nbsp;</p><p><em> <strong>The Pour</strong></em></p><p>Once the bloom is complete, slowly pour the water onto thecoffee in either a side-by-side or circular motion, makingsure to distribute the water evenly across the grounds.Start and stop your pour at intervals to maintain aconstant water level in the filter until you reach480-500g, or approximately 2 cups.</p><p>Ideal brew time usually lands between 3.5 and 4 minutesbut this will vary based on coffee, freshness, and yourown taste.</p><p>After all the water has dripped through, gently swirl thecarafe to mix all the layers of the brew, and enjoy.</p><p>Brewing with the Chemex can be challenging. So, giveyourself time to hone your skill. The more you do it, thebetter you will get (and the better your coffee willtaste-which is the most important part).</p>",
    },
    {
      id: 5,
      title: "French Press",
      slug: "press",
      imgSrc: FrenchPress,
      content:
        "<p>For best results, we recommend starting with whole beancoffee and grinding with a burr grinder just beforebrewing.</p><p>We also suggest using a scale which will make brewingeasier by taking any guesswork out of the equation.</p><p>For manual drip coffees, a gooseneck kettle will give youcontrol over how fast you're pouring and where the watermakes contact with the coffee.</p><p>When in doubt, check your machine's manual forinstructions specific to your equipment.</p><h3>What you need</h3><ul><li>Chemex Brewer and Chemex filters</li><li>Coffee beans of your choosing</li><li>Coffee Burr Grinder</li><li> Scale for coffee measuring or tablespoon if you don't have a scale</li><li>Gooseneck Kettle or Stovetop Kettle</li></ul><h3>Instructions</h3><p><em> <strong>The Prep</strong></em></p><p>Heat a full kettle of water to 205ºF/96ºC. If your kettledoesn't have a temperature gauge, bring to boil and removefrom heat for one minute.</p><p><em> <strong>Measure &amp; Grind the Beans</strong></em></p><p>Weigh out 30g coffee (approx. 2 tablespoons). Grind to atexture like coarse sand/couscous.</p><p><em> <strong>The Rinse</strong></em></p><p>Open a paper filter and place it in the brewer. Thoroughlyrinse the filter with hot water. This will also pre-heatthe carafe and set the filter in place. Be sure to pourout the rinse water before brewing.</p><p><em> <strong>The Bloom</strong></em></p><p>When the water is ready, put the grounds in the filter andsettle them so they lie flat. Pour just enough water tosaturate them, in a gentle circular motion. Let it sit and“bloom” for 40 seconds. This will allow bubbles of carbondioxide to escape. The fresher the beans, the longer thiswill take.&nbsp;</p><p><em> <strong>The Pour</strong></em></p><p>Once the bloom is complete, slowly pour the water onto thecoffee in either a side-by-side or circular motion, makingsure to distribute the water evenly across the grounds.Start and stop your pour at intervals to maintain aconstant water level in the filter until you reach480-500g, or approximately 2 cups.</p><p>Ideal brew time usually lands between 3.5 and 4 minutesbut this will vary based on coffee, freshness, and yourown taste.</p><p>After all the water has dripped through, gently swirl thecarafe to mix all the layers of the brew, and enjoy.</p><p>Brewing with the Chemex can be challenging. So, giveyourself time to hone your skill. The more you do it, thebetter you will get (and the better your coffee willtaste-which is the most important part).</p>",
    },
  ];
  const accordionSegmentHandler = (event, item) => {
    if (activeType === item.slug) {
      setActiveType("guide");
    } else {
      setActiveType(item.slug);
      setTimeout(() => {
        window.scrollBy({
          top:
            event.target.getBoundingClientRect().top -
            event.target.offsetHeight,
          behavior: "smooth",
        });
      }, 500);
    }
  };
  return (
    <div
      className={
        `c-accordion-with-imagery c-accordion-with-imagery--` + activeType
      }
    >
      <Container>
        <Row cols={{ default: 12 }}>
          <Col
            className="c-accordion-with-imagery__col-left"
            span={{ default: 12, lg: 6 }}
          >
            <div className="c-accordion-with-imagery__canvas">
              <div className="c-accordion-with-imagery__textbox">
                {brewGuideOptions.map((item) => {
                  return (
                    <HeaderDropShadow
                      className={activeType === item.slug ? "active" : ""}
                      key={item.id}
                    >
                      {item.title}
                    </HeaderDropShadow>
                  );
                })}
              </div>
              <div className="c-accordion-with-imagery__image-container">
                {brewGuideOptions.map((item) => {
                  return (
                    <img
                      key={item.id}
                      className={
                        `c-accordion-with-imagery__img` +
                        (activeType === item.slug ? " active" : "")
                      }
                      src={item.imgSrc}
                      alt={item.title}
                    />
                  );
                })}
              </div>
            </div>
          </Col>
          <Col
            className="c-accordion-with-imagery__col-right"
            span={{ default: 12, lg: 6 }}
          >
            <div className="c-accordion-with-imagery__accordion">
              <Accordion>
                {brewGuideOptions.map((item) => {
                  return (
                    item.id !== 1 && (
                      <AccordionSegment
                        key={item.id}
                        title={item.title}
                        icon={item.slug}
                        id={item.id}
                        onClick={(event) =>
                          accordionSegmentHandler(event, item)
                        }
                        className={activeType === item.slug ? "active" : ""}
                      >
                        <div
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                      </AccordionSegment>
                    )
                  );
                })}
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AccordionWithImagery;
