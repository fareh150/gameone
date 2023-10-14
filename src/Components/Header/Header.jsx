import "./Header.css"
import navlinks from "../../data/data";
import { NavLink } from "react-router-dom";

const Header = ({ title }) => {
    return(
        <header>
            <h1 className="title">{title}</h1>
            <nav>
                <ul>
               {navlinks.map((link) => 
                     <li key={link.name}>
                        <NavLink to={link.link}>{link.name}</NavLink>
                    </li>
                )} 
                </ul>
            </nav>
            
            
        </header>
    )
}

export default Header;