import {observer} from 'mobx-react';
import {Body, Left, List, ListItem, Right, Text, Thumbnail} from 'native-base';
import React, {PureComponent} from 'react';
import getAssets from '../../../libs/image';
import theme from '../../../libs/theme';

export interface PostLikedProps {
  item: any;
}

class PostLiked extends PureComponent<PostLikedProps> {
  render() {
    const {item} = this.props;

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
            <Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#0D62A2',
                  fontWeight: item.read ? 'normal' : '600',
                  fontFamily: theme.fonts.TitilliumWebRegular,
                }}>
                {item.user.name}{' '}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: item.read ? 'grey' : 'black',
                  fontWeight: item.read ? 'normal' : '600',
                  fontFamily: theme.fonts.TitilliumWebRegular,
                }}>
                liked your post.
              </Text>
            </Text>

            <Text
              style={{
                marginTop: 5,
                fontSize: 12,
                color: item.read ? 'grey' : 'black',
                fontWeight: item.read ? 'normal' : '600',
                fontFamily: theme.fonts.TitilliumWebRegular,
              }}
              note>
              {item.when}
            </Text>
          </Body>

          <Right>
            <Thumbnail
              square
              source={{uri: getAssets(item.post.url)}}
              style={{height: 40, width: 40}}
            />
          </Right>
        </ListItem>
      </List>
    );
  }
}

export default observer(PostLiked);
