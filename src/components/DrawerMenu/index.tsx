import {observer} from 'mobx-react';
import {Text, View} from 'native-base';
import React, {PureComponent} from 'react';
import {NavigationScreenProp} from 'react-navigation';

export interface DrawerMenuProps {
  navigation: NavigationScreenProp<any, any>;
}

class DrawerMenu extends PureComponent<DrawerMenuProps> {
  render() {
    return (
      <View style={{backgroundColor: 'white'}}>
        <Text style={{color: 'black'}}>Welcome to React Native!</Text>
        <Text style={{color: 'black'}}>To get started, edit index.ios.js</Text>
        <Text style={{color: 'black'}}>
          Press Cmd+R to reload,{'\n'}
          Cmd+Control+Z for dev menu
        </Text>
      </View>
    );
  }
}

export default observer(DrawerMenu);
