import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'
const Header = (props) =>{
    return(
        <header className={s.header}>
        <img src='https://png.pngtree.com/element_our/png/20181022/dolphin-logo-with-neon-sign-effect.-vector-illustration-png_199432.jpg'></img>
        <div className={s.loginBlock}>
        {props.isAuth?
        props.login:
        <NavLink to={'/login'}>Login</NavLink>}
        </div>
        </header>
    )
}
export default Header