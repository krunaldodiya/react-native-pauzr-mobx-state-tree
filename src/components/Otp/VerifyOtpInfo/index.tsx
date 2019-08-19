import {observer} from 'mobx-react';
import {Text, View} from 'native-base';
import React, {PureComponent} from 'react';
import styles from './styles';

export interface VerifyOtpInfoProps {
  title: string;
  mobile: string;
}

class VerifyOtpInfo extends PureComponent<VerifyOtpInfoProps> {
  render() {
    const {title, mobile} = this.props;

    return (
      <View style={styles.infoWrapper}>
        <Text style={styles.infoHeading}>{title}</Text>
        <View style={{marginHorizontal: 20}}>
          <Text style={styles.infoParagraph}>Please, Enter verification code send to</Text>
          <Text style={{textAlign: 'center', marginTop: 20, color: '#fff'}}>{mobile}</Text>
        </View>
      </View>
    );
  }
}

export default observer(VerifyOtpInfo);
