// Link API to navigate pages (client side navigation - using <a> tag with out Link would result in server side navigation)
import Link from "next/link";
import Header from "../components/Header";
import ActionMenu from "../components/ActionMenu";

const Root = () => (
  <div className="main">
    <Header />
    <ActionMenu />
  </div>
);

export default Root;
