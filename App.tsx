import React, {PureComponent, ReactFragment} from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import Home from './Home';

const getAppNavigator = (initialRouteName: string) => {
  return createStackNavigator(
    {
      Home: {screen: Home},
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

class App extends PureComponent {
  render(): ReactFragment {
    const AppNavigator = getAppNavigator('Home');
    const AppContainer = createAppContainer(AppNavigator);

    return <AppContainer />;
  }
}

export default App;
