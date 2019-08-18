import React, {PureComponent, ReactFragment} from 'react';
import Swiper from 'react-native-swiper';
import Focus from './Focus';
import Fun from './Fun';

class Home extends PureComponent {
  render(): ReactFragment {
    return (
      <Swiper
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        showsButtons={false}
        showsPagination={false}
        loop={false}>
        <Focus />
        <Fun />
      </Swiper>
    );
  }
}

export default Home;
