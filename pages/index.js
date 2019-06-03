// Link API to navigate pages (client side navigation - using <a> tag with out Link would result in server side navigation)
import Link from "next/link";
import Welcome from "./Welcome";

const Root = () => (
  <div className="main">
    <Welcome />
  </div>
);

export default Root;
