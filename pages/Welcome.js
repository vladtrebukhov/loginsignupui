import Header from "./components/Header";
import ActionMenu from "./components/ActionMenu";
import css from "./css/welcomepage.css";

const Welcome = props => (
  <div className="welcomePage">
    <Header />
    <div className={css.container}>
      <ActionMenu />
    </div>
  </div>
);

export default Welcome;
