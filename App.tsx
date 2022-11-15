import { useFonts } from "expo-font";
import { Loading } from "@components/Loading";
import { Routes } from "@routes/index";
import { NativeBaseProvider } from "native-base";
import { StatusBar } from "react-native";
import { THEME } from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    "SFProDisplay-Bold": require("./assets/fonts/SFProDisplay-Bold.ttf"),
    "SFProDisplay-BoldItalic": require("./assets/fonts/SFProDisplay-BoldItalic.ttf"),
    "SFProDisplay-Light": require("./assets/fonts/SFProDisplay-Light.ttf"),
    "SFProDisplay-LightItalic": require("./assets/fonts/SFProDisplay-LightItalic.ttf"),
    "SFProDisplay-Medium": require("./assets/fonts/SFProDisplay-Medium.ttf"),
    "SFProDisplay-MediumItalic": require("./assets/fonts/SFProDisplay-MediumItalic.ttf"),
    "SFProDisplay-Regular": require("./assets/fonts/SFProDisplay-Regular.ttf"),
    "SFProDisplay-RegularItalic": require("./assets/fonts/SFProDisplay-RegularItalic.ttf"),
    "SFProDisplay-Semibold": require("./assets/fonts/SFProDisplay-Semibold.ttf"),
    "SFProDisplay-SemiboldItalic": require("./assets/fonts/SFProDisplay-SemiboldItalic.ttf"),
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}
