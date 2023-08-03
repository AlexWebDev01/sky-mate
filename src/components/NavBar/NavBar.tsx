
import SearchBar from "../SearchBar/SearchBar";
import NavBarType from "./NavBarType";
import Logo from "../Logo/Logo";

import './NavBar.css';

const NavBar: React.FC<NavBarType> = ({ handleSearch, pageStyle }) => {

    return(
        <div className="nav-bar">
            <Logo />
            <SearchBar handleSearch={handleSearch} pageStyle={pageStyle}/>
        </div>
    )
};

export default NavBar;