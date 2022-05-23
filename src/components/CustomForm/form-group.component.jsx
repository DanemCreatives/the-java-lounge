import InputFieldset from "../../objects/InputFieldset/input-fieldset.object";
import CustomButton from "../../objects/CustomButton/custom-button.object";
import { Link } from "react-router-dom";

const FormGroupContact = () => {
  return (
    <form className="c-custom-form__fieldset">
      <InputFieldset
        label="Your name"
        styleType="secondary"
        placeholder="enter here"
      />
      <InputFieldset
        label="Your email"
        styleType="secondary"
        placeholder="example@email.com"
      />
      <InputFieldset
        label="Your comment"
        styleType="secondary"
        type="textarea"
        placeholder="enter here"
      />
      <CustomButton styleType="primary" text="Submit" />
    </form>
  );
};

const FormGroupLogin = () => {
  return (
    <form className="c-custom-form__fieldset">
      <InputFieldset
        label="Your email"
        styleType="secondary"
        placeholder="example@email.com"
      />
      <InputFieldset
        label="Password"
        styleType="secondary"
        type="password"
        placeholder="enter here"
      />
      <CustomButton styleType="primary" text="Submit" />
      <div className="c-custom-form__ctas">
        <Link className="c-custom-form__link" to="/forgot-password">
          Forgot your password?
        </Link>
        <p className="c-custom-form__paragraph">
          New customer?{" "}
          <Link className="c-custom-form__link" to="/register">
            Sign up for a new account
          </Link>
        </p>
      </div>
    </form>
  );
};

const FormGroupPassword = () => {
  return (
    <form className="c-custom-form__fieldset">
      <InputFieldset
        label="Old Password"
        styleType="secondary"
        type="password"
        placeholder="enter here"
      />
      <InputFieldset
        label="New Password"
        styleType="secondary"
        type="password"
        placeholder="enter here"
      />
      <CustomButton styleType="primary" text="Submit" />
      <div className="c-custom-form__ctas">
        <p className="c-custom-form__paragraph">
          Return to login?{" "}
          <Link className="c-custom-form__link" to="/login">
            Click here
          </Link>
        </p>
      </div>
    </form>
  );
};

const FormGroupRegister = () => {
  return (
    <form className="c-custom-form__fieldset">
      <InputFieldset
        label="First Name"
        styleType="secondary"
        placeholder="enter here"
      />
      <InputFieldset
        label="Last Name"
        styleType="secondary"
        placeholder="enter here"
      />
      <InputFieldset
        label="Your email"
        styleType="secondary"
        placeholder="example@email.com"
      />
      <InputFieldset
        label="Password"
        styleType="secondary"
        type="password"
        placeholder="enter here"
      />
      <CustomButton styleType="primary" text="Register" />
      <div className="c-custom-form__ctas">
        <p className="c-custom-form__paragraph">
          Return to login?{" "}
          <Link className="c-custom-form__link" to="/login">
            Click here
          </Link>
        </p>
      </div>
    </form>
  );
};

export default FormGroupContact;
export { FormGroupLogin, FormGroupPassword, FormGroupRegister };
