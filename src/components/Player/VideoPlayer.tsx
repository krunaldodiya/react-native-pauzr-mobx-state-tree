import {Button, Card, CardItem, Icon, Right, Text, Thumbnail, Left, Body} from 'native-base';
import React, {PureComponent} from 'react';
import {Dimensions, TouchableHighlight, View} from 'react-native';
import Video from 'react-native-video';
import theme from '../../libs/theme';

interface VideoPlayerProps {
  viewableItems: number[];
  data: any;
}

export default class VideoPlayer extends PureComponent<VideoPlayerProps> {
  state = {
    muted: false,
  };

  render() {
    const {viewableItems, data} = this.props;
    const {index, item} = data;

    const viewableItemList = viewableItems.map((item: any) => item.index);

    let paused = true;
    if (viewableItemList.indexOf(index) >= 0) {
      paused = false;
    }

    return (
      <View>
        <Card style={{flex: 1}}>
          <View style={{flexDirection: 'row', padding: 10}}>
            <View>
              <Thumbnail source={{uri: item.owner.avatar}} style={{height: 40, width: 40}} />
            </View>

            <View style={{marginLeft: 10, flexDirection: 'column'}}>
              <Text style={{fontSize: 16, fontFamily: theme.fonts.TitilliumWebSemiBold}}>
                Milestone Educom
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
              <View>
                <TouchableHighlight onPress={() => this.setState({muted: !this.state.muted})}>
                  <Video
                    source={{uri: item.url}}
                    style={{
                      width: Dimensions.get('window').width - 2,
                      height: (Dimensions.get('window').width * 3) / 4,
                      backgroundColor: 'black',
                    }}
                    paused={paused}
                    muted={this.state.muted}
                    playWhenInactive={true}
                    playInBackground={true}
                    controls={false}
                    fullscreen={false}
                    repeat={true}
                  />
                </TouchableHighlight>
                {this.state.muted && (
                  <View
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      backgroundColor: '#000',
                      padding: 5,
                    }}>
                    <Icon
                      type="MaterialIcons"
                      name="volume-off"
                      style={{color: '#fff', fontSize: 14}}
                    />
                  </View>
                )}
              </View>
            </View>
          </View>

          <CardItem>
            <Left style={{flex: 1}}>
              <Text
                style={{
                  textTransform: 'uppercase',
                  fontSize: 12,
                  fontFamily: theme.fonts.TitilliumWebRegular,
                }}>
                Available on playstore
              </Text>
            </Left>
            <Right>
              <Button small style={{backgroundColor: '#0D62A2'}}>
                <Text>Install</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
      </View>
    );
  }
}
