import { HStack, Text, Pressable, IPressableProps } from "native-base";

type Props = IPressableProps & {
  type: string;
};

export function PokemonTypeCard({ type, ...rest }: Props) {
  return (
    <Pressable mr={3} bg={type} {...rest} rounded="sm" p={1}>
      <HStack>
        <Text
          textTransform="capitalize"
          color="white"
          fontFamily="body"
          fontSize="12"
          fontWeight="400"
        >
          {type}
        </Text>
      </HStack>
    </Pressable>
  );
}
