import { Center, Spinner } from "native-base";
import LottieView from "lottie-react-native";

export function Loading() {
  return (
    <Center flex={1} mt={5} pb={20}>
      <Spinner color="red" size="lg" />
    </Center>
  );
}
