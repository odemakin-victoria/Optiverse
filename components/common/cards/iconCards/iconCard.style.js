import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../../constants";


const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 15,
    marginTop:10,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 1,
  },
  iconContainer: {
    width: 40,
    height: 30,
    backgroundColor: '#CCD6EB',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily:FONT.semiBold,
    fontWeight: 700,
    color: COLORS.headerColor,
    fontSize: SIZES.small,
    flex: 1,
    textAlign: 'center',
    flexWrap: 'wrap', // Enable word wrap
  },
  subText: {
    fontFamily:FONT.semiBold,
    fontWeight: 700,
    color: COLORS.headerColor,
    fontSize: SIZES.small,
    flex: 1,
    textAlign: 'center',
    flexWrap: 'wrap',
    marginBottom:5,
  }
});

export default styles;
