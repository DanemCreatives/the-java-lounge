import {
  SignInWithGooglePopup,
  SignInWithUserCredientials,
  SignUpwithUserCredientials,
} from "../../config/firebase";

import CustomButton from "../../objects/CustomButton/custom-button.object";
import GoogleButton from "../../objects/GoogleButton/google-button.object";
import InputFieldset from "../../objects/InputFieldset/input-fieldset.object";
import { Link } from "react-router-dom";
import { useState } from "react";

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
  // create login object
  const [loginDetails, setLoginDetails] = useState({});
  // create handler function for inputted login credentials
  const handleLoginCredentials = (e) => {
    // pull the name and value from the parameter and pass it to the login details
    const { name, value } = e.target;
    // copy the preexisting login details and apply a new name and value
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  // create handler function for login submission
  const handleLoginUpSubmit = (e) => {
    e.preventDefault();
    SignInWithUserCredientials(loginDetails);
  };

  return (
    <form className="c-custom-form__fieldset" onSubmit={handleLoginUpSubmit}>
      <GoogleButton onClick={SignInWithGooglePopup} />
      <InputFieldset
        name="email"
        label="Your email"
        styleType="secondary"
        placeholder="example@email.com"
        onChange={handleLoginCredentials}
      />
      <InputFieldset
        name="password"
        label="Password"
        styleType="secondary"
        type="password"
        placeholder="enter here"
        onChange={handleLoginCredentials}
      />
      <CustomButton styleType="primary" text="Submit" type="submit" />
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
      <CustomButton styleType="primary" text="Submit" type="submit" />
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
  const [signUpDetails, setSignUpDetails] = useState({});

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    SignUpwithUserCredientials(signUpDetails);
  };

  const handleSignUpCredentials = (e) => {
    const { name, value } = e.target;
    setSignUpDetails({ ...signUpDetails, [name]: value });
  };

  return (
    <form
      className="c-custom-form__fieldset"
      onSubmit={(e) => handleSignUpSubmit(e)}
    >
      <InputFieldset
        name="firstName"
        label="First Name"
        styleType="secondary"
        placeholder="enter here"
        onChange={handleSignUpCredentials}
        required={true}
      />
      <InputFieldset
        name="lastName"
        label="Last Name"
        styleType="secondary"
        placeholder="enter here"
        onChange={handleSignUpCredentials}
        required={true}
      />
      <InputFieldset
        name="email"
        label="Your email"
        styleType="secondary"
        placeholder="example@email.com"
        onChange={handleSignUpCredentials}
        required={true}
      />
      <InputFieldset
        name="password"
        label="Password"
        styleType="secondary"
        type="password"
        placeholder="enter here"
        onChange={handleSignUpCredentials}
        required={true}
        minLength={5}
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
