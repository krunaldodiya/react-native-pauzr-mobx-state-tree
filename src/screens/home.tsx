import React, {PureComponent} from 'react';
import Swiper from 'react-native-swiper';
import FocusTabs from './Tabs/Focus';
import FunTabs from './Tabs/Fun';
import {NavigationScreenProp} from 'react-navigation';

export interface HomeProps {
  navigation: NavigationScreenProp<any, any>;
}

class Home extends PureComponent<HomeProps> {
  render() {
    return (
      <Swiper
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        showsButtons={false}
        showsPagination={false}
        loop={false}>
        <FocusTabs />
        <FunTabs />
      </Swiper>
    );
  }
}

export default Home;
