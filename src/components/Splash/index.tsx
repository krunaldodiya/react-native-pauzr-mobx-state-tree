import { observer } from 'mobx-react';
import React, { PureComponent } from 'react';
import { ActivityIndicator, SafeAreaView } from 'react-native';

@observer
class SplashScreen extends PureComponent {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#0D62A2',
        }}
      >
        <ActivityIndicator color="white" size="large" />
      </SafeAreaView>
    );
  }
}

export default SplashScreen;
