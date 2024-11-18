import { IProduct } from '@/store/products/interfaces';
import { Card, Text } from '@ui-kitten/components';
import { Link } from 'expo-router';
import React, { memo } from 'react';
import { Image, StyleSheet, View } from 'react-native';


const ItemHeader = ({ productTitle }: { productTitle: string }): React.ReactElement => (
    <View style={{ padding: 5 }}>
        <Text category='h6' style={{ textAlign: 'center' }}>
            {productTitle}
        </Text>
    </View>
);

const ItemFooter = ({ productPrice }: { productPrice: number }): React.ReactElement => (
    <Text category='p1' style={{ paddingHorizontal: 10, fontWeight: '900' }}>
        $ {productPrice}
    </Text>
);


const ProductsListItem = ({ product }: { product: IProduct }): React.ReactElement => (
    <Card
        style={styles.item}
        status='info'
        header={() => <ItemHeader productTitle={product.title} />}
        footer={() => <ItemFooter productPrice={product.price} />}
    >
        <Link href={`/details/${product.id}`}>

            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <Image
                    style={{ flex: 1, height: 50, width: 50, alignSelf: 'center' }}
                    resizeMode={'stretch'}
                    source={{ uri: product.image }}
                />
                <Text category='p1' style={{ flex: 5, paddingLeft: 10 }}>
                    {product.description}
                </Text>
            </View>
        </Link>
    </Card>
);

export default memo(ProductsListItem);


const styles = StyleSheet.create({
    item: {
        marginBottom: 4,
    },
});
