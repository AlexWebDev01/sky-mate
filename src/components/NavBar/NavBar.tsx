
import SearchBar from "../SearchBar/SearchBar";
import HandleSearchFn from "../../pages/WeatherPage/HandleSearchFn";

import Logo from "../Logo/Logo";



const NavBar: React.FC<HandleSearchFn> = ({ handleSearch }) => {

    return(
        <>
            <Logo />
            <SearchBar handleSearch={handleSearch} />
        </>
    )
};

export default NavBar;