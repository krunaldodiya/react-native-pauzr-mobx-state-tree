import { observer } from 'mobx-react';
import { Text, View } from 'native-base';
import React, { PureComponent } from 'react';
import styles from './styles';

@observer
class Info extends PureComponent {
  render() {
    return (
      <View style={styles.infoWrapper}>
        <Text style={styles.infoHeading}>REQUEST OTP</Text>
        <Text style={styles.infoParagraph}>
          Please, Enter your mobile to receive verification code
        </Text>
      </View>
    );
  }
}

export default Info;
