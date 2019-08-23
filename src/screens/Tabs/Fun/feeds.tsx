import {observer} from 'mobx-react';
import {Text} from 'native-base';
import React, {PureComponent} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import Feed from '../../../components/Feed/card';
import FeedStore from '../../../stores/feed';
import VideoPlayer from '../../../components/Player/VideoPlayer';

export interface FeedsPageProps {
  navigation: NavigationScreenProp<any, any>;
}

class FeedsPage extends PureComponent<FeedsPageProps> {
  state = {
    viewableItems: [],
  };

  componentDidMount() {
    this.getFeeds();
  }

  async getFeeds() {
    await FeedStore.getFeeds();
  }

  renderItem(data: any) {
    const {index} = data;
    const {viewableItems} = this.state;

    const videoData = {
      index: 1,
      item: {
        title: '',
        owner: {
          name: 'Milestone Educom',
          avatar:
            'https://scontent.famd4-1.fna.fbcdn.net/v/t1.0-1/p200x200/64662137_2271763296277748_9118558612740898816_n.png?_nc_cat=107&_nc_oc=AQkxYxvjH32kdtKB-CaF5QOOdtVb4fzyQOz2-oW9HWOZIRmTim5vFqg5Eg91JNuvdZ4&_nc_ht=scontent.famd4-1.fna&oh=423e36b8b57ba89ef7f9958e9edbb4a6&oe=5E146EC7',
        },
        description: null,
        url: 'https://wappspecial.com/uploadfile/10th_Guj/Basic/common.mp4',
        when: 'sponsored',
      },
    };

    return (
      <React.Fragment>
        <Feed data={data} />

        {index == 1 && <VideoPlayer viewableItems={viewableItems} data={videoData} />}
      </React.Fragment>
    );
  }

  showLoading() {
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
  }

  onViewableItemsChanged = (data: any) => {
    this.setState({
      viewableItems: data.viewableItems,
    });
  };

  render() {
    const {navigation} = this.props;

    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <FlatList
          keyboardShouldPersistTaps="handled"
          data={FeedStore.allFeeds}
          keyExtractor={(_, index) => index.toString()}
          renderItem={data => this.renderItem(data)}
          onEndReached={this.getFeeds}
          onEndReachedThreshold={0.5}
          ListFooterComponent={this.showLoading}
          viewabilityConfig={{
            minimumViewTime: 10,
            itemVisiblePercentThreshold: 10,
            // viewAreaCoveragePercentThreshold: 10,
          }}
          onViewableItemsChanged={this.onViewableItemsChanged}
        />
      </View>
    );
  }
}

export default observer(FeedsPage);
