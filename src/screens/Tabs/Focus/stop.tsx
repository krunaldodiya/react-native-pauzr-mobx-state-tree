import {observer} from 'mobx-react';
import React, {PureComponent} from 'react';
import {BackHandler, DeviceEventEmitter, NativeModules, Text, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
const MobileDeviceManager = NativeModules;

export interface StopPageProps {
  navigation: NavigationScreenProp<any, any>;
}

class StopPage extends PureComponent<StopPageProps> {
  backHandler: any;
  deviceHandler: any;

  componentDidMount() {
    console.log(DeviceEventEmitter);

    DeviceEventEmitter.addListener(
      MobileDeviceManager.MobileDeviceManager.APP_LOCK_STATUS_CHANGED,
      function(e: Event) {
        console.log(e);
      }
    );

    this.backHandler = BackHandler.addEventListener('hardwareBackPress', async () => {
      await this.goBack();
    });
  }

  componentWillUnmount() {
    this.backHandler.remove();
    this.deviceHandler.remove();
  }

  getDeviceStatus(event: any) {
    console.log(event);
  }

  async goBack() {
    // throw new Error('Method not implemented.');
    return false;
  }

  render() {
    const {navigation} = this.props;

    return (
      <View style={{flex: 1, backgroundColor: '#ddd'}}>
        <Text style={{color: '#000'}}>hello</Text>
      </View>
    );
  }
}

export default observer(StopPage);
