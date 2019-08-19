import {observer} from 'mobx-react';
import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import FunAppBar from '../../../components/AppBar/Fun';
import AuthStore from '../../../stores/auth';

export interface SearchPageProps {
  navigation: NavigationScreenProp<any, any>;
}

@observer
class SearchPage extends PureComponent<SearchPageProps> {
  componentDidMount() {
    console.log('SearchPage');
  }

  render() {
    const {navigation} = this.props;

    return (
      <View style={{flex: 1, backgroundColor: '#ddd'}}>
        <FunAppBar name="Search" navigation={navigation} />

        {AuthStore.authUser && <Text style={{color: '#000'}}>{AuthStore.authUser.name}</Text>}
      </View>
    );
  }
}

export default SearchPage;
