import {observer} from 'mobx-react';
import {Text, View} from 'native-base';
import React, {PureComponent, ReactFragment} from 'react';
import firebase from 'react-native-firebase';
import {createStackNavigator} from 'react-navigation';
import Home from './screens/home';
import Intro from './screens/Intro';
import SelectCountry from './screens/Location/SelectCountry';
import RequestOtp from './screens/Otp/RequestOtp';
import VerifyOtp from './screens/Otp/VerifyOtp';
import AuthStore from './stores/auth';
import ThemeStore from './stores/theme';

const getAppNavigator = (initialRouteName: string) => {
  return createStackNavigator(
    {
      Home: {screen: Home},
      Intro: {screen: Intro},
      RequestOtp: {screen: RequestOtp},
      VerifyOtp: {screen: VerifyOtp},
      SelectCountry: {screen: SelectCountry},
    },
    {
      initialRouteName,
      defaultNavigationOptions: () => {
        return {
          header: null,
        };
      },
    }
  );
};

@observer
class App extends PureComponent {
  async componentDidMount(): Promise<void> {
    const fcmToken = await firebase.messaging().getToken();
    AuthStore.setFcmToken(fcmToken);
    ThemeStore.getTheme();
    AuthStore.getAuthUser();
  }

  render(): ReactFragment {
    return (
      <View>
        <Text>krunal</Text>
      </View>
    );
  }
}

export default App;
