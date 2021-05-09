import React from "react";
import { auth, signInWithGoogle } from "../../../firabase.utils";
import CustomButton from "../custom-buttton/custom-button-components";
import FormInput from "../form-input/form-input-component";
import "./signIn-styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Email: "",
      Password: "",
    };
  }
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { Email, Password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(Email, Password);
      this.setState({ Email: "", Password: "" });
    } catch (error) {
      console.log("Error in Login" + error);
    }
  };
  render() {
    return (
      <div className="sign-in">
        <h1>I already have an Account</h1>
        <span>Sign In with your Email and Password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="Email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.Email}
            label="Email"
            required
          />
          <FormInput
            name="Password"
            type="password"
            value={this.state.Password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            {" "}
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
