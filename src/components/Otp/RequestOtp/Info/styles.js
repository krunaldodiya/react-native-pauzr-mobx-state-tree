import { StyleSheet } from 'react-native';
import theme from '../../../../libs/theme';

export default StyleSheet.create({
  infoWrapper: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D62A2',
  },
  infoHeading: {
    fontSize: 26,
    textAlign: 'center',
    color: '#fff',
    fontFamily: theme.fonts.TitilliumWebSemiBold,
  },
  infoParagraph: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
    marginHorizontal: 20,
    marginTop: 50,
    fontFamily: theme.fonts.TitilliumWebRegular,
  },
});
