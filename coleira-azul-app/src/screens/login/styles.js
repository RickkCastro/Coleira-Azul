import { StyleSheet } from 'react-native';
import { THEME } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 45,
  },

  logo: {
    flex: 2,
    alignContent: 'center',
    justifyContent: 'center'
  },

  imgLogo: {
    width: 190,
    height: 190,
  },

  buttons: {
    flex: 1,
    width: 270,
  },

  text: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.GG,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    textAlign: 'center',
    marginBottom: 22,
  },

  connectBt: {
    width: 270,
    height: 54,
    borderRadius: 10,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 15,
    marginBottom: 17,
  },

  btText: {
    fontSize: THEME.FONT_SIZE.G,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    paddingLeft: 10,
  },

  copy: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    marginBottom: 20,
  }
});