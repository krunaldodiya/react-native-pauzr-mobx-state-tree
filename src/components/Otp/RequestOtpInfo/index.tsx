import {observer} from 'mobx-react';
import {Text, View} from 'native-base';
import React, {PureComponent} from 'react';
import styles from './styles';

export interface RequestOtpInfoProps {
  title: string;
}

@observer
class RequestOtpInfo extends PureComponent<RequestOtpInfoProps> {
  render() {
    const {title} = this.props;

    return (
      <View style={styles.infoWrapper}>
        <Text style={styles.infoHeading}>{title}</Text>
        <Text style={styles.infoParagraph}>
          Please, Enter your mobile to receive verification code
        </Text>
      </View>
    );
  }
}

export default RequestOtpInfo;
