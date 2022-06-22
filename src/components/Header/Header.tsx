import logo from "/logo.svg";
import { HeaderWrapper } from "./Style";

function Header() {
  return (
    <HeaderWrapper>
      <a href="/">
        <img src={logo} alt="wetbat logo" />
      </a>
      <div>
        <a className="nav-btn" href="/">
          New Quote
        </a>
        <a className="nav-btn" href="/quotes-list">
          Quotes List
        </a>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
