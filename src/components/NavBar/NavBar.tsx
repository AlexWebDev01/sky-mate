
import SearchBar from "../SearchBar/SearchBar";
import HandleSearchFn from "../../pages/WeatherPage/HandleSearchFn";
import Logo from "../Logo/Logo";

import './NavBar.css';

const NavBar: React.FC<HandleSearchFn> = ({ handleSearch }) => {

    return(
        <div className="nav-bar">
            <Logo />
            <SearchBar handleSearch={handleSearch} />
        </div>
    )
};

export default NavBar;