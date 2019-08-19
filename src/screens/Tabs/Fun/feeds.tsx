import {observer} from 'mobx-react';
import {Button, Card, CardItem, Icon, Left, Text, Thumbnail} from 'native-base';
import React, {PureComponent} from 'react';
import {ActivityIndicator, Dimensions, FlatList, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import FunAppBar from '../../../components/AppBar/Fun';
import getAssets from '../../../libs/image';
import theme from '../../../libs/theme';
import FeedStore from '../../../stores/feed';
import {NavigationScreenProp} from 'react-navigation';

export interface FeedsPageProps {
  navigation: NavigationScreenProp<any, any>;
}

@observer
class FeedsPage extends PureComponent<FeedsPageProps> {
  async componentDidMount() {
    await this.getFeeds();
  }

  getFeeds = async () => {
    await FeedStore.getFeeds();
  };

  renderItem = (data: any) => {
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
              style={{width: Dimensions.get('screen').width - 4}}
              source={{uri: getAssets(item.url)}}
              resizeMode="contain"
              resizeMethod="auto"
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
  };

  showLoading = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}>
        {FeedStore.loading === false && FeedStore.current_page === FeedStore.last_page ? (
          <Text>No more results.</Text>
        ) : (
          <ActivityIndicator color="black" size="large" />
        )}
      </View>
    );
  };

  render() {
    const {navigation} = this.props;

    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <FunAppBar name="Timeline" navigation={navigation} />

        <FlatList
          keyboardShouldPersistTaps="handled"
          data={FeedStore.allFeeds}
          keyExtractor={(_, index) => index.toString()}
          renderItem={this.renderItem}
          onEndReached={this.getFeeds}
          onEndReachedThreshold={0.5}
          ListFooterComponent={this.showLoading}
        />
      </View>
    );
  }
}

export default FeedsPage;
