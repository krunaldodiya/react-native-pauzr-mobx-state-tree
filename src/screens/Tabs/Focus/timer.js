import { observer } from 'mobx-react';
import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import FocusAppBar from '../../../components/AppBar/Focus';
import AuthStore from '../../../stores/auth';

@observer
class TimerPage extends PureComponent {
  componentDidMount() {
    console.log('TimerPage');
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <FocusAppBar name="PauzR" navigation={navigation} />
        <Text style={{ color: '#000' }}>{AuthStore.authUser.name}</Text>
      </View>
    );
  }
}

export default TimerPage;
