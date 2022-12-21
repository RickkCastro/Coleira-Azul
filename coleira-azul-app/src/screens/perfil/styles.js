import { StyleSheet } from 'react-native';
import { THEME } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.BACKGROUND
  },

  gradient: {
    width: '100%',
    height: 210,
  },

  header: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  button: {
    height: 40,
    justifyContent: 'flex-start',
    paddingHorizontal: 25,
  },

  logout: {
    fontSize: THEME.FONT_SIZE.M,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.TEXT,
    textAlignVertical: 'center'
  },

  imgPerfil: {
    width: 170,
    height: 170,
    borderRadius: 100,
    borderColor: THEME.COLORS.TEXT,
    borderWidth: 4,
    alignSelf: 'center',
  },

  titleView: {
    marginTop: 60,
    alignItems: 'center',
    marginHorizontal: 25,
  },

  name: {
    color: THEME.COLORS.TITLE,
    fontFamily: THEME.FONT_FAMILY.BLACK,
    fontSize: THEME.FONT_SIZE.G,
    textAlign: 'center'
  },

  desc: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.M,
    textAlign: 'center'
  },
});