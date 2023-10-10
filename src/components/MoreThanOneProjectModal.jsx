import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure
} from '@chakra-ui/react'
import { useState } from 'react'

export default function MoreThanOneProjectModal(props) {
    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    )

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = useState(<OverlayOne />)

    return (
        <>
            <Button
                variant='solid'
                colorScheme='facebook'
                onClick={() => {
                    setOverlay(<OverlayOne />)
                    onOpen()
                }}
            >
                Ver mais
            </Button>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalContent w='auto'>
                    <ModalHeader textAlign='center'>Veja os links:</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody textAlign='center'>
                        <a href={props.linkFront} target="_blank" rel="noreferrer">
                            <Button my={5}>Repositório Front-End (Cliente)</Button>
                        </a>
                        <a href={props.linkBack} target="_blank" rel="noreferrer">
                            <Button>Repositório Back-End (Servidor)</Button>
                        </a>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant='solid' colorScheme='facebook' onClick={onClose}>Fechar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
