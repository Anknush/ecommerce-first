import React from "react";
import SignIn from "../../../components/menu-component/signIn/signIn-component";
import SignUp from "../../../components/menu-component/signup/signUp-components";
import "./sign-in-sign-up-styles.scss";

const SignInSignUpPage = () => (
  <div className="sign-in-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUpPage;
