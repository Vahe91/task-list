import React, { useContext } from "react";
import context from "../../Context";

import styles from "./navbar.module.css";

const Navbar = () => {
    const filter = useContext(context).filter;
    const setFilter = useContext(context).setFilter;

    const handleClick = (newStatus) => {
        setFilter(newStatus);
    }

    return (
        <div className={styles.navbar}>
            <ul className={styles.menu}>
                <li className={[styles.item, filter ==='pending' ? styles.active : ''].join(' ')} onClick={() => handleClick('pending')}>PENDING</li>
                <li className={[styles.item, filter ==='completed' ? styles.active : ''].join(' ')} onClick={() => handleClick('completed')}>COMPLETED</li>
                <li className={[styles.item, filter ==='all' ? styles.active : ''].join(' ')} onClick={() => handleClick('all')}>ALL</li>
            </ul>
        </div>
    );
}

export default Navbar;