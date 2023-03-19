import Nav from "./Navigation/Navigation";
import styles from "./Header.module.scss"
import logo from "./assets/icons/Logo.svg"
const Header = () => {
    return (
        <div className={styles.container}>
            <img src={logo} alt="Logo" />
            <Nav />
        </div>
    )
}

export default Header;