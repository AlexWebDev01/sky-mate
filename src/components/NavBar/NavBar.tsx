import SearchBar from "../SearchBar/SearchBar";
import Logo from "../Logo/Logo";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Logo />
      <SearchBar />
    </div>
  );
};

export default NavBar;
