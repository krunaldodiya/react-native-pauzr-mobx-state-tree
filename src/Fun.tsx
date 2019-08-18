import React, { Fragment, PureComponent, ReactFragment } from 'react';
import { SafeAreaView, StatusBar, Text, View, TextInput } from 'react-native';

class Fun extends PureComponent {
  render(): ReactFragment {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#ff1744' }}>
        <StatusBar barStyle="light-content" backgroundColor="#ff1744" />

        <View style={{ padding: 10 }}>
          <TextInput
            placeholder="write something"
            placeholderTextColor="#bbb"
            onChangeText={value => console.log(value)}
            style={{
              borderWidth: 1,
              borderColor: '#fff',
              borderRadius: 10,
              paddingLeft: 20,
              color: '#fff',
            }}
          />
          <View style={{ padding: 10 }}>
            <Text style={{ color: '#fff' }}>Fun</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Fun;
