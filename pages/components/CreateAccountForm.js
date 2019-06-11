import React, { Component } from "react";
import User from "../../UserSchema";

const centerStyle = {
  textAlign: "center"
};

const formGridStyle = {
  position: "relative",
  top: "5em",
  display: "inline-block",
  width: "480px",
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
      password: ""
    };
  }

  populateUserField = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  createNewUser = event => {
    event.preventDefault();

    const newUser = new User({
      email: this.state.email,
      firstName: this.state.fname,
      lastName: this.state.lastName,
      password: this.state.password,
      userType: "Free",
      date: Date.now()
    });

    console.log(newUser);

    // await newUser.save();
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
            onChange={this.populateUserField}
          />
          <input
            style={inputStyle}
            type="text"
            name="fname"
            placeholder="First name"
            onChange={this.populateUserField}
          />
          <input
            style={inputStyle}
            type="text"
            name="lname"
            placeholder="Last name"
            onChange={this.populateUserField}
          />
          <input
            style={inputStyle}
            type="text"
            name="password"
            placeholder="Create a Password"
            onChange={this.populateUserField}
          />
          <input style={inputStyle} type="submit" value="Sign up" />
        </form>
      </div>
    );
  }
}

export default CreateAccountForm;
