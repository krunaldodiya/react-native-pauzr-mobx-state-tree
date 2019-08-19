import {observer} from 'mobx-react';
import {Header, Content} from 'native-base';
import React, {PureComponent, ReactFragment} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationScreenProp, ScrollView} from 'react-navigation';
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
      <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
        <Loader loading={loading} />
        <Content
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
          }}>
          <RequestOtpInfo title="REQUEST OTP" />
          <RequestOtpForm navigation={navigation} />
        </Content>
      </SafeAreaView>
    );
  }
}

export default observer(RequestOtpPage);
