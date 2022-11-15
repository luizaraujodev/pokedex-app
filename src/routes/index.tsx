import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { Box, useTheme } from "native-base";
import { AppRoutes } from "./app.routes";

export function Routes() {
  const { colors } = useTheme();
  const theme = DefaultTheme;

  theme.colors.background = colors.white;

  return (
    <Box flex={1} bg="white">
      <NavigationContainer theme={theme}>{<AppRoutes />}</NavigationContainer>
    </Box>
  );
}
