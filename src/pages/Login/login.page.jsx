import "./login.style.scss";

import CustomForm from "../../components/CustomForm/custom-form.component";
import { Navigate } from "react-router-dom";

const Login = () => {
  return (
    <div className="page login">
      {/* <Navigate to="/" /> */}
      <CustomForm form="login" />
    </div>
  );
};

export default Login;
