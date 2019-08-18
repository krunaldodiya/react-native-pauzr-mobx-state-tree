import { observer } from 'mobx-react';
import { Button, Form, Input, Item, Text } from 'native-base';
import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import OtpStore from '../../../../stores/otp';
import styles from './styles';

interface VerifyOtpFormProps {
  navigation: NavigationScreenProp<any, any>;
}

@observer
class VerifyOtpForm extends PureComponent<VerifyOtpFormProps> {
  isDisable = (clientOtp: number) => {
    if (clientOtp === null) {
      return true;
    }

    return clientOtp.toString().length !== 4;
  };

  render() {
    const { navigation } = this.props;
    const { clientOtp, changeOtp, requestOtp, verifyOtp } = OtpStore;

    return (
      <Form style={styles.formWrapper}>
        <TouchableOpacity
          style={{ marginBottom: 30 }}
          onPress={() => requestOtp(navigation, 'resend')}
        >
          <Text style={{ fontSize: 14, color: '#e74c3c', paddingLeft: 10 }}>RESEND OTP</Text>
        </TouchableOpacity>

        <Item style={styles.inputWrapper}>
          <Input
            placeholder="OTP"
            placeholderTextColor="#ccc"
            maxLength={4}
            // placeholder={errors ? errors.errors.mobile[0] : '9876543210'}
            // placeholderTextColor={errors ? '#e74c3c' : '#ccc'}
            keyboardType="number-pad"
            value={clientOtp}
            onChangeText={number => changeOtp(number)}
            style={styles.input(null)}
          />
        </Item>

        <Item style={styles.submitButtonWrapper}>
          <Button
            rounded
            small
            disabled={this.isDisable(clientOtp)}
            style={this.isDisable(clientOtp) ? styles.submitButtonDisabled : styles.submitButton}
            onPress={() => verifyOtp(navigation)}
          >
            <Text
              style={
                this.isDisable(clientOtp)
                  ? styles.submitButtonTextDisabled
                  : styles.submitButtonText
              }
            >
              VERIFY OTP
            </Text>
          </Button>
        </Item>
      </Form>
    );
  }
}

export default VerifyOtpForm;
