import { StyleSheet } from 'react-native';
import { THEME } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  backButton: {
    paddingHorizontal: 25,
    height: 40,
  },

  textHeader: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.G,
    color: THEME.COLORS.TITLE,
  },

  imgView: {
    marginVertical: 24,
    borderRadius: 100,
    borderColor: THEME.COLORS.TEXT,
    borderWidth: 4,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imgStyle: {
    opacity: 0.4,
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },

  dataCamp: {
    marginHorizontal: 25,
    marginBottom: 18,
  },

  title: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.M2,
    color: THEME.COLORS.TITLE,
  },

  textInput: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: THEME.COLORS.BORDER,
    borderRadius: 10,
    height: 40,
    padding: 9,

    fontFamily: THEME.FONT_FAMILY.LIGHT,
    fontSize: THEME.FONT_SIZE.P,
    color: THEME.COLORS.TITLE,
    textAlignVertical: 'center',
  },

  descInput: {
    height: 70,
    textAlignVertical: 'top',
  },

  saveButton: {
    width: 272,
    height: 55,
    marginTop: 15,
    
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 10,
    backgroundColor: '#000'
  },
});