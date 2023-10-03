import React from 'react';
import { useForm } from '@formspree/react';
import { Button, FormControl, FormHelperText, Heading, Input, Spinner, Textarea } from '@chakra-ui/react';

const Submitting = () => { return <Spinner thickness='4px' speed='0.65s' color='green.400'size='xl' /> };

const Succeeded = () => { return <Heading>Enviado</Heading> };

function Form() {
    const [state, handleSubmit] = useForm('myyqnoze');

    if (state.submitting) {
        return <Submitting />;
    }
    if (state.succeeded) {
        return <Succeeded />;
    }

    return (
        <>
            <form method="POST" onSubmit={handleSubmit}>
                <Heading mb={10}>Fala Comigo!</Heading>
                <FormControl>
                    <FormHelperText pb={10}>Escreva sua mensagem abaixo. 👇</FormHelperText>
                    <Input variant='flushed' type="email" name="email" placeholder='Seu e-mail.' mb={10} required />
                    <Input variant='flushed' type="text" name="text" placeholder='Sua empresa.' mb={10} />
                    <Textarea variant='flushed' name="message" placeholder='Sua mensagem.' mb={5} required />
                    <Button type='submit' colorScheme='green' mb={25}>Enviar</Button>
                </FormControl>
            </form>
        </>
    );
}

export default Form;
