const formGridStyle = {
  display: "inline-grid"
};
const CreateAccountForm = () => (
  <form
    action="POST"
    id="createAccountForm"
    className="container-form-grid"
    style={formGridStyle}
  >
    <input type="text" name="email" placeholder="Email address" />
    <input type="text" name="fname" placeholder="First name" />
    <input type="text" name="lname" placeholder="Last name" />
    <input type="text" name="password" placeholder="Create a Password" />
    <input type="submit" value="Sign up" />
  </form>
);

export default CreateAccountForm;
