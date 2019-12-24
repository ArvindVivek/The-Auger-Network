import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../auger_logo.png'
import AccountStatus from '../molecules/AccountStatus'
import styles from './Header.module.scss'

import menu from '../../data/menu'
// import meta from '../../data/meta.json'

const MenuItem = ({ item }: { item: any }) => (
    <NavLink
        to={item.link}
        className={styles.link}
        activeClassName={styles.linkActive}
        exact
    >
        {item.title}
    </NavLink>
)

export default class Header extends PureComponent {
    public render() {
        return (
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <NavLink to="/" className={styles.headerLogo}>
                        <img src={Logo} alt="auger_network"/>
                    </NavLink>

                    <nav className={styles.headerMenu}>
                        {menu.map(item => (
                            <MenuItem key={item.title} item={item} />
                        ))}
                        <AccountStatus className={styles.accountStatus} />
                    </nav>
                </div>
            </header>
        )
    }
}
