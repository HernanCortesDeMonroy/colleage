// server/database/index.js
import mysql from "mysql2";

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'kujira'
});

export {connection};


