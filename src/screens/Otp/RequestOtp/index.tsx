import {observer} from 'mobx-react';
import React, {PureComponent} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import Loader from '../../../components/Loader';
import RequestOtpForm from '../../../components/Otp/RequestOtpForm';
import RequestOtpInfo from '../../../components/Otp/RequestOtpInfo';
import OtpStore from '../../../stores/otp';

interface RequestOtpPageProps {
  navigation: NavigationScreenProp<any, any>;
}

class RequestOtpPage extends PureComponent<RequestOtpPageProps> {
  componentDidMount() {
    StatusBar.setBackgroundColor('#0D62A2');
    StatusBar.setBarStyle('light-content');
  }

  render() {
    const {navigation} = this.props;
    const {loading} = OtpStore;

    return (
      <SafeAreaView style={{flex: 1}}>
        <Loader loading={loading} />
        <RequestOtpInfo title="REQUEST OTP" />
        <RequestOtpForm navigation={navigation} />
      </SafeAreaView>
    );
  }
}

export default observer(RequestOtpPage);
