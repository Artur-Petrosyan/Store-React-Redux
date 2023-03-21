import { NavLink } from "react-router-dom"
import styles from "./Navigation.module.scss"
const Nav = (props) => {
    const { className } = props
    return (
        <div className={styles.NavLink}>
            <NavLink to='/' className={className}>Главная</NavLink>
            <NavLink to='/store' className={className}>Магазин</NavLink>
            <NavLink to='about as' className={className}>О бренде</NavLink>
            <NavLink to='contacts' className={className}>Контакты</NavLink>
        </div>
    )
}

export default Nav