import React from 'react';
import styles from '../Styles/ProductComponent.module.css';

const ProductComponent = ({ imageSrc, name, description }) => {
    const imagePath = process.env.PUBLIC_URL + '/images/' + imageSrc;
    return (
    <div className={styles.productComponent}>
      <img src={imagePath} alt="Product" className={styles.productImage} />
      <p className={styles.productName}>{name}</p>
      <p className={styles.productDescription}>{description}</p>
    </div>
  );
};

export default ProductComponent;
