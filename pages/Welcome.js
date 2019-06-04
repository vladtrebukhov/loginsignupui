import Header from "./components/Header";
import ActionMenu from "./components/ActionMenu";
import CenterLayout from "./components/CenterLayout";

const Welcome = () => (
  <div className="welcomePage">
    <Header />
    <CenterLayout>
      <ActionMenu />
    </CenterLayout>
  </div>
);

export default Welcome;
