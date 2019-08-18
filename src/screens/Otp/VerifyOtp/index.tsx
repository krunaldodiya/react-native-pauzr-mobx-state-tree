import { observer } from 'mobx-react';
import { Header } from 'native-base';
import React, { PureComponent } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import Loader from '../../../components/Loader';
import VerifyOtpForm from '../../../components/Otp/VerifyOtp/Form';
import Info from '../../../components/Otp/VerifyOtp/Info';
import OtpStore from '../../../stores/otp';

interface VerifyOtpProps {
  navigation: NavigationScreenProp<any, any>;
}

@observer
class VerifyOtp extends PureComponent<VerifyOtpProps> {
  render() {
    const { navigation } = this.props;
    const { loading } = OtpStore;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Header
          androidStatusBarColor="#0D62A2"
          iosBarStyle="light-content"
          style={{ backgroundColor: '#0D62A2' }}
        />
        <Loader loading={loading} />
        <Info />
        <VerifyOtpForm navigation={navigation} />
      </SafeAreaView>
    );
  }
}

export default VerifyOtp;
