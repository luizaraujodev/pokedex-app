import { Modal, Heading, IModalProps, Text } from "native-base";

type Props = IModalProps & {};

export function FilterModal({ ...rest }: Props) {
  return (
    <Modal
      animationPreset="slide"
      {...rest}
      size="full"
      closeOnOverlayClick={false}
    >
      <Modal.Content style={{ marginBottom: 0, marginTop: "auto" }}>
        <Modal.CloseButton />
        <Modal.Body>
          <Heading fontSize="38" fontFamily="heading" fontWeight="700">
            Filters
          </Heading>
          <Text fontFamily="body" fontSize="16" fontWeight="400">
            Use advanced search to explore Pokémon by type, weakness, height and
            more!{" "}
          </Text>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}
