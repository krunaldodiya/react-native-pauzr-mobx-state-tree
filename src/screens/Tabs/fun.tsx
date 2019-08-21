import {observer} from 'mobx-react';
import React, {Fragment, PureComponent} from 'react';
import {NavigationScreenProp} from 'react-navigation';
import FunAppBar from '../../components/AppBar/Fun';
import BottomMenu from '../../components/BottomMenu';
import FeedsPage from './Fun/feeds';
import NotificationsPage from './Fun/notifications';
import PrivateProfilePage from './Fun/private_profile';
import SearchPage from './Fun/search';
import WinnersPage from './Fun/winners';

export interface FunMainPageProps {
  navigation: NavigationScreenProp<any, any>;
}

class FunMainPage extends PureComponent<FunMainPageProps> {
  state = {
    tab: 3,
  };

  changeTab = (tab: number) => {
    this.setState({tab});
  };

  render() {
    const {navigation} = this.props;
    const {tab} = this.state;

    return (
      <Fragment>
        <FunAppBar name="PauzR" navigation={navigation} />

        {tab == 1 && <FeedsPage navigation={navigation} />}
        {tab == 2 && <WinnersPage navigation={navigation} />}
        {tab == 3 && <PrivateProfilePage navigation={navigation} />}
        {tab == 4 && <SearchPage navigation={navigation} />}
        {tab == 5 && <NotificationsPage navigation={navigation} />}

        <BottomMenu
          navigation={navigation}
          backgroundColor="#fff"
          color="grey"
          activeColor="#0D62A2"
          activeTab={tab}
          onChangeTab={this.changeTab}
          tabs={[
            {id: 1, name: 'home', iconName: 'camera', iconType: 'EvilIcons', iconSize: 30},
            {id: 2, name: 'home', iconName: 'trophy', iconType: 'EvilIcons', iconSize: 30},
            {id: 3, name: 'home', iconName: 'user', iconType: 'EvilIcons', iconSize: 30},
            {id: 4, name: 'home', iconName: 'search', iconType: 'EvilIcons', iconSize: 30},
            {id: 5, name: 'home', iconName: 'heart', iconType: 'EvilIcons', iconSize: 30},
          ]}
        />
      </Fragment>
    );
  }
}

export default observer(FunMainPage);
