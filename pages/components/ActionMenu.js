import Link from "next/link";

const ActionMenu = () => (
  <div className="action-buttons">
    <Link href="/signup">
      <button className="button" id="signup-button">
        Sign Up
      </button>
    </Link>
    <Link href="/login">
      <button className="button" id="login-button">
        Login
      </button>
    </Link>
  </div>
);

export default ActionMenu;
