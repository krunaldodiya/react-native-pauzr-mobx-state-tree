import {observer} from 'mobx-react';
import {Text, View} from 'native-base';
import React, {PureComponent} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import FunAppBar from '../../../components/AppBar/Fun';
import PostLiked from '../../../components/Notifications/PostLiked';
import UserFollowed from '../../../components/Notifications/UserFollowed';
import NotificationStore from '../../../stores/notifications';

export interface NotificationsPageProps {
  navigation: NavigationScreenProp<any, any>;
}

class NotificationsPage extends PureComponent<NotificationsPageProps> {
  async componentDidMount() {
    this.getNotifications();
  }

  getNotifications = async () => {
    await NotificationStore.getNotifications();
  };

  renderItem = (data: any) => {
    const {item} = data;

    if (item.type === 'App\\Notifications\\PostLiked') {
      return <PostLiked item={item} />;
    }

    return <UserFollowed item={item} />;
  };

  showLoading = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}>
        {NotificationStore.loading === false &&
        NotificationStore.current_page === NotificationStore.last_page ? (
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
        <FunAppBar name="Notifications" navigation={navigation} />

        <FlatList
          keyboardShouldPersistTaps="handled"
          data={NotificationStore.allNotifications}
          keyExtractor={(_, index) => index.toString()}
          renderItem={this.renderItem}
          onEndReached={this.getNotifications}
          onEndReachedThreshold={0.5}
          ListFooterComponent={this.showLoading}
        />
      </View>
    );
  }
}

export default observer(NotificationsPage);
