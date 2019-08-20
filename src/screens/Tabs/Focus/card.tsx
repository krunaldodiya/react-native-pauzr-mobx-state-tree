import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Card} from 'native-base';

interface TimerCardProps {
  cardWidth: number;
  cardMargin: number;
  minutes: number;
  points: number;
  onTimerCardTap: any;
}

class TimerCard extends React.PureComponent<TimerCardProps> {
  render() {
    const {cardWidth, cardMargin, minutes, points, onTimerCardTap} = this.props;

    return (
      <TouchableOpacity onPress={onTimerCardTap} style={{width: cardWidth, margin: cardMargin}}>
        <Card
          style={{
            borderRadius: 5,
            backgroundColor: 'transparent',
            borderColor: 'transparent',
          }}>
          <View
            style={{
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
              height: 70,
              backgroundColor: 'white',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'black',
                textAlign: 'center',
                fontSize: 24,
                textTransform: 'uppercase',
              }}>
              {minutes}
            </Text>

            <Text
              style={{
                marginTop: 3,
                fontWeight: 'normal',
                color: 'black',
                textAlign: 'center',
                fontSize: 16,
              }}>
              Minutes
            </Text>
          </View>

          <View
            style={{
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
              height: 35,
              backgroundColor: '#0D62A2',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontWeight: '700',
                color: 'white',
                textAlign: 'center',
                fontSize: 13,
                textTransform: 'uppercase',
              }}>
              {points} Points
            </Text>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }
}

export default TimerCard;
