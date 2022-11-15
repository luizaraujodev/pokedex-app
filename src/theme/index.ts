import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    bug: "#8CB230",
    bugBg: "#8BD674",
    dark: "#58575F",
    darkBg: "#6F6E78",
    dragon: "#0F6AC0",
    dragonBg: "#7383B9",
    eletric: "#EED535",
    eletricBg: "#F2CB55",
    fairy: "#ED6EC7",
    fairyBg: "#EBA8C3",
    fighting: "#D04164",
    fightingBg: "#EB4971",
    fire: "#FD7D24",
    fireBg: "#FFA756",
    flying: "#748FC9",
    flyingBg: "#83A2E3",
    ghost: "#556AAE",
    ghostBg: "#8571BE",
    grass: "#62B957",
    grassBg: "#8BBE8A",
    ground: "#DD7748",
    groundBg: "#F78551",
    ice: "#61CEC0",
    iceBg: "#91D8DF",
    normal: "#9DA0AA",
    normalBg: "#B5B9C4",
    poison: "#A552CC",
    poisonBg: "#9F6E97",
    psychic: "#EA5D60",
    psychicBg: "#FF6568",
    rock: "#BAAB82",
    rockBg: "#D4C294",
    steel: "#417D9A",
    steelBg: "#4C91B2",
    water: "#4A90DA",
    waterBg: "#58ABF6",

    white: "#FFFFFF",
    inputBgDefault: "#F2F2F2",
    textGray: "#747476",
  },
  fontConfig: {
    SFProDisplay: {
      100: {
        normal: "SFProDisplay-Light",
        italic: "SFProDisplay-LightItalic",
      },
      200: {
        normal: "SFProDisplay-Light",
        italic: "SFProDisplay-LightItalic",
      },
      300: {
        normal: "SFProDisplay-Light",
        italic: "SFProDisplay-LightItalic",
      },
      400: {
        normal: "SFProDisplay-Regular",
        italic: "SFProDisplay-Italic",
      },
      500: {
        normal: "SFProDisplay-Medium",
      },
      600: {
        normal: "SFProDisplay-Medium",
        italic: "SFProDisplay-MediumItalic",
      },
      700: {
        normal: "SFProDisplay-Bold",
      },
      800: {
        normal: "SFProDisplay-Bold",
        italic: "SFProDisplay-BoldItalic",
      },
      900: {
        normal: "SFProDisplay-Bold",
        italic: "SFProDisplay-BoldItalic",
      },
    },
  },
  fonts: {
    heading: "SFProDisplay",
    body: "SFProDisplay",
    mono: "SFProDisplay",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
  sizes: {
    14: 56,
    33: 148,
  },
});
