import {observer} from 'mobx-react';
import {Button, Icon} from 'native-base';
import React, {PureComponent} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import FunAppBar from '../../../components/AppBar/Fun';
import getAssets from '../../../libs/image';
import theme from '../../../libs/theme';
import AuthStore from '../../../stores/auth';
import FeedStore from '../../../stores/feed';

export interface PrivateProfilePageProps {
  navigation: NavigationScreenProp<any, any>;
}

@observer
class PrivateProfilePage extends PureComponent<PrivateProfilePageProps> {
  state = {
    tab: 0,
  };

  async componentDidMount() {
    await this.getFeeds();
  }

  getFeeds = async () => {
    await FeedStore.getFeeds();
  };

  renderItem = (data: any) => {
    const {item} = data;

    const size = Dimensions.get('screen').width / 3 - 2;

    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          margin: 1,
          maxWidth: size,
        }}>
        <Image style={{width: size, height: size}} source={{uri: getAssets(item.url)}} />
      </View>
    );
  };

  filterPosts = () => {
    const {tab} = this.state;

    if (tab === 0) {
      return FeedStore.allFeeds.filter(post => post.user_id === AuthStore.authUser.id);
    }

    return FeedStore.allFeeds;
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
    const {tab} = this.state;

    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <FunAppBar name="Profile" navigation={navigation} />

        <ScrollView>
          <View style={{flexDirection: 'row', padding: 10}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  style={{width: 70, height: 70, borderRadius: 35}}
                  source={{uri: getAssets(AuthStore.authUser.avatar)}}
                />
              </View>
            </View>

            <View style={{flex: 3, flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  padding: 10,
                }}>
                <Text
                  style={{
                    marginBottom: 5,
                    color: '#000',
                    fontSize: 20,
                    fontFamily: theme.fonts.TitilliumWebSemiBold,
                    fontWeight: 'bold',
                  }}>
                  350
                </Text>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 14,
                    fontFamily: theme.fonts.TitilliumWebRegular,
                    fontWeight: '600',
                  }}>
                  Posts
                </Text>
              </View>

              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  padding: 10,
                }}>
                <Text
                  style={{
                    marginBottom: 5,
                    color: '#000',
                    fontSize: 20,
                    fontFamily: theme.fonts.TitilliumWebSemiBold,
                    fontWeight: 'bold',
                  }}>
                  55K
                </Text>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 14,
                    fontFamily: theme.fonts.TitilliumWebRegular,
                    fontWeight: '600',
                  }}>
                  Followers
                </Text>
              </View>

              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  padding: 10,
                }}>
                <Text
                  style={{
                    marginBottom: 5,
                    color: '#000',
                    fontSize: 20,
                    fontFamily: theme.fonts.TitilliumWebSemiBold,
                    fontWeight: 'bold',
                  }}>
                  15
                </Text>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 14,
                    fontFamily: theme.fonts.TitilliumWebRegular,
                    fontWeight: '600',
                  }}>
                  Following
                </Text>
              </View>
            </View>
          </View>

          <View style={{marginHorizontal: 20, marginVertical: 5}}>
            <Text
              style={{
                color: '#000',
                fontSize: 18,
                fontFamily: theme.fonts.TitilliumWebBold,
                marginBottom: 5,
              }}>
              {AuthStore.authUser.name}
            </Text>

            {AuthStore.authUser.bio && (
              <Text
                style={{
                  color: '#404040',
                  fontSize: 13,
                  fontFamily: theme.fonts.TitilliumWebRegular,
                }}>
                {AuthStore.authUser.bio}
              </Text>
            )}
          </View>

          <View style={{marginTop: 10, marginHorizontal: 5, flexDirection: 'row'}}>
            <Button
              small
              full
              light
              bordered
              style={{flex: 1, margin: 5, borderColor: '#aaa', borderRadius: 5}}>
              <Text>Edit Profile</Text>
            </Button>

            <Button
              small
              full
              light
              bordered
              style={{flex: 1, margin: 5, borderColor: '#aaa', borderRadius: 5}}>
              <Text>Create Post</Text>
            </Button>
          </View>

          <View style={{marginTop: 10, borderTopColor: '#eee', borderTopWidth: 1}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => this.setState({tab: 0})}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  borderBottomColor: tab === 0 ? '#555' : '#eee',
                  borderBottomWidth: 1,
                  padding: 10,
                }}>
                <Icon
                  name="grid"
                  type="SimpleLineIcons"
                  style={{color: tab === 0 ? '#555' : '#aaa', fontSize: 18}}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.setState({tab: 1})}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  borderBottomColor: tab === 1 ? '#555' : '#eee',
                  borderBottomWidth: 1,
                  padding: 10,
                }}>
                <Icon
                  name="heart"
                  type="SimpleLineIcons"
                  style={{color: tab === 1 ? '#555' : '#aaa', fontSize: 18}}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <FlatList
              numColumns={3}
              keyboardShouldPersistTaps="handled"
              data={this.filterPosts()}
              keyExtractor={(_, index) => index.toString()}
              renderItem={this.renderItem}
              onEndReached={this.getFeeds}
              onEndReachedThreshold={0.5}
              ListFooterComponent={this.showLoading}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default PrivateProfilePage;
