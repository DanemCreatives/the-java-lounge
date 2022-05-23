const AccordionSegment = ({
  title,
  icon,
  children,
  onClick,
  className,
  id,
}) => {
  return (
    <div
      id={icon ? `js-panel-${icon}` : ""}
      className={`c-accordion__segment ` + (className ? className : "")}
      onClick={onClick}
      style={{ animationDelay: id + "00ms" }}
    >
      {console.log(id)}
      <div
        className={
          `c-accordion__title ` + (icon ? `c-accordion__title--${icon}` : "")
        }
      >
        {title}
      </div>
      <div className="c-accordion__panel">
        <div className="c-accordion__textbox wysiwyg">{children}</div>
      </div>
    </div>
  );
};

export default AccordionSegment;
