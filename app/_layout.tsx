import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import FlashMessage from 'react-native-flash-message';
import Constants from 'expo-constants';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, Button, Icon, IconRegistry } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native';
import useUiStore from '@/store/ui/useUiStore';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const { theme, toggleTheme } = useUiStore();

  const uiStore = useUiStore();

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const ThemeIcon = () => 
    <Icon name={theme === 'light' ? 'sun-outline' : 'moon-outline'} />

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ApplicationProvider {...eva} theme={eva[theme]}>
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: uiStore.paddingTop,
      }}>
        <IconRegistry icons={EvaIconsPack} />
        <Button
          accessoryLeft={ThemeIcon}
          onPress={toggleTheme}
          status='basic'
          style={{
            position: 'absolute',
            zIndex: 100,
            width: 50,
            height: 50,
            borderRadius: 30,
            top: uiStore.paddingTop + 10,
            right: 10,
            justifyContent: 'center',
            alignContent: 'center',
            padding: 10,
          }} />
        <Slot />
        <StatusBar style="auto" />
        <FlashMessage statusBarHeight={Constants.statusBarHeight} position="top" />
      </SafeAreaView>
    </ApplicationProvider>
  );
}
