import { StyleSheet } from 'react-native';
import theme from '../../../libs/theme';

export default StyleSheet.create({
  mainContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D62A2',
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 60,
    marginHorizontal: 30,
    fontSize: 26,
    fontFamily: theme.fonts.TitilliumWebRegular,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 50,
    marginHorizontal: 30,
    fontSize: 20,
    fontFamily: theme.fonts.TitilliumWebRegular,
  },
});
