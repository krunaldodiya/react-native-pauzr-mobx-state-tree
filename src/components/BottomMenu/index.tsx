import {observer} from 'mobx-react';
import {Icon} from 'native-base';
import React, {PureComponent} from 'react';
import {View, Dimensions} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {NavigationScreenProp} from 'react-navigation';

interface Tab {
  id: number;
  name: string;
  iconName: string;
  iconType: any;
}

interface BottomMenuProps {
  navigation: NavigationScreenProp<any, any>;
  activeTab: number;
  onChangeTab: Function;
  tabs: Tab[];
}

class BottomMenu extends PureComponent<BottomMenuProps> {
  render() {
    const {activeTab, tabs, onChangeTab} = this.props;

    return (
      <View
        style={{
          backgroundColor: '#0D62A2',
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 5,
        }}>
        {tabs.map(tab => {
          return (
            <TouchableWithoutFeedback
              onPress={() => onChangeTab(tab.id)}
              style={{
                width: Dimensions.get('window').width / tabs.length,
                padding: 10,
              }}>
              <Icon
                onPress={() => onChangeTab(tab.id)}
                type={tab.iconType}
                name={tab.iconName}
                style={{
                  textAlign: 'center',
                  fontSize: 24,
                  color: activeTab == tab.id ? 'skyblue' : 'white',
                }}
              />
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    );
  }
}

export default observer(BottomMenu);
