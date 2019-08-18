import React, { PureComponent } from 'react';
import { KeyboardAvoidingView, SafeAreaView } from 'react-native';
import Loader from '../../../components/Loader';
import EditProfileForm from '../../../components/User/Profile/EditProfileForm';
import EditProfileHeader from '../../../components/User/Profile/EditProfileHeader';

class EditProfile extends PureComponent {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior="position"
          enabled="true"
          style={{ flex: 1 }}
          contentContainerStyle={{ flex: 1 }}
        >
          <Loader loading={false} />
          <EditProfileHeader />
          <EditProfileForm />
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default EditProfile;
