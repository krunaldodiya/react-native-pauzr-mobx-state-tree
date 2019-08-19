import {observer} from 'mobx-react';
import React, {PureComponent} from 'react';
import {ActivityIndicator, SafeAreaView} from 'react-native';

export interface SplashScreenProps {
  color: string;
}

class SplashScreen extends PureComponent<SplashScreenProps> {
  render() {
    const {color} = this.props;

    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: color,
        }}>
        <ActivityIndicator color="white" size="large" />
      </SafeAreaView>
    );
  }
}

export default observer(SplashScreen);
