import "./accordion.style.scss";
import "wysiwyg.css/wysiwyg.sass";

const Accordion = ({ children }) => {
  return <div className="c-accordion">{children}</div>;
};

export default Accordion;
