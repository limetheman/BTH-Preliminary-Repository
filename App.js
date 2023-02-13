import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import Navigation from './src/navigation'
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default App = () => {

  const [fontsLoaded] = useFonts({
    'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  };
  

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <Navigation/>
      <StatusBar style="auto" />
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#000000',
  },
  
  button: {
    padding: 10,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 70,
    borderRadius: 30,
    backgroundColor: 'lightgreen',
    borderWidth: 1,
    borderColor: 'black',
  }
});
