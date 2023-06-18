import React, { useEffect, useState } from 'react';
import ProductComponent from './ProductComponent';
import styles from '../Styles/ProductList.module.css';

const ProductsList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts([
            {
                id: 0,
                name: "Scotch",
                description: "Scotland whiskey",
                image: "logo.png"
            },
            {
                id: 1,
                name: "Vodka",
                description: "Russian vodka",
                image: "logo.png"
            },
            {
                id: 3,
                name: "Vodka",
                description: "Russian vodka",
                image: "logo.png"
            },
            {
                id: 4,
                name: "Vodka",
                description: "Russian vodka",
                image: "logo.png"
            },
            {
                id: 5,
                name: "Vodka",
                description: "Russian vodka",
                image: "logo.png"
            },
            {
                id: 6,
                name: "Vodka",
                description: "Russian vodka",
                image: "logo.png"
            }
        ]);
    }, []);

    return (
        <div className={styles.productsContainer}>
            <div className={styles.productBox}>
                {products.map((product) => (
                    <div className={styles.productComponent} key={product.id}>
                        <ProductComponent
                            name={product.name}
                            description={product.description}
                            imageSrc={product.image}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsList;
