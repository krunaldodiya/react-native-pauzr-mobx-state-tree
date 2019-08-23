import {observer} from 'mobx-react';
import {Icon} from 'native-base';
import React, {PureComponent} from 'react';
import {Dimensions, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {NavigationScreenProp} from 'react-navigation';

interface Tab {
  id: number;
  name: string;
  iconSize: number;
  iconName: string;
  iconType: any;
}

interface BottomMenuProps {
  navigation: NavigationScreenProp<any, any>;
  backgroundColor: string;
  color: string;
  activeColor: string;
  activeTab: number;
  onChangeTab: Function;
  tabs: Tab[];
}

class BottomMenu extends PureComponent<BottomMenuProps> {
  render() {
    const {backgroundColor, color, activeColor, activeTab, tabs, onChangeTab} = this.props;

    return (
      <View
        style={{
          backgroundColor,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        {tabs.map(tab => {
          return (
            <TouchableWithoutFeedback
              key={tab.id}
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
                  fontSize: tab.iconSize,
                  color: activeTab == tab.id ? activeColor : color,
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
