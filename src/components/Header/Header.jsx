import Nav from "./Navigation/Navigation";
import styles from "./Header.module.scss"
import logo from "./assets/icons/Logo.svg";
import basket from './assets/icons/basket.svg'
import phone from './assets/icons/phone.svg'
import { NavLink, Link } from "react-router-dom";
const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.logoText}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                    <NavLink to='/' className={styles.textLeftPart}>Womazing</NavLink>
                </div>
                <div className={styles.nav}>
                    <Nav className={styles.navLink} />
                </div>
                <div className={styles.rightPart}>
                    <Link to='tel:+7 (495) 823-54-12' className={styles.link} onClick={(e) => {
                    }}>
                        <img src={phone} alt="phone" className={styles.phoneImg} />
                        <p className={styles.phoneNumber}> +7 (495) 823-54-12</p>
                    </Link>
                    <NavLink to='/basket'>
                        <img src={basket} alt="basket" className={styles.basket} />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header;