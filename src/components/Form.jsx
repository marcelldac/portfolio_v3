import React, { useEffect, useRef } from 'react';
import { useForm } from '@formspree/react';
import {
    Button,
    FormControl,
    FormHelperText,
    Heading,
    Input,
    Textarea,
    useToast
} from '@chakra-ui/react';

function Form() {
    const [state, handleSubmit] = useForm('myyqnoze');
    const toastIdRef = useRef()
    const toast = useToast()

    function addToast() {
        toastIdRef.current = toast({
            description: 'E-mail enviado com sucesso!',
            status: 'success',
            duration: 1000,
        })
    }

    useEffect(() => {
        if (state.succeeded) {
            addToast();
        }
    })
    return (
        <>
            <form method="POST" onSubmit={handleSubmit}>
                <Heading mb={10}>Fala Comigo!</Heading>
                <FormControl>
                    <FormHelperText pb={10}>Escreva sua mensagem abaixo. 👇</FormHelperText>
                    <Input variant='flushed' type="email" name="email" placeholder='Seu e-mail.' mb={10} required />
                    <Input variant='flushed' type="text" name="text" placeholder='Sua empresa.' mb={10} />
                    <Textarea variant='flushed' name="message" placeholder='Sua mensagem.' mb={5} required />
                    {
                        state.submitting ? (
                            <Button isLoading loadingText='Submitting' type='submit' colorScheme='facebook' mb={25}>Enviar</Button>
                        ) : (
                            <Button type='submit' colorScheme='facebook' mb={25}>Enviar</Button>
                        )
                    }
                </FormControl>
            </form >
        </>
    );
}

export default Form;
