import {observer} from 'mobx-react';
import {Header} from 'native-base';
import React, {PureComponent, ReactFragment} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import Loader from '../../../components/Loader';
import RequestOtpForm from '../../../components/Otp/RequestOtpForm';
import RequestOtpInfo from '../../../components/Otp/RequestOtpInfo';
import OtpStore from '../../../stores/otp';

interface RequestOtpPageProps {
  navigation: NavigationScreenProp<any, any>;
}

class RequestOtpPage extends PureComponent<RequestOtpPageProps> {
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
        <RequestOtpInfo title="REQUEST OTP" />
        <RequestOtpForm navigation={navigation} />
      </SafeAreaView>
    );
  }
}

export default observer(RequestOtpPage);
