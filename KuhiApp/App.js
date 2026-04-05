import React, { useCallback } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import HomeScreen from './src/screens/HomeScreen';
import CollectionsScreen from './src/screens/CollectionsScreen';
import BespokeScreen from './src/screens/BespokeScreen';

SplashScreen.preventAutoHideAsync();

const Tab = createBottomTabNavigator();

function TabIcon({ label, focused }) {
  return (
    <Text
      style={{
        fontFamily: 'Manrope',
        fontSize: 9,
        letterSpacing: 2,
        textTransform: 'uppercase',
        color: focused ? '#775A19' : 'rgba(255,255,255,0.4)',
        fontWeight: focused ? '600' : '400',
      }}
    >
      {label}
    </Text>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Newsreader: require('./assets/fonts/Newsreader-VariableFont.ttf'),
    'Newsreader-Italic': require('./assets/fonts/Newsreader-Italic-VariableFont.ttf'),
    Manrope: require('./assets/fonts/Manrope-VariableFont.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: true,
              headerStyle: {
                backgroundColor: '#FCF9F8',
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
              headerTitle: () => (
                <Image
                  source={require('./assets/kuhi-logo.png')}
                  style={styles.headerLogo}
                  resizeMode="contain"
                />
              ),
              headerTitleAlign: 'center',
              tabBarStyle: {
                backgroundColor: '#000000',
                borderTopWidth: 0,
                height: 80,
                paddingTop: 12,
                paddingBottom: 20,
              },
              tabBarShowLabel: false,
            }}
          >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarIcon: ({ focused }) => <TabIcon label="Home" focused={focused} />,
              }}
            />
            <Tab.Screen
              name="Collections"
              component={CollectionsScreen}
              options={{
                tabBarIcon: ({ focused }) => <TabIcon label="Collections" focused={focused} />,
              }}
            />
            <Tab.Screen
              name="Bespoke"
              component={BespokeScreen}
              options={{
                headerStyle: {
                  backgroundColor: '#1b1c1c',
                  elevation: 0,
                  shadowOpacity: 0,
                  borderBottomWidth: 0,
                },
                headerTitle: () => (
                  <Image
                    source={require('./assets/kuhi-logo.png')}
                    style={[styles.headerLogo, { tintColor: '#FFFFFF' }]}
                    resizeMode="contain"
                  />
                ),
                tabBarIcon: ({ focused }) => <TabIcon label="Bespoke" focused={focused} />,
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  headerLogo: {
    height: 40,
    width: 40,
  },
});
