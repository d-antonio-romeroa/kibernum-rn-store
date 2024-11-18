import Loading from '@/components/shared/Loading';
import { useProductFacade } from '@/store/products/useProductsFacade';
import { Text } from '@ui-kitten/components'
import React, { useCallback, useEffect } from 'react'
import { FlatList } from 'react-native'
import { showMessage } from 'react-native-flash-message';
import ProductsListItem from './ProductsListItem';
import { IProduct } from '@/store/products/interfaces';

function ProductsList() {
  const { products, fetchProducts, loading, success, error, resetStore } = useProductFacade();

  useEffect(() => {
    resetStore();

    if (success) {
      showMessage({ message: 'Productos obtenidos exitosamente', type: 'success' });
    }

    if (error) {
      showMessage({ message: 'Error obteniendo productos...', type: 'danger' });
    }
  }, [error, resetStore, success]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderItem = useCallback(({item}: {item: IProduct}) => <ProductsListItem product={item} />, []);

  return (
    <>
      <Text category='h4' style={{ alignSelf: 'center', paddingVertical: 10 }}>Productos</Text>
      {
        loading ? (
          <Loading />
        ) : (
          <FlatList
            data={products}
            renderItem={renderItem}
            maxToRenderPerBatch={5}
            initialNumToRender={5}
          />
        )
      }
    </>
  )
}

export default ProductsList;
