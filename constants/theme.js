const COLORS = {
  bngColor: "#E6EBF5",
  primary: "#003399",
  secondary: "#444262",
  tertiary: "#FF7754",
  black: "#0B0B0B",
  headerColor:"#000A1F",

  gray: "#3B3B3B",
  gray2: "#525252",

  white: "#FAFCFF",
  lightWhite: "#FAFAFC",
};

const FONT = {
  regular: require("../assets/fonts/Sequel-Sans-Black-Body.ttf"),
  bold: require("../assets/fonts/Sequel-Sans-Bold-Head.ttf"),
  medium: require("../assets/fonts/Sequel-Sans-Medium-Head.ttf"),
  semiBold: require("../assets/fonts/Sequel-Sans-Semi-Bold-Head.ttf"),
  light: require("../assets/fonts/Sequel-Sans-Light-Body.ttf"),
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
