// import './css/createaccount.css';

const CreateAccountForm = () => (
  <form action="POST" className="createAccountForm">
    <div className="container">
      <input type="text" name="email" placeholder="Email address" />
      <input type="text" name="fname" placeholder="First name" />
      <input type="text" name="lname" placeholder="Last name" />
      <input type="text" name="password" placeholder="Create a Password" />
      <input type="submit" value="Sign up" />
    </div>
  </form>
);

export default CreateAccountForm;
