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
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

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
  const { t } = useTranslation();

  const tabLabels = {
    Home: t('home'),
    Profile: t('profile'),
    Notification: t('notifications'),
    Setting: t('settings'),
    Share: t('share'),
  } as const;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,
        tabBarLabel: tabLabels[route.name],

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginTop: 5,
        },

        tabBarStyle: {
          height: 120,
          backgroundColor: colors.second_background,
          borderTopWidth: 2,
          borderTopColor: colors.primary,
          elevation: 10,
          paddingTop: 5,
        },

        tabBarIcon: ({ focused, color, size }) => (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 35,
              width: 35,
              borderRadius: 17.5,
              margin: 10,
              marginBottom: 5,
              backgroundColor: focused ? colors.primary : 'transparent',
            }}
          >
            <Ionicons
              name={focused ? icons[route.name].active : icons[route.name].inactive}
              size={20}
              color={focused ? colors.black : colors.primary}
            />
          </View>
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Share" component={ShareScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      
    </Tab.Navigator>
  );
};