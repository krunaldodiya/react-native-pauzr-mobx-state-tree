import {observer} from 'mobx-react';
import {Body, Button, Header, Icon, Left, Text, Title, View} from 'native-base';
import React, {PureComponent} from 'react';
import {FlatList, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import LocationStore from '../../../stores/location';
import OtpStore from '../../../stores/otp';
import theme from '../../../libs/theme';

interface SelectCountryPageProps {
  navigation: NavigationScreenProp<any, any>;
}

class SelectCountryPage extends PureComponent<SelectCountryPageProps> {
  state = {
    keywords: '',
  };

  componentDidMount() {
    const {countryList, getCountryList} = LocationStore;

    if (countryList.length === 0) {
      getCountryList();
    }
  }

  get filteredLocation() {
    const {keywords} = this.state;
    const {countryList} = LocationStore;

    if (keywords.length > 2) {
      return countryList.filter(location => {
        return location.name.match(new RegExp(`^${keywords}`, 'gi'));
      });
    }

    return countryList;
  }

  showLoader() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text>loading...</Text>
      </View>
    );
  }

  renderSeparator() {
    return <View style={{height: 1, backgroundColor: '#ccc'}} />;
  }

  showCountries() {
    const {keywords} = this.state;

    return (
      <View style={{marginTop: 10}}>
        <View
          style={{
            backgroundColor: 'lightgrey',
            borderWidth: 1,
            borderColor: '#ccc',
            marginHorizontal: 10,
            borderRadius: 10,
          }}>
          <TextInput
            placeholder="Filter Countries"
            placeholderTextColor="#555"
            keyboardType="default"
            value={keywords}
            onChangeText={value => this.setState({keywords: value})}
            returnKeyType="search"
            style={{
              color: '#000',
              fontFamily: theme.fonts.TitilliumWebLight,
              fontSize: 14,
              paddingVertical: 6,
              paddingLeft: 15,
            }}
          />
        </View>

        <View style={{marginLeft: 8}}>
          <FlatList
            keyboardShouldPersistTaps="handled"
            data={this.filteredLocation}
            keyExtractor={(_, index) => index.toString()}
            ItemSeparatorComponent={this.renderSeparator}
            renderItem={({item}) => (
              <TouchableOpacity style={{padding: 15}} onPress={() => this.setSelectedCountry(item)}>
                <Text
                  style={{
                    color: '#000',
                    fontFamily: theme.fonts.TitilliumWebRegular,
                    fontSize: 14,
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    );
  }

  setSelectedCountry(country: object) {
    const {navigation} = this.props;
    const {setSelectedCountry} = OtpStore;

    setSelectedCountry(country);
    navigation.pop();
  }

  render() {
    const {loading} = LocationStore;
    const {navigation} = this.props;

    return (
      <SafeAreaView style={{flex: 1}}>
        <Header
          androidStatusBarColor="#0D62A2"
          iosBarStyle="light-content"
          style={{backgroundColor: '#0D62A2'}}>
          <Left>
            <Button transparent onPress={() => navigation.pop()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Select Country</Title>
          </Body>
        </Header>

        <View style={{flex: 1}}>{loading ? this.showLoader() : this.showCountries()}</View>
      </SafeAreaView>
    );
  }
}

export default observer(SelectCountryPage);
