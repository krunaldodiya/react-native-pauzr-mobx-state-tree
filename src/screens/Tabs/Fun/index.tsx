import {Icon} from 'native-base';
import React from 'react';
import {createAppContainer, createBottomTabNavigator} from 'react-navigation';
import NotificationsPage from './notifications';
import PrivateProfilePage from './private_profile';
import SearchPage from './search';
import FeedsPage from './feeds';
import WinnersPage from './winners';

const FunTabs = createBottomTabNavigator(
  {
    Feeds: {
      screen: FeedsPage,
      navigationOptions: {
        title: 'Screen 3',
        tabBarLabel: 'Feeds',
        tabBarIcon: ({tintColor}) => (
          <Icon type="SimpleLineIcons" name="home" style={{fontSize: 20, color: tintColor}} />
        ),
      },
    },
    Winners: {
      screen: WinnersPage,
      navigationOptions: {
        title: 'Screen 3',
        tabBarLabel: 'Winners',
        tabBarIcon: ({tintColor}) => (
          <Icon type="EvilIcons" name="trophy" style={{fontSize: 30, color: tintColor}} />
        ),
      },
    },
    Profile: {
      screen: PrivateProfilePage,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({tintColor}) => (
          <Icon type="SimpleLineIcons" name="user" style={{fontSize: 20, color: tintColor}} />
        ),
      },
    },
    Search: {
      screen: SearchPage,
      navigationOptions: {
        title: 'Screen 3',
        tabBarLabel: 'Search',
        tabBarIcon: ({tintColor}) => (
          <Icon type="EvilIcons" name="search" style={{fontSize: 30, color: tintColor}} />
        ),
      },
    },
    Notifications: {
      screen: NotificationsPage,
      navigationOptions: {
        tabBarLabel: 'Notifications',
        tabBarIcon: ({tintColor}) => (
          <Icon type="EvilIcons" name="heart" style={{fontSize: 30, color: tintColor}} />
        ),
      },
    },
  },
  {
    lazy: true,
    initialRouteName: 'Profile',
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#006feb',
      inactiveTintColor: '#6f6f6f',
      style: {
        height: 50,
      },
    },
  }
);

export default createAppContainer(FunTabs);
