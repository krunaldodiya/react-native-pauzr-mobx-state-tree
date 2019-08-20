import {observer} from 'mobx-react';
import React, {PureComponent} from 'react';
import {Dimensions, ImageBackground, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import FocusAppBar from '../../../components/AppBar/Focus';
import TimerCard from './card';

export interface TimerPageProps {
  navigation: NavigationScreenProp<any, any>;
}

class TimerPage extends PureComponent<TimerPageProps> {
  state = {
    size: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  };

  componentDidMount() {
    console.log('TimerPage');
  }

  onTimerCardTap(mins: number) {
    console.log('mins', mins);
  }

  render() {
    const {size} = this.state;
    const {navigation} = this.props;

    return (
      <View style={{flex: 1, backgroundColor: 'skyblue'}}>
        <FocusAppBar name="PauzR" navigation={navigation} />

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            backgroundColor: 'skyblue',
          }}>
          <ImageBackground
            style={{
              width: size.width - 30,
              height: size.height - 160,
            }}
            imageStyle={{borderRadius: 25}}
            source={{
              uri: 'https://i.pinimg.com/originals/16/00/9e/16009e232d2cea548b3a21b8c46b32cb.jpg',
            }}
          />
        </View>

        <View
          style={{
            position: 'absolute',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignSelf: 'center',
            bottom: 30,
          }}>
          <TimerCard
            onTimerCardTap={() => this.onTimerCardTap(10)}
            cardMargin={5}
            cardWidth={Dimensions.get('window').width / 3.1}
            minutes={10}
            points={5}
          />
          <TimerCard
            onTimerCardTap={() => this.onTimerCardTap(20)}
            cardMargin={5}
            cardWidth={Dimensions.get('window').width / 3.1}
            minutes={20}
            points={10}
          />
          <TimerCard
            onTimerCardTap={() => this.onTimerCardTap(30)}
            cardMargin={5}
            cardWidth={Dimensions.get('window').width / 3.1}
            minutes={30}
            points={20}
          />
        </View>
      </View>
    );
  }
}

export default observer(TimerPage);
