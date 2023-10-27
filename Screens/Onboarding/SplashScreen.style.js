import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bngColor,
    
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom:10
  },

  headerText: {
    fontFamily:FONT.bold,
    fontWeight: 700,
    color: COLORS.headerColor,
    fontSize: SIZES.large,
  },

  searchContainer: {
    margin: 1,
  },
  subHeaderText:{
    fontFamily:FONT.bold,
    fontWeight: 700,
    color: COLORS.primary,
    fontSize: SIZES.large,
    paddingLeft:14,
    paddingTop:5
  },
  iconCardContainer:{
    flexDirection: 'row',
    alignItems:"center",
    marginLeft:2
  },
  iconCardContain:{
    flexDirection: 'row',
    alignItems:"center",
    marginLeft:2,
    marginBottom:30,
  },
 line:{
    flex: 1,
    borderTopWidth: 1, // Add a 1px border at the bottom
    borderTopColor: '#CCD6EB',
    marginBottom:90
  },
  serviceLine:{
      borderTopWidth: 1, // Add a 1px border at the bottom
      borderTopColor: '#CCD6EB',
  },
  accountSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  divideLine:{
    flex: 1,
    marginTop:10,
    borderTopWidth: 1, // Add a 1px border at the bottom
    borderTopColor: '#CCD6EB'
  }
});

export default styles;