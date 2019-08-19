import {observer} from 'mobx-react';
import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import FocusAppBar from '../../../components/AppBar/Focus';
import AuthStore from '../../../stores/auth';

export interface TimerPageProps {
  navigation: NavigationScreenProp<any, any>;
}

class TimerPage extends PureComponent<TimerPageProps> {
  componentDidMount() {
    console.log('TimerPage');
  }

  render() {
    const {navigation} = this.props;

    return (
      <View style={{flex: 1, backgroundColor: '#ddd'}}>
        <FocusAppBar name="PauzR" navigation={navigation} />

        {AuthStore.authUser && <Text style={{color: '#000'}}>{AuthStore.authUser.name}</Text>}
      </View>
    );
  }
}

export default observer(TimerPage);
