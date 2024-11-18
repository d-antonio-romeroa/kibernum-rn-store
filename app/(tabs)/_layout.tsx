import { Link, Redirect, Tabs, useNavigation } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { Colors } from '@/constants/Colors';
import { useAuthFacade } from '@/store/auth/useAuthFacade';
import { BottomNavigation, BottomNavigationTab, Icon, Text } from '@ui-kitten/components';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { ProductsIcon, SettingsIcon } from '@/components/icons';


const BottomTabBar = ({ state }: BottomTabBarProps) => {
  return (
    <BottomNavigation
      style={{justifyContent: 'space-around'}}
      selectedIndex={state.index}>
      <Link href={'(product)/'} style={{ flex: 1, textAlign: 'center' }}>
        <BottomNavigationTab disabled={true} icon={ProductsIcon} title='Productos' />
      </Link>

      <Link href={'/settings'} style={{ flex: 1, textAlign: 'center' }}>
        <BottomNavigationTab disabled={true} icon={SettingsIcon} title='Configuración' />
      </Link>
    </BottomNavigation>
  )
};

export default function TabLayout() {
  const { accessToken } = useAuthFacade();

  // redireccionar a pantalla login si la app no tiene un accessToken.
  if (!accessToken) {
    return <Redirect href="/login" />;
  }


  return (
    <Tabs
      tabBar={props => <BottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="(product)/index"
        options={{
          title: 'Configuración',
          tabBarIcon: ({ color }) => <Icon size={28} name="house" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Configuración',
          tabBarIcon: ({ color }) => <Icon size={28} name="house" color={color} />,
        }}
      />
      {/* <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      /> */}
    </Tabs>
  );
}
