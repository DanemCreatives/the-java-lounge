import "./custom-form.style.scss";
import { Container } from "../../grid/TailwindGrid/tailwind-grid.component";
import HeaderDottedLines from "../../objects/HeaderDottedLines/header-dotted-lines.object";
import FormGroupContact, {
  FormGroupLogin,
  FormGroupPassword,
  FormGroupRegister,
} from "./form-group.component";

const CustomForm = ({ form }) => {
  const header = (
    <HeaderDottedLines>
      {form === "contact" && "Contact Form"}
      {form === "login" && "Customer Login"}
      {form === "forgot-password" && "Forgot Password"}
      {form === "register" && "Create Account"}
    </HeaderDottedLines>
  );
  return (
    <div className="c-custom-form">
      <Container>
        {header}
        {form === "contact" && <FormGroupContact />}
        {form === "login" && <FormGroupLogin />}
        {form === "forgot-password" && <FormGroupPassword />}
        {form === "register" && <FormGroupRegister />}
      </Container>
    </div>
  );
};

export default CustomForm;
