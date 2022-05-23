import "./input-fieldset.style.scss";
import CustomInput from "../CustomInput/custom-input.object";

const InputFieldset = ({ label, placeholder, type, styleType, ...props }) => {
  const labelSlug = label.toLowerCase().replaceAll(" ", "-");
  const styleTypeOption = styleType ? styleType : "primary";
  return (
    <div className={`o-input-fieldset o-input-fieldset--` + styleTypeOption}>
      <label className="o-input-fieldset__label" htmlFor={labelSlug}>
        {label}
      </label>
      <CustomInput
        id={labelSlug}
        type={type}
        placeholder={placeholder}
        styleType={styleType}
        {...props}
      />
    </div>
  );
};

export default InputFieldset;
