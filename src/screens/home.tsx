import React, {PureComponent} from 'react';
import Swiper from 'react-native-swiper';
import FocusTabs from './Tabs/Focus';
import FunTabs from './Tabs/Fun';
import {NavigationScreenProp} from 'react-navigation';

export interface HomePageProps {
  navigation: NavigationScreenProp<any, any>;
}

class HomePage extends PureComponent<HomePageProps> {
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

export default HomePage;
