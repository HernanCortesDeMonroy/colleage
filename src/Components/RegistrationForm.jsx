import React, { useState } from 'react';
import styles from "../Styles/RegistrationForm.module.css";

const RegistrationForm = ({ onRegister, onLogin }) => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.shopTitle}>Kujira</h1>
            <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Username:</label>
                <input className={styles.inputField} type="text" name="username" onChange={handleChange} />
            </div>
            <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Email:</label>
                <input className={styles.inputField} type="text" name="email" onChange={handleChange} />
            </div>
            <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Password:</label>
                <input className={styles.inputField} type="password" name="password" onChange={handleChange} />
            </div>
            <div className={styles.buttonContainer}>
                <button type="button" onClick={onLogin} className={styles.button}>Log In</button>
                <button type="button" onClick={onRegister} className={styles.button}>Register</button>
            </div>
        </div>
    );
};

export default RegistrationForm;
