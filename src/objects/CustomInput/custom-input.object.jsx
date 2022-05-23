import "./custom-input.style.scss";

const CustomInput = ({ type, children, styleType, ...props }) => {
  const styleTypeOption = styleType ? styleType : "primary";
  const classes = `o-custom-input o-custom-input--` + styleTypeOption;
  const CustomTag = type;
  let input;
  if (type !== "select" && type !== "textarea") {
    input = <input className={classes} {...props} type={type} />;
  } else {
    input = (
      <CustomTag className={classes} {...props}>
        {children}
      </CustomTag>
    );
  }
  return input;
};

export default CustomInput;
