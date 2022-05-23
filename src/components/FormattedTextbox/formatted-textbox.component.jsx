import "./formatted-textbox.style.scss";
import HeaderDottedLines from "../../objects/HeaderDottedLines/header-dotted-lines.object";

const FormattedTextbox = ({ title, children }) => {
  let titleHTML = "";
  if (title) {
    titleHTML = (
      <HeaderDottedLines className="formatted-textbox__header">
        {title}
      </HeaderDottedLines>
    );
  }
  return (
    <div className="c-formatted-textbox">
      {titleHTML}
      <div className="c-formatted-textbox__textbox wysiwyg">{children}</div>
    </div>
  );
};

export default FormattedTextbox;
