import { Form, Icon, Input, Item, Label } from 'native-base';
import React, { PureComponent } from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from './styles';

class EditProfileForm extends PureComponent {
  updateData = data => {
    const { auth, handleInput } = this.props;
    const { authUser } = auth;

    handleInput({ authUser: { ...authUser, ...data } });
  };

  render() {
    const { auth, toggleKeyboardAvoidView } = this.props;
    const { authUser, errors } = auth;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Form style={{ flex: 1 }}>
            <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 0 }}>
              <Item floatingLabel style={styles.item}>
                <Label style={{ color: errors && errors.errors.name ? '#e74c3c' : '#000' }}>
                  {errors && errors.errors.name ? errors.errors.name[0] : 'Full Name'}
                </Label>
                <Input
                  onFocus={() => toggleKeyboardAvoidView(false)}
                  value={errors && errors.errors.name ? null : authUser.name}
                  onChangeText={name => this.updateData({ name })}
                  style={styles.input(errors && errors.errors.name)}
                />
              </Item>
            </View>
          </Form>
          <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 0 }}>
            <Item floatingLabel style={styles.item}>
              <Label style={{ color: errors && errors.errors.name ? '#e74c3c' : '#000' }}>
                {errors && errors.errors.name ? errors.errors.name[0] : 'Email Address'}
              </Label>
              <Input
                onFocus={() => toggleKeyboardAvoidView(false)}
                value={errors && errors.errors.name ? null : authUser.name}
                onChangeText={name => this.updateData({ name })}
                style={styles.input(errors && errors.errors.name)}
              />
            </Item>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 40,
            }}
          >
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Icon name="male" style={{ color: '#00BCD4', fontSize: 55, margin: 10 }} />
              <Text style={{ color: '#ccc', fontSize: 13 }}>Male</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Icon name="female" style={{ color: '#E91E63', fontSize: 55, margin: 10 }} />
              <Text style={{ color: '#ccc', fontSize: 13 }}>Female</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Icon name="birthday" style={{ color: '#000', fontSize: 55, margin: 10 }} />
              <Text style={{ color: '#ccc', fontSize: 13 }}>DOB</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default EditProfileForm;
