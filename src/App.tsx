import {observer} from 'mobx-react';
import React, {PureComponent, ReactFragment} from 'react';
import firebase from 'react-native-firebase';
import {createAppContainer, createStackNavigator, NavigationScreenProp} from 'react-navigation';
import SplashScreen from './components/Splash';
import getInitialScreen from './libs/initial_screen';
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

export interface AppProps {
  navigation: NavigationScreenProp<any, any>;
}

@observer
class App extends PureComponent<AppProps> {
  async componentDidMount(): Promise<void> {
    const fcmToken = await firebase.messaging().getToken();
    AuthStore.setFcmToken(fcmToken);
    ThemeStore.getTheme();
    AuthStore.getAuthUser();
  }

  render(): ReactFragment {
    if (AuthStore.loading || ThemeStore.loading || ThemeStore.getScreen == null) {
      return <SplashScreen color="#0D62A2" />;
    }

    const initialScreen = getInitialScreen(AuthStore.authUser);
    const AppNavigator = getAppNavigator(initialScreen);
    const AppContainer = createAppContainer(AppNavigator);

    return <AppContainer />;
  }
}

export default App;
