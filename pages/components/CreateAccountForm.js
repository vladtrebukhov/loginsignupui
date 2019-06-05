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

const CreateAccountForm = () => (
  <div className="signUpPage" style={centerStyle}>
    <form
      action="POST"
      id="createAccountForm"
      className="container-form-grid"
      style={formGridStyle}
    >
      <input
        style={inputStyle}
        type="text"
        name="email"
        placeholder="Email address"
      />
      <input
        style={inputStyle}
        type="text"
        name="fname"
        placeholder="First name"
      />
      <input
        style={inputStyle}
        type="text"
        name="lname"
        placeholder="Last name"
      />
      <input
        style={inputStyle}
        type="text"
        name="password"
        placeholder="Create a Password"
      />
      <input style={inputStyle} type="submit" value="Sign up" />
    </form>
  </div>
);

export default CreateAccountForm;
