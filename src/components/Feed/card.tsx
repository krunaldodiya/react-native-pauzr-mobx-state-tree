import React from 'react';
import {Card, Thumbnail, View, Text, CardItem, Left, Button, Icon} from 'native-base';
import getAssets from '../../libs/image';
import theme from '../../libs/theme';
import FastImage from 'react-native-fast-image';
import {Image, Dimensions} from 'react-native';

export interface FeedProps {
  data: any;
}

class Feed extends React.PureComponent<FeedProps> {
  state = {
    deviceWidth: Dimensions.get('window').width,
    deviceHeight: Dimensions.get('window').width,
  };

  componentDidMount() {
    const {deviceWidth} = this.state;
    const {data} = this.props;
    const {item} = data;

    Image.getSize(
      getAssets(item.url),
      (w, h) => {
        this.setState({deviceHeight: (deviceWidth * h) / w});
      },
      () => console.log('failed')
    );
  }

  render() {
    const {deviceWidth, deviceHeight} = this.state;
    const {data} = this.props;
    const {item} = data;

    return (
      <Card style={{flex: 1}}>
        <View style={{flexDirection: 'row', padding: 10}}>
          <View>
            <Thumbnail
              source={{uri: getAssets(item.owner.avatar)}}
              style={{height: 40, width: 40}}
            />
          </View>

          <View style={{marginLeft: 10, flexDirection: 'column'}}>
            <Text style={{fontSize: 16, fontFamily: theme.fonts.TitilliumWebSemiBold}}>
              {item.owner.name}
            </Text>
            <Text style={{fontSize: 12, fontFamily: theme.fonts.TitilliumWebRegular}} note>
              {item.when}
            </Text>
          </View>
        </View>

        <View style={{flex: 1}}>
          {item.description && (
            <View style={{padding: 10}}>
              <Text style={{fontSize: 14, fontFamily: theme.fonts.TitilliumWebSemiBold}}>
                {item.description}
              </Text>
            </View>
          )}

          <View style={{flex: 1}}>
            <FastImage
              style={{width: deviceWidth, height: deviceHeight}}
              source={{uri: getAssets(item.url)}}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
        </View>

        <CardItem>
          <Left>
            <Button transparent textStyle={{color: '#87838B'}}>
              <Icon type="Entypo" name="heart" style={{color: 'red', fontSize: 22}} />
              <Text>103 likes</Text>
            </Button>
          </Left>
        </CardItem>
      </Card>
    );
  }
}

export default Feed;
