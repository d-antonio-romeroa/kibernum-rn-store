import React from 'react'
import ProductsList from '@/components/products/ProductsList';
import { Layout } from '@ui-kitten/components'

function Products() {
  return (
    <Layout style={{ flex: 1, paddingVertical: 10 }}>
      <ProductsList />
    </Layout>
  )
}

export default Products;
