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
    alignItems: 'center'
  },

  button: {
    height: 40,
    paddingHorizontal: 25,
    justifyContent: 'flex-start'
  },

  logout: {
    fontSize: THEME.FONT_SIZE.G,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.TEXT,
    textAlignVertical: 'center'
  },

  imgPerfil: {
    width: 179,
    height: 179,
    borderRadius: 100,
    borderColor: THEME.COLORS.TEXT,
    borderWidth: 4,
    alignSelf: 'center',
    top: 30,
  },

  titleView: {
    marginTop: 80,
    alignItems: 'center'
  },

  name: {
    color: THEME.COLORS.TITLE,
    fontFamily: THEME.FONT_FAMILY.BLACK,
    fontSize: THEME.FONT_SIZE.GGG,
  },

  desc: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.M,
  },
});