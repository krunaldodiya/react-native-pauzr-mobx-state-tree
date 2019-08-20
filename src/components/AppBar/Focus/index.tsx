import {observer} from 'mobx-react';
import {Body, Button, Header, Icon, Left, Right, Title} from 'native-base';
import React, {PureComponent} from 'react';
import {NavigationScreenProp} from 'react-navigation';
import screens from '../../../libs/screens';
import AuthStore from '../../../stores/auth';

export interface FocusAppBarProps {
  navigation: NavigationScreenProp<any, any>;
  name: string;
}

class FocusAppBar extends PureComponent<FocusAppBarProps> {
  render() {
    const {toggleDrawer} = AuthStore;
    const {name, navigation} = this.props;

    return (
      <Header
        androidStatusBarColor="#0D62A2"
        iosBarStyle="light-content"
        style={{backgroundColor: '#0D62A2'}}>
        <Left style={{flex: 1}}>
          <Button transparent onPress={toggleDrawer}>
            <Icon type="MaterialIcons" name="menu" />
          </Button>
        </Left>
        <Body style={{flex: 1, alignItems: 'center'}}>
          <Title>{name}</Title>
        </Body>
        <Right style={{flex: 1}}>
          <Button transparent onPress={() => navigation.push(screens.SelectCountry)}>
            <Icon type="MaterialCommunityIcons" name="lightbulb-on" style={{color: 'yellow'}} />
          </Button>
        </Right>
      </Header>
    );
  }
}

export default observer(FocusAppBar);
