import { observer } from 'mobx-react';
import { Header } from 'native-base';
import React, { PureComponent } from 'react';
import { SafeAreaView } from 'react-native';
import Loader from '../../../components/Loader';
import RequestOtpForm from '../../../components/Otp/RequestOtp/Form';
import Info from '../../../components/Otp/RequestOtp/Info';
import OtpStore from '../../../stores/otp';

@observer
class RequestOtp extends PureComponent {
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
        <RequestOtpForm navigation={navigation} />
      </SafeAreaView>
    );
  }
}

export default RequestOtp;
