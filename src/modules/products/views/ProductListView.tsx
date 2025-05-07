'use client';

import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import { getProducts } from '../services';
import { ProductsWithImages } from '@/types';

function ProductListView() {
  const [products, setProducts] = useState<ProductsWithImages[]>([]);

  const getProductData = async () => {
    const result = await getProducts();
    setProducts(result);
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

export default ProductListView;
