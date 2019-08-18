import { observer } from 'mobx-react';
import { Body, Button, Header, Icon, Right, Title, Left } from 'native-base';
import React, { PureComponent } from 'react';

@observer
class FunAppBar extends PureComponent {
  render() {
    const { name, navigation } = this.props;

    return (
      <Header
        androidStatusBarColor="#0D62A2"
        iosBarStyle="light-content"
        style={{ backgroundColor: '#0D62A2' }}
      >
        <Left style={{ flex: 1 }} />
        <Body style={{ flex: 2, alignItems: 'center' }}>
          <Title>{name}</Title>
        </Body>
        <Right style={{ flex: 1 }}>
          <Button transparent onPress={() => navigation.pop()}>
            <Icon type="MaterialIcons" name="add-a-photo" />
          </Button>
        </Right>
      </Header>
    );
  }
}

export default FunAppBar;
