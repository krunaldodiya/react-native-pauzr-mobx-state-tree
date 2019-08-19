import {observer} from 'mobx-react';
import {Body, Left, List, ListItem, Right, Text, Thumbnail, View} from 'native-base';
import React, {PureComponent} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import FunAppBar from '../../../components/AppBar/Fun';
import getAssets from '../../../libs/image';
import theme from '../../../libs/theme';
import LotteryStore from '../../../stores/lottery';

export interface WinnersPageProps {
  navigation: NavigationScreenProp<any, any>;
}

class WinnersPage extends PureComponent<WinnersPageProps> {
  async componentDidMount() {
    this.getLotteryWinners();
  }

  getLotteryWinners = async () => {
    await LotteryStore.getLotteryWinners();
  };

  renderItem = (data: any) => {
    const {item} = data;

    return (
      <List>
        <ListItem avatar>
          <Left>
            <Thumbnail
              source={{uri: getAssets(item.user.avatar)}}
              style={{height: 40, width: 40}}
            />
          </Left>
          <Body>
            <Text
              style={{
                fontSize: 16,
                fontFamily: theme.fonts.TitilliumWebSemiBold,
                marginBottom: 5,
              }}>
              {item.user.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: theme.fonts.TitilliumWebRegular,
              }}
              note>
              Won ₹{item.amount}
            </Text>
          </Body>
          <Right>
            <Text
              style={{
                fontSize: 12,
                fontFamily: theme.fonts.TitilliumWebSemiBold,
                marginBottom: 5,
              }}
              note>
              {item.date}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: theme.fonts.TitilliumWebSemiBold,
              }}
              note>
              {item.time}
            </Text>
          </Right>
        </ListItem>
      </List>
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
        {LotteryStore.loading === false && LotteryStore.current_page === LotteryStore.last_page ? (
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
        <FunAppBar name="Winners" navigation={navigation} />

        <FlatList
          keyboardShouldPersistTaps="handled"
          data={LotteryStore.allWinners}
          keyExtractor={(_, index) => index.toString()}
          renderItem={this.renderItem}
          onEndReached={this.getLotteryWinners}
          onEndReachedThreshold={0.5}
          ListFooterComponent={this.showLoading}
        />
      </View>
    );
  }
}

export default observer(WinnersPage);
