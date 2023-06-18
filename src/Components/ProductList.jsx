import React, { useEffect, useState } from 'react';
import ProductComponent from './ProductComponent';
import styles from '../Styles/ProductList.module.css';

import { getProducts } from '../server/app.js';

const ProductsList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(getProducts());
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
