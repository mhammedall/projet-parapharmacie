import { useState, useEffect } from 'react';
import productsData from '../data/products.json';

function useProduct(productId) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    try {
      const timer = setTimeout(() => {
        const foundProduct = productsData.find(
          (p) => p.id === parseInt(productId)
        );

        if (foundProduct) {
          setProduct(foundProduct);
        } 
        setLoading(false);
      }, 300);

      return () => clearTimeout(timer);
    } catch (err) {
      setLoading(false);
    }
  }, [productId]);

  return { product, loading };
}

export default useProduct;

