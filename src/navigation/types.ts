import { NavigatorScreenParams } from '@react-navigation/native';

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  ChangePassword: undefined;
  ForgetPassword: undefined;
  Profile: undefined;
  Notification: undefined;
  Setting: undefined;
  Share: undefined;

};

export type BottomTabParamList = {
  Home: undefined;
  Profile: undefined;
  Notification: undefined;
  Setting: undefined;
  Share: undefined;
};

export type DrawerParamList = {
  Tabs: NavigatorScreenParams<BottomTabParamList>;
};

export type MainStackParamList = {
  Drawer: NavigatorScreenParams<DrawerParamList>;
};

export type RootStackParamList = {
  Splash: undefined;
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Main: NavigatorScreenParams<BottomTabParamList>;
};
