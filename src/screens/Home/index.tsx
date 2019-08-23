import {observer} from 'mobx-react';
import React, {PureComponent} from 'react';
import SideMenu from 'react-native-side-menu';
import Swiper from 'react-native-swiper';
import {NavigationScreenProp} from 'react-navigation';
import DrawerMenu from '../../components/DrawerMenu';
import AuthStore from '../../stores/auth';
import FocusMainPage from '../Tabs/focus';
import FunMainPage from '../Tabs/fun';

export interface HomePageProps {
  navigation: NavigationScreenProp<any, any>;
}

class HomePage extends PureComponent<HomePageProps> {
  render() {
    const {isDrawerOpened, onChangeDrawer} = AuthStore;
    const menu = <DrawerMenu navigation={this.props.navigation} />;

    return (
      <Swiper
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        showsButtons={false}
        showsPagination={false}
        loop={false}>
        <SideMenu menu={menu} onChange={onChangeDrawer} isOpen={isDrawerOpened}>
          <FocusMainPage navigation={this.props.navigation} />
        </SideMenu>
        <FunMainPage navigation={this.props.navigation} />
      </Swiper>
    );
  }
}

export default observer(HomePage);
