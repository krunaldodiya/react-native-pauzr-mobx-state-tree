import { observer } from 'mobx-react';
import React, { PureComponent } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from './styles';

interface LoaderProps {
  loading: boolean;
}

@observer
class Loader extends PureComponent<LoaderProps> {
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
