import React from "react";
import CustomButton from "../custom-buttton/custom-button-components";
import FormInput from "../form-input/form-input-component";
import "./signIn-styles.scss";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      Email: "",
      Password: "",
    };
  }
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ Email: " ", Password: " " });
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
            value={this.state.Email}
            handleChange={this.handleChange}
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
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}
export default SignIn;
