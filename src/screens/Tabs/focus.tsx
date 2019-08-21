import {observer} from 'mobx-react';
import React, {Fragment, PureComponent} from 'react';
import {NavigationScreenProp} from 'react-navigation';
import FocusAppBar from '../../components/AppBar/Focus';
import BottomMenu from '../../components/BottomMenu';
import GroupPage from './Focus/group';
import ScoreboardPage from './Focus/scoreboard';
import TimerPage from './Focus/timer';

export interface FocusMainPageProps {
  navigation: NavigationScreenProp<any, any>;
}

class FocusMainPage extends PureComponent<FocusMainPageProps> {
  state = {
    tab: 2,
  };

  changeTab = (tab: number) => {
    this.setState({tab});
  };

  render() {
    const {navigation} = this.props;
    const {tab} = this.state;

    return (
      <Fragment>
        <FocusAppBar name="PauzR" navigation={navigation} />

        {tab == 1 && <GroupPage navigation={navigation} />}
        {tab == 2 && <TimerPage navigation={navigation} />}
        {tab == 3 && <ScoreboardPage navigation={navigation} />}

        <BottomMenu
          navigation={navigation}
          backgroundColor="#fff"
          color="grey"
          activeColor="#0D62A2"
          activeTab={tab}
          onChangeTab={this.changeTab}
          tabs={[
            {id: 1, name: 'home', iconName: 'ios-people', iconType: 'Ionicons', iconSize: 26},
            {id: 2, name: 'home', iconName: 'ios-pause', iconType: 'Ionicons', iconSize: 26},
            {id: 3, name: 'home', iconName: 'ios-stats', iconType: 'Ionicons', iconSize: 26},
          ]}
        />
      </Fragment>
    );
  }
}

export default observer(FocusMainPage);
