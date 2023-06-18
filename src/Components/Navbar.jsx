import React from 'react';
import styles from '../Styles/Navbar.module.css';

const Navbar = ({onToggleForm, showForm}) => {
    return (
        <div className={styles.navbar}>
            <h1 >kujira</h1>
            {!showForm && <button onClick={onToggleForm}>Back</button>}
        </div>
    );
};

export default Navbar;