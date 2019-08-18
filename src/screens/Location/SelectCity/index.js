import { observer } from 'mobx-react';
import { Body, Button, Header, Icon, Left, Text, Title, View } from 'native-base';
import React, { PureComponent } from 'react';
import { FlatList, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import LocationStore from '../../../stores/location';
import OtpStore from '../../../stores/otp';

@observer
class SelectCity extends PureComponent {
  state = {
    keywords: '',
  };

  componentDidMount() {
    const { countryList, getCountryList } = LocationStore;

    if (countryList.length === 0) {
      getCountryList();
    }
  }

  get filteredLocation() {
    const { keywords } = this.state;
    const { countryList } = LocationStore;

    if (keywords.length > 2) {
      return countryList.filter(location => {
        return location.name.match(new RegExp(`^${keywords}`, 'gi'));
      });
    }

    return countryList;
  }

  showLoader = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}
      >
        <Text>loading...</Text>
      </View>
    );
  };

  renderSeparator = () => {
    return <View style={{ height: 1, backgroundColor: '#ccc' }} />;
  };

  showCountries = () => {
    const { keywords } = this.state;

    return (
      <View style={{ marginTop: 10 }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            paddingLeft: 10,
            marginTop: 5,
            marginHorizontal: 10,
          }}
        >
          <TextInput
            placeholder="Filter Countries"
            placeholderTextColor="#ccc"
            keyboardType="default"
            value={keywords}
            onChangeText={value => this.setState({ keywords: value })}
            style={{ color: '#000' }}
          />
        </View>

        <FlatList
          keyboardShouldPersistTaps="handled"
          data={this.filteredLocation}
          keyExtractor={(_, index) => index.toString()}
          ItemSeparatorComponent={this.renderSeparator}
          renderItem={({ item }) => (
            <TouchableOpacity style={{ padding: 20 }} onPress={() => this.setSelectedCountry(item)}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };

  setSelectedCountry = country => {
    const { navigation } = this.props;
    const { setSelectedCountry } = OtpStore;

    setSelectedCountry(country);
    navigation.pop();
  };

  render() {
    const { loading } = LocationStore;
    const { navigation } = this.props;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Header
          androidStatusBarColor="#0D62A2"
          iosBarStyle="light-content"
          style={{ backgroundColor: '#0D62A2' }}
        >
          <Left>
            <Button transparent onPress={() => navigation.pop()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Select Country</Title>
          </Body>
        </Header>

        <View style={{ flex: 1 }}>{loading ? this.showLoader() : this.showCountries()}</View>
      </SafeAreaView>
    );
  }
}

export default SelectCity;
