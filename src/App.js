import {observer} from 'mobx-react';
import React, {PureComponent} from 'react';
// import firebase from 'react-native-firebase';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import SplashScreen from './components/Splash';
import getInitialScreen from './libs/initial_screen';
import Home from './screens/home';
import Intro from './screens/Intro';
import SelectCountry from './screens/Location/SelectCountry';
import RequestOtp from './screens/Otp/RequestOtp';
import VerifyOtp from './screens/Otp/VerifyOtp';
import AuthStore from './stores/auth';
import ThemeStore from './stores/theme';

const getAppNavigator = initialRouteName => {
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
    },
  );
};

@observer
class App extends PureComponent {
  async componentDidMount() {
    // const fcmToken = await firebase.messaging().getToken();
    // AuthStore.setFcmToken(fcmToken);

    ThemeStore.getTheme();
    AuthStore.getAuthUser();
  }

  render() {
    if (
      AuthStore.isLoading ||
      ThemeStore.isLoading ||
      ThemeStore.getScreen == null
    ) {
      return <SplashScreen />;
    }

    const initialScreen = getInitialScreen(AuthStore.authUser);

    const AppNavigator = getAppNavigator(initialScreen);

    const AppContainer = createAppContainer(AppNavigator);

    return <AppContainer />;
  }
}

export default App;
