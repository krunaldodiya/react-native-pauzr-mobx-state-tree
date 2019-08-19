import {observer} from 'mobx-react';
import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import FocusAppBar from '../../../components/AppBar/Focus';
import AuthStore from '../../../stores/auth';

export interface ScoreboardPageProps {
  navigation: NavigationScreenProp<any, any>;
}

class ScoreboardPage extends PureComponent<ScoreboardPageProps> {
  componentDidMount() {
    console.log('ScoreboardPage');
  }

  render() {
    const {navigation} = this.props;

    return (
      <View style={{flex: 1, backgroundColor: '#ddd'}}>
        <FocusAppBar name="Scoreboard" navigation={navigation} />

        {AuthStore.authUser && <Text style={{color: '#000'}}>{AuthStore.authUser.name}</Text>}
      </View>
    );
  }
}

export default observer(ScoreboardPage);
