import { Form, Icon, Item, Label } from 'native-base';
import React, { PureComponent } from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from './styles';

class FormView extends PureComponent {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Form style={{ flex: 1 }}>
            <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 0 }}>
              <Item floatingLabel style={styles.item}>
                <Label style={{ color: '#e74c3c' }}>Full Name</Label>
              </Item>
            </View>

            <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 0 }}>
              <Item floatingLabel style={styles.item}>
                <Label style={{ color: '#e74c3c' }}>Email Address</Label>
              </Item>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 40,
              }}
            >
              <View style={{ justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                <Icon name="male" style={{ color: '#00BCD4', fontSize: 55, margin: 10 }} />
                <Text style={{ color: '#ccc', fontSize: 13 }}>Male</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                <Icon name="female" style={{ color: '#E91E63', fontSize: 55, margin: 10 }} />
                <Text style={{ color: '#ccc', fontSize: 13 }}>Female</Text>
              </View>
            </View>
            <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 0 }}>
              <Item floatingLabel style={styles.item}>
                <Label style={{ color: '#e74c3c' }}>Email Address</Label>
              </Item>
            </View>
          </Form>
        </View>
      </ScrollView>
    );
  }
}

export default FormView;
