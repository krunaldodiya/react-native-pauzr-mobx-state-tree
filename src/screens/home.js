import React, { PureComponent } from 'react';
import Swiper from 'react-native-swiper';
import FocusTabs from './Tabs/Focus';
import FunTabs from './Tabs/Fun';

class Home extends PureComponent {
  render() {
    return (
      <Swiper
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        showsButtons={false}
        showsPagination={false}
        loop={false}
      >
        <FocusTabs />
        <FunTabs />
      </Swiper>
    );
  }
}

export default Home;
