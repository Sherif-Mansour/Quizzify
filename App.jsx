import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import QuizScreen from './screens/QuizScreen';
import MoreScreen from './screens/MoreScreen';
import {View, Text, StyleSheet, Image} from 'react-native';

const Tab = createBottomTabNavigator();

function AppHeader() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerBackground}></View>
      <Image
        source={require('./images/logo-no-background.png')}
        style={styles.logo}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          header: () => <AppHeader />,
          tabBarStyle: {backgroundColor: '#0096FF'},
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'black',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Category" component={CategoryScreen} />
        <Tab.Screen name="Quiz" component={QuizScreen} />
        <Tab.Screen name="More" component={MoreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    backgroundColor: '#0096FF',
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  headerBackground: {
    flex: 1,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignItems: 'center',
  },
});
