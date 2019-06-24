import React, { Component } from "react";
import userModel from "../../schemas/userSchema";

console.log(userModel);

const centerStyle = {
  textAlign: "center"
};

const formGridStyle = {
  position: "relative",
  top: "5em",
  display: "inline-block",
  maxWidth: "480px",
  height: "300px"
};

const inputStyle = {
  width: "475px",
  paddingTop: "11px",
  fontSize: "16px",
  letterSpacing: "normal",
  paddingBottom: "11px",
  lineHeight: "24px",
  borderRadius: "5px",
  marginBottom: "20px",
  borderWidth: "1px"
};

class CreateAccountForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      fname: "",
      lname: "",
      password: "",
      passwordconfirm: ""
    };
  }

  populateUserData = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  checkPasswordsMatch = event => {
    if (this.state.password === this.state.passwordconfirm) {
      console.log("passwords match");
    } else {
      console.log("passwords DONT match");
    }
  };

  createNewUser = event => {
    event.preventDefault();
    this.checkPasswordsMatch();

    const newUser = new userModel({
      email: this.state.email,
      firstName: this.state.fname,
      lastName: this.state.lname,
      password: this.state.password,
      userType: "Free",
      dateCreated: Date.now()
    });

    console.log(newUser);
    // new User(newUser).save().then(user => {
    //   console.log(user);
    // });
  };

  render() {
    return (
      <div className="signUpPage" style={centerStyle}>
        <form
          id="createAccountForm"
          className="container-form-grid"
          style={formGridStyle}
          onSubmit={this.createNewUser}
        >
          <input
            style={inputStyle}
            type="text"
            name="email"
            placeholder="Email address"
            onChange={this.populateUserData}
            required
          />
          <input
            style={inputStyle}
            type="text"
            name="fname"
            placeholder="First name"
            onChange={this.populateUserData}
          />
          <input
            style={inputStyle}
            type="text"
            name="lname"
            placeholder="Last name"
            onChange={this.populateUserData}
          />
          <input
            style={inputStyle}
            type="password"
            name="password"
            placeholder="Create a Password"
            onChange={this.populateUserData}
            required
          />
          <input
            style={inputStyle}
            type="password"
            name="passwordconfirm"
            placeholder="Confirm Password"
            onChange={this.populateUserData}
            required
          />
          <input style={inputStyle} type="submit" value="Sign up" />
        </form>
      </div>
    );
  }
}

export default CreateAccountForm;
