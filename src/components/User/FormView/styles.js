import { StyleSheet } from 'react-native';
import theme from '../../../libs/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    borderBottomColor: '#7B1FA2',
    padding: 13,
    width: 300,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
    zIndex: 2,
  },
  termsWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  termsHeader: {
    fontWeight: '400',
    fontFamily: theme.fonts.TitilliumWebSemiBold,
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  topImageWrapper: {
    alignItems: 'center',
    padding: 50,
    backgroundColor: '#006feb',
  },
  topImage: {
    width: 120,
    height: 120,
  },
  formWrapper: {
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  inputGroup: errors => {
    return {
      borderColor: errors ? '#e74c3c' : 'black',
    };
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
  },
  input: errors => {
    return {
      alignSelf: 'center',
      borderColor: errors ? '#e74c3c' : 'gray',
      width: 250,

      fontFamily: theme.fonts.TitilliumWebRegular,
      fontSize: 14,
    };
  },
  buttonGroup: {
    marginTop: 20,
  },
  buttonWrapper: {
    marginBottom: 10,
    justifyContent: 'center',
    borderBottomWidth: 0,
  },
  submitButtonWrapper: {
    marginTop: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    borderBottomWidth: 0,
  },
  submitButton: {
    backgroundColor: '#006feb',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  submitButtonText: {
    textAlign: 'center',
    fontFamily: theme.fonts.TitilliumWebSemiBold,
    fontSize: 14,
    color: 'white',
  },
  submitButtonDisabled: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#000',
  },
});
