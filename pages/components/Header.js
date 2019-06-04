import Link from "next/link";

const linkStyle = {
  paddingRight: 15,
  float: "right",
  cursor: "pointer"
};

const headerStyle = {
  backgroundColor: "gray",
  height: "50px",
  position: "relative"
};

const Header = props => (
  <div className="header" style={headerStyle}>
    <Link href="/">
      <ul style={linkStyle} className="header-nav" id="header-nav-home">
        Home
      </ul>
    </Link>
    <Link href="/about">
      <ul style={linkStyle} className="header-nav" id="header-nav-about">
        About
      </ul>
    </Link>
  </div>
);

export default Header;
