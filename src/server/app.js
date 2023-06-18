import users from "./users.json";
import products from "./products.json"

const getUsers = () => {
    return users;
};

const addUser = (name, email, password) => {
    const id = users[users.length - 1];
    users.push({
        id: id,
        nickname: name,
        gmail: email,
        password: password
    })
}

const getProducts = () => {
    return products;
}

export { getUsers, addUser, getProducts };
