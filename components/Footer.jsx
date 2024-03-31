import React from 'react';
import {View, Image, StyleSheet, Pressable} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import QuizScreen from '../screens/QuizScreen';
import MoreScreen from '../screens/MoreScreen';
import HomeIcon from '../assets/images/HomeIcon.png';
import CategoryIcon from '../assets/images/CategoryIcon.png';
import QuizIcon from '../assets/images/QuizIcon.png';
import MoreIcon from '../assets/images/MoreIcon.png';
import quizData from '../data/quizData'; // Import quizData

const Tab = createBottomTabNavigator();

export default function Footer() {
  const navigation = useNavigation(); // Use useNavigation hook

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.labelStyle,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <TabIcon
              icon={HomeIcon}
              color={color}
              size={size + 15}
              onPress={() => navigation.navigate('Home')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <TabIcon
              icon={CategoryIcon}
              color={color}
              size={size + 5}
              onPress={() => navigation.navigate('Category')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Quiz"
        component={QuizScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <TabIcon
              icon={QuizIcon}
              color={color}
              size={size + 15}
              onPress={() => {
                const categories = quizData.map(item => item.category);
                const randomIndex = Math.floor(
                  Math.random() * categories.length,
                );
                const randomCategory = categories[randomIndex];
                navigation.navigate('Quiz', {category: randomCategory});
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <TabIcon
              icon={MoreIcon}
              color={color}
              size={size + 5}
              onPress={() => navigation.navigate('More')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const TabIcon = ({icon, color, size, onPress}) => {
  const isFocused = useIsFocused();

  return (
    <Pressable onPress={onPress}>
      <Image
        source={icon}
        style={[
          styles.icon,
          {
            width: size,
            height: size,
            tintColor: isFocused ? '#D9FE00' : color,
          },
        ]}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#0077CC',
    height: 70,
  },
  labelStyle: {
    display: 'none',
  },
  icon: {
    width: 30,
    height: 30,
  },
});
