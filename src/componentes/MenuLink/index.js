import { NavLink } from "react-router-dom";
import styles from "./MenuLink.module.css"

const MenuLink = ({children, to}) => {
    //const localizacao = useLocation();

    return (
        <NavLink
            className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
            `} to={to} end
        >
            {children}
        </NavLink>
    );
}

export default MenuLink;