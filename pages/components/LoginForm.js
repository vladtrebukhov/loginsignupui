const formGridStyle = {
  display: "inline-grid",
  lineHeight: "24px",
  width: "475px",
  height: "300px"
};

const LoginForm = () => (
  <form action="GET" className="container-form-grid" style={formGridStyle}>
    <input type="text" name="email" placeholder="Email" />
    <input type="text" name="password" placeholder="Password" />
    <input type="submit" value="Sign in" />
  </form>
);

export default LoginForm;
