import { Text, View } from 'native-base';
import React, { PureComponent } from 'react';
import OtpStore from '../../../../stores/otp';
import styles from './styles';

class Info extends PureComponent {
  render() {
    const { mobile } = OtpStore;

    return (
      <View style={styles.infoWrapper}>
        <Text style={styles.infoHeading}>VERIFY OTP</Text>
        <View style={{ marginHorizontal: 20 }}>
          <Text style={styles.infoParagraph}>Please, Enter verification code send to</Text>
          <Text style={{ textAlign: 'center', marginTop: 20, color: '#fff' }}>{mobile}</Text>
        </View>
      </View>
    );
  }
}

export default Info;
