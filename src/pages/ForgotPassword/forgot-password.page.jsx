import "./forgot-password.style.scss";
import CustomForm from "../../components/CustomForm/custom-form.component";

const ForgotPassword = () => {
  return (
    <div className="page forgot-password">
      <CustomForm form="forgot-password" />
    </div>
  );
};

export default ForgotPassword;
