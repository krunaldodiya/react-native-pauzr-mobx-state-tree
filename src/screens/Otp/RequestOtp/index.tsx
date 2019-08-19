import {observer} from 'mobx-react';
import {Header} from 'native-base';
import React, {PureComponent, ReactFragment} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';

interface RequestOtpPageProps {
  navigation: NavigationScreenProp<any, any>;
}

@observer
class RequestOtpPage extends PureComponent<RequestOtpPageProps> {
  render(): ReactFragment {
    // const {navigation} = this.props;
    // const {loading} = OtpStore;

    return (
      <SafeAreaView style={{flex: 1}}>
        <Header
          androidStatusBarColor="#fff"
          iosBarStyle="light-content"
          style={{backgroundColor: '#fff'}}
        />
        {/* <Loader loading={loading} />
        <RequestOtpInfo title="REQUEST OTP" />
        <RequestOtpForm navigation={navigation} /> */}
      </SafeAreaView>
    );
  }
}

export default RequestOtpPage;
