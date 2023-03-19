import Nav from "./Navigation/Navigation";
import styles from "./Header.module.scss"
import logo from "./assets/icons/Logo.svg"
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <div className={styles.container}>
            <div>
                <img src={logo} alt="Logo" />
                <NavLink to='/'>Womazing</NavLink>
            </div>
            <Nav />
        </div>
    )
}

export default Header;