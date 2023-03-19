import { NavLink } from "react-router-dom"

const Nav = () => {
    return(
        <div>
            <NavLink to='/'>Главная</NavLink>
            <NavLink to='/store'>Магазин</NavLink>
            <NavLink to='about as'>О бренде</NavLink>
            <NavLink to='contacts'>Контакты</NavLink>
        </div>
    )
}

export default Nav