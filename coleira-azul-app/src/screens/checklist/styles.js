import { StyleSheet } from 'react-native';
import { THEME } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
    paddingHorizontal: 25,
  },

  header: {
    backgroundColor: THEME.COLORS.BACKGROUND,
    marginVertical: 15,
    justifyContent: 'space-evenly',
  },

  title: {
    fontSize: THEME.FONT_SIZE.G,
    color: THEME.COLORS.TITLE,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    textAlign: 'center',
  },

  search: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.P,
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.LIGHT,

    borderBottomWidth: 1,
    borderBottomColor: THEME.COLORS.BORDER,
    height: 36,

    marginTop: 10,
  },

  filters: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },

  buttonStyle: {
    backgroundColor: THEME.COLORS.BACKGROUND,
    borderWidth: 1,
    flex: 1,
    borderRadius: 20,
    borderColor: THEME.COLORS.BORDER,
    paddingLeft: 10,
    marginLeft: 10,
  },

  buttonTextStyle: {
    fontSize: THEME.FONT_SIZE.P,
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.LIGHT,
    textAlign: 'center',
  },

  buttonStyle2: {
    backgroundColor: THEME.COLORS.BACKGROUND,
    borderWidth: 1,
    flex: 1.7,
    borderRadius: 20,
    borderColor: THEME.COLORS.BORDER,
    paddingLeft: 10,
  },

  dropdownStyle: {
    borderRadius: 20,
  },

  rowTextStyle: {
    fontSize: THEME.FONT_SIZE.P,
    fontFamily: THEME.FONT_FAMILY.LIGHT,
  },

  ordenar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },

  text: {
    fontSize: THEME.FONT_SIZE.P,
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    flex: 1.3,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});