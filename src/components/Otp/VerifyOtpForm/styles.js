import {StyleSheet} from 'react-native';
import theme from '../../../libs/theme';

export default StyleSheet.create({
  formWrapper: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D62A2',
  },
  inputWrapper: {
    borderBottomWidth: 0,
    marginRight: 20,
  },
  input: errors => {
    return {
      borderColor: errors ? '#e74c3c' : 'white',
      color: '#fff',
      borderWidth: 1,
      borderRadius: 10,
      paddingLeft: 20,
      fontFamily: theme.fonts.TitilliumWebRegular,
      fontSize: 12,
    };
  },
  submitButtonWrapper: {
    marginTop: 20,
    alignSelf: 'center',
    borderBottomWidth: 0,
  },
  submitButton: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  submitButtonDisabled: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#ddd',
  },
  submitButtonText: {
    textAlign: 'center',
    fontFamily: theme.fonts.TitilliumWebSemiBold,
    color: '#d80402',
  },
  submitButtonTextDisabled: {
    textAlign: 'center',
    fontFamily: theme.fonts.TitilliumWebSemiBold,
    color: '#bbb',
  },
});
