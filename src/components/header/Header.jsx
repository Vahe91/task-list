import React from "react";

import styles from "./header.module.css";

const Header = (props) => {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>{props.name}</h1>
        </div>
    );
}

export default Header;