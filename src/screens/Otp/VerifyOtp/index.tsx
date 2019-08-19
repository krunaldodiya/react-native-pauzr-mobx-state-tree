import {observer} from 'mobx-react';
import {Header} from 'native-base';
import React, {PureComponent} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import Loader from '../../../components/Loader';
import VerifyOtpForm from '../../../components/Otp/VerifyOtpForm';
import VerifyOtpInfo from '../../../components/Otp/VerifyOtpInfo';
import OtpStore from '../../../stores/otp';

interface VerifyOtpPageProps {
  navigation: NavigationScreenProp<any, any>;
}

class VerifyOtpPage extends PureComponent<VerifyOtpPageProps> {
  render() {
    const {navigation} = this.props;
    const {loading} = OtpStore;

    return (
      <SafeAreaView style={{flex: 1}}>
        <Header
          androidStatusBarColor="#0D62A2"
          iosBarStyle="light-content"
          style={{backgroundColor: '#0D62A2'}}
        />
        <Loader loading={loading} />
        <VerifyOtpInfo title="test" mobile="test" />
        <VerifyOtpForm navigation={navigation} />
      </SafeAreaView>
    );
  }
}

export default observer(VerifyOtpPage);
