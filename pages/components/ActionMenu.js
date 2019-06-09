import Link from "next/link";

const ButtonLink = props => (
  <Link href={props.formURL}>
    <button className="button" id={props.buttonId}>
      {props.buttonText}
    </button>
  </Link>
);

export default function ActionMenu() {
  return (
    <div className="action-buttons">
      <ButtonLink
        formURL="/signup"
        buttonId="signup-button"
        buttonText="Sign Up"
      />
      <ButtonLink
        formURL="/login"
        buttonId="login-button"
        buttonText="Log In"
      />
    </div>
  );
}
