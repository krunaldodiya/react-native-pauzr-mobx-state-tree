import {observer} from 'mobx-react';
import React, {PureComponent} from 'react';
import {BackHandler, Text, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import FunAppBar from '../../../components/AppBar/Fun';
import AuthStore from '../../../stores/auth';

export interface StopPageProps {
  navigation: NavigationScreenProp<any, any>;
}

class StopPage extends PureComponent<StopPageProps> {
  backHandler: any;

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', async () => {
      await this.goBack();
    });
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  async goBack() {
    // throw new Error('Method not implemented.');
    return false;
  }

  render() {
    const {navigation} = this.props;

    return (
      <View style={{flex: 1, backgroundColor: '#ddd'}}>
        <FunAppBar name="Search" navigation={navigation} />

        {AuthStore.authUser && <Text style={{color: '#000'}}>{AuthStore.authUser.name}</Text>}
      </View>
    );
  }
}

export default observer(StopPage);
