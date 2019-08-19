import {observer} from 'mobx-react';
import {Header} from 'native-base';
import React, {PureComponent, ReactFragment} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import Loader from '../../../components/Loader';
import RequestOtpForm from '../../../components/Otp/RequestOtp/Form';
import Info from '../../../components/Otp/RequestOtp/Info';
import OtpStore from '../../../stores/otp';

interface RequestOtpProps {
  navigation: NavigationScreenProp<any, any>;
}

@observer
class RequestOtp extends PureComponent<RequestOtpProps> {
  render(): ReactFragment {
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
        <Info />
        <RequestOtpForm navigation={navigation} />
      </SafeAreaView>
    );
  }
}

export default RequestOtp;
