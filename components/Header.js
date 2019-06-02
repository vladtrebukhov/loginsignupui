import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = props => (
  <div className="header">
    <h2>Welcome</h2>
    <Link href="/">
      <a style={linkStyle} className="header-nav" id="header-nav-home">
        Home
      </a>
    </Link>
    <Link href="/about">
      <a style={linkStyle} className="header-nav" id="header-nav-about">
        About
      </a>
    </Link>
  </div>
);

export default Header;
