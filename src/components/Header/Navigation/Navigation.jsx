import { NavLink } from "react-router-dom"
import styles from "./Navigation.module.scss"
const Nav = () => {
    return (
        <div className={styles.NavLink}>
            <NavLink to='/'>Главная</NavLink>
            <NavLink to='/store'>Магазин</NavLink>
            <NavLink to='about as'>О бренде</NavLink>
            <NavLink to='contacts'>Контакты</NavLink>
        </div>
    )
}

export default Nav