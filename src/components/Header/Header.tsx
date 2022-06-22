import logo from "/logo.svg";
import { HeaderWrapper } from "./Style";

function Header() {
  return (
    <HeaderWrapper>
      <a href="/">
        <img src={logo} alt="wetbat logo" />
      </a>
      <div>
        <a className="nav-btn" href="#">
          Page 1
        </a>
        <a className="nav-btn" href="#">
          Page 2
        </a>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
