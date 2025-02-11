import {observer} from 'mobx-react';
import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import AuthStore from '../../../stores/auth';

export interface GroupPageProps {
  navigation: NavigationScreenProp<any, any>;
}

class GroupPage extends PureComponent<GroupPageProps> {
  componentDidMount() {
    console.log('GroupPage');
  }

  render() {
    const {navigation} = this.props;

    return (
      <View style={{flex: 1, backgroundColor: '#ddd'}}>
        {AuthStore.authUser && <Text style={{color: '#000'}}>{AuthStore.authUser.name}</Text>}
      </View>
    );
  }
}

export default observer(GroupPage);
