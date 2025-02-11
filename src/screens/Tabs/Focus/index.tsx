import {Icon, Text, View} from 'native-base';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import GroupPage from './group';
import ScoreboardPage from './scoreboard';
import TimerPage from './timer';

const FocusTabs = createBottomTabNavigator(
  {
    Group: {
      screen: GroupPage,
      navigationOptions: {
        title: 'Screen 3',
        tabBarLabel: 'Group',
        tabBarIcon: ({tintColor}) => (
          <Icon type="MaterialIcons" name="group" style={{fontSize: 25, color: tintColor}} />
        ),
      },
    },
    Timer: {
      screen: TimerPage,
      navigationOptions: {
        title: 'Screen 3',
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="MaterialIcons"
            name="pause-circle-outline"
            style={{fontSize: 35, color: tintColor}}
          />
        ),
      },
    },
    Rewards: {
      screen: ScoreboardPage,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <Icon type="Ionicons" name="ios-stats" style={{fontSize: 25, color: tintColor}} />
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
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
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
