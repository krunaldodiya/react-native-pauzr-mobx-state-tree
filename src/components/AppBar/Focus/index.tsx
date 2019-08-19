import {observer} from 'mobx-react';
import {Body, Button, Header, Icon, Left, Right, Title} from 'native-base';
import React, {PureComponent} from 'react';
import {NavigationScreenProp} from 'react-navigation';

export interface FocusAppBarProps {
  navigation: NavigationScreenProp<any, any>;
  name: string;
}

class FocusAppBar extends PureComponent<FocusAppBarProps> {
  render() {
    const {name, navigation} = this.props;

    return (
      <Header
        androidStatusBarColor="#0D62A2"
        iosBarStyle="light-content"
        style={{backgroundColor: '#0D62A2'}}>
        <Left style={{flex: 1}}>
          <Button transparent onPress={navigation.openDrawer}>
            <Icon type="MaterialIcons" name="menu" />
          </Button>
        </Left>
        <Body style={{flex: 1, alignItems: 'center'}}>
          <Title>{name}</Title>
        </Body>
        <Right style={{flex: 1}}>
          <Button transparent onPress={() => navigation.pop()}>
            <Icon type="MaterialCommunityIcons" name="lightbulb-on" style={{color: 'yellow'}} />
          </Button>
        </Right>
      </Header>
    );
  }
}

export default observer(FocusAppBar);
