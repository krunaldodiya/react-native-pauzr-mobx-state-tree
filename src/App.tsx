import { observer } from 'mobx-react';
import React, { PureComponent, ReactFragment } from 'react';
import firebase from 'react-native-firebase';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import SplashScreen from './components/Splash';
import Home from './screens/home';
import Intro from './screens/Intro';
import AuthStore from './stores/auth';
import ThemeStore from './stores/theme';

const getAppNavigator = (initialRouteName: string) => {
  return createStackNavigator(
    {
      Home: { screen: Home },
      Intro: { screen: Intro },
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
    if (AuthStore.loading || ThemeStore.loading || ThemeStore.getScreen == null) {
      return <SplashScreen />;
    }

    // const initialScreen = getInitialScreen(AuthStore.authUser);

    const AppNavigator = getAppNavigator('Intro');

    const AppContainer = createAppContainer(AppNavigator);

    return <AppContainer />;
  }
}

export default App;
