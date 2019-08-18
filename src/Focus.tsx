import { Icon } from 'native-base';
import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import {
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import Group from './Group';
import Scoreboard from './Scoreboard';
import Timer from './Timer';

const FocusTabs = createBottomTabNavigator(
  {
    Group: {
      screen: Group,
      navigationOptions: {
        title: 'Screen 3',
        tabBarLabel: 'Group',
        tabBarIcon: (props: { tintColor: string | null }) => (
          <Icon
            type="MaterialIcons"
            name="group"
            style={{ fontSize: 25, color: props.tintColor }}
          />
        ),
      },
    },
    Timer: {
      screen: Timer,
      navigationOptions: {
        title: 'Screen 3',
        tabBarLabel: 'Home',
        tabBarIcon: (props: { tintColor: string | null }) => (
          <Icon
            type="MaterialIcons"
            name="pause-circle-outline"
            style={{ fontSize: 35, color: props.tintColor }}
          />
        ),
      },
    },
    Rewards: {
      screen: Scoreboard,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: (props: { tintColor: string | null }) => (
          <Icon type="Ionicons" name="ios-stats" style={{ fontSize: 25, color: props.tintColor }} />
        ),
      },
    },
  },
  {
    lazy: true,
    initialRouteName: 'Timer',
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

const CustomDrawerContentComponent = () => (
  <ScrollView>
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>hello</Text>
      </View>
    </SafeAreaView>
  </ScrollView>
);

const DrawerNavigator = createDrawerNavigator(
  {
    FocusTabs,
  },
  {
    contentComponent: CustomDrawerContentComponent,
    resetOnBlur: true,
    hideStatusBar: false,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  }
);

export default createAppContainer(DrawerNavigator);
