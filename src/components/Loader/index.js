import React, { PureComponent } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from './styles';

class Loader extends PureComponent {
  render() {
    const { loading } = this.props;

    return (
      <Spinner
        visible={loading}
        textContent="Loading..."
        textStyle={styles.spinner}
        overlayColor="rgba(0,0,0,0.8)"
      />
    );
  }
}

export default Loader;
