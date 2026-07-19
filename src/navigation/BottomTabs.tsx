import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@react-native-vector-icons/ionicons';

import HomeScreen from '../screens/home/HomeScreen';
import ProfileScreen from '../screens/profile';
import NotificationScreen from '../screens/notification';
import SettingScreen from '../screens/setting';
import ShareScreen from '../screens/share';

import { BottomTabParamList } from './types';
import { colors } from '../theme';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const icons = {
  Home: {
    active: 'home',
    inactive: 'home-outline',
  },
  Profile: {
    active: 'person',
    inactive: 'person-outline',
  },
  Notification: {
    active: 'notifications',
    inactive: 'notifications-outline',
  },
  Setting: {
    active: 'settings',
    inactive: 'settings-outline',
  },
  Share: {
    active: 'share-social',
    inactive: 'share-social-outline',
  },
} as const;

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },

        tabBarStyle: {
          height: 65,
          backgroundColor: colors.second_background,
          borderTopWidth: 2,
          borderTopColor: colors.primary,
          elevation: 10,
          paddingTop: 8,
          paddingBottom: 10,
        },

        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name={
              focused
                ? icons[route.name].active
                : icons[route.name].inactive
            }
            size={size}
            color={color}
          />
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
      <Tab.Screen name="Share" component={ShareScreen} />
    </Tab.Navigator>
  );
};