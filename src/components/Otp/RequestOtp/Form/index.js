import { observer } from 'mobx-react';
import { Button, Form, Input, Item, Text } from 'native-base';
import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import screens from '../../../../libs/screens';
import OtpStore from '../../../../stores/otp';
import styles from './styles';

@observer
class RequestOtpForm extends PureComponent {
  isDisable = mobile => {
    if (mobile === null) {
      return true;
    }

    return mobile.length <= 5;
  };

  render() {
    const { navigation } = this.props;
    const { mobile, country, changeMobile, requestOtp } = OtpStore;

    return (
      <Form style={styles.formWrapper}>
        <TouchableOpacity
          style={styles.country}
          onPress={() => navigation.push(screens.SelectCountry)}
        >
          <Text style={{ fontSize: 12, color: '#ccc', paddingLeft: 10 }}>
            {country ? country.name : 'Country'}
          </Text>
        </TouchableOpacity>

        <Item style={styles.inputWrapper}>
          <Input
            placeholder="Mobile Number (Without Country Code)"
            placeholderTextColor="#ccc"
            // placeholder={errors ? errors.errors.mobile[0] : '9876543210'}
            // placeholderTextColor={errors ? '#e74c3c' : '#ccc'}
            keyboardType="number-pad"
            value={mobile}
            onChangeText={number => changeMobile(number)}
            style={styles.input(null)}
          />
        </Item>

        <Item style={styles.submitButtonWrapper}>
          <Button
            rounded
            small
            disabled={this.isDisable(mobile)}
            style={this.isDisable(mobile) ? styles.submitButtonDisabled : styles.submitButton}
            onPress={() => requestOtp(navigation, 'send')}
          >
            <Text
              style={
                this.isDisable(mobile) ? styles.submitButtonTextDisabled : styles.submitButtonText
              }
            >
              SEND OTP
            </Text>
          </Button>
        </Item>
      </Form>
    );
  }
}

export default RequestOtpForm;
