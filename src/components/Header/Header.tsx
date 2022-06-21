import logo from "../../../public/logo.svg";

function Header() {
  return (
    <header>
      <img src={logo} alt="wetbat logo" />
      <div className="navbar">
        <a href="#">Page 1</a>
        <a href="#">Page 2</a>
      </div>
    </header>
  );
}

export default Header;
