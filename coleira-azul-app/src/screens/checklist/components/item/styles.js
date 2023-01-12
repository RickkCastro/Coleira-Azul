import { StyleSheet } from 'react-native';
import { THEME } from '../../../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.BACKGROUND2,
    padding: 20,
    
    borderRadius: 20,
    borderWidth: 1,
    borderColor: THEME.COLORS.BORDER,

    marginVertical: 15,
  },

  infos: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  img: {
    width: 95,
    height: 132,
    marginRight: 10,
    borderRadius: 10,
  },

  texts: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontSize: THEME.FONT_SIZE.M,
    color: THEME.COLORS.TITLE,
    fontFamily: THEME.FONT_FAMILY.BLACK,
    marginBottom: 5,
    textAlign: 'center',
  },

  desc: { 
    fontSize: THEME.FONT_SIZE.P,
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    marginBottom: 5,
    textAlign: 'center',
  },

  data: {
    fontSize: THEME.FONT_SIZE.P,
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.LIGHT,
    textAlign: 'center',
  },

  buttonStyle: {
    backgroundColor: 'transparent',
    width: '100%',
    height: 40,
    borderWidth: 1,
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
    paddingHorizontal: 15,
  },

  dropdownStyle: {
    borderRadius: 20,
  },

  rowTextStyle: {
    fontSize: THEME.FONT_SIZE.P,
    fontFamily: THEME.FONT_FAMILY.LIGHT,
  },

  buttonChild: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }

});