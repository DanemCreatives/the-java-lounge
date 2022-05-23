import "./subscribe-fieldset.style.scss";
import CustomButton from "../CustomButton/custom-button.object";
import CustomInput from "../CustomInput/custom-input.object";

const SubscribeFieldset = () => {
  return (
    <div className="o-subscribe-fieldset">
      <CustomInput type="email" placeholder="example@email.com" />
      <CustomButton text="Subscribe" styleType="secondary" />
    </div>
  );
};

export default SubscribeFieldset;
