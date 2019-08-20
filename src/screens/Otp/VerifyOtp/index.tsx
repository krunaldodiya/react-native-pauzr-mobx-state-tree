import {observer} from 'mobx-react';
import {Content} from 'native-base';
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
      <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
        <Content
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
          }}>
          <Loader loading={loading} />
          <VerifyOtpInfo title="VERIFY OTP" mobile={OtpStore.mobile} />
          <VerifyOtpForm navigation={navigation} />
        </Content>
      </SafeAreaView>
    );
  }
}

export default observer(VerifyOtpPage);
