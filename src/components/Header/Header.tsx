import { Link } from "react-router-dom";
import { HeaderWrapper } from "./Style";
import logo from "/logo.svg";

function Header() {
  return (
    <HeaderWrapper>
      <Link to="/">
        <img src={logo} alt="wetbat logo" />
      </Link>
      <div>
        <Link to="/" className="nav-btn">
          New Quote
        </Link>
        <Link to="/quotes-list" className="nav-btn">
          Quotes List
        </Link>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
