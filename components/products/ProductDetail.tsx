import { IProduct } from '@/store/products/interfaces';
import { useProductFacade } from '@/store/products/useProductsFacade';
import { Layout, Text } from '@ui-kitten/components';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react'
import { Image, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import Loading from '../shared/Loading';

interface IProps {
    // data: IProduct;
}

const ProductDetail = ({ }: IProps) => {
    const { id } = useLocalSearchParams();

    const { fetchProductById, loading, success, error, resetStore } = useProductFacade();

    const [product, setProduct] = useState<IProduct>({} as IProduct);

    useEffect(() => {
        resetStore();

        if (success) {
            showMessage({ message: 'Producto obtenido exitosamente', type: 'success' });
        }

        if (error) {
            showMessage({ message: 'Error obteniendo producto...', type: 'danger' });
        }
    }, [error, resetStore, success]);

    useEffect(() => {
        fetchProductById(id as string).then((product) => {
            if (product) {
                setProduct(product);
                return;
            }
            showMessage({ message: 'Error obteniendo producto...', type: 'danger' });
        });
    }, []);

    if (loading) {
        return (<Loading />)
    }

    if (!product || !product.id) {
        return (
            <Image
                style={{ flex: 1, height: 100, width: 100, alignSelf: 'center' }}
                resizeMode={'stretch'}
                source={{ uri: product.image }}
            />
        )
    }

    return (
        <Layout style={{flex: 1, paddingVertical: 10}}>
            <Image
                style={{ height: 200, width: '90%', alignSelf: 'center' }}
                resizeMode={'contain'}
                source={{ uri: product.image }}
            />
            <View style={{ flex: 1, alignContent: 'center' }}>
                <Text category='h4' style={{ padding: 10 }}>
                    {product.title}
                </Text>
                <Text category='p1' style={{ padding: 10 }}>
                    {product.description}
                </Text>
                <Text category='h5' style={{ padding: 10 }}>
                    $ {product.price}
                </Text>
            </View>
        </Layout>
    )
}

export default ProductDetail