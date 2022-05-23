import "./login.style.scss";
import CustomForm from "../../components/CustomForm/custom-form.component";

const Login = () => {
  return (
    <div className="page login">
      <CustomForm form="login" />
    </div>
  );
};

export default Login;
