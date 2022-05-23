import "./accordion-basic.style.scss";
import HeaderDottedLines from "../../objects/HeaderDottedLines/header-dotted-lines.object";
import Accordion from "../../components/Accordion/accordion.component";
import AccordionSegment from "../../components/Accordion/accordion-segment.component";
import { useState } from "react";

const AccordionBasic = () => {
  const [activeType, setActiveType] = useState(null);
  const faqLibrary = [
    {
      id: 1,
      title: "What is Arabica coffee?",
      content:
        "<p>Simply put, Arabica coffee comes from the Coffea arabica plant, which originated in Ethiopia. There are different types of Arabica coffees that include, but aren't limited to typica, kona, caturra, etc. </p><p> Arabica coffee differs from Robusta coffee in terms of quality, how it's grown and taste. </p> <p>At Suite 437, we are committed to using 100% Arabica coffee.</p>",
    },
    {
      id: 2,
      title: "When will you roast my coffee?",
      content:
        "<p>We don't believe in pre-roasting coffee and allowing it to sit in a fulfillment warehouse, waiting to be purchased. </p><p>All of our coffee is roasted-to-order in small batches to ensure quality and consistency of flavor. </p><p>Our roasting days take place weekly, every<strong> Monday</strong>.</p>",
    },
    {
      id: 3,
      title: "When will you ship my coffee?",
      content:
        "<p>After roasting, orders will be fulfilled and shipped via United States Postal Service.</p><p>As you know, sometimes USPS can experience influxes in orders that may skew expected shipment timeframes (especially during holiday season). Be sure to use your tracking number to stay up-to-date with your shipment.</p><p>Please don't hesitate to reach out to us directly if you are still experiencing issues. We are more than happy to help where we can!</p>",
    },
    {
      id: 4,
      title: "When will I receive my order confirmation?",
      content:
        "<p>We send confirmation e-mails once you place your order. Don't see it? Be sure to check your junk folder. You can keep track of your order this way and opt-in to status updates.</p><p>If you're still having issues finding it, please contact us with your name and order number for help.</p>",
    },
    {
      id: 5,
      title: "My order is marked as delivered, but I don't see it?",
      content:
        "<p>If this issue occurs, try checking with neighbors, other areas where the package may have been delivered (i.e. leasing office), and your postal delivery person.</p><p>Unfortunately, once we hand over your coffee to USPS, it’s no longer in our control. If you are unable to locate it after trying all of the tips above, please contact us with your name, order number and description of the issue and we will look into it.</p>",
    },
    {
      id: 6,
      title: "Return Policy",
      content:
        "<p>Due to coffee's perishable nature, we do not accept returns.&nbsp;</p><p>However, we care deeply about our guests experience. If you have issues with your order or there was an error made, contact us at&nbsp;<a href='mailto:suite437cofee@gmail.com' target='_blank' title='mailto:suite437coffee@gmail.com'>info@suite437.com </a>within a week of receiving your order to discuss.</p>",
    },
  ];
  return (
    <div className="c-accordion-basic">
      <HeaderDottedLines>FAQs</HeaderDottedLines>
      <Accordion>
        {faqLibrary.map((item, key) => {
          return (
            <AccordionSegment
              key={key}
              id={item.id}
              title={item.title}
              className={activeType === item.id ? "active" : ""}
              onClick={() =>
                activeType === item.id
                  ? setActiveType(null)
                  : setActiveType(item.id)
              }
            >
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
            </AccordionSegment>
          );
        })}
      </Accordion>
    </div>
  );
};

export default AccordionBasic;
