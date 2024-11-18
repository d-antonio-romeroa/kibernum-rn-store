import React from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { useNavigation } from 'expo-router';
import { BackIcon } from '@/components/icons';
import ProductDetail from '@/components/products/ProductDetail';

export default function DetailsScreen({ }) {

    const navigation = useNavigation();

    const navigateBack = () => {
        navigation.goBack();
    };

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='Detalle producto' alignment='center' accessoryLeft={BackAction} />
            <Divider />
            <ProductDetail />
        </SafeAreaView>
    );
};